import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto max-w-8xl px-6 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-28">
      <div className="grid items-end gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div>
          <span className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-px w-7 bg-foreground/40" />
            Ingatlan média ügynökség
          </span>
          <h1 className="display-xl text-[clamp(2.75rem,8vw,7rem)]">
            Ingatlanod.
            <br />
            Legjobb formájában.
          </h1>
        </div>

        <div className="lg:pb-3">
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Profi fotózás, videó és digitális megoldások ingatlanosoknak.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/kapcsolat">
              Ajánlatot kérek
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
