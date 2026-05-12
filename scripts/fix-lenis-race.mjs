import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const dir = process.cwd();
const files = readdirSync(dir).filter(f => f.endsWith('.html'));

const LENIS_BAD = /const lenis = new Lenis\(\);\s*\n\s*function raf\(time\) \{ lenis\.raf\(time\); requestAnimationFrame\(raf\); \}\s*\n\s*requestAnimationFrame\(raf\);/g;

const LENIS_GOOD = `document.addEventListener('DOMContentLoaded', () => {
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis();
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }
});`;

let fixedCount = 0;

for (const file of files) {
  const path = join(dir, file);
  let content = readFileSync(path, 'utf8');
  
  LENIS_BAD.lastIndex = 0;
  if (!LENIS_BAD.test(content)) continue;
  
  LENIS_BAD.lastIndex = 0;
  const fixed = content.replace(LENIS_BAD, LENIS_GOOD);
  
  if (fixed !== content) {
    writeFileSync(path, fixed, 'utf8');
    console.log('LENIS fixed:', file);
    fixedCount++;
  }
}

console.log(`\nDone: ${fixedCount} files fixed.`);

// Verify
let bad = 0;
for (const file of files) {
  const content = readFileSync(join(dir, file), 'utf8');
  if (/^const lenis = new Lenis\(\);/m.test(content)) {
    console.log('STILL BAD:', file);
    bad++;
  }
}
if (bad === 0) console.log('All clean.');
