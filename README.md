# Pro Bono Initiative: Frontend-only Website

A professionally styled Next.js 14 (App Router, TypeScript, Tailwind CSS) website.
There is **no backend and no database**: all editable text lives in one file.

## Run it locally (VS Code)

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing the content

Open **`content/siteContent.ts`**. Every word on the site is in there:

- Header name and tagline, footer note, loading-screen messages
- Navigation links
- Hero, Who We Are, Vision, Mission, Partnership text
- The Intervention Context intro and its expandable mini cards

To add a mini card, copy a `{ title: '...', body: '...' }` block inside `context.cards`.
To remove one, delete its block. Save the file and the page refreshes automatically in dev mode.

## Adding images

1. Copy your photos into **`public/images/`** (JPG or WebP, ideally under 500 KB each; landscape
   photos around 1600 px wide work best for the gallery).
2. In **`content/siteContent.ts`** point to them with `/images/your-file.jpg`:
   - `hero.backgroundImage`: optional photo behind the hero text (dark overlay added automatically)
   - `whoWeAre.image`: photo beside the "Who We Are" text (set to `null` for text only)
   - `gallery.images`: the gallery tiles. Copy a `{ src, alt, caption }` block to add one,
     delete a block to remove one. The 1st, 6th, 11th... photo is shown large. Click opens a viewer.

The placeholder images (`about.svg`, `gallery-1.svg` to `gallery-5.svg`) can be deleted once replaced.
Always write a short `alt` description for each photo, and only publish photos of survivors or
children with informed consent.

To change how long the loading screen shows, edit `DISPLAY_MS` at the top of
`components/LoadingScreen.tsx` (milliseconds).

To change the logo, replace `public/logo.png`.

## Project structure

```
content/siteContent.ts      <- all editable text
app/page.tsx                 homepage layout
app/layout.tsx               page title / description (SEO)
components/                  Navbar, Footer, SectionCard, SubTopicCarousel,
                             LoadingScreen, FadeInSection, BackToTop
public/logo.png
```

## Deploying

```bash
npm run build
npm start
```

Or push the folder to Vercel/Netlify: it deploys as a standard Next.js app with no environment variables.
