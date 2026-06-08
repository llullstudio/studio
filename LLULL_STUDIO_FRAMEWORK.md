# llUll Studio — Creative Output Framework

**Filed:** 2026-06-01
**Status:** Active. Governing framework for all released creative output.
**Decided this session:** llUll Studio is the umbrella over everything Tony puts out (work excepted). Organizing axis is brand/imprint. Imprint decisions locked 2026-06-01 (§7). **Creative/ reorg EXECUTED 2026-06-01** — all 25 folders moved into the imprint structure in §5; undo at `_meta/_reorg/undo_creative.sh`. The `Projects/` consolidation (run 2) is not yet built.

---

## 0. Supersession note (read first)

This **replaces the top-level architecture** in `STUDIO_BRIEF.md` §2 and the umbrella assumptions in `PRIMER.md`.

- **Old model:** R. Llull (pen name) at the top → Cognitive Cellar = "the analytical platform" (the whole thing) → `llull.studio` = imprint hub for it.
- **New model:** **llUll Studio** is the top entity. **Cognitive Cellar** drops to *one imprint among several* (the analytical/surgical-frameworks outlet). **R. Llull** becomes an author identity used *within* the studio, not the apex.

Everything below assumes the new model. Cross-references that still need editing are listed in §8. Nothing in the analytical canon (Terroir methodology, study numbers, voice rules, publication contract) changes — only where the top of the tree sits.

---

## 1. The umbrella: llUll Studio

llUll Studio is the studio entity and master imprint. It is the answer to "who put this out." It is not a folder of artifacts; it is the frame the artifacts hang under.

**Stylization:** `llUll` — capital U only, all other letters lowercase. This is canon. Other forms (`llull`, `LLULL`) only where a medium forces it, e.g. lowercase URLs. Confirmed 2026-06-01.

**Inclusion test.** A thing belongs under llUll Studio if Tony **made it and released it, or intends to release it**, and it is **not work-related**. Medium is irrelevant: written, visual, print, software, audio, interactive all qualify.

**Explicitly outside the umbrella:**
- **Work-related output.** Client deliverables, paid contract work. (Tony's instruction: "all my creative output except work related.")
- **Airgapped material.** Crypts (Cognition, Finance, Health SubX/SubY). Never enumerated, never touched. Out of scope by standing rule.
- **Pure inputs.** Stock assets, fonts, other people's work, reference material. These feed outputs but are not outputs. They live in a shared assets area, not under a brand.
- **Private utility.** Desktop config, personal files that were never meant to ship.

---

## 2. The name stack

Three names operate at different layers. They do not compete; each does one job.

| Name | Layer | Used for |
|---|---|---|
| **llUll Studio** | Studio entity / master imprint | The umbrella. Appears as publisher/studio of record. The thing this document defines. |
| **R. Llull** | Author / pen name | Byline on Cognitive Cellar publishing (Substack, essays). The intellectual-instrument identity. |
| **AE Martinez** | Legal / author name | Byline on llUll press books (The Lyon Building). Legal entity name where one is required. |

Rule of thumb: **llUll Studio** is the house, **R. Llull** and **AE Martinez** are the names on specific spines inside it.

---

## 3. The brand/imprint layer (the spine)

This is the primary organizing axis. Each imprint owns a mandate, a set of mediums, its channels, and a status. New output is filed by asking *which imprint owns this*, then by medium, then by project.

### Settled imprints

**Cognitive Cellar** — *analytical instruments and surgical frameworks*
The flagship. Scored studies, methodology, essays, and software. This is the serious-instrument track.
- **Mediums:** essays, scored studies, diagrams/visualizers, software.
- **Channels:** `rllull.substack.com`, `cognitivecellar.com` (gallery), Kernl app.
- **Identity:** R. Llull.
- **Holdings:** Terroir methodology and all studies, Kernl, Engine of Utopia, the 9 shipped Substack pieces, Self Branding (Cognitive Cellar / Ramon Llull art).
- **Status:** Active flagship.

**llUll press** — *print imprint*
Anything that exists as a physical or print-quality object: books, monographs, posters, print collateral.
- **Mediums:** books, print monographs, posters, flyers, print layouts.
- **Channels:** physical print, print-ready PDF.
- **Identity:** AE Martinez (author) under the llUll press / llUll Studio imprint line.
- **Holdings:** The Lyon Building biography (at publisher), Sevilla Posters, Tarifa Creative, Wine Snob print pieces.
- **Status:** Active (Lyon at publisher).

**studio oi** — *visual arts: still image, videography, artworks, design*
The active visual-arts imprint. Origin is Tony's 2006–2009 graphic-design business (LLC, logo system, client work), but the brand is now the live home for **all** still image, video, photography, and artwork. This is the single largest imprint by volume (~6.5 GB).
- **Mediums:** still image, videography, photography, generative/AI art, vector art, design, tessellations/mandalas, sketches.
- **Holdings:** Art & Design, Photography, Flickr archive, Faces, Tessellations & Mandalas, Wallpapers, Vectors, Sketches, plus the legacy StudioIO design archive.
- **Status:** Active. Sits under llUll Studio for now; **may be absorbed directly into llUll** later (open timing, §7).
- **Note:** styling "studio oi" is correct and current. The legacy `StudioIO` folder name is the origin; the brand is `studio oi`.

**Wine Snob** — *wine micro-brand*
Its own micro-brand. There are creative possibilities here beyond the existing flashcards and flight flyers. Part of the studio, but placement is open: standalone under llUll Studio, or nested under another imprint (e.g. studio oi or llUll press). §7.

### Retired / out of scope

**Flux / Phi Eye** — *dead brand.* The "thereforePhi / Phi Eye" mark is retired. Material goes to `_archive`. Not a live imprint.

---

## 4. Taxonomy and path convention

**Axis order:** Imprint → Medium → Project → files.

**Casing rules** (inherited from existing workspace convention, unchanged):
- Content folders: Mixed Case (`Cognitive Cellar`, `llUll press`).
- Working/system folders: lowercase with `_` prefix (`_assets`, `_archive`, `_ingest`).
- Acronyms keep their casing.

**Cross-cutting folders** (not imprints — they slice across all of them, so they sit at the Creative root, not inside a brand):
- `_assets` — shared inputs: fonts, stock, layout templates, reference. (Was "Assets & Layouts.")
- `Best Work` — curation/portfolio layer. Pointers or copies of the strongest pieces regardless of imprint. Stays cross-cutting.
- `_channels` — output staging by destination (Instagram, profile pics, social). A channel is *where it ships*, not *what brand made it*. Optional.
- `_archive` — closed/legacy material (old websites, dormant studio oi work).

---

## 5. Reorg plan — PROPOSAL (not executed)

Proposed home for every current top-level folder in `Creative/`. **Nothing has been moved.** Flagged rows need a decision before they can be placed.

| Current `Creative/` folder | Proposed home | Notes |
|---|---|---|
| `StudioIO` | **studio oi** | Legacy design archive → lives inside the studio oi imprint. |
| `Art & Design` | **studio oi** | Core visual body (5.4 GB). |
| `Photography` | **studio oi** | Photographic body. |
| `Flickr Photos` | **studio oi** (archive slice) | 374 folders. Photo archive. |
| `Faces` | **studio oi** | Portraits / generative. |
| `Tessellations & Mandalas` | **studio oi** | Geometric/generative. |
| `Wallpapers` | **studio oi** | Visual output. |
| `Vectors` | **studio oi** | Vector art. |
| `Sketches` | **studio oi** | Source/visual work. |
| `Self Branding` | **Cognitive Cellar** / llUll Studio identity | Ramon Llull + Cognitive Cellar art. |
| `Sevilla Posters` | **llUll press** | Print posters. |
| `Tarifa Creative` | **llUll press** | Print/creative collateral. |
| `Wine Snob` | **Wine Snob** (micro-brand) | Standalone vs nested placement open (§7). |
| `Mind Alerts` | **loose creative** | Not Cognitive Cellar. Lives in a loose-creative area. |
| `Memes` | **loose creative** / `_channels` | Short-form social. |
| `Instagram 2026` | **_channels** | Destination staging. |
| `Profile Pics` | **_channels** / `_assets` | Output staging. |
| `Special Occasion` | **loose creative** | One-off personal pieces. |
| `Projects` (creative) | **per-project → studio oi** | Orcas Vortex, World Trade Center, Bear in Mind, Exchange. Mostly visual → studio oi; assign individually. |
| `Flux Branding` | **`_archive`** | Dead brand (Flux / Phi Eye). |
| `Websites` | **outside umbrella** | Old web/client work. Not creative output. |
| `GeekTool Desktop` | **outside umbrella** | Desktop config. |
| `Sounds` | **outside umbrella** | Per decision §7.8. Reconsider only if audio becomes a release medium. |
| `Assets & Layouts` | **_assets** (cross-cutting) | Inputs, not outputs. |
| `Best Work` | **Best Work** (cross-cutting curation) | Portfolio layer across imprints. |

**Final structure as landed (2026-06-01):**

```
Creative/                      umbrella tree (renaming to "llUll Studio/" still optional)
├── Cognitive Cellar/          analytical imprint — folder empty; holdings stay in Projects/ (ownership table below)
├── llUll press/               print imprint
│   ├── Sevilla Posters/
│   ├── Tarifa Creative/
│   └── Wine Snob/             wine micro-brand (nested here)
├── studio oi/                 still image, video, photography, artworks, design
│   ├── Still Image/           Photography, Flickr Photos
│   ├── Artworks/              Art & Design, Tessellations & Mandalas, Sketches, Vectors
│   ├── Wallpapers/
│   ├── Faces/
│   ├── Video/                 (empty placeholder)
│   ├── Design/                _legacy StudioIO
│   └── Projects/              multi-medium bundles (Orcas Vortex, World Trade Center, etc.)
├── Best Work/                 cross-cutting curation
├── _assorted/                 unbranded creative (Mind Alerts, Memes, Special Occasion) — formerly "Loose"
├── _assets/                   shared inputs (fonts, stock, layouts)
├── _channels/                 output staging (Instagram, Profile Pics)
└── _archive/                  dead brands (Flux / Phi Eye)

Persona/                       R. Llull identity: Self Branding, Voice (prompts), llull logos
_non-creative/                 OUTSIDE umbrella: Websites, GeekTool Desktop, Sounds
```

Reconciliation note: the §5 table above documents the original Creative reorg. Two items moved again afterward: **Self Branding** → `Persona/` (persona consolidation), and **Wine Snob** → `llUll press/`. The `Loose/` folder was renamed `_assorted/`. The tree here reflects the final landed state.

### Projects/ — imprint ownership recorded, NOT physically moved

The analytical projects live in `Projects/` and **stay there.** Physical relocation was assessed and rejected on 2026-06-01: `Projects/` holds two airgapped Crypts (`Cognition (Crypt)`, `Finance (Crypt)`) plus Health's airgapped SubX/SubY, and the `Projects/<Project>/...` path convention is referenced in 16+ canon files, every project CLAUDE.md, and the dashboards. Moving the tree would break all of that and require touching airgapped material, for no brand-architecture benefit. Imprint ownership is recorded logically instead:

| Project (stays at `Projects/...`) | Imprint |
|---|---|
| Terroir (methodology + studies) | Cognitive Cellar |
| Kernl (instrument) | Cognitive Cellar |
| The Collector (knowledge ingestion) | Cognitive Cellar |
| Papers (Interregnum, Merit Culture) | Cognitive Cellar |
| The Lyon (building biography) | llUll press |
| Health (Orbit; SubX/SubY airgapped) | outside umbrella (personal) |
| Crypts (Cognition, Finance) | airgapped — outside everything |

This is the canonical record of which imprint each project belongs to. The folders do not move.

---

## 6. Where-does-it-go decision rule (for new output)

1. Is it work-related? → out of the umbrella.
2. Is it airgapped/private? → out.
3. Is it an input (font/stock/reference)? → `_assets`.
4. Which imprint's mandate does it serve? → Cognitive Cellar (analysis/frameworks), llUll press (print object), Atelier (visual art), Photography, studio oi (only if reviving legacy).
5. Within the imprint: file by medium, then project.
6. If it doesn't fit any imprint, it's a signal a new imprint may be needed — flag it, don't force it.

---

## 7. Decisions

**Locked 2026-06-01:**

1. **`llUll` casing** — cap-U-only is canon; other forms only by medium necessity (URLs).
2. **Visual body** — owned by **studio oi** (resolved via #6 below). Detail provided: ~6.5 GB, Art & Design is the bulk.
3. **Photography** — **studio oi**.
4. **Wine Snob** — **its own micro-brand.** Placement (standalone vs nested) still open, below.
5. **Flux / Phi Eye** — **dead brand.** To `_archive`.
6. **studio oi** — correct, current brand for still image / videography / artworks. Under llUll Studio for now; **may be absorbed into llUll** later.
7. **Mind Alerts** — **loose creative** (not Cognitive Cellar).
8. **Websites + GeekTool + Sounds** — **outside the umbrella.**
9. **Physical movement** — **yes**, consolidate physically (staged; see execution plan).

**Locked 2026-06-01 (follow-up):**

- **Wine Snob** — nested under **llUll press**. Done (`Creative/llUll press/Wine Snob`).
- **studio oi sub-structure** — done. Divisions: Still Image (Photography, Flickr Photos), Artworks (Art & Design, Tessellations & Mandalas, Sketches, Vectors), Wallpapers (own), Faces (own), Video (empty placeholder), Design (_legacy StudioIO), Projects (intact). Undo: `_meta/_reorg/undo_studio_oi.sh`.
- **Persona consolidation** — R. Llull persona assets gathered under `Persona/`: `Self Branding/` (pen-name art, Pseudonyms; moved out of the Cognitive Cellar imprint), `Voice/` (the three R. Llull prompts, moved from `Prompts/Llull`), and the existing `llull logos/`. The canonical `_meta/LLULL_PRIMING.md`, `LLULL_HUMANIZED.md`, `LLULL_SUBSTACK.md` were left in `_meta/` (referenced by name from HANDOFF, README, dashboard, Cascade studies). Undo: `_meta/_reorg/undo_persona.sh`.

**Resolved 2026-06-01:**

- **Projects/ consolidation** — decided **not** to physically move. Imprint ownership recorded in §5 (airgap + path-reference cost outweighs benefit). Folders stay at `Projects/...`.

**Still open:**

- **studio oi absorption timing** — when, and under what trigger, studio oi folds into llUll directly.

---

## 8. Canon updates this framework triggers

When the model above is confirmed, these existing files need edits so the canon stays consistent:

- `STUDIO_BRIEF.md` §2 — rewrite the three-entity block; R. Llull is no longer the apex.
- `PRIMER.md` — naming architecture: add llUll Studio as the umbrella above the methodology/engine layers.
- `README.md` (_meta) — register this file in the canon table.
- `HANDOFF.md` §4/§5 — note the umbrella reframe so the next session starts from the new top.
- `BRANDING.md` — the open commercial-name question now resolves partly: the *creative umbrella* is named (llUll Studio); the *commercial/licensable* name for the methodology remains open.

---

*Framework document. Update when an imprint is added, retired, or renamed, or when an open decision in §7 lands. The reorg in §5 is a proposal until Tony approves execution.*
