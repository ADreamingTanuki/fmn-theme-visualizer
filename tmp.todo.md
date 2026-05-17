# Font Axis — Todo

## 1. Remove unused palettes
- [ ] In `decor.css`: delete all rule blocks for `forest`, `midnight`, `overcast`, `candlelit`
- [ ] In `ThemeControls.tsx`: remove buttons for those palettes, keep only Herbalist and Dusty Rose

## 2. Move fonts out of colour scope
- [ ] Remove `--font-heading`, `--font-body`, `--font-mono` from all `[data-theme][data-palette]` blocks in `decor.css`

## 3. Add `data-font` axis to `decor.css`
- [ ] Add `:root[data-font="classic"]` block
- [ ] Add `:root[data-font="romantic"]` block
- [ ] Add `:root[data-font="scholarly"]` block
- [ ] Add `:root[data-font="gentle-humanist"]` block
- [ ] Add `:root[data-font="typewriter"]` block

## 4. Update Google Fonts link in `index.html`
- [ ] Replace existing `<link>` with the combined font URL loading all required families

## 5. Update `ThemeControls.tsx`
- [ ] Add `font` state, default `"classic"`
- [ ] Write `data-font` to `document.documentElement` on change
- [ ] Add Row 3 — Font: Classic / Romantic / Scholarly / Gentle Humanist / Typewriter
