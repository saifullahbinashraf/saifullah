"use client";

import { useState } from 'react';
import { ReviewsHeader, ReviewsGrid } from './ReviewsGrid';

const reviews = [
  {
    text: "Saifullah's approach to IFRS made complex concepts simple and intuitive. His structured teaching methodology helped me secure admission to IBA.",
    author: 'Ahmed Khan',
    institution: 'IBA Student, Class of 2024',
    rating: 5,
  },
  {
    text: 'The structured problem-solving framework completely changed how I approach case competitions. From getting rejected to being a finalist!',
    author: 'Fatima Ahmed',
    institution: 'BUP Commerce, Competition Runner-up',
    rating: 5,
  },
  {
    text: "Financial modeling concepts that seemed impossible became crystal clear. His hands-on approach with real-world examples is unmatched.",
    author: 'Md. Rafiq',
    institution: 'Finance Professional, KPMG',
    rating: 5,
  },
  {
    text: "The Excel for Commerce course is a game-changer. I went from struggling with formulas to creating professional dashboards in 4 weeks.",
    author: 'Nadia Akter',
    institution: 'Dhaka University Commerce Student',
    rating: 5,
  },
  {
    text: "His strategy insights for admission preparation were invaluable. The personalized feedback and mentoring made all the difference.",
    author: 'Hassan Mahmud',
    institution: 'IBA Admission 2024',
    rating: 5,
  },
  {
    text: "Clearly one of the best finance educators in Bangladesh. Technical depth combined with practical wisdom - highly recommend!",
    author: 'Dr. Priya Dutta',
    institution: 'Economics Professor, BUP',
    rating: 5,
  },
];

export function ReviewsSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    review: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Review submitted:', formData);
    setFormData({ name: '', email: '', institution: '', review: '' });
    alert('Thank you for your review! We appreciate your feedback.');
  };

  return (
    <section className="py-20 px-4 md:px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <ReviewsHeader />
        <ReviewsGrid reviews={reviews} />

        <div className="bg-gray-50 dark:bg-gradient-to-r dark:from-zinc-900 dark:to-black border border-gray-300 dark:border-zinc-800 rounded-lg p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Share Your Review</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded px-4 py-2 text-black dark:text-white placeholder-gray-500 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded px-4 py-2 text-black dark:text-white placeholder-gray-500 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Your Institution"
              value={formData.institution}
              onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
              className="w-full bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded px-4 py-2 text-black dark:text-white placeholder-gray-500 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500"
            />
            <textarea
              placeholder="Your testimonial... (Be specific about how this course/program helped you)"
              value={formData.review}
              onChange={(e) => setFormData({ ...formData, review: e.target.value })}
              required
              rows={5}
              className="w-full bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded px-4 py-2 text-black dark:text-white placeholder-gray-500 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 resize-none"
            />
            <button
              type="submit"
              className="bg-blue-600 dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition-colors"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
