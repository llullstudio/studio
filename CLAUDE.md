# llull.studio — Session Primer
*Select this folder in Cowork for all llull.studio web work.*
*Last updated: 2026-06-07*

---

## What This Is

The web presence for llUll Studio. The studio identity hub — front door that points outward to the imprints, instruments, and bodies of work.

**Live URL:** https://llull.studio
**GitHub:** https://github.com/llullstudio/studio (public, main branch)
**Hosting:** Vercel auto-deploys on push to main
**Workflow:** Edit files here → commit to GitHub → Vercel deploys automatically

---

## Site Architecture — Three Views

**Nav:** Lobby · Gallery · Map

Three entry points to the same site. Each serves a different reader.

---

### View 1 — Lobby *(the door)*

Identity, ethos, three imprint cards pointing outward.
One "Currently" section — one recent output from anywhere in the studio.

**Status:** `index.html` built. Needs "Currently" block added before launch.

Imprint cards:
- Cognitive Cellar → rllull.substack.com (Active)
- llUll press → (Coming)
- studio oi → (Coming)

Instrument cards (below imprints):
- Engine of Utopia — In Development
- Kernl — Active Build → cognitivecellar.com (update when kernl.app exists)

---

### View 2 — Gallery *(the catalog)*

All studio output, browsable and filterable.

**Filters:** Imprint | Type | Status

**Types:**
| Type | What | Notes |
|---|---|---|
| Article | Substack pieces (9 published) | Links out to rllull.substack.com |
| Instrument | Kernl, Engine of Utopia, Terrain Mapper | Kernl lives here under Cognitive Cellar |
| Book | The Lyon Building | llUll press |
| Study | Terroir studies (brief card) | Links to Substack piece if published |
| Creative | studio oi / Cross-Modal work | When ready |

**Each card:**
- Title
- Imprint tag (Cognitive Cellar / llUll press / studio oi)
- Type tag
- One-line description
- Status (Published / Active / Coming)
- Link out if live

Kernl gets its own imprint-level card when kernl.app exists. Until then: Instrument card under Cognitive Cellar.

---

### View 3 — Map *(the differentiator)*

The intellectual architecture made visible. Shows that the work is a system, not a collection. No other author site has this.

**Structure:** Three pillars (from `_meta/ARCHITECTURE.md`) as visual columns. Studies placed within their pillar. Published articles attached to their source study. Instruments shown as outputs of source studies.

**Pillar placement:**
- Pillar I (Terrain Mapping): 00 · 01 · 04 · 05 · 06 · 07 · 08
- Pillar II (Ideological Threat Diagnostic): 13 → 03 → 09 → 02 → 11 → Kernl
- Pillar III (Capture Dynamics): 12 Cascade (bridge across all three pillars)
- Cross-Modal: bridge between studio oi and Terroir methodology
- The Lyon Building: outside the pillars — standalone under llUll press

**Connection lines (key chains):**
- 13 Utopia → 03 WokeOS → 09 Wokefied → 02 Cuckoo → 11 EpistemyOS → Kernl
- 06 CultureOS → 07 CorporateOS → 08 HumanOS (scope ladder)
- 12 Cascade as cross-pillar bridge

**Interaction:** Click any node → expands to the Gallery card for that piece.

**Build sequence (locked decision):** Static diagram first (manually updated). Interactive (click-to-expand, filter by pillar) only after static version is live. Do not block launch on interactive.

---

## Design System

| Token | Value | Use |
|---|---|---|
| Background | `#0c0b09` | Page base |
| Surface | `#131210` | Cards |
| Border | `#2a2720` | Card edges |
| Amber | `#c89244` | Accent, wordmark, hover states |
| Amber dim | `#8a6530` | Secondary accent |
| Text | `#d4cfc6` | Body |
| Text dim | `#7a7468` | Descriptions, metadata |
| Text faint | `#3d3a34` | Section labels |
| Heading font | EB Garamond (Google Fonts) | All headings |
| Label font | JetBrains Mono (Google Fonts) | Monospace labels, status badges |

Dark academic. Precision instrument feel. No decoration that isn't load-bearing.

---

## Folder Structure

```
llull.studio/
  CLAUDE.md               ← this file (Cowork session primer — stays at root)
  .gitignore              ← blocks _project/ from GitHub/Vercel
  index.html              ← Lobby (built)
  gallery.html            ← Gallery (not started)
  map.html                ← Map — static first (not started)
  robots.txt              ← indexing suppressed until launch
  _project/               ← never committed to git, never public
    PLAN.md               ← build plan, phases, open decisions
    FRAMEWORK.md          ← studio architecture, imprint structure
    _ingest/              ← drop new material here (Grok/Perplexity/Gemini outputs, design refs, copy)
      INTAKE_LOG.md       ← log of what came in and where it went
    _processed/           ← absorbed and filed by type
      design/             ← style decisions, design references, CD outputs
      content/            ← catalog copy, article data, card text
      research/           ← AI session transcripts, external research
    _ref/                 ← permanent reference (pillar architecture, etc.)
```

**Pipeline:** Drop new material in `_ingest/` → Claude absorbs → moves to `_processed/<type>/` → logs in INTAKE_LOG.md.

Single-file HTML per view. No build step. Commit web files → Vercel auto-deploys.

---

## Current State

| Asset | Status |
|---|---|
| Lobby (index.html) | ✓ Built — needs "Currently" section |
| Gallery (gallery.html) | Not started |
| Map — static | Not started |
| Map — interactive | Deferred (post-launch) |
| Kernl link | Placeholder (cognitivecellar.com) — update when kernl.app |
| Engine of Utopia /engine path | Pending — Study 13 Phase 5 |

---

## Deployment

1. Copy file content → commit to `llullstudio/studio` GitHub repo (main branch)
2. Vercel auto-deploys within ~30 seconds
3. DNS: llull.studio pointed at Vercel via Namecheap

---

## Related

- Full studio brief: `_meta/STUDIO_BRIEF.md`
- Pillar architecture for Map view: `_meta/ARCHITECTURE.md`
- Engine of Utopia project plan: `Projects/Terroir/Studies/13 Utopia/ENGINE_OF_UTOPIA_PROJECT_PLAN.md`
- Kernl stack notes: `Wirings/KERNL STACK.md`
- cognitivecellar.com plans: `_meta/STUDIO_BRIEF.md` §8
