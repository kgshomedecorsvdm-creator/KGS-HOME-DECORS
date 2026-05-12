/**
 * Replaces the full Material Symbols font URL with an icon-subset URL
 * across all HTML files. The subset only downloads glyphs actually
 * used by the site, reducing ~1.1 MB → ~35 KB.
 */
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

const ROOT = 'd:/KGS HOME DECOR';

// All icon names used across the entire site (grep'd manually)
const ICONS = [
  'search','person','favorite','shopping_bag','menu','close',
  'call','chat','location_on','schedule','local_shipping',
  'payments','replay','support_agent','star','shield',
  'sentiment_satisfied','public','directions','check_circle',
  'arrow_forward','arrow_back','check','receipt_long','verified',
  'inventory_2','home','local_fire_department','storefront',
  'add','remove','delete','edit','visibility','logout','history',
  'edit_note','open_in_new','package_2','search_off','tune',
  'sort','filter_list','grid_view','view_list','share',
  'content_copy','check_box','check_box_outline_blank',
  'radio_button_unchecked','radio_button_checked',
  'expand_more','expand_less','chevron_right','chevron_left',
  'info','warning','error','help','lock','lock_open',
  'visibility_off','email','phone','location_searching',
].join(',');

const OLD_FULL = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap`;
const OLD_FULL_ALT = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1`;

// Subset URL with only used icons
const NEW_SUBSET = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=${ICONS}&display=swap`;

// Non-blocking load pattern
const NON_BLOCKING = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="${NEW_SUBSET}" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="${NEW_SUBSET}"></noscript>`;

const htmlFiles = readdirSync(ROOT)
  .filter(f => f.endsWith('.html'))
  .map(f => path.join(ROOT, f));

let updated = 0;

for (const file of htmlFiles) {
  let html = readFileSync(file, 'utf8');

  if (!html.includes('Material+Symbols')) continue;

  // Replace any existing Material Symbols link with our non-blocking subset
  // Handle various forms it might appear in
  html = html.replace(
    /<link[^>]*Material\+Symbols[^>]*>/gi,
    ''
  );

  // Remove any duplicate preconnect to fonts.googleapis.com if we're inserting our own
  html = html.replace(
    /<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">\s*\n\s*<link rel="preconnect" href="https:\/\/fonts\.gstatic\.com" crossorigin>\s*\n/,
    ''
  );

  // Insert our non-blocking subset before the closing </head>
  html = html.replace('</head>', `${NON_BLOCKING}\n</head>`);

  writeFileSync(file, html, 'utf8');
  console.log(`Updated: ${path.basename(file)}`);
  updated++;
}

console.log(`\nDone — ${updated} files updated. Icon font: full (~1.1 MB) → subset (~35 KB).`);
