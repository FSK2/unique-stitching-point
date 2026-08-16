---
name: Nocturnal Heritage
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c6c7c2'
  on-secondary: '#2f312e'
  secondary-container: '#484a46'
  on-secondary-container: '#b8b9b4'
  tertiary: '#d0cdcd'
  on-tertiary: '#313030'
  tertiary-container: '#b4b2b2'
  on-tertiary-container: '#454544'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e3e3de'
  secondary-fixed-dim: '#c6c7c2'
  on-secondary-fixed: '#1a1c19'
  on-secondary-fixed-variant: '#454744'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 64px
    fontWeight: '500'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-md:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system embodies a "Modern Noir Luxury" aesthetic, transitioning from traditional light-based heritage into a high-contrast, prestigious dark mode environment. It targets a high-net-worth audience seeking exclusivity, discretion, and timeless quality.

The style is **Minimalist with Tactile accents**. It leverages expansive negative space—rendered here as deep, infinite blacks—to allow gold and ivory elements to "glow" with perceived value. The emotional response is one of calm, authoritative sophistication, reminiscent of a private members' club or a luxury watch atelier at night.

## Colors

The palette is anchored in **Obsidian (#0A0A0A)**, providing a near-black base that eliminates the harshness of pure hex black while maximizing contrast.

- **Primary (Metallic Gold - #D4AF37):** Used sparingly for call-to-actions, active states, and decorative brand elements. It should feel like a foil stamp on dark paper.
- **Secondary (Ivory - #F5F5F0):** The primary color for high-contrast typography and essential icons. It offers a softer, more premium alternative to pure white.
- **Tertiary (Charcoal - #1A1A1A):** Used for surface elevation, container backgrounds, and subtle borders to differentiate layers against the primary neutral.
- **Accents:** Muted bronze and deep slate are used for disabled or secondary interactive states to ensure the hierarchy remains focused on the gold highlights.

## Typography

This design system utilizes a sophisticated typographic pairing to balance heritage with modern utility.

- **Headlines (EB Garamond):** A classical serif that brings an air of editorial prestige. Display sizes should use tighter letter-spacing to appear more customized and "designed."
- **Body & Labels (Hanken Grotesk):** A contemporary sans-serif chosen for its exceptional legibility on dark screens. Its geometric precision contrasts beautifully with the organic curves of the serif headlines.
- **Hierarchy Note:** Labels and small UI text must always use the Ivory secondary color at 80% opacity or higher to maintain AA accessibility standards against the Charcoal backgrounds.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain the "contained" feel of a luxury boutique, while transitioning to a fluid model for mobile devices.

- **Grid:** A 12-column grid is used for desktop (1200px max-width).
- **Rhythm:** An 8px base unit drives all spatial decisions. Large-scale layouts should favor generous padding (64px+) between sections to emphasize exclusivity and reduce visual clutter.
- **Alignment:** Centralized alignments are preferred for hero sections and splash pages to evoke a sense of formal invitation. Functional interfaces should maintain a rigorous left-alignment.

## Elevation & Depth

In this dark-mode system, depth is conveyed through **Tonal Layers** rather than heavy shadows. 

- **Surface 0 (Base):** Obsidian (#0A0A0A) for the main background.
- **Surface 1 (Cards/Modals):** Charcoal (#1A1A1A) with a very subtle 1px stroke of Gold at 10% opacity.
- **Shadows:** Avoid heavy black shadows. Instead, use "Glow Shadows" for active elements—very soft, diffused blurs using the Gold primary color at 5-10% opacity to simulate light reflecting off a metallic surface.
- **Glassmorphism:** Use sparingly for navigation bars. A background blur of 20px with a 40% transparent Charcoal fill creates a sense of physical layering.

## Shapes

The shape language is **Soft** and restrained. Sharp 90-degree corners are avoided to prevent a "brutalist" feel, while overly rounded pill shapes are avoided to keep the brand from feeling too casual or "techy."

- **Standard Elements:** 4px (0.25rem) radius for buttons and input fields.
- **Large Containers:** 8px (0.5rem) radius for cards and modal overlays.
- **Decorative:** Hairline strokes (0.5px to 1px) are used to define boundaries without adding visual weight.

## Components

- **Buttons:** 
    - *Primary:* Solid Gold background with Obsidian text. No border.
    - *Secondary:* Transparent background with an Ivory 1px border and Ivory text.
- **Input Fields:** Obsidian background with a 1px Charcoal border. On focus, the border transitions to Gold.
- **Cards:** Charcoal background (#1A1A1A). Title text in EB Garamond (Ivory), body text in Hanken Grotesk (80% Ivory).
- **Chips/Tags:** Small, capitalized Hanken Grotesk text with high letter-spacing. Backgrounds should be a dark Gold tint (e.g., #D4AF37 at 15% opacity).
- **Dividers:** Use very thin (0.5px) Ivory lines at 10% opacity to subtly separate content without breaking the visual flow.
- **Featured Lists:** Use serif numbers (EB Garamond) for ordered lists to emphasize the editorial quality of the content.