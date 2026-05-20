const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const b = html.indexOf('<body');
const r = html.indexOf('<div id="root">');
console.log(html.substring(b, r));
