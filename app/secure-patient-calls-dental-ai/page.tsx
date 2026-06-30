import ArticleLayout from '@/components/ArticleLayout';

export const metadata = {
  title: 'Secure Patient Calls: Encrypted AI Voice Agents for Dentistry | OrapexAI',
  description: 'Learn how dental practices can secure patient phone calls using encrypted AI voice agents. Discover TLS 1.2+ transit encryption and AES-256 data at rest.',
};

export default function Page() {
  return (
    <ArticleLayout 
      title="Secure Patient Calls: Encrypted AI Voice Agents for Dentistry"
      description="Learn how dental practices can secure patient phone calls using encrypted AI voice agents. Discover TLS 1.2+ transit encryption and AES-256 data at rest."
    >
      
      <p>
        Securing patient phone calls in a dental practice requires AI voice agents to utilize enterprise-grade encryption protocols during and after the call. To remain HIPAA compliant, the AI must encrypt data in transit using TLS 1.2 or higher, and encrypt data at rest using AES-256, ensuring that Protected Health Information (PHI) is never exposed to unauthorized parties.
      </p>

      <h2>How do dental practices secure AI voice calls?</h2>
      <p>
        Dental practices secure AI voice calls by deploying agents that operate on isolated, HIPAA-compliant cloud infrastructure, such as AWS. The audio streams and transcripts are encrypted in transit using TLS 1.2 or higher. This prevents interception while the patient is speaking to the AI. Access to the call data is restricted via role-based access controls and least-privilege principles.
      </p>

      <h2>What encryption is required for dental call recordings?</h2>
      <p>
        HIPAA requires that dental call recordings and transcripts be encrypted at rest using AES-256 encryption. This ensures that if the storage database is compromised, the audio files and text transcripts remain unreadable without the correct decryption keys. The system must also maintain strict audit logs of anyone who accesses or reviews these encrypted recordings.
      </p>

      <h2>Can AI voice agents transmit PHI to Open Dental securely?</h2>
      <p>
        Yes. An AI voice agent like OrapexAI transmits appointment and patient data to Open Dental via a secure, encrypted API connection. The data is transmitted using TLS 1.2+ encryption, meaning the PHI is protected while moving from the AI agent to the practice management software's database, preventing man-in-the-middle attacks.
      </p>

      <h2>How does OrapexAI secure patient phone calls?</h2>
      <p>
        OrapexAI secures every patient call using end-to-end encryption. Audio streams are protected in transit with TLS 1.2+, and all call logs, transcripts, and patient data are encrypted at rest with AES-256 on AWS infrastructure. We operate under a signed BAA and ensure that no patient data is ever used to train generalized AI models. <a href="/hipaa-compliant-dental-ai" className="text-cyan-400 hover:text-cyan-300 underline">Learn more about our HIPAA compliant AI infrastructure</a>.
      </p>

    </ArticleLayout>
  );
}
