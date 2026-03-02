"use client";

import { AcademyHeader, AcademyCTA } from './AcademyHeader';
import { CourseGrid } from './CourseGrid';

const courses = [
  {
    title: 'IBA Admission Master Batch',
    format: 'Live Sessions + Recorded',
    duration: '12 weeks',
    outcome: 'Complete IBA admission preparation with strategy modules',
    studentResults: '92% admission rate',
    description: 'Comprehensive program covering IBA admission requirements, case studies, and financial analysis.',
  },
  {
    title: 'BUP Admission Structured Program',
    format: 'Recorded + Live Q&A',
    duration: '8 weeks',
    outcome: 'BUP-specific preparation with focus on commerce subjects',
    studentResults: '87% admission rate',
    description: 'Tailored for BUP commerce students with emphasis on competitive analysis.',
  },
  {
    title: 'JU Commerce Prep',
    format: 'Live Sessions',
    duration: '6 weeks',
    outcome: 'Focused preparation for Jahangirnagar University commerce',
    studentResults: '85% success rate',
    description: 'Structured curriculum aligned with JU commerce admission criteria.',
  },
  {
    title: 'Excel for Commerce Students',
    format: 'Recorded + Hands-on Labs',
    duration: '4 weeks',
    outcome: 'Master Excel from basics to advanced modeling',
    studentResults: '93% competency rate',
    description: 'Practical Excel skills essential for finance professionals.',
  },
  {
    title: 'Financial Modeling Basics',
    format: 'Recorded',
    duration: '5 weeks',
    outcome: 'Learn DCF, pro-forma models, and valuation techniques',
    studentResults: '89% completion with projects',
    description: 'Foundation in financial modeling with real-world case studies.',
  },
  {
    title: 'IFRS Fundamentals for Accountants',
    format: 'Live + Recorded',
    duration: '6 weeks',
    outcome: 'Master IFRS principles and application',
    studentResults: '94% certification rate',
    description: 'Deep dive into International Financial Reporting Standards.',
  },
];

export function AcademySection() {
  return (
    <section className="py-20 px-4 md:px-6 bg-linear-to-b from-white to-gray-50 dark:from-black dark:to-zinc-950">
      <div className="max-w-7xl mx-auto">
        <AcademyHeader />
        <CourseGrid courses={courses} />
        <AcademyCTA />
      </div>
    </section>
  );
}
