# Arches Dental Clinic — Landing Page

A premium, mobile-first marketing site for Arches Dental Clinic, built with Vite, React, and Tailwind CSS.

## Stack

- **Vite + React** — fast dev server, optimized production build
- **Tailwind CSS v3** — utility-first styling with custom brand tokens
- **Lucide React** — icon set
- **Vanilla CSS/JS animations** — IntersectionObserver-based scroll reveals, CSS transitions, and a lightweight scroll-driven parallax (no animation library dependency)

No backend, no booking system, no contact form — by design. The site is built to drive phone calls and in-person visits.

## Getting Started

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the production build locally
npm run lint      # oxlint
```

## Project Structure

```
src/
  components/       One component per section (Hero, Services, FAQ, etc.)
  components/ImageAssets.jsx  Local-image-with-placeholder-fallback component
  data/clinic.js     Single source of truth for address, phone, hours, services
  hooks/              useScrollReveal — IntersectionObserver-driven fade-up
  assets/brand/       Source logo file
  assets/images/      Drop your local clinic photos here (see below)
index.html            SEO meta tags, Open Graph, JSON-LD LocalBusiness schema
tailwind.config.js    Brand color scale, type scale, custom shadows/animations
```

## Before You Deploy — Add Your Image Files

1. **Images** — every photo on the site uses the `ImageAssets` component (`src/components/ImageAssets.jsx`), which shows a clearly labeled placeholder until a real local image is available, then renders that image automatically. The imports are already wired up in code — **you just need to drop the actual files into `src/assets/images/`** using these exact filenames:

   - `hero.jpg` → Hero section (`src/components/Hero.jsx`)
   - `about.jpg` → About section (`src/components/About.jsx`)
   - `reception.jpg`, `treatment-room.jpg`, `dental-equipment.jpg`, `clinic-exterior.jpg` → Gallery (`src/components/Gallery.jsx`)

   `src/assets/images/` ships empty in this project (only a `.gitkeep` placeholder) — the six image files themselves are not included, since they're yours to provide. Once all six are in place, `npm run build` / `npm run dev` will pick them up automatically; nothing else needs to change. If a file is missing, the build will fail with an error naming the missing path rather than silently falling back to the placeholder — the graceful placeholder only applies when a `src` prop is `undefined` in code, not when an import points at a file that doesn't exist on disk.

2. **Google Reviews** — `src/components/GoogleReviews.jsx` currently shows four placeholder review cards. Replace `name` and `text` in the `reviews` array with real reviews, and update `clinic.googleReviewsUrl` in `src/data/clinic.js` with the clinic's actual Google Reviews link (currently a placeholder).

3. **Google Maps embed** — `clinic.mapsEmbedSrc` in `src/data/clinic.js` uses a query-based embed centered on the address text. For a pinned, exact-location embed, replace it with a real embed URL from Google Maps → Share → Embed a map, searched for the clinic's exact location.

4. **`index.html`** — update `og:image`, `og:url`, and `canonical` once the production domain is live, and add a real `/og-image.jpg` (1200×630px) to `public/`.

5. **Contact info** (`src/data/clinic.js`) — address, phone, and hours are already set. The `emergencyPhone` field currently mirrors the main phone number since no separate emergency line was provided; update it if the clinic has a distinct one.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, "Add New Project" → import the repo.
3. Vercel auto-detects Vite; no configuration needed (build command `npm run build`, output directory `dist`).
4. Deploy.

## Design System Notes

- **Color tokens**: `primary` (#D88918) is the brand orange from the logo. Note that the *solid button fill* uses `primary-700`, one step darker than the brand swatch — this keeps white button text at a comfortable accessible contrast ratio while `primary-500` itself remains available for badges, icons, and accents on light backgrounds.
- **Arch motif**: `src/components/ArchSwoop.jsx` is a reusable SVG component recreating the sweeping line from the logo. It's used as a headline underline, section divider, card accent, and CTA banner decoration.
- **Animation**: All scroll-reveal and parallax effects respect `prefers-reduced-motion`. Content is visible by default in markup — animation is purely additive, so nothing depends on JavaScript for content to appear.
