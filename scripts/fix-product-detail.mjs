import fs from 'fs';

const file = 'product-detail.html';
let content = fs.readFileSync(file, 'utf8');

// Global encoding fixes
content = content.replace(/Ã©/g, 'é');
content = content.replace(/â‚¹/g, '₹');
content = content.replace(/ï¿½/g, '•');

// Fix specific broken lines
content = content.replace(
  /at KGS Home DÃ©cors â€” â‚¹\.toLocaleString/g, 
  'at KGS Home Décors — ₹${p.price.toLocaleString'
);

// Fix ternary operators that were corrupted
content = content.replace(/(<script\b[^>]*>)([\s\S]*?)(<\/script>)/gi, (match, open, inner, close) => {
  return open + inner.replace(/ â€” /g, ' ? ') + close;
});

// Final sweep for remaining em-dashes
content = content.replace(/â€”/g, '—');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed product-detail.html');
