/**
 * prerender.tsx — Real static HTML generator for OrapexAI
 *
 * Runs after `vite build` (via `tsx`, not plain `node`, so this file can
 * import and execute actual .tsx React components in Node).
 *
 * WHAT THIS DOES DIFFERENTLY FROM THE OLD prerender.mjs:
 * The old script copied the empty <div id="root"></div> shell into each
 * route folder and only patched <title>/<meta description>/<link canonical>.
 * Bots that don't execute JavaScript (most AI crawlers, link-preview bots,
 * scrapers) saw NO actual page content — just metadata.
 *
 * This script uses react-dom/server's renderToString() to render the real
 * App component (in the correct view for each route) into an HTML string,
 * and injects that directly into <div id="root">...</div>. Every route's
 * static file now contains the actual visible page content, not an empty
 * div. main.tsx then uses hydrateRoot() in the browser to attach to this
 * existing markup instead of discarding and re-rendering it.
 *
 * USAGE: wired into package.json: "build": "vite build && tsx prerender.tsx"
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderToString } from 'react-dom/server';
import App from './src/App.tsx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

// ─── Route definitions ──────────────────────────────────────────────────────
// `urlPath` is the route App.tsx expects (used to pick the right view).
// `outDir` is null for the home page (writes to dist/index.html directly),
// otherwise it's the folder name under dist/ that Cloudflare will serve.

const routes = [
  {
    urlPath: '/',
    outDir: null,
    title: 'Orapex AI | AI-Powered Voice Agents for Dental Practices',
    description:
      'Orapex AI is a fully custom AI receptionist for dental practices. Deep PMS integration with Open Dental and Dentrix. Books appointments, verifies insurance, and handles calls 24/7. Setup from $900.',
    canonical: 'https://orapexai.com/',
  },
  {
    urlPath: '/pricing',
    outDir: 'pricing',
    title: 'Pricing | OrapexAI — AI Dental Receptionist',
    description:
      'Simple, transparent pricing for OrapexAI. AI receptionist for dental practices starting at $399/month. No long-term contracts. 2-weekend free trial.',
    canonical: 'https://orapexai.com/pricing',
  },
  {
    urlPath: '/open-dental-ai-receptionist',
    outDir: 'open-dental-ai-receptionist',
    title: 'AI Receptionist for Open Dental | OrapexAI',
    description:
      'OrapexAI connects directly to Open Dental in real-time. Books appointments, verifies patients, checks insurance — all during the live call. HIPAA compliant.',
    canonical: 'https://orapexai.com/open-dental-ai-receptionist',
  },
  {
    urlPath: '/privacy-policy',
    outDir: 'privacy-policy',
    title: 'Privacy Policy | OrapexAI',
    description: 'OrapexAI privacy policy — how we collect, use, and protect patient and practice data in compliance with HIPAA.',
    canonical: 'https://orapexai.com/privacy-policy',
  },
  {
    urlPath: '/terms-of-service',
    outDir: 'terms-of-service',
    title: 'Terms of Service | OrapexAI',
    description: 'OrapexAI terms of service — the agreement between OrapexAI and dental practices using our AI receptionist platform.',
    canonical: 'https://orapexai.com/terms-of-service',
  },
  {
    urlPath: '/hipaa-policy',
    outDir: 'hipaa-policy',
    title: 'HIPAA Policy | OrapexAI',
    description: 'OrapexAI HIPAA compliance policy — how our AI dental receptionist protects patient health information under HIPAA regulations.',
    canonical: 'https://orapexai.com/hipaa-policy',
  },
  {
    urlPath: '/refund-policy',
    outDir: 'refund-policy',
    title: 'Refund Policy | OrapexAI',
    description: 'OrapexAI refund and cancellation policy for dental AI receptionist subscriptions.',
    canonical: 'https://orapexai.com/refund-policy',
  },
];

// ─── Read the base index.html built by Vite (has correct hashed JS/CSS tags) ──
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('❌  dist/index.html not found. Run `vite build` first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

// ─── Generate each route ────────────────────────────────────────────────────
for (const route of routes) {
  let markup = '';
  try {
    markup = renderToString(<App initialPath={route.urlPath} />);
  } catch (err) {
    console.error(`❌  Failed to render ${route.urlPath}:`, err);
    process.exit(1);
  }

  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(
      /<meta name="description" content=".*?"\s*\/>/,
      `<meta name="description" content="${route.description}" />`
    )
    .replace(
      /<link rel="canonical" href=".*?"\s*\/>/,
      `<link rel="canonical" href="${route.canonical}" />`
    )
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);

  if (route.outDir === null) {
    fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8');
    console.log(`✅  Rendered real content into: /index.html`);
  } else {
    const dir = path.join(distDir, route.outDir);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
    console.log(`✅  Rendered real content into: /${route.outDir}/index.html`);
  }
}

console.log('\n🎉  Prerender complete. Every route now has real, crawlable HTML.');
console.log('    Deploy the dist/ folder to Cloudflare.');
