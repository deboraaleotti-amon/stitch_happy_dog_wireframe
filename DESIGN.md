---
name: Velvet Bark
colors:
  surface: '#300108'
  surface-dim: '#300108'
  surface-bright: '#62252c'
  surface-container-lowest: '#270005'
  surface-container-low: '#3b0710'
  surface-container: '#410b14'
  surface-container-high: '#4f161d'
  surface-container-highest: '#5d2028'
  on-surface: '#ffdadb'
  on-surface-variant: '#c2cab0'
  inverse-surface: '#ffdadb'
  inverse-on-surface: '#571c23'
  outline: '#8c947c'
  outline-variant: '#424936'
  surface-tint: '#98da27'
  primary: '#ccff80'
  on-primary: '#213600'
  primary-container: '#a3e635'
  on-primary-container: '#416400'
  inverse-primary: '#446900'
  secondary: '#44e2cd'
  on-secondary: '#003731'
  secondary-container: '#03c6b2'
  on-secondary-container: '#004d44'
  tertiary: '#ffe9f0'
  on-tertiary: '#620040'
  tertiary-container: '#ffc1db'
  on-tertiary-container: '#9e2c6e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b2f746'
  primary-fixed-dim: '#98da27'
  on-primary-fixed: '#121f00'
  on-primary-fixed-variant: '#334f00'
  secondary-fixed: '#62fae3'
  secondary-fixed-dim: '#3cddc7'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005047'
  tertiary-fixed: '#ffd8e7'
  tertiary-fixed-dim: '#ffafd3'
  on-tertiary-fixed: '#3d0026'
  on-tertiary-fixed-variant: '#85145a'
  background: '#300108'
  on-background: '#ffdadb'
  surface-variant: '#5d2028'
typography:
  display-lg:
    fontFamily: Quicksand
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Quicksand
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Quicksand
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Quicksand
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 17px
    fontWeight: '500'
    lineHeight: 24px
  body-md:
    fontFamily: Nunito Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Nunito Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Nunito Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Nunito Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Nunito Sans
    fontSize: 10px
    fontWeight: '800'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.25rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system establishes an upbeat, high-contrast, tactile aesthetic tailored for modern pet care and companion tracking. The brand voice balances playful warmth with clean utility, pairing a lush, deep wine canvas with electric, candy-coated accents. It invites joy, warmth, and intuitive everyday engagement without feeling childish or chaotic.

### Visual Style
- **Warm Contrast & Playful Flatness:** The design rejects muddy neutral dark modes in favor of an opulent bordeaux background offset by punchy lime and crisp turquoise accents.
- **Pill & Organic Softness:** Strict rejection of sharp edges; elements embrace pill geometries, bulbous corners, and friendly visual mass.
- **Minimal Depth:** Depth is established through tonal containment, high foreground-to-background contrast, and subtle crisp rim-borders rather than skeuomorphic or heavy blurred shadows.
- **Joyful Micro-details:** Paws, soft indicator dots, and pill badges serve functional roles while maintaining an affectionate personality.

## Colors

The palette leverages a deep wine backdrop to ground vibrant, electric accents. High-contrast legibility is maintained across all states.

### Primary Palette
- **Base Canvas (`#4A121A`):** Deep rich bordeaux. Provides an intimate, cozy atmosphere that reduces eye strain while allowing bright buttons to pop.
- **Surface Elevation 1 (`#5A1822`):** Slightly elevated container surface for cards and grouped panels.
- **Surface Elevation 2 (`#6D212D`):** Interactive card surface, elevated sheet panels, and active list items.
- **Primary Action (`#A3E635`):** Hyper-saturated vibrant lime green. Reserved for primary conversion buttons, completion badges, active status toggles, and hero highlights. Text on this surface must always be dark charcoal (`#111827`) to maintain contrast ratios above 7:1.
- **Secondary Accent (`#2DD4BF`):** Bright turquoise / fresh cyan. Used for secondary actions, interactive chips, progress bars, and category indicators. Text on this surface is deep ink (`#0F172A`).
- **Tertiary Play (`#F472B6`):** Soft candy pink accent for streak milestones, heart/favorite toggles, and celebratory micro-states.

### Functional Neutrals & Text
- **Text Primary (`#FFF1F2`):** Soft cream-white for headlines and primary body text against bordeaux surfaces.
- **Text Secondary (`#FDA4AF`):** Muted blush-rose for secondary metadata, timestamps, and input labels.
- **Text On-Accent (`#111827`):** Near-black charcoal used on top of Lime (`#A3E635`), Turquoise (`#2DD4BF`), and Cream badges.
- **Subtle Stroke (`#7A2432`):** Low-contrast structural border separating deep bordeaux surfaces.

## Typography

The type system blends the organic roundness of **Quicksand** for headlines with the structured, legible cadence of **Nunito Sans** for UI copy, forms, and dense data points.

- **Quicksand (Headings & Counters):** Soft terminal endings reflect the rounded, friendly personality of the app without deteriorating into novelty. Numerical stats, pet ages, step counters, and greetings use bold and semi-bold cuts.
- **Nunito Sans (Body, Labels, Controls):** Offers clear letterforms and tall x-height for readability on dark, wine-tinted backgrounds.
- **Scale Strategy:** Display headings step down cleanly on mobile breakpoints to avoid awkward line breaks with playful pet names.

## Layout & Spacing

The layout is built for quick, thumb-driven mobile ergonomics with structured fluid cards and wide horizontal breathing room.

- **Mobile Canvas:** Standard mobile safe margin is `1rem` (16px), expanding to `1.25rem` (20px) on large viewport handsets.
- **Grid Structure:** Fluid 4-column layout on mobile devices; adapts to 8 columns on tablet viewports. Columns separate companion widgets (e.g., walk duration, water intake, meal scheduling).
- **Rhythm & Touch Targets:** All interactive targets (buttons, quick-log icons, paw checkmarks) maintain a minimum hit area of 48px × 48px, padded internally via `space-sm` and `space-md`.
- **Card Clustering:** Related status trackers use compact internal paddings (`space-md`), grouped inside elevated surfaces with `space-sm` gaps between stacked elements.

## Elevation & Depth

This system avoids murky drop shadows or complex skeuomorphic bevels, favoring crisp flat containment, tonal tiering, and micro-borders.

### Depth Mechanics
- **Ground Tier (Canvas):** Tone `#4A121A`. The foundational backdrop for the entire viewport.
- **Level 1 (Structured Cards & Groups):** Tone `#5A1822`. Provides clear visual segmentation from the canvas with an optional 1px outer stroke of `#7A2432`.
- **Level 2 (Interactive Floating Surfaces & Sheets):** Tone `#6D212D` with zero shadow. Separation is achieved through distinct color value and crisp contrast boundaries.
- **Accent Elevation (Action Elements):** Elements rendered in vibrant `#A3E635` or `#2DD4BF` float above the deep background naturally due to extreme chromatic contrast. No shadow is required or permitted on primary CTA buttons.
- **Pressed State Depths:** Interactive buttons shift vertically down 2px with an inset color transition or a slightly darker border rim to simulate a responsive rubbery click.

## Shapes

The shape hierarchy is unapologetically bulbous, friendly, and pill-dominant. Sharp corners are strictly prohibited.

- **Buttons & Chips (`rounded-full`):** All CTAs, status badges, counter indicators, and navigation pills leverage complete stadium (pill) rounding.
- **Cards & Content Panels (`rounded-3xl` / `2rem` to `3rem`):** Main metric containers and list modules use extra-large radii, imparting a friendly, pebble-like quality.
- **Input Fields:** Styled as elongated pills (`rounded-full`) for single-line inputs and heavily rounded boxes (`rounded-2xl`) for multi-line notes.
- **Paw Accents & Icons:** Graphic motifs adopt soft circular bounding boxes. Iconography is selected strictly from rounded suites (e.g., Material Symbols Rounded) with stroke caps set to round.

## Components

### Buttons
- **Primary CTA:** Solid vibrant lime (`#A3E635`), text in dark ink (`#111827`), fully pill-shaped (`rounded-full`). Padding: 16px vertical, 24px horizontal. Typography: `label-lg` with 700 weight.
- **Secondary CTA:** Solid turquoise (`#2DD4BF`), text in dark ink (`#0F172A`), fully pill-shaped (`rounded-full`).
- **Tertiary / Ghost Button:** Transparent background, 1.5px border in `#7A2432`, text in soft cream (`#FFF1F2`). On tap, fills with `#5A1822`.
- **Icon Action Buttons:** Circular 48px buttons filled with `#5A1822` containing rounded line icons in `#A3E635` or `#2DD4BF`.

### Chips & Tags
- **Filter / Category Chips:** Pill-shaped capsules. Inactive state: `#5A1822` surface with `#FDA4AF` text. Active state: `#2DD4BF` surface with `#0F172A` text.
- **Status Badges (e.g., "Vaccinated", "Walk Completed"):** Compact pill chips with a 6px circular dot indicator. Lime green dot for completed, turquoise for scheduled, tertiary pink for alerts.

### Cards & Modules
- **Metric Card:** Container in `#5A1822`, rounded with `2rem` corners. Includes an internal badge counter in `#A3E635` or `#2DD4BF`. Headline typography in Quicksand, metadata in Nunito Sans.
- **Paw-Highlight Card:** Featured daily log card carrying an integrated flat paw silhouette subtly tinted in `#6D212D` within the card corner.

### Form Inputs & Search
- **Text Inputs:** Pill-shaped background container `#5A1822`, 1.5px subtle border `#7A2432`. Placeholder text in `#FDA4AF` at 60% opacity. Focused state transitions border to `#2DD4BF` with no focus ring glow.
- **Checkbox & Radio Controls:**
  - **Checkboxes:** 24px rounded squares (8px border-radius) or circular paw checkboxes. In checked state: background fills with `#A3E635` and check icon appears in `#111827`.
  - **Radio Buttons:** Circular capsule outer ring with a solid filled dot in `#2DD4BF` when active.

### Lists & Activity Rows
- **Pet Activity Item:** Separated by `space-sm` margins rather than divider lines. Background uses `#5A1822` with `1.25rem` border-radius.
- **Leading Indicator:** Circular avatar or rounded activity icon badge (walk, food, vet, medicine) styled with vibrant backgrounds and dark icons.

### Navigation Bar
- **Floating Island Bar:** Floating pill navigation dock docked 16px above the screen bottom. Background `#5A1822` bordered by `#7A2432`. Active icons highlighted by an energetic lime pill wrapper.