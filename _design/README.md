# _design — Design Pipeline

**Not published.** Gitignored. Lives only in the local folder.

This is the communication layer between three collaborators:

| Who | Role | What they put here |
|---|---|---|
| **Cowork** | Builder / analyst | Briefs for CD, token specs, design rationale |
| **CD** (Claude Design at claude.ai) | Visual designer | Comps, revised tokens, design decisions |
| **Tony** | Creative director | Approvals, redirects, uploads from CD sessions |

---

## Folder structure

```
_design/
├── README.md          — this file
├── briefs/            — briefs FROM Cowork TO CD
│   └── 01_cd_brief_frosted_provenance.md
├── comps/             — comps FROM CD (screenshots, exports, references)
└── tokens/            — source-of-truth design tokens
    └── tokens.md
```

## Workflow

1. **Cowork writes a brief** → `briefs/NN_cd_brief_*.md`
2. **Tony opens CD**, creates a new prototype, pastes the brief
3. **CD produces the design**, Tony iterates visually in CD
4. **Tony files the result** → screenshot or notes into `comps/`
5. **Cowork reads comps**, updates `tokens/tokens.md`, builds into HTML

Briefs are numbered sequentially. A brief is not a spec — it's a design conversation starter with enough context for CD to make real decisions.
