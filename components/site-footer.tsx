import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

const NAV = [
  { href: "/szolgaltatasok", label: "Szolgáltatások" },
  { href: "/blog", label: "Blog" },
  { href: "/kapcsolat", label: "Kapcsolat" },
  { href: "/#gyik", label: "Gyakori kérdések" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_0.8fr_1fr]">
          <div>
            <Link
              href="/"
              className="font-display text-2xl font-semibold tracking-tight"
            >
              Home Visual Studio
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/60">
              Professzionális ingatlanfotózás, videó és digitális megoldások
              ingatlanosoknak. Ingatlanod a legjobb formájában.
            </p>
            <p className="mt-4 inline-flex max-w-xs items-start gap-2 text-sm leading-relaxed text-background/60">
              <MapPin className="mt-0.5 size-4 shrink-0 text-background/40" />
              <span>
                {site.geo.city} · {site.geo.primaryTowns.join(", ")} —{" "}
                {site.geo.radiusLabel}
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-background/50">
              Szolgáltatások
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/szolgaltatasok#${s.slug}`}
                    className="text-sm text-background/80 transition-colors hover:text-background"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-background/50">
              Oldalak
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/80 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-background/50">
              Kapcsolat
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-sm text-background/80 transition-colors hover:text-background"
                >
                  <Mail className="size-4 text-background/40" />
                  {site.email}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneE164}`}
                  className="inline-flex items-center gap-2 text-sm text-background/80 transition-colors hover:text-background"
                >
                  <Phone className="size-4 text-background/40" />
                  {site.phone}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-background/45">
              Ajánlatkérésre 24 órán belül válaszolunk.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-background/15 pt-8 text-xs text-background/50 sm:flex-row sm:items-center">
          <p>© {year} Home Visual Studio. Minden jog fenntartva.</p>
          <p>homevisualstudio.com</p>
        </div>
      </div>
    </footer>
  );
}
