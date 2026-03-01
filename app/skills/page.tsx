import Link from 'next/link';
import { motion } from 'framer-motion';
import { contentfulClient } from '@/lib/contentfulClient';
import SkillsTabs from './SkillsTabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const revalidate = 60;

// Certificate data structure
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

// Function to fetch certificates
async function getCertificates(): Promise<Certificate[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'certificate',
      order: ['-fields.date'],
    });
    return response.items as unknown as Certificate[];
  } catch (error) {
    console.error("Error fetching certificates:", error);
    return [];
  }
}

// Main page component
export default async function SkillsPage() {
  const certificates = await getCertificates();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 py-16"
        >
          <h1 className="text-7xl md:text-8xl font-black leading-tight mb-4">
            Skills
          </h1>
          <p className="text-xl text-white/60 max-w-2xl">
            A comprehensive showcase of my technical expertise, competencies, and professional qualifications.
          </p>
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 py-8">
          <SkillsTabs certificates={certificates} />
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 py-20"
        >
          <div className="text-center">
            <div className="bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/5 backdrop-blur-xl rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                Let's discuss how my skills can bring your vision to life.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl backdrop-blur-xl hover:bg-white/20 transition-all duration-300 group"
              >
                Get in Touch
                <motion.span whileHover={{ x: 4 }} className="inline-block">
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </motion.span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}