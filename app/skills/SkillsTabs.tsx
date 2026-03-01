"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PortfolioContent from '../design-portfolio/PortfolioContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

interface Certificate {
  fields: {
    title: string;
    issuingBody: string;
    date: string;
    description?: any;
    credentialUrl?: string;
    certificateImage?: {
      fields: {
        file: { url: string };
        title: string;
      };
    };
  };
}

interface SkillsTabsProps {
  certificates: Certificate[];
}

const SkillItem = ({ icon, name }: { icon: string; name: string }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3 }}
    className="group bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/5 rounded-2xl p-6 text-center hover:border-white/20 dark:hover:border-white/10 backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
  >
    <div className="w-16 h-16 bg-white/10 dark:bg-white/5 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-white/20 dark:group-hover:bg-white/10 transition-colors duration-300">
      <div className="relative w-10 h-10">
        <Image src={`/${icon}`} alt={`${name} icon`} fill className="object-contain transition-transform duration-300 group-hover:scale-110" />
      </div>
    </div>
    <h3 className="text-lg font-bold text-white group-hover:text-white/90 transition-colors duration-300">{name}</h3>
  </motion.div>
);

const TechSkillItem = ({ title, logos, names }: { title: string; logos: { src: string, alt: string, href: string }[]; names: string }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3 }}
    className="group bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/5 rounded-2xl p-6 text-center h-full flex flex-col hover:border-white/20 dark:hover:border-white/10 backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
  >
    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-white/90 transition-colors duration-300">{title}</h3>
    <div className="flex justify-center items-center gap-4 my-auto grow">
      {logos.map(logo => (
        <a key={logo.src} href={logo.href} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-75">
          <div className="relative h-12 w-12">
            <Image src={`/${logo.src}`} alt={logo.alt} fill style={{ objectFit: 'contain' }} />
          </div>
        </a>
      ))}
    </div>
    <p className="text-white/50 text-sm mt-4">{names}</p>
  </motion.div>
);

const TabButtons = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => (
  <div className="flex flex-wrap justify-center mb-12 bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-2 max-w-fit mx-auto border border-white/10 dark:border-white/5">
    {['skills', 'certificates', 'designPortfolio'].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
          activeTab === tab
            ? 'bg-white/15 text-white shadow-lg'
            : 'text-white/60 hover:text-white/80 hover:bg-white/5'
        }`}
      >
        {tab === 'skills' && 'Skills'}
        {tab === 'certificates' && 'Certifications'}
        {tab === 'designPortfolio' && 'Design Portfolio'}
      </button>
    ))}
  </div>
);

export default function SkillsTabs({ certificates }: SkillsTabsProps) {
  const [activeTab, setActiveTab] = useState('skills');

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
    <>
      <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
      <div>
        {activeTab === 'skills' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="mb-16">
              <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-8 text-white">Core Competencies</motion.h2>
              <motion.div variants={containerVariants} className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div variants={itemVariants}><SkillItem icon="problem.png" name="Problem-Solving" /></motion.div>
                <motion.div variants={itemVariants}><SkillItem icon="entrepreneurial.png" name="Entrepreneurial Mindset" /></motion.div>
                <motion.div variants={itemVariants}><SkillItem icon="analysis.png" name="Analysis & Research" /></motion.div>
                <motion.div variants={itemVariants}><SkillItem icon="financial.png" name="Financial & Economic Analysis" /></motion.div>
                <motion.div variants={itemVariants}><SkillItem icon="leadership.png" name="Leadership & Collaboration" /></motion.div>
                <motion.div variants={itemVariants}><SkillItem icon="presentation.png" name="Presentation & Communication" /></motion.div>
              </motion.div>
            </div>
            <div className="mb-16">
              <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-8 text-white">Technical Skills</motion.h2>
              <motion.div variants={containerVariants} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="md:col-span-2">
                  <TechSkillItem
                    title="Proficient Use of AI"
                    logos={[
                      { src: 'chatgpt.png', alt: 'ChatGPT Logo', href: 'https://openai.com/chatgpt' },
                      { src: 'claude.png', alt: 'Claude AI Logo', href: 'https://www.claude.ai/' },
                      { src: 'gemini.png', alt: 'Google Gemini Logo', href: 'https://gemini.google.com/' },
                      { src: 'grok.png', alt: 'Grok AI Logo', href: 'https://grok.x.ai/' },
                    ]}
                    names="I leverage various AI tools to accelerate my development workflow, from code generation to research and analysis."
                  />
                </motion.div>
                <motion.div variants={itemVariants}><TechSkillItem title="Design" logos={[{ src: 'canva.png', alt: 'Canva', href: 'https://www.canva.com' }, { src: 'figma.png', alt: 'Figma', href: 'https://www.figma.com' }]} names="Canva, Figma" /></motion.div>
                <motion.div variants={itemVariants}><TechSkillItem title="Office & Productivity" logos={[{ src: 'office.png', alt: 'Microsoft Office', href: 'https://www.office.com' }, { src: 'google.png', alt: 'Google Workspace', href: 'https://workspace.google.com' }]} names="Microsoft Office Suite, Google Workspace" /></motion.div>
                <motion.div variants={itemVariants}><TechSkillItem title="Web Development" logos={[{ src: 'wordpress.png', alt: 'Wordpress', href: 'https://wordpress.org' }, { src: 'nextjs.png', alt: 'Next.js', href: 'https://nextjs.org' }]} names="Wordpress, Next.js" /></motion.div>
                <motion.div variants={itemVariants}><TechSkillItem title="Data Analysis" logos={[{ src: 'stata.png', alt: 'Stata', href: 'https://en.wikipedia.org/wiki/Stata' }, { src: 'spss.png', alt: 'SPSS', href: 'https://en.wikipedia.org/wiki/SPSS' }]} names="Stata, SPSS" /></motion.div>
                <motion.div variants={itemVariants}><TechSkillItem title="Data Visualization" logos={[{ src: 'powerbi.png', alt: 'Power BI', href: 'https://www.microsoft.com/en-us/power-platform/products/power-bi' }]} names="Power BI" /></motion.div>
                <motion.div variants={itemVariants}><TechSkillItem title="IT Support" logos={[{ src: 'computer.png', alt: 'Computer Hardware', href: '#' }]} names="Proficient in building computers from scratch and disassembling hardware components." /></motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
        {activeTab === 'certificates' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 max-w-6xl mx-auto"
          >
            {certificates.map((cert: Certificate, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-6 hover:border-white/20 dark:hover:border-white/10 backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
              >
                {cert.fields.certificateImage && (
                  <div className="shrink-0 w-full sm:w-24 sm:h-24 bg-white/10 dark:bg-white/5 rounded-xl p-2 flex items-center justify-center group-hover:bg-white/20 dark:group-hover:bg-white/10 transition-colors duration-300">
                    <Image
                      src={`https:${cert.fields.certificateImage.fields.file.url}`}
                      alt={cert.fields.certificateImage.fields.title}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="grow">
                  <h3 className="font-bold text-xl mb-1 group-hover:text-white/90 transition-colors duration-300 text-white">{cert.fields.title}</h3>
                  <p className="text-white/60">{cert.fields.issuingBody}</p>
                  {cert.fields.description && (
                    <div className="text-white/50 mt-2 text-sm">
                      {documentToReactComponents(cert.fields.description)}
                    </div>
                  )}
                  {cert.fields.credentialUrl && (
                    <a href={cert.fields.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold transition-colors duration-300 mt-4 text-sm">
                      View Credential
                      <FontAwesomeIcon icon={faExternalLink} className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        {activeTab === 'designPortfolio' && (
          <PortfolioContent />
        )}
      </div>
    </>
  );
}