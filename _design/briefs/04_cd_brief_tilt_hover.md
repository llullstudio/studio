# Brief 04 — Specimen Glass: Tilt + Colored Milky Pane
*For Claude Design / Sonnet. Drop into a CD session after pasting `00_cd_session_opener.md`.*
*Filed: 2026-06-12 (revised)*

---

## The object

Each card is a colored glass container. Inside is an intricate mechanism — blurred, complex, partially legible. The glass is milky and tinted: rose, steel blue, mint, amber, lavender — each specimen has its own color. The mechanism inside is always seen through that glass. The glass never fully clears.

On hover: the viewer leans in. The card tilts very slightly toward them. The blur inside the glass diminishes — the mechanism becomes more legible — but the colored milky quality of the glass itself remains. The impression is of looking through frosted colored glass, not of the glass becoming transparent.

This is the critical distinction: **the tint stays. The glass stays. Only the blur changes.**

---

## Effect specification

### 3D tilt

- **Method:** CSS `perspective` on each card's own transform (not a parent). Cards tilt independently — each toward its own viewer.
- **Max rotation:** ±6deg on each axis. Subtle — barely perceptible, but physical.
- **Tracking:** mouse position relative to card center. Smooth `transition: transform 0.08s linear` while tracking.
- **Exit:** `transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)` back to flat. Settles, doesn't snap.
- **No scale, no shadow, no border change beyond existing amber-dim on hover.**
- `will-change: transform` on `.card` for GPU compositing.

```js
card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width  - 0.5;
  const y = (e.clientY - rect.top)  / rect.height - 0.5;
  card.style.transition = 'transform 0.08s linear';
  card.style.transform = `perspective(900px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg)`;
});
card.addEventListener('mouseleave', () => {
  card.style.transition = 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)';
  card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
});
```

### The milky glass layer

Each card has a glass pane: a `::before` pseudo-element or a dedicated `.card-glass` div that sits above the mechanism content but below the surface labels (finding, metadata).

**Structure:**
```
card
├── .card-glass         ← the colored milky pane (always present)
│   └── .card-mechanism ← the blurred content behind the glass
└── .card-surface       ← finding text + labels, always sharp, above the glass
```

**The glass layer CSS:**
```css
.card-glass {
  position: absolute;
  inset: 0;
  background: var(--specimen-color-tint); /* see color spec below */
  /* The milky opacity. This DOES NOT change on hover. */
  opacity: var(--glass-opacity, 0.55);
  /* Optional: very slight blur on the glass layer itself for diffusion */
  backdrop-filter: blur(1px);
}
```

**The mechanism layer:**
```css
.card-mechanism {
  /* The content inside — silhouette, diagram, or abstract form */
  filter: blur(var(--mechanism-blur, 12px));
  opacity: 0.7;
  transition: filter 0.3s ease;
  position: absolute;
  inset: 0;
}

.card:hover .card-mechanism {
  --mechanism-blur: 4px;
  /* Blur diminishes but never hits zero */
  /* The glass is still there. You see more, but through the glass. */
}
```

### Color specification

Each specimen gets a milky tinted glass. The color is the glass — not a border, not an accent. Use the existing specimen color table, but expressed as a semi-opaque tinted overlay:

| Specimen            | Glass tint          | Hex base  | Glass expression                    |
| ------------------- | ------------------- | --------- | ----------------------------------- |
| Engine of Utopia    | Milky crimson       | `#8c1e1a` | `rgba(140, 30, 26, 0.45)`           |
| Kernl               | Milky amber         | `#c89244` | `rgba(200, 146, 68, 0.45)`          |
| The Cuckoo Protocol | Milky steel blue    | `#344e80` | `rgba(52, 78, 128, 0.45)`           |
| Social Terroir      | Milky forest green  | `#2a5c3a` | `rgba(42, 92, 58, 0.45)`            |
| Cascade             | Milky ember orange  | `#b84020` | `rgba(184, 64, 32, 0.45)`           |
| HumanOS             | Milky ochre         | `#c4852a` | `rgba(196, 133, 42, 0.45)`          |
| The Last Backup     | Milky slate         | `#4a5f7a` | `rgba(74, 95, 122, 0.45)`           |
| Fireflies           | Milky pale gold     | `#d4a020` | `rgba(212, 160, 32, 0.45)`          |
| The Collector       | Milky moss          | `#3a5c2a` | `rgba(58, 92, 42, 0.45)`            |
| Event Horizon       | Milky violet        | `#4a2a6b` | `rgba(74, 42, 107, 0.45)`           |

The rgba opacity (0.45) is a starting point. Sonnet should test and adjust so that:
- At rest, the mechanism is visible but obscured — you sense complexity through the tint
- On hover, the mechanism becomes more legible — but the color cast of the glass remains strong
- The glass never reads as transparent. It always reads as colored glass.

A white or near-white base layer beneath the glass div is fine — the pane sits on the warm dark ground (`#0c0b09`) and the glass layer tints everything above it. Day-state panes may approach near-white tint in the warm range; this is permitted per the amended white rule (temperature constraint: always warm, never clinical/blue-grey).

### What lives above the glass (always sharp)

The `.card-surface` zone contains:
- Finding (EB Garamond italic) — always crisp
- Type label (`STUDY` · `INSTRUMENT` · `DISPATCH` · `SPECIMEN`) — JetBrains Mono
- Study ID / specimen name — JetBrains Mono

These float above the glass. They are never blurred, never tinted. They are inscribed on the glass surface, not inside it.

---

## What to produce

Single-card demo — Study 02, Cuckoo Protocol, steel blue glass (`rgba(52, 78, 128, 0.45)`).

Show two states:
1. **Rest** — card flat, glass fully milky, mechanism heavily blurred behind it, finding sharp on surface
2. **Hover** — card at ~5deg tilt (frozen for comp), mechanism more legible through the glass, glass tint still present and visible

Deliver:
- Updated `Card.jsx` with tilt JS and glass layer structure
- `specimen-colors.css` or additions to `tokens/effects.css` with the rgba glass values as CSS custom properties
- Brief note on what changed so Cowork can propagate to `index.html`

---

## Constraints

- **Glass never clears fully.** Hover blur floor is 3–5px minimum. The milky quality is always there.
- **Glass tint opacity does not change on hover.** The glass is fixed. Only the blur on the mechanism changes.
- **Tilt max ±6deg.** If it looks too aggressive, go to 5. Never above 6.
- **No literary haze.** Surface text (finding, labels) is never blurred. The blur lives inside the glass, on the mechanism.
- **Legibility floors hold in all states:** finding ≥1.05rem @ 7:1, mono ≥0.8rem @ 4.5:1.
- **Register:** clinical containment, not decorative frost. These are specimens. The glass protects and obscures them. Hover is examination, not revelation.
