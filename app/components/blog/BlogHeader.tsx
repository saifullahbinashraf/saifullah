"use client";

import { motion } from 'framer-motion';

interface BlogHeaderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
}

export function BlogHeader({
  activeCategory,
  onCategoryChange,
  categories,
}: BlogHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <h1 className="text-5xl md:text-6xl font-black mb-4 text-black dark:text-white">Weekly Insights</h1>
      <p className="text-gray-700 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
        Strategy, IFRS, Excel modeling, and admission insights — structured finance content for aspiring professionals.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => onCategoryChange(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'border border-gray-400 dark:border-zinc-700 text-gray-800 dark:text-zinc-300 hover:border-gray-600 dark:hover:border-zinc-500'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
