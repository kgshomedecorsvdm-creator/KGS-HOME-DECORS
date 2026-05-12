/**
 * Fix 3: Replace CDN script URLs with local paths and add defer to all
 * non-critical scripts across all HTML files.
 * 
 * Rules:
 * - Tailwind CDN script: leave for now (Fix 2 handles this)
 * - GSAP, ScrollTrigger, Lenis, Fuse, Supabase → local path + defer
 * - store.js, supabase-client.js, config.js → add defer
 * - Inline <script> blocks: cannot defer, leave as-is
 */
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

const ROOT = 'd:/KGS HOME DECOR';

const replacements = [
  // GSAP → local
  [
    /src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/gsap\/3\.12\.2\/gsap\.min\.js"/g,
    'src="assets/js/gsap.min.js" defer'
  ],
  [
    /src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/gsap\/3\.12\.2\/ScrollTrigger\.min\.js"/g,
    'src="assets/js/ScrollTrigger.min.js" defer'
  ],
  // Lenis → local
  [
    /src="https:\/\/unpkg\.com\/lenis@[^"]+\/dist\/lenis\.min\.js"/g,
    'src="assets/js/lenis.min.js" defer'
  ],
  // Fuse → local
  [
    /src="https:\/\/cdn\.jsdelivr\.net\/npm\/fuse\.js\/dist\/fuse\.min\.js"/g,
    'src="assets/js/fuse.min.js" defer'
  ],
  // Supabase CDN → add defer (keep CDN for now, Supabase is large to self-host)
  [
    /(<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/@supabase\/supabase-js[^"]*")>/g,
    '$1 defer>'
  ],
  // store.js → add defer
  [/<script src="assets\/js\/store\.js">/g, '<script src="assets/js/store.js" defer>'],
  // supabase-client.js → add defer
  [/<script src="assets\/js\/supabase-client\.js">/g, '<script src="assets/js/supabase-client.js" defer>'],
  // config.js → add defer
  [/<script src="assets\/js\/config\.js">/g, '<script src="assets/js/config.js" defer>'],
  // admin.js → add defer
  [/<script src="assets\/js\/admin\.js">/g, '<script src="assets/js/admin.js" defer>'],
  // cart.js → add defer (if present)
  [/<script src="assets\/js\/cart\.js">/g, '<script src="assets/js/cart.js" defer>'],
];

const htmlFiles = readdirSync(ROOT)
  .filter(f => f.endsWith('.html'))
  .map(f => path.join(ROOT, f));

let totalFiles = 0;

for (const file of htmlFiles) {
  let html = readFileSync(file, 'utf8');
  let changed = false;

  for (const [pattern, replacement] of replacements) {
    const before = html;
    html = html.replace(pattern, replacement);
    if (html !== before) changed = true;
  }

  // Prevent duplicate defer (if script already had defer)
  html = html.replace(/\bdefer\s+defer\b/g, 'defer');

  if (changed) {
    writeFileSync(file, html, 'utf8');
    console.log(`Updated: ${path.basename(file)}`);
    totalFiles++;
  }
}

console.log(`\nDone — ${totalFiles} files updated with defer/local scripts.`);
