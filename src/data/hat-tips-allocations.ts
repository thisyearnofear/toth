// src/data/hat-tips-allocations.ts
/**
 * Hat Tips allocation list - recognition for key community contributors
 * Remaining supply distributed to top 79 users at 1% each
 */

export interface HatTip {
  username: string;
  solanaAddress: string;
  percentage: number;
  notes?: string;
}

export const HAT_TIPS: HatTip[] = [
  {
    username: 'papa',
    solanaAddress: '8H3aBQY7woQDq56fZmn8z5bDAK9qLeryMDaM3YSz1HFJ',
    percentage: 8,
    notes: '50% allocated for community rewards',
  },
  {
    username: 'leovido.eth',
    solanaAddress: 'FxAiqjU3Hbee863f9PxDwm5xaaf1NC1XFNW3o46EnM7p',
    percentage: 3,
  },
  {
    username: 'zinger',
    solanaAddress: '6qemckK3fajDuKhVNyvRxNd9a3ubFXxMWkHSEgMVxxov',
    percentage: 3,
  },
  {
    username: 'quillingqualia.eth',
    solanaAddress: '5KafK7u67x6egWWbBzPex6yyJmF2LJTAfG7JujTCAC2K',
    percentage: 3,
  },
  {
    username: 'junyboy.eth',
    solanaAddress: 'DCHqFbsTnqY3pss6L32LmtdpcjLaY4SJsFNMizLtq949',
    percentage: 2,
  },
  {
    username: 'jacek',
    solanaAddress: '7MrhfthztJXyv2bM15NWQeQfrX2JgWhwAvVCgywQaYwq',
    percentage: 2,
  },
];

export const ALLOCATION_SUMMARY = {
  hatTipsTotal: HAT_TIPS.reduce((sum, user) => sum + user.percentage, 0),
  topUsersPercentage: 1,
  topUsersCount: 79,
  topUsersTotal: 79 * 1,
};
