import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 cursor-pointer">
              <Logo />
              <span className="text-xl font-bold tracking-tight font-display">Orapex<span className="text-cyan-400">AI</span></span>
            </Link>
            <p className="text-slate-500 mb-6 max-w-sm">
              Revolutionizing dental practice management with intelligent automation. No missed calls, just more smiles.
            </p>
            <div className="text-slate-600 text-sm">
              © 2024 OrapexAI Inc. All rights reserved.
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold font-display mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund-policy" className="hover:text-cyan-400 transition-colors">Refund Policy</Link></li>
              <li><Link href="/hipaa-policy" className="hover:text-cyan-400 transition-colors">HIPAA Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold font-display mb-6">Connect with Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-50/10 hover:border-cyan-500 hover:text-cyan-400 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-50/10 hover:border-cyan-500 hover:text-cyan-400 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-50/10 hover:border-cyan-500 hover:text-cyan-400 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
