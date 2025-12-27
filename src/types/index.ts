// src/types/index.ts

export interface ChannelUser {
  fid: number;
  username: string;
  displayName: string;
  pfpUrl?: string;
  castCount: number;
  solanaAddress?: string;
  ethAddress?: string;
  neynarUserScore?: number;
}

export interface ChannelActivityData {
  channel: string;
  users: ChannelUser[];
  lastUpdated: string;
}

export interface FarcasterUser {
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
