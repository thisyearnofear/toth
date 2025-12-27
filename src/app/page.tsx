// src/app/page.tsx

"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopHatEmbed from "@/components/TopHatEmbed";
import BaseGlobeEmbed from "@/components/BaseGlobeEmbed";
import HatTipsCard from "@/components/HatTipsCard";
import ParticipantsCard from "@/components/ParticipantsCard";
import { motion } from "framer-motion";

const Tagline = () => (
  <motion.div
    className="w-full text-center py-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
      TOTH: Rewarding Solana Onboarding
    </h2>
    <p className="text-gray-600 text-sm mt-3 max-w-2xl mx-auto">
      A token launch that recognizes the most active Farcaster community members in Solana and Degen spaces. 
      Participants are rewarded for driving conversations and adoption via the BAGS fee-sharing system.
    </p>
  </motion.div>
);

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-4 bg-background">
      <Header />
      <TopHatEmbed />
      <Tagline />
      <HatTipsCard />
      <ParticipantsCard />
      <Footer />
      <BaseGlobeEmbed />
    </main>
  );
}
