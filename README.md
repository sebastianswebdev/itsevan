# Sebastian Works — Portfolio

Premium portfolio website for **Sebastian Works** (Evan Sebastian Martinez) — Web
Development · Performance Marketing · AI Automation.

Built with Next.js (App Router), TypeScript and Tailwind CSS v4. The homepage
is a compact horizontal portfolio with six slides: Hello, I can, Work,
Kind words, Education, Contact.
Its dark visual direction takes inspiration from https://madebykota.com/ while
using Evan's own portrait, project imagery, and three confirmed skill areas.

Navigate with the menu, slide arrows, mouse wheel, keyboard left/right arrows,
or a horizontal swipe. Home/End jump to the first/last slide.
At widths up to 900px, a Menu button opens all six sections with large touch
targets; it closes on selection, Escape, or a click outside the header. The
footer names the next section, separately from the client-story controls.
A persistent left/right guide explains horizontal navigation, and the Hello
slide has an explicit “Explore right” button. A lime pointer light follows
mouse movement and expands over interactive controls. It is decorative, ignores
clicks, and is disabled for touch pointers and reduced-motion preferences. Smaller screens
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
- **Projects** → `src/data/projects.ts`. Work shows two continuously looping
  image carousels: 12 Australian websites above 11 Philippine websites. Each
  card links to the website and displays the development role. Rows support
  native touch/trackpad scrolling, arrow controls and an explicit Play/Pause
  button. Hover and keyboard focus pause motion; manual browsing also pauses
  the row. Animation runs only on the Work slide and stops for hidden tabs or
  reduced-motion preferences. Duplicated loop copies stay out of keyboard and
  screen-reader navigation. The Philippines row credits ITWorks Global and
  development from supplied Figma / Adobe XD designs. There are 21 real
  website previews; AG International and GTG Talent retain labelled fallback
  covers because their websites did not serve a usable preview at capture time.

- **Education and awards** → `src/data/education.ts`. The Education slide
  includes Evan’s STI College BS Computer Science degree (July 2020–July 2024),
  Cum Laude and Leadership Awardee honors, and 1st Runner-Up in the local-level
  Tagisan ng Talino Codefest hackathon (2022–23). The graduation portrait and
  linked award photograph were supplied by Evan.

- **Client video testimonials** → `src/data/client-testimonial.ts`. The Kind
  words slide shows three client cards for Danny, Carl John Fechner and Annette
  Keat, plus a client counter and named Previous/Next client controls. The last
  client links back to the first. On phones, choosing a client brings the video
  and client controls into view.
  Supplied recordings are self-hosted in `public/videos/`, with English captions
  and readable transcripts. Carl is credited for Growing Deep and Strong
  (GDAS), Find Your Destiny and his personal portfolio, with web development,
  hosting and digital marketing. Annette is credited for Inner Peace
  (innerpeace.vision), with web development and SEO. Playback is user-initiated
  and pauses when changing clients or leaving the slide. Landscape and portrait
  recordings retain their original proportions; videos are not downloaded on
  initial page load.

The homepage intentionally omits strategy/growth positioning, placeholder
testimonials, standalone metrics, and additional technology claims. The client
testimonials are genuine recordings supplied by Evan; quotes are excerpts from
them, not invented copy. Any results mentioned are each client's own account,
not independently verified metrics. Only publish new
experience or results once Evan has confirmed them. Older section components
and their data remain in the repository but are not rendered on the homepage.

Root-level `web-design.png` is the original design reference;
`me-with-crossedarms.png` is the unprocessed source for the About portrait
(`public/images/me-crossedarms-cut.png`).
