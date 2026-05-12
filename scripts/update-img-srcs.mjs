/**
 * Updates all HTML files to:
 * 1. Replace .png/.jpg image src with .webp equivalents
 * 2. Add loading="lazy" to below-fold images
 * 3. Add fetchpriority="high" + loading="eager" to hero images
 * 4. Keep existing lazy attributes unchanged
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';

const ROOT = 'd:/KGS HOME DECOR';
const IMG_BASE = `${ROOT}/assets/images`;

// Collect all WebP files that exist (relative paths from assets/images/)
function hasWebP(src) {
  // src is like "assets/images/banners/storefront_hero.png"
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  // Check if the WebP exists on disk
  const abs = `${ROOT}/${webpSrc}`;
  return existsSync(abs) ? webpSrc : null;
}

const htmlFiles = readdirSync(ROOT)
  .filter(f => f.endsWith('.html'))
  .map(f => path.join(ROOT, f));

// Hero images that should be eager + high priority
const heroImages = [
  'storefront_hero',
  'hero.webp',
  'hero_sofa',
  'hero_clock',
  'hero_nature',
];

let totalChanged = 0;

for (const file of htmlFiles) {
  let html = readFileSync(file, 'utf8');
  let changed = 0;

  // Replace .png and .jpg src= within assets/images paths with .webp
  html = html.replace(
    /src="(assets\/images\/[^"]+\.(png|jpg|jpeg))"/gi,
    (match, src) => {
      const webp = hasWebP(src);
      if (webp) { changed++; return `src="${webp}"`; }
      return match;
    }
  );

  // Add loading="lazy" to images that don't already have a loading attribute
  // but skip: hero images, preloader, and images that already have loading=
  html = html.replace(
    /<img(?![^>]*\bloading\b)([^>]*src="assets\/images\/([^"]+)\.webp"[^>]*)>/gi,
    (match, attrs, imgName) => {
      const isHero = heroImages.some(h => imgName.includes(h));
      if (isHero) {
        // Hero: eager + high priority
        return `<img${attrs} loading="eager" fetchpriority="high">`;
      }
      return `<img${attrs} loading="lazy">`;
    }
  );

  if (changed > 0) {
    writeFileSync(file, html, 'utf8');
    console.log(`${path.basename(file)}: ${changed} image(s) updated to WebP`);
    totalChanged += changed;
  }
}

console.log(`\nTotal: ${totalChanged} image references updated across ${htmlFiles.length} HTML files.`);
