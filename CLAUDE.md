# about-me

Personal portfolio site built with React + TypeScript + Vite. Uses MUI for components, react-i18next for EN/FI translations, and react-router-dom (hash router) for navigation.

## Architecture

Single-page app with a hash router (`createHashRouter`). Routes map to view components under `src/components/views/`. All views use the `<Layout>` wrapper from `src/components/layout/Layout.tsx`.

All user-visible text lives in `src/i18n/en.json` and `src/i18n/fi.json`. Finnish keys that are missing fall back to English automatically — but the goal is full coverage in both files.

## i18n conventions

- Paragraph breaks within a single translation value use `<br /><br />` (with spaces). The Accordion component renders content via `dangerouslySetInnerHTML`, so HTML is supported there. The Profile bio is split on `<br /><br />` and rendered as multiple `<Typography>` elements.
- `fi.json` only needs to contain keys that differ from `en.json`. Keys not present in Finnish fall back to English.
- The `tech` block exists in both files. Adding a new tech accordion requires a key in `tech.header.*` and `tech.content.*` in both files, plus adding the key to the `techs` array in `Technologies.tsx`.

## Technologies page

`src/components/views/Technologies.tsx` holds a flat `techs` array of i18n key strings. The array is split into two visual groups by passing `dividerAfter: true` on the last item of group 1 — currently `"AIAssisted"`. The `AccordionGroup` component renders a MUI `<Divider>` after that item and keeps a single `expanded` state across all items (only one accordion open at a time).

Current keys in order: `Architecture`, `AIAssisted` | `React`, `.NET`, `Flutter`, `RubyOnRails`.

## AccordionGroup

`src/components/common/Accordion.tsx`. Accepts an `items` array of `{ header, content, subheader?, dividerAfter? }`. Single `useState` governs expanded state across all items. On desktop the first item is expanded by default; on mobile none are. Content is rendered with `dangerouslySetInnerHTML` so `<br /><br />` and `<a>` tags work.

## Layout children type constraint

`Layout` types `children` as `JSX.Element | JSX.Element[]`. If a child is a `.map()` call mixed with other sibling children, wrap it in a `<>...</>` Fragment — otherwise TypeScript will reject the array-within-children as a type error at build time.

## Deployment

Deployed to GitHub Pages via the `dist/` output. The hash router is required for GitHub Pages (no server-side routing). Build: `npm run build`.
