import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const dir = process.cwd();
const files = readdirSync(dir).filter(f => f.endsWith('.html'));

const CRIMSON_URL = 'https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Jost:wght@300;400;500;600;700&display=swap';

// Replace the broken preload+onload pattern with a simple non-blocking JS loader
// The preload pattern fails because onload doesn't fire reliably across browsers/service workers.
// Instead: use a standard <link rel="stylesheet" media="print" onload="this.media='all'">
// This is the loadCSS pattern recommended by Filament Group and web.dev

const BROKEN_PRELOAD = /<link rel="preload" as="style" href="https:\/\/fonts\.googleapis\.com\/css2\?family=Crimson\+Pro[^"]*"[^>]*>\s*\n\s*<noscript><link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Crimson\+Pro[^"]*" rel="stylesheet"><\/noscript>/g;

const FIXED_LOADER = `<link rel="stylesheet" href="${CRIMSON_URL}" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="${CRIMSON_URL}"></noscript>`;

let fixedCount = 0;

for (const file of files) {
  if (file === 'kgsadmin.html') continue;
  const path = join(dir, file);
  let content = readFileSync(path, 'utf8');
  
  BROKEN_PRELOAD.lastIndex = 0;
  if (!BROKEN_PRELOAD.test(content)) continue;
  
  BROKEN_PRELOAD.lastIndex = 0;
  const fixed = content.replace(BROKEN_PRELOAD, FIXED_LOADER);
  
  if (fixed !== content) {
    writeFileSync(path, fixed, 'utf8');
    console.log('FIXED Crimson preload:', file);
    fixedCount++;
  }
}

// Also fix Material Symbols preload the same way
const MAT_BROKEN = /<link rel="preload" as="style" href="(https:\/\/fonts\.googleapis\.com\/css2\?family=Material\+Symbols\+Outlined[^"]*)"[^>]*onload="[^"]*">\s*\n\s*<noscript><link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com\/css2\?family=Material\+Symbols\+Outlined[^"]*"><\/noscript>/g;

let matFixed = 0;
for (const file of files) {
  if (file === 'kgsadmin.html') continue;
  const path = join(dir, file);
  let content = readFileSync(path, 'utf8');
  
  MAT_BROKEN.lastIndex = 0;
  const match = MAT_BROKEN.exec(content);
  if (!match) continue;
  
  const matUrl = match[1];
  const replacement = `<link rel="stylesheet" href="${matUrl}" media="print" onload="this.media='all'">\n<noscript><link rel="stylesheet" href="${matUrl}"></noscript>`;
  
  MAT_BROKEN.lastIndex = 0;
  const fixed = content.replace(MAT_BROKEN, replacement);
  
  if (fixed !== content) {
    writeFileSync(path, fixed, 'utf8');
    console.log('FIXED Material preload:', file);
    matFixed++;
  }
}

console.log(`\nCrimson: ${fixedCount}, Material: ${matFixed} files fixed.`);

// Verify
console.log('\n--- Verification ---');
for (const file of files) {
  if (file === 'kgsadmin.html') continue;
  const content = readFileSync(join(dir, file), 'utf8');
  const hasPreload = /rel="preload" as="style".*googleapis/.test(content);
  const hasPrintHack = /media="print" onload="this\.media='all'"/.test(content);
  if (hasPreload) console.log(`❌ ${file}: still has preload pattern`);
  if (!hasPrintHack) console.log(`⚠ ${file}: missing print/onload pattern`);
}
console.log('Done.');
