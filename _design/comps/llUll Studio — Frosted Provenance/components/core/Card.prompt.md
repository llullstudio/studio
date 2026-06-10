# Card

Sharp-edged dark surface card with the Frosted Provenance reveal pattern — finding always visible, body details blurred until hover.

```jsx
<Card
  num="I"
  title="Cognitive Cellar"
  domain="Analytical instruments · R. Llull"
  finding="The instrument doesn't care what you believe. It scores what you do."
  href="https://rllull.substack.com"
  external
>
  <CardDesc>
    Scored studies, dispositional profiling, and the Terroir methodology.
    Applied to AI systems, ideological structures, and cultures.
  </CardDesc>
  <Badge variant="active">Active</Badge>
  <CardLink>rllull.substack.com</CardLink>
</Card>
```

When the Card has `href`, omit `href` on the inner CardLink — it renders as a `<span>` (the whole card is the anchor; nested `<a>` is invalid HTML). Give CardLink its own `href` only inside a non-anchor Card.

## Props

| Prop | Type | Notes |
|---|---|---|
| `num` | string | Mono amber-dim label above the title (roman numerals, short IDs) |
| `title` | string | Serif heading |
| `domain` | string | Mono dim subtitle / domain |
| `finding` | string | Italic serif — always visible above the frost |
| `children` | ReactNode | Rendered inside the frosted body zone |
| `href` | string | Makes card an `<a>` element |
| `external` | boolean | Adds `target="_blank"` |

`CardLink` props: `href?` (omit inside an anchor Card → renders `<span>`), `external?`.

## Variants

- **Imprint card** — num (roman), title, domain, finding, body with desc + badge + link
- **Instrument card** — num (short label), title, domain, finding, body with desc + dev badge
- **Minimal** — title + finding only, no frosted body
