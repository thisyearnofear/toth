// src/components/HatTipsCard.tsx
import React from 'react';
import { HAT_TIPS, ALLOCATION_SUMMARY } from '@/data/hat-tips-allocations';
import { motion } from 'framer-motion';

const HatTipsCard: React.FC = () => {
  return (
    <motion.div
      className="w-full max-w-4xl mx-auto mb-12 p-6 bg-white rounded-lg border border-purple-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          🎩 Hat Tips
        </h3>
        <p className="text-sm text-gray-600">
          Community recognition for key contributors
        </p>
      </div>

      <div className="space-y-3 mb-6">
        {HAT_TIPS.map((user, idx) => (
          <motion.div
            key={user.solanaAddress}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="flex-1">
              <p className="font-semibold text-gray-900">@{user.username}</p>
              <p className="text-xs text-gray-500 font-mono mt-1">
                {user.solanaAddress}
              </p>
              {user.notes && (
                <p className="text-xs text-gray-600 mt-2 italic">{user.notes}</p>
              )}
            </div>
            <div className="text-right ml-4">
              <p className="text-lg font-bold text-purple-600">
                {user.percentage}%
              </p>
              <p className="text-xs text-gray-500">of supply</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-600">Hat Tips Total</p>
            <p className="text-2xl font-bold text-purple-600">
              {ALLOCATION_SUMMARY.hatTipsTotal}%
            </p>
          </div>
          <div>
            <p className="text-gray-600">Top 79 Users</p>
            <p className="text-2xl font-bold text-blue-600">
              {ALLOCATION_SUMMARY.topUsersTotal}%
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Remaining supply distributed as {ALLOCATION_SUMMARY.topUsersPercentage}% each to top
          {' '}
          {ALLOCATION_SUMMARY.topUsersCount}
          {' '}
          channel participants
        </p>
      </div>
    </motion.div>
  );
};

export default HatTipsCard;
