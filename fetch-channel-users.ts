#!/usr/bin/env bun
/**
 * Standalone script to fetch top 40 users from Farcaster channels and export to CSV
 * Run with: bun fetch-channel-users.ts
 */

import { readFileSync } from 'fs';
import { writeFileSync } from 'fs';
import { join } from 'path';

const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY;
const NEYNAR_BASE_URL = 'https://api.neynar.com/v2/farcaster';

interface NeynarCast {
  object: string;
  hash: string;
  author: {
    fid: number;
    username: string;
  };
  timestamp: string;
}

interface NeynarFeedResponse {
  casts: NeynarCast[];
  next?: {
    cursor: string;
  };
}

interface FarcasterUser {
  object: string;
  fid: number;
  username: string;
  display_name: string;
  pfp_url?: string;
  verified_addresses?: {
    eth_addresses?: string[];
    sol_addresses?: string[];
  };
  experimental?: {
    neynar_user_score?: number;
  };
}

interface ChannelUser {
  fid: number;
  username: string;
  displayName: string;
  castCount: number;
  solanaAddress?: string;
  ethAddress?: string;
  neynarUserScore?: number;
}

async function fetchChannelCasts(
  channelId: string,
  cursor?: string
): Promise<NeynarFeedResponse> {
  const params = new URLSearchParams({
    feed_type: 'filter',
    filter_type: 'channel_id',
    channel_id: channelId,
    limit: '100',
    ...(cursor && { cursor }),
  });

  const response = await fetch(
    `${NEYNAR_BASE_URL}/feed?${params.toString()}`,
    {
      headers: {
        'x-api-key': NEYNAR_API_KEY!,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Neynar API error: ${response.statusText}`);
  }

  return response.json();
}

async function fetchUserDetails(fids: number[]): Promise<FarcasterUser[]> {
  if (fids.length === 0) return [];

  const params = new URLSearchParams({
    fids: fids.join(','),
  });

  const response = await fetch(
    `${NEYNAR_BASE_URL}/user/bulk?${params.toString()}`,
    {
      headers: {
        'x-api-key': NEYNAR_API_KEY!,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Neynar bulk user fetch error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.users || [];
}

function convertToChannelUser(user: FarcasterUser, castCount: number): ChannelUser {
  const solAddresses = user.verified_addresses?.sol_addresses || [];
  const ethAddresses = user.verified_addresses?.eth_addresses || [];

  return {
    fid: user.fid,
    username: user.username,
    displayName: user.display_name,
    castCount,
    solanaAddress: solAddresses[0],
    ethAddress: ethAddresses[0],
    neynarUserScore: user.experimental?.neynar_user_score,
  };
}

async function fetchChannelUsers(channel: string): Promise<ChannelUser[]> {
  console.log(`\n📡 Fetching top 40 users from /${channel}...`);

  const authorCastCounts: { [fid: number]: number } = {};
  let cursor: string | undefined;
  let iterations = 0;
  const maxIterations = 10;

  while (
    Object.keys(authorCastCounts).length < 100 &&
    iterations < maxIterations
  ) {
    const feedData = await fetchChannelCasts(channel, cursor);

    if (!feedData.casts || feedData.casts.length === 0) {
      break;
    }

    for (const cast of feedData.casts) {
      const fid = cast.author.fid;
      authorCastCounts[fid] = (authorCastCounts[fid] || 0) + 1;
    }

    if (Object.keys(authorCastCounts).length >= 50) {
      break;
    }

    if (!feedData.next?.cursor) {
      break;
    }

    cursor = feedData.next.cursor;
    iterations++;

    console.log(`  ⏳ Loaded ${Object.keys(authorCastCounts).length} unique users...`);
  }

  const topFids = Object.entries(authorCastCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 40)
    .map(([fid]) => parseInt(fid, 10));

  if (topFids.length === 0) {
    throw new Error(`No users found in /${channel} channel`);
  }

  console.log(`  ✅ Found ${topFids.length} top users, fetching details...`);

  // Fetch full user details in batches
  const batchSize = 25;
  const allUsers: FarcasterUser[] = [];

  for (let i = 0; i < topFids.length; i += batchSize) {
    const batch = topFids.slice(i, i + batchSize);
    const users = await fetchUserDetails(batch);
    allUsers.push(...users);
  }

  const channelUsers: ChannelUser[] = allUsers
    .map((user) => convertToChannelUser(user, authorCastCounts[user.fid] || 0))
    .sort((a, b) => b.castCount - a.castCount)
    .slice(0, 40);

  return channelUsers;
}

function exportToCsv(users: ChannelUser[], filename: string) {
  const headers = [
    'Rank',
    'FID',
    'Username',
    'Display Name',
    'Cast Count',
    'Solana Address',
    'ETH Address',
    'Neynar Score',
  ];

  const rows = users.map((user, idx) => [
    idx + 1,
    user.fid,
    user.username,
    user.displayName,
    user.castCount,
    user.solanaAddress || '',
    user.ethAddress || '',
    user.neynarUserScore?.toFixed(3) || 'N/A',
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map((row) =>
      row
        .map((cell) => {
          const str = String(cell);
          return str.includes(',') || str.includes('"')
            ? `"${str.replace(/"/g, '""')}"`
            : str;
        })
        .join(',')
    ),
  ].join('\n');

  writeFileSync(filename, csvContent);
  console.log(`\n✅ Exported to ${filename}`);
}

async function main() {
  if (!NEYNAR_API_KEY) {
    throw new Error(
      'NEYNAR_API_KEY not set. Create .env.local with NEYNAR_API_KEY=...'
    );
  }

  console.log('🎯 TOTH Channel Users Export');
  console.log('='.repeat(60));

  const solanaUsers = await fetchChannelUsers('solana');
  const degenUsers = await fetchChannelUsers('degen');

  // Export individual channel files
  exportToCsv(solanaUsers, 'solana-top-40.csv');
  exportToCsv(degenUsers, 'degen-top-40.csv');

  // Combine and export
  const combined = [...solanaUsers, ...degenUsers];
  const unique = Array.from(new Map(combined.map((u) => [u.fid, u])).values());
  exportToCsv(unique, 'toth-all-users.csv');

  // Summary stats
  console.log('\n' + '='.repeat(60));
  console.log('📊 Summary:');
  console.log(`  /solana: ${solanaUsers.length} users`);
  console.log(
    `    └─ With Solana address: ${solanaUsers.filter((u) => u.solanaAddress).length}`
  );
  console.log(`  /degen: ${degenUsers.length} users`);
  console.log(
    `    └─ With Solana address: ${degenUsers.filter((u) => u.solanaAddress).length}`
  );
  console.log(`  Total unique: ${unique.length} users`);
  console.log(
    `    └─ With Solana address: ${unique.filter((u) => u.solanaAddress).length}`
  );
  console.log('\n✨ CSV files ready for BAGS token deployment');
}

main().catch((error) => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});
