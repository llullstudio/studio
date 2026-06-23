# llull.studio — Card Brief (standalone, self-contained)
*Paste this whole block into a new CD session on Sonnet. Read it fully before producing anything. You need no external files — everything is here.*

---

## What this is

llull.studio is the web presence of llUll Studio — analytical instruments, print publishing, creative work. The site is itself an instrument; it enacts the methodology it represents.

**Register: Andromeda Strain / Wildfire greenhouse.** Clinical, not refined. The cards are specimens — organisms under observation in a containment facility, alive at different stages of growth. Not curated artifacts in a vitrine.

**The physical model.** A light, cool, clinical gallery space (`#f0ede8`). Frosted glass panels hang in it. Each panel is lit from *within* by the specimen's own warm light. The warmth is behind the glass, not in the room. The finding (a human observation note) sits crisp on the panel face. The specimen silhouette is behind the frost. **Text is never blurred — the glass changes, the copy does not.**

**Fonts:** EB Garamond (findings only), JetBrains Mono (everything else — labels, metadata, structure; this is the primary voice), Space Grotesk (wordmark only).

**Do not produce:** cold blue-grey clinical (warmth is internal, not absent) · a dark page background (the gallery is light) · hard-edged geometric glows · decoration for its own sake · a tech dashboard · a portfolio-site look · `#000000` anywhere.

---

## The lock you must obey: COLOR = TYPE

Glass tint encodes the card's **type**, nothing else. Every card of a type shares one tint.

| Type | Glass tint (rest) | Base hex | Aspect |
|---|---|---|---|
| STUDY | `rgba(42, 92, 58, 0.45)` | `#2a5c3a` forest green | 3:2 landscape |
| INSTRUMENT | `rgba(52, 78, 128, 0.45)` | `#344e80` steel blue | 1:1 square |
| DISPATCH | `rgba(200, 146, 68, 0.45)` | `#c89244` warm amber | 2:3 portrait |

A specimen's own brand color does **not** go on the glass. Kernl's brand is amber, but Kernl is an INSTRUMENT, so Kernl's glass is **blue**. Do not tint glass by specimen — only by type. The specimen's identity lives in three other channels: **title, silhouette image, and badge glyph.**

---

## Card face anatomy (the layout you must hit)

One identity row, not scattered labels:

```
[NUM top-left]                    [BADGE top-right: glyph + label]

         (specimen silhouette, blurred, behind the glass)

[TYPE · GROUP · STATUS  — one mono line]
[———— thin rule ————]
[TITLE]            [FINDING — EB Garamond italic, crisp]
```

- **Number** top-left (≈ top:26px, left:26px), JetBrains Mono.
- **Badge** top-right (≈ top:22px, right:26px): 3px solid `rgba(255,255,255,.75)` border, glyph panel fill `rgba(255,255,255,.88)`, label JetBrains Mono 700, 0.65rem, letter-spacing .22em.
- **Face line:** `TYPE · GROUP · STATUS`. Type label always visible; **status hover-reveal only**.
- **Title:** EB Garamond. **Finding:** EB Garamond *italic*, sits on the glass surface, always sharp.
- **No redundant bare type word floating above the title.** Type is already said by shape + color + the type label. Saying it again is the bug from the last pass.
- Gallery background behind cards: `#f0ede8`.

**Legibility floors — hold in every state, these are bugs not style choices:**
- Finding (serif): ≥ 1.05rem, ≥ 7:1 contrast vs its pane
- Card title (serif): ≥ 1.3rem, ≥ 7:1
- Mono metadata / labels: ≥ 0.8rem, ≥ 4.5:1

---

## The task: re-issue three cards, corrected

Produce STUDY + INSTRUMENT + DISPATCH, **at rest**, on `#f0ede8`, each at its locked aspect ratio. The previous exemplar got the glass/color/ratios right but failed on five points — fix all five:

**1. Canon face line** (type · group · status), no redundant type word.

**2. Real finding on every card** (EB Garamond italic, crisp on the glass). Use exactly:
- STUDY 02 Cuckoo — *"Franchise parasitism is a five-stage mechanism. The uniform stops being a reliable cue."*
- INSTRUMENT Kernl — *"Strips the surface, surfaces the load-bearing claim."*
- DISPATCH The Damaged Nest — *"The box office is the mechanism running downstream."*

**3. Status as silhouette CLARITY, not a colored pill.** Maturity = how clearly you see the specimen behind the frost:
- Published/Live → clearest (silhouette blur ≈ 8px)
- Complete/Partial → mid (≈ 14px)
- Seed/In-Dev/Analysis → foggiest (≈ 20px, barely sensed)

For this set: Cuckoo = Published (clearer) · Kernl = Pilot (mid) · Damaged Nest = Pending (foggier). Status word also appears in the face line on hover, but the *primary* signal is clarity.

**4. Accurate silhouettes — not amorphous blobs.** The silhouette is the actual specimen:
- STUDY 02 → **a cuckoo in profile**, upper-left drift. Representational. **This is the proof of the pass — a real bird, diffused by frost, not a blob.**
- INSTRUMENT Kernl → schematic kernel/shell, centered warm glow.
- DISPATCH The Damaged Nest → a nest form, lower-center.

**5. Badge glyph = the card's group.** Axis depends on type:
- STUDY → family. Study 02 is **Mechanism** → glyph `o→o→o`.
- INSTRUMENT → imprint. Kernl → Cognitive Cellar.
- DISPATCH → source study. Damaged Nest → Study 02.

**Plus one hover state on Study 02:** card tilts ≤ 6°, frost wipes toward blur 0 (the cuckoo sharpens), status line reveals. **Glass tint stays green throughout — hover clears blur, never color.**

---

## Deliver

- Updated `Card.jsx` (or the three card instances)
- Any new token values as CSS custom properties
- A one-line note of what changed, so it can be propagated to the live `index.html`

## Constraints

- Glass never clears fully at rest; only silhouette blur changes, never the tint.
- Surface text (finding, labels) is never blurred — blur lives behind the glass, on the silhouette.
- Tilt max ±6°. No scale, no shadow, no border highlight, no accent line on hover. Only the glass changes.
- Register is clinical greenhouse: hover is examination, not reveal-for-delight.
