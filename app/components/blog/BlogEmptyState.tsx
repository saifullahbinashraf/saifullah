"use client";

import { motion } from 'framer-motion';

export function BlogLoadingState() {
  return (
    <div className="text-center py-12">
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="inline-block"
      >
        <p className="text-gray-700 dark:text-zinc-400">Loading articles...</p>
      </motion.div>
    </div>
  );
}

export function BlogEmptyState({ hasFiltered }: { hasFiltered: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-12"
    >
      <p className="text-gray-700 dark:text-zinc-400">
        {hasFiltered
          ? 'No posts in this category. Try another category!'
          : 'No articles published yet. Check back soon!'}
      </p>
    </motion.div>
  );
}
