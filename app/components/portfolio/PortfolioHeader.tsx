"use client";

import { motion } from 'framer-motion';

export function PortfolioHeader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
        Portfolio{' '}
        <span className="text-gray-500 dark:text-zinc-600">(This Will Differentiate You)</span>
      </h2>
      <p className="text-gray-700 dark:text-zinc-400 max-w-2xl">
        A curated collection of financial models, dashboards, and case competition wins that demonstrate audit credibility and practical expertise.
      </p>
    </motion.div>
  );
}
