"use client";

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';

interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
  };
  fields: {
    title: string;
    category: string;
    excerpt: string;
    readTime?: string;
    publishedDate?: string;
  };
}

interface BlogCardGridProps {
  posts: BlogPost[];
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const postDate = post.fields.publishedDate
    ? new Date(post.fields.publishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : new Date(post.sys.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-gray-100 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 rounded-lg overflow-hidden hover:border-blue-600 dark:hover:border-blue-500 transition-all group cursor-pointer"
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 text-xs text-gray-600 dark:text-zinc-400">
          <span className="bg-blue-100 dark:bg-blue-600 dark:bg-opacity-20 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full">
            {post.fields.category || 'Finance'}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-3 text-black dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
          {post.fields.title}
        </h3>

        <p className="text-gray-700 dark:text-zinc-300 mb-4 line-clamp-2">{post.fields.excerpt}</p>

        <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-zinc-400 mb-4 pb-4 border-b border-gray-300 dark:border-zinc-800">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faCalendar} className="w-3 h-3" />
            {postDate}
          </div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
            {post.fields.readTime || '5 min read'}
          </div>
        </div>

        <button className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-2 font-semibold transition-colors">
          Read Article
          <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.article>
  );
}

export function BlogCardGrid({ posts }: BlogCardGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <BlogCard key={post.sys.id} post={post} index={index} />
      ))}
    </div>
  );
}
