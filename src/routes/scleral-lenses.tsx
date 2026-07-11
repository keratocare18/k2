import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Sparkles, Eye, Clock, Heart } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/scleral-lenses")({
  head: () => ({
    meta: [
      { title: "Scleral Lenses in Pune - Custom Fitting | KeratoCare" },
      {
        name: "description",
        content:
          "Custom scleral lens fitting in Pune for keratoconus, irregular corneas & dry eye. Vaulted-fit design for sharp vision and all-day comfort.",
      },
      { property: "og:title", content: "Scleral Lenses - Custom Fitting in Pune | KeratoCare" },
      {
        property: "og:description",
        content:
          "Large-diameter scleral lenses for clear vision and all-day comfort. Custom-designed for your cornea.",
      },
      { property: "og:url", content: "/scleral-lenses" },
      { property: "og:image", content: "/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/scleral-lenses" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalProcedure",
          name: "Scleral Lens Fitting",
          description: "Custom scleral lens fitting for keratoconus, irregular corneas and dry eye in Pune.",
          procedureType: "Surgical",
          howPerformed: "Corneal topography, custom lens design, trial fitting, and follow-up.",
          preparation: "Full eye evaluation and corneal mapping.",
          followup: "Periodic check-ins for comfort, vision and lens fit.",
        }),
      },
    ],
  }),
  component: SclerelPage,
});

const BENEFITS = [
  { icon: Eye, title: "Sharp, stable vision", body: "Smoothes out an irregular cornea - most patients see clearly within minutes of the trial fit." },
  { icon: Heart, title: "All-day comfort", body: "Rests on the white of the eye, not the sensitive cornea. Many patients forget they're wearing them." },
  { icon: Sparkles, title: "Excellent for dry eye", body: "A built-in fluid reservoir continuously bathes the cornea - a real relief for severe dry eye." },
  { icon: Clock, title: "Lasts 12–24 months", body: "Built to last with a planned replacement schedule and routine follow-ups." },
];

const CANDIDATES = [
  "Keratoconus at any stage",
  "Post-LASIK ectasia",
  "Pellucid marginal degeneration",
  "Severe dry eye disease",
  "High astigmatism intolerant to other lenses",
];

const FIT_STEPS = [
  { n: "01", title: "Mapping", body: "Corneal topography and scleral imaging build a precise 3D model of your eye." },
  { n: "02", title: "Design", body: "Custom lens parameters - diameter, vault, edge profile - designed for your unique shape." },
  { n: "03", title: "Trial fit", body: "You wear a trial lens. We watch it settle, check vision, and refine in real time." },
  { n: "04", title: "Insertion training", body: "We teach you how to insert, remove and care for the lenses - gently, at your pace." },
  { n: "05", title: "Follow-up", body: "Check-ins to optimise comfort and protect long-term corneal health." },
];

function SclerelPage() {
  return (
    <SiteLayout>
      <header className="relative overflow-hidden bg-warm">
        <div aria-hidden className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="container-page py-20 sm:py-28 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Custom scleral lenses</p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
            Built to vault. Designed to disappear.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Scleral lenses are the modern gold standard for keratoconus and irregular
            corneas. Custom-shaped to your eye - they restore clarity without ever
            touching the cornea.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-soft hover:opacity-90">
              Book a trial fit <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/keratoconus" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold hover:bg-muted">
              Learn about keratoconus
            </Link>
          </div>
        </div>
      </header>

      <section className="container-page py-20 sm:py-24">
        <SectionHeader eyebrow="Why sclerals" title="What makes them different." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-2xl bg-card border border-border p-6 hover:shadow-lift transition-all">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-warm">
        <div className="container-page py-20 sm:py-24 grid lg:grid-cols-2 gap-12 items-start">
          <SectionHeader
            eyebrow="Who they're for"
            title="Built for difficult eyes that deserve clear vision."
            subtitle="If conventional lenses don't fit, slip, hurt - or no longer give you clear vision - sclerals are usually the answer."
          />
          <ul className="grid sm:grid-cols-2 gap-3">
            {CANDIDATES.map((c) => (
              <li key={c} className="rounded-2xl bg-card border border-border p-4 flex gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/90">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-20 sm:py-24">
        <SectionHeader eyebrow="The fitting process" title="Five careful steps. No rushing." subtitle="A great scleral fit is part precision, part patience. Here's how we get it right." />
        <ol className="mt-12 relative grid gap-4">
          <div aria-hidden className="absolute left-6 sm:left-7 top-3 bottom-3 w-px bg-border" />
          {FIT_STEPS.map((s) => (
            <li key={s.n} className="relative grid grid-cols-[auto_1fr] gap-5 sm:gap-7 items-start">
              <div className="relative z-10 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-soft">
                {s.n}
              </div>
              <div className="rounded-2xl bg-card border border-border p-5 sm:p-6">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="overflow-hidden border-y border-border bg-warm/80 py-3">
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-12">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                World-class Scleral Lens Technology
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Built for World-Class Vision
              </span>
            ))}
          </div>
          <div className="flex animate-marquee whitespace-nowrap gap-12" aria-hidden>
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                World-class Scleral Lens Technology
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Built for World-Class Vision
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Try them on"
        title="The clearest way to understand sclerals? Wear a trial pair."
        body="A trial fit at the clinic shows you exactly how sclerals feel and how they look - before any commitment."
      />
    </SiteLayout>
  );
}
