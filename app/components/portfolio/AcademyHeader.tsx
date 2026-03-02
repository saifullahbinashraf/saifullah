"use client";

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export function AcademyHeader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
        Prep Academy by{' '}
        <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
          Saifullah Bin Ashraf
        </span>
      </h2>
      <p className="text-gray-700 dark:text-zinc-400 max-w-2xl mx-auto">
        Structured preparation programs designed to build competent finance professionals ready for leadership roles.
      </p>
    </motion.div>
  );
}

export function AcademyCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-16 p-8 bg-gray-100 dark:bg-zinc-900 border-2 border-green-600 rounded-lg text-center"
    >
      <p className="text-gray-800 dark:text-zinc-300 mb-4">Ready to start your finance journey?</p>
      <button className="bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white font-bold px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors">
        <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
        Contact via WhatsApp
      </button>
    </motion.div>
  );
}
