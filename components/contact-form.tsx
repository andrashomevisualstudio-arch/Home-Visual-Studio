"use client";

import * as React from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdqdojd";

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const baseField =
  "w-full rounded-xl border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/40";

function fieldClass(hasError: boolean) {
  return cn(
    baseField,
    hasError ? "border-destructive focus:border-destructive focus:ring-destructive/30" : "border-input"
  );
}

export function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string | null>(null);
  const [errors, setErrors] = React.useState<FieldErrors>({});

  function validate(form: HTMLFormElement): FieldErrors {
    const data = new FormData(form);
    const next: FieldErrors = {};
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name) next.name = "Kérjük, add meg a neved.";
    if (!email) next.email = "Kérjük, add meg az email-címed.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Érvényes email-címet adj meg (pl. nev@cim.hu).";
    if (!message) next.message = "Írd le röviden, miben segíthetünk.";
    return next;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const found = validate(form);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      // Move focus to the first invalid field.
      const firstKey = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    setErrors({});
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
        <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
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
            Név <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Teljes neved"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass(!!errors.name)}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-sm text-destructive">
              {errors.name}
            </p>
          )}
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
            className={fieldClass(false)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email <span className="text-primary">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="email@cim.hu"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldClass(!!errors.email)}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-sm text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Üzenet <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Mesélj az ingatlanról és arról, miben segíthetünk…"
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(fieldClass(!!errors.message), "min-h-[140px] resize-y")}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <p className="text-xs text-muted-foreground">
        <span className="text-primary">*</span> kötelező mező
      </p>

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
