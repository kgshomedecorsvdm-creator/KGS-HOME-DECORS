import { writeFileSync, readFileSync, readdirSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

async function run() {
  const url = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0';
  console.log('Fetching CSS from', url);
  
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  const css = await res.text();
  
  const match = css.match(/url\((https:\/\/fonts\.gstatic\.com\/s\/materialsymbolsoutlined\/[^)]+\.woff2)\)/);
  if (!match) {
    console.error('Could not find woff2 url in CSS. CSS was:');
    console.log(css);
    return;
  }
  
  const woffUrl = match[1];
  console.log('Downloading font:', woffUrl);
  
  const fontRes = await fetch(woffUrl);
  const fontBuf = Buffer.from(await fontRes.arrayBuffer());
  
  if (!existsSync('assets/fonts')) mkdirSync('assets/fonts', { recursive: true });
  writeFileSync('assets/fonts/material-symbols-outlined.woff2', fontBuf);
  console.log('Saved font to assets/fonts/material-symbols-outlined.woff2');
  
  const localCss = `@font-face {
  font-family: 'Material Symbols Outlined';
  font-style: normal;
  font-weight: 300;
  font-display: block;
  src: url('../fonts/material-symbols-outlined.woff2') format('woff2');
}

.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}
`;
  
  writeFileSync('assets/css/icons.css', localCss);
  console.log('Saved local CSS to assets/css/icons.css. Updating HTML files...');
  
  const dir = process.cwd();
  const files = readdirSync(dir).filter(f => f.endsWith('.html'));
  let count = 0;
  
  for (const file of files) {
    const p = join(dir, file);
    let content = readFileSync(p, 'utf8');
    const orig = content;
    
    // Replace any Google Fonts link for Material Symbols with the local CSS link
    content = content.replace(
      /<link[^>]+href="https:\/\/fonts\.googleapis\.com\/css2\?family=Material\+Symbols\+Outlined[^>]+>/g,
      '<link rel="stylesheet" href="assets/css/icons.css">'
    );
    
    // Some files might have single quotes or different formatting, let's catch everything
    content = content.replace(
      /<link[^>]+href=['"]https:\/\/fonts\.googleapis\.com\/css2\?family=Material\+Symbols\+Outlined[^'"]+['"][^>]*>/g,
      '<link rel="stylesheet" href="assets/css/icons.css">'
    );
    
    if (content !== orig) {
      writeFileSync(p, content, 'utf8');
      count++;
    }
  }
  
  console.log('Fixed ' + count + ' HTML files.');
}

run();
