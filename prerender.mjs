import fs from 'fs';
import path from 'path';

const distDir = './dist';

const routes = [
  {
    path: '/',
    title: 'Orapex AI | AI-Powered Voice Receptionist for Dental Practices',
    description: 'Orapex AI is a fully custom AI receptionist for dental practices. Deep PMS integration with Open Dental and Dentrix. Books appointments, verifies insurance, and handles calls 24/7.',
    keywords: 'AI receptionist for dentists, dental AI receptionist, Open Dental integration, dental practice AI, AI voice agent dentist',
    schema: null
  },
  {
    path: '/pricing',
    title: 'Orapex AI Pricing | Dental AI Receptionist Plans from $399/mo',
    description: 'Transparent pricing for Orapex AI dental receptionist. Plans from $399/month. 24/7 after-hours call handling, Open Dental integration, HIPAA compliance, and 2-weekend free trial.',
    keywords: 'dental AI receptionist pricing, AI answering service cost, Open Dental AI price, dental practice automation cost',
    schema: null
  },
  {
    path: '/open-dental-ai-receptionist',
    title: 'Open Dental AI Receptionist | Real-Time Booking & Insurance Verification',
    description: 'The only AI phone agent built specifically for Open Dental. Real-time appointment booking, patient verification, insurance checks, and 24/7 call handling. Self-hosted HIPAA compliant.',
    keywords: 'Open Dental AI receptionist, AI phone agent Open Dental, Open Dental appointment booking AI, dental AI Open Dental integration, Open Dental automated scheduling',
    schema: 'software'
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Orapex AI',
    description: 'Orapex AI privacy policy. HIPAA-compliant data handling for dental practices. We never sell patient data.',
    keywords: '',
    schema: null
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service | Orapex AI',
    description: 'Terms of service for Orapex AI dental receptionist platform. Subscription billing, usage limits, and intellectual property terms.',
    keywords: '',
    schema: null
  },
  {
    path: '/refund-policy',
    title: 'Refund Policy | Orapex AI',
    description: 'Refund policy for Orapex AI dental practice software subscriptions. 30-day satisfaction guarantee details.',
    keywords: '',
    schema: null
  },
  {
    path: '/hipaa-policy',
    title: 'HIPAA Compliance & BAA | Orapex AI',
    description: 'HIPAA compliance and Business Associate Agreement (BAA) for Orapex AI dental receptionist. Self-hosted AWS deployment with end-to-end encryption.',
    keywords: 'HIPAA compliant AI receptionist, dental AI BAA, HIPAA dental phone agent, AWS HIPAA dental software',
    schema: null
  }
];

let indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

for (const route of routes) {
  const routeDir = route.path === '/' ? distDir : path.join(distDir, route.path);
  fs.mkdirSync(routeDir, { recursive: true });

  let html = indexHtml;

  // Replace meta tags — using single < to match actual HTML
  html = html.replace(/<<title>.*?<<\/title>/, `<title>${route.title}</title>`);
  html = html.replace(/<<meta name="description" content=".*?"/, `<meta name="description" content="${route.description}"`);
  if (route.keywords) {
    html = html.replace(/<<meta name="keywords" content=".*?"/, `<meta name="keywords" content="${route.keywords}"`);
  }
  html = html.replace(/<<link rel="canonical" href=".*?"/, `<link rel="canonical" href="https://orapexai.com${route.path === '/' ? '/' : route.path + '/'}"`);
  html = html.replace(/<<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${route.title}"`);
  html = html.replace(/<<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${route.description}"`);
  html = html.replace(/<<meta property="og:url" content=".*?"/, `<meta property="og:url" content="https://orapexai.com${route.path === '/' ? '/' : route.path + '/'}"`);

  // Add SoftwareApplication schema for Open Dental page
  if (route.schema === 'software') {
    const softwareSchema = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Orapex AI for Open Dental",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Cloud",
      "offers": {
        "@type": "Offer",
        "price": "399",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "127"
      },
      "featureList": "Real-time Open Dental integration, Automated appointment booking, Patient insurance verification, 24/7 call answering, HIPAA compliant deployment",
      "softwareRequirements": "Open Dental practice management software",
      "url": "https://orapexai.com/open-dental-ai-receptionist"
    }
    </script>`;
    html = html.replace('</head>', `${softwareSchema}\n  </head>`);
  }

  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  console.log(`✓ Prerendered: ${route.path}/index.html`);
}

console.log('\n✅ All routes prerendered with unique SEO metadata.');
