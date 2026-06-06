import type { Metadata } from "next";
import { ServiceBand } from "@/components/service-band";
import { ImageComparison } from "@/components/ui/image-comparison-slider";
import { services, featurePackage } from "@/lib/services";

export const metadata: Metadata = {
  title: "Szolgáltatások",
  description:
    "Profi ingatlanfotózás, videó, 360° virtuális bejárás, AI fotózás, hirdetési AI ügynök és landing page megoldások. Áraink és csomagjaink.",
};

const aiComparisons = [
  {
    beforeImage: "/images/ai/bedroom-before.jpg",
    afterImage: "/images/ai/bedroom-after.png",
    altBefore: "Hálószoba az átalakítás előtt",
    altAfter: "Hálószoba AI utómunkával",
  },
  {
    beforeImage: "/images/ai/exterior-before.jpg",
    afterImage: "/images/ai/exterior-after.png",
    altBefore: "Ingatlan külső nappali fényben",
    altAfter: "Ingatlan külső AI twilight hangulattal",
  },
  {
    beforeImage: "/images/ai/room-before.png",
    afterImage: "/images/ai/room-after.png",
    altBefore: "Szoba az átalakítás előtt",
    altAfter: "Szoba AI utómunkával",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Intro */}
      <section className="mx-auto max-w-8xl px-6 pb-12 pt-20 lg:px-10 lg:pb-16 lg:pt-28">
        <span className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-px w-7 bg-foreground/40" />
          Szolgáltatások
        </span>
        <h1 className="display-xl max-w-3xl text-[clamp(2.5rem,6.5vw,5.5rem)]">
          Minden, amivel az ingatlan eladja önmagát.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          A fotótól a videón át a digitális megoldásokig — egy helyen, ingatlanosokra
          szabva. Minden szolgáltatásunkkal időt és pénzt spórolunk neked.
        </p>
      </section>

      <div className="flex flex-col gap-1">
        {services.map((service) => (
          <section
            key={service.slug}
            id={service.slug}
            className="scroll-mt-24"
          >
            <ServiceBand
              title={service.title}
              image={service.image}
              imagePosition={service.imagePosition}
              tagline={service.tagline}
              badge={service.badge}
            />

            <div className="mx-auto grid max-w-8xl gap-10 px-6 py-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20 lg:px-10 lg:py-20">
              <div>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  {service.name}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>

              <div className="lg:pt-1">
                <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Árak
                </h3>
                <dl className="mt-5 divide-y divide-border">
                  {service.prices.map((p) => (
                    <div
                      key={p.label}
                      className="flex items-baseline justify-between gap-4 py-4"
                    >
                      <dt className="text-sm text-foreground">{p.label}</dt>
                      <dd className="text-right">
                        <span className="font-display text-xl font-semibold">
                          {p.amount}
                        </span>
                        {p.note && (
                          <span className="ml-2 text-xs text-muted-foreground">
                            {p.note}
                          </span>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* AI photography before/after comparison sliders */}
            {service.slug === "ai-fotozas" && (
              <div className="bg-surface py-16 lg:py-24">
                <div className="mx-auto max-w-8xl px-6 lg:px-10">
                  <h2 className="display-xl max-w-2xl text-[clamp(1.875rem,4vw,3rem)]">
                    Látványos eredmény, extra teendők nélkül
                  </h2>
                  <p className="mt-4 max-w-xl text-muted-foreground">
                    Húzd el a csúszkát, és nézd meg, mit hoz ki az AI az ingatlanügynök
                    által küldött képekből.
                  </p>
                  <div className="mt-12 flex flex-col gap-12">
                    {aiComparisons.map((c) => (
                      <ImageComparison key={c.beforeImage} {...c} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Recommended package */}
      <section className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="overflow-hidden rounded-3xl bg-foreground px-8 py-12 text-background lg:px-16 lg:py-16">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-background/60">
            Ajánlott csomag
          </span>
          <div className="mt-4 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                {featurePackage.name}
              </h2>
              <p className="mt-4 max-w-md text-background/70">
                {featurePackage.description}
              </p>
            </div>
            <div className="text-left lg:text-right">
              <div className="font-display text-5xl font-semibold">
                {featurePackage.amount}
              </div>
              <div className="mt-1 text-sm text-background/60 line-through">
                {featurePackage.note}
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Az árak tájékoztató jellegűek. Az egyedi igényekről egyeztetés alapján adunk
          árajánlatot.
        </p>
      </section>
    </>
  );
}
