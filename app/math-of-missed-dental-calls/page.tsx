import ArticleLayout from '@/components/ArticleLayout';

export const metadata = {
  title: 'The Math of Missed Dental Calls: Calculating Revenue Loss | OrapexAI',
  description: 'Calculate the exact revenue loss from missed dental calls. Learn the industry formula using call volume, 28% miss rates, and $350 average production values.',
};

export default function Page() {
  return (
    <ArticleLayout 
      title="The Math of Missed Dental Calls: Calculating Revenue Loss"
      description="Calculate the exact revenue loss from missed dental calls. Learn the industry formula using call volume, 28% miss rates, and $350 average production values."
    >
      
      <p>
        Calculating the revenue loss from missed dental calls requires multiplying a practice's weekly inbound call volume by the industry-standard 28% miss rate, the 60% new-patient conversion rate, and the $350 average production value per appointment. This formula reveals the exact financial impact of sending patient calls to voicemail.
      </p>

      <h2>What percentage of dental calls go unanswered?</h2>
      <p>
        On average, 28% of inbound calls to a dental practice go unanswered. This happens due to busy front-desk staff during peak hours, lunch breaks, and after-hours closures. Because patients calling to book appointments often hang up and dial the next dentist on Google, every missed call represents a direct loss of potential recurring revenue.
      </p>

      <h2>How much revenue is lost from a missed dental call?</h2>
      <p>
        The average lost revenue from a single missed dental call is $210. This is calculated using the American Dental Association’s average production per patient visit of $350, multiplied by the 60% probability that the missed caller was a new patient trying to book an appointment. If the patient becomes a lifetime patient, the lifetime value loss exceeds $3,000.
      </p>

      <h2>What is the formula for calculating lost dental practice revenue?</h2>
      <p>
        The formula for calculating lost revenue is: (Weekly Calls × 0.28 Missed Rate) × 0.60 Conversion Rate × $350 Average Production. For example, a practice receiving 160 weekly calls misses roughly 45 of them. Of those 45, about 27 are new patient bookings. At $350 per visit, the practice loses $9,450 per week, or over $491,000 annually.
      </p>

      <h2>How does an AI receptionist recover lost dental revenue?</h2>
      <p>
        An AI receptionist recovers lost revenue by answering 100% of inbound calls 24/7. Instead of sending after-hours or busy-line calls to voicemail, the AI instantly verifies the patient, checks live Open Dental availability, and books the appointment directly into the schedule. <a href="/virtual-dental-receptionist-roi" className="text-cyan-400 hover:text-cyan-300 underline">Read our full Virtual Dental Receptionist ROI analysis</a> or <a href="/#contact" className="text-cyan-400 hover:text-cyan-300 underline">contact OrapexAI to stop missing calls</a>.
      </p>

    </ArticleLayout>
  );
}
