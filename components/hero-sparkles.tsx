"use client";

import dynamic from "next/dynamic";

/**
 * Lazy-loads the tsparticles engine after hydration so it never blocks the
 * hero's first paint (LCP). The hero text renders instantly from the server;
 * the particle field fades in once the chunk arrives.
 */
const SparklesCore = dynamic(
  () => import("@/components/ui/sparkles").then((m) => m.SparklesCore),
  { ssr: false }
);

export function HeroSparkles() {
  return (
    <SparklesCore
      id="hero-sparkles"
      background="transparent"
      minSize={0.6}
      maxSize={1.4}
      particleDensity={80}
      speed={1}
      particleColor="#FFFFFF"
      className="h-full w-full"
    />
  );
}
