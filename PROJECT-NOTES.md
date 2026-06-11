# Home Visual Studio — Project Notes / Handoff

Marketing website for **Home Visual Studio** (homevisualstudio.com), a Hungarian
real-estate media agency. All copy is Hungarian.

## Where things are
- **Project root (the deployable app):**
  `C:\Users\Köves-Abay András\Documents\Claude Code\Home Visual Studio landing page\homevisualstudio`
- Original source assets (raw photos, PDF, docx, example `index.html`) live in the **parent** folder — not part of the app, not deployed.

## Tech stack
- Next.js 14 (App Router) · TypeScript · Tailwind CSS v3 · shadcn structure (`components/ui`, `lib/utils`, `components.json`)
- Fonts: **Clash Display** (self-hosted in `app/fonts/`) for headings + **Inter** for body
- Blog: `gray-matter` + `next-mdx-remote`
- Contact form: **Formspree**
- Hero particles: `@tsparticles/*` + `framer-motion`

## Environment quirks (important)
Node, Python, and Git are installed but **not on PATH** inside automated shells. In a
**normal new terminal** `npm`/`node`/`git` work fine. Full paths if needed:
- Node: `C:\Program Files\nodejs\` (node.exe, npm.cmd)
- Git: `C:\Program Files\Git\cmd\git.exe` (local identity set: Home Visual Studio / andras.homevisualstudio@gmail.com)
- Python (only for the ui-ux skill): `C:\Users\Köves-Abay András\AppData\Local\Programs\Python\Python312\python.exe`

## Run / build / deploy
```bash
# in the homevisualstudio folder, in a fresh terminal:
npm install
npm run dev      # http://localhost:3000
npm run build    # must pass before pushing (Vercel uses this)
```
- **GitHub:** https://github.com/andrashomevisualstudio-arch/Home-Visual-Studio (branch `main`, latest commit `a56b492`)
- **Deploy flow:** push to `main` → Vercel auto-builds *if the repo is connected to a Vercel project*. If not yet connected: vercel.com → Add New → Project → import the repo (Next.js preset, no env vars) → add domain homevisualstudio.com.
- Publish changes: `git add -A && git commit -m "..." && git push`

## Pages
| Route | File |
|-------|------|
| Home | `app/page.tsx` |
| Services | `app/szolgaltatasok/page.tsx` |
| Blog index | `app/blog/page.tsx` |
| Blog post | `app/blog/[slug]/page.tsx` |
| Contact | `app/kapcsolat/page.tsx` |

**Home section order:** Hero (dark sparkles) → Capabilities strip → 6 service bands → How-it-works → Founder intro → Contact CTA.

## Key files to edit
- **Services/pricing/descriptions/band images:** `lib/services.ts` (single source of truth; drives home bands + services page + nav dropdown)
- **Band images:** `public/images/services/` (`video.png`, `360.png`, `hirdetesi-ugynok.png`, `landing-page.png`), AI band = `public/images/ai/bedroom-after.png`, Fotózás band = `public/images/property/property-05.webp` (= IMG_0878, the go-to shoot photo)
- **Header + services hover dropdown:** `components/site-header.tsx`
- **Contact form** (validation + Formspree): `components/contact-form.tsx`
- **Honest trust sections:** `components/capabilities.tsx`, `components/how-it-works.tsx`, `components/founder.tsx`
- **Hero (sparkles):** `components/hero.tsx` + `components/ui/sparkles.tsx`
- **AI before/after slider:** `components/ui/image-comparison-slider.tsx` (used on services page)
- **Design tokens:** `app/globals.css`

## Design decisions
- Style: "Exaggerated Minimalism" (oversized Clash Display headings, huge whitespace, full-width image bands with overlaid white titles, black footer)
- **Accent color = warm terracotta** `hsl(21 47% 43%)` (≈ #A05E3A), set as `--primary` / `--ring` in `app/globals.css`. Used on CTAs, badges, focus rings, icons, accents. Headlines/footer stay near-black.

## Integrations / real data
- **Formspree endpoint:** `https://formspree.io/f/mzdqdojd` (in `components/contact-form.tsx`)
- **Contact email:** andras.homevisualstudio@gmail.com · **phone:** +36 30 793 0356 (in `components/site-footer.tsx` and `app/kapcsolat/page.tsx`)

## Blog: how to add a post
Create `posts/<slug>.md` with frontmatter, then it appears automatically:
```markdown
---
title: "Cím"
date: "2026-06-07"
excerpt: "Rövid összefoglaló."
coverImage: "/images/property/property-05.webp"
---
Tartalom Markdownban…
```

## Known gotcha
- **tsparticles is pinned to v3** (`@tsparticles/react@3.0.0`, engine/slim `3.9.1`). Do NOT upgrade to v4 — it removes `initParticlesEngine` and breaks `components/ui/sparkles.tsx`.

## Outstanding TODOs (search for `TODO` in code)
1. **Founder details** — `components/founder.tsx` uses first name "András" + an initials avatar. Add full name and (optionally) a real photo.
2. **Turnaround "24–48 óra"** appears in `capabilities.tsx`, `how-it-works.tsx`, `founder.tsx` — confirm it's a window you can commit to, or change everywhere.
3. Capabilities / founder copy are honest placeholders you can refine.
4. Real testimonials: the testimonials component was removed (was fabricated). Re-add a section once you have genuine client quotes.

## Audit status (ui-ux-pro-max + web guidelines)
Done: accessibility (prefers-reduced-motion guard incl. sparkles, skip-link, 44px touch targets, input focus rings, required markers + inline validation with focus-on-first-error, fixed heading hierarchy), terracotta accent, honest conversion sections. Build passes clean.

## SEO/UI upgrade round (Fable 5 review)
- **SEO infra:** `lib/site.ts` (central config incl. Budaörs geo + area towns), `lib/schema.ts`
  (Organization/LocalBusiness, WebSite, Service, Breadcrumb, BlogPosting, **FAQPage**),
  `app/robots.ts` (AI crawlers welcomed), `app/sitemap.ts`, `public/llms.txt`.
- **FAQ:** content in `lib/faq.ts` (single source for accordion + JSON-LD); accordion in
  `components/faq.tsx` (native details/summary). Edit answers there — keep them TRUE.
- **Coverage section:** `components/coverage.tsx` — local-SEO content block (town names) +
  radius graphic. Towns come from `lib/site.ts` → `geo.areaServed`.
- **OG image:** static `public/og.png` (1200×630). Regenerate by editing `og-card.html`
  (project root) and running headless Edge:
  `msedge --headless=new --window-size=1200,630 --screenshot=public\og.png og-card.html`
  (@vercel/og was removed — it crashes on the non-ASCII Windows path at build time.)
- **Perf:** sparkles lazy-loaded via `components/hero-sparkles.tsx` (`next/dynamic`, ssr:false)
  → home First-Load JS 199 kB → 116 kB.
- **UI:** scroll-reveal (`components/reveal.tsx`), hero stagger + dual CTA + scroll cue,
  numbered service bands, 4-column footer with service links.
- **Ranking #1 needs off-page too:** Google Business Profile (Budaörs service-area),
  GSC + sitemap submit, local directories/backlinks, real reviews, fresh blog posts.
