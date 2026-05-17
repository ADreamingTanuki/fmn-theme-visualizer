# Forget Me Not — Theme Visualizer Spec

## Purpose

A minimal Vite + React + TypeScript project for designing and validating the Forget Me Not visual theme before any real app code is written. No routing, no state management, no backend. Purely a visual sandbox.

## Project Structure

```
fmn-theme-visualizer/
├── src/
│   ├── main.tsx
│   ├── App.tsx                  # Root — manages theme/palette state, renders all sections
│   ├── controls/
│   │   └── ThemeControls.tsx    # Light/dark toggle, palette switcher — lives in footer
│   ├── sections/
│   │   ├── Typography.tsx       # Type scale display
│   │   ├── Colours.tsx          # Colour swatch display
│   │   ├── Panels.tsx           # Panel shapes, borders, shadows, radius
│   │   └── Patterns.tsx         # Realistic UI patterns including modal triggers
│   └── styles/
│       ├── decor.css            # THE source of truth — all token definitions
│       ├── layout.css           # Harness layout only
│       └── visualizer.css       # Footer chrome styles — never uses decor.css tokens
├── index.html
├── vite.config.ts
└── package.json
```

## Layout

The visualizer has two regions, fixed for the lifetime of the app:

```
┌─────────────────────────────────────┐
│                                     │
│         Sample UI Area              │
│   (scrollable, takes most space)    │
│                                     │
│  Typography / Colours / Panels /    │
│  Patterns — all rendered here       │
│                                     │
├─────────────────────────────────────┤
│  Footer — fixed, never themed       │
│  [Light/Dark]  [Warm] [Cool] [...]  │
└─────────────────────────────────────┘
```

The footer is fixed to the bottom of the viewport. It never changes appearance regardless of the active theme or palette — it uses hardcoded neutral styles defined in `visualizer.css` only, with zero dependency on `decor.css` tokens. It is purely a control surface.

## Token Structure (`decor.css`)

All visual tokens are CSS custom properties scoped to `[data-theme][data-palette]` attribute combinations on the root element. No token is defined outside of a scope — there are no bare `:root` token definitions.

```css
/* Example structure — actual values TBD during design */
:root[data-theme="light"][data-palette="warm"] {
  /* Colour */
  --color-bg-primary:      ;
  --color-bg-secondary:    ;
  --color-bg-elevated:     ;
  --color-border-subtle:   ;
  --color-border-strong:   ;
  --color-text-primary:    ;
  --color-text-secondary:  ;
  --color-text-disabled:   ;
  --color-accent-primary:  ;
  --color-accent-subtle:   ;

  /* Typography */
  --font-heading:          ;
  --font-body:             ;
  --font-mono:             ;
  --font-size-xs:          ;
  --font-size-sm:          ;
  --font-size-md:          ;
  --font-size-lg:          ;
  --font-size-xl:          ;
  --font-size-2xl:         ;
  --line-height-tight:     ;
  --line-height-normal:    ;
  --line-height-loose:     ;

  /* Spacing */
  --space-1:               ;
  --space-2:               ;
  --space-3:               ;
  --space-4:               ;
  --space-6:               ;
  --space-8:               ;

  /* Panels */
  --panel-radius:          ;
  --panel-shadow:          ;
  --panel-border-width:    ;
}

:root[data-theme="dark"][data-palette="warm"] {
  /* same token names, different values */
}
```

Additional palettes follow the same structure. Token names never change — only values differ between scopes.

## Theme Switching

`App.tsx` holds `theme` and `palette` as React state. On change, it writes the current values as `data-theme` and `data-palette` attributes on `document.documentElement`. All token resolution happens automatically via CSS.

```tsx
document.documentElement.setAttribute('data-theme', theme)
document.documentElement.setAttribute('data-palette', palette)
```

## Footer Controls

Fixed to the bottom of the viewport. Contains:

- **Theme toggle** — Light / Dark
- **Palette switcher** — one button per named palette (e.g. Warm, Cool, Stark)

Styled entirely with hardcoded values in `visualizer.css`. Must not consume any tokens from `decor.css`. Does not change appearance when theme or palette switches — it is intentionally inert to the token system so it never accidentally previews itself.

## Sample UI Area

Scrollable, fills all space above the footer. Renders all sections in order. Sections use only `decor.css` tokens — no hardcoded values anywhere.

### Typography

Renders the full type scale using `var(--font-heading)`, `var(--font-body)`, `var(--font-mono)` at each size step. Shows:

- Heading at each size (2xl → xs)
- Body paragraph at md and sm
- Metadata/label text at xs using mono font
- A mixed example: heading + body + label together as they'd appear in a real entry

### Colours

Renders a labelled swatch for every colour token. Swatches show the token name, its resolved value, and the colour block. Grouped by category (background, border, text, accent).

### Panels

Renders panel shapes at realistic widths to show `--panel-radius`, `--panel-shadow`, `--panel-border-width` in context:

- A narrow panel (navigation panel width)
- A wide panel (content area width)
- A floating panel (modal/drawer width)

Each panel contains placeholder content — a heading, a line or two of body text — so the typography and panel tokens are seen together.

### Patterns

Realistic UI patterns rendered at actual size:

- A sidebar category header with two item entries beneath it
- A journal entry card (date, title, excerpt)
- A text input field
- A primary button and a ghost button
- An **"Open Search"** button and an **"Open Settings"** button — these trigger their respective modal emulations

### Modal Emulations

Two modals, triggered by buttons in the Patterns section. Both use the app's token system fully — they are part of the themed surface, not chrome.

**Search / Command Palette modal** — overlays the sample UI area. Contains:
- A search input at the top
- A list of placeholder result rows beneath it (mix of content results and command results)

**Settings modal** — overlays the sample UI area. Contains:
- A left nav with placeholder section labels
- A right panel with placeholder settings content (a few labels, an input, a toggle)

Both modals are dismissable via a close button or clicking the backdrop. They exist solely to preview how overlaid surfaces look against the current theme and palette.

## What Goes in `decor.css` vs Nowhere Else

The rule is absolute: every visual value in the sample UI area traces back to a token in `decor.css`. No hardcoded hex values, no hardcoded `px` sizes outside the token definitions themselves. If something looks wrong, the fix is always in `decor.css`. The sole exception is `visualizer.css`, which styles only the footer chrome and is explicitly isolated from the token system.
