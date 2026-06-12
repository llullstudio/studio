# Design Tokens — llull.studio
*Source of truth. Update here first; Cowork propagates to CSS. Only Cowork writes this file.*
*Last updated: 2026-06-10 — the Specimen Shift (see `_design/briefs/02_cd_brief_specimen_shift.md`). Supersedes the 2026-06-09 version; frost-on-text mechanic retired.*

---

## 1. Legibility floors — override everything else

Hold in **every lighting state and every card state**, including under frost. The frost veils the specimen, never the copy. Violations are bugs, not style choices. (Several 06-09 type sizes were below these floors — superseded.)

| Element | Min size | Min contrast vs. its pane | Notes |
|---|---|---|---|
| Finding (serif) | 1.05rem | 7:1 | line-height ≥ 1.45 |
| Card title (serif) | 1.3rem | 7:1 | |
| Mono metadata / labels / nav | 0.8rem | 4.5:1 | |
| Body text (non-card pages) | 1rem | 7:1 | never blurred anywhere |

## 2. Typography

| Role | Font | Weight | Size (desktop) | Notes |
|---|---|---|---|---|
| Wordmark "llUll" | Space Grotesk | 600 | 1.1rem | letter-spacing 0.12em |
| Wordmark "studio" | JetBrains Mono | 400 | 1.1rem | color: text-dim |
| H1 / page title | EB Garamond | 400 | 2.6rem | |
| Card title | EB Garamond | 400 | 1.3rem | raised from 1.25 (floor) |
| Card finding (glass top) | EB Garamond Italic | 400 | 1.05rem | raised from 0.92 (floor) — always on top of glass |
| Section label | JetBrains Mono | 500 | 0.8rem | uppercase, letter-spacing 0.2em — raised from 0.7 |
| Card label/num | JetBrains Mono | 500 | 0.8rem | uppercase, amber-dim — raised from 0.65 |
| Card metadata (hover reveal) | JetBrains Mono | 400 | 0.8rem | raised from 0.7 |
| Status badge | JetBrains Mono | 500 | 0.8rem | uppercase, outlined — raised from 0.6 |
| Nav links | JetBrains Mono | 400 | 0.8rem | uppercase, letter-spacing 0.18em — raised from 0.62 |

Text is a label for something visual, never an explanation. Card copy = num · title · family tag · finding · one mono metadata line.

## 3. Palette — Night (default `:root`)

| Token | Value | Role |
|---|---|---|
| `--bg` | `#0c0b09` | Page ground — warm near-black, never `#000` |
| `--surface` | `#131210` | Non-card panels |
| `--surface-2` | `#1a1915` | Nested panel |
| `--border` | `#2a2720` | Default border (cards have none — the grid carries structure) |
| `--border-dim` | `#1e1c19` | Subtle divider |
| `--amber` | `#c89244` | Accent, wordmark, links |
| `--amber-dim` | `#8a6530` | Secondary amber, labels |
| `--amber-faint` | `#3d2e18` | Faint fill |
| `--text` | `#d4cfc6` | Primary |
| `--text-dim` | `#7a7468` | Secondary |
| `--text-faint` | `#3d3a34` | Ghost text (check floor §1 before use on panes) |

Status colors per CD export `colors.css`: active amber / live green `#6aaa7a` / dev ochre / coming faint.

Retired: `--frost-fill`, `--frost-alpha`, `--border-hover` as hover signal, 2px amber accent line — all part of the frost-on-text mechanic.

## 4. The card stack (Specimen Shift)

Layer model: L0 ground → L1 backlit milk-glass pane tinted by specimen color → L2 dark specimen silhouette at depth → L3 sharp copy on top of the glass. Interaction changes the state of the glass only — no scale, no border highlight, no shadow, no accent line.

| Token | Value | Meaning |
|---|---|---|
| `--pane-luminance` | `0.10` | Pane glow ≈ 10% above ground (range 0.08–0.12). Glow, not lightbox. |
| `--pane-tint` | per-card specimen color | Mixed into the pane backlight at low saturation |
| `--specimen-blur-rest` | `14px` | Silhouette diffusion at rest |
| `--specimen-blur-hover` | `0` | Frost wiped |
| `--specimen-opacity-near` | `0.50` | Element close to the glass |
| `--specimen-opacity-deep` | `0.18` | Element deep in the cell |
| `--ease` | `cubic-bezier(0.25, 0.6, 0.3, 1)` | From CD export |
| `--duration-frost` | `250ms` | Frost clear/restore |

Hover additionally reveals one line of mono metadata beneath the finding.

**White rule (amended 2026-06-11):** The "never white" constraint is rescinded for the frost medium. Panes and scatter may sit in the white-value range — the day state especially, where the exemplar photo shows near-white panes backlit by daylight. The surviving constraint is temperature, not value: light passing through any pane must be warm-tinted; nothing reads clinical or blue-grey. Grounds stay warm at both ends (night: `#0c0b09`, day: `#e8e3db`). White is legitimate wherever it is the glass talking.

## 5. Specimen colors + marks

Each card's pane tint and hover identity. Color is the specimen's identity, not the system's decoration. Mark policy: Mixed — representational where an obvious emblem exists, schematic otherwise.

| Specimen | Hex | Mark |
|---|---|---|
| 00 Cognitive Cellar | TBD | TBD |
| 01 Fireflies | `#d4a020` | Representational — firefly scatter, upper drift |
| 02 The Cuckoo Protocol | `#344e80` | Representational — cuckoo in profile, upper-left drift |
| 03 WokeOS | `#6b6b72` | Schematic — OS stack, flat center |
| 06 CultureOS | TBD | Schematic — cluster map |
| 07 CorporateOS | `#2a3a5c` | Schematic — org cascade, corner |
| 08 HumanOS | `#c4852a` | Schematic — 7-layer stack, center-right |
| 09 Wokefied | TBD | TBD |
| 11 EpistemyOS | `#1a5c5a` | Schematic — platform axis, center |
| 12 Cascade | `#b84020` | Schematic — lattice/nucleation, lower-center |
| 13 Engine of Utopia | `#8c1e1a` | Schematic — transmission chain, lower-right cluster |
| 14 Social Terroir | `#2a5c3a` | Schematic — 7-platform grid, diffuse center |
| Kernl | `#c89244` | Schematic — kernel/shell, centered warm glow |
| The Last Backup | `#4a5f7a` | TBD — diffuse upper |
| The Collector | `#3a5c2a` | TBD — diffuse |
| Event Horizon | `#4a2a6b` | TBD — lower drift |

TBD entries deliberately unassigned — earned, not allocated. Tony assigns; Cowork records.

## 6. Ambient lighting — four states

The room's light changes with local time; the specimens don't. Token-layer concern only — CD designs night, site JS crossfades states. No weather API, no camera, no geolocation (parked with post-launch "Follow the Day").

| State | Local hours | Ground | Character | Source |
|---|---|---|---|---|
| `night` | 21:00–05:00 | `#0c0b09` | Default `:root` (§3). Panes barely glow, specimens recede. | confirmed |
| `dawn` | 05:00–08:00 | TBD | Dim, warming — derive between dusk and day endpoints. | to derive |
| `day` | 08:00–17:00 | `#e8e3db` | Parchment, diffused glare. Panes brightest, silhouettes crispest-dark. Text inverts: `#1a1814` on light. | CD themes.css "morning" + 06-09 light palette |
| `dusk` | 17:00–21:00 | `#180d04` | Ultra-warm low-sun orange. Amber → `#f0a030`. | CD themes.css "dusk" |

Day-state detail (merged from 06-09 light palette + CD morning): surface `#f2ede5`, border `#cbc5bc`, amber `#a07828`–`#b07d2e` (settle in comp), text `#1a1814`, text-dim `#6b6560`.

Mechanics: `[data-theme]` on `<html>`, ~30 lines JS reading local hour, crossfade over minutes (never on scroll/click). `--pane-luminance` by state: day ≈ 0.14, dawn/dusk ≈ 0.11, night ≈ 0.08. Floors (§1) re-checked whenever any state value changes. Full per-state tables filled after the one-card test locks night.

## 7. Layout

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

## 8. Motion (deferred)

Permission exists for occasional life behind the glass: slow specimen drift or faint diffuse color bloom, minutes-scale, subtle enough to be doubted. Not constant animation. Not in scope for CD session 2.

## 9. Change log

| Date | Change |
|---|---|
| 2026-06-09 | Original token sheet (frost-on-text mechanic). |
| 2026-06-10 | Specimen Shift: layer stack replaces frost-on-text; legibility floors added (sub-floor type sizes raised); four-state ambient scaffold; specimen colors merged (06-09 sheet + HANDOFF) with mark assignments; CD export values folded in. |
| 2026-06-11 | §4 white rule amended: "never white" rescinded for frost medium; temperature is the surviving constraint, not value. Session opener (00) rewritten session-agnostic, pointing at brief 02. |
