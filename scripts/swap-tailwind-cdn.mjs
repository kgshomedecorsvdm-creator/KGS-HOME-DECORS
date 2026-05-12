/**
 * Replaces the Tailwind CDN script + inline tailwind.config block
 * in all root HTML files with a single <link> to the purged build.
 * 
 * Targets exactly:
 *   <script src="https://cdn.tailwindcss.com"></script>
 *   ...optional blank line...
 *   <script>\ntailwind.config = { ... }\n</script>
 */
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

const ROOT = 'd:/KGS HOME DECOR';
const LINK = '<link rel="stylesheet" href="assets/css/tailwind.min.css">';

const htmlFiles = readdirSync(ROOT)
  .filter(f => f.endsWith('.html'))
  .map(f => path.join(ROOT, f));

let swapped = 0;
let skipped = 0;

for (const file of htmlFiles) {
  let html = readFileSync(file, 'utf8');

  if (!html.includes('cdn.tailwindcss.com')) {
    console.log(`SKIP (no CDN): ${path.basename(file)}`);
    skipped++;
    continue;
  }

  // Remove CDN script tag (with or without trailing whitespace/newline)
  html = html.replace(/<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>\r?\n?/g, '');

  // Remove inline tailwind.config = { ... } block
  // Matches <script>\ntailwind.config = { ... }\n</script> spanning multiple lines
  html = html.replace(/<script>\r?\ntailwind\.config\s*=[\s\S]*?<\/script>\r?\n?/g, '');

  // Insert the <link> tag right after the Google Fonts <link> (or before </head> as fallback)
  // Find the last <link ...> in the <head> before <style> or <script>
  // Strategy: insert after the closing of the fonts link line
  if (html.includes(LINK)) {
    console.log(`SKIP (already swapped): ${path.basename(file)}`);
    skipped++;
    continue;
  }

  // Insert before </head>
  html = html.replace('</head>', `${LINK}\n</head>`);

  writeFileSync(file, html, 'utf8');
  console.log(`✅ Swapped: ${path.basename(file)}`);
  swapped++;
}

console.log(`\nDone — ${swapped} swapped, ${skipped} skipped.`);
console.log('CDN removed. tailwind.min.css is now the source of truth.');
