import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSparkles } from "@/components/hero-sparkles";

export function Hero() {
  return (
    <section className="relative isolate -mt-[72px] overflow-hidden bg-[#0A0A0A] text-white">
      {/* Sparkles particle field (lazy-loaded, never blocks LCP) */}
      <div className="pointer-events-none absolute inset-0">
        <HeroSparkles />
      </div>

      {/* Edge vignette so particles fade toward the borders */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,10,10,0.85)_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-8xl flex-col items-center justify-center px-6 py-28 text-center">
        <span className="mb-7 inline-flex animate-fade-up items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/55">
          <span className="h-px w-7 bg-white/40" />
          Ingatlan média ügynökség · Budapest & Budaörs
        </span>

        <h1 className="display-xl animate-fade-up text-[clamp(2.75rem,8vw,7rem)] text-white [animation-delay:90ms]">
          Ingatlanod.
          <br />
          Legjobb formájában.
        </h1>

        {/* Light beams under the headline */}
        <div className="relative mt-4 h-8 w-[min(36rem,90%)] animate-fade-up [animation-delay:200ms]">
          <div className="absolute inset-x-[10%] top-0 h-[2px] w-4/5 bg-gradient-to-r from-transparent via-white to-transparent blur-sm" />
          <div className="absolute inset-x-[10%] top-0 h-px w-4/5 bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="absolute inset-x-[30%] top-0 h-[3px] w-2/5 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-sm" />
          <div className="absolute inset-x-[30%] top-0 h-px w-2/5 bg-gradient-to-r from-transparent via-white/80 to-transparent" />
          {/* radial mask to keep the beams soft at the ends */}
          <div className="absolute inset-0 bg-[#0A0A0A] [mask-image:radial-gradient(220px_60px_at_top,transparent_20%,white)]" />
        </div>

        <p className="mt-7 max-w-xl animate-fade-up text-lg text-white/70 [animation-delay:280ms] sm:text-xl">
          Professzionális ingatlanfotózás, videó, 360° virtuális bejárás és AI
          megoldások ingatlanosoknak — Budapesten és az agglomerációban.
        </p>

        <div className="mt-9 flex animate-fade-up flex-col items-center gap-4 [animation-delay:360ms] sm:flex-row">
          <Button asChild size="lg">
            <Link href="/kapcsolat">
              Ajánlatot kérek
              <ArrowRight />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/25 text-white hover:border-white hover:bg-white hover:text-black"
          >
            <Link href="/szolgaltatasok">Szolgáltatások és árak</Link>
          </Button>
        </div>

        {/* Scroll cue */}
        <div
          aria-hidden
          className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-[0.625rem] uppercase tracking-[0.2em] text-white/35">
            Görgess
          </span>
          <span className="h-10 w-px overflow-hidden bg-white/10">
            <span className="block h-full w-full origin-top animate-scroll-line bg-white/50" />
          </span>
        </div>
      </div>
    </section>
  );
}
