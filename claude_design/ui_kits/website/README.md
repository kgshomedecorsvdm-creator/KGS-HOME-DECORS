# KGS Home Décors — Website UI Kit

Pixel-faithful recreation of the kgshomedecors.in e-commerce site, built as a click-through React prototype.

## What's here

```
index.html      — entry: full interactive prototype (Home / Shop / PDP / Cart / About / Contact)
styles.css      — buttons, cards, nav, hovers, toast — lifted verbatim from production
Chrome.jsx      — Announcement bar · Nav · Footer · TrustBar · WhatsApp float · product/category data
Sections.jsx    — Hero · CategoryStrip · ProductCard · ProductGrid · SplitBanners · ValueProps · ShowroomCTA · Testimonials
Pages.jsx       — ShopPage (with filters) · ProductDetail (gallery, qty, price, specs) · CartPage (line items, summary)
App.jsx         — top-level state (route, cart, wishlist, toast) + About + Contact pages, mounts to #root
```

## Flow you can click through

1. **Home** — hero → trust bar → categories → featured products → split banners → showroom → testimonials.
2. Click a **category pill** or **VIEW ALL** → **Shop** with filter chips.
3. Click any **product image** or name → **Product Detail** with gallery, quantity, related items, Add to Cart, WhatsApp ask.
4. Add a product → toast confirms → cart pip increments → click the bag icon to open **Cart** with quantity adjust, subtotal, delivery (free over ₹5,000), checkout button.
5. **Our Story** + **Contact** pages reproduce the live About + Contact templates.

## Design tokens used

All colors, spacing, type, easings, radii and shadows come from `/colors_and_type.css` (one folder up). The components only re-declare what's component-specific; everything else is inherited.

## What's intentionally simplified

- Search is **mocked** (toast confirms the click). Production runs Fuse.js over the catalogue.
- Login / register, order tracking, and the admin panel were not recreated — they are not "store-front" UI.
- Account drop-in, mobile drawer, and search overlay are not exhaustively wired. The nav icons surface a toast instead.
- Mobile is responsive via the same `.container` rules as production but was not exhaustively tested at small breakpoints.
- Lenis (smooth scroll), GSAP reveals, and the page preloader are **not** included — they are decorative, and reproducing them adds bytes without changing the visual system.

## Why faithful, not improved

The brief was to capture *what KGS looks like today* so future designs sit comfortably alongside the live site. Variations and "what if" explorations belong in separate design files, not in the UI kit.
