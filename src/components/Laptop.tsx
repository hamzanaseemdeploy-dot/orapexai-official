import React from 'react';
import { motion } from 'motion/react';
import { Headset } from 'lucide-react';

interface LaptopProps {
  isOpen: boolean;
}

const LEFT_BAR_HEIGHTS  = [30, 55, 70, 45, 60, 35];
const RIGHT_BAR_HEIGHTS = [40, 65, 50, 75, 45, 60];

const Laptop: React.FC<LaptopProps> = ({ isOpen }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto perspective-[2000px] group px-4 md:px-0">
      <motion.div
        className="relative z-10 w-full max-w-[600px] aspect-[3/2] mx-auto"
        style={{ transformStyle: 'preserve-3d', willChange: 'transform, opacity' }}
        initial={{ rotateX: 85, scale: 0.8, opacity: 0, y: 100 }}
        animate={{
          rotateX: isOpen ? 10 : 85,
          scale:   isOpen ? 1  : 0.8,
          opacity: isOpen ? 1  : 0,
          y:       isOpen ? 0  : 100,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20, mass: 1.5, delay: 0.1 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[#1a1a1a] rounded-t-2xl shadow-2xl overflow-hidden origin-bottom backface-hidden"
          style={{
            transformStyle: 'preserve-3d',
            transformOrigin: 'bottom',
            boxShadow: '0 0 0 2px #333',
            willChange: 'transform',
          }}
          initial={{ rotateX: -90 }}
          animate={{ rotateX: isOpen ? 0 : -90 }}
          transition={{ delay: 1.0, type: 'spring', stiffness: 45, damping: 15, mass: 0.8 }}
        >
          <div className="absolute inset-0 border-[3px] border-cyan-500/50 rounded-t-xl z-50 pointer-events-none shadow-[inset_0_0_20px_rgba(6,182,212,0.5)] opacity-80" />

          <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-50">
            <div className="w-1.5 h-1.5 rounded-full bg-black/80" />
            <div className="w-2 h-2 rounded-full bg-black border border-slate-700 relative">
              <div className="w-0.5 h-0.5 bg-green-400 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse shadow-[0_0_5px_#4ade80]" />
            </div>
          </div>

          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-[#0B1120] to-slate-900 relative flex flex-col items-center justify-center p-4 md:p-8">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            <motion.div
              className="relative z-20"
              style={{ willChange: 'transform, opacity' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ delay: 1.6, type: 'spring', stiffness: 100 }}
            >
              <div className="absolute -inset-10 bg-cyan-500/10 blur-3xl rounded-full animate-pulse" />
              <Headset
                className="text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.6)] w-16 h-16 md:w-24 md:h-24"
                strokeWidth={1.5}
              />

              <div className="absolute top-1/2 right-full mr-4 md:mr-6 flex gap-1 items-center h-20 -translate-y-1/2 flex-row-reverse">
                {LEFT_BAR_HEIGHTS.map((h, i) => (
                  <motion.div
                    key={`l-${i}`}
                    className="w-1 md:w-1.5 bg-cyan-500 rounded-full shadow-[0_0_10px_cyan]"
                    style={{ willChange: 'height' }}
                    animate={{ height: [10, h, 20, h - 10, 10] }}
                    transition={{ repeat: Infinity, duration: 0.9, delay: i * 0.1, ease: 'easeInOut' }}
                  />
                ))}
              </div>

              <div className="absolute top-1/2 left-full ml-4 md:mr-6 flex gap-1 items-center h-20 -translate-y-1/2">
                {RIGHT_BAR_HEIGHTS.map((h, i) => (
                  <motion.div
                    key={`r-${i}`}
                    className="w-1 md:w-1.5 bg-cyan-500 rounded-full shadow-[0_0_10px_cyan]"
                    style={{ willChange: 'height' }}
                    animate={{ height: [10, h, 20, h - 10, 10] }}
                    transition={{ repeat: Infinity, duration: 0.9, delay: i * 0.1, ease: 'easeInOut' }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mt-6 md:mt-10 flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: 1.8 }}
            >
              <div className="text-[10px] md:text-xs text-cyan-500 font-mono tracking-[0.2em] animate-pulse">SYSTEM ONLINE</div>
              <h3 className="text-xl md:text-3xl font-bold text-white tracking-widest uppercase font-display drop-shadow-lg text-center">
                AI Receptionist
              </h3>
            </motion.div>

            <div className="absolute top-0 right-0 w-[150%] h-full bg-gradient-to-l from-white/5 to-transparent skew-x-[-20deg] pointer-events-none translate-x-[50%]" />
          </div>
        </motion.div>

        <div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[108%] h-[20px] md:h-[25px] rounded-b-xl shadow-2xl flex flex-col items-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="w-full h-full bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] rounded-b-xl border-t border-[#444] shadow-xl relative overflow-hidden">
            <div className="absolute bottom-0 w-full h-[2px] bg-cyan-500 shadow-[0_0_15px_2px_rgba(6,182,212,0.8)]" />
          </div>
          <div className="absolute top-0 w-1/3 h-[8px] bg-[#222] rounded-b-md border-b border-white/5" />
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90%] h-[60px] bg-cyan-500/10 blur-[50px] rounded-full scale-y-50" />
        </div>
      </motion.div>
    </div>
  );
};

export default Laptop;
