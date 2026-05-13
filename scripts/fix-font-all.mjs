import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const dir = process.cwd();
const files = readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'kgsadmin.html');

const FONT_URL = 'https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Jost:wght@300;400;500;600;700&display=swap';

// The correct block we want (exactly once per file):
const CORRECT_BLOCK = [
  '<link rel="preconnect" href="https://fonts.googleapis.com">',
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
  `<link rel="preload" as="style" href="${FONT_URL}" onload="this.onload=null;this.rel='stylesheet'">`,
  `<noscript><link href="${FONT_URL}" rel="stylesheet"></noscript>`
].join('\n');

let fixedCount = 0;

for (const file of files) {
  const path = join(dir, file);
  let content = readFileSync(path, 'utf8');
  const orig = content;

  // 1. Remove ALL existing Crimson+Pro font-related lines
  //    (preconnect to fonts.googleapis, preconnect to fonts.gstatic, 
  //     preload for Crimson, stylesheet for Crimson, noscript for Crimson)
  const lines = content.split('\n');
  const cleaned = [];
  let skipNoscriptClose = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Skip lines related to Crimson+Pro font loading
    if (trimmed.includes('fonts.googleapis.com') && 
        !trimmed.includes('Material') && 
        !trimmed.includes('icon_names')) {
      // This is a Crimson/Jost font line - skip it
      continue;
    }
    if (trimmed.includes('fonts.gstatic.com') && 
        !trimmed.includes('Material')) {
      continue;
    }
    
    cleaned.push(line);
  }
  
  content = cleaned.join('\n');
  
  // 2. Find the insertion point - right before the first <style> or Material Symbols preload
  const insertBefore = content.match(/<link rel="preload"[^>]*Material|<style>|<link rel="stylesheet" href="assets\/css/);
  if (insertBefore) {
    const idx = content.indexOf(insertBefore[0]);
    content = content.slice(0, idx) + CORRECT_BLOCK + '\n' + content.slice(idx);
  }

  if (content !== orig) {
    writeFileSync(path, content, 'utf8');
    console.log('FIXED:', file);
    fixedCount++;
  }
}

console.log(`\n${fixedCount} files fixed.`);

// Verify
console.log('\n--- Verification ---');
for (const file of files) {
  const content = readFileSync(join(dir, file), 'utf8');
  const preconnects = (content.match(/preconnect.*fonts\.googleapis\.com/g) || []).length;
  const preloads = (content.match(/preload.*Crimson/g) || []).length;
  const blocking = (content.match(/<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Crimson[^"]*" rel="stylesheet">/g) || []).length;
  const noscripts = (content.match(/<noscript>.*Crimson/g) || []).length;
  
  const status = (preconnects === 1 && preloads === 1 && blocking === 0 && noscripts === 1) ? '✅' : '❌';
  if (status === '❌') {
    console.log(`${status} ${file}: preconnect=${preconnects} preload=${preloads} blocking=${blocking} noscript=${noscripts}`);
  }
}
console.log('Done.');
