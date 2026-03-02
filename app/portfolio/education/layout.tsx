import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education & Certifications | Saifullah Bin Ashraf',
  description: 'View my educational background including Chartered Accountancy (CA), BBA in Finance & Banking, and professional certifications. Learn about my academic achievements and ongoing studies.',
  openGraph: {
    title: 'Education & Certifications - Saifullah Bin Ashraf',
    description: 'Chartered Accountancy, BBA Finance & Banking, and professional credentials.',
    type: 'website',
  },
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
