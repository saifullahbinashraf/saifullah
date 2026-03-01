import Link from 'next/link';
import { motion } from 'framer-motion';
import { contentfulClient } from '@/lib/contentfulClient';
import SkillsPageClient from './SkillsPageClient';
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
    const errorMsg = error instanceof Error ? error.message : String(error);
    // Silently fail if content type doesn't exist or Contentful is not configured
    if (errorMsg.includes('unknownContentType') || errorMsg.includes('placeholder')) {
      return [];
    }
    console.warn("Error fetching certificates:", errorMsg);
    return [];
  }
}

// Main page component (Server Component)
export default async function SkillsPage() {
  const certificates = await getCertificates();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <SkillsPageClient certificates={certificates} />
    </div>
  );
}