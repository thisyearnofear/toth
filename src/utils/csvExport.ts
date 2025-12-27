// src/utils/csvExport.ts
import { ChannelUser } from '@/types/index';

/**
 * Converts an array of ChannelUser objects to CSV format and triggers download
 */
export const exportToCsv = (users: ChannelUser[], filename: string): void => {
  const headers = ['Rank', 'FID', 'Username', 'Display Name', 'Cast Count', 'Solana Address', 'ETH Address', 'User Score'];
  
  const csvContent = [
    headers.join(','),
    ...users.map((user, idx) => [
      idx + 1,
      user.fid,
      `"${user.username}"`,
      `"${user.displayName || ''}"`,
      user.castCount,
      `"${user.solanaAddress || ''}"`,
      `"${user.ethAddress || ''}"`,
      user.neynarUserScore?.toFixed(3) || 'N/A',
    ].join(',')),
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
