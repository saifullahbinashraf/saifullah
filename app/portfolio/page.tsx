import type { Metadata } from 'next';
import { PortfolioSection } from '@/app/components/portfolio/PortfolioSection';
import { ReviewsSection } from '@/app/components/portfolio/ReviewsSection';

export const metadata: Metadata = {
  title: 'Portfolio | Saifullah Bin Ashraf',
  description: 'Explore my portfolio showcasing projects, case studies, and professional work in finance, web development, and entrepreneurship. Featuring successful competition wins and technical innovations.',
  openGraph: {
    title: 'Portfolio - Saifullah Bin Ashraf',
    description: 'Professional portfolio with projects in finance analysis, business competitions, and web development.',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">
      <PortfolioSection />
      <ReviewsSection />
    </main>
  );
}
