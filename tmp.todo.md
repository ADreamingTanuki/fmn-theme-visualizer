# Section Build Todo

## 1. Expand `decor.css`
- [x] Add `[data-palette="cool"]` overrides for all colour tokens (currently only theme light/dark, no palette branching)
- [x] Add typography tokens: `--font-heading`, `--font-body`, `--font-mono`
- [x] Add type scale: `--font-size-xs` through `--font-size-2xl`
- [x] Add line-height tokens: `--line-height-tight`, `--line-height-normal`, `--line-height-loose`
- [x] Add spacing scale: `--space-1` through `--space-8`
- [x] Add panel tokens: `--panel-radius`, `--panel-shadow`, `--panel-border-width`
- [x] Fix scoping: tokens must be on `[data-theme][data-palette]` combos, not bare `[data-theme]`

## 2. Create `src/sections/` directory and components

### 2a. `Typography.tsx`
- [x] Render each font stack (`--font-heading`, `--font-body`, `--font-mono`) at every size step
- [x] Include a mixed example: heading + body paragraph + label together

### 2b. `Colours.tsx`
- [x] Render labelled swatches for every token in `decor.css`
- [x] Group by category: background, border, text, accent

### 2c. `Panels.tsx`
- [x] Render panel shapes at three widths: narrow / wide / floating
- [x] Put placeholder typography content inside each panel

### 2d. `Patterns.tsx`
- [x] Sidebar category header with item entries
- [x] Journal entry card
- [x] Text input
- [x] Primary button + ghost button
- [x] "Open Search" button → triggers Search modal
- [x] "Open Settings" button → triggers Settings modal

## 3. Create modals inside `Patterns.tsx` (or co-located files)

### Search / Command Palette modal
- [x] Search input at top
- [x] Placeholder result rows (mix of content results + commands)
- [x] Dismiss on close button or backdrop click

### Settings modal
- [x] Left nav with placeholder section labels
- [x] Right panel with placeholder settings content (label, input, toggle)
- [x] Dismiss on close button or backdrop click

## 4. Wire sections into `App.tsx`
- [ ] Import and render Typography, Colours, Panels, Patterns in `<main class="sample-area">`
- [ ] Remove the `<p class="empty-state">` placeholder

## 5. Smoke-test each theme/palette combo
- [ ] light + warm, light + cool, dark + warm, dark + cool
- [ ] Check every token resolves (no fallback grey)
- [ ] Check modals open and dismiss correctly
