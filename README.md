# Sebastian Works — Portfolio

Premium portfolio website for **Sebastian Works** (Evan Sebastian Martinez) — Web
Development · Performance Marketing · AI Automation.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Motion
(Framer Motion). The homepage features a scroll-driven, four-stage portrait
sequence in the hero (executive → developer → marketer → automation).

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # production build
```

## Structure

```
src/
  app/            # layout (SEO metadata, fonts), homepage, /blog stub
  components/     # section components (Hero, ScrollPortrait, Services, …)
    ui/           # shared primitives (Button, Reveal, SectionHeading, icons)
  data/           # editable content: site config, portraits, services,
                  # projects, testimonials, results, technologies
  lib/            # small utilities/hooks
public/images/    # brand + portrait assets
```

## Editing content

- **Contact/booking links, social URLs** → `src/data/site.ts`
  (the Upwork link is still a `#` placeholder — fill it in).
- **Hero portrait stages** → `src/data/portraits.ts`.
- **Testimonials** → `src/data/testimonials.ts` — the entries are clearly
  marked placeholders; replace with real client quotes and remove the
  `isPlaceholder` flag to drop the "Sample" badge.
- **Results metrics** → `src/data/results.ts` — add a verified `stat` value
  to any entry and the number takes the headline slot automatically.
- **Case studies** → `src/data/projects.ts`.

Root-level `web-design.png` is the original design reference;
`me-with-crossedarms.png` is the unprocessed source for the About portrait
(`public/images/me-crossedarms-cut.png`).
