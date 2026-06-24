'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Sparkles } from 'lucide-react';
import { Message } from '@/lib/types';

interface ChatSimulationProps {
  start: boolean;
}

const CONVERSATION_DATA: Omit<Message, 'delay'>[] = [
  { id: '1', sender: 'user', text: 'Hi, are you open on Saturdays?' },
  { id: '2', sender: 'ai', text: 'Yes, we are open 9 AM to 2 PM this Saturday! Need an appointment?' },
  { id: '3', sender: 'user', text: 'Do you take Delta Dental insurance?' },
  { id: '4', sender: 'ai', text: 'Absolutely! We accept Delta Dental. Would you like to book a cleaning?' },
  { id: '5', sender: 'user', text: 'Yes please, 10 AM?' },
  { id: '6', sender: 'ai', text: 'Consider it done. See you then! 🦷' },
];

const DELAY_BETWEEN_MESSAGES = 2000;
const RESET_DELAY = 3000;

const ChatSimulation: React.FC<ChatSimulationProps> = ({ start }) => {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset and Loop Logic
  useEffect(() => {
    if (!start) return;

    let timeout: ReturnType<typeof setTimeout>;

    if (currentIndex < CONVERSATION_DATA.length) {
      // Add next message
      timeout = setTimeout(() => {
        const nextMsg = {
             ...CONVERSATION_DATA[currentIndex],
             delay: 0,
             id: `${CONVERSATION_DATA[currentIndex].id}-${Date.now()}` // Unique ID for key prop
        } as Message;
        setVisibleMessages((prev) => {
            // Keep only last 3 messages to prevent overcrowding visually
            const newHistory = [...prev, nextMsg];
            return newHistory.slice(-3); 
        });
        setCurrentIndex((prev) => prev + 1);
      }, DELAY_BETWEEN_MESSAGES);
    } else {
      // End of conversation, reset after delay
      timeout = setTimeout(() => {
        setVisibleMessages([]);
        setCurrentIndex(0);
      }, RESET_DELAY);
    }

    return () => clearTimeout(timeout);
  }, [start, currentIndex]);

  return (
    <div className="w-full max-w-md mx-auto h-[300px] md:h-[450px] relative mt-[-40px] md:mt-[-80px] z-30 perspective-[1000px] pointer-events-none">
      <div className="absolute inset-0 flex flex-col justify-end p-4 space-y-4">
        <AnimatePresence mode="popLayout">
          {visibleMessages.map((msg, index) => {
            const isLast = index === visibleMessages.length - 1;
            const isAi = msg.sender === 'ai';

            return (
              <motion.div
                key={msg.id}
                layout
                initial={{ opacity: 0, y: 100, scale: 0.5, rotateX: 20 }}
                animate={{ 
                  opacity: isLast ? 1 : 0.4, 
                  y: 0, 
                  scale: isLast ? 1 : 0.95,
                  rotateX: 0,
                  filter: isLast ? 'blur(0px)' : 'blur(2px)',
                  z: isLast ? 50 : 0
                }}
                exit={{ opacity: 0, y: -50, scale: 0.9, filter: 'blur(5px)' }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
                className={`flex ${isAi ? 'justify-start' : 'justify-end'} items-end gap-3 w-full`}
              >
                {isAi && (
                  <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)] border border-cyan-400 shrink-0">
                    <Sparkles size={14} className="text-white" />
                  </div>
                )}
                
                <div 
                  className={`
                    max-w-[85%] p-4 rounded-2xl text-sm font-medium shadow-2xl backdrop-blur-md
                    ${isAi 
                      ? 'bg-slate-800/95 text-cyan-50 border border-slate-600 rounded-bl-none shadow-[0_5px_15px_rgba(0,0,0,0.3)]' 
                      : 'bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-none border border-blue-500 shadow-[0_5px_15px_rgba(37,99,235,0.3)]'
                    }
                    ${isLast ? 'ring-1 ring-white/20' : ''}
                  `}
                >
                   {msg.text}
                </div>

                {!isAi && (
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-lg border border-blue-400 shrink-0">
                    <User size={14} className="text-white" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ChatSimulation;
