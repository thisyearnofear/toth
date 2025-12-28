// src/data/hat-tips-allocations.ts
/**
 * Hat Tips allocation list - recognition for key community contributors
 * Remaining supply distributed to top 79 users at 1% each
 */

export interface HatTip {
  username: string;
  solanaAddress: string;
  percentage: number;
  pfpUrl?: string;
  notes?: string;
}

export const HAT_TIPS: HatTip[] = [
  {
    username: 'papa',
    solanaAddress: '8H3aBQY7woQDq56fZmn8z5bDAK9qLeryMDaM3YSz1HFJ',
    percentage: 9,
    pfpUrl: 'https://i.imgur.com/Xwh7VQz.gif',
    notes: '50% allocated for community rewards',
  },
  {
    username: 'leovido.eth',
    solanaAddress: 'FxAiqjU3Hbee863f9PxDwm5xaaf1NC1XFNW3o46EnM7p',
    percentage: 3,
    pfpUrl: 'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/f64d9eb4-e0b4-4b60-7fca-37a5e3a43600/original',
  },
  {
    username: 'zinger',
    solanaAddress: '6qemckK3fajDuKhVNyvRxNd9a3ubFXxMWkHSEgMVxxov',
    percentage: 3,
    pfpUrl: 'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/0fb9bc94-f90a-4558-90d3-621d4bb29300/original',
  },
  {
    username: 'quillingqualia.eth',
    solanaAddress: '5KafK7u67x6egWWbBzPex6yyJmF2LJTAfG7JujTCAC2K',
    percentage: 3,
    pfpUrl: 'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/cb019708-430f-4cc9-e70a-ce013db9ab00/original',
  },
  {
    username: 'junyboy.eth',
    solanaAddress: 'DCHqFbsTnqY3pss6L32LmtdpcjLaY4SJsFNMizLtq949',
    percentage: 2,
    pfpUrl: 'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/0b9a3d6a-3ba8-4103-4c6f-3693e00cda00/original',
  },
  {
    username: 'jacek',
    solanaAddress: '7MrhfthztJXyv2bM15NWQeQfrX2JgWhwAvVCgywQaYwq',
    percentage: 2,
    pfpUrl: 'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/e5a82e5f-dfaf-4446-0d34-11afd0786e00/original',
  },
];

export const ALLOCATION_SUMMARY = {
  hatTipsTotal: HAT_TIPS.reduce((sum, user) => sum + user.percentage, 0),
  topUsersPercentage: 1,
  topUsersCount: 78,
  topUsersTotal: 78 * 1,
};
