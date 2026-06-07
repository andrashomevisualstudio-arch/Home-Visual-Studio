import { Camera, Clock, Wand2, LayoutGrid } from "lucide-react";

// Factual capabilities — true from day one, no client count required.
const ITEMS = [
  { icon: Camera, title: "Full-frame MILC", sub: "Professzionális technika" },
  { icon: Clock, title: "24–48 óra", sub: "Átfutási idő" },
  { icon: Wand2, title: "Teljes utómunka", sub: "Minden képen" },
  { icon: LayoutGrid, title: "Minden egy kézben", sub: "Fotó, videó, digitális" },
];

export function Capabilities() {
  return (
    <section
      aria-label="Amit kínálunk"
      className="border-y border-border bg-background"
    >
      <div className="mx-auto grid max-w-8xl grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
        {ITEMS.map(({ icon: Icon, title, sub }) => (
          <div
            key={title}
            className="flex flex-col items-center gap-3 px-6 py-8 text-center lg:py-10"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon className="size-5" />
            </span>
            <div>
              <div className="font-display text-lg font-semibold">{title}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
