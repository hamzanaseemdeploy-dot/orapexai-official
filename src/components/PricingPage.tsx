import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Info, ShieldCheck, Zap, Star, ArrowRight } from 'lucide-react';

interface PricingPageProps {
  onCtaClick: () => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onCtaClick }) => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Standard Plan",
      badge: "The Weekend Warrior",
      description: "Capture high-value after-hours revenue for single-location practices.",
      monthlyPrice: 399,
      yearlyPrice: 3830,
      setupFee: "$349 setup fee (Waived with 3-mo contract)",
      features: [
        "260 Calls / Month",
        "24/7 After-Hours & Weekends",
        "Direct PMS Booking",
        "Emergency Triage & Alerts",
        "Insurance Info Capture",
        "HIPAA Recordings & Transcripts",
        "Major PMS Integrations",
        "2-Weekend Free Trial"
      ],
      cta: "Start Free Trial",
      isPopular: true,
      footnote: "Ideal for 40-60 after-hours calls per week."
    },
    {
      name: "Enterprise",
      badge: "Custom Plan",
      description: "Scalable solutions for high-volume or multi-location practices.",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      setupFee: "Customized onboarding",
      features: [
        "Custom Call Volume",
        "Multi-Location Routing",
        "Business Hours Overflow",
        "Custom IVR & Workflows",
        "Priority 24/7 Support",
        "Custom Voice Tuning",
        "Dedicated Manager",
        "SLA Guarantee"
      ],
      cta: "Book Strategy Call",
      isPopular: false,
      footnote: "Designed for 5+ locations or 500+ monthly calls."
    }
  ];

  const comparisonTable = [
    { feature: "Monthly Calls", pro: "260 calls", custom: "Unlimited/Custom" },
    { feature: "Coverage", pro: "After-hours & Weekends", custom: "24/7 + Overflow" },
    { feature: "Setup Fee", pro: "$349 (Waivable)", custom: "Custom (Waivable)" },
    { feature: "Voice Tuning", pro: "Standard", custom: "Advanced/Custom" },
    { feature: "Multi-Location", pro: "—", custom: "✓" },
    { feature: "Support", pro: "Email/Chat", custom: "Dedicated Manager" },
    { feature: "Integrations", pro: "Standard PMS", custom: "Advanced/API" },
    { feature: "Contract", pro: "Month-to-month", custom: "6-12 month min" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Star size={12} className="fill-current" />
            Flexible for every clinic
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black font-display text-white mb-6 tracking-tight"
          >
            Predictable <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Pricing</span>
          </motion.h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Never miss another weekend emergency. Capture high-value patient calls when your practice is closed.
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm font-semibold transition-colors ${!isYearly ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 bg-slate-800 rounded-full p-1 relative transition-colors hover:bg-slate-700 border border-slate-700"
            >
              <motion.div 
                animate={{ x: isYearly ? 24 : 0 }}
                className="w-6 h-6 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
              />
            </button>
            <div className="flex items-center gap-2">
                <span className={`text-sm font-semibold transition-colors ${isYearly ? 'text-white' : 'text-slate-500'}`}>Yearly</span>
                <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-500/20 uppercase tracking-tighter">Save 20%</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className={`relative group h-full flex flex-col rounded-[2.5rem] border p-1 transition-all duration-500 ${
                plan.isPopular 
                  ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-cyan-500/30 shadow-[0_20px_50px_rgba(6,182,212,0.1)]' 
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="bg-slate-950 rounded-[2.3rem] p-8 md:p-12 h-full flex flex-col z-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-4 inline-block ${
                      plan.isPopular ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}>
                      {plan.badge}
                    </span>
                    <h3 className="text-3xl font-black font-display text-white">{plan.name}</h3>
                  </div>
                  {plan.isPopular && <Zap className="text-cyan-400" size={32} />}
                </div>

                <div className="mb-10">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl md:text-6xl font-black text-white">
                      {typeof plan.monthlyPrice === 'number' 
                        ? (isYearly && typeof plan.yearlyPrice === 'number' ? `$${(plan.yearlyPrice / 12).toFixed(0)}` : `$${plan.monthlyPrice}`) 
                        : plan.monthlyPrice}
                    </span>
                    {typeof plan.monthlyPrice === 'number' && <span className="text-slate-500 font-bold">/mo</span>}
                  </div>
                  <p className="text-sm text-slate-400 mb-2">{isYearly && typeof plan.yearlyPrice === 'number' ? `Billed annually at $${plan.yearlyPrice.toLocaleString()}` : plan.setupFee}</p>
                </div>

                <p className="text-slate-300 text-sm mb-10 leading-relaxed font-medium">
                  {plan.description}
                </p>

                <div className="space-y-4 mb-12 flex-1">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.isPopular ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-500'}`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-slate-300 text-sm font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                <button 
                   onClick={onCtaClick}
                   className={`w-full py-5 rounded-2xl font-black font-display text-lg tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group ${
                     plan.isPopular 
                       ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_10px_30px_rgba(6,182,212,0.3)] hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(6,182,212,0.5)]' 
                       : 'bg-white text-black hover:bg-cyan-50 hover:scale-[1.02]'
                   }`}
                >
                  {plan.cta} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="mt-8 pt-8 border-t border-slate-900 flex items-start gap-2">
                   <Info size={14} className="text-slate-600 mt-1 flex-shrink-0" />
                   <p className="text-xs text-slate-500 leading-tight italic">
                      {plan.footnote}
                   </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-black font-display text-white mb-4">Detailed Comparison</h2>
            <p className="text-slate-400">Everything we offer, side by side. (Drag left/right to view)</p>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl">
            <motion.div 
              className="cursor-grab active:cursor-grabbing overflow-x-auto"
              whileTap={{ cursor: 'grabbing' }}
            >
              <motion.div 
                drag="x"
                dragConstraints={{ left: -400, right: 0 }}
                className="min-w-[800px]"
              >
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-950/50">
                      <th className="p-6 md:p-8 text-slate-500 font-bold uppercase tracking-widest text-xs">Feature</th>
                      <th className="p-6 md:p-8 text-cyan-400 font-bold uppercase tracking-widest text-xs">Standard</th>
                      <th className="p-6 md:p-8 text-white font-bold uppercase tracking-widest text-xs">Custom</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {comparisonTable.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-800/20 transition-colors">
                        <td className="p-6 md:p-8 text-slate-200 font-medium">{row.feature}</td>
                        <td className="p-6 md:p-8 text-slate-400 font-semibold">{row.pro}</td>
                        <td className="p-6 md:p-8 text-white font-bold">{row.custom}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-slate-900 border border-slate-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none"></div>
          <ShieldCheck className="mx-auto text-cyan-400 mb-8" size={64} />
          <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-6">Unsure which plan fits?</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Start with our 2-weekend free trial. We'll handle your after-hours calls and show you exactly how many patients you're currently missing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onCtaClick}
              className="bg-white text-black px-10 py-5 rounded-2xl font-black font-display text-lg hover:bg-cyan-50 transition-all hover:scale-105"
            >
              Contact Sales Team
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default PricingPage;
