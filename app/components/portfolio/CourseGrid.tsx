"use client";

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface Course {
  title: string;
  format: string;
  duration: string;
  outcome: string;
  studentResults: string;
  description: string;
}

interface CourseCardProps {
  course: Course;
  index: number;
}

function CourseCard({ course, index }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-linear-to-br from-gray-100 to-white dark:from-zinc-900 dark:to-black border border-gray-300 dark:border-zinc-800 rounded-xl p-6 hover:border-blue-600 dark:hover:border-blue-500 transition-all"
    >
      <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-400">{course.title}</h3>
      <p className="text-gray-700 dark:text-zinc-400 text-sm mb-4">{course.description}</p>

      <div className="space-y-2 text-sm mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-zinc-500">Format:</span>
          <span className="text-gray-800 dark:text-zinc-200">{course.format}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-zinc-500">Duration:</span>
          <span className="text-gray-800 dark:text-zinc-200">{course.duration}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-zinc-500">Student Results:</span>
          <span className="text-green-700 dark:text-green-400 font-semibold">{course.studentResults}</span>
        </div>
      </div>

      <p className="text-xs text-gray-700 dark:text-zinc-400 mb-6 py-3 bg-gray-200 dark:bg-zinc-800 rounded px-3">
        <span className="text-gray-800 dark:text-zinc-300 font-semibold">Outcome:</span> {course.outcome}
      </p>

      <button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
        <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
        Enroll via WhatsApp
      </button>
    </motion.div>
  );
}

interface CourseGridProps {
  courses: Course[];
}

export function CourseGrid({ courses }: CourseGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <CourseCard key={course.title} course={course} index={index} />
      ))}
    </div>
  );
}
