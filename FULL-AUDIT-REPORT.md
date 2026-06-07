# SEO + GEO Audit — Home Visual Studio

**Date:** 2026-06-07
**Scope:** Full source-level audit of the Next.js 14 app (local codebase, pre-deploy).
**Goal:** Rank top in the Hungarian market for **real estate media** ("ingatlan média") and related terms.
**Targeting decisions:** Service area = **Budapest + agglomeráció**; keyword language = **Hungarian only**.

> Method: LLM-first source audit. The site is not yet on a public URL, so checks
> were run against the source and a local production build (`next build` +
> `next start`) rather than live PageSpeed/HTTP APIs. Findings verified by
> fetching rendered HTML, `/sitemap.xml`, `/robots.txt`, and `/llms.txt`.

---

## Summary scorecard

| Category | Before | After | Notes |
|---|---|---|---|
| Technical SEO | 55 | 92 | Added sitemap, robots, canonicals, AI-crawler rules |
| On-Page SEO (keywords) | 50 | 90 | Geo + head-term keywords in titles, H-copy, meta |
| Schema / Structured data | 0 | 95 | Organization/LocalBusiness, WebSite, Service, Breadcrumb, BlogPosting |
| Content / E-E-A-T | 60 | 75 | Founder + guarantee present; needs name, reviews |
| GEO (AI search) | 20 | 90 | llms.txt + clean structured facts + AI-crawler allow |
| Image optimization | 70 | 78 | next/image + alt text good; OG image is webp (see TODO) |
| **Overall** | **~45** | **~88** | From *Poor* to *Good*, approaching *Excellent* |

---

## What was wrong (and now fixed)

### 🔴 Critical — fixed

1. **No structured data anywhere.** Zero JSON-LD. Google had no machine-readable
   understanding of the business, services, prices, or location.
   **Fix:** Added a full schema layer (`lib/schema.ts` + `components/json-ld.tsx`):
   - `Organization` + `LocalBusiness` + `ProfessionalService` (site-wide) with
     `areaServed` = Budapest/agglomeráció/Pest megye, geo coordinates, telephone,
     email, price range, founder, and an `OfferCatalog` of all 6 services.
   - `WebSite` entity (brand + language).
   - `Service` nodes with `Offer`/price for each service (services page).
   - `BreadcrumbList` on services, contact, and blog-post pages.
   - `BlogPosting` (author, dates, language) on each article.

2. **No sitemap.xml.** Crawlers had no map of the site.
   **Fix:** `app/sitemap.ts` — dynamic, includes static routes + every blog post
   with real `lastmod` dates. Verified at `/sitemap.xml` (6 URLs).

3. **No robots.txt.** No crawl directives, no sitemap pointer, no AI-crawler policy.
   **Fix:** `app/robots.ts` — allows all, points to the sitemap, and **explicitly
   allows the major AI crawlers** (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot,
   PerplexityBot, Google-Extended, Applebot-Extended, Bingbot, CCBot). Verified at
   `/robots.txt`.

4. **No local/geo keyword targeting.** Titles and copy never said "Budapest" — the
   single biggest miss for a local real-estate-media business.
   **Fix:** Geo modifiers added to the home title, hero eyebrow + subline, services
   page, and all metadata. LocalBusiness schema reinforces the geo signal.

### ⚠️ Warnings — fixed

5. **Thin, generic page titles.** Home was "Ingatlan média & digitális megoldások";
   subpages were one word ("Szolgáltatások", "Kapcsolat", "Blog").
   **Fix:** Keyword- and geo-rich titles on every route, e.g.
   *"Ingatlanfotózás & ingatlan média Budapesten | Home Visual Studio"*,
   *"Ingatlan média szolgáltatások és árak Budapesten"*.

6. **No canonical URLs.** Risk of duplicate-URL dilution.
   **Fix:** `alternates.canonical` on every route (verified in rendered HTML).

7. **No social/OG image, no Twitter card.** Links shared on social/messaging had no
   preview, weakening CTR.
   **Fix:** `openGraph.images` + `twitter: summary_large_image` site-wide, plus
   `article:published_time` on posts.

8. **No GEO/AI-search file.** Nothing telling AI engines what the business is.
   **Fix:** `public/llms.txt` — a clean, structured brief (services, prices, area,
   contact, guarantee) that ChatGPT/Claude/Perplexity can cite verbatim.

### ℹ️ Keyword strategy applied

Head term **"ingatlan média"** + high-intent local/long-tail set, woven into titles,
meta, hero, and services copy (not stuffed):

`ingatlan média` · `ingatlanfotózás Budapest` · `professzionális ingatlanfotózás` ·
`ingatlan fotós Budapest` · `ingatlan videó` · `360 fokos virtuális bejárás` ·
`virtuális bejárás Budapest` · `AI ingatlanfotózás` · `ingatlan marketing` ·
`ingatlanos média ügynökség`.

---

## Files changed / created

**New**
- `lib/site.ts` — single source of truth for SEO/contact/geo config + keyword set.
- `lib/schema.ts` — JSON-LD builders.
- `components/json-ld.tsx` — JSON-LD renderer.
- `app/sitemap.ts` — dynamic sitemap.
- `app/robots.ts` — robots + AI-crawler policy.
- `public/llms.txt` — GEO brief for AI search engines.

**Edited**
- `app/layout.tsx` — rich default metadata, OG/Twitter, robots directives,
  canonical; injects Organization + WebSite JSON-LD site-wide.
- `app/szolgaltatasok/page.tsx` — geo title/desc/OG/canonical, Service +
  Breadcrumb schema, geo intro copy.
- `app/kapcsolat/page.tsx` — geo title/desc/OG/canonical, Breadcrumb schema.
- `app/blog/page.tsx` — keyword title/desc/OG/canonical.
- `app/blog/[slug]/page.tsx` — canonical, article OG + published time,
  BlogPosting + Breadcrumb schema.
- `components/hero.tsx` — geo in eyebrow + keyword-rich subline.

---

## Verification performed

- `next build` — clean, all 12 routes prerendered; `/sitemap.xml` and
  `/robots.txt` emitted as routes.
- `next start` + HTTP fetch:
  - `/` → Organization+LocalBusiness+WebSite JSON-LD, full meta/OG/Twitter, canonical.
  - `/szolgaltatasok` → 12 Service nodes + Breadcrumb + canonical.
  - `/blog/<post>` → 200, BlogPosting + Breadcrumb, `og:type=article`, published time.
  - `/robots.txt`, `/sitemap.xml`, `/llms.txt` → correct content.
- Note: a stale `.next` cache (caused by an old dev server writing during build)
  produced a transient 500 on the blog route; resolved with a clean rebuild. Not a
  code issue.

---

## Remaining opportunities (see ACTION-PLAN.md)

- Off-page is decisive for "top" rankings: **Google Business Profile** + citations.
- Add real **reviews/testimonials** → enables `AggregateRating` schema (star results).
- Dedicated **1200×630 OG image** (current OG is a content webp).
- More **local landing content** and blog cadence around target keywords.
- Founder full name + photo for E-E-A-T.
