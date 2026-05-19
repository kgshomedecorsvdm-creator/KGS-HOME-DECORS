---
name: kgs-home-decors-design
description: Use this skill to generate well-branded interfaces and assets for KGS Home Décors (kgshomedecors.in) — a premium furniture & home-décor e-commerce brand based in Virudhachalam, Tamil Nadu. Contains essential design guidelines, colors, type, fonts, assets, and a UI kit recreation of the live website for prototyping product pages, landing pages, marketing collateral, or production code that needs to match the brand.
user-invocable: true
---

# KGS Home Décors · Design Skill

## How to use this skill

1. **Read `README.md` first** — it contains the brand context, content fundamentals (voice, tone, casing), visual foundations (palette, type, motion), iconography, and a folder index.
2. **Open `colors_and_type.css`** — every design token lives there as a CSS variable. For HTML artifacts, import it directly:
   ```html
   <link rel="stylesheet" href="path/to/colors_and_type.css">
   ```
3. **Pull from `assets/`** — copy logos, banner photos, lifestyle imagery, and product cut-outs out of `assets/{logo, banners, categories, products, lifestyle}/` rather than redrawing them. `assets/products.json` is the live catalogue with names, prices, categories.
4. **Reference the UI kit** at `ui_kits/website/` for component patterns — `Chrome.jsx`, `Sections.jsx`, `Pages.jsx` show how a faithful KGS page is assembled. Open `index.html` to see the full clickable prototype.
5. **Render preview cards** for design-review handoff with the specimens in `preview/` — they show isolated colors, type, buttons, badges, hero comps, etc.

## When the user invokes this skill without further instruction

Ask, in one short turn:
- What surface are we designing? (landing section · product page · email · social tile · ad · something else)
- What's the goal — drive a click, announce something, build trust, sell a category?
- Should it match the existing site exactly, or push the brand in a new direction within the same vocabulary?
- Do they have product photography to use, or should we pull from `assets/`?

Then act as an expert designer who outputs HTML artifacts (preferred) or production-grade React/Tailwind code (if the user explicitly wants a code handoff).

## Brand snapshot

- **What:** KGS Home Décors — premium furniture & home décor for South Indian homes; physical showroom on Junction Road, Virudhachalam + online storefront.
- **Aesthetic:** warm-neutral palette (bone / cream / antique gold / terracotta), serif display (Crimson Pro) × sans body (Jost), restrained shadows, asymmetric hero photo masks, no gradients on text or buttons.
- **Voice:** confident, locally proud, "we" + "you", no emoji, no hype words, em-dashes are a signature punctuation tic. CTAs are 1–3-word verbs in ALL CAPS with `.14em+` tracking.
- **Don't:** use cool greys, pure black, drop-shadows on cards, hand-drawn SVG icons (use Material Symbols at weight 200), or stack two serif typefaces.

## File map

| File / folder            | What it contains                                         |
| ------------------------ | -------------------------------------------------------- |
| `README.md`              | Full brand brief — context, content, visuals, iconography |
| `SKILL.md`               | This file                                                |
| `colors_and_type.css`    | All design tokens (colors, type scale, spacing, easings)  |
| `assets/`                | Logos, banner photos, category thumbs, product cut-outs, lifestyle |
| `assets/products.json`   | Live product catalogue                                   |
| `preview/`               | Design-System tab specimens                              |
| `ui_kits/website/`       | Faithful React recreation of the live KGS site           |
