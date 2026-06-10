# Design Tokens — llull.studio
*Source of truth. Update here first; Cowork propagates to CSS.*
*Last updated: 2026-06-09*

---

## Dark palette

| Token | Value | Role |
|---|---|---|
| `--bg` | `#0c0b09` | Page background |
| `--surface` | `#131210` | Card/cell background |
| `--border` | `#2a2720` | Default border |
| `--border-hover` | `#8a6530` | Hover/active border |
| `--amber` | `#c89244` | Primary accent, wordmark |
| `--amber-dim` | `#8a6530` | Secondary amber, labels |
| `--text` | `#d4cfc6` | Primary text |
| `--text-dim` | `#7a7468` | Secondary text |
| `--text-faint` | `#3d3a34` | Ghost text, annotations |
| `--frost-fill` | `#c8bfaf` | Frost overlay color |
| `--frost-alpha` | `78` (of 255) | Frost overlay opacity |

## Light palette

| Token | Value | Role |
|---|---|---|
| `--bg` | `#f2ece0` | Warm parchment ground |
| `--surface` | `#e8e1d4` | Card/cell background |
| `--border` | `#cdc5b5` | Default border |
| `--border-hover` | `#8a6530` | Hover/active border (same as dark) |
| `--amber` | `#b07d2e` | Primary accent (deepened for light) |
| `--amber-dim` | `#8a6530` | Secondary amber |
| `--text` | `#1c1a16` | Primary text |
| `--text-dim` | `#6b6359` | Secondary text |
| `--text-faint` | `#a89f92` | Ghost text |
| `--frost-fill` | `#f2ede5` | Frost overlay color (warm white) |
| `--frost-alpha` | `105` (of 255) | Frost overlay opacity |

---

## Typography

| Role | Font | Weight | Size (desktop) | Notes |
|---|---|---|---|---|
| Wordmark "llUll" | Space Grotesk | 600 | 1.1rem | letter-spacing 0.12em |
| Wordmark "studio" | JetBrains Mono | 400 | 1.1rem | color: text-dim |
| H1 / page title | EB Garamond | 400 | 2.6rem | |
| Card title | EB Garamond | 400 | 1.25rem | |
| Card finding (glass top) | EB Garamond Italic | 400 | 0.92rem | always above frost |
| Section label | JetBrains Mono | 500 | 0.7rem | uppercase, letter-spacing 0.2em |
| Card label/num | JetBrains Mono | 500 | 0.65rem | uppercase, color: amber-dim |
| Card domain/meta | JetBrains Mono | 400 | 0.7rem | color: text-dim |
| Status badge | JetBrains Mono | 500 | 0.6rem | uppercase, outlined |
| Nav links | JetBrains Mono | 400 | 0.62rem | uppercase, letter-spacing 0.18em |

---

## Specimen color signatures
*Each study/instrument has a unique color that bleeds through the frost.*

| Specimen | Color | Hex | Notes |
|---|---|---|---|
| Engine of Utopia | Deep crimson | `#8c1e1a` | Lower-right cluster |
| Kernl | Amber | `#c89244` | Centered warm glow |
| The Cuckoo Protocol | Steel blue | `#344e80` | Upper-left drift |
| Social Terroir | Forest green | `#2a5c3a` | Diffuse center |
| Cascade | Ember orange | `#b84020` | Lower-center |
| HumanOS | Warm ochre | `#c4852a` | Center-right |
| The Last Backup | Cool slate | `#4a5f7a` | Diffuse upper |
| Fireflies | Pale gold | `#d4a020` | Upper drift |
| WokeOS | Institutional grey | `#6b6b72` | Flat center |
| CorporateOS | Navy | `#2a3a5c` | Corner |
| EpistemyOS | Teal | `#1a5c5a` | Center |
| Cuckoo Protocol | Steel blue | `#344e80` | (see above) |
| The Collector | Moss | `#3a5c2a` | Diffuse |
| Event Horizon | Violet | `#4a2a6b` | Lower drift |

---

## Frost mechanic

**Rest state:**
- `card-body` (description + status): `filter: blur(1.2px); opacity: 0.42`
- `card-finding` (glass top): fully sharp, full opacity, always visible
- `card-title`, `card-num`, `card-domain`: fully sharp

**Hover state:**
- `card-body`: `filter: blur(0); opacity: 1` — transition 0.22s ease
- Border: → `--border-hover`
- Top edge: 2px amber accent line (`--amber`)
- Specimen glow: slightly intensifies (optional)

---

## Layout

| Property | Value |
|---|---|
| Max content width | 1720px |
| Page padding (sides) | 4rem (64px) |
| Card width (desktop) | 560px |
| Card height (desktop) | ~820px |
| Card gap | 72px |
| Section padding | 3rem top/bottom |
| Grid — imprints | 3-col |
| Grid — instruments | 2-col |
| Grid — gallery studies | TBD (CD to determine) |
