import { Link } from "@tanstack/react-router";
import { Phone, CalendarCheck } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = {
  eyebrow?: string;
  title?: string;
  body?: string;
};

export function CTASection({
  eyebrow = "Ready when you are",
  title = "You don't have to struggle with unclear vision alone.",
  body = "Talk to a specialty lens specialist. We'll walk you through your options - calmly, genuinely, with no pressure.",
}: Props) {
  return (
    <section className="container-page py-12 sm:py-16">
      <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 sm:p-14 shadow-lift">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal/30 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -left-12 h-60 w-60 rounded-full bg-white/10 blur-3xl"
        />
        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">{eyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1]">
            {title}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-primary-foreground/85 max-w-xl">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 text-sm font-semibold shadow-soft hover:bg-warm transition-colors"
            >
              <CalendarCheck className="h-4 w-4" /> Book appointment
            </Link>
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 text-primary-foreground px-6 py-3.5 text-sm font-semibold hover:bg-white/15 transition-colors backdrop-blur"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
            </a>
            <a
              href={`tel:${CLINIC.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 text-primary-foreground px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {CLINIC.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
