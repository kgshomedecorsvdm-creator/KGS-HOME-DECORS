# Design System

## Visual Theme
**Soft Structuralism** archetype from Vanguard UI Architect. The website will feature a silver-grey or warm cream base (`#FDFBF7`) with stark, massive typography. Elements will float with airy, soft, highly-diffused ambient shadows and double-bezel concentric curves to emulate physical hardware.

## Color Palette

- **Primary Base**: `#FDF9F3` (Warm cream / Off-white paper feel)
- **Surface Layer**: `#FFFFFF` (Pure white for inner cores of double bezels)
- **Ink (Text)**: `#1A1A1A` (Deepest neutral off-black, tinted slightly warm)
- **Muted**: `#767270`
- **Accent/Gold**: `#C97840` (Used extremely sparingly, only for high-value conversions or trailing arrows)
- **Subtle Borders**: `rgba(26,26,26,0.06)`

## Typography
*Font Family*: Crimson Pro (Serif for massive headings) & Jost (Grotesk Sans for UI labels and buttons).
- Headings: Variable weight Serif, extremely high contrast, massive size.
- Eyebrows: Microscopic pill badges (`text-[10px] uppercase tracking-[0.2em] font-medium`).
- Body: Capped at 65ch line length, comfortable line height.

## Shapes & Architecture (Double-Bezel)
All product cards, feature highlights, and major containers must use the **Double-Bezel (Doppelrand)**:
- **Outer Shell**: `p-1.5` or `p-2`, `bg-black/5`, hairline outer border `ring-1 ring-black/5`, massive outer radius `rounded-[2rem]`.
- **Inner Core**: Inner container `bg-white`, inner highlight `shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]`, smaller inner radius `rounded-[calc(2rem-0.5rem)]`.

## Motion Choreography
- All transitions: `transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]`.
- **Scroll Entry**: Staggered, heavy fade-up (`translate-y-16 blur-md opacity-0` -> `translate-y-0 blur-0 opacity-100`).
- **Button Hover**: Magnetic physics. Button scales down (`active:scale-[0.98]`), inner nested icon circle translates diagonally up/right `translate-x-1 -translate-y-px` and scales up.

## Layout
- Deep Macro-Whitespace (`py-24` to `py-40` between sections).
- The Editorial Split for banners and features.
- The Asymmetrical Bento for categories and featured products.
