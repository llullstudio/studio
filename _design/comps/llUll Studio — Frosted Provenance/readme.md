# llUll Studio — Frosted Provenance Design System

**Studio:** llUll Studio · R. Llull · St. Augustine, FL
**Web:** https://llull.studio
**Substack:** https://rllull.substack.com
**Aesthetic:** Dark academic. Precision instrument feel. No decoration that isn't load-bearing.

---

## Sources

This design system was built from the following sources. Explore them for deeper design context.

| Source | URL | Notes |
|---|---|---|
| Studio website codebase | https://github.com/llullstudio/studio | Single-page HTML site — Lobby built, Gallery + Map planned |
| Live site | https://llull.studio | Vercel auto-deploy from main |

The codebase is a single `index.html` — no build step, no npm. All design decisions are encoded directly as CSS custom properties and inline styles.

---

## What Is llUll Studio

llUll Studio is the identity hub for R. Llull's analytical and creative output. Three imprints operate under the studio umbrella:

| Imprint | Domain | Status |
|---|---|---|
| **Cognitive Cellar** | Analytical instruments, scored studies, Terroir methodology | Active — rllull.substack.com |
| **llUll press** | Print publishing — heritage projects, limited editions, The Lyon Building | Coming |
| **studio oi** | Image, video, photography, design | Coming |

Active instruments:
- **Kernl** — Cognitive antivirus. Scans for structural manipulation regardless of truth value.
- **Engine of Utopia** — Ideological transmission map. 14 nodes, 5 eras, revolutionary collectivist firmware.
- **The Last Backup** — High-fidelity cognitive encoding framework. HAL Stack 0–6.
- **The Collector** — Validation-gated knowledge ingestion system.

The studio site has three views: **Lobby** (identity + imprint cards), **Gallery** (filterable catalog of all output), **Map** (intellectual architecture as visual columns/pillars).

---

## Content Fundamentals

### Voice
The studio writes like a precision instrument speaks — declarative, exact, no hedging. Copy is observation, not opinion.

### Tone
- **Cold** at the sentence level, **warm** at the structural level (the work cares about the reader even when the prose doesn't flatter them)
- No motivational language. No "powerful," "amazing," "transformative."
- Short sentences preferred. Fragments acceptable when sharp.
- Italics for the pivotal clause — the "finding" that reframes everything above it.

### Casing
- Section labels: ALL CAPS in mono (e.g. `IMPRINTS`, `INSTRUMENTS`)
- Status badges: ALL CAPS in mono (e.g. `ACTIVE`, `IN DEVELOPMENT`)
- Card titles: Title Case, serif
- Body text: Sentence case
- Nav links: ALL CAPS in mono

### Person
- **Third person or impersonal** preferred: "The instrument doesn't care…", "The work is the instrument…"
- First person used sparingly, without sentimentality: "Build the instruments, see who finds them."
- No "we" — this is a solo studio. "R. Llull" or "the studio."

### Emoji
**Never.** The design is typographic. Emoji break the instrument register.

### Sample copy patterns
- Wordmark tagline: *"Instruments for clarity."*
- Studio tagline: *"The work is the instrument, not the opinion."*
- Card finding (Cognitive Cellar): *"The instrument doesn't care what you believe. It scores what you do."*
- Footer: *"R. Llull · St. Augustine, FL · Build the instruments, see who finds them."*
- Card finding (Engine of Utopia): *"The mass death is not the failure state."*

---

## Visual Foundations

### Colors
Warm near-black base — nothing pure. All darks have amber undertone. Single golden accent.

| Token | Value | Role |
|---|---|---|
| `--bg` | `#0c0b09` | Page base |
| `--surface` | `#131210` | Card/panel background |
| `--border` | `#2a2720` | Default border |
| `--amber` | `#c89244` | Primary accent — wordmark, links, hover |
| `--amber-dim` | `#8a6530` | Secondary accent — hover borders, card-nums |
| `--text` | `#d4cfc6` | Body text — warm off-white |
| `--text-dim` | `#7a7468` | Secondary text — descriptions, metadata |
| `--text-faint` | `#3d3a34` | Ghost text — section labels, disabled |

### Time-of-Day Themes
`tokens/themes.css` provides three named palettes applied via `data-theme="…"` on `<html>`. All use the same token names — only the values shift.

| Theme | `data-theme` | Bg | Amber | Character |
|---|---|---|---|---|
| **Night** | `night` (default) | `#0c0b09` | `#c89244` golden | Near-black warm canvas — the default |
| **Morning** | `morning` | `#e8e3db` | `#a07828` ochre | Parchment light — diffuse, muted, cool-warm |
| **Dusk** | `dusk` | `#180d04` | `#f0a030` orange | Reddish-warm dark — low sun, saturated amber |

Switch programmatically: `document.documentElement.setAttribute('data-theme', 'morning')`

Interactive explorer: `guidelines/time-of-day.html` — use the Tweaks panel to compare all three. All card hover effects, badge colors, and status indicators are fully theme-aware via CSS custom properties.

### Typography
Three fonts. Strict role separation.

| Font | Role | Source |
|---|---|---|
| **EB Garamond** | Headings, findings, body text — the primary reading voice | Google Fonts |
| **JetBrains Mono** | Labels, status badges, navigation, metadata — the instrument voice | Google Fonts |
| **Space Grotesk** | Wordmark only | Google Fonts |

Note: All fonts are currently loaded via Google Fonts CDN. For offline/production use, download `.woff2` files and add `@font-face` declarations in `tokens/fonts.css`.

### Backgrounds
No background images. No textures. No gradients. The background *is* the color — `#0c0b09`. Cards sit on top of it as `#131210` surfaces. The warmth comes from the hue, not from imagery.

### Cards
The **Frosted Provenance** pattern is the design system's signature:
- Sharp corners (no border-radius — ever)
- `1px solid var(--border)` edge
- On hover: border transitions to `--amber-dim` over `0.2s ease`
- **Finding** (italic serif) is always clear and visible above the fold
- **Body** (description, status, links) is `blur(1.2px)` + `opacity: 0.42` at rest, clearing to `blur(0)` + `opacity: 1` on hover over `0.22s`

### Borders & Radius
**No border radius anywhere.** All edges are sharp. The precision-instrument feel depends on it.

### Hover States
- Links: `color → var(--amber)`
- Card borders: `border-color → var(--amber-dim)`
- Buttons (amber): `background → var(--amber-faint)` wash
- All transitions: `0.15s ease` (fast) or `0.2s ease` (base)

### Press / Active States
No shrink/scale on press. Color shift only.

### Shadows
Used sparingly. Borders do the structural work. `--shadow-card: 0 2px 8px rgba(0,0,0,0.5)` available but rarely applied.

### Animation / Easing
Only the frosted reveal and color transitions. `ease` throughout — no spring, no bounce, no infinite loops. Motion serves revelation, not decoration.

### Layout
- Horizontal page padding: `4rem` (64px) desktop, `1.5rem` mobile
- Sections separated by `1px solid var(--border)` horizontal rules
- Cards in CSS Grid: 3-column for imprints, 2-column for instruments
- No sticky nav, no floating elements

### Imagery
None present in the current site. When studio oi activates, expect cool-toned, high-contrast photography. No stock imagery.

---

## Iconography

No dedicated icon system. The site is **purely typographic**.

- No SVG icon set, no icon font, no icon CDN
- The `→` arrow (unicode) is used as the only directional indicator, in `--amber-dim`
- Roman numerals (I, II, III) serve as card identifiers
- Status is communicated entirely through the Badge component (bordered mono text)
- No emoji, ever

If icons become necessary for future instruments (Kernl UI, etc.), prefer a minimal single-weight stroke set (Lucide or similar) at `--text-dim` color, switching to `--amber` on hover.

---

## File Index

```
llUll Studio — Frosted Provenance/
│
├── styles.css                     ← Root stylesheet (imports only)
│
├── tokens/
│   ├── fonts.css                  ← Google Fonts @import
│   ├── colors.css                 ← Color custom properties
│   ├── typography.css             ← Font families, scale, tracking
│   ├── spacing.css                ← Spacing scale + layout semantics
│   └── effects.css                ← Transitions, frosted provenance vars
│
├── components/core/
│   ├── core.css                   ← Component CSS (loaded via styles.css)
│   ├── Card.jsx / .d.ts           ← Frosted Provenance card (+ CardDesc, CardLink)
│   ├── Button.jsx / .d.ts         ← Mono uppercase action button
│   ├── Badge.jsx / .d.ts          ← Status indicator (active/live/dev/coming)
│   ├── SectionLabel.jsx / .d.ts   ← Mono uppercase section divider
│   ├── Tag.jsx / .d.ts            ← Inline category chip
│   ├── MonoLink.jsx / .d.ts       ← Mono link with amber → arrow
│   ├── Wordmark.jsx / .d.ts       ← llUll Studio identity mark
│   ├── *.prompt.md                ← Per-component usage notes
│   └── components.card.html       ← Design System tab card
│
├── components/cards/
│   ├── CurrentlyBlock.jsx / .d.ts ← "The live wire" featured-output block
│   └── currently.card.html        ← Design System tab card
│
├── guidelines/
│   ├── colors-surfaces.card.html  ← Surface color swatches
│   ├── colors-accent.card.html    ← Amber accent palette
│   ├── colors-text.card.html      ← Text hierarchy
│   ├── colors-status.card.html    ← Status badge colors
│   ├── type-serif.card.html       ← EB Garamond specimens
│   ├── type-mono.card.html        ← JetBrains Mono specimens
│   ├── type-grotesk.card.html     ← Space Grotesk (wordmark)
│   ├── type-scale.card.html       ← Full type scale
│   ├── spacing-tokens.card.html   ← Spacing token bars
│   ├── spacing-layout.card.html   ← Layout semantic values
│   ├── effects-frosted.card.html  ← Frosted Provenance at rest vs hover
│   └── brand-wordmark.card.html   ← Wordmark specimens
│
└── ui_kits/studio_website/
    ├── index.html                 ← Interactive site (Lobby + Gallery + Map)
    ├── Header.jsx                 ← Site header with nav
    ├── Footer.jsx                 ← Site footer
    ├── LobbyView.jsx              ← Home view with imprints + instruments
    ├── GalleryView.jsx            ← Filterable catalog
    └── MapView.jsx                ← Knowledge architecture pillars

SKILL.md                           ← Agent-skill entry point (Claude Code compatible)
```

### Components

| Component | Description |
|---|---|
| `Card` | Frosted Provenance card — the signature component |
| `CardDesc` | Description text within Card's frosted zone |
| `CardLink` | External link at the bottom of a Card |
| `Button` | Mono uppercase action element (default/amber/ghost) |
| `Badge` | Status indicator (active/live/dev/coming/default) |
| `SectionLabel` | Mono uppercase section divider |
| `Tag` | Inline category chip (default/amber) |
| `MonoLink` | Mono metadata link with auto-appended amber arrow |
| `CurrentlyBlock` | "The live wire" — featured-output highlight |
| `Wordmark` | llUll Studio identity mark (size sm/md/lg, suffix studio/press/none) |

Access via: `const { Card, Button, Badge } = window.LlUllStudioFrostedProvenance_e6bb14`
