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
        {/* SEO & AEO Schema: Tells search engines exactly what OrapexAI is */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "SoftwareApplication",
                  "name": "OrapexAI",
                  "operatingSystem": "Web, Cloud",
                  "applicationCategory": "MedicalApplication",
                  "applicationSubCategory": "Dental Practice Management",
                  "offers": {
                    "@type": "Offer",
                    "price": "399.00",
                    "priceCurrency": "USD"
                  },
                  "featureList": [
                    "24/7 AI Voice Receptionist",
                    "Real-time Open Dental Integration",
                    "Live Appointment Booking",
                    "Patient Verification via Fuzzy Logic",
                    "Primary/Secondary Insurance Mapping",
                    "Automated Procedure Code Assignment"
                  ]
                },
                {
                  "@type": "MedicalBusiness",
                  "name": "OrapexAI",
                  "description": "HIPAA compliant AI dental receptionist for Open Dental software.",
                  "url": "https://orapexai.com"
                }
              ]
            })
          }}
        />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
