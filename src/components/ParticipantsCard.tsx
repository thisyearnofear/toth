// src/components/ParticipantsCard.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TOP_80_PARTICIPANTS, PARTICIPANTS_SUMMARY } from '@/data/top-80-participants';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ParticipantsCard: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const solanaUsers = TOP_80_PARTICIPANTS.filter(p => p.channel === 'solana');
  const degenUsers = TOP_80_PARTICIPANTS.filter(p => p.channel === 'degen');

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto mb-12 p-6 bg-white rounded-lg border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left focus:outline-none"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              80 Community Participants
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Top contributors from /solana ({PARTICIPANTS_SUMMARY.solanaCount}) and /degen ({PARTICIPANTS_SUMMARY.degenCount}) channels
            </p>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </div>
      </button>

      {/* Summary badges */}
      <div className="flex gap-3 mt-4 mb-4">
        <div className="px-3 py-1 bg-blue-50 rounded-full border border-blue-200">
          <p className="text-xs font-medium text-blue-700">
            {PARTICIPANTS_SUMMARY.solanaCount} /solana
          </p>
        </div>
        <div className="px-3 py-1 bg-purple-50 rounded-full border border-purple-200">
          <p className="text-xs font-medium text-purple-700">
            {PARTICIPANTS_SUMMARY.degenCount} /degen
          </p>
        </div>
        <div className="px-3 py-1 bg-green-50 rounded-full border border-green-200">
          <p className="text-xs font-medium text-green-700">
            {PARTICIPANTS_SUMMARY.withSolanaAddress} with Solana addresses
          </p>
        </div>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 border-t border-gray-200 pt-6 space-y-6"
          >
            {/* Solana channel */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-blue-600">◎</span> /solana channel
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-96 overflow-y-auto">
                {solanaUsers.map((user, idx) => (
                  <motion.a
                    key={user.fid}
                    href={`https://warpcast.com/${user.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-50 rounded-lg text-sm hover:bg-blue-100 transition-colors flex gap-3 items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.02 }}
                  >
                    {user.pfpUrl && (
                      <Image
                        src={user.pfpUrl}
                        alt={user.username}
                        width={36}
                        height={36}
                        className="rounded-full flex-shrink-0 mt-0.5"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-blue-700 hover:text-blue-900">
                        #{user.rank} @{user.username}
                      </p>
                      <p className="text-xs text-gray-600 mt-1 font-mono truncate">
                        {user.solanaAddress}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Degen channel */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-purple-600">🧠</span> /degen channel
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-96 overflow-y-auto">
                {degenUsers.map((user, idx) => (
                  <motion.a
                    key={user.fid}
                    href={`https://warpcast.com/${user.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-purple-50 rounded-lg text-sm hover:bg-purple-100 transition-colors flex gap-3 items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.02 }}
                  >
                    {user.pfpUrl && (
                      <Image
                        src={user.pfpUrl}
                        alt={user.username}
                        width={36}
                        height={36}
                        className="rounded-full flex-shrink-0 mt-0.5"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-purple-700 hover:text-purple-900">
                        #{user.rank} @{user.username}
                      </p>
                      <p className="text-xs text-gray-600 mt-1 font-mono truncate">
                        {user.solanaAddress || 'No address linked'}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ParticipantsCard;
