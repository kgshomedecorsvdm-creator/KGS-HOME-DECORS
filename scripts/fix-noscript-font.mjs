import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const dir = process.cwd();
const files = readdirSync(dir).filter(f => f.endsWith('.html'));

// Pattern: the batch script replaced the blocking font line with preconnect+preload+noscript,
// but the ORIGINAL noscript was still there, creating nested/duplicate noscript blocks.
// We need to find and fix any corrupted noscript blocks for Crimson+Pro fonts.

const CORRUPTED = /<noscript><link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">\s*\n\s*<link rel="preconnect" href="https:\/\/fonts\.gstatic\.com" crossorigin>\s*\n\s*<link rel="preload" as="style" href="https:\/\/fonts\.googleapis\.com\/css2\?family=Crimson\+Pro[^"]*" onload="[^"]*">\s*\n\s*<noscript><link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Crimson\+Pro[^"]*" rel="stylesheet"><\/noscript><\/noscript>/g;

const CLEAN = `<noscript><link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Jost:wght@300;400;500;600;700&display=swap" rel="stylesheet"></noscript>`;

let fixedCount = 0;

for (const file of files) {
  const path = join(dir, file);
  const content = readFileSync(path, 'utf8');
  
  CORRUPTED.lastIndex = 0;
  if (!CORRUPTED.test(content)) continue;
  
  CORRUPTED.lastIndex = 0;
  const fixed = content.replace(CORRUPTED, CLEAN);
  
  if (fixed !== content) {
    writeFileSync(path, fixed, 'utf8');
    console.log('FIXED:', file);
    fixedCount++;
  }
}

console.log(`\nDone: ${fixedCount} files fixed.`);

// Also check for duplicate preconnect blocks (batch script may have added extras)
console.log('\n--- Checking for duplicate preconnects ---');
for (const file of files) {
  const content = readFileSync(join(dir, file), 'utf8');
  const preconnects = (content.match(/rel="preconnect" href="https:\/\/fonts\.googleapis\.com"/g) || []).length;
  if (preconnects > 1) {
    console.log(`⚠ ${file}: ${preconnects} preconnects to fonts.googleapis.com`);
  }
  // Check nested noscript
  if (content.includes('</noscript></noscript>')) {
    console.log(`❌ ${file}: nested </noscript></noscript> found`);
  }
}
console.log('Scan complete.');
