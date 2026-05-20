import fs from 'fs';
const css = `
/* ===== ELITE MOBILE ENHANCEMENTS ===== */
html, body { overflow-x: hidden; -webkit-tap-highlight-color: transparent; }
.btn:active, .icon-btn:active, .nav-link:active, .cart-item-remove:active { transform: scale(0.96) !important; transition: transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) !important; }
@media (max-width: 768px) {
  input, select, textarea { font-size: 16px !important; }
  .nav-bar { backdrop-filter: blur(24px) saturate(180%); -webkit-backdrop-filter: blur(24px) saturate(180%); }
}
@supports (padding-bottom: env(safe-area-inset-bottom)) {
  body { padding-bottom: env(safe-area-inset-bottom); }
}
.best-sellers-track::-webkit-scrollbar, .ig-grid::-webkit-scrollbar { display: none; }
.best-sellers-track, .ig-grid { scrollbar-width: none; }
`;
let styles = fs.readFileSync('assets/css/styles.css', 'utf8');
if (!styles.includes('ELITE MOBILE ENHANCEMENTS')) {
  fs.writeFileSync('assets/css/styles.css', styles + css);
}
let idx = fs.readFileSync('index.html', 'utf8');
if (!idx.includes('ELITE MOBILE ENHANCEMENTS')) {
  idx = idx.replace('</style>', css + '\n  </style>');
  fs.writeFileSync('index.html', idx);
}
console.log('Elite mobile fixes applied.');
