# Sebastian Works — Portfolio

Premium portfolio website for **Sebastian Works** (Evan Sebastian Martinez) — Web
Development · Performance Marketing · AI Automation.

Built with Next.js (App Router), TypeScript and Tailwind CSS v4. The homepage
is a compact horizontal portfolio with five slides: Hello, I can, Work,
Kind words, Contact.
Its dark visual direction takes inspiration from https://madebykota.com/ while
using Evan's own portrait, project imagery, and three confirmed skill areas.

Navigate with the menu, slide arrows, mouse wheel, keyboard left/right arrows,
or a horizontal swipe. Home/End jump to the first/last slide. Smaller screens
allow vertical scrolling inside a slide when needed. Reduced motion settings
disable animated transitions. Direct links such as `/#work` remain supported.

Geist fonts are stored in `public/fonts/` with their SIL Open Font License, so
building the portfolio does not require fetching fonts from Google.

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
  components/     # HorizontalPortfolio + legacy section components
    ui/           # shared primitives (Button, Reveal, SectionHeading, icons)
  data/           # editable content: site config, portraits, services,
                  # projects, testimonials, results, technologies
  lib/            # small utilities/hooks
public/images/    # brand + portrait assets
```

## Editing content

- **Contact links, social URLs, and metadata** → `src/data/site.ts`.
- **Intro, three skills, and slide navigation** → `src/components/HorizontalPortfolio.tsx`.
- **Layout and responsive styles** → `src/components/HorizontalPortfolio.module.css`.
- **Projects** → `src/data/projects.ts`. All projects remain available in the
  project selector: 12 Australian projects and 11 Philippine projects. Country
  controls filter the selector and project arrows. Freelance work covers design,
  development, hosting management, SEO, ads, and marketing. Agency/company work
  is credited as development from supplied Figma or Adobe XD designs. The
  Philippine projects were built from scratch while working at ITWorks Global.

- **Danny's video testimonial** → `src/data/client-testimonial.ts`. The supplied
  recording is self-hosted in `public/videos/`, with English captions and a
  readable transcript. The Kind words slide credits Prestige Tractors and Neale
  Goad Automotive, and pauses playback when a visitor leaves the slide. Playback
  is user-initiated; the video is not downloaded on initial page load.

The homepage intentionally omits strategy/growth positioning, placeholder
testimonials, standalone metrics, and additional technology claims. Danny's
testimonial is the genuine client recording supplied by Evan; the quote is an
excerpt from it, not invented copy. Any results mentioned in the recording are
Danny's own account, not an independently verified metric. Only publish new
experience or results once Evan has confirmed them. Older section components
and their data remain in the repository but are not rendered on the homepage.

Root-level `web-design.png` is the original design reference;
`me-with-crossedarms.png` is the unprocessed source for the About portrait
(`public/images/me-crossedarms-cut.png`).
