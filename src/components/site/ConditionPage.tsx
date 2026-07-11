import { Link } from "@tanstack/react-router";
import { Check, ArrowRight, CalendarCheck, Quote, ChevronDown } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "./SiteLayout";
import { SectionHeader } from "./SectionHeader";
import { CTASection } from "./CTASection";
import { CLINIC } from "@/lib/clinic";
import { WhatsAppIcon } from "./WhatsAppIcon";

export type ConditionPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  heroBadge?: string;
  symptoms: string[];
  affects: string[];
  solutions: { title: string; body: string }[];
  story: { name: string; challenge: string; journey: string; outcome: string; emotion: string };
  faqs: { q: string; a: string }[];
};

export function ConditionPage(p: ConditionPageProps) {
  return (
    <SiteLayout>
      <Hero {...p} />
      <Symptoms list={p.symptoms} />
      <Affects list={p.affects} />
      <Solutions list={p.solutions} />
      <Story story={p.story} />
      <Faqs faqs={p.faqs} />
      <CTASection />
    </SiteLayout>
  );
}

function Hero({ eyebrow, title, intro, heroBadge }: ConditionPageProps) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-warm via-background to-background" />
      <div aria-hidden className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
      <div className="container-page pt-16 pb-12 sm:pt-24 sm:pb-16 max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-teal" /> {heroBadge ?? "Condition"}
        </span>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
        <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.02] tracking-tight">
          {title}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-lift hover:opacity-90 transition-opacity"
          >
            <CalendarCheck className="h-4 w-4" /> Book evaluation
          </Link>
          <a
            href={CLINIC.whatsapp}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-6 py-3.5 text-sm font-semibold hover:bg-muted transition-colors"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}

function Symptoms({ list }: { list: string[] }) {
  return (
    <section className="container-page py-10 sm:py-14">
      <SectionHeader eyebrow="What you may notice" title="Common symptoms" />
      <ul className="mt-10 grid sm:grid-cols-2 gap-3">
        {list.map((s) => (
          <li key={s} className="flex gap-3 rounded-2xl border border-border bg-card p-5">
            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span className="text-sm text-foreground/85 leading-relaxed">{s}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Affects({ list }: { list: string[] }) {
  return (
    <section className="bg-warm">
      <div className="container-page py-10 sm:py-14 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
        <SectionHeader eyebrow="Who it affects" title="Patient profiles we see at the clinic" />
        <ul className="space-y-3">
          {list.map((s) => (
            <li key={s} className="flex gap-3 rounded-2xl bg-card border border-border p-5">
              <span className="h-2 w-2 mt-2 rounded-full bg-primary shrink-0" />
              <span className="text-sm text-foreground/85 leading-relaxed">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Solutions({ list }: { list: { title: string; body: string }[] }) {
  return (
    <section className="container-page py-10 sm:py-14">
      <SectionHeader
        eyebrow="What we can do"
        title="Available solutions"
        subtitle="We start with the gentlest option that genuinely solves the problem. Surgery, when ever needed, is the last step - not the first."
      />
      <div className="mt-10 grid md:grid-cols-2 gap-4">
        {list.map((s) => (
          <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Story({ story }: { story: ConditionPageProps["story"] }) {
  return (
    <section className="bg-warm">
      <div className="container-page py-10 sm:py-14">
        <SectionHeader eyebrow="Patient story" title="From worry to clear vision" />
        <article className="mt-10 grid lg:grid-cols-4 gap-4 max-w-5xl">
          {[
            { label: "Challenge", body: story.challenge },
            { label: "Treatment journey", body: story.journey },
            { label: "Outcome", body: story.outcome },
            { label: "How it felt", body: story.emotion },
          ].map((b) => (
            <div key={b.label} className="rounded-2xl bg-card border border-border p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{b.label}</div>
              <p className="mt-2 text-sm text-foreground/85 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </article>
        <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
          <Quote className="h-4 w-4 text-primary/40" /> {story.name}
        </div>
      </div>
    </section>
  );
}

function Faqs({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container-page py-10 sm:py-14">
      <SectionHeader align="center" eyebrow="Frequently asked" title="Genuine answers" />
      <div className="mt-10 max-w-3xl mx-auto divide-y divide-border border-y border-border">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-base sm:text-lg">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`} />
              </button>
              {isOpen && (
                <div className="pb-6 pr-10 text-sm text-muted-foreground leading-relaxed animate-fade-in">{f.a}</div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
          Book your evaluation <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
