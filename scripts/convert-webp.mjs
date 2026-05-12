/**
 * Converts missing WebP files for categories/ and banners/ subdirectories,
 * plus showroom_interior.png and storefront.png in the root assets/images/ dir.
 * Uses sharp for conversion (installs automatically if missing).
 */
import { execSync } from 'child_process';
import { existsSync, readdirSync } from 'fs';
import path from 'path';

// Install sharp if needed
try { await import('sharp'); }
catch { console.log('Installing sharp...'); execSync('npm install --save-dev sharp', { stdio: 'inherit' }); }

const { default: sharp } = await import('sharp');

const IMAGES = 'd:/KGS HOME DECOR/assets/images';

const toConvert = [
  // Banners (no WebP at all)
  `${IMAGES}/banners/storefront_hero.png`,
  `${IMAGES}/banners/split_sofas.png`,
  `${IMAGES}/banners/split_lighting.png`,
  // Categories (no WebP at all)
  `${IMAGES}/categories/cat_sofas.png`,
  `${IMAGES}/categories/cat_decor.png`,
  `${IMAGES}/categories/cat_wall_decor.png`,
  `${IMAGES}/categories/cat_lighting.png`,
  `${IMAGES}/categories/cat_lifestyle.png`,
  `${IMAGES}/categories/cat_plants.png`,
  `${IMAGES}/categories/cat_gifts.png`,
  // Root images missing WebP
  `${IMAGES}/showroom_interior.png`,
  `${IMAGES}/storefront.png`,
];

for (const src of toConvert) {
  if (!existsSync(src)) { console.log(`SKIP (not found): ${path.basename(src)}`); continue; }
  const dest = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  if (existsSync(dest)) { console.log(`EXISTS: ${path.basename(dest)}`); continue; }
  process.stdout.write(`Converting ${path.basename(src)}...`);
  await sharp(src).webp({ quality: 82 }).toFile(dest);
  const size = (await import('fs')).statSync(dest).size;
  console.log(` done — ${(size/1024).toFixed(0)} KB`);
}
console.log('\nAll conversions complete.');
