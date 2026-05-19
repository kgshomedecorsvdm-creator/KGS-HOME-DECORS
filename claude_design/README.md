# KGS Home Décors — Design System

> **Premium furniture & home décor — Virudhachalam, Tamil Nadu**
> [kgshomedecors.in](https://kgshomedecors.in) · ★5.0 on Google · 500+ products · Free delivery in Virudhachalam

---

## 1 · WHAT KGS IS

KGS Home Décors is a brick-and-mortar **+** online home décor store on Junction Road, Virudhachalam. The founding idea: to bring premium, high-end furniture and décor directly to our community, offering uncompromising quality and timeless design right here at home. The shop now stocks **500+ curated pieces** — sofas, water fountains, wall clocks, decorative statues, photo frames, LED lights, artificial plants, vases, and gift items — sold both in the physical showroom and through a **Tailwind + vanilla-JS e-commerce site** backed by Supabase.

**One product, two channels:** the showroom and the website are equally important. The website is *not* a pure DTC operation — many customers chat on WhatsApp first, visit the store, and then place an online order. The design must support both flows.

### Brand pillars
- **Premium but local.** Export-quality goods, Tamil-Nadu service.
- **Personal.** WhatsApp-first support, "we reply in 10 minutes."
- **Trust.** Free delivery in Virudhachalam, 7-day returns, 5.0/Google.
- **Curated.** "Every product is personally selected."

### Audience
South-Indian middle- and upper-middle-class homeowners (25–55) furnishing a first home, gifting, or upgrading. Reads English fluently with Tamil words sprinkled in conversation; familiar with WhatsApp + UPI; expects a Western e-commerce UX but also wants to be able to call.

---

## 2 · SOURCES

This design system was reverse-engineered from the live KGS codebase.

| Source                         | Where                                                 |
| ------------------------------ | ----------------------------------------------------- |
| Codebase (HTML + Tailwind +JS) | `KGS HOME DECOR/` (mounted folder, read-only)         |
| Live site                      | https://kgshomedecors.in                              |
| Catalog data                   | `KGS HOME DECOR/assets/products.json`                 |
| Tailwind brand tokens          | `KGS HOME DECOR/tailwind.config.js`                   |
| Hero / banner images           | `KGS HOME DECOR/assets/images/banners/`               |
| Product photos                 | `KGS HOME DECOR/product-images-extracted/`            |
| Tech stack                     | Tailwind CSS · GSAP + ScrollTrigger · Lenis (smooth scroll) · Fuse.js (search) · Supabase (auth + orders) · Material Symbols (icons) |

No Figma file was provided. No agency style guide was provided. The design system below is the **closest faithful read** of the production HTML/CSS — colors, fonts, spacing, and components are lifted directly from `index.html`, `about.html`, `product-listing.html`, and the Tailwind config.

---

## 3 · CONTENT FUNDAMENTALS

### Voice
**Warm, confident, locally proud, never salesy.** Reads like a well-spoken store owner in their own showroom. Avoids hype words ("revolutionary," "game-changing"); leans into specifics ("Junction Road," "Free delivery in Virudhachalam," "10 AM – 10 PM").

### Person
**"We" + "you"**, never "I". Examples from the site:
- *"We bring premium home décor to your door."*
- *"Your home deserves the best — and we bring it directly to you."*
- *"Every product is personally selected."*

### Tone register
- **Headlines:** quietly aspirational, often two short lines.
  *"Design Your Space, / Define Your Comfort"*
  *"Built for the Homes / of Virudhachalam"*
- **Subhead / lead:** practical, factual, no exclamation marks.
  *"Premium Furniture & Décor for Beautiful Living."*
- **Eyebrows / overlines:** locality + category framing.
  *"EST. VIRUDHACHALAM"* · *"COLLECTIONS"* · *"OUR STORY"* · *"WHY KGS"*
- **CTAs:** all caps, 1–3 words, verb-first.
  *SHOP NOW · EXPLORE FURNITURE · GET DIRECTIONS · VIEW ALL*

### Casing rules
- **Headings:** Title Case ("Visit Our Showroom").
- **Eyebrows, buttons, nav, micro-labels:** ALL CAPS with `.14em–.25em` letter-spacing.
- **Body:** Sentence case. Oxford comma in lists.
- **Brand name:** "KGS Home Décors" (capital D, é-acute — important).

### Punctuation
- The em-dash with non-breaking spaces is a KGS tic: *"Free Delivery in Virudhachalam &nbsp;—&nbsp; Secure Online Payments &nbsp;—&nbsp; Open 10 AM — 10 PM."*
- Rupee glyph `₹` not "Rs". `₹18,500` not `Rs. 18500`.
- Indian-style numerals are fine: `10,000+ customers`.

### What we don't do
- **No emoji** in marketing copy, headings, or buttons. The site uses Material Symbols icons instead.
- **No "click here" / "learn more"** vague CTAs.
- **No "limited time only!!"** urgency-sales theatre.
- **No first-person ("I"), no "team," no founder-name-dropping.**
- No mixing of Tamil script in the UI — English-only copy (so far).

### Vocabulary cues
| Use this              | Not this                  |
| --------------------- | ------------------------- |
| Décor (with accent)   | Decor                     |
| Showroom              | Store / Outlet            |
| Curated               | Hand-picked / Best-in-class |
| Pieces                | Items / SKUs              |
| Get Directions        | Find Us                   |
| WhatsApp Us           | Chat now / Message us     |
| Free Delivery         | Free Shipping             |

---

## 4 · VISUAL FOUNDATIONS

### Palette
A **warm-neutral** system — bone, cream, gold, terracotta. Never blue, never cool grey, never pure black backgrounds.

| Token       | Hex       | Role                                              |
| ----------- | --------- | ------------------------------------------------- |
| `--base`    | `#FAF8F4` | page background (warm bone)                       |
| `--tint`    | `#F3EDE4` | section bands, banners                            |
| `--surface` | `#FDF9F3` | cards, nav, elevated surfaces                     |
| `--ink`     | `#1A1A1A` | primary text (off-black; never `#000`)            |
| `--muted`   | `#5E5B59` | body / captions                                   |
| `--gold`    | `#C5A880` | antique-gold — borders, icons, hover-accent       |
| `--warm`    | `#C97840` | terracotta — CTAs, badges                         |
| `--border`  | `#E4DDD4` | dividers, card borders                            |
| `--label`   | `#7A5C1E` | eyebrow text (WCAG-AA on `--surface`)             |
| `--success` | `#25D366` | WhatsApp green only                               |

Dark hero/footer panels use `#1A1A1A` (ink) or `#2A2522` / `#1C1F1D` (warm/cool ink) — never `#000`.

### Type
- **Serif display** — `Crimson Pro` (500 medium is the workhorse). Used for every headline, the logo, prices, italic quotes.
- **Sans body / UI** — `Jost` (300 / 400 / 500 / 600 / 700). Used for body, nav, buttons, labels.
- **Eyebrows always sans, uppercase, 11px, `letter-spacing .22em`.**
- **Pair rule:** if a heading is set in Crimson Pro, the subhead/lead is set in Jost. Never two serifs stacked.

### Backgrounds
- **Flat warm neutrals** dominate. No full-bleed photos behind text.
- **Hero images** sit in a separate column, masked with a **signature asymmetric corner**: `border-top-left-radius: 200px; border-bottom-right-radius: 40px;`.
- **Split banners** use a dark warm panel (`#2A2522`) on the left with a faded photo bleeding from the right, separated by a long horizontal gradient.
- **No textures, no noise overlays, no repeating patterns.**
- **No gradients on text or buttons** — only used to fade banner photos into solid panels.

### Hover states
- **Cards:** `translateY(-4px)` + soft elevated shadow + image zoom (`scale(1.05)` over 700ms with `--ease-img`).
- **Buttons (primary):** background darkens (`#C97840 → #A8612D`), lifts `translateY(-2px) scale(1.02)`, shadow `--sh-cta-hov`.
- **Buttons (secondary):** border darkens to full ink, lifts `-2px`, soft shadow.
- **Nav links:** color shifts `--soft → --ink`, a 1px `--gold` underline grows from 0 → 100% in 200ms.
- **Heart icon:** fills + colors to `--warm`.
- **Hover only on devices with `(hover: hover) and (pointer: fine)`** — never on touch.

### Press states
- **Buttons:** `transform: scale(0.96)` with shadow drop to `--sh-cta`.
- **Heart / icon buttons:** `transform: scale(0.9)`.
- **Cards / list rows:** no special press state (rely on link tap).

### Borders
- **1px**, color `--border` (`#E4DDD4`) — used on every card, divider, input.
- A **"premium override"** in production drops borders to `rgba(26,26,26,0.06)` for sections — barely visible, more like a hairline.
- Gold borders (`--gold`) appear **only on hover** of categories or focus of inputs.

### Shadows
Restrained, far-offset, low-opacity. Premium = *almost no shadow*.
- Idle card: none, or `--sh-sm` (10/30/-5 px @ 3% ink).
- Hover card: `--sh-lg` (12/40/-10 @ 8%).
- CTA: `--sh-cta` (orange-tinted, 14px blur, 15% warm).
- Hero / nav: subtle `backdrop-filter: blur(8–16px)` on a translucent surface (`bg-surface/90`).

### Radii
- **Cards / inputs / buttons:** `6px` (`--r-md`) — sharp but not knife-edge.
- **Skeletons / chips:** `4px`.
- **Pills:** only on the heart button, WhatsApp float, social icons.
- **Hero photo mask:** asymmetric `200px / 40px` (signature look).

### Animation
- **Reveal on scroll** via GSAP + ScrollTrigger. Stagger of ~80ms, opacity 0→1, `translateY(20px → 0)`, duration `.7s`, easing `--ease-punch`.
- **Smooth scroll** via Lenis.
- **No bounces, no parallax, no overshoots.** Premium motion = gentle and quick.
- **Easing curves:**
  - `--ease-punch: cubic-bezier(.23, 1, .32, 1)` — hero + hover
  - `--ease-drawer: cubic-bezier(.32, .72, 0, 1)` — drawers, modals
  - `--ease-cta: cubic-bezier(.25, 1, .5, 1)` — buttons
  - `--ease-img: cubic-bezier(.33, 1, .68, 1)` — image zoom
- **WhatsApp float pulses** softly (2.5s `box-shadow` pulse).

### Transparency & blur
- **Nav** uses `bg-surface/90` + `backdrop-filter: blur(16px)` once scrolled.
- **Search overlay** uses `bg-ink/92` + `blur(8px)`.
- **Drawer overlay** uses `bg-ink/40` + `blur(4px)`.
- Blur is **always paired with a translucent warm surface** — never blur over pure white.

### Layout rules
- Page max-width `1440px` (`90rem`), centred. Gutter `48px` desktop / `20px` mobile.
- **Nav fixed**, height `96px` desktop / `80px` mobile. Always glass.
- **Section vertical rhythm** `80–96px` desktop. Banded — alternating `--base` and `--surface`/`--tint`.
- **2 / 3 / 4-column** grids are the only widths used (no 5 or 7).
- **Hero is two-column on desktop, single on mobile.** Image always right.

### Imagery
- **Warm, daylight-saturated interior photography** — wood, brass, beige textiles, plants.
- Products are **always shot on pure white**, centred, with light shadow — they sit on `#FFF` inside a `--surface` card with `20px` padding.
- Lifestyle / room shots are **wide, slightly desaturated, warm grade** — never high contrast, never b&w, never grainy.
- Storefront photo is the brand's true hero image — used on home, about, and OG meta.

### Cards
- Background `--surface` (`#FDF9F3`), border `1px var(--border)`, radius `--r-md` (6px), idle shadow `--sh-sm`.
- Image area is **always `aspect-ratio: 1`** for products, padded `20px`, on pure white.
- Hover lifts `-4px`, shadow deepens, image zooms `1.05`, a `card-overlay` panel slides up from the bottom revealing a "QUICK ADD" CTA.

---

## 5 · ICONOGRAPHY

KGS uses **Material Symbols Outlined** (Google) as its primary icon set, loaded via Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet">
```

Render with:
```html
<span class="material-symbols-outlined">favorite</span>
```

Default font-variation-settings used across the site:
```css
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24;
}
```
**`wght: 200`** is important — KGS's icons are notably **thin**, matching the serif headlines. Don't use 400/500.

### Icons in production
Search · person · favorite · shopping_bag · menu · close · payments · local_shipping · replay · support_agent · star · shield · sentiment_satisfied · public · location_on · schedule · directions · call · chat · verified · storefront · check_circle · arrow_forward.

### Custom SVGs
Two are inlined directly (not Material):
- **WhatsApp brand mark** — official monochrome glyph, used for the floating button and footer social link.
- **Instagram brand mark** — outlined squircle + circle + dot, stroke 1.5.
- **Google "G"** logo — 4-colour, used only on Google-reviews badge.

### Emoji
**Never.** No emoji is used anywhere in the production site. Use Material Symbols or copy.

### Unicode glyphs
- `★` for star rating (paired with Material `star` icon).
- `→` and `&rarr;` for inline arrows in "VIEW ALL →" links.
- `₹` for prices.
- `—` em-dash (always with non-breaking spaces around it in announcement bars).

### Logo
The mark is a **wordmark only**: the letters `KGS` set in Crimson Pro Medium with extreme `letter-spacing: .35em`. No symbol, no monogram. The favicon (`assets/logo/favicon.svg`) is the wordmark on an ink `#1A1A1A` rounded-rect tile in gold `#C5A880`.

---

## 6 · INDEX — what's in this folder

| Path                         | What's there                                                                  |
| ---------------------------- | ----------------------------------------------------------------------------- |
| `README.md`                  | This file — overview, content + visual foundations, iconography.              |
| `SKILL.md`                   | Agent-Skills-compatible entry point. Tells an LLM how to use this DS.         |
| `colors_and_type.css`        | Every CSS var: colors, type scale, spacing, radii, shadows, easings.          |
| `assets/logo/`               | Favicon / wordmark SVG.                                                       |
| `assets/banners/`            | Storefront hero + split banners (sofas, lighting).                            |
| `assets/categories/`         | Round category thumbnails (sofas, décor, wall-décor, lighting, etc).          |
| `assets/products/`           | Per-product photography (`sofa.webp`, `clock.webp`, etc).                     |
| `assets/lifestyle/`          | Showroom + room-set lifestyle photography.                                    |
| `assets/products.json`       | The live catalogue (id, name, category, price, specs, WhatsApp prefill text). |
| `preview/`                   | Design-System tab cards — one HTML per swatch / specimen / component.         |
| `ui_kits/website/`           | Pixel-faithful recreation of the KGS marketing + e-com site.                  |

### UI Kits
- **`ui_kits/website/`** — KGS Home Décors marketing + e-commerce website. One product surface for now; mobile + desktop responsive.

---

## 7 · CAVEATS

- **Fonts:** Crimson Pro + Jost are loaded from Google Fonts in production. No local `.ttf/.woff2` files are included with the codebase — and we **did not download them locally**. The CSS `@import` is identical to production, so designs match as long as the network is available.
- **No Figma source.** Everything was reverse-engineered from the HTML/CSS. If a Figma library exists, please share it and we will reconcile.
- **No agency tone-of-voice guide.** The voice rules above are inferred from existing copy in `index.html` and `about.html`.
- **Product photography on white is inconsistent** in the live store — some images include lifestyle backgrounds, others are clean cut-outs. The DS prefers cut-outs on `#FFF` with 20px padding; the kit follows that.
- **Some scripts/dev tooling in the repo (`scripts/fix-*.mjs`, Supabase SQL, etc.) were intentionally ignored** — they are build-side fixes, not part of the design system.
