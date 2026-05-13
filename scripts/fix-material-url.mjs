import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const dir = process.cwd();
const files = readdirSync(dir).filter(f => f.endsWith('.html'));

// The icon_names parameter in the Material Symbols URL is causing 400 Bad Request
// from Google Fonts API. Remove icon_names and use the base URL (loads ALL icons).
// This is slightly larger but guaranteed to work.

const WORKING_URL = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap';

let fixed = 0;

for (const file of files) {
  if (file === 'kgsadmin.html') continue;
  const path = join(dir, file);
  let content = readFileSync(path, 'utf8');
  const orig = content;

  // Replace any Material Symbols URL (with long icon_names param) with the clean base URL
  content = content.replace(
    /https:\/\/fonts\.googleapis\.com\/css2\?family=Material\+Symbols\+Outlined:opsz,wght,FILL,GRAD@20\.\.48,100\.\.700,0\.\.1,-50\.\.200[^"']*/g,
    WORKING_URL
  );

  if (content !== orig) {
    writeFileSync(path, content, 'utf8');
    console.log('FIXED:', file);
    fixed++;
  }
}

console.log(`\n${fixed} files fixed.`);
