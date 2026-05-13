import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const dir = process.cwd();
const files = readdirSync(dir).filter(f => f.endsWith('.html'));

// FIX 1: Make Material Symbols a regular blocking stylesheet (reliable icon loading)
// The media="print" onload trick doesn't work reliably for icon fonts
// Icons showing as text is a WORSE UX than a few ms of render-blocking

// FIX 2: Keep Crimson Pro/Jost as media="print" (text FOUT is acceptable)

let fixed = 0;

for (const file of files) {
  if (file === 'kgsadmin.html') continue;
  const path = join(dir, file);
  let content = readFileSync(path, 'utf8');
  const orig = content;

  // Fix Material Symbols: change from media="print" onload back to regular stylesheet
  // Match: <link rel="stylesheet" href="...Material+Symbols..." media="print" onload="this.media='all'">
  content = content.replace(
    /<link rel="stylesheet" href="(https:\/\/fonts\.googleapis\.com\/css2\?family=Material\+Symbols\+Outlined[^"]*)" media="print" onload="this\.media='all'">/g,
    '<link rel="stylesheet" href="$1">'
  );

  // Also remove the Material Symbols noscript fallback (no longer needed since it's a regular stylesheet)
  content = content.replace(
    /\n<noscript><link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com\/css2\?family=Material\+Symbols\+Outlined[^"]*"><\/noscript>/g,
    ''
  );

  if (content !== orig) {
    writeFileSync(path, content, 'utf8');
    console.log('FIXED Material Symbols:', file);
    fixed++;
  }
}

console.log(`\n${fixed} files fixed.`);

// Verify
console.log('\n--- Verification ---');
for (const file of files) {
  if (file === 'kgsadmin.html') continue;
  const content = readFileSync(join(dir, file), 'utf8');
  
  const hasMatPrint = /Material.*media="print"/.test(content);
  const hasMatStylesheet = /rel="stylesheet".*Material.*Symbols/.test(content);
  const hasCrimsonPrint = /Crimson.*media="print"/.test(content);
  
  if (hasMatPrint) console.log(`❌ ${file}: Material still has media="print"`);
  if (!hasMatStylesheet) console.log(`⚠ ${file}: Material Symbols stylesheet missing`);
  if (!hasCrimsonPrint) console.log(`⚠ ${file}: Crimson Pro media="print" missing`);
}
console.log('Done.');
