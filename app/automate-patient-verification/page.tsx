import ArticleLayout from '@/components/ArticleLayout';

export const metadata = {
  title: 'Automate Patient Verification in Open Dental | OrapexAI',
  description: 'Learn how dental practices can automate patient verification using AI voice agents with fuzzy logic name matching and auto-creation of new patient profiles in Open Dental.',
};

export default function Page() {
  return (
    <ArticleLayout 
      title="Automate Patient Verification in Open Dental"
      description="Learn how dental practices can automate patient verification using AI voice agents with fuzzy logic name matching and auto-creation of new patient profiles in Open Dental."
    >
      
      <p>
        Automating patient verification in Open Dental requires an AI voice agent to securely search the practice database during a live call. By using first name, last name, and date of birth, the AI instantly identifies existing patients or creates new profiles, eliminating the need for front-desk staff to manually search the system while the phone is ringing.
      </p>

      <h2>How does AI verify existing patients in Open Dental?</h2>
      <p>
        An AI receptionist like OrapexAI verifies existing patients by asking the caller for their first name, last name, and date of birth. The AI sends a secure query to the Open Dental MySQL database. If the caller’s details match an existing profile, the AI confirms the identity and proceeds with scheduling or insurance capture.
      </p>

      <h2>What happens if the patient spells their name wrong?</h2>
      <p>
        To handle spelling variations and typos, OrapexAI uses fuzzy matching logic. If the AI detects a close but imperfect match for the patient's name, it asks the caller to confirm the spelling. Once confirmed, the AI maps the call to the correct existing patient profile, preventing duplicate charts in Open Dental.
      </p>

      <h2>Can the AI create new patient profiles in Open Dental?</h2>
      <p>
        Yes. If the AI searches the database and finds no matching patient, it automatically creates a new patient profile. The AI collects the caller’s first name, last name, phone number, and date of birth, and writes this demographic data directly into Open Dental. The newly booked appointment is then attached to this new profile instantly.
      </p>

      <h2>Is automated patient verification secure?</h2>
      <p>
        Yes. Automated patient verification is secure when the AI operates under a signed Business Associate Agreement (BAA). The connection between the AI and Open Dental must use AES-256 encryption, and the system must never use Protected Health Information (PHI) like dates of birth or names to train generalized AI models.
      </p>

      <h2>Ready to automate your patient verification?</h2>
      <p>
        Stop manual chart searches and duplicate profiles. <a href="/open-dental-ai-receptionist" className="text-cyan-400 hover:text-cyan-300 underline">Discover how OrapexAI automates patient verification in Open Dental</a> or read our <a href="/open-dental-automation" className="text-cyan-400 hover:text-cyan-300 underline">complete guide to Open Dental automation</a>.
      </p>

    </ArticleLayout>
  );
}
