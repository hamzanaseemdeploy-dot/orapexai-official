import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'motion/react';
import { Phone, Bot, CalendarCheck, BellRing } from 'lucide-react';

const steps = [
  { 
    icon: Phone, 
    title: "Patient Calls", 
    desc: "A patient calls your clinic to book or ask questions, even after hours." 
  },
  { 
    icon: Bot, 
    title: "AI Analysis", 
    desc: "Our AI answers instantly, understands intent, and verifies insurance data." 
  },
  { 
    icon: CalendarCheck, 
    title: "Auto-Booking", 
    desc: "The appointment is synced directly into your existing practice software." 
  },
  { 
    icon: BellRing, 
    title: "Staff Notified", 
    desc: "Your team gets a summary, and the patient receives a confirmation text." 
  }
];

const HowItWorks: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section className="py-32 relative bg-slate-950 border-t border-slate-900 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight mb-4">
            Seamless <span className="text-cyan-400">Workflow</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From the first ring to the final confirmation, our AI handles the entire patient journey automatically.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-slate-800 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 shadow-[0_0_10px_cyan]"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            />
          </div>

          <motion.div 
            className="grid md:grid-cols-4 gap-12 md:gap-8 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                className="relative flex flex-col items-center text-center group"
                variants={itemVariants}
              >
                {i > 0 && (
                  <div className="md:hidden absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-slate-800">
                    <motion.div
                      className="w-full h-full bg-gradient-to-b from-cyan-500 to-blue-500 shadow-[0_0_10px_cyan]"
                      initial={{ scaleY: 0, originY: 0 }}
                      animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.2 }}
                    />
                  </div>
                )}

                <div className="w-24 h-24 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center mb-6 relative z-10 group-hover:border-cyan-500 transition-colors duration-500 shadow-xl">
                  <div className="absolute inset-2 rounded-full bg-slate-800 group-hover:bg-cyan-950/30 transition-colors duration-500"></div>
                  <step.icon size={36} className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-500 relative z-20" />
                  
                  <div className="absolute inset-0 rounded-full bg-cyan-500/20 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-transform duration-700 ease-out"></div>
                </div>

                <h3 className="text-xl font-bold font-display mb-3 group-hover:text-cyan-400 transition-colors">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
