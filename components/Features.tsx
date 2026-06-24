'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CalendarCheck, UserCheck, ShieldCheck, Database, PhoneForwarded, Lock } from 'lucide-react';

const featuresData = [
  {
    icon: CalendarCheck,
    title: "Automated Booking",
    desc: "Reduces no-shows and frees up front-desk staff by handling scheduling automatically."
  },
  {
    icon: UserCheck,
    title: "Patient Recognition",
    desc: "Instantly differentiates new vs. existing patients and fetches info from your PMS."
  },
  {
    icon: ShieldCheck,
    title: "Insurance Verification",
    desc: "Checks coverage, eligibility, and benefits in real-time before the appointment."
  },
  {
    icon: Database,
    title: "PMS Integration",
    desc: "Connects seamlessly with Dentrix, Eaglesoft, Open Dental, and more."
  },
  {
    icon: PhoneForwarded,
    title: "24/7 Call Handling",
    desc: "Answers every call outside office hours to capture patients who would otherwise hang up."
  },
  {
    icon: Lock,
    title: "HIPAA Compliant",
    desc: "Enterprise-grade encryption and security measures ensure patient data is safe and legal."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative bg-slate-950">
      <style>{`
        @keyframes spin-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-border-wrapper {
          position: relative;
          overflow: hidden;
        }
        .spin-border-wrapper::before {
          content: '';
          position: absolute;
          inset: -100%;
          background: conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 50%, #06b6d4 100%);
          animation: spin-border 4s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight mb-4">
            Powerful <span className="text-cyan-400">Capabilities</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Built specifically for modern dental practices to maximize efficiency and revenue.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <div className="spin-border-wrapper relative h-full bg-slate-900 rounded-2xl p-[1px]">
                
                <div className="relative h-full bg-slate-950 rounded-2xl p-8 flex flex-col items-start gap-4 z-10">
                  <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-950/20 transition-all duration-300">
                    <feature.icon className="text-cyan-400" size={24} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
