import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Saifullah Bin Ashraf',
  description: 'Read insights on Chartered Accountancy, IFRS, business strategy, Excel modeling, and admission preparation. Explore financial analysis and professional development content.',
  openGraph: {
    title: 'Blog - Saifullah Bin Ashraf',
    description: 'Financial insights, CA journey, IFRS simplification, and business strategy analysis.',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
