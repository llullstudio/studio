# Brief 05 — Silhouette Accuracy, Real Findings, Status-as-Clarity
*For Claude Design / Sonnet. Drop into a CD session after pasting `00_cd_session_opener.md`.*
*Filed: 2026-06-17. Supersedes brief 04's color framing — read §"Color is type" below before anything.*

---

## Where we are

The three-card exemplar (STUDY · INSTRUMENT · DISPATCH, at rest, gallery bg `#f0ede8`) is **accepted** for glass medium, color, aspect ratios, and rest-state fog. Good. This brief fixes what the exemplar got wrong or skipped. Nothing about the glass physics changes.

---

## Color is type, not specimen (read first)

Locked 2026-06-17. **The glass tint encodes the card's TYPE. Full stop.**

| Type | Glass tint (rest) | Base | Shape |
|---|---|---|---|
| STUDY | `rgba(42, 92, 58, 0.45)` | `#2a5c3a` green | 3:2 |
| INSTRUMENT | `rgba(52, 78, 128, 0.45)` | `#344e80` blue | 1:1 |
| DISPATCH | `rgba(200, 146, 68, 0.45)` | `#c89244` amber | 2:3 |

Every STUDY is green. Every INSTRUMENT is blue. Every DISPATCH is amber. A specimen's own brand color (e.g. Kernl's amber) does **not** go on the glass — Kernl is an INSTRUMENT, so Kernl's glass is blue. Brand color, if used at all, lives inside the content/image. Do not tint glass by specimen. (The old per-specimen color table is retired — see `tokens.md` §5.)

The specimen's identity is carried by three other channels: **title, silhouette image, and badge glyph.** Not color.

---

## What the exemplar got wrong — fix these

### 1. Face line does not match canon

The exemplar scattered the labels (number top-left, family in the badge, a redundant bare type word — "STUDY" / "INSTRUMENT" — floating above the title) and dropped status entirely.

Canon face line is **one identity row**: `TYPE · GROUP · STATUS` — e.g. `STUDY 02 · MECHANISM · PUBLISHED`. Use the zone anatomy already locked in `tokens.md` §7:
- Type label always visible; status label hover-reveal only.
- Number top-left (`top:26px left:26px`), badge top-right (`top:22px right:26px`).
- **Remove the redundant bare type word above the title.** Type is already said by shape + color + the type label in the zone. Saying "INSTRUMENT" three times is the bug.

### 2. The finding is missing entirely

No card showed a finding. The finding is the whole reason EB Garamond is in the stack — the human observation note, italic, crisp on the glass surface, always legible (§1 floor: ≥1.05rem @ 7:1). Add it to every card. Real text, per card:

- **STUDY 02 Cuckoo:** *"Franchise parasitism is a five-stage mechanism. The uniform stops being a reliable cue."*
- **INSTRUMENT Kernl:** *"Strips the surface, surfaces the load-bearing claim."*
- **DISPATCH The Damaged Nest:** *"The box office is the mechanism running downstream."*

### 3. Status is absent — encode it as clarity, not a badge

Per the greenhouse register (VISUAL_OS): **status is a fog-clarity level, not a colored pill.** Maturity = legibility of the silhouette behind the frost.

| Status | Silhouette clarity at rest |
|---|---|
| Published / Live | clearest — `--specimen-blur-rest` toward 8px |
| Complete / Partial | mid — ~14px (default) |
| Analysis / Scoring / Seed / In Dev | foggiest — toward 20px, silhouette barely sensed |

Status word also appears in the face line (hover-reveal, §7). But the *primary* signal is how clearly you can see the specimen. A seed is mostly fog; a published study shows its shape.

### 4. Silhouettes are amorphous blobs — make them accurate

The fog behind the glass was undifferentiated. The silhouette is the specimen (image layer L2), and it must read as the actual thing:

- **STUDY 02 — a cuckoo in profile**, upper-left drift. Representational. This is the deep-accuracy proof of this brief: a real bird silhouette, diffused by frost, not a blob.
- **INSTRUMENT Kernl — schematic kernel/shell**, centered warm glow.
- **DISPATCH The Damaged Nest — a nest form** (representational), lower-center.

Mark policy is Mixed: representational where an emblem exists (cuckoo, nest, firefly), schematic otherwise. Full per-specimen mark table: `tokens.md` §5.3.

### 5. Badge glyph = the card's group

The badge carries a glyph naming the group, and the axis depends on type:
- **STUDY → family.** Study 02 is **Mechanism** → glyph `o→o→o` (the exemplar's arrow glyph was right).
- **INSTRUMENT → imprint.** Kernl → Cognitive Cellar.
- **DISPATCH → source study.** Damaged Nest → Study 02.

Proposed family glyph set (for studies): Mechanism `o→o→o` · OS Cluster `≡` (stacked bars) · Signal `)))` (radiating arcs) · Genealogy `⅄` (branching) · Craft `—` (single rule). These are proposals — render Mechanism for this pass; the rest get drawn when their cards come up.

---

## What to produce

Re-issue the three-card set, at rest, gallery bg `#f0ede8`, each at its locked aspect ratio — corrected on all five points:

1. Canon face line (type · group · status), no redundant type word
2. Real finding on each (EB Garamond italic, on the glass, sharp)
3. Status as silhouette clarity (Cuckoo = Published → clearer; Kernl = Pilot → mid; Damaged Nest = Pending → foggier)
4. Accurate silhouettes — **the cuckoo is the proof**
5. Mechanism glyph in Study 02's badge

Plus one **hover state on Study 02**: tilt ≤6°, frost wipes toward `--specimen-blur-hover` (cuckoo sharpens), status line reveals. Glass tint stays green throughout — hover clears blur, never color.

Deliver: updated `Card.jsx` (or the three card instances), any token additions as CSS custom properties, and a one-line note of what changed so Cowork can propagate to `index.html`.

---

## Constraints (unchanged from brief 04, restated)

- Glass never clears fully on instruments/dispatches at rest; only the silhouette blur changes, never the tint.
- Surface text (finding, labels) is never blurred. Blur lives behind the glass, on the silhouette.
- Legibility floors hold in all states: finding ≥1.05rem @ 7:1, mono ≥0.8rem @ 4.5:1 (`tokens.md` §1).
- Register: clinical greenhouse. Specimens are alive, observed mid-growth. Hover is examination, not reveal-for-delight.
- No `#000000`. No cold blue-grey. Warmth is behind the glass.
