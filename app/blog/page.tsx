"use client";

import { useEffect, useState } from 'react';
import { safeGetEntries } from '@/lib/contentfulClient';
import { BlogHeader } from '@/app/components/blog/BlogHeader';
import { BlogCardGrid } from '@/app/components/blog/BlogCardGrid';
import { BlogLoadingState, BlogEmptyState } from '@/app/components/blog/BlogEmptyState';

interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    content: any;
    category: string;
    readTime?: string;
    publishedDate?: string;
  };
}

const categories = [
  'All',
  'CA Journey',
  'IFRS Simplified',
  'Strategy & Case Analysis',
  'Excel & Modeling',
  'Admission Strategy',
];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await safeGetEntries({
          content_type: 'zaifearsBlogPost',
          order: '-sys.createdAt',
          limit: 100,
        });
        setPosts(data.items as BlogPost[]);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter(post => post.fields.category === activeCategory);

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <section className="py-20 px-4 md:px-6 bg-linear-to-b from-white to-gray-50 dark:from-black dark:to-zinc-950">
        <div className="max-w-6xl mx-auto">
          <BlogHeader
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            categories={categories}
          />

          {loading ? (
            <BlogLoadingState />
          ) : filteredPosts.length > 0 ? (
            <BlogCardGrid posts={filteredPosts} />
          ) : (
            <BlogEmptyState hasFiltered={posts.length > 0 && filteredPosts.length === 0} />
          )}
        </div>
      </section>
    </main>
  );
}
