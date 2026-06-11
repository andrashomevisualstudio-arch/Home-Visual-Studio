import { MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/reveal";

/**
 * Service-area section: real local coverage (Budaörs base + ~30–45 min
 * radius). Doubles as the on-page local-SEO content block — the town names
 * here are what Google matches against "ingatlanfotózás <település>".
 */
export function Coverage() {
  return (
    <section
      aria-labelledby="coverage-heading"
      className="border-y border-border bg-surface"
    >
      <div className="mx-auto grid max-w-8xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.4fr_1fr] lg:gap-20 lg:px-10 lg:py-28">
        <Reveal>
          <span className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-px w-7 bg-primary" />
            Szolgáltatási terület
          </span>
          <h2
            id="coverage-heading"
            className="display-xl text-[clamp(2rem,5vw,3.5rem)]"
          >
            Ingatlanfotózás Budaörsön, Budapesten és környékén
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Budaörsi bázissal dolgozunk, így Budapest budai oldalán és a
            délnyugati agglomerációban — {site.geo.radiusLabel} — vagyunk a
            leggyorsabbak. Máshol van az ingatlan? Egyeztetés alapján távolabb
            is vállalunk munkát.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Lefedett települések">
            {site.geo.areaServed.map((town) => (
              <li
                key={town}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium"
              >
                <MapPin className="size-3.5 text-primary" />
                {town}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Decorative radius graphic — Budaörs at the centre */}
        <Reveal delay={150} className="hidden lg:block">
          <div
            aria-hidden
            className="relative mx-auto aspect-square w-full max-w-sm"
          >
            <div className="absolute inset-0 rounded-full border border-border" />
            <div className="absolute inset-[18%] rounded-full border border-border" />
            <div className="absolute inset-[36%] rounded-full border border-primary/30" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="flex size-4 items-center justify-center">
                <span className="absolute size-4 animate-ping rounded-full bg-primary/30" />
                <span className="relative size-2.5 rounded-full bg-primary" />
              </span>
            </div>
            <span className="absolute left-1/2 top-[58%] -translate-x-1/2 font-display text-sm font-semibold">
              Budaörs
            </span>
            <span className="absolute right-[8%] top-[22%] text-xs text-muted-foreground">
              Budapest
            </span>
            <span className="absolute bottom-[20%] left-[10%] text-xs text-muted-foreground">
              Érd
            </span>
            <span className="absolute left-[14%] top-[30%] text-xs text-muted-foreground">
              Budakeszi
            </span>
            <span className="absolute bottom-[30%] right-[12%] text-xs text-muted-foreground">
              Törökbálint
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
