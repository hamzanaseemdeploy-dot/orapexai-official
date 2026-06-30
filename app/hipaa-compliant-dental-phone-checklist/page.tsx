import ArticleLayout from '@/components/ArticleLayout';

export const metadata = {
  title: 'HIPAA Compliant Dental Phone AI Checklist | OrapexAI',
  description: 'A technical checklist for evaluating HIPAA compliant dental phone AI. Verify BAAs, encryption standards, access controls, and AI training policies.',
};

export default function Page() {
  return (
    <ArticleLayout 
      title="HIPAA Compliant Dental Phone AI Checklist"
      description="A technical checklist for evaluating HIPAA compliant dental phone AI. Verify BAAs, encryption standards, access controls, and AI training policies."
    >
      
      <p>
        Before deploying an AI voice agent for a dental practice, administrators must verify the system meets HIPAA technical and administrative safeguards. Use this checklist to evaluate whether a dental phone AI solution legally protects Protected Health Information (PHI) and prevents data breaches.
      </p>

      <h2>What is required for a dental AI phone system to be HIPAA compliant?</h2>
      <p>
        A dental AI phone system must meet the following technical and administrative requirements to be considered HIPAA compliant:
      </p>
      <ul>
        <li><strong>Signed Business Associate Agreement (BAA):</strong> The vendor must sign a BAA before any PHI is processed, defining their legal obligation to protect patient data.</li>
        <li><strong>AES-256 Encryption at Rest:</strong> All call recordings, transcripts, and patient data stored in the database must be encrypted using AES-256 or stronger.</li>
        <li><strong>TLS 1.2+ Encryption in Transit:</strong> All data transmitted between the phone carrier, the AI agent, and the practice management software must use TLS 1.2 or higher.</li>
        <li><strong>Strict AI Training Policies:</strong> The vendor must explicitly state that patient data and call recordings are not used to train generalized AI or machine learning models.</li>
        <li><strong>Role-Based Access Controls:</strong> Access to call logs and patient transcripts must be restricted using least-privilege principles, ensuring only authorized staff can review them.</li>
        <li><strong>Audit Logging:</strong> The system must maintain immutable logs of every interaction with PHI to facilitate compliance reviews and breach investigations.</li>
      </ul>

      <h2>Why is a Business Associate Agreement (BAA) required for dental AI?</h2>
      <p>
        A BAA is required because the AI vendor acts as a Business Associate by processing PHI on behalf of the dental practice (the Covered Entity). Without a signed BAA, the dental practice is legally liable for any HIPAA violations committed by the vendor. The BAA establishes permissible data uses and mandates breach notification protocols.
      </p>

      <h2>Can a HIPAA compliant AI record dental calls?</h2>
      <p>
        Yes, a HIPAA compliant AI can record dental calls if the audio files and transcripts are immediately encrypted and stored in an access-controlled environment. The recordings must be used solely for service delivery, quality assurance, or dispute resolution, and must not be ingested into external AI training datasets.
      </p>

      <h2>Evaluating OrapexAI for HIPAA Compliance</h2>
      <p>
        OrapexAI meets every requirement on this checklist. We provide signed BAAs, utilize AWS infrastructure with AES-256 encryption, enforce strict role-based access, and maintain a firm policy against using PHI for AI model training. <a href="/hipaa-compliant-dental-ai" className="text-cyan-400 hover:text-cyan-300 underline">Read our full guide to HIPAA compliant dental AI</a> or <a href="/hipaa-policy" className="text-cyan-400 hover:text-cyan-300 underline">review our official HIPAA policy</a>.
      </p>

    </ArticleLayout>
  );
}
