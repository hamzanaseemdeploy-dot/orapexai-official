import OpenDentalPage from '@/components/OpenDentalPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Receptionist for Open Dental | OrapexAI — Real-Time Integration',
  description: 'OrapexAI connects directly to Open Dental via native MySQL integration. Books appointments, verifies patients with fuzzy matching, checks insurance, assigns procedure codes — all during the live call. HIPAA compliant. $399/month. 48-hour setup.',
};

export default function Page() {
  return <OpenDentalPage />;
}
