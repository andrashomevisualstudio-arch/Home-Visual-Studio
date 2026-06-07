const STEPS = [
  {
    n: "01",
    title: "Egyeztetés",
    text: "Megbeszéljük az ingatlant és a céljaidat, és kiválasztjuk a hozzá leginkább illő szolgáltatásokat.",
  },
  {
    n: "02",
    title: "Forgatás & fotózás",
    text: "Profi, full-frame technikával rögzítjük az ingatlant — a legjobb fényben, a legjobb szögekből.",
  },
  {
    n: "03",
    title: "Kész anyag",
    text: "A teljes utómunkával ellátott, piacképes anyagot jellemzően 24–48 órán belül átadjuk.",
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-28">
      <span className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        <span className="h-px w-7 bg-primary" />
        Hogyan dolgozunk
      </span>
      <h2 className="display-xl max-w-2xl text-[clamp(2rem,5vw,3.5rem)]">
        Egyszerű folyamat, gyors eredmény
      </h2>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {STEPS.map((s) => (
          <div key={s.n} className="border-t border-border pt-6">
            <div className="font-display text-4xl font-semibold text-primary">
              {s.n}
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
