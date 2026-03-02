"use client";

import { PortfolioSection } from '@/app/components/portfolio/PortfolioSection';
import { ReviewsSection } from '@/app/components/portfolio/ReviewsSection';

export default function PortfolioPage() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">
      <PortfolioSection />
      <ReviewsSection />
    </main>
  );
}
