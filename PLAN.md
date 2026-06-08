# llull.studio — Build Plan
*Last updated: 2026-06-08*

---

## Status legend
- ✓ Done
- → Active
- ○ Pending
- ✗ Blocked

---

## Phase 1 — Foundation (current)

- ✓ Lobby (index.html) built — wordmark, imprint cards, instrument cards
- ✓ GitHub repo wired (llullstudio/studio, main branch)
- ✓ Vercel auto-deploy live
- ✓ Indexing suppressed (robots.txt + noindex meta)
- ○ "Currently" block — one recent output, manually updated; add before launch

---

## Phase 2 — Style (CD)

Goal: lock the design system before building Gallery and Map. Changes here cascade to all pages.

- ○ CD review of Lobby — typography scale, spacing, card feel
- ○ Decide: serif heading size and weight on cards
- ○ Decide: section label treatment (current: mono faint caps — keep or evolve?)
- ○ Decide: status badge system (active / coming / live — current is fine, confirm)
- ○ Update design tokens in CLAUDE.md if anything changes
- ○ Apply any changes to index.html and commit as "style: design system v2"

---

## Phase 3 — Gallery (gallery.html)

Browsable catalog of all studio output.

- ○ Build filter bar (Imprint · Type · Status) — JS, no framework
- ○ Populate cards: 9 Substack articles + 13+ studies + 2 instruments + Lyon Building
- ○ Wire filter logic
- ○ Nav links between Lobby ↔ Gallery ↔ Map
- ○ Commit and push

---

## Phase 4 — Map (map.html) — static first

The intellectual architecture made visible.

- ○ Static SVG/HTML diagram: 3 pillars as columns
- ○ Place studies within pillars (per CLAUDE.md §Map)
- ○ Draw connection lines (key chains: 13→03→09→02→11→Kernl etc.)
- ○ Commit and push
- ○ Interactive version (click node → Gallery card) deferred to Phase 5

---

## Phase 5 — Launch

- ○ Add "Currently" block to Lobby if not done in Phase 1
- ○ Remove noindex from index.html
- ○ Remove Disallow from robots.txt
- ○ Final pass: all external links tested
- ○ Submit to Google Search Console
- ○ Announce (Substack note / X)

---

## Phase 6 — Post-launch (deferred)

- ○ Map interactive: click node → expand to Gallery card
- ○ Engine of Utopia page (llull.studio/engine) — blocked on Study 13 Phase 5
- ○ cognitivecellar.com gallery layer (separate project)
- ○ kernl.app link update when live

---

## Open decisions

- "Currently" block content: hardcoded or rotate manually?
- studio oi card: stays "Coming" until when exactly?
- llUll press card: stays "Coming" until Lyon at publisher resolves?

---

*Reminder: indexing is suppressed. Remove robots.txt Disallow + noindex meta before launch.*
