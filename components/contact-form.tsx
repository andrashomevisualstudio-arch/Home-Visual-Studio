"use client";

import * as React from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdqdojd";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground";

export function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setError(
          data?.errors?.[0]?.message ??
            "Hiba történt a küldés során. Kérjük, próbáld újra."
        );
        setStatus("error");
      }
    } catch {
      setError("Hálózati hiba. Kérjük, ellenőrizd a kapcsolatot és próbáld újra.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-start gap-4 rounded-2xl border border-border bg-surface p-8",
          className
        )}
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-foreground text-background">
          <Check className="size-6" />
        </span>
        <h3 className="font-display text-2xl font-semibold">Köszönjük!</h3>
        <p className="text-muted-foreground">
          Megkaptuk az üzeneted, hamarosan jelentkezünk egy személyre szabott
          ajánlattal.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Új üzenet
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-5", className)} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Név
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Teljes neved"
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Telefonszám
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+36 30 123 4567"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="email@cim.hu"
          className={fieldClass}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Üzenet
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Mesélj az ingatlanról és arról, miben segíthetünk…"
          className={cn(fieldClass, "min-h-[140px] resize-y")}
        />
      </div>

      {status === "error" && error && (
        <p
          role="alert"
          className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
        >
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="animate-spin" />
            Küldés…
          </>
        ) : (
          <>
            Ajánlatot kérek
            <ArrowRight />
          </>
        )}
      </Button>
    </form>
  );
}
