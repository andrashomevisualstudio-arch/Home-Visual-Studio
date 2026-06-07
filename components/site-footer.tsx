import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

const NAV = [
  { href: "/szolgaltatasok", label: "Szolgáltatások" },
  { href: "/blog", label: "Blog" },
  { href: "/kapcsolat", label: "Kapcsolat" },
];

const EMAIL = "andras.homevisualstudio@gmail.com";
const PHONE = "+36 30 793 0356";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="font-display text-2xl font-semibold tracking-tight"
            >
              Home Visual Studio
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/60">
              Profi fotózás, videó és digitális megoldások ingatlanosoknak.
              Ingatlanod a legjobb formájában.
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/60">
              Budapest budai oldala és környéke:{" "}
              {site.geo.primaryTowns.join(", ")} — {site.geo.radiusLabel}.
            </p>
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
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-1 text-sm text-background/80 transition-colors hover:text-background"
                >
                  {EMAIL}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="text-sm text-background/80 transition-colors hover:text-background"
                >
                  {PHONE}
                </a>
              </li>
            </ul>
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
