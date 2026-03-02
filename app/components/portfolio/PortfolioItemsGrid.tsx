"use client";

import { motion } from 'framer-motion';

interface PortfolioItem {
  title: string;
  role: string;
  tools: string;
  outcome: string;
  learning: string;
}

interface PortfolioItemsGridProps {
  items: PortfolioItem[];
  categoryIndex: number;
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-100 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 rounded-lg p-6 hover:border-blue-600 dark:hover:border-blue-500 transition-colors"
    >
      <h4 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-400">{item.title}</h4>
      <div className="space-y-3 text-sm text-gray-700 dark:text-zinc-300">
        <div>
          <span className="text-gray-600 dark:text-zinc-500">Your Role:</span> {item.role}
        </div>
        <div>
          <span className="text-gray-600 dark:text-zinc-500">Tools:</span> {item.tools}
        </div>
        <div>
          <span className="text-gray-600 dark:text-zinc-500">Outcome:</span> {item.outcome}
        </div>
        <div>
          <span className="text-gray-600 dark:text-zinc-500">Learning:</span> {item.learning}
        </div>
      </div>
    </motion.div>
  );
}

export function PortfolioItemsGrid({
  items,
  categoryIndex,
}: PortfolioItemsGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {items.map((item) => (
        <PortfolioCard key={item.title} item={item} />
      ))}
    </motion.div>
  );
}
