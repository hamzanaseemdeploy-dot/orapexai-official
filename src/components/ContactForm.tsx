import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin, CheckCircle, Loader2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "7e875e5b-5ed6-42a2-b1f1-9843f24ae7b1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormState('success');
      } else {
        console.error("Error", data);
        setFormState('idle');
      }
    } catch (error) {
      console.error("Error", error);
      setFormState('idle');
    }
  };

  const inputClasses = "w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300";

  return (
    <section className="py-24 relative bg-slate-950 overflow-hidden border-t border-slate-900">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-black font-display text-white mb-6">
                        Ready to <span className="text-cyan-400">Upgrade</span> Your Practice?
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-md">
                        Join hundreds of dental clinics using OrapexAI to automate appointments and boost revenue. Schedule a personalized demo or ask us anything.
                    </p>

                    <div className="space-y-6">
                        <motion.div 
                            className="flex items-center gap-4 group"
                            whileHover={{ x: 5 }}
                        >
                            <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-950/20 transition-all duration-300">
                                <Mail className="text-cyan-400" size={20} />
                            </div>
                            <div>
                                <div className="text-sm text-slate-500 font-medium">Email Us</div>
                                <div className="text-white font-semibold tracking-wide">hello@orapexai.com</div>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="flex items-center gap-4 group"
                            whileHover={{ x: 5 }}
                        >
                            <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-950/20 transition-all duration-300">
                                <Phone className="text-cyan-400" size={20} />
                            </div>
                            <div>
                                <div className="text-sm text-slate-500 font-medium">Call Us</div>
                                <div className="text-white font-semibold tracking-wide">+1 (555) 123-4567</div>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="flex items-center gap-4 group"
                            whileHover={{ x: 5 }}
                        >
                            <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-950/20 transition-all duration-300">
                                <MapPin className="text-cyan-400" size={20} />
                            </div>
                            <div>
                                <div className="text-sm text-slate-500 font-medium">HQ</div>
                                <div className="text-white font-semibold tracking-wide">San Francisco, CA</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"></div>

                    {formState === 'success' ? (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-[460px] flex flex-col items-center justify-center text-center p-6"
                        >
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                                <CheckCircle className="text-green-400" size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 font-display">Message Sent!</h3>
                            <p className="text-slate-400 max-w-xs mx-auto">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                            <button 
                                onClick={() => setFormState('idle')}
                                className="mt-8 text-cyan-400 hover:text-cyan-300 font-medium text-sm underline underline-offset-4 transition-colors"
                            >
                                Send another message
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5 relative">
                           <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-xs text-slate-400 font-bold uppercase tracking-wider ml-1">First Name</label>
                                    <input type="text" name="first_name" required className={inputClasses} placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-slate-400 font-bold uppercase tracking-wider ml-1">Last Name</label>
                                    <input type="text" name="last_name" required className={inputClasses} placeholder="Doe" />
                                </div>
                           </div>

                           <div className="space-y-2">
                                <label className="text-xs text-slate-400 font-bold uppercase tracking-wider ml-1">Email Address</label>
                                <input type="email" name="email" required className={inputClasses} placeholder="john@example.com" />
                           </div>

                           <div className="space-y-2">
                                <label className="text-xs text-slate-400 font-bold uppercase tracking-wider ml-1">Practice Name</label>
                                <input type="text" name="practice_name" className={inputClasses} placeholder="Bright Smiles Dental" />
                           </div>

                           <div className="space-y-2">
                                <label className="text-xs text-slate-400 font-bold uppercase tracking-wider ml-1">Message</label>
                                <textarea rows={4} name="message" className={inputClasses} placeholder="Tell us about your needs..." />
                           </div>

                           <button 
                                type="submit" 
                                disabled={formState === 'submitting'}
                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed font-display tracking-wide"
                           >
                                {formState === 'submitting' ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} /> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                           </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default ContactForm;
