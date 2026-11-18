# Port 2.0

An alternative, story-driven version of Scott Galetto's portfolio ([humanbuiltai.work](https://humanbuiltai.work)). It runs alongside the original site, not in place of it.

The page is a vertical scroll story. Some sections pin in place while a drawing or change plays out, then release.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Where things live

| What | Where |
| --- | --- |
| All copy (headlines, steps, notes, links) | `src/content/site.ts` |
| Section order | `src/app/page.tsx` |
| Colours, type scale, section styles | `src/app/globals.css` (tokens at the top) |
| Fonts (SF Pro Display / Text) | `src/app/fonts/`, loaded in `src/app/layout.tsx` |
| Scroll engine (pinned progress, easing) | `src/lib/scroll.ts` |
| Sections | `src/components/` (one file per pinned section, simple ones in `StaticSections.tsx`) |
| Placeholder line art | `src/components/illustrations/` |

### How a pinned section works

A pinned section is a tall `<section className="pin">` with a sticky `.stage` inside it. `usePinnedProgress(ref, onFrame)` reports progress from 0 to 1 while the stage is held, and `onFrame` writes styles straight to the DOM, so React doesn't re-render on scroll. Make a section hold longer by raising its height in `globals.css`.

With reduced motion turned on, nothing pins and every section shows its finished state.

## Working agreement

- One small PR per section or idea. Each PR gets a Netlify deploy preview to review.
- Copy changes only touch `src/content/site.ts`.
- Artwork in `illustrations/` is placeholder until the final style is ready.
