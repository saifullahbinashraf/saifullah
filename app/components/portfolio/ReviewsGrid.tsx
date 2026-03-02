"use client";

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export function ReviewsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">Student Reviews</h2>
      <p className="text-gray-700 dark:text-zinc-400 max-w-2xl mx-auto">
        Real feedback from students who have transformed their finance knowledge and career prospects through our programs.
      </p>
    </motion.div>
  );
}

interface Review {
  text: string;
  author: string;
  institution: string;
  rating: number;
}

interface ReviewCardProps {
  review: Review;
  index: number;
}

function ReviewCard({ review, index }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-100 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 rounded-lg p-6 hover:border-yellow-500 transition-colors"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-800 dark:text-zinc-200 mb-4 italic">"{review.text}"</p>
      <div className="border-t border-gray-300 dark:border-zinc-800 pt-4">
        <p className="font-semibold text-black dark:text-white">{review.author}</p>
        <p className="text-sm text-gray-600 dark:text-zinc-400">{review.institution}</p>
      </div>
    </motion.div>
  );
}

interface ReviewsGridProps {
  reviews: Review[];
}

export function ReviewsGrid({ reviews }: ReviewsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {reviews.map((review, index) => (
        <ReviewCard key={review.author} review={review} index={index} />
      ))}
    </div>
  );
}
