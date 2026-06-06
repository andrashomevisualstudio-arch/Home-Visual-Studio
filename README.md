# Home Visual Studio

Marketing website for **Home Visual Studio** (homevisualstudio.com) — a Hungarian
real-estate media agency. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS,
and the shadcn project structure. Deploy-ready for Vercel.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (v3) + shadcn structure (`components/ui`, `lib/utils`, `components.json`)
- **Clash Display** (self-hosted, `app/fonts/`) for display headlines + **Inter** for body
- **gray-matter** + **next-mdx-remote** for the Markdown blog
- **Formspree** for the contact form

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, full-width service bands, photo showcase, contact |
| `/szolgaltatasok` | Services with pricing + AI before/after comparison sliders |
| `/blog` | Blog index (card grid) |
| `/blog/[slug]` | Individual blog post (statically generated) |
| `/kapcsolat` | Contact page with form |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (Vercel uses this)
```

## Writing blog posts

Add a Markdown file to `posts/`. Frontmatter:

```markdown
---
title: "A bejegyzés címe"
date: "2026-06-06"
excerpt: "Rövid összefoglaló a kártyához."
coverImage: "/images/property/property-01.webp"
---

A bejegyzés tartalma Markdownban…
```

The post appears automatically on `/blog` and at `/blog/<filename-without-.md>`.

## Configuration

- **Contact email / phone** — set in `components/site-footer.tsx` and
  `app/kapcsolat/page.tsx` (`andras.homevisualstudio@gmail.com`, `+36 30 793 0356`).
- **Formspree endpoint** — set in `components/contact-form.tsx`
  (`https://formspree.io/f/mzdqdojd`). Update if it changes.
- **Service content** — all titles, taglines, descriptions, pricing and band images
  live in `lib/services.ts`. Swap a band image by dropping a file into
  `public/images/services/` and pointing the `image` path there.

## Deploying to Vercel

1. Push this folder to a Git repo.
2. Import the project in Vercel (Framework preset: **Next.js**). No env vars required —
   all images live in `public/`.
3. Add the `homevisualstudio.com` custom domain in the Vercel dashboard.
