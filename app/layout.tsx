import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Frontend Engineer Portfolio | Creative Developer',
  description: 'Portfolio of a passionate Frontend Engineer specializing in React, Next.js, and modern web technologies. Building beautiful, performant, and accessible web experiences.',
  keywords: ['Frontend Engineer', 'React Developer', 'Next.js', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Frontend Engineer' }],
  openGraph: {
    title: 'Frontend Engineer Portfolio',
    description: 'Building beautiful, performant, and accessible web experiences',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Engineer Portfolio',
    description: 'Building beautiful, performant, and accessible web experiences',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
