'use client';

import React from 'react';
import { motion } from 'motion/react';
import { User, Target, Database, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-slate-950 text-white pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
            <User size={12} /> Founder & Mission
          </div>
          <h1 className="text-4xl md:text-7xl font-black font-display text-white mb-6 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">OrapexAI</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Built exclusively for dental practices. OrapexAI is a 100% HIPAA-compliant AI voice receptionist that integrates in real-time with Open Dental.
          </p>
        </motion.div>

        {/* Founder Bio Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/50 border border-slate-800 rounded-[2.5rem] p-8 md:p-12 mb-16 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.3)] mb-4">
                <img 
                  src="/founder-hamza.png" 
                  alt="Hamza Naseem, Founder of OrapexAI" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-white">Hamza Naseem</h2>
              <p className="text-cyan-400 text-sm font-medium">Founder & Lead Developer</p>
            </div>
            <div className="md:col-span-2 text-slate-300 space-y-4 leading-relaxed">
              <p>
                OrapexAI was founded by software developer Hamza Naseem. After seeing how many patient calls dental practices miss after hours—and how much manual data entry front-desk staff handle every day—Hamza set out to build an AI solution that actually integrates with practice management software rather than just taking messages.
              </p>
              <p>
                By using secure API keys, OrapexAI performs bidirectional read and write operations during a live phone call. It verifies patients by name and date of birth, checks live provider availability, books appointments directly into the calendar, assigns ADA procedure codes, and appends primary and secondary insurance data—all without human intervention.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission & Compliance Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
          >
            <Target className="text-cyan-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 text-white">Our Mission</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              To ensure dental practices never miss a patient call while eliminating manual front-desk data entry. We believe AI voice agents should actively perform administrative work inside the practice management system in real-time.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
          >
            <ShieldCheck className="text-cyan-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 text-white">HIPAA Compliance</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We handle Protected Health Information (PHI) with the highest security. OrapexAI operates under a signed Business Associate Agreement (BAA), uses AES-256 encryption, and never uses patient data for generalized AI model training.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden"
        >
          <h2 className="text-3xl md:text-4xl font-black font-display text-white mb-6">
            Ready to automate your practice?
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Stop missing after-hours calls and eliminate manual data entry. See how OrapexAI integrates directly with your Open Dental software.
          </p>
          <Link 
            href="/#contact" 
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]"
          >
            Book a Demo <ArrowRight size={20} />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
