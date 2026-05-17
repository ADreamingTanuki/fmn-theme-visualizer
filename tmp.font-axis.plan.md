# tmp.font-axis.plan.md

Instructions for Claude Code. Implement all changes in one pass.

---

## 1. Remove unused palettes

In `decor.css`, delete all rule blocks for:
- `forest`
- `midnight`
- `overcast`
- `candlelit`

Keep only `herbalist` and `dusty-rose`.

In `ThemeControls.tsx`, remove the corresponding buttons. Keep only Herbalist and Dusty Rose.

---

## 2. Move fonts out of the colour scope

Currently font tokens are defined inside `:root[data-theme][data-palette]`. Remove them from there and place them in their own `data-font` scoped blocks as described below.

The colour rule blocks should no longer contain any font tokens after this change.

---

## 3. Add `data-font` axis

Add a third switcher row to `ThemeControls.tsx` for font selection. Write `data-font` to `document.documentElement` the same way `data-theme` and `data-palette` are handled. Default value: `classic`.

Add the following font rule blocks to `decor.css`. Each block defines `--font-heading`, `--font-body`, and `--font-mono`.

### `classic`
The established default.
```css
:root[data-font="classic"] {
  --font-heading: 'Lora', Georgia, serif;
  --font-body:    'Crimson Pro', Georgia, serif;
  --font-mono:    'DM Mono', 'Menlo', monospace;
}
```

### `romantic`
Editorial and dramatic. Playfair Display for headings, Cormorant Garamond for body.
```css
:root[data-font="romantic"] {
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body:    'Cormorant Garamond', Georgia, serif;
  --font-mono:    'DM Mono', 'Menlo', monospace;
}
```

### `scholarly`
Quiet and bookish. EB Garamond throughout.
```css
:root[data-font="scholarly"] {
  --font-heading: 'EB Garamond', Georgia, serif;
  --font-body:    'EB Garamond', Georgia, serif;
  --font-mono:    'DM Mono', 'Menlo', monospace;
}
```

### `gentle-humanist`
Approachable and soft. Nunito for headings, Source Serif 4 for body.
```css
:root[data-font="gentle-humanist"] {
  --font-heading: 'Nunito', sans-serif;
  --font-body:    'Source Serif 4', Georgia, serif;
  --font-mono:    'DM Mono', 'Menlo', monospace;
}
```

### `typewriter`
Vintage correspondence feel. Zilla Slab for headings, Courier Prime for body.
```css
:root[data-font="typewriter"] {
  --font-heading: 'Zilla Slab', Georgia, serif;
  --font-body:    'Courier Prime', 'Courier New', monospace;
  --font-mono:    'DM Mono', 'Menlo', monospace;
}
```

---

## 4. Update Google Fonts link in `index.html`

Replace the existing Google Fonts link with one that loads all required fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=Nunito:wght@400;600&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=Zilla+Slab:wght@400;600&family=Courier+Prime:ital,wght@0,400;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## 5. Update `ThemeControls.tsx`

The footer should now have three rows of buttons:

- **Row 1 — Theme**: Light / Dark
- **Row 2 — Palette**: Herbalist / Dusty Rose
- **Row 3 — Font**: Classic / Romantic / Scholarly / Gentle Humanist / Typewriter
