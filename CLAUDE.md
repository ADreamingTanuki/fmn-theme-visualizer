# CLAUDE.md — fmn-theme-visualizer

## What This Project Is

A minimal Vite + React + TypeScript theme visualizer for Forget Me Not, a notebook-aesthetic journaling app. No routing, no state management, no backend. Purely a visual sandbox for designing and validating the app's CSS token system before the real app is built.

## Running It

```bash
npm run dev
# Opens at http://localhost:5173
```

## Todo Process

Use @tmp.todo.md to build todo lists. When you complete instructions from this list, check it off.
Read @spec.md before generating a todo

## Comment Policy
Comment for human readability. 
- Don't write long unncessary comments
- Label non-obvious divs with with a short name descibing what it does. Elaborate with a short description only if needed.

## Extracted Parameters
Extract parameters from deep code layers when they make sense or when prompted to.
Use the following pattern for ideas like "panel size"
```ts
const MIN_WIDTH = "500px";
const MAX_WIDTH = "680px";
const TARGET_WIDTH = "80vw";
const TARGET_HEIGHT = "80vh";

style={{
  backgroundColor: "var(--color-bg-surface)",
  borderRadius: "var(--panel-radius)",
  boxShadow: "var(--panel-shadow)",
  border: "var(--panel-border-width) solid var(--color-border)",
  width:  `clamp(${MIN_WIDTH}, ${TARGET_WIDTH}, ${MAX_WIDTH})`,
  height: `${TARGET_HEIGHT}`,
  overflow: "auto",
}}
```

## The One Rule

Every visual value in the sample UI area must trace back to a token in `src/styles/decor.css`. No hardcoded hex values. No hardcoded sizes outside token definitions. If something looks wrong, the fix is always in `decor.css`.

The sole exception is `src/styles/visualizer.css`, which styles the footer chrome only and must never consume any `decor.css` tokens.

## Token Scoping Pattern

All tokens are scoped to `[data-theme][data-palette]` attribute combinations on the root element. There are no bare `:root` token definitions.

```css
:root[data-theme="light"][data-palette="warm"] { ... }
:root[data-theme="dark"][data-palette="warm"]  { ... }
```

`App.tsx` writes `data-theme` and `data-palette` to `document.documentElement` when the user switches. All token resolution happens automatically via CSS — no JavaScript involved in the visual change.

## Project Structure

```
src/
├── App.tsx                  # Manages theme/palette state, renders all sections
├── controls/
│   └── ThemeControls.tsx    # Theme + palette switcher — renders in footer
├── sections/
│   ├── Typography.tsx       # Full type scale
│   ├── Colours.tsx          # Token swatches grouped by category
│   ├── Panels.tsx           # Panel shapes at realistic widths
│   └── Patterns.tsx         # Realistic UI patterns + modal triggers
└── styles/
    ├── decor.css            # Source of truth — all token definitions
    ├── layout.css           # Page layout only
    └── visualizer.css       # Footer chrome only — isolated from token system
```

## Layout

```
┌─────────────────────────────────────┐
│                                     │
│         Sample UI Area              │
│         (scrollable)                │
│                                     │
├─────────────────────────────────────┤
│  Footer — fixed, never themed       │
│  [Light/Dark]  [Warm] [Cool] [...]  │
└─────────────────────────────────────┘
```

The footer is fixed to the bottom of the viewport. It never changes appearance regardless of active theme or palette.

## What Each Section Renders

**Typography** — type scale across all three fonts (`--font-heading`, `--font-body`, `--font-mono`) at every size step, plus a mixed example showing heading + body + label together.

**Colours** — labelled swatches for every colour token, grouped by category (background, border, text, accent).

**Panels** — panel shapes at three widths (narrow / wide / floating) with placeholder content inside so typography and panel tokens are seen together.

**Patterns** — realistic UI elements at actual size: sidebar category header with item entries, journal entry card, text input, primary and ghost buttons, plus an "Open Search" and "Open Settings" button that trigger modal emulations.

## Modal Emulations

Two modals triggered from the Patterns section. Both are fully themed — part of the token system, not chrome.

**Search / Command Palette** — search input at top, placeholder result rows below (mix of content results and commands). Dismissable via close button or backdrop click.

**Settings** — left nav with placeholder section labels, right panel with placeholder settings content (labels, input, toggle). Dismissable via close button or backdrop click.

## Token Categories to Define in `decor.css`

- `--color-bg-*` — background levels
- `--color-border-*` — border treatments
- `--color-text-*` — text hierarchy
- `--color-accent-*` — accent colours
- `--font-heading`, `--font-body`, `--font-mono` — font stacks
- `--font-size-xs` through `--font-size-2xl` — type scale
- `--line-height-tight`, `--line-height-normal`, `--line-height-loose`
- `--space-1` through `--space-8` — spacing scale
- `--panel-radius`, `--panel-shadow`, `--panel-border-width`
