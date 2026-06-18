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

## 5. Color by type · glyph by family · mark by specimen

**Locked 2026-06-17.** Three independent encoding channels. They do not share a palette.

- **Color = TYPE.** Every card of a type shares one glass tint. Color says *what kind of thing this is*, nothing else. (Supersedes the pre-06-17 per-specimen color table — that model is retired. Specimen identity now rides on glyph + silhouette, never color.)
- **Glyph (badge) = the card's group.** Family for studies, imprint for instruments/specimens, source for dispatches. See §5.2.
- **Mark / silhouette (image layer L2) = the specimen itself.** The cuckoo, the firefly scatter. Blurred at rest, sharp on reveal. This is the only channel that is per-specimen. See §5.3.

Brand colors are a fourth, separate system: e.g. Kernl's amber is the product's own branding and lives inside the card's content/image, **never on the glass.** Kernl is an INSTRUMENT, so its glass is blue.

### 5.1 Type colors (glass tint)

| Type | Glass tint (rest) | Base hex | Shape (aspect) |
|---|---|---|---|
| `STUDY` | `rgba(42, 92, 58, 0.45)` | `#2a5c3a` forest green | 3:2 landscape |
| `INSTRUMENT` | `rgba(52, 78, 128, 0.45)` | `#344e80` steel blue | 1:1 square |
| `DISPATCH` | `rgba(200, 146, 68, 0.45)` | `#c89244` warm amber | 2:3 portrait |
| `PLATE` | near-neutral / minimal *(provisional)* | warm-grey, low alpha | 1:1 (collides — see note) |

Opacity 0.45 is the accepted exemplar value (three-card comp, 2026-06-17). The first three are locked.

**PLATE is the exception type** (studio oi visual works — figures/plates; earned 2026-06-17 by the Tarifa series). It bends the card mechanic three ways and must be exemplar-tested before any values lock:
- **Tint is minimal.** The artwork carries its own color; a glass tint over it muddies. PLATE glass stays near-neutral, low alpha — the art is the color channel here, not the type.
- **The frost inverts.** A finished plate is the most mature specimen → the *clearest* glass (status-as-clarity, §`--specimen-blur`). Frost-reveal mostly collapses: the art shows, only a faint membrane remains. Foggy only while in-prep.
- **Shape collides with INSTRUMENT (1:1).** Either color disambiguates, or PLATE gets a framed portrait card (square art + caption block below, museum-plate layout). Decide at build.

### 5.2 Glyph encoding (badge mark)

The badge glyph names the card's group. The axis differs by type:

| Type | Glyph encodes | Vocabulary |
|---|---|---|
| `STUDY` | family | Mechanism · OS Cluster · Signal · Genealogy · Craft |
| `INSTRUMENT` | imprint | Cognitive Cellar · Wine Snob / llUll press |
| `DISPATCH` | source study, or imprint if standalone | Study 00–14 · Papers · llUll press |
| `PLATE` | imprint | studio oi · llUll press |

Family glyphs (proposed, 2026-06-17 — earned, not allocated; Tony confirms):

| Family | Proposed glyph | Reading |
|---|---|---|
| Mechanism | `o→o→o` | linkage / propagation (exemplar-confirmed) |
| OS Cluster | stacked bars `≡` | operating-system layers |
| Signal | radiating arcs `)))` | transmission / what gets through |
| Genealogy | branching line `⅄` | descent / transmission chain |
| Craft | single rule `—` | standalone, no cluster |

### 5.3 Specimen marks (silhouette, image layer)

Per-specimen identity. Mark policy: Mixed — representational where an obvious emblem exists, schematic otherwise. **Decoupled from color** as of 06-17 (the hexes that previously sat here were doing double duty as glass tint; that role is gone).

| Specimen | Mark |
|---|---|
| 00 Cognitive Cellar | TBD |
| 01 Fireflies | Representational — firefly scatter, upper drift |
| 02 The Cuckoo Protocol | Representational — cuckoo in profile, upper-left drift |
| 03 WokeOS | Schematic — OS stack, flat center |
| 06 CultureOS | Schematic — cluster map |
| 07 CorporateOS | Schematic — org cascade, corner |
| 08 HumanOS | Schematic — 7-layer stack, center-right |
| 09 Wokefied | TBD |
| 10 Brain Drain | TBD |
| 11 EpistemyOS | Schematic — platform axis, center |
| 12 Cascade | Schematic — lattice/nucleation, lower-center |
| 13 Engine of Utopia | Schematic — transmission chain, lower-right cluster |
| 14 Social Terroir | Schematic — 7-platform grid, diffuse center |
| Kernl | Schematic — kernel/shell, centered warm glow |
| The Last Backup | TBD — diffuse upper |
| The Collector | TBD — diffuse |
| Event Horizon | TBD — lower drift |

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
| Card reference width | 487px (3-per-row at max content width) |
| Card aspect ratio | 3:2 landscape (STUDY) · 1:1 (INSTRUMENT) · 2:3 portrait (DISPATCH) |
| Card min width | 320px — below this, grid collapses |
| Card gap | 72px |
| Section padding | 3rem top/bottom |
| Grid — studies | 3-col default; 2-col at ≤1200px; 1-col mobile |
| Grid — instruments | 2-col |
| Grid — imprints | 3-col |

**Card zone anatomy (locked 2026-06-12):**

| Element | Value |
|---|---|
| Zone bottom anchor | 24px from card bottom edge |
| Zone inner padding | 0 26px (labels + content rows) |
| Zone label font | JetBrains Mono 700, 0.65rem, letter-spacing 0.28em, uppercase |
| Zone label — type (STUDY etc.) | `rgba(15,40,30,.78)` — always visible |
| Zone label — status (PUBLISHED etc.) | `rgba(12,30,25,.42)` — hover reveal only |
| Gap: label row → rule | 5px |
| `--zone-rule` | 1px, full card width, `linear-gradient(90deg, transparent 0%, rgba(255,255,255,.55) 4%, rgba(255,255,255,.55) 96%, transparent 100%)` |
| Gap: rule → content row | 8px |
| Content row gap (title ↔ finding) | 16px |
| Title column width | 48% of zone |
| Finding column | flex: 1 (remainder) |
| Badge position | top: 22px, right: 26px |
| Badge border | 3px solid `rgba(255,255,255,.75)` |
| Badge glyph panel | `rgba(255,255,255,.88)` fill, padding 7px 10px |
| Badge label font | JetBrains Mono 700, 0.65rem, letter-spacing 0.22em |
| Study number position | top: 26px, left: 26px |

## 8. Motion (deferred)

Permission exists for occasional life behind the glass: slow specimen drift or faint diffuse color bloom, minutes-scale, subtle enough to be doubted. Not constant animation. Not in scope for CD session 2.

## 9. Change log

| Date | Change |
|---|---|
| 2026-06-09 | Original token sheet (frost-on-text mechanic). |
| 2026-06-10 | Specimen Shift: layer stack replaces frost-on-text; legibility floors added (sub-floor type sizes raised); four-state ambient scaffold; specimen colors merged (06-09 sheet + HANDOFF) with mark assignments; CD export values folded in. |
| 2026-06-11 | §4 white rule amended: "never white" rescinded for frost medium; temperature is the surviving constraint, not value. Session opener (00) rewritten session-agnostic, pointing at brief 02. |
| 2026-06-12 | §7 zone anatomy locked: zone layout, white rule, badge spec, card reference width/min-width, responsive grid breakpoints. Brief 03 written for CD new project. |
| 2026-06-17 | §5 rewritten: **color = type** (not specimen), per-specimen color table retired. Three independent channels split out — type color (5.1), glyph by family/imprint/source (5.2), specimen silhouette (5.3). Kernl brand color noted as separate. Family glyphs proposed. Driven by accepted three-card exemplar. |
| 2026-06-17 | SPECIMEN type retired (it was the metaphor, not a species; a domain-under-observation has no finding → no card). Replaced by **PLATE** (studio oi visual works), earned by the Tarifa series. PLATE is the exception type — minimal tint, inverted frost, 1:1 shape collision flagged. xModal moves to parked studio-oi research, not yet a card. |
