# Modal Emulations — Build Plan

Both modals are currently rough inline stubs inside `Patterns.tsx`. The goal is to
extract and flesh them out so they properly exercise the token system.

---

## 1. Extract into separate components

- [x] Create `src/modals/SearchModal.tsx`
- [x] Create `src/modals/SettingsModal.tsx`
- [x] Update `Patterns.tsx` to import and render both, passing `open` + `onClose` props
- [x] Remove the inline modal JSX from `Patterns.tsx`

---

## 2. SearchModal — flesh out to spec

Spec: search input at top, placeholder result rows below (mix of content results and
commands). Dismissable via close button or backdrop click.

- [ ] Full-width search input at the top of the modal body, auto-focused on open
- [ ] Result rows — at least 3 content results (e.g. "May 17 — A Day of Reflection")
  and 2 command rows (e.g. "→ Export entries", "→ Delete entry") — visually distinct
- [ ] Close button (top-right) and backdrop click both dismiss
- [ ] All colours, spacing, radius, shadow, fonts via tokens — zero hardcoded values

---

## 3. SettingsModal — flesh out to spec

Spec: left nav with section labels, right panel with settings content (labels, input,
toggle). Dismissable via close button or backdrop click.

- [ ] Left nav: section labels only — "General", "Appearance", "Privacy", "About"
- [ ] Right panel — at minimum one of each:
  - A labelled text input (e.g. "Display name")
  - A labelled toggle/checkbox (e.g. "Auto-save drafts")
  - A section heading above them
- [ ] Close button (top-right of right panel) and backdrop click both dismiss
- [ ] All colours, spacing, radius, shadow, fonts via tokens — zero hardcoded values

---

## 4. Verify token coverage

- [ ] Open each modal in both light and dark mode — nothing should look broken or
  fall back to browser defaults
- [ ] Grep for any hardcoded hex/px/rem values inside the two new modal files and fix
