# Claude Code Redesign & Handoff Protocol

**Copy and paste this exact prompt to Claude Code to initiate the comprehensive site redesign:**

***

You are continuing the architectural overhaul of the **KGS Home Decor** e-commerce platform. We have a new reference design that we are strictly adhering to. Your mission is to restructure the UI of all pages to match this new premium, "Timeless Neutral" aesthetic, while ensuring no structural bugs exist across the platform.

### Phase 1: The Design System (Strict Adherence)
Based on the provided reference image, enforce these global styles in `index.css` / Tailwind configuration:
1. **Color Palette:** 
   - Backgrounds: Use warm, soft beige/cream (`#F9F6F0` or similar) instead of stark white.
   - Accents: Dark charcoal/soft black (`#1A1A1A`) for text, buttons, and dark sections.
   - Highlights: Soft warm earthy tones (muted terracotta, warm gray).
2. **Typography:**
   - Headings (Hero, Section Titles): High-contrast, elegant Serif (e.g., *Gloock* or *Playfair Display*).
   - Body/Nav: Clean, minimalist Sans-Serif (e.g., *Manrope* or *Inter*).
3. **Card UI:**
   - **No harsh borders or heavy drop shadows.** Use flat, soft background colors for cards that slightly contrast with the main background (e.g., slightly darker beige).
   - "Add to Cart" buttons inside product cards should be full-width, dark charcoal buttons at the bottom of the card.
4. **Icons:** Use fine, thin-stroke icons (Lucide or Material Symbols Light weight 200).

### Phase 2: Index Page (`index.html`) Reconstruction
Rebuild the `index.html` structure exactly as follows:
1. **Hero Section:** Full bleed or large inset container using the new image `assets/images/banners/hero_bg.png`. Left-aligned Serif text ("Luxury Home Decor Crafted For Modern Spaces"). Two buttons side-by-side (Dark filled, and Outline). Include a vertical 01/02/03 slider indicator on the far left.
2. **Value Props Bar:** A thin strip below the hero with 5 items (Secure Payments, Fast Delivery, Premium Quality, Easy Returns, 24/7 Support).
3. **Shop By Category:** A 6-column grid on desktop. Use the 13 newly generated images located in `assets/images/categories/`. The cards should be flat with soft rounded corners.
4. **Best Sellers:** A 4-column product grid. Image on top (with small heart icon and a tag like 'Trending' or 'New'). Full-width black "ADD TO CART" button at the bottom of the card.
5. **Special Offer Banner:** A dark charcoal banner with text on the left ("Up to 30% Off On Premium Collection") and an image on the right.
6. **Footer:** Clean layout with a newsletter signup bar on top, followed by 5 columns (Logo/Desc, Shop, Help, Company, Customer Support). Include payment icons (Visa, UPI, Mastercard).

### Phase 3: Global Bug Fixes & Wireframe Audit
Before committing the redesign, you must audit the remaining pages:
1. **`product-listing.html`:** Ensure strict mobile viewport clamping (fix any horizontal scrolling bleed). Update the product grid to match the new "Best Sellers" card style from the reference.
2. **`cart-checkout.html`:** Standardize the checkout flow. Ensure the layout doesn't collapse on mobile and that input fields follow the new soft, premium aesthetic.
3. **`account.html`:** Fix the dashboard layout structure. Remove any legacy "cozy" styling and apply the strict, minimalist "Timeless Neutral" design.

**Action Required:**
Acknowledge this prompt, review `index.html`, and begin generating the Tailwind/HTML structure for the new Hero and Category sections based on the reference design system.

***
