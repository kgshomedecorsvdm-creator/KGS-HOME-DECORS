// Regenerates sitemap.xml with real static + product URLs.
// Run:  node scripts/gen-sitemap.mjs
// Product URL format MUST match kgsBuildPath() in assets/js/app.js:
//   /product/<slugify(name)>-<id>   (parser resolves by the trailing UUID)
import { writeFileSync } from 'node:fs';

const BASE = 'https://kgshomedecors.in';
const SUPA = 'https://rgpkomngygapwjhnbgaf.supabase.co';
const KEY  = 'sb_publishable_UkDE7zfukrWeuSW2pZYjTQ_YpBFcs9P';

// Mirror of kgsSlugify() in app.js
function slugify(str) {
  return String(str || '')
    .toLowerCase()
    .normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70);
}

// Public, indexable static routes only (no cart/checkout/account/wishlist/login/register)
const STATIC = [
  { path: '/',        priority: '1.0', changefreq: 'weekly'  },
  { path: '/shop',    priority: '0.9', changefreq: 'daily'   },
  { path: '/about',   priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.6', changefreq: 'monthly' },
  { path: '/reviews', priority: '0.6', changefreq: 'weekly'  },
  { path: '/shipping',priority: '0.4', changefreq: 'yearly'  },
  { path: '/returns', priority: '0.4', changefreq: 'yearly'  },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly'  },
  { path: '/terms',   priority: '0.3', changefreq: 'yearly'  },
];

async function fetchAllProducts() {
  const all = [];
  const PAGE = 1000;
  for (let from = 0; ; from += PAGE) {
    const res = await fetch(
      `${SUPA}/rest/v1/products?select=id,name&is_active=eq.true&order=id`,
      { headers: { apikey: KEY, Authorization: 'Bearer ' + KEY,
                   Range: `${from}-${from + PAGE - 1}`, Prefer: 'count=exact' } }
    );
    if (!res.ok) throw new Error('Supabase ' + res.status + ' ' + (await res.text()));
    const batch = await res.json();
    all.push(...batch);
    if (batch.length < PAGE) break;
  }
  return all;
}

const today = new Date().toISOString().slice(0, 10);
const products = await fetchAllProducts();

const urls = [];
for (const s of STATIC) {
  urls.push(`  <url><loc>${BASE}${s.path}</loc><lastmod>${today}</lastmod><changefreq>${s.changefreq}</changefreq><priority>${s.priority}</priority></url>`);
}
for (const p of products) {
  if (!p.id) continue;
  const sl = slugify(p.name);
  const seg = sl ? `${sl}-${p.id}` : p.id;
  urls.push(`  <url><loc>${BASE}/product/${seg}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
writeFileSync(new URL('../sitemap.xml', import.meta.url), xml, 'utf8');
console.log(`sitemap.xml written: ${STATIC.length} static + ${products.length} product URLs = ${urls.length} total`);
