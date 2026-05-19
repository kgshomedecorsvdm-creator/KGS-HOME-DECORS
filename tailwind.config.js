/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './assets/js/**/*.js',
  ],

  safelist: [
    'text-label',
  ],

  theme: {
    extend: {
      colors: {
        base:    '#F9F6F0',   // page background (Timeless Neutral)
        tint:    '#F3EDE4',   // light section backgrounds
        surface: '#FFFFFF',   // pure white for cards nested in base
        ink:     '#1A1A1A',   // primary text
        muted:   '#5E5B59',   // secondary / caption text
        gold:    '#C5A880',   // decorative accent (borders, icons, hover states)
        warm:    '#C97840',   // CTA buttons, highlights
        border:  '#E4DDD4',   // dividers, card borders
        label:   '#7A5C1E',   // Accessible eyebrow text
      },
      transitionTimingFunction: {
        'out-punch': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'drawer': 'cubic-bezier(0.32, 0.72, 0, 1)',
        'in-out-smooth': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
      boxShadow: {
        'soft-float': '0 12px 40px -10px rgba(0,0,0,0.08)',
        'inner-glow': 'inset 0 1px 1px rgba(255,255,255,0.15)',
        'premium-card': '0 4px 6px rgba(0,0,0,0.02), 0 10px 15px rgba(0,0,0,0.03)',
      },
      fontFamily: {
        sans:  ['Inter', 'Manrope', 'sans-serif'],
        serif: ['Playfair Display', 'Bodoni Moda', 'Georgia', 'serif'],
      },
    },
  },

  plugins: [],
};
