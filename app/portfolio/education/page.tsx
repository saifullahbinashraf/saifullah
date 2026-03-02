'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faExternalLink } from '@fortawesome/free-solid-svg-icons';

const educationEntries = [
  {
    id: 'chartered-accountancy',
    title: 'CHARTERED ACCOUNTANCY (CA) - CERTIFICATE LEVEL PASSED & PROFESSIONAL LEVEL (5/7 SUBJECTS)',
    institution: 'Institute of Chartered Accountants of Bangladesh',
    period: 'January 2024 - Present',
    description: 'Successfully completed the Certificate Level of Chartered Accountancy gaining robust understanding of financial reporting, auditing principles, and domestic tax laws. Currently pursuing Professional Level with 5 out of 7 subjects passed. This qualification supplements my academic studies, equipping me with practical expertise in accounts management and regulatory compliance. My background provides a comprehensive view of business operations, from strategic planning to detailed financial oversight.',
    website: 'https://www.icab.org.bd',
    image: '/icab.png',
    imageAlt: 'Institute of Chartered Accountants of Bangladesh',
    link: 'https://www.icab.org.bd/',
    imagePosition: 'left',
    borderColor: 'hover:border-blue-500/50'
  },
  {
    id: 'university',
    title: 'BBA in Finance & Banking',
    institution: 'Bangladesh University of Professionals',
    period: 'July 2022 - July 2026',
    description: 'Currently pursuing Bachelor\'s degree in Finance & Banking with CGPA of 3.81, covering investment analysis, risk management, and business law. Active in campus competitions and practical learning. Champion of Excelerate 2025 Excel Competition and First Runner-Up in Accfinity 2025 Accounting & Valuation Competition and Accolyze 2025 Business Strategy Competition.',
    website: 'https://bup.edu.bd',
    image: '/university.png',
    imageAlt: 'Bangladesh University of Professionals',
    link: 'https://en.wikipedia.org/wiki/Bangladesh_University_of_Professionals',
    imagePosition: 'right',
    borderColor: 'hover:border-green-500/50'
  },
  {
    id: 'college',
    title: 'Higher Secondary Certificate (HSC), Business Studies',
    institution: 'Notre Dame College',
    period: '2019 - 2021',
    description: 'Completed higher secondary education focusing on Business Studies with GPA of 5.00. Developed strong foundation in business principles and critical thinking. Gained comprehensive knowledge in commerce and economics that motivated pursuit of advanced studies in finance.',
    website: 'https://ndc.edu.bd',
    image: '/college.png',
    imageAlt: 'Notre Dame College',
    link: 'https://en.wikipedia.org/wiki/Notre_Dame_College,_Dhaka',
    imagePosition: 'left',
    borderColor: 'hover:border-purple-500/50'
  },
  {
    id: 'school',
    title: 'Secondary School Certificate (SSC), Business Studies',
    institution: 'Monipur High School (MUBC)',
    period: '2017 - 2019',
    description: 'Completed secondary education with GPA of 4.89 while receiving General Scholarship. Initial interest in business and commerce began here. Developed strong foundation in fundamental business and economic concepts.',
    website: '#',
    image: '/school.png',
    imageAlt: 'Monipur High School',
    link: '#',
    imagePosition: 'right',
    borderColor: 'hover:border-orange-500/50'
  }
];

export default function EducationPage() {
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
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Background gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 md:px-8 py-16"
        >
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4 text-black dark:text-white">
            Education
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-white/60 max-w-2xl">
            My academic journey and professional qualifications shaping my expertise.
          </p>
        </motion.div>

        {/* Education Entries */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-6"
        >
          {educationEntries.map((entry) => (
            <motion.div
              key={entry.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl hover:border-blue-600 dark:hover:border-white/20 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-white/10"
            >
              <div className={`flex flex-col md:flex-row items-stretch gap-0 ${entry.imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Image Section */}
                <div className="shrink-0 w-full md:w-1/3 h-64 md:h-80 overflow-hidden">
                  <Link href={entry.link} target="_blank" rel="noopener noreferrer">
                    <div className="relative w-full h-full">
                      <Image
                        src={entry.image}
                        alt={entry.imageAlt}
                        fill
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                  </Link>
                </div>

                {/* Content Section */}
                <div className="grow p-6 md:p-8 flex flex-col justify-center">
                  <Link href={entry.link} target="_blank" rel="noopener noreferrer">
                    <h2 className="text-2xl font-bold mb-1 text-black dark:text-white group-hover:text-blue-700 dark:group-hover:text-white/90 transition-colors duration-300 cursor-pointer">
                      {entry.title}
                    </h2>
                  </Link>
                  <p className="text-gray-700 dark:text-white/70 font-semibold mb-2">{entry.institution}</p>
                  <p className="text-gray-600 dark:text-white/50 text-sm mb-4">{entry.period}</p>
                  <p className="text-gray-700 dark:text-white/60 leading-relaxed mb-6">
                    {entry.description}
                  </p>
                  <a 
                    href={entry.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-blue-700 dark:text-white/70 hover:text-blue-800 dark:hover:text-white font-semibold transition-colors duration-300 w-fit"
                  >
                    Visit Website
                    <FontAwesomeIcon icon={faExternalLink} className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 md:px-8 py-20"
        >
          <div className="text-center">
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 backdrop-blur-xl rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Ready to work together?</h3>
              <p className="text-gray-700 dark:text-white/60 mb-6 leading-relaxed">
                Explore my portfolio and technical expertise to see how my educational background translates into practical capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 dark:bg-white/10 border border-blue-700 dark:border-white/20 text-white font-semibold rounded-xl backdrop-blur-xl hover:bg-blue-700 dark:hover:bg-white/20 transition-all duration-300 group"
                >
                  View Portfolio
                  <motion.span whileHover={{ x: 4 }} className="inline-block">
                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                  </motion.span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-300 dark:bg-white/5 border border-gray-400 dark:border-white/10 text-black dark:text-white font-semibold rounded-xl backdrop-blur-xl hover:bg-gray-400 dark:hover:bg-white/10 transition-all duration-300 group"
                >
                  Get in Touch
                  <motion.span whileHover={{ x: 4 }} className="inline-block">
                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                  </motion.span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
