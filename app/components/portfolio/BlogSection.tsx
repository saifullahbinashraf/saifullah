"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';

const blogPosts = [
  {
    title: 'From CA Aspirant to Competition Winner: My Strategy',
    category: 'CA Journey',
    date: 'Feb 28, 2025',
    readTime: '8 min read',
    excerpt: 'The framework I used to go from struggling with CA concepts to winning national competitions. Learn the exact system that delivered results.',
    content: 'Full article content here...',
  },
  {
    title: 'IFRS 15: Revenue Recognition Simplified',
    category: 'IFRS Simplified',
    date: 'Feb 25, 2025',
    readTime: '6 min read',
    excerpt: 'Revenue under IFRS 15 confuses most students. Here\'s the 5-step framework I use to teach thousands of aspiring accountants.',
    content: 'Full article content here...',
  },
  {
    title: 'Winning Case Competitions: The Excel Advantage',
    category: 'Strategy & Case Analysis',
    date: 'Feb 20, 2025',
    readTime: '10 min read',
    excerpt: 'Why Excel mastery is the hidden advantage in case competitions. Walk through my championship-winning model with step-by-step breakdown.',
    content: 'Full article content here...',
  },
  {
    title: 'Advanced Excel Formulas Every Finance Student Should Know',
    category: 'Excel & Modeling',
    date: 'Feb 18, 2025',
    readTime: '7 min read',
    excerpt: 'Move beyond VLOOKUP. Learn the 10 power formulas that will make your financial models bulletproof.',
    content: 'Full article content here...',
  },
  {
    title: 'IBA Admission Strategy: Beyond the Exam Score',
    category: 'Admission Strategy',
    date: 'Feb 15, 2025',
    readTime: '9 min read',
    excerpt: 'Top exam score isn\'t enough for IBA. Here\'s what admissions actually looks for and how to position yourself.',
    content: 'Full article content here...',
  },
  {
    title: 'DCF Valuation: Why Discount Rates Matter More Than Growth',
    category: 'IFRS Simplified',
    date: 'Feb 10, 2025',
    readTime: '11 min read',
    excerpt: 'Most students get DCF valuation wrong because they focus on the wrong input. Here\'s the truth about discount rates.',
    content: 'Full article content here...',
  },
];

const categories = [
  'All',
  'CA Journey',
  'IFRS Simplified',
  'Strategy & Case Analysis',
  'Excel & Modeling',
  'Admission Strategy',
];

function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-blue-500 transition-all group cursor-pointer"
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 text-xs text-zinc-400">
          <span className="bg-blue-600 bg-opacity-20 text-blue-400 px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
          {post.title}
        </h3>

        <p className="text-zinc-300 mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 text-xs text-zinc-400 mb-4 pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faCalendar} className="w-3 h-3" />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
            {post.readTime}
          </div>
        </div>

        <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-semibold transition-colors">
          Read Article
          <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.article>
  );
}

export function BlogSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section className="py-20 px-6 bg-linear-to-b from-black to-zinc-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Weekly Insights
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            Strategy, IFRS, Excel modeling, and admission insights — becoming one of the few Bangladeshi students writing structured finance content.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'border border-zinc-700 text-zinc-300 hover:border-zinc-500'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.title} post={post} index={index} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-zinc-400">No posts in this category yet. Check back soon!</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
            View All Articles
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
