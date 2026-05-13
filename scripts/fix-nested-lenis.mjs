import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const dir = process.cwd();
const files = readdirSync(dir).filter(f => f.endsWith('.html'));

// Pattern: nested DOMContentLoaded inside existing DOMContentLoaded
// The Lenis fix script wrongly injected:
//   document.addEventListener('DOMContentLoaded', () => {
//     if (typeof Lenis !== 'undefined') {
//       const lenis = new Lenis();
//       ...
//     }
//   });
// INSIDE an already-existing DOMContentLoaded block.

let fixedCount = 0;

for (const file of files) {
  const path = join(dir, file);
  let content = readFileSync(path, 'utf8');
  const orig = content;

  // Fix pattern: nested DOMContentLoaded Lenis wrapper inside outer DOMContentLoaded
  // Replace the nested version with just the flat Lenis init
  const nestedPattern = /if \(typeof Lenis !== 'undefined'\) \{\s*\n\s*document\.addEventListener\('DOMContentLoaded', \(\) => \{\s*\n\s*if \(typeof Lenis !== 'undefined'\) \{\s*\n\s*const lenis = new Lenis\(\);\s*\n\s*function raf\(time\) \{ lenis\.raf\(time\); requestAnimationFrame\(raf\); \}\s*\n\s*requestAnimationFrame\(raf\);\s*\n\s*\}\s*\n\s*\}\);\s*\n\s*\}/g;

  const flatReplacement = `if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis();
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }`;

  content = content.replace(nestedPattern, flatReplacement);

  if (content !== orig) {
    writeFileSync(path, content, 'utf8');
    console.log('FIXED nested:', file);
    fixedCount++;
  }
}

console.log(`\n${fixedCount} files with nested Lenis fixed.`);

// Also check for any remaining nested DOMContentLoaded patterns
console.log('\n--- Checking for remaining nested DOMContentLoaded ---');
for (const file of files) {
  const content = readFileSync(join(dir, file), 'utf8');
  const matches = content.match(/DOMContentLoaded/g) || [];
  if (matches.length > 2) {
    console.log(`⚠ ${file}: ${matches.length} DOMContentLoaded listeners`);
  }
}
console.log('Done.');
