# CD Brief 03 — Card v1 (Zone Layout)
*New CD project. Start here after reading 00_cd_session_opener.md.*
*Supersedes brief 02. One deliverable: a single card, Study 02, at rest and on hover.*
*Authored 2026-06-12.*

---

## What you're building

One card. Study 02 — The Cuckoo Protocol. Two states: **rest** and **hover**.

The card is a frosted glass tile. It does not have a specimen silhouette behind the glass yet — that is a future pass. This pass locks the **zone layout**, **badge**, **white rule**, and **hover reveal** mechanic.

---

## Card dimensions

- Aspect ratio: **3:2 landscape**
- Reference width: **487px** (3-per-row at 1720px content width)
- Minimum width: **320px** (below this, switch to 2-col or 1-col)

---

## Glass surface

The card face is a backlit frosted pane tinted in the specimen's color (steel blue `#344e80` for Study 02). No specimen silhouette in this pass — just the tinted glass.

| Property | Value |
|---|---|
| Base tint | Mix of `#344e80` and white at ~15% saturation, ~85% lightness — reads as pale steel blue-green frost |
| Surface gradient | Subtle diagonal light-catch: top-left corner slightly brighter |
| Grid overlay | 36px grid lines, `rgba(80,120,110,.10)` — very faint, visible on close inspection |
| Edge glow | Inset warm amber glow at card edges: `rgba(240,200,100,.15)` — references the backlight source |
| No border | No CSS border on the card itself — the grid and glow carry the edge |

---

## Permanent elements (visible at rest)

### Top-left: Study number
```
02
Font: JetBrains Mono 500
Size: 0.8rem
Letter-spacing: 0.28em
Color: rgba(15,40,30,.50)
Position: 26px from top, 26px from left
```

### Top-right: Family badge
A split-panel rectangle, etched into the glass surface.

```
Outer border: 3px solid rgba(255,255,255,.75)
Border-radius: 1px
No drop shadow

Left panel (glyph):
  Background: rgba(255,255,255,.88)
  Padding: 7px 10px
  Border-right: 3px solid rgba(255,255,255,.75)
  Contains: mechanism glyph SVG (see below)

Right panel (label):
  Background: transparent
  Padding: 7px 11px
  Text: MECHANISM
  Font: JetBrains Mono 700, 0.65rem, letter-spacing 0.22em, uppercase
  Color: rgba(255,255,255,.90)

Position: 22px from top, 26px from right
```

**Mechanism glyph** (three nodes with directional arrows, small gap before arrowhead tip):
```
Three hollow circles (r=3.5, stroke 1.4px) at equal intervals
Two connecting lines with chevron arrowheads
Gap of ~2px between arrowhead tip and next circle
Rendered at 44×20px
Stroke color: rgba(20,60,45,.65) on the white panel
```

---

### Bottom: The Zone

Everything in the lower portion of the card lives in a single zone block anchored to the card's bottom edge.

```
Position: absolute, bottom: 24px, left: 0, right: 0
```

**Zone label row** (always visible):
```
Layout: flex, space-between
Padding: 0 26px
Margin-bottom: 5px

Left label — "STUDY"
  Font: JetBrains Mono 700, 0.65rem, letter-spacing 0.28em, uppercase
  Color: rgba(15,40,30,.78)

Right label — "PUBLISHED" (hidden at rest, reveals on hover)
  Same font/weight as STUDY
  Color: rgba(12,30,25,.42)
  Opacity: 0 at rest → 1 on hover, transition 280ms ease
```

**White rule** (always visible):
```
Width: 100% (edge to edge, no inner padding)
Height: 1px
Color: linear-gradient fade — transparent at edges, rgba(255,255,255,.55) across the middle
  e.g. linear-gradient(90deg, transparent 0%, rgba(255,255,255,.55) 4%, rgba(255,255,255,.55) 96%, transparent 100%)
Margin-bottom: 8px

This is a design element, not a divider decoration. It reads as a line etched into the glass surface.
```

**Zone content row** (title always visible; finding reveals on hover):
```
Layout: flex, align-items flex-start
Padding: 0 26px
Gap: 16px between title and finding

Left — Title block (width: 48%)
  Text: "THE CUCKOO / PROTOCOL" (two lines)
  Font: EB Garamond 400, 1.3rem, line-height 1.05
  Letter-spacing: 0.04em
  Case: uppercase (or title case — your call, but consistent)
  Color: rgba(255,255,255,.95)
  Text-shadow: 0 1px 8px rgba(0,0,0,.15) — slight depth off glass

Right — Finding text (flex: 1, hidden at rest)
  Text: "Franchise parasitism is a five-stage mechanism: mimicry, eviction,
         parasitic growth, retroactive contamination.
         The uniform stops being a reliable cue."
  Font: EB Garamond Italic 400, 1.05rem, line-height 1.6
  Color: rgba(12,30,25,.88)
  Opacity: 0 at rest → 1 on hover, transition 280ms ease
```

---

## Hover state

Only two things change on hover:
1. Right zone label (PUBLISHED) fades in
2. Finding text fades in

Nothing else changes. No scale, no border, no glow change, no card lift.

The glass surface may shift slightly lighter/more saturated — subtle, as if the backlight intensified. Optional at your discretion.

Transition: `opacity 280ms cubic-bezier(0.25, 0.6, 0.3, 1)`

---

## Deliverable

Show the card **twice**: once at rest, once at hover. Side by side or stacked — your preference.
Gallery background: `#f0ede8` (day state).

Do not add a specimen silhouette in this pass. That is brief 04.

---

## What I don't want

- The finding text visible at rest
- Any animation other than opacity fades
- Drop shadows on the card
- Rounded corners beyond 1–2px max
- The white rule styled as a decorative divider (it should read as glass, not UI chrome)
- Borders on the card itself (the grid carries the edge)
- PUBLISHED visible at rest

---

## Reference

Token values: `_design/tokens/tokens.md`
Visual OS: `_design/VISUAL_OS.md`
