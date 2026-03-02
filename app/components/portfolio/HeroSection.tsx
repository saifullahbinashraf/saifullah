"use client";

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-zinc-900 dark:to-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-black dark:text-white"
        >
          Building Finance Thinkers,{' '}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Not Just Test Takers.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 dark:text-zinc-300 mb-12 leading-relaxed max-w-2xl mx-auto"
        >
          CA Professional Level candidate, competition winner, and founder of Prep Academy — teaching strategy, IFRS, and structured problem solving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
        >
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
            Explore Courses
          </button>
          <button className="px-8 py-3 border-2 border-gray-400 hover:border-gray-300 dark:border-zinc-600 dark:hover:border-zinc-400 text-gray-800 dark:text-white font-semibold rounded-lg transition-colors">
            View Portfolio
          </button>
          <button className="px-8 py-3 border-2 border-gray-400 hover:border-gray-300 dark:border-zinc-600 dark:hover:border-zinc-400 text-gray-800 dark:text-white font-semibold rounded-lg transition-colors">
            Read Insights
          </button>
        </motion.div>
      </div>
    </section>
  );
}
