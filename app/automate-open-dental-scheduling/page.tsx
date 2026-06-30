import ArticleLayout from '@/components/ArticleLayout';

export const metadata = {
  title: 'How to Automate Appointment Scheduling in Open Dental | OrapexAI',
  description: 'Learn how dental practices can automate appointment scheduling, assign procedure codes, and check provider availability in Open Dental using AI voice agents.',
};

export default function Page() {
  return (
    <ArticleLayout 
      title="How to Automate Appointment Scheduling in Open Dental"
      description="Learn how dental practices can automate appointment scheduling, assign procedure codes, and check provider availability in Open Dental using AI voice agents."
    >
      
      <p>
        Automating appointment scheduling in Open Dental requires connecting an AI voice agent directly to the practice’s MySQL database. This allows the AI to read live provider operatory availability and write new appointments directly to the calendar without manual front-desk data entry.
      </p>

      <h2>Can AI book appointments directly into Open Dental?</h2>
      <p>
        Yes. An AI voice receptionist like OrapexAI can book appointments directly into Open Dental during a live phone call. The AI connects to the database via a secure, HIPAA-compliant API, queries available time slots by provider and operatory, and writes the appointment to the schedule instantly.
      </p>

      <h2>How does the AI assign procedure codes in Open Dental?</h2>
      <p>
        When booking an appointment, the AI automatically attaches the correct procedure codes—such as D0120 for periodic evaluation or D1110 for prophylaxis—based on the patient’s request and the clinic’s pre-configured defaults. This ensures the schedule is accurate and ready for billing without staff intervention.
      </p>

      <h2>Does the AI check provider availability in real-time?</h2>
      <p>
        Yes. Because the integration is bidirectional, the AI reads provider and operatory availability in real-time. If a specific dentist is fully booked, the AI recognizes the conflict and offers the patient the next available slot with the correct provider, eliminating double-booking.
      </p>

      <h2>What happens if the caller is a new patient?</h2>
      <p>
        If the caller is not found in the Open Dental database, the AI automatically creates a new patient profile. It collects the caller’s first name, last name, phone number, and date of birth, writes this demographic data to Open Dental, and attaches the newly booked appointment to the new profile.
      </p>

      <h2>Ready to automate your scheduling?</h2>
      <p>
        Stop manual data entry and double-bookings. <a href="/open-dental-ai-receptionist" className="text-cyan-400 hover:text-cyan-300 underline">Discover how OrapexAI automates Open Dental scheduling 24/7</a> or read our <a href="/open-dental-automation" className="text-cyan-400 hover:text-cyan-300 underline">complete guide to Open Dental automation</a>.
      </p>

    </ArticleLayout>
  );
}
