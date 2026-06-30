'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

interface ArticleLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({ title, description, children }) => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navigation />
      <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all mb-12 font-semibold group bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>
        
        <header className="mb-12 border-b border-slate-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-black font-display text-white mb-4 tracking-tight">{title}</h1>
          <p className="text-xl text-slate-400 leading-relaxed">{description}</p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
          {children}
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default ArticleLayout;
