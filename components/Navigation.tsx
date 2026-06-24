'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Play, Phone } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Logo from './Logo';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLiveDemoOpen, setIsLiveDemoOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setIsLiveDemoOpen(true);
    window.addEventListener('open-live-demo', handler);
    return () => window.removeEventListener('open-live-demo', handler);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home', path: '/' },
    { label: 'How It Works', id: 'how-it-works', path: '/' },
    { label: 'Features', id: 'features', path: '/' },
    { label: 'Pricing', id: 'pricing', path: '/pricing' },
    { label: 'ROI Calculator', id: 'roi', path: '/' },
    { label: 'FAQs', id: 'faq', path: '/' },
    { label: 'Contact', id: 'contact', path: '/' },
  ];

  const scrollToSection = (id: string, path: string) => {
    setIsMenuOpen(false);
    
    if (path !== pathname) {
      router.push(path + (id !== 'home' && id !== 'pricing' ? `#${id}` : ''));
    } else {
      if (id === 'home' || id === 'pricing') {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
         const element = document.getElementById(id);
         if (element) {
           const y = element.getBoundingClientRect().top + window.scrollY - 100;
           window.scrollTo({ top: y, behavior: 'smooth' });
         }
      }
    }
  };

  const openDemoVideo = () => {
    window.open('https://www.youtube.com/watch?v=lxRwEp3S71I', '_blank');
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Logo />
            <span className="text-xl font-bold tracking-tight font-display">Orapex<span className="text-cyan-400">AI</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button onClick={() => scrollToSection('features', '/')} className="hover:text-white transition-colors">Features</button>
            <button onClick={() => scrollToSection('pricing', '/pricing')} className={`hover:text-white transition-colors ${pathname === '/pricing' ? 'text-cyan-400' : ''}`}>Pricing</button>
            <button onClick={() => scrollToSection('roi', '/')} className="hover:text-white transition-colors">ROI</button>
            <button onClick={() => scrollToSection('faq', '/')} className="hover:text-white transition-colors">FAQ</button>
            <button
              onClick={openDemoVideo}
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all border border-white/10 flex items-center gap-2 group"
            >
              <Play size={14} className="fill-current group-hover:text-cyan-400 transition-colors" /> Demo
            </button>
            <button onClick={() => scrollToSection('contact', '/')} className="bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-full transition-all font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
              Get Started
            </button>
          </div>

          <button className="md:hidden relative z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </nav>

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
                onClick={() => scrollToSection(item.id, item.path)}
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
              onClick={() => scrollToSection('contact', '/')}
              className="mt-8 bg-cyan-500 text-black px-8 py-4 rounded-full font-bold text-lg w-full max-w-xs shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isLiveDemoOpen && (
           <LiveDemoModal onClose={() => setIsLiveDemoOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

function LiveDemoModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4"
      onClick={onClose}
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
          onClick={onClose}
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
  );
}
