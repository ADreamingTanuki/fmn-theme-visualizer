# fmn-theme-visualizer

A minimal Vite + React + TypeScript project for designing and validating the visual theme for **Forget Me Not** before any real app code is written.

No routing. No state management. No backend. Purely a visual sandbox.

## Purpose

Forget Me Not has a strong aesthetic direction — warm notebook tones, considered typography, carefully shaped panels. Getting the theme right before building the real app saves a lot of painful retrofitting later. This visualizer is the design workspace for that.

## What It Shows

- **Typography** — the full type scale across all three fonts, at every size
- **Colours** — every colour token as a labelled swatch, grouped by category
- **Panels** — panel shapes at realistic widths showing radius, shadow, and border treatment
- **Patterns** — realistic UI elements: sidebar items, entry cards, inputs, buttons
- **Modals** — emulations of the command palette and settings modal, triggerable from the patterns section

## Switching Themes & Palettes

A fixed footer at the bottom of the app (which is intentionally immune to theming) contains:

- A **Light / Dark** toggle
- A **palette switcher** — one button per named palette

Switching either writes a `data-theme` or `data-palette` attribute to the document root. All token resolution happens automatically via CSS. No JavaScript is involved in the actual visual change.

## The One Rule

Every visual value in the sample UI area must trace back to a token in `src/styles/decor.css`. No hardcoded hex values. No hardcoded sizes outside token definitions. If something looks wrong, the fix is always in `decor.css`.

The sole exception is `src/styles/visualizer.css`, which styles the footer chrome only and is explicitly isolated from the token system.

## Project Structure

```
fmn-theme-visualizer/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── controls/
│   │   └── ThemeControls.tsx
│   ├── sections/
│   │   ├── Typography.tsx
│   │   ├── Colours.tsx
│   │   ├── Panels.tsx
│   │   └── Patterns.tsx
│   └── styles/
│       ├── decor.css            # Source of truth for all tokens
│       ├── layout.css
│       └── visualizer.css       # Footer chrome only — never touches decor.css tokens
├── index.html
├── vite.config.ts
└── package.json
```

## Running It

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Context

This project is a pre-implementation step for [Forget Me Not](../forget-me-not-plan-v2.md) — a notebook-aesthetic journaling and task management app built with React, TypeScript, and Tauri. Once a theme is settled here, `decor.css` graduates directly into the real app.
