/**
 * JSON-LD structured data builders. These power rich results in Google and
 * give AI search engines (GEO) clean, citable facts about the business.
 */
import { site, absoluteUrl } from "@/lib/site";
import { services, type Service } from "@/lib/services";
import type { PostMeta } from "@/lib/posts";

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

/**
 * areaServed as named Places (for local keyword relevance) plus a GeoCircle
 * that expresses the real ~30–45 min service radius around Budaörs.
 */
function areaServedNodes(): Record<string, unknown>[] {
  return [
    ...site.geo.areaServed.map((name) => ({ "@type": "Place", name })),
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: site.geo.latitude,
        longitude: site.geo.longitude,
      },
      geoRadius: String(site.geo.serviceRadiusMeters),
    },
  ];
}

/**
 * LocalBusiness + Organization node. Service-area business (Budapest +
 * agglomeráció) with no public storefront, so we use areaServed instead of a
 * street address.
 */
export function organizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": ORG_ID,
    name: site.name,
    url: site.url,
    image: absoluteUrl(site.ogImage),
    logo: absoluteUrl(site.ogImage),
    description:
      "Ingatlan média ügynökség Budapesten: professzionális ingatlanfotózás, videó, 360° virtuális bejárás és AI fotózás ingatlanosoknak.",
    email: site.email,
    telephone: site.phone,
    priceRange: site.priceRange,
    founder: { "@type": "Person", name: site.founder },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.geo.city,
      addressRegion: site.geo.region,
      addressCountry: site.geo.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: areaServedNodes(),
    knowsLanguage: ["hu"],
    sameAs: [] as string[], // TODO: add Instagram / Facebook / Google Business Profile URLs
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Ingatlan média szolgáltatások",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.tagline,
        },
      })),
    },
  };
}

/** WebSite node — enables the sitelinks search box potential + brand entity. */
export function websiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    inLanguage: "hu-HU",
    publisher: { "@id": ORG_ID },
  };
}

/** A single Service offering with pricing — used on the services page. */
export function serviceSchema(s: Service): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.title,
    description: s.description,
    provider: { "@id": ORG_ID },
    areaServed: areaServedNodes(),
    url: absoluteUrl(`/szolgaltatasok#${s.slug}`),
    offers: s.prices.map((p) => ({
      "@type": "Offer",
      name: p.label,
      price: p.amount.replace(/[^\d]/g, ""),
      priceCurrency: "HUF",
      availability: "https://schema.org/InStock",
    })),
  };
}

/** BreadcrumbList — helps Google render breadcrumb rich results. */
export function breadcrumbSchema(
  trail: { name: string; path: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** BlogPosting node for individual articles. */
export function blogPostingSchema(post: PostMeta): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage ? absoluteUrl(post.coverImage) : undefined,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "hu-HU",
    url: absoluteUrl(`/blog/${post.slug}`),
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: { "@type": "Person", name: site.founder },
    publisher: { "@id": ORG_ID },
  };
}
