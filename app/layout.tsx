import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Orapex AI | AI-Powered Voice Agents for Dental Practices',
  description: 'Orapex AI is a fully custom AI receptionist for dental practices. Deep PMS integration with Open Dental and Dentrix. Books appointments, verifies insurance, and handles calls 24/7. Setup from $900.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-950 text-white selection:bg-cyan-500/30" suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
