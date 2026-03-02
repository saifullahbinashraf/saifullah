"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUserGraduate,
  faCogs,
  faEnvelope,
  faFlag,
  faBriefcase,
  faMicrochip,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

interface DockItem {
  href: string;
  name: string;
  icon: any;
  external?: boolean;
}

const dockItems: DockItem[] = [
  { href: '/', name: 'Home', icon: faHome },
  { href: '/academy', name: 'Academy', icon: faUserGraduate },
  { href: '/portfolio', name: 'Portfolio', icon: faBriefcase },
  { href: '/blog', name: 'Insights', icon: faMicrochip },
  { href: '/contact', name: 'Contact', icon: faEnvelope },
];

const isItemActive = (itemHref: string, pathname: string): boolean => {
  if (itemHref === '/') {
    return pathname === '/';
  }
  return pathname.startsWith(itemHref);
};

export function Dock() {
  const pathname = usePathname();

  // Hide dock on full-screen pages
  const isFullScreenPage = pathname.startsWith('/bizcomp') || pathname.startsWith('/meetup');
  
  if (isFullScreenPage) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none"
    >
      <div className="flex justify-center items-end pb-6 px-4">
        <div className="relative pointer-events-auto">
          {/* Glassmorphic background */}
          <div className="absolute inset-0 bg-gray-200/40 dark:bg-black/20 backdrop-blur-xl rounded-3xl border border-gray-300/60 dark:border-white/5" />
          
          {/* Dock content */}
          <nav className="relative px-2 py-3 flex gap-1">
            {dockItems.map((item) => {
              const isActive = isItemActive(item.href, pathname);

              return (
                <Link key={item.name} href={item.href}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative p-3 rounded-2xl transition-all duration-300 flex items-center justify-center ${
                      isActive
                        ? 'bg-gray-300 dark:bg-white/10 text-black dark:text-white'
                        : 'text-gray-600 dark:text-white/40 hover:text-gray-800 dark:hover:text-white/60'
                    }`}
                    title={item.name}
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="dockIndicator"
                        className="absolute inset-0 rounded-2xl bg-gray-300/50 dark:bg-white/5"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </motion.div>
  );
}
