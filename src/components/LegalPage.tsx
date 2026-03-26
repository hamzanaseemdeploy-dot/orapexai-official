import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Shield, Scale, CreditCard, Lock, Mail, Globe, CheckCircle2, AlertCircle, Eye, ShieldAlert, Share2, Database, UserCheck, FileText, Gavel, Ban, Zap, Clock, Bell, Settings, Tag, XCircle, Wallet } from 'lucide-react';

interface LegalPageProps {
  title: string;
  onBack: () => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, onBack }) => {
  const getIcon = () => {
    const t = title.toLowerCase();
    if (t.includes('privacy')) return <Shield className="text-cyan-400" size={40} />;
    if (t.includes('terms')) return <Scale className="text-cyan-400" size={40} />;
    if (t.includes('refund')) return <CreditCard className="text-red-400" size={40} />;
    if (t.includes('hipaa')) return <Lock className="text-cyan-400" size={40} />;
    return <Globe className="text-cyan-400" size={40} />;
  };

  const getContent = () => {
    const t = title.toLowerCase();
    
    if (t.includes('privacy')) {
      return (
        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Eye size={22} className="text-cyan-500" /> 1. Introduction
            </h3>
            <p className="leading-relaxed">At OrapexAI, we value your privacy and the confidentiality of your patients' information. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of personal data when you use our platform and the choices you have associated with that data. We operate in strict accordance with United States federal and state laws, including HIPAA and the California Consumer Privacy Act (CCPA).</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Database size={22} className="text-cyan-500" /> 2. Information Collection and Use
            </h3>
            <p className="mb-4">We collect several different types of information for various purposes to provide and improve our service to your dental practice:</p>
            <ul className="list-none space-y-4 ml-2">
              <li className="flex gap-3">
                <span className="text-cyan-500 font-bold">•</span>
                <div>
                  <strong className="text-white">Personal Data:</strong> While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify your practice, including email addresses, phone numbers, and staff names.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 font-bold">•</span>
                <div>
                  <strong className="text-white">Protected Health Information (PHI):</strong> In providing AI voice services, our system processes patient names, appointment details, and insurance information. This data is handled under the strict guidelines of our Business Associate Agreement (BAA).
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 font-bold">•</span>
                <div>
                  <strong className="text-white">Usage Data:</strong> We may also collect information on how the Service is accessed and used, such as IP addresses, browser types, and call duration metadata.
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <ShieldAlert size={22} className="text-cyan-500" /> 3. Data Processing & AI Learning
            </h3>
            <p className="leading-relaxed mb-4">Voice interactions are recorded and transcribed for the sole purpose of executing dental receptionist duties (scheduling, insurance verification).</p>
            <div className="bg-cyan-500/5 border border-cyan-500/20 p-6 rounded-2xl mb-4">
              <p className="leading-relaxed text-slate-200">
                <span className="text-cyan-400 font-bold">Important Notice on AI Training:</span> OrapexAI does not use Protected Health Information (PHI) to train generalized AI models. Any system improvements rely solely on anonymized, non-identifiable metadata and operational metrics, consistent with the Business Associate Agreement.
              </p>
            </div>
            <p className="leading-relaxed">We use this anonymized metadata to improve the accuracy of our Natural Language Processing (NLP) models. <span className="text-white font-bold underline decoration-cyan-500/50">We do not sell your practice data or patient information to third-party data brokers or advertisers.</span></p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Share2 size={22} className="text-cyan-500" /> 4. Disclosure of Data
            </h3>
            <p className="mb-4">We may disclose your personal data in the following situations:</p>
            <ul className="list-none space-y-4 ml-2">
              <li className="flex gap-3">
                <span className="text-cyan-500 font-bold">•</span>
                <span><strong className="text-white">Legal Requirements:</strong> To comply with a legal obligation or protect and defend the rights or property of OrapexAI.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 font-bold">•</span>
                <span><strong className="text-white">Service Providers:</strong> To third-party companies that facilitate our Service (e.g., cloud hosting, SMS providers) who are also bound by HIPAA-compliant security standards.</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <UserCheck size={22} className="text-cyan-500" /> 5. Your Rights (CCPA Compliance)
            </h3>
            <p className="mb-4">If you are a resident of California or other states with comprehensive privacy laws, you have the right to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Request access to the personal information we hold about you.</li>
              <li>Request the deletion of your personal information.</li>
              <li>Opt-out of the "sale" or "sharing" of personal information (though we do not sell data).</li>
              <li>Non-discrimination for exercising your privacy rights.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Lock size={22} className="text-cyan-500" /> 6. Security of Data
            </h3>
            <p className="leading-relaxed">The security of your data is critical to us. We implement industry-standard technical safeguards, including end-to-end encryption and multi-factor authentication, to protect your information. However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
          </section>
        </div>
      );
    }

    if (t.includes('terms')) {
      return (
        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 size={22} className="text-cyan-500" /> 1. Acceptance of Terms
            </h3>
            <p className="leading-relaxed">By accessing or using OrapexAI’s website or services, you agree to these Terms of Service and our Privacy Policy.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap size={22} className="text-cyan-500" /> 2. Description of Service
            </h3>
            <p className="leading-relaxed">OrapexAI provides an AI-powered voice agent that assists dental practices with patient communications, including appointment scheduling, rescheduling, cancellation, and insurance eligibility checks. The service is intended to augment clinic operations and does not replace licensed staff, clinical judgment, or professional responsibility.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <UserCheck size={22} className="text-cyan-500" /> 3. Eligibility & Account Responsibility
            </h3>
            <p className="leading-relaxed">You must represent a licensed dental practice operating in the United States. The clinic is responsible for ensuring authorized use, monitoring activity, and operating within the limits of the subscribed plan.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Wallet size={22} className="text-cyan-500" /> 4. Billing, Subscription & Usage
            </h3>
            <p className="mb-4">OrapexAI services are provided on a subscription basis according to the selected plan or written agreement.</p>
            <ul className="list-disc ml-6 space-y-2">
                <li>Subscription fees are billed monthly in advance.</li>
                <li>Usage limits (such as call volume or minutes) are defined by the selected plan.</li>
                <li>OrapexAI reserves the right to throttle, pause, or require plan upgrades if usage materially exceeds subscribed limits.</li>
                <li>Non-payment may result in service suspension.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield size={22} className="text-cyan-500" /> 5. Intellectual Property
            </h3>
            <p className="leading-relaxed">All software, AI models, configurations, and system components remain the intellectual property of OrapexAI. Clinics receive a limited, non-exclusive right to use the service for internal operations.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Ban size={22} className="text-cyan-500" /> 6. Prohibited Use
            </h3>
            <p className="leading-relaxed">The service may not be used in violation of applicable laws, including HIPAA, or for spam, impersonation, or abusive conduct.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertCircle size={22} className="text-cyan-500" /> 7. Disclaimer
            </h3>
            <p className="leading-relaxed italic">The service is provided “as is” and “as available.” AI systems may require tuning and are not guaranteed to perform without error. The clinic remains responsible for verifying appointments, patient communications, and care decisions.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Gavel size={22} className="text-cyan-500" /> 8. Limitation of Liability
            </h3>
            <p className="leading-relaxed">OrapexAI shall not be liable for indirect, incidental, or consequential damages, including missed calls, scheduling outcomes, service interruptions, or usage beyond subscribed limits.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Globe size={22} className="text-cyan-500" /> 9. Governing Law
            </h3>
            <p className="leading-relaxed">These terms are governed by the laws of the State of Delaware (or state of incorporation), without regard to conflict-of-law principles.</p>
          </section>
        </div>
      );
    }

    if (t.includes('refund')) {
      return (
        <div className="space-y-12">
          <section className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-3">Overview</h3>
            <p className="text-slate-300">OrapexAI provides customized AI calling systems that require onboarding, configuration, and tuning specific to each dental practice. Please review this policy carefully before initiating service.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Settings size={22} className="text-red-400" /> 1. Onboarding & Setup Fees
            </h3>
            <p className="leading-relaxed">All onboarding, setup, customization, and deployment fees are non-refundable once work has begun. These fees cover technical configuration, integrations, testing, and system tuning.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Clock size={22} className="text-red-400" /> 2. Subscription Fees
            </h3>
            <p className="leading-relaxed">Monthly subscription fees are billed in advance and are non-refundable once a billing cycle has started. Usage during a billing period is considered delivered regardless of call volume.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Tag size={22} className="text-red-400" /> 3. Pilot Programs & Promotional Offers
            </h3>
            <p className="leading-relaxed">Pilot programs, early partner discounts, or waived onboarding offers are subject to the same non-refundable terms once service setup or live usage begins.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <XCircle size={22} className="text-red-400" /> 4. Cancellation
            </h3>
            <p className="leading-relaxed">Clients may cancel their subscription at any time to prevent future billing. Cancellation does not entitle the client to a refund for the current billing period.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertCircle size={22} className="text-red-400" /> 5. Service Non-Completion
            </h3>
            <p className="leading-relaxed">Refunds may be considered only if OrapexAI is technically unable to deliver the core service as outlined in the agreed service scope.</p>
          </section>
        </div>
      );
    }

    if (t.includes('hipaa')) {
      return (
        <div className="space-y-12">

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
            <p className="text-cyan-200 font-semibold text-lg leading-relaxed">
              OrapexAI is built from the ground up to meet the compliance requirements of dental practices under HIPAA and the HITECH Act. Every component of our platform — from the first ring of a patient call to the final appointment confirmation — is designed to keep Protected Health Information (PHI) secure, private, and fully compliant.
            </p>
          </div>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield size={20} className="text-cyan-500" /> 1. Our Commitment to Your Practice
            </h3>
            <p className="leading-relaxed mb-4">As a dental practice, you are a HIPAA Covered Entity. When you use OrapexAI to handle patient calls, we act as your Business Associate — a role we take seriously. We understand that your patients trust you with their most sensitive health information, and by extension, they are trusting the tools you choose to work with.</p>
            <p className="leading-relaxed">OrapexAI is committed to ensuring that your use of our AI receptionist service never puts your practice, your patients, or your reputation at risk. We have implemented administrative, technical, and physical safeguards that satisfy the requirements of the HIPAA Security Rule, Privacy Rule, and the HITECH Act.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FileText size={20} className="text-cyan-500" /> 2. Business Associate Agreement (BAA)
            </h3>
            <p className="leading-relaxed mb-4">Before any patient data is ever processed through OrapexAI, we execute a signed Business Associate Agreement (BAA) with your practice. This is a legal requirement under HIPAA, and we make it a non-negotiable part of our onboarding process — no exceptions.</p>
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 space-y-3">
              <p className="text-slate-300 font-semibold">The BAA formally establishes:</p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex gap-3"><span className="text-cyan-500">→</span> The permitted uses and disclosures of PHI by OrapexAI on your behalf</li>
                <li className="flex gap-3"><span className="text-cyan-500">→</span> Our obligations to safeguard PHI using appropriate security measures</li>
                <li className="flex gap-3"><span className="text-cyan-500">→</span> Our responsibility to report any suspected breach or security incident to your practice without unreasonable delay</li>
                <li className="flex gap-3"><span className="text-cyan-500">→</span> Our obligation to return or destroy PHI upon termination of services</li>
                <li className="flex gap-3"><span className="text-cyan-500">→</span> Your rights to access and audit the PHI we process on your behalf</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Lock size={20} className="text-cyan-500" /> 3. What PHI We Handle and Why
            </h3>
            <p className="leading-relaxed mb-4">OrapexAI processes only the minimum necessary PHI required to perform your requested services. This includes:</p>
            <ul className="space-y-3 text-slate-400 ml-2">
              <li className="flex gap-3"><span className="text-cyan-500 font-bold">•</span><div><strong className="text-white">Patient name and contact details</strong> — to identify callers and confirm appointments</div></li>
              <li className="flex gap-3"><span className="text-cyan-500 font-bold">•</span><div><strong className="text-white">Appointment information</strong> — to schedule, reschedule, or cancel visits in your calendar</div></li>
              <li className="flex gap-3"><span className="text-cyan-500 font-bold">•</span><div><strong className="text-white">Insurance information</strong> — to verify eligibility and benefits in real time before the appointment</div></li>
              <li className="flex gap-3"><span className="text-cyan-500 font-bold">•</span><div><strong className="text-white">Call transcripts and recordings</strong> — retained solely for service delivery, quality assurance, and audit purposes</div></li>
            </ul>
            <p className="leading-relaxed mt-4">We do not access, store, or process clinical records, treatment notes, diagnoses, prescriptions, or any PHI beyond what is strictly necessary for the receptionist functions you have contracted us to perform.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <ShieldAlert size={20} className="text-cyan-500" /> 4. No PHI Used for AI Training
            </h3>
            <div className="bg-cyan-500/5 border border-cyan-500/20 p-6 rounded-2xl">
              <p className="text-slate-200 leading-relaxed">
                <span className="text-cyan-400 font-bold">This is a firm policy:</span> OrapexAI does not use any Protected Health Information — including call recordings, transcripts, patient names, or insurance details — to train, fine-tune, or improve any artificial intelligence or machine learning model. Any improvements to our system are based exclusively on anonymized, non-identifiable operational metadata that cannot be traced back to any individual patient or practice.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Database size={20} className="text-cyan-500" /> 5. Security Safeguards
            </h3>
            <p className="leading-relaxed mb-4">Our infrastructure is designed with HIPAA Security Rule requirements as a baseline, not an afterthought. Key safeguards include:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Encryption in Transit", desc: "All data transmitted between patients, our systems, and your practice management software is encrypted using TLS 1.2 or higher." },
                { title: "Encryption at Rest", desc: "All stored PHI — including call recordings and transcripts — is encrypted at rest using industry-standard AES-256 encryption." },
                { title: "Access Controls", desc: "Access to PHI is governed by role-based permissions and the principle of least privilege. Only authorized systems may interact with patient data." },
                { title: "Audit Logging", desc: "All access to and interactions with PHI are logged and auditable, providing a complete trail for compliance reviews or breach investigations." },
                { title: "Vulnerability Management", desc: "We conduct regular security assessments and promptly remediate identified vulnerabilities in our platform." },
                { title: "Subcontractor Compliance", desc: "All third-party service providers that may have access to PHI in the course of service delivery are contractually required to maintain equivalent HIPAA-compliant safeguards." },
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                  <p className="text-white font-bold mb-1">{item.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Clock size={20} className="text-cyan-500" /> 6. Data Retention and Deletion
            </h3>
            <p className="leading-relaxed mb-4">PHI processed through OrapexAI is retained only for as long as necessary to fulfill the purpose for which it was collected, or as required by applicable law. Specifically:</p>
            <ul className="space-y-3 text-slate-400 ml-2">
              <li className="flex gap-3"><span className="text-cyan-500 font-bold">•</span> Call recordings and transcripts are retained for a default period to support quality assurance and any legitimate dispute resolution needs</li>
              <li className="flex gap-3"><span className="text-cyan-500 font-bold">•</span> Your practice may request early deletion of specific records, subject to any legal or regulatory obligations that require retention</li>
              <li className="flex gap-3"><span className="text-cyan-500 font-bold">•</span> Upon termination of your OrapexAI service agreement, PHI will be returned to you or securely destroyed in accordance with the terms of our BAA</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Bell size={20} className="text-cyan-500" /> 7. Breach Notification
            </h3>
            <p className="leading-relaxed">In the unlikely event of a confirmed or suspected breach involving PHI, OrapexAI will notify your practice without unreasonable delay — and in no case later than 60 days after discovery — consistent with HIPAA breach notification requirements. Our notification will include the nature of the breach, the PHI involved, the steps we have taken to contain and remediate the incident, and our recommendations for any actions your practice should take to protect your patients.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <UserCheck size={20} className="text-cyan-500" /> 8. Your Responsibilities as a Covered Entity
            </h3>
            <p className="leading-relaxed mb-4">While OrapexAI takes on significant compliance obligations as your Business Associate, your practice retains responsibility for certain aspects of HIPAA compliance, including:</p>
            <ul className="space-y-3 text-slate-400 ml-2">
              <li className="flex gap-3"><span className="text-cyan-500 font-bold">•</span> Ensuring your own Notice of Privacy Practices (NPP) accurately reflects the use of third-party AI services for appointment handling</li>
              <li className="flex gap-3"><span className="text-cyan-500 font-bold">•</span> Training your staff on how OrapexAI interacts with your systems and what patient information it may access</li>
              <li className="flex gap-3"><span className="text-cyan-500 font-bold">•</span> Notifying OrapexAI of any changes to your patient population or service scope that may affect how PHI is processed</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Mail size={20} className="text-cyan-500" /> 9. Contact Our Compliance Team
            </h3>
            <p className="leading-relaxed mb-4">If you have questions about our HIPAA compliance practices, wish to review our BAA before signing up, or need to report a suspected security incident, please contact us directly:</p>
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
              <p className="text-white font-bold mb-1">OrapexAI Compliance</p>
              <p className="text-cyan-400">hello@orapexai.com</p>
              <p className="text-slate-400 text-sm mt-2">We aim to respond to all compliance-related inquiries within 1 business day.</p>
            </div>
          </section>

        </div>
      );
    }
    
    return <p className="text-white">Content for "{title}" is currently being updated by our legal team. Please check back soon or contact us at hello@orapexai.com.</p>;
  };

  const getLastUpdatedDate = () => {
    const t = title.toLowerCase();
    if (t.includes('hipaa') || t.includes('refund') || t.includes('terms') || t.includes('privacy')) return 'January 14, 2026';
    return new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 px-6 pb-24 relative overflow-x-hidden">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-500/5 blur-[80px] md:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-500/5 blur-[80px] md:blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all mb-12 font-semibold group bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>
        
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16">
          <div className="w-20 h-20 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-2xl">
            {getIcon()}
          </div>
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-7xl font-black font-display text-white tracking-tight"
            >
              {title || "Legal Document"}
            </motion.h1>
            <div className={`h-1 w-24 mt-4 rounded-full ${title.toLowerCase().includes('refund') ? 'bg-red-500' : 'bg-cyan-500'}`}></div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/80 p-6 md:p-16 rounded-[2.5rem] border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] will-change-transform"
        >
            <div className="flex items-center justify-between mb-12 pb-8 border-b border-slate-800">
               <div>
                  <p className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-1">Last Updated</p>
                  <p className="text-white font-mono">{getLastUpdatedDate()}</p>
               </div>
               <div className="hidden sm:block">
                  <p className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-1">Market Region</p>
                  <p className="text-cyan-400 font-mono flex items-center gap-1.5">
                    <Globe size={14} /> USA / Federal
                  </p>
               </div>
            </div>

            <div className="text-slate-300 space-y-4 text-lg">
                {getContent()}
            </div>

            <div className="mt-20 pt-10 border-t border-slate-800">
                <div className="bg-slate-950/50 rounded-2xl p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Legal Inquiries</h4>
                      <p className="text-sm text-slate-500">Contact our US-based legal team.</p>
                    </div>
                  </div>
                  <a href="mailto:legal@orapexai.com" className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-cyan-50 transition-colors">
                    Email Legal Team
                  </a>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalPage;
