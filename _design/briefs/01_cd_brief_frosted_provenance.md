# CD Brief 01 — Frosted Provenance
*llull.studio · From Cowork to CD · 2026-06-09*
*Prototype type: High fidelity · Design system: create new or extend AntiBS*

---

## What this is

llull.studio is the web presence of llUll Studio — an umbrella for analytical instruments, print publishing, and creative work. The site is not a portfolio. It is itself an instrument: precise, environment-aware, responsive to context. The design must enact the methodology it represents.

Three views exist: **Lobby** (index.html — built, needs visual refinement), **Gallery** (not yet built), **Map** (not yet built). This brief covers the Lobby and establishes the design system for all three.

---

## Design philosophy — Frosted Provenance

Form emerges from withholding. The surface is a veil — calibrated, not decorative. What lies behind the glass is present and knowable, but requires approach. Distance shows silhouette; proximity reveals instrument.

Grounds are warm: either deep thermal darkness (#0c0b09) or parchment warmth (#f2ece0). Never cold, never clinical. Against these grounds, card surfaces read as frosted panes — translucent, backlit, behind which specimens exist. Color never announces itself; it bleeds through frost as a signature specific to each specimen. A study with crimson DNA bleeds crimson. An epistemic instrument bleeds amber. Each card has its own color identity, visible at rest as a soft glow through the frost.

The register is museum-boutique: a specimen shelf in a vitrine. Each object matters individually. Space is considered. Nothing is bulk-displayed. The touch is painstaking — every alignment load-bearing, every color relationship calibrated across dark and light modes.

Typography operates at the threshold between text and mark. The **finding** — the glass top — sits above the frost at full legibility, always. Everything below it is veiled: readable only on approach.

---

## Color system

### Dark mode
```
--bg:           #0c0b09    page background
--surface:      #131210    card/cell background
--border:       #2a2720    default card border
--border-hover: #8a6530    hover/active border
--amber:        #c89244    primary accent, wordmark
--amber-dim:    #8a6530    secondary amber, labels
--text:         #d4cfc6    primary text
--text-dim:     #7a7468    secondary text
--text-faint:   #3d3a34    ghost text
```

### Light mode (parchment)
```
--bg:           #f2ece0    warm parchment — NOT stark white
--surface:      #e8e1d4    card background
--border:       #cdc5b5    default border
--border-hover: #8a6530    hover (same as dark)
--amber:        #b07d2e    deepened for legibility on light
--amber-dim:    #8a6530    secondary
--text:         #1c1a16    near-black warm
--text-dim:     #6b6359    mid warm grey
--text-faint:   #a89f92    ghost
```

---

## Typography

| Role | Font | Weight | Size | Notes |
|---|---|---|---|---|
| Wordmark "llUll" | Space Grotesk | 600 | 1.1rem | letter-spacing 0.12em; color: amber |
| Wordmark "studio" | JetBrains Mono | 400 | 1.1rem | color: text-dim |
| H1 | EB Garamond | 400 | 2.6rem | |
| Card title | EB Garamond | 400 | 1.25rem | |
| Card finding | EB Garamond Italic | 400 | 0.92rem | glass top — always above frost |
| Section labels | JetBrains Mono | 500 | 0.7rem | uppercase, 0.2em tracking |
| Card num/label | JetBrains Mono | 500 | 0.65rem | uppercase, color: amber-dim |
| Card meta | JetBrains Mono | 400 | 0.7rem | color: text-dim |
| Status badge | JetBrains Mono | 500 | 0.6rem | outlined, uppercase |
| Nav | JetBrains Mono | 400 | 0.62rem | uppercase, 0.18em tracking |

All three fonts are available via Google Fonts:
`EB Garamond:ital,wght@0,400;0,500;1,400`
`JetBrains Mono:wght@400;500`
`Space Grotesk:wght@400;500;600`

---

## Card anatomy

Each card is a specimen behind frosted glass. Two zones:

```
┌─────────────────────────────────┐
│ CARD-NUM (mono, amber-dim)      │  ← always visible
│                                 │
│ CARD-TITLE (serif)              │  ← always visible
│ CARD-DOMAIN (mono, dim)         │  ← always visible
│ ─────────────────────────────── │
│ CARD-FINDING (serif italic)     │  ← GLASS TOP — always visible
│                                 │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │  ← frost begins here
│ ░ CARD-DESC (mono, dim)       ░ │  ← behind frost
│ ░ STATUS BADGE (mono, outline)░ │  ← behind frost
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└─────────────────────────────────┘
```

Behind the glass, a soft radial glow in the specimen's color is visible through the frost — not hidden, just veiled. The glow is organic, not geometric. Different position per specimen.

---

## Frost mechanic

**Rest state:**
- `card-body` (desc + status): `filter: blur(1.2px)` + `opacity: 0.42`
- Specimen glow visible through frost overlay
- Border at default weight/color

**Hover state (cursor enters card):**
- `card-body` clears: `filter: blur(0)` + `opacity: 1`
- Transition: `0.22s ease`
- Border → `--border-hover` (amber-dim)
- 2px amber accent line appears at top edge of card
- Specimen glow subtly intensifies

The mechanic is progressive disclosure — the finding is always legible, the evidence requires approach.

---

## Specimen color signatures

Each card has a unique color bleeding softly through its frost. These are not decorative — they encode the dispositional signature of each study/instrument.

| Specimen | Bleed color | Hex |
|---|---|---|
| Engine of Utopia | Deep crimson | `#8c1e1a` |
| Kernl | Amber | `#c89244` |
| The Cuckoo Protocol | Steel blue | `#344e80` |
| Social Terroir | Forest green | `#2a5c3a` |
| Cascade | Ember orange | `#b84020` |
| HumanOS | Warm ochre | `#c4852a` |
| The Last Backup | Cool slate | `#4a5f7a` |
| Fireflies | Pale gold | `#d4a020` |
| The Collector | Moss | `#3a5c2a` |

---

## Lobby structure (what to prototype)

```
HEADER
  llUll studio [wordmark]          [Gallery] [Map] [Substack] ← nav right
  Instruments for clarity.         ← H1 with "clarity" in italic amber
  The work is the instrument,      ← tagline, text-dim
  not the opinion.

SECTION: Currently                 ← the live wire; one featured piece
  CURRENTLY [amber tag]
  [Title of current piece]         ← large serif link
  [Finding/teaser italic]
  [Study · Imprint · link →]

SECTION: Imprints                  ← 3-col grid
  [I] Cognitive Cellar             ← amber border on hover
  [II] llUll press
  [III] studio oi

SECTION: Instruments               ← 2-col grid, 4 cards
  Engine of Utopia                 ← crimson glow, "In Development"
  Kernl                            ← amber glow, "Active Build", linked
  The Last Backup                  ← slate glow, "In Development"
  The Collector                    ← moss glow, "Coming"

FOOTER
  R. Llull · St. Augustine, FL · Build the instruments, see who finds them.
  [Substack] [cognitivecellar.com]
```

---

## What to build

**Prototype the Lobby in both dark and light mode.** Key things to show:

1. The header with wordmark, tagline, and nav
2. The "Currently" section — the live wire. Current featured piece: *The Cuckoo Protocol* (link: rllull.substack.com/p/the-cuckoo-protocol)
3. Imprint cards (3) with frost mechanic — show one in hover state
4. Instrument cards (4 in 2×2) — show Kernl in hover state (amber reveal is the strongest specimen color)
5. The specimen glow on rest-state cards should be **clearly visible through the frost** — it is the key visual identity of each card

**Explore:** Can the frost be a real frosted glass texture (blur behind a translucent pane) rather than a CSS opacity hack? The goal is warmth, not coldness.

**Do not over-decorate.** Every element must earn its place. If it feels like decoration, remove it. The preciousness comes from precision and restraint, not ornamentation.

---

## Reference / tone

- Museum vitrine, not tech dashboard
- Japanese pottery gallery, Swiss perfume boutique — same aesthetic register
- Warm Volvo interior, not bioweapons lab
- Objects that reward examination
- The site is itself an instrument; it enacts its own methodology

---

*Filed by Cowork · 2026-06-09*
*Comps from CD session → file in `_design/comps/`*
