'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { PhoneCall, ArrowRight, Star } from 'lucide-react';
import FloatingFeatures from './FloatingFeatures';
import Laptop from './Laptop';
import ChatSimulation from './ChatSimulation';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const laptopSectionRef = useRef(null);
  const isLaptopInView = useInView(laptopSectionRef, { amount: 0.3, once: true });
  const router = useRouter();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      router.push('/#contact');
    }
  };

  const openLiveDemo = () => {
    window.dispatchEvent(new Event('open-live-demo'));
  };

  return (
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
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-cyan-500 rounded-full text-black font-bold text-lg overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-transform hover:scale-105 font-display"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Demo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </button>
          <button
            onClick={openLiveDemo}
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
  );
}
