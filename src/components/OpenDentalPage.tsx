import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, Shield, Database, CheckCircle, ArrowRight, Clock, UserCheck, CreditCard, MessageSquare, Zap, Lock } from 'lucide-react';
import ContactForm from './ContactForm';

const OpenDentalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-6">
            <Database size={16} /> Native Open Dental Integration
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display mb-6 leading-tight">
            The Only AI Receptionist Built for <span className="text-cyan-400">Open Dental</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Orapex AI connects directly to your Open Dental database in real-time. Book appointments, verify patients, check insurance — all while the patient is still on the phone. No middleware. No delays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2">
              Start Free Trial <ArrowRight size={20} />
            </a>
            <button onClick={() => window.open('https://www.youtube.com/watch?v=lxRwEp3S71I', '_blank')} className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all border border-white/10">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black font-display text-center mb-4">
            Real-Time <span className="text-cyan-400">Open Dental</span> Sync
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Every action happens live in your database. Not batch sync. Not next-day import. Real-time.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { icon: Phone, title: "Patient Calls Your Office", desc: "After hours, weekends, or when your front desk is busy — the AI answers every call in under 3 seconds." },
                { icon: UserCheck, title: "Instant Patient Verification", desc: "Searches Open Dental by name + DOB. Uses fuzzy matching for typos. Asks for spelling confirmation when needed." },
                { icon: CreditCard, title: "Insurance Verification", desc: "Reads primary and secondary insurance from Open Dental. Updates patient profiles automatically if plans changed." },
                { icon: Calendar, title: "Live Appointment Booking", desc: "Queries available slots by provider and operatory. Books directly into Open Dental with procedure codes attached." }
              ].map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <step.icon className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Database className="text-cyan-400" size={24} /> Technical Specifications
              </h3>
              <ul className="space-y-3">
                {[
                  "Direct MySQL connection to Open Dental database",
                  "Real-time read/write — zero sync delay",
                  "Fuzzy name matching with spelling confirmation",
                  "Automatic procedure code assignment (D0120, D0150, D1110, etc.)",
                  "Provider and operatory-aware scheduling logic",
                  "New patient profile auto-creation with demographics",
                  "Insurance carrier and plan validation",
                  "Call log summary appended to patient notes"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle className="text-cyan-400 shrink-0 mt-0.5" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 px-6 border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black font-display text-center mb-12">
            Why Practices Choose Orapex AI for <span className="text-cyan-400">Open Dental</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "24/7 Call Capture", desc: "Emergency calls at 2 AM. Saturday scheduling. Holiday inquiries. Every call gets answered and booked." },
              { icon: Lock, title: "Self-Hosted HIPAA", desc: "AWS infrastructure with end-to-end encryption. Dedicated tenant isolation. Signed BAA" },
              { icon: Zap, title: "Custom Setup", desc: "We connect to your Open Dental database, configure your workflows, No IT team required." }
            ].map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors">
                <card.icon className="text-cyan-400 mb-4" size={32} />
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-t border-slate-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black font-display text-center mb-12">
            Open Dental AI <span className="text-cyan-400">FAQ</span>
          </h2>
          <div className="space-y-4">
            {[
              { q: "Does Orapex AI need a separate Open Dental license?", a: "No. We connect to your existing Open Dental database using the credentials you provide. No additional licenses, no middleware software." },
              { q: "How does the AI confirm it's the right patient?", a: "It asks for first name, last name, and date of birth. Fuzzy matching handles typos and similar names. If confidence is low, it asks the patient to spell their name." },
              { q: "What about new patients not in the database?", a: "The AI creates a new patient profile automatically with name, phone, and DOB. Your staff completes remaining fields during check-in." },
              { q: "Which procedure codes does the AI assign?", a: "You set defaults during onboarding — typically D0120 (periodic eval), D0150 (comprehensive eval), D1110 (prophylaxis). Custom codes and multi-code appointments supported." },
              { q: "Is patient data safe with this integration?", a: "Yes. Our Infrastructure is Self-hosted. Signed BAA. AES-256 encryption. We never use PHI for AI training. You can audit every database query." }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2 text-white">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black font-display mb-6">
            Stop Missing <span className="text-cyan-400">Open Dental</span> Calls
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            28% of dental calls happen after hours. Most go to voicemail and never call back. Capture that revenue.
          </p>
          <a href="#contact" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            Start 2-Weekend Free Trial
          </a>
        </div>
      </section>

      <div id="contact"><ContactForm /></div>
    </div>
  );
};

export default OpenDentalPage;
