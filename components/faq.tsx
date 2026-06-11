import { Plus } from "lucide-react";
import { faqItems } from "@/lib/faq";
import { Reveal } from "@/components/reveal";

/**
 * FAQ accordion built on native <details>/<summary> — fully keyboard
 * accessible without JavaScript. Content mirrors the FAQPage JSON-LD.
 */
export function Faq() {
  return (
    <section
      id="gyik"
      aria-labelledby="faq-heading"
      className="mx-auto max-w-8xl scroll-mt-24 px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <Reveal>
          <span className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-px w-7 bg-primary" />
            GYIK
          </span>
          <h2
            id="faq-heading"
            className="display-xl text-[clamp(2rem,5vw,3.5rem)]"
          >
            Gyakori kérdések
          </h2>
          <p className="mt-6 max-w-sm text-lg text-muted-foreground">
            Árak, átfutási idő, lefedettség — a leggyakoribb kérdések egy
            helyen. Ha mást kérdeznél, írj bátran.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="divide-y divide-border border-y border-border">
            {faqItems.map((item) => (
              <details key={item.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-display text-lg font-medium transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 group-open:rotate-45 group-open:border-primary group-open:text-primary">
                    <Plus className="size-4" />
                  </span>
                </summary>
                <p className="pb-7 pr-12 leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
