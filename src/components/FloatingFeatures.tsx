import React from 'react';
import { motion } from 'motion/react';
import { CalendarCheck, DollarSign, ShieldCheck, Clock } from 'lucide-react';

interface FloatingFeaturesProps {
  show: boolean;
}

const features = [
  { icon: CalendarCheck, label: "24/7 Booking", x: -520, y: -120, delay: 0 },
  { icon: DollarSign, label: "Revenue Growth", x: 520, y: -120, delay: 0.1 },
  { icon: ShieldCheck, label: "Insurance Verify", x: -520, y: 120, delay: 0.2 },
  { icon: Clock, label: "Zero Wait Time", x: 520, y: 120, delay: 0.3 },
];

const FloatingFeatures: React.FC<FloatingFeaturesProps> = ({ show }) => {
  return (
    <>
      {features.map((feat, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 hidden lg:flex flex-col items-center gap-2"
          style={{ willChange: 'transform' }}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          animate={{ 
            x: show ? feat.x : 0, 
            y: show ? feat.y : 0, 
            opacity: show ? 1 : 0, 
            scale: show ? 1 : 0 
          }}
          transition={{ 
            type: "spring", 
            stiffness: 50, 
            delay: 1.5 + feat.delay
          }}
        >
          <div className="w-16 h-16 rounded-2xl bg-slate-800/50 backdrop-blur border border-slate-700 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.3)] group hover:border-cyan-500 transition-colors">
            <feat.icon className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={32} />
          </div>
          <span className="text-slate-400 text-sm font-semibold tracking-wider uppercase bg-black/40 px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap">
            {feat.label}
          </span>
        </motion.div>
      ))}
    </>
  );
};

export default FloatingFeatures;
