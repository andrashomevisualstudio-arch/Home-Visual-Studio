import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceBandProps = {
  title: string;
  image: string;
  tagline?: string;
  href?: string;
  badge?: string;
  /** object-position for the background image (default "center"). */
  imagePosition?: string;
  /** Index, used to vary the focal point a little. */
  priority?: boolean;
  className?: string;
};

export function ServiceBand({
  title,
  image,
  tagline,
  href,
  badge,
  imagePosition = "center",
  priority,
  className,
}: ServiceBandProps) {
  const inner = (
    <div
      className={cn(
        "group relative flex h-[44vw] max-h-[460px] min-h-[260px] w-full items-end overflow-hidden",
        className
      )}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="100vw"
        priority={priority}
        style={{ objectPosition: imagePosition }}
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
      />
      {/* Legibility overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/10" />

      <div className="relative z-10 mx-auto flex w-full max-w-8xl items-end justify-between gap-6 px-6 pb-8 lg:px-10 lg:pb-12">
        <div>
          {badge && (
            <span className="mb-3 inline-block rounded-full bg-white/15 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-white backdrop-blur">
              ★ {badge}
            </span>
          )}
          <h3 className="display-xl text-[clamp(2.25rem,7vw,5.5rem)] uppercase text-white">
            {title}
          </h3>
          {tagline && (
            <p className="mt-2 max-w-md text-sm text-white/80 sm:text-base">
              {tagline}
            </p>
          )}
        </div>

        {href && (
          <span className="hidden size-14 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-colors group-hover:bg-white group-hover:text-black sm:flex">
            <ArrowUpRight className="size-6" />
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label={title} className="block">
        {inner}
      </Link>
    );
  }
  return inner;
}
