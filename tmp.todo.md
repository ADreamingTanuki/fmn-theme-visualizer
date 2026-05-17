# Theme Palette Expansion — Haiku Task List

Work through these steps in order. Each step is self-contained. Check off each item as you complete it.

---

## Step 1 — `decor.css`: rename `warm` → `herbalist`

- [ ] Replace `[data-theme="light"][data-palette="warm"]` with `[data-theme="light"][data-palette="herbalist"]`
- [ ] Replace `[data-theme="dark"][data-palette="warm"]` with `[data-theme="dark"][data-palette="herbalist"]`

---

## Step 2 — `decor.css`: delete `cool` palette blocks

- [ ] Delete the entire `/* Light + Cool */` block (lines matching `[data-theme="light"][data-palette="cool"] { ... }`)
- [ ] Delete the entire `/* Dark + Cool */` block (lines matching `[data-theme="dark"][data-palette="cool"] { ... }`)

---

## Step 3 — `decor.css`: update fonts in shared typography block

In the `[data-theme][data-palette]` block, replace the three `--font-*` values:

```css
--font-heading: 'Lora', Georgia, serif;
--font-body:    'Crimson Pro', Georgia, serif;
--font-mono:    'DM Mono', 'Menlo', monospace;
```

- [ ] Replace `--font-heading` value
- [ ] Replace `--font-body` value
- [ ] Replace `--font-mono` value

---

## Step 4 — `index.html`: add Google Fonts links

In `<head>`, before the closing `</head>` tag, add:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
```

- [ ] Add the three `<link>` tags to `index.html`

---

## Step 5 — `decor.css`: add `forest` palette

Add after the herbalist dark block. Use this exact token set for both light and dark variants.

**Light forest** — soft sage greens, warm cream backgrounds, earthy mid-tones:
```css
[data-theme="light"][data-palette="forest"] {
  --color-bg:              #f2ede0;
  --color-bg-surface:      #f8f5ec;
  --color-bg-hover:        #e8e2d2;
  --color-overlay:         rgba(20, 30, 15, 0.45);
  --color-border:          #c8c4a8;
  --color-text:            #2e3020;
  --color-text-secondary:  #6a7050;
  --color-text-muted:      #9aa080;
  --color-accent:          #5a8050;
  --color-accent-dark:     #3a5c35;
  --color-accent-text:     #f8f5ec;
  --color-amber:           #b07830;
  --color-rust:            #a04828;
}
```

**Dark forest** — deep pine darks, moss-toned surfaces:
```css
[data-theme="dark"][data-palette="forest"] {
  --color-bg:              #101810;
  --color-bg-surface:      #1a2418;
  --color-bg-hover:        #243020;
  --color-overlay:         rgba(0, 0, 0, 0.65);
  --color-border:          #2a3828;
  --color-text:            #dce8d4;
  --color-text-secondary:  #8aaa78;
  --color-text-muted:      #506848;
  --color-accent:          #6aaa58;
  --color-accent-dark:     #4a7a40;
  --color-accent-text:     #101810;
  --color-amber:           #c09040;
  --color-rust:            #b04830;
}
```

- [ ] Add light forest block
- [ ] Add dark forest block

---

## Step 6 — `decor.css`: add `dusty-rose` palette

**Light dusty-rose** — muted pinks, warm taupes, soft blush surfaces:
```css
[data-theme="light"][data-palette="dusty-rose"] {
  --color-bg:              #f5efec;
  --color-bg-surface:      #faf7f5;
  --color-bg-hover:        #ede4df;
  --color-overlay:         rgba(40, 20, 20, 0.45);
  --color-border:          #ddd0c8;
  --color-text:            #3a2025;
  --color-text-secondary:  #7a5560;
  --color-text-muted:      #a88890;
  --color-accent:          #9a5870;
  --color-accent-dark:     #6e3850;
  --color-accent-text:     #faf7f5;
  --color-amber:           #b87860;
  --color-rust:            #a04850;
}
```

**Dark dusty-rose** — deep mauve darks, dusty rose mid-tones, cool shadow backgrounds:
```css
[data-theme="dark"][data-palette="dusty-rose"] {
  --color-bg:              #180e12;
  --color-bg-surface:      #261820;
  --color-bg-hover:        #30202a;
  --color-overlay:         rgba(0, 0, 0, 0.65);
  --color-border:          #382030;
  --color-text:            #f0dce4;
  --color-text-secondary:  #b08898;
  --color-text-muted:      #6e4858;
  --color-accent:          #c07890;
  --color-accent-dark:     #9a5870;
  --color-accent-text:     #180e12;
  --color-amber:           #c08060;
  --color-rust:            #b05870;
}
```

- [ ] Add light dusty-rose block
- [ ] Add dark dusty-rose block

---

## Step 7 — `decor.css`: add `midnight` palette

**Light midnight** — cool blue-greys, crisp white-adjacent backgrounds, slate mid-tones:
```css
[data-theme="light"][data-palette="midnight"] {
  --color-bg:              #f0f2f6;
  --color-bg-surface:      #f7f8fb;
  --color-bg-hover:        #e4e8f0;
  --color-overlay:         rgba(10, 15, 30, 0.45);
  --color-border:          #c8d0dc;
  --color-text:            #1a2038;
  --color-text-secondary:  #4a5870;
  --color-text-muted:      #8090a8;
  --color-accent:          #3a5a9a;
  --color-accent-dark:     #24406e;
  --color-accent-text:     #f7f8fb;
  --color-amber:           #8090c0;
  --color-rust:            #607090;
}
```

**Dark midnight** — deep navy darks, cold blue-grey surfaces, near-black backgrounds:
```css
[data-theme="dark"][data-palette="midnight"] {
  --color-bg:              #080c14;
  --color-bg-surface:      #101828;
  --color-bg-hover:        #18243a;
  --color-overlay:         rgba(0, 0, 0, 0.70);
  --color-border:          #182030;
  --color-text:            #d8e4f0;
  --color-text-secondary:  #8090b0;
  --color-text-muted:      #404e60;
  --color-accent:          #5080c8;
  --color-accent-dark:     #3060a8;
  --color-accent-text:     #080c14;
  --color-amber:           #6080c0;
  --color-rust:            #5060a0;
}
```

- [ ] Add light midnight block
- [ ] Add dark midnight block

---

## Step 8 — `decor.css`: add `overcast` palette

**Light overcast** — soft cool greys with slight blue tint, low contrast and calm:
```css
[data-theme="light"][data-palette="overcast"] {
  --color-bg:              #f0f1f4;
  --color-bg-surface:      #f6f7f9;
  --color-bg-hover:        #e8eaee;
  --color-overlay:         rgba(15, 20, 30, 0.40);
  --color-border:          #d0d4dc;
  --color-text:            #282c38;
  --color-text-secondary:  #606878;
  --color-text-muted:      #909aa8;
  --color-accent:          #5568a0;
  --color-accent-dark:     #3a4a80;
  --color-accent-text:     #f6f7f9;
  --color-amber:           #9090a8;
  --color-rust:            #8080a0;
}
```

**Dark overcast** — dark charcoal surfaces, blue-grey mid-tones, muted and foggy:
```css
[data-theme="dark"][data-palette="overcast"] {
  --color-bg:              #111318;
  --color-bg-surface:      #1c1f26;
  --color-bg-hover:        #262932;
  --color-overlay:         rgba(0, 0, 0, 0.65);
  --color-border:          #282c38;
  --color-text:            #d0d4de;
  --color-text-secondary:  #7880a0;
  --color-text-muted:      #484e60;
  --color-accent:          #6070a8;
  --color-accent-dark:     #4858a0;
  --color-accent-text:     #111318;
  --color-amber:           #7078a0;
  --color-rust:            #6068a0;
}
```

- [ ] Add light overcast block
- [ ] Add dark overcast block

---

## Step 9 — `decor.css`: add `candlelit` palette

**Light candlelit** — golden ambers, warm cream backgrounds, honey mid-tones:
```css
[data-theme="light"][data-palette="candlelit"] {
  --color-bg:              #faf2e0;
  --color-bg-surface:      #fff8ec;
  --color-bg-hover:        #f0e4c8;
  --color-overlay:         rgba(40, 20, 5, 0.45);
  --color-border:          #ddc890;
  --color-text:            #2c1a05;
  --color-text-secondary:  #7a5020;
  --color-text-muted:      #b08840;
  --color-accent:          #c07020;
  --color-accent-dark:     #8a4e10;
  --color-accent-text:     #fff8ec;
  --color-amber:           #e09030;
  --color-rust:            #c05020;
}
```

**Dark candlelit** — very dark warm brown backgrounds, deep amber surfaces, candlelight glow:
```css
[data-theme="dark"][data-palette="candlelit"] {
  --color-bg:              #130d04;
  --color-bg-surface:      #201608;
  --color-bg-hover:        #2e200e;
  --color-overlay:         rgba(0, 0, 0, 0.65);
  --color-border:          #3a2810;
  --color-text:            #f0e0b0;
  --color-text-secondary:  #c09040;
  --color-text-muted:      #705830;
  --color-accent:          #e09030;
  --color-accent-dark:     #c07020;
  --color-accent-text:     #130d04;
  --color-amber:           #e8a030;
  --color-rust:            #c84820;
}
```

- [ ] Add light candlelit block
- [ ] Add dark candlelit block

---

## Step 10 — `ThemeControls.tsx`: update types and palette list

- [ ] Change `type Palette` to include all six palette names (remove `'cool'`, add all new ones):
  ```ts
  type Palette = 'herbalist' | 'forest' | 'dusty-rose' | 'midnight' | 'overcast' | 'candlelit'
  ```
- [ ] Update `PALETTES` array to match new type:
  ```ts
  const PALETTES: Palette[] = ['herbalist', 'forest', 'dusty-rose', 'midnight', 'overcast', 'candlelit']
  ```
- [ ] Update button label rendering so palette keys display as proper labels. Replace the `{p}` text expression with a lookup:
  ```ts
  const PALETTE_LABELS: Record<Palette, string> = {
    'herbalist':  'Herbalist',
    'forest':     'Forest',
    'dusty-rose': 'Dusty Rose',
    'midnight':   'Midnight',
    'overcast':   'Overcast',
    'candlelit':  'Candlelit',
  }
  ```
  Then use `{PALETTE_LABELS[p]}` in the button render.

---

## Step 11 — `App.tsx`: update default palette

- [ ] Find the initial `palette` state value (currently `'warm'`) and change it to `'herbalist'`

---

## Done

All steps complete when:
- `decor.css` has no `warm` or `cool` selectors
- `decor.css` has 12 palette blocks total (6 palettes × 2 themes)
- Google Fonts are loaded in `index.html`
- `ThemeControls.tsx` shows 6 palette buttons with proper labels
- The app loads defaulting to herbalist light
