# Forget Me Not — Implementation Plan

A living document tracking build progress. Phases are broad strokes. Checkboxes are concrete tasks within the current active phase.

Forget Me Not is a notebook-aesthetic journaling and task management app built with React, TypeScript, and Tauri. See `forget-me-not-plan-v2.md` for full architecture detail.

---

## Phase 1 — Theme Visualizer

A standalone Vite + React project (`fmn-theme-visualizer`) for designing and locking down the visual token system before the real app is built. See `fmn-theme-visualizer-spec.md` for full detail.

**Scaffold**
- [x] Vite + React + TypeScript project initialised
- [x] `CLAUDE.md` in project root
- [x] `README.md` in project root
- [x] `.gitignore` in place
- [x] Repo created on GitHub and pushed

**Structure**
- [x] `src/styles/decor.css` — token file created, all token names defined, values left blank
- [x] `src/styles/layout.css` — page layout (sample area + fixed footer)
- [x] `src/styles/visualizer.css` — footer chrome styles, isolated from token system
- [x] `src/App.tsx` — manages theme/palette state, writes `data-theme` and `data-palette` to root
- [x] `src/controls/ThemeControls.tsx` — light/dark toggle, palette switcher, renders in footer

**Sections**
- [ ] `src/sections/Typography.tsx`
- [ ] `src/sections/Colours.tsx`
- [ ] `src/sections/Panels.tsx`
- [ ] `src/sections/Patterns.tsx` — includes "Open Search" and "Open Settings" triggers

**Modal Emulations**
- [ ] Search / Command Palette modal
- [ ] Settings modal

**Design Work**
- [ ] First palette defined and looking right in light mode
- [ ] First palette defined and looking right in dark mode
- [ ] Token values finalised and committed
- [ ] `decor.css` ready to graduate into the real app

---

## Phase 2 — Scaffold & Shell

New Tauri + React + TypeScript project from scratch. Core shell structure, navigation, and state — no features yet, just a working skeleton you can open and click around.

- Tauri project scaffolded
- `decor.css` and `layout.css` carried over from visualizer
- `lib/Store.ts` — Tauri IPC abstraction stubbed out
- `store/coreStore.tsx` — shell state and actions (React context + useReducer)
- `store/settingsStore.ts` — persisted settings stubbed
- `core/Core.tsx` — root layout, CSS grid
- `ui/Panel.tsx` — Base UI Drawer wrapper
- `ui/Modal.tsx` — Base UI Dialog wrapper
- `ui/Drawer.tsx` — Base UI Drawer in transient mode
- `core/NavigationPanel.tsx` — left panel, static placeholder content
- `core/ContextPanel.tsx` — right panel, hidden by default
- `core/ContentViewArea.tsx` — renders active view from route map, welcome state when empty
- `core/viewRoutes.ts` — static route map stubbed with placeholder views
- `core/commandPalette/paletteRegistry.ts` — scoped registry stubbed
- `core/commandPalette/CommandPalette.tsx` — palette UI, no real results yet
- `core/SettingsModal.tsx` — settings modal, static placeholder sections
- Navigation working end to end — clicking things changes the active view
- Light/dark mode switch wired up
- Source switching architecture in place (local / cloud / dev)

---

## Phase 3 — Data Layer & Sources

SQLite, Turso, vault structure, and migrations in place before any feature data is written.

- Rust backend: `db.rs` with migration runner
- `src-tauri/src/migrations/` — first migration file (empty schema, just the runner working)
- Source directory structure in place: `sources/local/`, `sources/cloud/`, `sources/dev/`
- `Store.ts` fully wired to Tauri IPC
- Local source working end to end (write and read from SQLite)
- Dev source seeded with fake data
- Turso embedded replica wired for cloud source
- Source switching working in settings

---

## Phase 4 — Features: Foundation

Features with no dependencies. These must be solid before anything else is built on top of them.

- `features/tags/` — tag definitions, `tagsApi`, palette source, settings section
- `features/search/` — full-text index, `searchApi`, palette source
- `features/images/` — blob store, reference counting, `imagesApi`, settings section
- `features/brain-dump/` — session capture, sort category registration, palette source, settings section
- `features/content-blocks/` — block schema, serialisation, shared block UI components

---

## Phase 5 — Features: Core Experience

The features most likely to be used daily. Depends on Phase 4 being complete.

- `features/events/` — tasks and calendar events, registers with tags/brain-dump/search
- `features/journal/` — dated entries with content blocks, registers with tags/search/images

---

## Phase 6 — Features: Calendar

Depends on events being complete.

- `features/calendar/` — time-oriented view over events data, context panel for display options

---

## Phase 7 — Polish & Mobile

- Responsive breakpoint implemented — wide vs narrow layout modes
- Navigation panel as left drawer on narrow layouts
- Context panel as right drawer on narrow layouts
- Command palette pull-down gesture on narrow layouts
- Android build tested and working
- Performance pass — anything slow gets profiled and fixed

---

## Phase 8 — Sync

- Cloud source sync tested across desktop and Android
- Conflict resolution verified (last-write-wins on `updatedAt`)
- Self-hosted Turso instance set up as long-term exit from Turso cloud

---

## Someday / Not Now

Things that are deliberately out of scope for now but worth remembering:

- Multi-user or shared sources
- Public release / third-party extensibility
- Additional sync transports beyond Turso
- Additional themes / palettes beyond the first
