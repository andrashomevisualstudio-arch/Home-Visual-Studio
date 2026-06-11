/**
 * Central site configuration — single source of truth for SEO metadata,
 * structured data (JSON-LD) and contact info. Keep this in sync with the
 * footer / contact page.
 */

export const site = {
  name: "Home Visual Studio",
  /** Production URL (no trailing slash). */
  url: "https://homevisualstudio.com",
  /** Short tagline used across metadata. */
  tagline: "Ingatlanod a legjobb formájában.",
  /** Branded 1200×630 share card (regenerate from og-card.html if needed). */
  ogImage: "/og.png",

  email: "andras.homevisualstudio@gmail.com",
  phone: "+36 30 793 0356",
  /** E.164 form for tel: links and schema. */
  phoneE164: "+36307930356",

  /** Founder / author for E-E-A-T signals. */
  founder: "András",

  /**
   * Geographic targeting. Budaörs-based, serving the Buda side of Budapest and
   * the south-west agglomeration within ~30–45 min drive of Budaörs.
   */
  geo: {
    /** Base locality (NAP) — keep identical to the future Google Business Profile. */
    city: "Budaörs",
    region: "Pest megye",
    country: "HU",
    /** Budaörs centre — schema geo midpoint + service-radius origin. */
    latitude: 47.4597,
    longitude: 18.9577,
    /** ~30–45 min drive expressed as a radius (metres) for the schema GeoCircle. */
    serviceRadiusMeters: 25000,
    /** Plain-language radius used in copy. */
    radiusLabel: "kb. 30–45 perc Budaörstől",
    /** Named places we genuinely cover — drives local keywords + schema areaServed. */
    areaServed: [
      "Budapest",
      "Budaörs",
      "Budakeszi",
      "Érd",
      "Diósd",
      "Törökbálint",
      "Biatorbágy",
      "Tárnok",
    ],
    /** Compact town list for visible copy (the headline coverage). */
    primaryTowns: ["Budaörs", "Budakeszi", "Érd", "Diósd", "Törökbálint"],
  },

  priceRange: "20 000 Ft – 100 000 Ft",
} as const;

/**
 * Primary Hungarian keyword set, ordered by intent priority.
 * "Ingatlan média" is the head term; the rest are high-intent local/long-tail.
 */
export const keywords = [
  "ingatlan média",
  "ingatlanfotózás Budapest",
  "professzionális ingatlanfotózás",
  "ingatlan fotós Budapest",
  "ingatlan videó",
  "360 fokos virtuális bejárás",
  "virtuális bejárás Budapest",
  "AI ingatlanfotózás",
  "ingatlan marketing",
  "ingatlanos média ügynökség",
  "ingatlanhirdetés fotózás",
  "Home Visual Studio",
];

/** Build an absolute URL from a path. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}
