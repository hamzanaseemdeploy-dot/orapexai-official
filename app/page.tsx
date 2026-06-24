import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import TechnologiesBanner from '@/components/TechnologiesBanner';
import StatsCalculator from '@/components/StatsCalculator';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <HowItWorks />
      <Features />
      <TechnologiesBanner />
      <StatsCalculator />
      <ContactForm />
      <FAQ />
    </div>
  );
}
