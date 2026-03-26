import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "How does the AI handle incoming patient calls?",
    answer: "The AI answers calls in real-time, collects patient information, verifies insurance, and schedules appointments—just like a receptionist, ensuring no call is missed."
  },
  {
    question: "What happens if the AI doesn’t understand a patient’s request?",
    answer: "Calls can be escalated to your staff or flagged for review. Our system learns from interactions to improve over time."
  },
  {
    question: "Can the AI handle multiple calls simultaneously?",
    answer: "Yes! The AI can manage multiple calls at the same time without losing quality or accuracy."
  },
  {
    question: "Will it integrate with my current appointment system?",
    answer: "Our AI can integrate with most dental practice management systems or Google Calendar, ensuring seamless appointment updates."
  },
  {
    question: "Can I customize call scripts and workflows?",
    answer: "Absolutely. You can tailor the AI’s conversation flow, responses, and messages according to your clinic’s policies."
  },
  {
    question: "Is patient data secure?",
    answer: "Yes. All data is encrypted in transit and at rest. We follow HIPAA guidelines and ensure privacy compliance."
  },
  {
    question: "Does the AI record calls?",
    answer: "Calls can be recorded if needed for quality and training, with full compliance to privacy laws."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-sm font-semibold mb-6">
            <HelpCircle size={16} /> FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-6">
            Common <span className="text-cyan-400">Questions</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Everything you need to know about implementing AI in your dental practice.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-slate-800/50 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]' 
                  : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-semibold pr-8 transition-colors ${activeIndex === index ? 'text-white' : 'text-slate-300'}`}>
                  {item.question}
                </span>
                <span className={`shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-cyan-400' : 'text-slate-500'}`}>
                  <ChevronDown size={24} />
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
