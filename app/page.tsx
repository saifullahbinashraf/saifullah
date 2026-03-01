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
import { useState, useEffect } from 'react';

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
    return <div className="text-zinc-400 animate-pulse">--:-- --</div>;
  }

  return (
    <div className="text-zinc-400 font-mono text-sm">
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
                <div className="text-3xl mb-3 text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  <FontAwesomeIcon icon={icon} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-white/50 text-sm grow">{description}</p>
                <div className="mt-4 flex items-center gap-2 text-white/60 group-hover:text-white/80 transition-colors duration-300">
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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="min-h-[80vh] flex flex-col justify-center items-start px-4 md:px-8 max-w-7xl mx-auto"
        >
          {/* Time widget */}
          <motion.div variants={itemVariants} className="mb-12">
            <LiveTime />
          </motion.div>

          {/* Main headline */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-8xl md:text-9xl font-black leading-[0.9] tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-white via-white to-white/50 mb-6">
              SAIFULLAH
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/70 max-w-2xl leading-relaxed">
              Finance Professional, CA Aspirant & Content Creator
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 dark:bg-white/10 border border-white/20 dark:border-white/10 rounded-xl text-white font-semibold backdrop-blur-xl hover:bg-white/20 dark:hover:bg-white/15 transition-all duration-300 flex items-center gap-3 group"
              >
                Get in touch
                <motion.span whileHover={{ x: 4 }}>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.section>

        {/* Bento Grid Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          className="px-4 md:px-8 max-w-7xl mx-auto py-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-black mb-12 text-white"
          >
            Featured Areas
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max">
            {/* Work - Large card spanning 2 columns */}
            <div className="col-span-1 md:col-span-2 row-span-2">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                variants={itemVariants}
              >
                <Link href="/work">
                  <div className="relative h-full min-h-96 p-6 rounded-2xl border border-white/10 dark:border-white/5 backdrop-blur-xl transition-all duration-300 hover:border-white/20 dark:hover:border-white/10 overflow-hidden group cursor-pointer bg-linear-to-br from-white/10 to-white/5 dark:from-white/5 dark:to-white/0">
                    <div className="absolute inset-0 bg-white/0 dark:bg-white/0 group-hover:bg-white/5 dark:group-hover:bg-white/2 transition-colors duration-300" />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="text-5xl mb-4 text-white/60 group-hover:text-white/80 transition-colors duration-300">
                        <FontAwesomeIcon icon={faBriefcase} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">Work & Projects</h3>
                      <p className="text-white/50 text-sm grow mb-4">
                        Explore my professional projects, case studies, and technical contributions
                      </p>
                      <div className="flex items-center gap-2 text-white/60 group-hover:text-white/80 transition-colors duration-300">
                        <span className="text-sm font-medium">View projects</span>
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

            {/* Skills Card */}
            <motion.div variants={itemVariants}>
              <BentoCard
                title="Skills"
                description="Technical expertise and credentials"
                icon={faCode}
                href="/skills"
              />
            </motion.div>

            {/* Education Card */}
            <motion.div variants={itemVariants}>
              <BentoCard
                title="Education"
                description="Academic background"
                icon={faLightbulb}
                href="/education"
              />
            </motion.div>

            {/* Life Card */}
            <motion.div variants={itemVariants}>
              <BentoCard
                title="Life"
                description="Personal journey & insights"
                icon={faUsers}
                href="/life"
              />
            </motion.div>

            {/* Contact Card */}
            <motion.div variants={itemVariants}>
              <BentoCard
                title="Contact"
                description="Let's connect"
                icon={faArrowRight}
                href="/contact"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          className="px-4 md:px-8 max-w-7xl mx-auto py-20 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "30+", label: "Projects Completed" },
              { number: "15+", label: "Technologies" },
              { number: "100%", label: "Dedication" },
            ].map((stat, idx) => (
              <motion.div key={idx} variants={itemVariants} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
