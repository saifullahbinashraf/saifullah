"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faBriefcase,
  faCode,
  faLightbulb,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Weather } from './components/Weather';

// Live clock component
function LiveTime() {
  const [time, setTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formatTwoDigits = (num: number) => num.toString().padStart(2, '0');
  
  let hours = time.getHours();
  const minutes = formatTwoDigits(time.getMinutes());
  const seconds = formatTwoDigits(time.getSeconds());
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;

  if (!isClient) {
    return <div className="text-gray-500 dark:text-zinc-400 animate-pulse">--:-- --</div>;
  }

  return (
    <div className="text-gray-600 dark:text-zinc-400 font-mono">
      {formatTwoDigits(hours)}:{minutes} {ampm}
    </div>
  );
}

// Bento grid card component
function BentoCard({
  title,
  description,
  icon,
  href,
  className = "col-span-1 row-span-1",
  children,
  gradient = false,
}: {
  title: string;
  description: string;
  icon: any;
  href: string;
  className?: string;
  children?: React.ReactNode;
  gradient?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <Link href={href}>
        <div
          className={`relative h-full p-6 rounded-2xl border border-white/10 dark:border-white/5 backdrop-blur-xl transition-all duration-300 hover:border-white/20 dark:hover:border-white/10 overflow-hidden group cursor-pointer ${
            gradient
              ? 'bg-linear-to-br from-white/10 to-white/5 dark:from-white/5 dark:to-white/0'
              : 'bg-white/5 dark:bg-white/5'
          }`}
        >
          {/* Background blur effect */}
          <div className="absolute inset-0 bg-white/0 dark:bg-white/0 group-hover:bg-white/5 dark:group-hover:bg-white/2 transition-colors duration-300" />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {children ? (
              children
            ) : (
              <>
                <div className="text-3xl mb-3 text-gray-600 dark:text-white/60 group-hover:text-gray-800 dark:group-hover:text-white/80 transition-colors duration-300">
                  <FontAwesomeIcon icon={icon} />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">{title}</h3>
                <p className="text-gray-700 dark:text-white/50 text-sm grow">{description}</p>
                <div className="mt-4 flex items-center gap-2 text-gray-600 dark:text-white/60 group-hover:text-gray-800 dark:group-hover:text-white/80 transition-colors duration-300">
                  <span className="text-sm font-medium">Explore</span>
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 4 }}
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                  </motion.span>
                </div>
              </>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Achievement slides data
const achievements = [
  { title: 'Finance Professional' },
  { title: 'ICAB Professional Level (12/17 cleared)' },
  { title: 'National Competition Winner' },
  { title: 'Taught 350+ Students' },
];

function InlineAchievementsSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % achievements.length);
  }, []);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: { y: 20, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  const item = achievements[current];

  return (
    <div className="relative overflow-hidden w-full h-10 md:h-12 flex items-center justify-center md:justify-start">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.20, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center md:justify-start w-full"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-700 dark:text-white/70 whitespace-nowrap">
            {item.title}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="min-h-[80vh] grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-8 max-w-7xl mx-auto gap-1 md:gap-12"
        >
          {/* Time and Weather widgets */}
          <motion.div variants={itemVariants} className="order-1 md:col-start-1 md:row-start-1 flex flex-row items-center gap-4 md:gap-12 justify-center md:justify-start text-xs md:text-sm">
            <div className="flex items-center">
              <LiveTime />
            </div>
            <div className="flex items-center">
              <Weather />
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div variants={itemVariants} className="order-2 md:order-0 md:col-start-2 md:row-start-1 md:row-span-3 flex flex-col items-center md:items-end relative">
            <div className="relative w-full max-w-48 sm:max-w-xs md:max-w-md h-56 sm:h-80 md:h-125">
              
              {/* Rotating blue ring */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 md:w-110 md:h-110 -z-10 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                {/* Ring parts */}
                <div className="absolute inset-0 rounded-full border-t-4 border-blue-500/60" />
                <div className="absolute inset-0 rounded-full border-r-4 border-blue-400/40" style={{ transform: "rotate(120deg)" }} />
                <div className="absolute inset-0 rounded-full border-b-4 border-blue-600/50" style={{ transform: "rotate(240deg)" }} />
              </motion.div>

              {/* Smooth rotating circle behind the image */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-60 sm:h-60 md:w-96 md:h-96 -z-20"
                style={{
                  animation: 'spin 20s linear infinite',
                }}
              >
                <div className="w-full h-full rounded-full bg-linear-to-br from-blue-300/50 via-cyan-200/40 to-blue-400/50 dark:from-blue-500/30 dark:via-cyan-400/20 dark:to-blue-600/30 blur-2xl" />
              </div>
              
              <Image
                src="/saifullah-heroimage.png"
                alt="Saifullah Bin Ashraf"
                fill
                className="object-contain drop-shadow-2xl relative z-10"
                priority
              />
              
              {/* Ground line directly attached to image */}
              <div className="absolute bottom-0 left-[-20%] right-[-20%] h-1 bg-linear-to-r from-transparent via-blue-500/50 to-transparent z-20 md:hidden" />
            </div>
            {/* Removed the standalone divider since it's now integrated inside the image container */}
          </motion.div>

          {/* Main headline */}
          <motion.div variants={itemVariants} className="order-3 md:col-start-1 md:row-start-2 flex flex-col items-center md:items-start text-center md:text-left w-full">
            <h1 className="font-black leading-[0.9] tracking-tighter hero-gradient-text mb-4 md:mb-6 text-center md:text-left w-full">
              <span className="block text-6xl sm:text-8xl md:text-7xl lg:text-8xl xl:text-9xl">SAIFULLAH</span>
              <span className="block text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 md:mt-4 tracking-tight">Bin Ashraf Mahi</span>
            </h1>
            {/* Inline achievements slider */}
            <InlineAchievementsSlider />
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="order-4 md:col-start-1 md:row-start-3 flex justify-center md:justify-start">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-200 dark:bg-white/10 border border-gray-400 dark:border-white/10 rounded-xl text-black dark:text-white font-semibold backdrop-blur-xl hover:bg-gray-300 dark:hover:bg-white/15 transition-all duration-300 flex items-center gap-3 group"
              >
                Get in touch
                <motion.span whileHover={{ x: 4 }}>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.section>

        {/* Main Services Section - 3 Pages */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          className="px-4 md:px-8 max-w-7xl mx-auto py-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-black mb-12 text-black dark:text-white text-center"
          >
            Explore My Work
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Explore Courses */}
            <motion.div variants={itemVariants}>
              <Link href="/academy">
                <div className="relative h-full min-h-80 p-8 rounded-2xl border border-gray-300 dark:border-white/5 backdrop-blur-xl transition-all duration-300 hover:border-green-600 dark:hover:border-green-500/30 overflow-hidden group cursor-pointer bg-linear-to-br from-green-100 to-green-50 dark:from-green-500/5 dark:to-green-500/0 hover:bg-linear-to-br hover:from-green-200 hover:to-green-100 dark:hover:from-green-500/20 dark:hover:to-green-500/10">
                  <div className="absolute inset-0 bg-green-500/0 dark:bg-green-500/0 group-hover:bg-green-500/5 dark:group-hover:bg-green-500/2 transition-colors duration-300" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="text-5xl mb-4 text-green-600 dark:text-green-400/60 group-hover:text-green-700 dark:group-hover:text-green-400/80 transition-colors duration-300">
                      📚
                    </div>
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-3">Explore Courses</h3>
                    <p className="text-gray-700 dark:text-white/50 text-sm grow mb-4">
                      Master financial modeling, IFRS, and admission strategies through Prep Academy's structured programs
                    </p>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400/60 group-hover:text-green-700 dark:group-hover:text-green-400/80 transition-colors duration-300">
                      <span className="text-sm font-medium">View all courses</span>
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 4 }}
                      >
                        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* View Portfolio */}
            <motion.div variants={itemVariants}>
              <Link href="/portfolio">
                <div className="relative h-full min-h-80 p-8 rounded-2xl border border-gray-300 dark:border-white/5 backdrop-blur-xl transition-all duration-300 hover:border-blue-600 dark:hover:border-blue-500/30 overflow-hidden group cursor-pointer bg-linear-to-br from-blue-100 to-blue-50 dark:from-blue-500/5 dark:to-blue-500/0 hover:bg-linear-to-br hover:from-blue-200 hover:to-blue-100 dark:hover:from-blue-500/20 dark:hover:to-blue-500/10">
                  <div className="absolute inset-0 bg-blue-500/0 dark:bg-blue-500/0 group-hover:bg-blue-500/5 dark:group-hover:bg-blue-500/2 transition-colors duration-300" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="text-5xl mb-4 text-blue-600 dark:text-blue-400/60 group-hover:text-blue-700 dark:group-hover:text-blue-400/80 transition-colors duration-300">
                      💼
                    </div>
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-3">View Portfolio</h3>
                    <p className="text-gray-700 dark:text-white/50 text-sm grow mb-4">
                      Financial models, dashboards, case competition wins, and testimonials from students
                    </p>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400/60 group-hover:text-blue-700 dark:group-hover:text-blue-400/80 transition-colors duration-300">
                      <span className="text-sm font-medium">See my work</span>
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 4 }}
                      >
                        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Read Insights */}
            <motion.div variants={itemVariants}>
              <Link href="/blog">
                <div className="relative h-full min-h-80 p-8 rounded-2xl border border-gray-300 dark:border-white/5 backdrop-blur-xl transition-all duration-300 hover:border-purple-600 dark:hover:border-purple-500/30 overflow-hidden group cursor-pointer bg-linear-to-br from-purple-100 to-purple-50 dark:from-purple-500/5 dark:to-purple-500/0 hover:bg-linear-to-br hover:from-purple-200 hover:to-purple-100 dark:hover:from-purple-500/20 dark:hover:to-purple-500/10">
                  <div className="absolute inset-0 bg-purple-500/0 dark:bg-purple-500/0 group-hover:bg-purple-500/5 dark:group-hover:bg-purple-500/2 transition-colors duration-300" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="text-5xl mb-4 text-purple-600 dark:text-purple-400/60 group-hover:text-purple-700 dark:group-hover:text-purple-400/80 transition-colors duration-300">
                      ✍️
                    </div>
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-3">Read Insights</h3>
                    <p className="text-gray-700 dark:text-white/50 text-sm grow mb-4">
                      Weekly articles on IFRS, financial modeling, strategy, and admission preparation
                    </p>
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400/60 group-hover:text-purple-700 dark:group-hover:text-purple-400/80 transition-colors duration-300">
                      <span className="text-sm font-medium">Read articles</span>
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 4 }}
                      >
                        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
