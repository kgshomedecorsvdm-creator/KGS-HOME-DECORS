// Pre-renders the main static pages into HTML snapshots crawlers can read.
// Products are intentionally NOT pre-rendered (covered by JS render + sitemap).
// Re-run: restore scripts/index.shell.html -> index.html first, then `node scripts/prerender.mjs`
import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'node:fs';

const ROUTES = [
  ['/', 'index.html'],
  ['/shop', 'shop/index.html'],
  ['/about', 'about/index.html'],
  ['/contact', 'contact/index.html'],
  ['/reviews', 'reviews/index.html'],
  ['/privacy', 'privacy/index.html'],
  ['/terms', 'terms/index.html'],
  ['/returns', 'returns/index.html'],
  ['/shipping', 'shipping/index.html'],
];
// reducedMotion => the app forces .reveal content visible & skips GSAP, so the
// captured DOM has no opacity:0 hidden text (critical for crawlable snapshots).
const browser = await chromium.launch();
const ctx = await browser.newContext({ reducedMotion: 'reduce' });
const page = await ctx.newPage();
const results = [];
for (const [route, file] of ROUTES) {
  await page.goto('http://localhost:8082' + route, { waitUntil: 'networkidle' });
  await page.waitForTimeout(route === '/shop' ? 4000 : 2500); // products/render settle
  // belt-and-suspenders: force any leftover reveal elements visible, drop the splash overlay
  await page.evaluate(() => {
    document.querySelectorAll('.reveal,[style*="opacity:0"],[style*="opacity: 0"]').forEach(function(e){ e.style.opacity='1'; e.style.transform='none'; });
    var l = document.querySelector('.kgs-loader'); if (l) l.remove();
  });
  const title = await page.title();
  const textLen = await page.evaluate(() => (document.querySelector('#root')||document.body).innerText.trim().length);
  let html = await page.evaluate(() => '<!DOCTYPE html>\n' + document.documentElement.outerHTML);
  const out = file.includes('/') ? file : file;
  if (file.includes('/')) mkdirSync(new URL('../' + file.split('/')[0], import.meta.url), { recursive: true });
  writeFileSync(new URL('../' + file, import.meta.url), html, 'utf8');
  results.push({ route, file, title, textChars: textLen, bytes: html.length });
}
console.log(JSON.stringify(results, null, 2));
await browser.close();
