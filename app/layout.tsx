import './global.css'; // Using the alias for the global CSS

// we no longer globally override console – warnings are harmless and
// previous patch caused recursion with deprecation messages.

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import type { Metadata, Viewport } from 'next'; // Import Viewport type
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
// import { Navbar } from './components/nav'; // This is no longer needed here
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import LayoutWrapper from './LayoutWrapper'; // Import our new component using alias

export const metadata: Metadata = {
  title: {
    default: 'Saifullah Bin Ashraf',
    template: '%s | Saifullah Bin Ashraf',
  },
  keywords: [
    'Saifullah Bin Ashraf',
    'Saifullah',
    'Finance Professional',
    'CA Aspirant',
    'Content Creator',
    'Bangladesh',
  ],
  description: "Saifullah Bin Ashraf's portfolio showcasing finance expertise, educational content, and entrepreneurial ventures.",
  openGraph: {
    title: 'Saifullah Bin Ashraf',
    description: 'Finance Professional, CA Aspirant & Content Creator | Portfolio & Life Journey',
    url: 'https://saifullah.dev',
    siteName: 'Saifullah Bin Ashraf',
    images: [
      {
        url: 'https://saifullah.dev/saifullah.jpg',
        width: 800,
        height: 800,
        alt: 'Saifullah Bin Ashraf',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saifullah Bin Ashraf',
    description: 'Finance Professional, CA Aspirant & Content Creator',
    images: ['https://saifullah.dev/saifullah.jpg'],
  },
  metadataBase: new URL('https://saifullah.dev'),
  // NOTE: JSON‑LD will be injected manually in the <head> below; avoid using
  // metadata.other because Next outputs <meta> tags which are ignored by
  // search engines for structured data.
  icons: {
    icon: '/favicon.ico',
    apple: [
      '/apple-touch-icon-iphone-60x60.png',
      '/apple-touch-icon-ipad-76x76.png',
      '/apple-touch-icon-iphone-retina-120x120.png',
      '/apple-touch-icon-ipad-retina-152x152.png'
    ],
  },
  manifest: '/manifest.webmanifest',
  verification: {
    google: 'pT4MHjovbY0MXYCrgAPN3LQHyTuLLq_iTtmWyx3GSgc',
  },
};

// --- VIEWPORT MOVED HERE ---
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  // maximumScale and userScalable intentionally omitted for accessibility
};

const cx = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Saifullah" />
        {/* icons are already emitted by the metadata API */}
        {/* JSON‑LD for structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Saifullah Bin Ashraf",
              "url": "https://saifullah.dev",
              "email": "saifullahbinashraf03@gmail.com",
              "telephone": "+880 1537-162289",
              "sameAs": [
                "https://www.linkedin.com/in/saifullah-bin-ashraf/",
                "https://github.com/saifullah",
                "https://youtube.com/@saifullahbinashraf"
              ]
            }),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F0NPB44JWC"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F0NPB44JWC');
          `}
        </Script>
        <Script id="sw-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').catch(() => {});
              });
            }
          `}
        </Script>
      </head>
      {/* RESTORED: dark:bg-black and dark:text-white classes */}
      <body className="antialiased bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        
        {/* The LayoutWrapper now handles showing/hiding the navbar */}
        <LayoutWrapper>
          {children}
        </LayoutWrapper>

        {/* These are now outside the main wrapper to apply to all pages */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

