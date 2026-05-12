import { writeFileSync } from 'fs';

const files = [
  { url: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',          out: 'gsap.min.js' },
  { url: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js', out: 'ScrollTrigger.min.js' },
  { url: 'https://unpkg.com/lenis@1.1.20/dist/lenis.min.js',                        out: 'lenis.min.js' },
  { url: 'https://cdn.jsdelivr.net/npm/fuse.js/dist/fuse.min.js',                   out: 'fuse.min.js' },
];

for (const { url, out } of files) {
  process.stdout.write(`Downloading ${out}...`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(`assets/js/${out}`, buf);
  console.log(` ${(buf.length / 1024).toFixed(0)} KB`);
}
console.log('All scripts downloaded.');
