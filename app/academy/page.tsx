import type { Metadata } from 'next';
import { AcademySection } from '@/app/components/portfolio/AcademySection';

export const metadata: Metadata = {
  title: 'Academy | Saifullah Bin Ashraf',
  description: 'Explore my academy - educational resources, courses, and learning materials in finance, accounting, and business strategy. Learn from real-world expertise.',
  openGraph: {
    title: 'Academy - Saifullah Bin Ashraf',
    description: 'Educational content and resources for finance, accounting, and business professionals.',
    type: 'website',
  },
};

export default function AcademyPage() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">
      <AcademySection />
    </main>
  );
}
