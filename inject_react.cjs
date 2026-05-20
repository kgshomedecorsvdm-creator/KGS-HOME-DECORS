const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Remove babel standalone import
html = html.replace(/<script src="https:\/\/unpkg\.com\/@babel\/standalone@7\.29\.0\/babel\.min\.js"><\/script>\n*/, '');

// Strip out all babel script blocks
while (true) {
  const startTag = '<script type="text/babel">';
  const endTag = '</script>';
  const start = html.indexOf(startTag);
  if (start === -1) break;
  
  const end = html.indexOf(endTag, start);
  if (end === -1) break;
  
  html = html.substring(0, start) + html.substring(end + endTag.length);
}

// Add the single bundled app.js script at the end of the body
html = html.replace('</body>', '  <script src="assets/js/app.js"></script>\n</body>');

fs.writeFileSync('index.html', html);
console.log('index.html successfully updated to use pre-compiled app.js!');
