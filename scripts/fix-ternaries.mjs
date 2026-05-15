import fs from 'fs';
import path from 'path';

// Fix broken ternaries where ` ? ` was replaced by ` — ` inside <script> tags
const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let changed = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace inside <script>...</script>
  content = content.replace(/(<script\b[^>]*>)([\s\S]*?)(<\/script>)/gi, (match, open, inner, close) => {
    // Only replace ` — ` with ` ? ` inside the JS
    return open + inner.replace(/ — /g, ' ? ') + close;
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    changed++;
    console.log('Fixed scripts in:', file);
  }
}
console.log(`\nSuccessfully fixed ternaries in ${changed} HTML files.`);
