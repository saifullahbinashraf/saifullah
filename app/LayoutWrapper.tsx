'use client'; // This component needs to be a Client Component to check the URL

import { usePathname } from 'next/navigation';
import { Dock } from '@/app/components/Dock';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Check if the current path starts with /bizcomp or /meetup (matches all child routes)
  const isFullScreenPage = pathname.startsWith('/bizcomp') || pathname.startsWith('/meetup');

  return (
    <>
      {isFullScreenPage ? (
        // If we're on a full-screen route, render without dock
        <>{children}</>
      ) : (
        // On all other pages, render the default layout with the dock
        <>
          <main className="p-4 md:p-8 pb-32 md:pb-20">
            {children}
          </main>
          <Dock />
        </>
      )}
    </>
  );
}
