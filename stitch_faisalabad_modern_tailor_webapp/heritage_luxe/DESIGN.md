---
name: Heritage Luxe
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#554243'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#877273'
  outline-variant: '#dac0c1'
  surface-tint: '#9a414d'
  primary: '#3e000f'
  on-primary: '#ffffff'
  primary-container: '#5d1221'
  on-primary-container: '#e07884'
  inverse-primary: '#ffb2b9'
  secondary: '#775a20'
  on-secondary: '#ffffff'
  secondary-container: '#fdd48e'
  on-secondary-container: '#785a20'
  tertiary: '#001e20'
  on-tertiary: '#ffffff'
  tertiary-container: '#003537'
  on-tertiary-container: '#69a0a3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdadb'
  primary-fixed-dim: '#ffb2b9'
  on-primary-fixed: '#40000f'
  on-primary-fixed-variant: '#7c2a37'
  secondary-fixed: '#ffdea7'
  secondary-fixed-dim: '#e8c17c'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5c4208'
  tertiary-fixed: '#b5ecf0'
  tertiary-fixed-dim: '#99d0d3'
  on-tertiary-fixed: '#002021'
  on-tertiary-fixed-variant: '#114e51'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-padding-desktop: 80px
  section-padding-mobile: 40px
  gutter: 24px
  margin-container: auto
---

## Brand & Style

The design system embodies "Modern Pakistani Chic"—a fusion of high-fashion editorial aesthetics with the rich, artisanal heritage of Faisalabad's textile industry. It targets modern women who value precision, craftsmanship, and a seamless blend of traditional silhouettes with contemporary service standards.

The visual style is **Minimalist with Tactile Accents**. It relies on generous whitespace (reminiscent of high-end fashion spreads) and "Editorial Modernism." The goal is to evoke a sense of professional mastery and bespoke luxury, moving away from cluttered local advertising toward a curated, boutique experience. The UI should feel like a premium concierge—refined, quiet, and effortlessly elegant.

## Colors

The palette is inspired by the deep pigments of traditional Zardozi and Mehendi, balanced by modern architectural neutrals.

- **Primary (Royal Maroon):** Used for key brand moments, primary buttons, and high-level headings. It signifies heritage and depth.
- **Secondary (Antique Gold):** Used for accents, icons, and borders. It adds a premium "stitched" feel to the interface.
- **Tertiary (Soothed Teal):** A contemporary offset to the warm tones, used for secondary actions or specific category highlights (e.g., bridal vs. casual).
- **Neutral (Parchment):** The primary background color. It is softer than pure white, evoking the feel of high-quality sketchbook paper or unbleached silk.
- **Surface Neutrals:** Use deep charcoals (#2D2D2D) for body text to ensure readability without the harshness of pure black.

## Typography

The typography strategy pairs a high-contrast serif for a "fashion magazine" feel with a highly legible, modern sans-serif for functional data.

- **Headlines:** Playfair Display provides the "Boutique" character. It should be used for section titles and brand statements. 
- **Body & Functional Text:** Manrope is used for all UI elements, descriptions, and inputs. Its geometric yet warm proportions maintain the modern chic aesthetic while ensuring clarity in service details.
- **Urdu Integration:** When displaying Urdu text, ensure the line height is increased by at least 1.4x to accommodate Nastaliq-style descenders without clipping.

## Layout & Spacing

The system uses a **Fixed Grid** on desktop (12 columns, 1200px max-width) and a **Fluid Grid** on mobile (4 columns). 

- **Breathing Room:** Use expansive margins to reflect a "premium" experience. Avoid cramped layouts.
- **Rhythm:** Spacing follows an 8px base unit. Components should prioritize vertical rhythm to guide the eye through the tailoring process—from fabric selection to final fitting.
- **Asymmetry:** Occasionally use asymmetrical placements for images (e.g., a large photo of a dress offset against a text block) to mimic fashion editorial layouts.

## Elevation & Depth

This design system avoids heavy shadows in favor of **Tonal Layers and Fine Lines**.

- **Surfaces:** Use subtle shifts in background color (Parchment vs. a slightly darker 'Stone' tint) to define content areas.
- **Low-Contrast Outlines:** Use 1px borders in Antique Gold (#C29E5D) at 30% opacity for cards and input fields. This mimics the delicate nature of stitching.
- **Glassmorphism:** Apply a light backdrop blur (12px) on navigation bars and floating action buttons to maintain a sense of modern lightness.
- **Soft Depth:** Only use shadows for "Floating" elements like Book Now modals, using a very soft, diffused deep maroon tint (#5D1221 at 8% opacity) rather than grey.

## Shapes

The shape language is "Soft Professional." 

- **Standard Elements:** Use a 4px (Soft) radius for most UI components like inputs and small buttons. This retains a sense of precision and structure.
- **Feature Elements:** Use "Pill-shaped" buttons for primary calls to action (e.g., "Book a Consultation") to provide a friendly, accessible touchpoint.
- **Organic Accents:** Image masks may occasionally use subtle arch shapes or organic curves to reflect the drape of fabric.

## Components

- **Buttons:** Primary buttons are Solid Royal Maroon with white text; Secondary buttons use the Antique Gold outline style.
- **Chips (Service Tags):** Based on the reference image, categories like "Lehenga" or "Bridal Suit" should be displayed in delicate outlined ovals with Manrope Label-MD typography.
- **Input Fields:** Minimalist design—bottom border only or a very light 1px frame. Focus states transition the border to solid Gold.
- **Cards:** Product and service cards use "Tonal Layers." The image occupies the top 70%, with the bottom 30% reserved for Playfair Display titles.
- **Interactive Lists:** Used for measurement tracking or order status. Use Gold dividers (0.5px) to separate items, mirroring the look of a measuring tape.
- **Featured Quote:** A specific component for the boutique’s philosophy (as seen in the reference prose) should be centered, using italicized Playfair Display with a Gold bracket accent.