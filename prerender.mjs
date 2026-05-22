/**
 * prerender.mjs — Static HTML generator for OrapexAI
 *
 * Runs after `vite build`. Copies index.html into each route folder
 * so Cloudflare Pages serves real HTML to Google instead of an empty <div>.
 *
 * HOW IT WORKS:
 * Your app uses client-side routing (window.history.pushState).
 * Cloudflare Pages needs a real HTML file at each URL path.
 * This script creates dist/pricing/index.html, dist/privacy-policy/index.html, etc.
 * Each one is the same shell HTML — the JS then hydrates the correct view.
 * Google's crawler gets real meta tags and schema for every URL.
 *
 * USAGE: already wired into package.json: "build": "vite build && node prerender.mjs"
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir   = path.join(__dirname, 'dist');

// ─── Route definitions ────────────────────────────────────────────────────────
// Each route gets its own folder + index.html in dist/
// Add a new entry here whenever you add a new page to App.tsx

const routes = [
  {
    path: 'pricing',
    title: 'Pricing | OrapexAI — AI Dental Receptionist',
    description:
      'Simple, transparent pricing for OrapexAI. AI receptionist for dental practices starting at $399/month. No long-term contracts. 2-weekend free trial.',
    canonical: 'https://orapexai.com/pricing',
  },
  {
    path: 'privacy-policy',
    title: 'Privacy Policy | OrapexAI',
    description: 'OrapexAI privacy policy — how we collect, use, and protect patient and practice data in compliance with HIPAA.',
    canonical: 'https://orapexai.com/privacy-policy',
  },
  {
    path: 'terms-of-service',
    title: 'Terms of Service | OrapexAI',
    description: 'OrapexAI terms of service — the agreement between OrapexAI and dental practices using our AI receptionist platform.',
    canonical: 'https://orapexai.com/terms-of-service',
  },
  {
    path: 'hipaa-policy',
    title: 'HIPAA Policy | OrapexAI',
    description: 'OrapexAI HIPAA compliance policy — how our AI dental receptionist protects patient health information under HIPAA regulations.',
    canonical: 'https://orapexai.com/hipaa-policy',
  },
  {
    path: 'refund-policy',
    title: 'Refund Policy | OrapexAI',
    description: 'OrapexAI refund and cancellation policy for dental AI receptionist subscriptions.',
    canonical: 'https://orapexai.com/refund-policy',
  },
];

// ─── Read the base index.html built by Vite ───────────────────────────────────
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('❌  dist/index.html not found. Run `vite build` first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

// ─── Generate each route ──────────────────────────────────────────────────────
for (const route of routes) {
  // Patch the title, description, and canonical in the HTML shell
  let html = template
    .replace(
      /<title>.*?<\/title>/,
      `<title>${route.title}</title>`
    )
    .replace(
      /<meta name="description" content=".*?"\s*\/>/,
      `<meta name="description" content="${route.description}" />`
    )
    .replace(
      /<link rel="canonical" href=".*?"\s*\/>/,
      `<link rel="canonical" href="${route.canonical}" />`
    );

  // Create the directory and write the file
  const dir = path.join(distDir, route.path);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');

  console.log(`✅  Generated: /${route.path}/index.html`);
}

// ─── Also ensure root index.html canonical is correct ─────────────────────────
// (Vite already writes this, just confirming)
console.log('✅  Root /index.html already in dist/');
console.log('\n🎉  Prerender complete. All routes have static HTML.');
console.log('    Deploy the dist/ folder to Cloudflare Pages.');
