# llUll Visual OS
*Studio-level spatial grammar and register. Supersedes register language in briefs 00–02 and tokens.md §3 ground values.*
*Authored 2026-06-11. This is the source of truth for the visual language at every scale.*

---

## What this is

Not a design system for a website. A visual OS — a coherent spatial language governing all llUll output: web, print instruments, design artifacts. The site is the reference implementation. Every other surface (Terroir instruments, Papers, posters) is a derivation of this language.

---

## The concept

**llUll is an opacity medium. You enter it; you do not browse it.**

The front page is the first membrane — a full-face frosted glass sliding panel. Beyond it, faintly, the gallery. Beyond the gallery, faintly, the map. Each level is already present before you reach it. Nothing is hidden. It is veiled.

This is the card mechanic at site scale:

| Scale | L0 | L1 | L2 | L3 |
|---|---|---|---|---|
| Card | warm ground | backlit pane | specimen silhouette | sharp copy |
| Site | gallery space | entrance panel | gallery panels | wordmark / nav |

Same physical model. Same grammar. Different zoom level.

---

## The register

**Andromeda Strain. Wildfire facility.**

Clinical, not refined. Information-dense but spare. The work is isolated, labeled, studied — not curated and displayed.

**The specimens are not artifacts in a vitrine. They are organisms under observation in a containment facility.**

What this means in practice:
- JetBrains Mono is the primary voice — classification, labels, metadata, structure. EB Garamond handles findings only (the human observation note above the frost).
- Amber is hazard signal — caution, mechanism exposed, live system. Not warmth. Not elegance.
- Color per card is a classification identifier, not a palette choice. Steel blue means Cuckoo Protocol. Crimson means Engine of Utopia.
- Specimen silhouettes are containment-vessel contents — shapes behind glass, diffuse at rest, sharp when the frost is cleared.
- Information density on panel faces is appropriate. Cards carry: type badge · study number · title · family · finding · one metadata line. Nothing else. Nothing decorative.

**Retired register language** (delete from all briefs on next edit):
- "museum vitrine"
- "Japanese pottery gallery"
- "Swiss perfume boutique"
- "refined"
- "leatherbound"

---

## The physical model

A white clinical gallery space. Frosted glass sliding panels hang in it. Each panel contains a specimen lit from within by the specimen's own light. The gallery ambient is cool and neutral. The warmth is behind the glass.

**The inversion:**
- Gallery exterior = light, cool, clinical
- Panel exterior face = frosted, cool-neutral, catches gallery ambient
- Panel interior = warm specimen light glowing through

Confirmed by MJ reference image (2026-06-11): cool teal-grey frosted panel face, dark text etched on surface, thin panel-seam lines showing depth layers, wordmark lower-right.

The panel seam lines matter — they show that panels stack and slide without requiring 3D rendering. Depth is implied by the gap between panels, not by perspective.

---

## The spatial grammar — three levels

| Level | Physical analog | What's there |
|---|---|---|
| **Entrance** | Sliding glass airlock door | Full-face frosted panel. Wordmark etched dark on surface, lower-right. Nothing else. The rest of the UI faintly visible through the frost. |
| **Gallery** | Wildfire lab / museum panel storage | Specimen panels arranged in white space. Each panel a frosted tile. Gallery panels visible at depth behind the entrance panel before you enter. |
| **Map** | Facility schematic | Architecture diagram. Three-pillar view. Accessible from gallery nav. |

**Passage mechanics:** entrance panel recedes on interaction (scroll trigger or click). Gallery revealed. Gallery panels approached individually — hover clears frost on one panel at a time.

**The entrance panel is not a card.** It has no specimen, no finding, no metadata. It IS the glass. The wordmark belongs to the glass, not the room.

---

## Ground revision

The gallery space is light. The panel interior is dark. These are different things.

| Context | Value | Notes |
|---|---|---|
| Gallery space — day | `#f0ede8` | The room the panels hang in |
| Gallery space — night | `#1a1915` | Room dims; panels assert |
| Panel interior | `#0c0b09` | Unchanged — specimen's own environment |
| Text on panel face | Dark on light (day) / Light on dark (night) | Inverts with gallery ambient |

**This supersedes `--bg: #0c0b09` as the default page ground.** The panel interior tokens in tokens.md §4 are unchanged — those govern what's inside the glass, not the room.

---

## Ambient states (revised)

The room's light changes. The specimens' internal light does not.

| State | Hours | Gallery ground | Panel behavior |
|---|---|---|---|
| **Night** | 21:00–05:00 | `#1a1915` | Interior glow dominant. Specimens readable through frost. Room recedes. |
| **Dawn** | 05:00–08:00 | Warming from night | Edge glow begins as gallery light returns. |
| **Day** | 08:00–17:00 | `#f0ede8` | Ambient floods panel surfaces. Specimens recede behind diffused frost. Gallery dominant. |
| **Dusk** | 17:00–21:00 | `#2a1a0a` | Amber bleeds through frost as room dims. Specimens re-emerge. |

Night is not the default. It is one state. The site reads in whatever state the clock says.

---

## Card taxonomy

Four types. Uppercase JetBrains Mono on panel face. One type per card, always present.

| Type | What | Examples |
|---|---|---|
| `STUDY` | Numbered analytical investigations | Terroir 00–14 |
| `INSTRUMENT` | Functional tools and live products | Kernl, Event Horizon, The Collector |
| `DISPATCH` | Written arguments, essays, field reports | Interregnum, Merit Culture, Papers |
| `SPECIMEN` | Territories and domains under observation | The Last Backup |

Displayed on card face as: `STUDY 02 · MECHANISM · PUBLISHED` (type · family · status).

---

## Panel face anatomy

What lives on the exterior glass face. L3 in the layer model.

```
[TYPE BADGE]          [STATUS]
[NUM · TITLE]
[FAMILY TAG]

[FINDING — EB Garamond Italic, always legible]


                      [hover: METADATA LINE]
```

At rest: type, num, title, family, finding visible.
On hover: frost clears, specimen silhouette sharpens, one metadata line appears.
No borders. No scale. No shadow. Only the glass changes.

---

## What remains from Frosted Provenance

Everything structural. Only the register and ground values change.

| Element | Status |
|---|---|
| Layer model L0–L3 | Unchanged |
| Legibility floors (tokens §1) | Unchanged |
| Typography stack (tokens §2) | Unchanged — balance shifts toward Mono |
| Panel interior tokens (tokens §4) | Unchanged |
| Specimen colors (tokens §5) | Unchanged |
| Four ambient state scaffold | Revised above |
| Transition tokens (ease, duration) | Unchanged |

---

## Reference images

- `_design/comps/mj_reference_frosted_panel_entrance.jpg` — entrance panel with wordmark, panel seam lines, cool teal surface (2026-06-11)
- `_design/comps/mj_reference_specimen_block_3d.jpg` — early 3D specimen block showing physical depth model (2026-06-11)

---

*Next: CD session 2 should read this document alongside brief 02 and tokens.md before producing any new comps.*
