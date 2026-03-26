import fs from 'fs';
import path from 'path';

const distDir = './dist';

// These are all your real URL routes
const routes = [
  '/pricing',
  '/privacy-policy',
  '/terms-of-service',
  '/refund-policy',
  '/hipaa-policy',
];

// Read the main index.html that Vite built
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

for (const route of routes) {
  const routeDir = path.join(distDir, route);

  // Create the folder if it doesn't exist
  fs.mkdirSync(routeDir, { recursive: true });

  // Write index.html inside that folder
  fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml);

  console.log(`✓ Prerendered: ${route}/index.html`);
}

console.log('\n✅ All routes prerendered successfully.');
