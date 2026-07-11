import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Eye, Activity, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/keratoconus")({
  head: () => ({
    meta: [
      { title: "Keratoconus Treatment in Pune | KeratoCare" },
      {
        name: "description",
        content:
          "Complete guide to keratoconus - symptoms, causes, diagnosis and modern treatment options. Specialty lens fitting & cross-linking in Pune.",
      },
      { property: "og:title", content: "Keratoconus - Symptoms, Causes & Treatment | KeratoCare" },
      {
        property: "og:description",
        content:
          "Understand keratoconus, how it's diagnosed and the modern treatments that stop progression and restore clear vision.",
      },
      { property: "og:url", content: "/keratoconus" },
      { property: "og:image", content: "/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/keratoconus" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalCondition",
          name: "Keratoconus",
          description: "Progressive eye condition where the cornea thins and bulges into a cone-like shape, distorting vision.",
          relevantSpecialty: "Ophthalmic",
          possibleTreatment: [
            { "@type": "MedicalTherapy", name: "Corneal Cross-linking" },
            { "@type": "MedicalDevice", name: "Scleral Lenses" },
            { "@type": "MedicalDevice", name: "RGP Contact Lenses" },
          ],
        }),
      },
    ],
  }),
  component: KeratoconusPage,
});

const SYMPTOMS = [
  "Blurring or ghosting that glasses can't fix",
  "Frequent, large prescription changes",
  "Halos & starbursts around lights at night",
  "Increased light sensitivity",
  "Eye rubbing - often linked to allergies",
  "Distortion or doubling of letters when reading",
];

const STAGES = [
  { stage: "Early", body: "Subtle blur, mild astigmatism, often diagnosed as 'just' astigmatism. Glasses still help." },
  { stage: "Moderate", body: "Vision becomes harder to correct with glasses. Specialty contact lenses become the gold standard." },
  { stage: "Advanced", body: "Significant corneal thinning and irregularity. Sclerals or, rarely, corneal grafts may be needed." },
];

const TREATMENTS = [
  { icon: ShieldCheck, title: "Corneal cross-linking", body: "A short outpatient procedure that strengthens the cornea and stops progression. The earlier, the better." },
  { icon: Eye, title: "Scleral lenses", body: "Large-diameter lenses that vault over the irregular cornea - the most common modern solution for clear vision." },
  { icon: Activity, title: "RGP & hybrid lenses", body: "Rigid gas-permeable and hybrid lens designs for milder or earlier cases. Often a great fit when sclerals aren't needed." },
];

function KeratoconusPage() {
  return (
    <SiteLayout>
      <header className="relative overflow-hidden bg-warm">
        <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
        <div className="container-page py-20 sm:py-28 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Specialty care</p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
            Keratoconus, explained - clearly and calmly.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A progressive condition where the cornea thins and bulges into a cone shape.
            Often missed for years - but modern care can stop it progressing and restore
            comfortable, sharp vision.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-soft hover:opacity-90">
              Book evaluation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/scleral-lenses" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold hover:bg-muted">
              Treatment with sclerals
            </Link>
          </div>
        </div>
      </header>

      <section className="container-page py-20 sm:py-24 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeader eyebrow="Common symptoms" title="Could this be keratoconus?" subtitle="If you recognise several of these, an evaluation is worth your time." />
        </div>
        <ul className="grid sm:grid-cols-2 gap-3">
          {SYMPTOMS.map((s) => (
            <li key={s} className="rounded-2xl bg-card border border-border p-4 flex gap-3">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/90">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-warm">
        <div className="container-page py-20 sm:py-24">
          <SectionHeader eyebrow="What causes it" title="Genetics, allergies & eye rubbing." subtitle="There's no single cause. It usually begins in the teens or twenties and progresses for 10–20 years before stabilising." />
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {[
              { t: "Genetics", b: "About 1 in 10 patients have a relative with keratoconus." },
              { t: "Eye rubbing", b: "Chronic rubbing - often from allergies - is a major risk factor." },
              { t: "Connective tissue", b: "Conditions affecting collagen can predispose the cornea." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl bg-card border border-border p-6">
                <h3 className="font-semibold text-lg">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-24">
        <SectionHeader eyebrow="How it progresses" title="Knowing the stage shapes the plan." />
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {STAGES.map((s, i) => (
            <div key={s.stage} className="relative rounded-3xl bg-gradient-to-br from-card to-warm border border-border p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Stage {i + 1}</div>
              <div className="mt-2 text-2xl font-semibold">{s.stage}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-warm">
        <div className="container-page py-20 sm:py-24">
          <SectionHeader eyebrow="Diagnosis" title="A 30-minute visit can answer years of questions." subtitle="At your first visit we run corneal topography - a precise 3D map of the cornea - alongside a vision and history review. You leave with a clear understanding of where you stand." />
        </div>
      </section>

      <section className="container-page py-20 sm:py-24">
        <SectionHeader eyebrow="Treatment options" title="Modern care that actually works." subtitle="Treatment depends on stage and lifestyle. Most patients only need lenses." />
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {TREATMENTS.map((t) => (
            <div key={t.title} className="rounded-2xl bg-card border border-border p-6 hover:shadow-lift transition-all">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="The next step"
        title="A calm evaluation is the most useful thing you can do today."
        body="Bring any reports you have. We'll explain exactly what's happening with your cornea - and what your real options are."
      />
    </SiteLayout>
  );
}
