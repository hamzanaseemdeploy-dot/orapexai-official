import React from 'react';
import { Phone, Calendar, Shield, Database, CheckCircle, ArrowRight, Clock, UserCheck, CreditCard, Lock, Zap, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';

export default function OpenDentalPage() {
  return (
    <div className="bg-slate-950 text-white">
      {/* JSON-LD Schema for AI Entity Extraction */}
      <Script
        id="opendental-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "@id": "https://orapexai.com/open-dental-ai-receptionist#software",
                "name": "OrapexAI for Open Dental",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Open Dental",
                "offers": {
                  "@type": "Offer",
                  "price": "399",
                  "priceCurrency": "USD",
                  "priceValidUntil": "2026-12-31",
                  "availability": "https://schema.org/InStock"
                },
                "featureList": "Direct MySQL connection, real-time read/write, fuzzy patient matching by name and date of birth, automatic ADA procedure code assignment, provider and operatory-aware scheduling, new patient profile auto-creation, insurance carrier validation, call log summary appended to patient notes",
                "requirements": "Open Dental database credentials",
                "softwareHelp": {
                  "@type": "CreativeWork",
                  "name": "Open Dental AI FAQ",
                  "url": "https://orapexai.com/open-dental-ai-receptionist#faq"
                },
                "isRelatedTo": {
                  "@type": "SoftwareApplication",
                  "name": "Open Dental"
                },
                "url": "https://orapexai.com/open-dental-ai-receptionist",
                "author": {
                  "@type": "Organization",
                  "@id": "https://orapexai.com/#organization"
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://orapexai.com/open-dental-ai-receptionist#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Does OrapexAI need a separate Open Dental license?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. OrapexAI connects to your existing Open Dental database using the credentials you provide. No additional licenses or middleware software are required."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does OrapexAI confirm patient identity during calls?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "OrapexAI asks for first name, last name, and date of birth. It uses fuzzy matching to handle typos and similar names. If confidence is low, it asks the patient to spell their name."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What happens when a new patient calls?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "OrapexAI creates a new patient profile automatically with name, phone number, and date of birth. Your staff completes remaining fields during check-in."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which ADA procedure codes does OrapexAI assign to appointments?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You set defaults during onboarding — typically D0120 periodic oral evaluation, D0150 comprehensive oral evaluation, D1110 adult prophylaxis. Custom codes and multi-code appointments are supported."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is OrapexAI HIPAA compliant with Open Dental integration?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. OrapexAI is fully HIPAA compliant with signed Business Associate Agreements, AES-256 encryption at rest, TLS 1.2 or higher in transit, and audit logging. OrapexAI never uses Protected Health Information to train AI models."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-6">
            <Database size={16} /> Native Open Dental Integration
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display mb-6 leading-tight">
            The Only AI Receptionist Built for <span className="text-cyan-400">Open Dental</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            OrapexAI connects directly to your Open Dental database via native MySQL integration. Book appointments, verify patients using fuzzy name matching, check insurance coverage, and assign ADA procedure codes — all while the patient is still on the phone. No middleware. No batch sync. No delays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2"
            >
              Start Free Trial <ArrowRight size={20} />
            </Link>
            <a
              href="https://www.youtube.com/watch?v=lxRwEp3S71I"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all border border-white/10"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* How It Works — Self-Contained H2 Sections */}
      <section className="py-20 px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black font-display text-center mb-4">
            Real-Time <span className="text-cyan-400">Open Dental</span> Sync
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Every action happens live in your Open Dental database. Not batch sync. Not next-day import. Real-time read and write during the live patient call.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <Phone className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Patient Calls Your Dental Office</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">After hours, weekends, or when your front desk is busy — OrapexAI answers every patient call in under 3 seconds.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <UserCheck className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Instant Patient Verification in Open Dental</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">OrapexAI searches your Open Dental database by first name, last name, and date of birth. Fuzzy matching handles typos and similar names. If confidence is low, OrapexAI asks the patient to spell their name.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <CreditCard className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Insurance Verification During the Call</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">OrapexAI reads primary and secondary dental insurance from your Open Dental patient profile. It updates insurance information automatically if the patient reports a plan change during the call.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <Calendar className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Live Appointment Booking with Procedure Codes</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">OrapexAI queries available appointment slots by provider and operatory in real time. It books directly into Open Dental with ADA procedure codes attached — D0120 periodic evaluation, D0150 comprehensive evaluation, D1110 prophylaxis, or your custom codes.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Database className="text-cyan-400" size={24} /> Open Dental Technical Specifications
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle className="text-cyan-400 shrink-0 mt-0.5" size={16} />
                  Direct MySQL connection to Open Dental database
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle className="text-cyan-400 shrink-0 mt-0.5" size={16} />
                  Real-time read and write — zero sync delay
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle className="text-cyan-400 shrink-0 mt-0.5" size={16} />
                  Fuzzy name matching with spelling confirmation
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle className="text-cyan-400 shrink-0 mt-0.5" size={16} />
                  Automatic ADA procedure code assignment
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle className="text-cyan-400 shrink-0 mt-0.5" size={16} />
                  Provider and operatory-aware scheduling logic
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle className="text-cyan-400 shrink-0 mt-0.5" size={16} />
                  New patient profile auto-creation with demographics
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle className="text-cyan-400 shrink-0 mt-0.5" size={16} />
                  Insurance carrier and plan validation
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle className="text-cyan-400 shrink-0 mt-0.5" size={16} />
                  Call log summary appended to patient notes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose — Self-Contained H2 */}
      <section className="py-20 px-6 border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black font-display text-center mb-12">
            Why Dental Practices Choose OrapexAI for <span className="text-cyan-400">Open Dental</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors">
              <Clock className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-lg font-bold mb-2">24/7 Call Capture for Open Dental Practices</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Emergency dental calls at 2 AM. Saturday scheduling. Holiday inquiries. OrapexAI answers every call and books directly into your Open Dental schedule.</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors">
              <Lock className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-lg font-bold mb-2">Self-Hosted HIPAA Compliance</h3>
              <p className="text-slate-400 text-sm leading-relaxed">AWS infrastructure with end-to-end encryption. Dedicated tenant isolation. Signed Business Associate Agreement. OrapexAI never uses patient data for AI training.</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors">
              <Zap className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-lg font-bold mb-2">48-Hour Custom Setup</h3>
              <p className="text-slate-400 text-sm leading-relaxed">OrapexAI connects to your Open Dental database, configures your workflows, and goes live in 48 hours. No IT team required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — With Schema Markup Already Injected Above */}
      <section id="faq" className="py-20 px-6 border-t border-slate-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black font-display text-center mb-12">
            Open Dental AI <span className="text-cyan-400">FAQ</span>
          </h2>
          <div className="space-y-4">
            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2 text-white">Does OrapexAI need a separate Open Dental license?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">No. OrapexAI connects to your existing Open Dental database using the credentials you provide. No additional licenses or middleware software are required.</p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2 text-white">How does OrapexAI confirm patient identity during calls?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">OrapexAI asks for first name, last name, and date of birth. It uses fuzzy matching to handle typos and similar names. If confidence is low, it asks the patient to spell their name.</p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2 text-white">What happens when a new patient calls?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">OrapexAI creates a new patient profile automatically with name, phone number, and date of birth. Your staff completes remaining fields during check-in.</p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2 text-white">Which ADA procedure codes does OrapexAI assign to appointments?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">You set defaults during onboarding — typically D0120 periodic oral evaluation, D0150 comprehensive oral evaluation, D1110 adult prophylaxis. Custom codes and multi-code appointments are supported.</p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2 text-white">Is OrapexAI HIPAA compliant with Open Dental integration?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Yes. OrapexAI is fully HIPAA compliant with signed Business Associate Agreements, AES-256 encryption at rest, TLS 1.2 or higher in transit, and audit logging. OrapexAI never uses Protected Health Information to train AI models.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black font-display mb-6">
            Stop Missing <span className="text-cyan-400">Open Dental</span> Calls
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            28% of dental calls happen after hours. Most go to voicemail and never call back. OrapexAI captures that revenue by booking appointments directly into Open Dental 24/7.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]"
          >
            Start 2-Weekend Free Trial
          </Link>
        </div>
      </section>

      {/* Internal Link to Pricing */}
      <section className="py-12 px-6 border-t border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400 mb-4">Ready to see pricing?</p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
          >
            View OrapexAI Pricing <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
