import { ShieldCheck } from "lucide-react";

// TODO: confirm your full name and (optionally) add a real photo of yourself
// to replace the initials avatar below for an even more personal touch.
const FOUNDER_NAME = "András";
const FOUNDER_ROLE = "alapító · Home Visual Studio";

export function Founder() {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-8xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.3fr] lg:gap-20 lg:px-10 lg:py-28">
        {/* Avatar / signature */}
        <div className="flex flex-col items-start gap-5">
          <span className="flex size-24 items-center justify-center rounded-full bg-primary/10 font-display text-3xl font-semibold text-primary">
            {FOUNDER_NAME.slice(0, 1)}
          </span>
          <div>
            <div className="font-display text-lg font-semibold">{FOUNDER_NAME}</div>
            <div className="text-sm text-muted-foreground">{FOUNDER_ROLE}</div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <span className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-px w-7 bg-primary" />
            A stúdió mögött
          </span>
          <h2 className="display-xl text-[clamp(1.875rem,4.5vw,3rem)]">
            Személyes figyelem, profi szemlélet
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A Home Visual Studio-t azért indítottam, hogy az ingatlanosok végre
            olyan vizuális anyagot kapjanak, ami tényleg elad. Minden projektet
            személyesen viszek végig — a fotózástól az utómunkáig —, modern,
            full-frame technikával és a részletekre figyelő szemlélettel.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Új stúdióként minden egyes ügyfél számít: ezért dolgozom gyorsan, és
            addig csiszolom az anyagot, amíg elégedett nem leszel.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-border bg-background px-5 py-4">
            <ShieldCheck className="size-5 shrink-0 text-primary" />
            <span className="text-sm font-medium">
              Elégedettségi garancia — addig dolgozunk az anyagon, amíg nem
              tetszik.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
