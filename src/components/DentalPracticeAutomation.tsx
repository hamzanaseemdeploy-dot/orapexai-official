import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, Shield, Bot, CheckCircle, ArrowRight, Clock, TrendingUp, Users, CreditCard, MessageSquare, Zap, BarChart3 } from 'lucide-react';
import ContactForm from './ContactForm';

const DentalPracticeAutomation: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-6">
            <Bot size={16} /> Dental Practice Automation
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display mb-6 leading-tight">
            Automate Your <span className="text-cyan-400">Dental Practice</span> Front Desk
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Stop losing patients to voicemail and manual scheduling. OrapexAI automates calls, appointments, insurance checks, and patient verification — 24/7 without adding staff.
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

      {/* The Problem */}
      <section className="py-20 px-6 border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black font-display text-center mb-4">
            Why Manual Front Desk Work Is <span className="text-cyan-400">Costing You Patients</span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            The average dental practice misses 34% of incoming calls. Most happen during lunch, after hours, or when your team is with a patient. Every missed call is a lost appointment — and lost revenue.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Phone, stat: "34%", label: "Of calls go unanswered", desc: "Lunch breaks, busy mornings, and after-hours voicemails kill your answer rate." },
              { icon: TrendingUp, stat: "$47K", label: "Lost revenue per year", desc: "At $200 average production per appointment, 5 missed calls per week = serious money left on the table." },
              { icon: Users, stat: "62%", label: "Patients won't leave voicemail", desc: "Modern patients hang up and call the next practice. They expect instant answers." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center">
                <item.icon className="text-cyan-400 mx-auto mb-4" size={32} />
                <div className="text-4xl font-black text-white mb-1">{item.stat}</div>
                <div className="text-cyan-400 font-semibold text-sm mb-2">{item.label}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Automation Looks Like */}
      <section className="py-20 px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black font-display text-center mb-4">
            What <span className="text-cyan-400">Dental Practice Automation</span> Actually Means
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Automation isn't replacing your team — it's eliminating the repetitive tasks that burn them out and cost you patients.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { icon: Phone, title: "AI Answers Every Call Instantly", desc: "No hold time. No voicemail. The AI picks up in under 3 seconds, identifies the caller's intent, and handles the request or escalates to your team." },
                { icon: Calendar, title: "Appointments Booked Automatically", desc: "Checks real-time availability by provider and operatory. Books directly into your PMS with procedure codes. Sends confirmation automatically." },
                { icon: CreditCard, title: "Insurance Verified in Real Time", desc: "Reads primary and secondary coverage from your PMS. Flags expired plans. Updates patient profiles without staff touching a keyboard." },
                { icon: Users, title: "Patient Verification Without Friction", desc: "Name + DOB lookup with fuzzy matching. Handles typos, nicknames, and similar names by asking for spelling confirmation." }
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
                <BarChart3 className="text-cyan-400" size={24} /> Automation Impact
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "Answer rate", from: "66%", to: "100%" },
                  { label: "After-hours bookings", from: "0/day", to: "3-5/day" },
                  { label: "Front desk call volume", from: "40 hrs/wk", to: "12 hrs/wk" },
                  { label: "No-show rate", from: "18%", to: "7%" },
                  { label: "New patient capture", from: "54%", to: "89%" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-between text-sm border-b border-slate-800 pb-3 last:border-0">
                    <span className="text-slate-300">{item.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 line-through">{item.from}</span>
                      <ArrowRight size={14} className="text-cyan-400" />
                      <span className="text-cyan-400 font-bold">{item.to}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black font-display text-center mb-12">
            Built for Modern <span className="text-cyan-400">Dental Offices</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "24/7 Call Coverage", desc: "Holidays, weekends, 2 AM emergencies — every call gets answered by a professional AI voice that sounds human." },
              { icon: Zap, title: "48-Hour Go Live", desc: "Connect to your PMS, configure workflows, train the AI on your protocols. Live in two days, not two months." },
              { icon: Shield, title: "HIPAA Compliant", desc: "AWS-hosted with AES-256 encryption. Signed BAA. Dedicated tenant isolation. You own and control all patient data." },
              { icon: MessageSquare, title: "Smart Call Routing", desc: "Emergency calls escalate to your on-call dentist instantly. Billing questions go to your admin. Scheduling is handled automatically." },
              { icon: Bot, title: "Natural Conversations", desc: "Patients don't speak in keywords. The AI handles interruptions, changes of mind, and complex multi-step requests naturally." },
              { icon: CheckCircle, title: "Zero Training Required", desc: "Your staff doesn't learn new software. The AI works inside your existing phone system and PMS. Invisible to your team until they check the schedule." }
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
            Dental Practice Automation <span className="text-cyan-400">FAQ</span>
          </h2>
          <div className="space-y-4">
            {[
              { q: "Will this replace my front desk staff?", a: "No. OrapexAI handles the repetitive work — answering calls, booking routine appointments, verifying insurance. Your team focuses on in-office patient experience, billing complexity, and relationship building." },
              { q: "How long does it take to set up?", a: "48 hours. We connect to your practice management system, configure your scheduling rules, and train the AI on your voice preferences. No IT team needed." },
              { q: "What practice management systems do you support?", a: "Currently Open Dental with full real-time integration. Dentrix, Eaglesoft, and Curve coming Q3 2025. Custom integrations available for multi-location groups." },
              { q: "Can the AI handle emergency calls?", a: "Yes. You configure escalation rules — severe pain, swelling, or trauma calls get transferred to your on-call dentist immediately. Non-urgent after-hours requests are booked for the next available slot." },
              { q: "Is there a contract or setup fee?", a: "No setup fee. Month-to-month billing. Two-weekend free trial. Cancel anytime. We win by keeping you, not locking you in." }
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
            Stop Losing Patients to <span className="text-cyan-400">Voicemail</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            28% of dental revenue walks out the door when calls go unanswered. Automate your front desk and capture every opportunity.
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

export default DentalPracticeAutomation;
