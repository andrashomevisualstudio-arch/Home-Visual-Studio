# SEO + GEO Action Plan — Home Visual Studio

Prioritized by impact ÷ effort. **On-page is done** (committed in code). The biggest
remaining wins for actually ranking *top* for "ingatlan média" / "ingatlanfotózás
Budapest" are **off-page** — search engines need external trust signals, and a brand-
new domain has none yet.

---

## ✅ Done in this pass (in code)

- Structured data: Organization/LocalBusiness, WebSite, Service+Offer, Breadcrumb, BlogPosting.
- `sitemap.xml`, `robots.txt` (with AI-crawler allow-list), `llms.txt`.
- Geo + head-term keywords in all titles, descriptions, hero, services copy.
- Canonicals, Open Graph, Twitter cards site-wide.

---

## 🔴 Do next — highest impact (off-page, not code)

1. **Create a Google Business Profile** for "Home Visual Studio" (service-area
   business, Budapest). This is the #1 lever for local + Maps ranking and for the
   knowledge panel. Use the exact same NAP (name, address-area, phone) as the site.
   - Then add the GBP URL + social profiles to `sameAs` in `lib/schema.ts`
     (`organizationSchema().sameAs`) — currently an empty array with a TODO.

2. **Collect 5–10 real client reviews** (Google + on-site testimonials). Once you
   have genuine on-site reviews, we can add `Review` / `AggregateRating` schema to
   light up **star ratings** in results. (Do not fabricate — Google penalizes fake
   review markup.)

3. **Local citations / directories.** List the business in Hungarian directories
   and relevant real-estate marketplaces. Consistent NAP across the web is a core
   local ranking signal.

---

## ⚠️ Do soon — content depth (drives keyword coverage)

4. **Publish 1 article / 2–3 weeks** targeting specific queries, e.g.:
   - "Mennyibe kerül az ingatlanfotózás Budapesten?" (price-intent, high value)
   - "360 fokos virtuális bejárás — megéri?" (service-intent)
   - "Ingatlan videó vs. fotó: melyik ad el gyorsabban?"
   Each post should answer the question in the first paragraph (good for AI
   Overviews / featured snippets) and internally link to the matching service.

5. **Dedicated OG image (1200×630, JPG/PNG).** The current share image is a content
   `.webp`; a branded 1200×630 raster maximizes social CTR and avoids webp edge
   cases on some platforms. Then point `site.ogImage` in `lib/site.ts` at it.

6. **Founder E-E-A-T.** Add your **full name** (and ideally a photo) in
   `components/founder.tsx` and `site.founder` in `lib/site.ts`. Real-person
   authorship strengthens trust signals and the `author`/`founder` schema.

---

## ℹ️ Nice to have

7. **Verify in Google Search Console** after deploy: submit `sitemap.xml`, watch
   "Pages" indexing and the "ingatlan" query report; fix anything flagged.
8. **Service sub-pages** (e.g. `/szolgaltatasok/ingatlanfotozas-budapest`) if you
   want to rank each service term individually — only worth it with unique content
   per page (avoid thin/duplicate pages).
9. **Resolve the "24–48 óra" claim consistency** (PROJECT-NOTES TODO) — it appears
   in schema-adjacent copy; keep it identical everywhere.

---

## How to deploy these changes

```powershell
# from the homevisualstudio folder, in a normal terminal:
npm run build          # must pass (it does)
git add -A
git commit -m "SEO/GEO: structured data, sitemap, robots, llms.txt, geo keywords"
git push               # Vercel auto-deploys if connected
```

After deploy, sanity-check live:
- `https://homevisualstudio.com/robots.txt`
- `https://homevisualstudio.com/sitemap.xml`
- `https://homevisualstudio.com/llms.txt`
- Rich Results Test: paste the homepage + a blog post URL into
  https://search.google.com/test/rich-results to confirm schema is valid.
