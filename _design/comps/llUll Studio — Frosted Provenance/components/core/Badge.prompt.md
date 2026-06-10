# Badge

Mono uppercase bordered status indicator. Use inside Card body zones.

```jsx
<Badge variant="active">Active</Badge>
<Badge variant="live">Published</Badge>
<Badge variant="dev">In Development</Badge>
<Badge variant="coming">Coming</Badge>
<Badge variant="default">Instrument</Badge>
```

## Variants

| Variant | Color | Meaning |
|---|---|---|
| `active`  | Amber       | Currently running / active build |
| `live`    | Green       | Publicly published / live |
| `dev`     | Amber-dim   | In development |
| `coming`  | Faint gray  | Planned, not started |
| `default` | Neutral     | Category label, type tag |

## Notes
- Always uppercase — pass uppercase strings or rely on CSS text-transform
- Sits inside `.llull-card-body` in most usage patterns
