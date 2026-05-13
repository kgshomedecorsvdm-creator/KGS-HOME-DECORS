/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './assets/js/**/*.js',
  ],

  safelist: [
    // text-label appears in JS template literals (store.js dynamic cards)
    // — must be safelisted so the purge pass doesn't drop it
    'text-label',
  ],

  theme: {
    extend: {
      colors: {
        // ── Core brand palette ──────────────────────────────────────────────
        base:    '#FAF8F4',   // page background
        tint:    '#F3EDE4',   // light section backgrounds
        surface: '#FDF9F3',   // card / nav background
        ink:     '#1A1A1A',   // primary text
        muted:   '#5E5B59',   // secondary / caption text
        gold:    '#C5A880',   // decorative accent (borders, icons, hover states)
        warm:    '#C97840',   // CTA buttons, highlights
        border:  '#E4DDD4',   // dividers, card borders
        // ── Accessible label color (WCAG AA on all backgrounds) ────────────
        label:   '#7A5C1E',   // 5.1:1 contrast on #FDF9F3 — used on eyebrow text
      },

      fontFamily: {
        sans:  ['Jost', 'sans-serif'],
        serif: ['Crimson Pro', 'Georgia', 'serif'],
      },
    },
  },

  plugins: [],
};
