"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";

const NAV_LINKS = [
  { href: "/szolgaltatasok", label: "Szolgáltatások" },
  { href: "/blog", label: "Blog" },
  { href: "/kapcsolat", label: "Kapcsolat" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  // Over the dark sparkles hero (home page, at the top) use light text.
  const onDark = pathname === "/" && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-background/0"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-8xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className={cn(
            "font-display text-lg font-semibold tracking-tight transition-colors",
            onDark && "text-white"
          )}
        >
          Home Visual Studio
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {/* Szolgáltatások — with hover/focus dropdown preview */}
          <div className="group relative">
            <Link
              href="/szolgaltatasok"
              className={cn(
                "inline-flex items-center gap-1 text-sm font-medium transition-colors",
                onDark
                  ? "text-white/70 hover:text-white"
                  : "text-muted-foreground hover:text-foreground",
                isActive("/szolgaltatasok") &&
                  (onDark ? "text-white" : "text-foreground")
              )}
            >
              Szolgáltatások
              <ChevronDown className="size-4 transition-transform duration-200 group-hover:rotate-180" />
            </Link>

            <div
              className={cn(
                "invisible absolute left-1/2 top-full z-50 w-[440px] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200",
                "group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
              )}
            >
              <div className="rounded-2xl border border-border bg-background p-2 shadow-xl">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/szolgaltatasok#${service.slug}`}
                    className="flex flex-col gap-0.5 rounded-xl px-4 py-3 transition-colors hover:bg-muted"
                  >
                    <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                      {service.name}
                      {service.badge && (
                        <span className="rounded-full bg-foreground px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-background">
                          {service.badge}
                        </span>
                      )}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {service.tagline}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Remaining links */}
          {NAV_LINKS.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                onDark
                  ? "text-white/70 hover:text-white"
                  : "text-muted-foreground hover:text-foreground",
                isActive(link.href) && (onDark ? "text-white" : "text-foreground")
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className={cn(
              "hidden sm:inline-flex",
              onDark && "bg-white text-black hover:bg-white/90"
            )}
          >
            <Link href="/kapcsolat">
              Ajánlatot kérek
              <ArrowRight />
            </Link>
          </Button>

          <button
            type="button"
            aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden",
              onDark ? "text-white" : "text-foreground"
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-8xl flex-col gap-1 px-6 py-4">
            <Link
              href="/szolgaltatasok"
              className="rounded-lg px-2 py-3 text-base font-medium text-foreground hover:bg-muted"
            >
              Szolgáltatások
            </Link>
            <div className="ml-2 flex flex-col border-l border-border pl-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/szolgaltatasok#${service.slug}`}
                  className="rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            {NAV_LINKS.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-3 text-base font-medium text-foreground hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full">
              <Link href="/kapcsolat">
                Ajánlatot kérek
                <ArrowRight />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
