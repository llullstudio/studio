# CD Brief 02 — The Specimen Shift
*Supersedes the frost mechanic described in brief 01. 2026-06-10.*
*Companion: `_design/tokens/tokens.md` (source of truth), `_project/_processed/design/exemplar_frosted_grid.jpg` (reference photo).*

---

## Why session 1 failed

Two faults, both structural:

1. **The frost was applied to the wrong layer.** Blur on body text reads as a smudged book page — "literary haze." There was nothing *behind* the glass, so the veil had nothing to withhold.
2. **Legibility collapsed.** Tiny type, low contrast. This is not a style direction to iterate on; it is a token violation. Hard floors are now in tokens.md and repeated below.

## The physical model

The reference photo is the back of a bookcase: frosted panes in a warm grid, backlit, with bird specimens facing the light on the far side. The viewer stands on the shadow side. That is the site visitor's position. The specimens face the world; the visitor sees their silhouettes through milk glass. The backlight is the day outside.

Rules that fall out of this model:

- Light is **emissive, not reflective** — it comes through the pane, never bounces off it.
- The specimen is a **shape**, never text. Text is never blurred, ever.
- Interaction changes the **state of the glass**, not the card. No scaling, no border highlights, no drop shadows.
- The specimen was already there. Hover doesn't wake it; it wipes the frost.

## The layer stack (every card)

| Layer | What | State |
|---|---|---|
| L0 — Ground | Warm dark `#0c0b09` (night). Never cold, never `#000000`. | Fixed |
| L1 — Pane | Milk-glass cell, sub-lit, tinted by the card's specimen color. Luminance ~8–12% above ground — glow, not lightbox. | Fixed |
| L2 — Specimen | Dark silhouette behind the glass at depth. At rest: heavily diffused (blur ~14px, opacity 0.18–0.5 by depth). On hover: blur → 0, full contrast. | Changes on hover |
| L3 — Sharp copy | The finding, crisp EB Garamond, sitting ON TOP of the glass. Num/title/family in JetBrains Mono. Never blurred, never dimmed below floor contrast, in any state. | Fixed |

Hover additionally reveals one line of faint mono metadata beneath the finding. Transition ~250ms, ease per tokens. Nothing else moves.

## Specimen marks — Mixed policy

Representational silhouette where an obvious emblem exists; abstract schematic (geometry derived from the study's framework) for the rest. Assignments live in tokens.md §Specimen marks. CD does not invent assignments — it executes the listed mark for the card in play.

## Legibility floors (non-negotiable, every state, every lighting condition)

- Finding (serif): ≥ 1.05rem, line-height ≥ 1.45, contrast ≥ 7:1 against its pane
- Card title (serif): ≥ 1.3rem
- Mono metadata/labels: ≥ 0.8rem, contrast ≥ 4.5:1
- These hold at rest AND under frost. The frost veils the specimen, never the copy.

## Ambience — explicitly NOT CD's job

The site will shift lighting with local time of day (dawn / day / dusk / night) via token swaps — handled in tokens.md and site JS, not in CD comps. CD designs the **night state only**. Do not produce theme variants, atmospheric clocks, or weather behavior. (CD's session-1 themes.css is retained as input for the day/dusk token states.)

## Out of bounds

- `#000000` canvas, cyan/green phosphor, cold terminal palette — contradicts the warm physical model
- Glassmorphism: specular highlights, white borders, drop shadows
- Card-convention hover (scale, border glow, shadow lift)
- Live telemetry / "running engines" — silhouettes are static SVG; motion comes later, sparingly
- Body paragraphs on cards. Card copy = num, title, family tag, finding, one mono metadata line. Nothing else.

## The one-card test

First pass: **one card at rest, one at hover. Nothing else on the canvas.**

- Study 02 — The Cuckoo Protocol
- Specimen color: steel blue `#344e80`
- Specimen mark: cuckoo silhouette in profile (representational)
- Finding (glass top): "Franchise parasitism is a five-stage mechanism: mimicry, eviction, parasitic growth, retroactive contamination. The uniform stops being a reliable cue."
- Mono metadata (hover reveal): `02 · MECHANISM · PUBLISHED`

## Paste-ready redirect prompt (Sonnet)

> The frost was applied to the wrong layer. Text is never blurred — rebuild the card as a physical stack: (0) warm dark ground #0c0b09; (1) a backlit milk-glass pane tinted with the card's specimen color, light emitting from within, luminance held to roughly 10% above the ground so it reads as glow, not lightbox; (2) the specimen — a dark silhouette shape behind the glass, heavily diffused at rest; (3) the finding in crisp EB Garamond sitting on top of the glass, ≥1.05rem, ≥7:1 contrast, fully legible always; num + title + family in JetBrains Mono ≥0.8rem. Hover: frost clears to zero, silhouette sharpens to full contrast, one line of faint mono metadata appears under the finding. No borders, no scale transforms, no drop shadows — the only thing that changes is the glass. Static, no animation. Show one card at rest and one at hover: Study 02, The Cuckoo Protocol, steel blue #344e80, specimen = cuckoo silhouette in profile. Finding text: "Franchise parasitism is a five-stage mechanism: mimicry, eviction, parasitic growth, retroactive contamination. The uniform stops being a reliable cue."

## After CD resolves

1. Export/screenshot comp → `_design/comps/`
2. Tell Cowork what changed → tokens.md updated → propagated to `index.html`
3. Only then: scale to the full card population (Gallery inventory) and the four status states (Live / Complete / In Development / Seed — frost depth varies by status, see GALLERY_INVENTORY.md §Design Notes)
