const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const babelBlocks = [];
let currentIndex = 0;
while (true) {
  const startTag = '<script type="text/babel">';
  const endTag = '</script>';
  const start = html.indexOf(startTag, currentIndex);
  if (start === -1) break;
  
  const end = html.indexOf(endTag, start);
  if (end === -1) break;
  
  const code = html.substring(start + startTag.length, end);
  babelBlocks.push(code);
  currentIndex = end + endTag.length;
}

console.log('Found ' + babelBlocks.length + ' Babel script blocks.');
if (babelBlocks.length > 0) {
  const combinedCode = babelBlocks.join('\n\n// ===== NEXT SCRIPT BLOCK =====\n\n');
  fs.writeFileSync('raw_react.jsx', combinedCode);
  console.log('Wrote raw_react.jsx');
}
