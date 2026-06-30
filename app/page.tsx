import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import TechnologiesBanner from '@/components/TechnologiesBanner';
import StatsCalculator from '@/components/StatsCalculator';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import AeoSiloLinks from '@/components/AeoSiloLinks'; // Add this import

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <HowItWorks />
      <Features />
      <TechnologiesBanner />
      <StatsCalculator />
      <AeoSiloLinks /> {/* Add it right here, before the Contact Form */}
      <ContactForm />
      <FAQ />
    </div>
  );
}
