import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Kapcsolat",
  description:
    "Lépj kapcsolatba a Home Visual Studio-val. Kérj személyre szabott ajánlatot ingatlanfotózásra, videóra és digitális megoldásokra.",
};

const EMAIL = "andras.homevisualstudio@gmail.com";
const PHONE = "+36 30 793 0356";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <span className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-px w-7 bg-foreground/40" />
            Kapcsolat
          </span>
          <h1 className="display-xl text-[clamp(2.5rem,7vw,6rem)] uppercase">
            Lépjünk
            <br />
            kapcsolatba
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Írd meg, milyen ingatlanról van szó, és 24 órán belül jelentkezünk egy
            személyre szabott ajánlattal.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-4 transition-colors hover:border-foreground/30"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-foreground text-background">
                <Mail className="size-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  Email
                </span>
                <span className="font-medium">{EMAIL}</span>
              </span>
            </a>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-4 transition-colors hover:border-foreground/30"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-foreground text-background">
                <Phone className="size-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  Telefon
                </span>
                <span className="font-medium">{PHONE}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-background p-6 sm:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
