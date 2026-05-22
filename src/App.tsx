import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { PhoneCall, ArrowRight, Menu, X, Star, Instagram, Facebook, Linkedin, Phone, Play } from 'lucide-react';
import OpenDentalPage from './components/OpenDentalPage';
import Laptop from './components/Laptop';
import ChatSimulation from './components/ChatSimulation';
import FloatingFeatures from './components/FloatingFeatures';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import TechnologiesBanner from './components/TechnologiesBanner';
import StatsCalculator from './components/StatsCalculator';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import LegalPage from './components/LegalPage';
import PricingPage from './components/PricingPage';
import Logo from './components/Logo';

// Helper: convert a URL pathname to a legal page title
const pathToLegalTitle = (path: string): string => {
  return path
    .replace('/', '')
    .split('-')
    .map(word => {
      if (word.toLowerCase() === 'hipaa') return 'HIPAA';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

// Helper: determine which view to show from the current pathname
const getViewFromPath = (path: string): { view: 'home' | 'legal' | 'pricing' | 'open-dental'; legalTitle: string } => {
  // Normalize path: remove trailing slash and query/hash
  const normalizedPath = path.split(/[?#]/)[0].replace(/\/$/, '') || '/';

  if (normalizedPath === '/pricing') return { view: 'pricing', legalTitle: '' };
  if (normalizedPath === '/open-dental-ai-receptionist') return { view: 'open-dental', legalTitle: '' };
  if (
    normalizedPath === '/privacy-policy' ||
    normalizedPath === '/terms-of-service' ||
    normalizedPath === '/refund-policy' ||
    normalizedPath === '/hipaa-policy'
  ) {
    return { view: 'legal', legalTitle: pathToLegalTitle(normalizedPath) };
  }
  return { view: 'home', legalTitle: '' };
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLiveDemoOpen, setIsLiveDemoOpen] = useState(false);

  // Initialize view from current URL
  const initial = getViewFromPath(window.location.pathname);
  const [currentView, setCurrentView] = useState<'home' | 'legal' | 'pricing' | 'open-dental'>(initial.view);
  const [legalPageTitle, setLegalPageTitle] = useState(initial.legalTitle);

  // Listen for browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const { view, legalTitle } = getViewFromPath(window.location.pathname);
      setCurrentView(view);
      setLegalPageTitle(legalTitle);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigate to a real URL path
  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    const { view, legalTitle } = getViewFromPath(path);
    setCurrentView(view);
    setLegalPageTitle(legalTitle);
    window.scrollTo(0, 0);
  };

  const laptopSectionRef = useRef(null);
  const isLaptopInView = useInView(laptopSectionRef, { amount: 0.3, once: true });

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Features', id: 'features' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'ROI Calculator', id: 'roi' },
    { label: 'FAQs', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);

    if (id === 'pricing') {
      navigateTo('/pricing');
      return;
    }

    if (currentView !== 'home') {
      navigateTo('/');
      // Wait for view switch before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const openLegalPage = (slug: string) => {
    navigateTo(`/${slug}`);
  };

  const openDemoVideo = () => {
    window.open('https://www.youtube.com/watch?v=lxRwEp3S71I', '_blank');
  };

  const handlePricingCta = () => {
    navigateTo('/');
    setTimeout(() => {
      scrollToSection('contact');
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden selection:bg-cyan-500/30">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <Logo />
            <span className="text-xl font-bold tracking-tight font-display">Orapex<span className="text-cyan-400">AI</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Features</button>
            <button onClick={() => scrollToSection('pricing')} className={`hover:text-white transition-colors ${currentView === 'pricing' ? 'text-cyan-400' : ''}`}>Pricing</button>
            <button onClick={() => scrollToSection('roi')} className="hover:text-white transition-colors">ROI</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">FAQ</button>
            <button
              onClick={openDemoVideo}
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all border border-white/10 flex items-center gap-2 group"
            >
              <Play size={14} className="fill-current group-hover:text-cyan-400 transition-colors" /> Demo
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-full transition-all font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden relative z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl pt-32 px-6 md:hidden flex flex-col items-center gap-8"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-2xl font-bold font-display text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => { setIsMenuOpen(false); openDemoVideo(); }}
              className="text-2xl font-bold font-display text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <Play size={24} className="fill-current" /> Watch Demo
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="mt-8 bg-cyan-500 text-black px-8 py-4 rounded-full font-bold text-lg w-full max-w-xs shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live Demo Modal */}
      <AnimatePresence>
        {isLiveDemoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4"
            onClick={() => setIsLiveDemoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700 p-8 rounded-3xl max-w-md w-full relative shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <button
                onClick={() => setIsLiveDemoOpen(false)}
                className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-8 relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className="w-16 h-16 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                >
                  <Phone className="text-cyan-400" size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2 font-display">Test Our AI Agent</h3>
                <p className="text-slate-400 text-sm">Experience the conversation in real-time. Choose a scenario below to call.</p>
              </div>

              <div className="space-y-4 relative z-10">
                <motion.a
                  href="tel:+15551234567"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors shadow-sm">
                    <span className="font-bold text-sm">01</span>
                  </div>
                  <div className="text-left flex-1">
                    <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">Scenario A: Booking</div>
                    <div className="text-slate-500 text-xs">+1 (555) 123-4567</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-all">
                    <Phone size={14} />
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+15559876543"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors shadow-sm">
                    <span className="font-bold text-sm">02</span>
                  </div>
                  <div className="text-left flex-1">
                    <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">Scenario B: Insurance</div>
                    <div className="text-slate-500 text-xs">+1 (555) 987-6543</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-all">
                    <Phone size={14} />
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Switcher */}
      {currentView === 'home' ? (
        <>
          {/* Hero Section */}
          <main id="home" className="relative pt-32 min-h-screen flex flex-col items-center">

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyan-900/20 to-transparent pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">

              <motion.div
                initial={{ scale: 0.5, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 font-display">
                  <Star size={12} className="fill-current" />
                  Trusted by 500+ Clinics
                </div>
                <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6 font-display uppercase leading-none">
                  Never Miss a <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                    Patient Call
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                  The AI receptionist that answers phones, verifies insurance, and books appointments 24/7. No missed calls = <span className="text-white font-semibold underline decoration-cyan-500 underline-offset-4 decoration-2">More Revenue</span>.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group relative px-8 py-4 bg-cyan-500 rounded-full text-black font-bold text-lg overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-transform hover:scale-105 font-display"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book a Demo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </button>
                <button
                  onClick={() => setIsLiveDemoOpen(true)}
                  className="px-8 py-4 bg-slate-800 rounded-full text-white font-semibold text-lg border border-slate-700 hover:bg-slate-700 transition-colors flex items-center gap-2 font-display animate-button-halo-pulse"
                >
                  <PhoneCall size={20} className="text-cyan-400" /> Hear It Live
                </button>
              </motion.div>

              <div ref={laptopSectionRef} className="relative h-[450px] md:h-[600px] w-full perspective-[2000px] mb-20">
                <FloatingFeatures show={isLaptopInView} />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <Laptop isOpen={isLaptopInView} />
                </div>
                <div className="absolute inset-x-0 bottom-0 z-30 h-full pointer-events-none">
                  <ChatSimulation start={isLaptopInView} />
                </div>
              </div>
            </div>
          </main>

          <div id="how-it-works"><HowItWorks /></div>
          <div id="features"><Features /></div>
          <TechnologiesBanner />
          <div id="roi"><StatsCalculator /></div>
          <div id="contact"><ContactForm /></div>
          <div id="faq"><FAQ /></div>
        </>
      ) : currentView === 'open-dental' ? (
        <OpenDentalPage />
      ) : currentView === 'legal' ? (
        <LegalPage title={legalPageTitle} onBack={() => navigateTo('/')} />
      ) : (
        <PricingPage onCtaClick={handlePricingCta} />
      )}

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => scrollToSection('home')}>
                <Logo />
                <span className="text-xl font-bold tracking-tight font-display">Orapex<span className="text-cyan-400">AI</span></span>
              </div>
              <p className="text-slate-500 mb-6 max-w-sm">
                Revolutionizing dental practice management with intelligent automation. No missed calls, just more smiles.
              </p>
              <div className="text-slate-600 text-sm">
                © 2024 OrapexAI Inc. All rights reserved.
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold font-display mb-6">Legal</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><button onClick={() => openLegalPage('privacy-policy')} className="hover:text-cyan-400 transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => openLegalPage('terms-of-service')} className="hover:text-cyan-400 transition-colors">Terms of Service</button></li>
                <li><button onClick={() => openLegalPage('refund-policy')} className="hover:text-cyan-400 transition-colors">Refund Policy</button></li>
                <li><button onClick={() => openLegalPage('hipaa-policy')} className="hover:text-cyan-400 transition-colors">HIPAA Policy</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold font-display mb-6">Connect with Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-50/10 hover:border-cyan-500 hover:text-cyan-400 transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-50/10 hover:border-cyan-500 hover:text-cyan-400 transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-50/10 hover:border-cyan-500 hover:text-cyan-400 transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

