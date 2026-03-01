"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faExternalLink } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Prep School - Online Teaching Platform",
    description: "Founded and scaled an online learning platform for IBA, BUP, and JU aspirants. Mentored 350+ students with BDT 500,000 revenue generated in 2024. Managed a team of 3 employees.",
    tags: ["Entrepreneurship", "Education Tech", "Platform Management"],
    link: "#",
  },
  {
    title: "Excelerate 2025 - Champion",
    description: "Won the Excel & Dashboard Competition performing advanced data cleaning, financial statement modeling, and comprehensive dashboard creation for complex business scenarios.",
    tags: ["Excel", "Data Analysis", "Financial Modeling"],
    link: "#",
  },
  {
    title: "Accfinity 2025 - First Runner-Up",
    description: "Competed in Accounting & Valuation Competition, performing financial analysis, portfolio construction, and pre-money valuation for investment decisions.",
    tags: ["Valuation", "Financial Analysis", "Investment"],
    link: "#",
  },
  {
    title: "Educational Content Creation",
    description: "Created 400,000+ educational video views across YouTube and Facebook with 21,000 student community and 7,000+ subscribers sharing finance and accounting insights.",
    tags: ["Content Creation", "Education", "Finance Knowledge"],
    link: "#",
  },
];

export default function WorkPage() {
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
    <div className="min-h-screen bg-black text-white">
      {/* Background gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 md:px-8 max-w-7xl mx-auto pt-20 pb-12"
        >
          <h1 className="text-7xl md:text-8xl font-black leading-tight mb-4">
            Work
          </h1>
          <p className="text-xl text-white/60 max-w-2xl">
            A selection of projects and professional work that showcase my technical skills and problem-solving approach.
          </p>
        </motion.section>

        {/* Projects Grid */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          className="px-4 md:px-8 max-w-7xl mx-auto py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={project.link}
                  className="group block h-full p-6 rounded-2xl border border-white/10 hover:border-white/20 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-white/90 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/50 mb-6 grow text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/70 group-hover:bg-white/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-white/60 group-hover:text-white/90 transition-colors">
                      <span className="text-sm">View Project</span>
                      <FontAwesomeIcon icon={faExternalLink} className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-4 md:px-8 max-w-7xl mx-auto py-20 border-t border-white/10"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Interested in collaborating?</h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, and opportunities to be part of the success.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 rounded-xl text-white font-semibold backdrop-blur-xl hover:bg-white/20 transition-all duration-300 group"
              >
                Get in touch
                <motion.span whileHover={{ x: 4 }}>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
