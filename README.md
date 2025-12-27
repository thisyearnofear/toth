# TOTH: Token Fee Sharing for Farcaster Builders

A Solana-based token launch initiative that shares fees with the 40 most active participants in the `/solana` and `/degen` channels on Farcaster.

## Vision

Launch the TOTH coin on Solana using the BAGS protocol for fee sharing. Reward the top 40 users from each of two Farcaster channels, recognizing their contributions to community engagement and Solana onboarding efforts.

**Long-term goal:** Build mini-apps that give TOTH token holders utility, celebrating users who bring Solana builders to Farcaster.

## Setup

### Environment Variables

Create `.env.local` with your Neynar API key:

```env
NEYNAR_API_KEY=your_api_key_here
```

Get your API key from [dev.neynar.com](https://dev.neynar.com)

## Generate User List

Use the standalone script to fetch the latest top 40 users from each channel and export to CSV:

```bash
bun fetch-channel-users.ts
```

This creates three CSV files:
- `solana-top-40.csv` - Top 40 users from /solana channel
- `degen-top-40.csv` - Top 40 users from /degen channel
- `toth-all-users.csv` - Combined unique users (79 total)

### CSV Columns

- **Rank** - Position in the list
- **FID** - Farcaster ID
- **Username** - Farcaster username
- **Display Name** - User's display name
- **Cast Count** - Number of casts in the channel
- **Solana Address** - Verified Solana wallet address
- **ETH Address** - Verified Ethereum wallet address
- **Neynar Score** - User quality score (0-1)

## How It Works

1. **Script** fetches casts from specified channel using Neynar Feed API
2. **Aggregates** cast counts by author FID
3. **Ranks** by most active (cast count) over recent period
4. **Fetches** full user details including verified wallet addresses
5. **Exports** to CSV with all addresses for token distribution

### Activity Metric

- **Cast count** - Total number of casts from the user in the channel
- Identifies consistent, active community members
- Most recent casts weighted more in the Neynar ranking

## Web App

Static landing page with embedded CodePen integrations:
- TopHatEmbed - Displays brand/logo
- BaseGlobeEmbed - Interactive globe visualization

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
bun run build
bun start
```

## Core Principles

- **ENHANCEMENT FIRST** - Extend existing components rather than creating duplicates
- **AGGRESSIVE CONSOLIDATION** - Remove dead code immediately
- **PREVENT BLOAT** - Audit before adding features
- **DRY** - Single source of truth
- **CLEAN** - Clear separation of concerns
- **MODULAR** - Composable, testable components
- **PERFORMANT** - Optimize loading and caching
- **ORGANIZED** - Domain-driven design

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Landing page
│   └── layout.tsx         # Root layout
├── components/
│   ├── Header.tsx         # Nav header
│   ├── Footer.tsx         # Footer
│   ├── TopHatEmbed.tsx    # CodePen embed
│   ├── BaseGlobeEmbed.tsx # CodePen embed
│   └── magicui/           # UI animations
└── utils/
    └── csvExport.ts       # CSV export helper
fetch-channel-users.ts     # Standalone script for user export
```

## Next Steps

1. Run the script to generate CSVs with Solana addresses
2. Deploy TOTH token on Solana using BAGS protocol
3. Configure fee-sharing to the 79 unique wallet addresses
4. Announce to community on Farcaster

## Notes

- Script requires internet connection to reach Neynar API
- API key is only stored locally in `.env.local` (never committed)
- CSV generation is one-time; results cached in files
- To update user list, simply run the script again
