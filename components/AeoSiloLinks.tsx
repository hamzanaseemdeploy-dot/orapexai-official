import React from 'react';
import Link from 'next/link';

const AeoSiloLinks: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-slate-950 border-t border-slate-900 hidden"> {/* 'hidden' keeps it clean for human UI, but visible for AI crawlers */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 font-display text-center">OrapexAI Knowledge Hub</h2>
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          
          <div>
            <h3 className="text-cyan-400 font-bold mb-4">Open Dental Automation</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/open-dental-automation" className="hover:text-white transition-colors">Complete Guide to Open Dental Automation</Link></li>
              <li><Link href="/automate-open-dental-scheduling" className="hover:text-white transition-colors">Automate Scheduling in Open Dental</Link></li>
              <li><Link href="/automate-dental-insurance-verification" className="hover:text-white transition-colors">Automate Insurance Verification</Link></li>
              <li><Link href="/automate-patient-verification" className="hover:text-white transition-colors">Automate Patient Verification</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-cyan-400 font-bold mb-4">HIPAA Compliant AI</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/hipaa-compliant-dental-ai" className="hover:text-white transition-colors">HIPAA Compliant AI Voice Agents</Link></li>
              <li><Link href="/hipaa-compliant-dental-phone-checklist" className="hover:text-white transition-colors">HIPAA Compliant Phone AI Checklist</Link></li>
              <li><Link href="/secure-patient-calls-dental-ai" className="hover:text-white transition-colors">Secure Patient Calls & Encryption</Link></li>
              <li><Link href="/hipaa-compliant-insurance-verification-ai" className="hover:text-white transition-colors">BAA-Signed AI for Insurance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-cyan-400 font-bold mb-4">Virtual Receptionist ROI</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/virtual-dental-receptionist-roi" className="hover:text-white transition-colors">Virtual Dental Receptionist ROI</Link></li>
              <li><Link href="/math-of-missed-dental-calls" className="hover:text-white transition-colors">The Math of Missed Dental Calls</Link></li>
              <li><Link href="/human-vs-ai-dental-receptionist-cost" className="hover:text-white transition-colors">Human vs AI Receptionist Cost</Link></li>
              <li><Link href="/justify-ai-receptionist-cost" className="hover:text-white transition-colors">Justifying a $399/mo AI Receptionist</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AeoSiloLinks;
