import OpenDentalPage from '@/components/OpenDentalPage';
import { Metadata } from 'next';

export const metadata = {
  title: 'AI Receptionist for Open Dental | OrapexAI',
  description: 'OrapexAI connects directly to Open Dental in real-time. Books appointments, verifies patients, checks insurance â€” all during the live call. HIPAA compliant.',
  openGraph: {
    title: 'AI Receptionist for Open Dental | OrapexAI',
    description: 'OrapexAI connects directly to Open Dental in real-time. Books appointments, verifies patients, checks insurance â€” all during the live call. HIPAA compliant.',
    images: [
      {
        url: 'https://orapexai.com/opengraph-image.png', // You will need to upload an image named this to your /public folder
        width: 1200,
        height: 630,
        alt: 'OrapexAI Dental AI Receptionist',
      },
    ],
  },
};

export default function Page() {
  return <OpenDentalPage />;
}
