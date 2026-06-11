import { Hero } from "@/components/hero";
import { ServiceBand } from "@/components/service-band";
import { Capabilities } from "@/components/capabilities";
import { HowItWorks } from "@/components/how-it-works";
import { Coverage } from "@/components/coverage";
import { Founder } from "@/components/founder";
import { Faq } from "@/components/faq";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { faqSchema } from "@/lib/schema";
import { faqItems } from "@/lib/faq";
import { services } from "@/lib/services";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />

      <Hero />

      {/* Factual capabilities — true credibility from day one */}
      <Capabilities />

      {/* Full-width service bands */}
      <section aria-label="Szolgáltatások" className="mt-6 flex flex-col gap-1">
        {services.map((service, i) => (
          <ServiceBand
            key={service.slug}
            title={service.title}
            image={service.image}
            imagePosition={service.imagePosition}
            tagline={service.tagline}
            badge={service.badge}
            href={`/szolgaltatasok#${service.slug}`}
            index={i + 1}
            priority={i === 0}
          />
        ))}
      </section>

      {/* Process + local coverage + founder = honest trust building */}
      <HowItWorks />
      <Coverage />
      <Founder />

      {/* FAQ — answers objections right before the CTA (and earns rich results) */}
      <Faq />

      {/* Get in touch */}
      <section id="kapcsolat" className="bg-surface py-20 lg:py-28">
        <div className="mx-auto grid max-w-8xl gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-10">
          <Reveal>
            <h2 className="display-xl text-[clamp(2.5rem,6vw,5rem)] uppercase">
              Dolgozzunk
              <br />
              együtt
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Mondd el, milyen ingatlanról van szó, és összeállítjuk a
              leghatékonyabb média- és marketingcsomagot hozzá.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
