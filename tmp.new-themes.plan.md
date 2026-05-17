# tmp.new-themes.plan.md

Instructions for Claude Code. Implement all changes in one pass.

---

## 1. Rename `warm` → `herbalist`, remove `cool`

In `decor.css`:
- Replace all `[data-palette="warm"]` with `[data-palette="herbalist"]`
- Delete both `cool` rule blocks

In `ThemeControls.tsx`:
- Rename the warm button to Herbalist
- Remove the Cool button

---

## 2. Herbalist Fonts

Replace the system font stacks in the shared typography block with:

```css
--font-heading: 'Lora', Georgia, serif;
--font-body:    'Crimson Pro', Georgia, serif;
--font-mono:    'DM Mono', 'Menlo', monospace;
```

In `index.html`, add the following Google Fonts link in `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## 3. New Palettes

Add five new palette pairs to `decor.css`. Each pair is two rule blocks — one light, one dark — using the same token set as herbalist:

```
--color-bg
--color-bg-surface
--color-bg-hover
--color-overlay
--color-border
--color-text
--color-text-secondary
--color-text-muted
--color-accent
--color-accent-dark
--color-accent-text
--color-amber
--color-rust
```

CC should generate appropriate hex values for each palette. The goal is a distinct mood, not specific colours. Use the descriptions below as guidance.

### `forest`
- **Light**: soft sage greens, warm cream backgrounds, earthy mid-tones
- **Dark**: deep pine darks, moss-toned surfaces, muted green shadows

### `dusty-rose`
- **Light**: muted pinks, warm taupes, soft blush surfaces
- **Dark**: deep mauve darks, dusty rose mid-tones, cool shadow backgrounds

### `midnight`
- **Light**: cool blue-greys, crisp white-adjacent backgrounds, slate mid-tones
- **Dark**: deep navy darks, cold blue-grey surfaces, near-black backgrounds

### `overcast`
- **Light**: soft cool greys with a slight blue tint, low contrast and calm
- **Dark**: dark charcoal surfaces, blue-grey mid-tones, muted and foggy

### `candlelit`
- **Light**: golden ambers, warm cream backgrounds, honey mid-tones
- **Dark**: very dark warm brown backgrounds, deep amber surfaces, candlelight glow

---

## 4. Update `ThemeControls.tsx`

Add a palette button for each new palette:
- Herbalist
- Forest
- Dusty Rose
- Midnight
- Overcast
- Candlelit
