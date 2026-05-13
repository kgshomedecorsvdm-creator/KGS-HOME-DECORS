import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const dir = process.cwd();
const files = readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'kgsadmin.html');

let fixed = 0;

for (const file of files) {
  const path = join(dir, file);
  let content = readFileSync(path, 'utf8');
  const orig = content;

  const hasStoreJs = content.includes('assets/js/store.js') || content.includes('assets/js/supabase-client.js');
  const hasConfigJs = content.includes('assets/js/config.js');

  if (!hasStoreJs || hasConfigJs) continue;

  // Add config.js just before the first occurrence of store.js or supabase-client.js
  // Use non-defer so it loads synchronously before deferred scripts run
  content = content
    .replace(
      /<script src="assets\/js\/store\.js"/,
      '<script src="assets/js/config.js"></script>\n<script src="assets/js/store.js"'
    )
    .replace(
      /<script src="assets\/js\/supabase-client\.js"/,
      '<script src="assets/js/config.js"></script>\n<script src="assets/js/supabase-client.js"'
    );

  if (content !== orig) {
    writeFileSync(path, content, 'utf8');
    console.log('FIXED (added config.js):', file);
    fixed++;
  }
}

console.log(`\n${fixed} files fixed.`);

// Verify
console.log('\n--- Verification ---');
for (const file of files) {
  const content = readFileSync(join(dir, file), 'utf8');
  const hasStore = content.includes('assets/js/store.js') || content.includes('assets/js/supabase-client.js');
  const hasConfig = content.includes('assets/js/config.js');
  if (hasStore && !hasConfig) {
    console.log(`❌ ${file}: still missing config.js`);
  }
}
console.log('Done.');
