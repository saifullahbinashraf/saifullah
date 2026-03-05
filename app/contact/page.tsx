import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Contact | Saifullah Bin Ashraf',
  description: 'Get in touch with Saifullah Bin Ashraf. Connect via email, Facebook, LinkedIn, YouTube, or schedule a meeting. Available for collaborations and professional inquiries.',
  openGraph: {
    title: 'Contact Saifullah Bin Ashraf',
    description: 'Connect with Saifullah Bin Ashraf for collaborations, professional inquiries, and networking opportunities.',
    type: 'website',
  },
};

const contactMethods = [
    { name: 'Email', href: 'mailto:saifullahbinashraf03@gmail.com', icon: faEnvelope, color: 'text-red-500 dark:text-red-400', hoverColor: 'hover:border-red-500', description: 'Send me an email for professional inquiries' },
    { name: 'Facebook', href: 'https://www.facebook.com/saifullah.lll', icon: faFacebook, color: 'text-blue-600 dark:text-blue-500', hoverColor: 'hover:border-blue-500', description: 'Connect with me on Facebook' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/saifullah-bin-ashraf/', icon: faLinkedin, color: 'text-blue-700 dark:text-blue-600', hoverColor: 'hover:border-blue-600', description: 'Professional networking and career updates' },
    { name: 'YouTube', href: 'https://www.youtube.com/@saifullahbinashraf', icon: faYoutube, color: 'text-red-600 dark:text-red-500', hoverColor: 'hover:border-red-500', description: 'Check out my video content' },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Want to connect? Feel free to reach out via any platform. I'm always open to new opportunities and collaborations.
          </p>
        </div>

        {/* Schedule Meeting Card */}
        <div className="mb-12 max-w-4xl mx-auto">
          <a
            href="https://cal.com/saifullahbinashraf"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 dark:hover:border-blue-500/30 backdrop-blur-xl transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
                <div className="shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500/10 dark:bg-blue-500/20 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/20 dark:group-hover:bg-blue-500/30 transition-colors duration-300">
                    <FontAwesomeIcon icon={faCalendarAlt} className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Schedule an Online Meeting</h2>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-md">
                    Book a time that works for both of us to discuss opportunities, projects, or just to chat
                  </p>
                </div>
              </div>
              <div className="shrink-0 hidden sm:block">
                <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-blue-500/50 dark:group-hover:border-blue-400/50 transition-colors duration-300">
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300 group-hover:transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-white/80 dark:hover:bg-white/10 ${method.hoverColor} backdrop-blur-xl transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl text-center flex flex-col h-full`}
            >
              <div className="flex flex-col items-center flex-1">
                <div className="w-14 h-14 bg-gray-100 dark:bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white dark:group-hover:bg-white/10 transition-colors duration-300">
                  <FontAwesomeIcon icon={method.icon} className={`w-7 h-7 ${method.color} transition-transform duration-300 group-hover:scale-110`} />
                </div>
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">{method.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {method.description}
                </p>
                <div className="mt-auto inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                  <span className="mr-2">Connect</span>
                  <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto backdrop-blur-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">Let's Learn Together</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Whether you're a student seeking guidance, looking to deepen your understanding of finance and accounting, interested in joining my academy programs, or simply want to discuss your learning journey, I'm here to support your growth. Feel free to reach out through any of the channels above—I'm always passionate about helping aspiring professionals succeed!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}