'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, animate } from 'motion/react';
import { Calculator, DollarSign, PhoneMissed, TrendingUp } from 'lucide-react';

const AnimatedCounter = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const startValue = parseInt(node.textContent?.replace(/[^0-9]/g, '') || '0', 10);
    
    const controls = animate(startValue, value, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate: (v) => {
        node.textContent = `${prefix}${Math.round(v).toLocaleString()}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [value, prefix, suffix]);

  return <span ref={ref} className="tabular-nums" />;
};

const StatsCalculator: React.FC = () => {
  const [callsPerDay, setCallsPerDay] = useState(45);

  const MISSED_RATE = 0.28;
  const CONVERSION_RATE = 0.6;
  const AVG_VALUE = 350;
  const DAYS_OPEN = 22;

  const missedMonthly = Math.round(callsPerDay * MISSED_RATE * DAYS_OPEN);
  const revenueLost = Math.round(missedMonthly * CONVERSION_RATE * AVG_VALUE);

  const sliderPercentage = ((callsPerDay - 10) / (200 - 10)) * 100;

  return (
    <section id="roi" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-sm font-semibold mb-6"
          >
            <Calculator size={16} /> ROI Calculator
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black font-display text-white mb-4"
          >
            Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Lost Revenue</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            See how much revenue your clinic might be leaving on the table due to missed calls.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

          <div className="flex flex-col gap-12">
            
            <div className="w-full">
              <div className="flex justify-between items-end mb-6">
                <label className="text-slate-300 font-medium text-lg flex items-center gap-2">
                  <PhoneMissed className="text-slate-500" size={20} /> Daily Inbound Calls
                </label>
                <div className="text-4xl font-bold font-display text-white tabular-nums">
                  {callsPerDay}
                </div>
              </div>

              <div className="relative h-6 w-full group">
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                   <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-100 ease-out"
                      style={{ width: `${sliderPercentage}%` }}
                   ></div>
                </div>

                <input
                  type="range"
                  min="10"
                  max="200"
                  step="1"
                  value={callsPerDay}
                  onChange={(e) => setCallsPerDay(Number(e.target.value))}
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                />

                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)] border-2 border-cyan-500 pointer-events-none z-10 transition-all duration-100 ease-out group-hover:scale-125"
                  style={{ left: `calc(${sliderPercentage}% - 12px)` }}
                >
                  <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-20 animate-ping"></div>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-slate-500 font-mono">
                <span>10 calls</span>
                <span>200 calls</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800/50 flex items-center justify-between group hover:border-red-500/30 transition-colors">
                <div>
                  <div className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider">Missed Calls / Month</div>
                  <div className="text-3xl font-bold text-white group-hover:text-red-400 transition-colors">
                     <AnimatedCounter value={missedMonthly} />
                  </div>
                  <div className="text-xs text-slate-500 mt-2">Based on 28% industry avg</div>
                </div>
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-red-950/30 transition-colors">
                   <PhoneMissed size={24} className="text-slate-400 group-hover:text-red-400 transition-colors" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 rounded-2xl p-6 border border-slate-700/50 flex items-center justify-between relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="text-cyan-200 text-sm font-medium mb-1 uppercase tracking-wider flex items-center gap-2">
                    Potential Revenue Lost <TrendingUp size={14} />
                  </div>
                  <div className="text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    <AnimatedCounter value={revenueLost} prefix="$" />
                  </div>
                  <div className="text-xs text-slate-400 mt-2">Per Month</div>
                </div>
                
                <div className="relative z-10 w-12 h-12 bg-cyan-950/50 border border-cyan-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                   <DollarSign size={24} className="text-cyan-400" />
                </div>
              </div>

            </div>

            <div className="text-center pt-4 border-t border-slate-800/50">
               <p className="text-slate-400 mb-4">Stop losing revenue. Start capturing every patient.</p>
               <a href="#contact" className="inline-block px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-cyan-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  Recapture This Revenue
               </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCalculator;
