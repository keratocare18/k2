import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronDown, ArrowRight, Phone, CalendarCheck, Eye, Droplets, Shield, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";
import { CLINIC } from "@/lib/clinic";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export const Route = createFileRoute("/rgp-lenses")({
  head: () => ({
    meta: [
      { title: "RGP Lenses in Pune - Standard & Flexible RGP | KeratoCare" },
      {
        name: "description",
        content:
          "Standard and Advanced Flexible RGP lenses in Pune for keratoconus and irregular corneas. Thinner, more comfortable, sharper vision — custom-fitted at KeratoCare.",
      },
      { property: "og:title", content: "RGP Lenses - Standard & Advanced Flexible RGP | KeratoCare" },
      {
        property: "og:description",
        content:
          "Next-generation Flexible RGP lenses for keratoconus with high oxygen transmission and natural aspheric design. Custom-fitted in Pune.",
      },
      { property: "og:url", content: "/rgp-lenses" },
    ],
    links: [{ rel: "canonical", href: "/rgp-lenses" }],
  }),
  component: RgpLensesPage,
});

const CANDIDATES = [
  "Keratoconus — especially early to moderate stages where corneal shape is irregular",
  "Irregular cornea — from surgery, injury, or a condition present since birth",
  "Poor vision with glasses or soft lenses — that just doesn't feel sharp enough",
  "Post-surgical cornea — after LASIK, PKP, or other corneal procedures",
  "High myopia or high astigmatism — where soft lenses don't give stable vision",
  "Current RGP wearer — looking for more comfort than your existing lens",
];

const COMPARISON_ROWS = [
  { feature: "Rigidity", standard: "Conventional rigid material", flexible: "Flexible material — more forgiving on the eye" },
  { feature: "Thickness", standard: "Standard thickness", flexible: "Thinner design — noticeably lighter on the eye" },
  { feature: "Oxygen (Dk)", standard: "Moderate", flexible: "High — excellent oxygen supply" },
  { feature: "Lens design", standard: "Mostly spherical", flexible: "Natural aspheric — fits the eye's shape more naturally" },
  { feature: "Durability", standard: "Standard", flexible: "Highly durable (drop-test validated)" },
  { feature: "Comfort", standard: "Adjustment period needed", flexible: "Shorter adaptation — great for first-time or sensitive wearers" },
  { feature: "Best for", standard: "Budget-conscious, established wearers", flexible: "Keratoconus, comfort-sensitive and new RGP wearers" },
];

const FLEXIBLE_BENEFITS = [
  {
    icon: Eye,
    title: "Thinner than you'd expect",
    body: "Engineered to be among the thinnest RGP lenses available — center thickness of just 0.13mm at -3.00D. Thinner = lighter = less sensation on the eye.",
  },
  {
    icon: Droplets,
    title: "High oxygen. Healthy cornea.",
    body: "Excellent oxygen transmission — keeping your eyes fresh, white and healthy even during long hours of wear. Your eyes get to breathe throughout the day.",
  },
  {
    icon: Sparkles,
    title: "Fits your eye more naturally",
    body: "A Natural Aspheric design follows the natural curve of your cornea rather than forcing a rigid fit. Paired with a larger diameter, this improves centration and stability. Better fit = stable vision = less lens movement.",
  },
  {
    icon: Shield,
    title: "Built to last",
    body: "Advanced Material Technology makes this lens highly durable compared to conventional RGP materials — validated by standardised drop-testing — with flexibility designed into the material itself. Less chance of breakage. Better long-term value.",
  },
];

const PROCESS = [
  { step: "01", title: "Corneal mapping", body: "We scan your cornea using a topographer to understand its exact shape and irregularity." },
  { step: "02", title: "Clinical assessment", body: "We check your current vision, eye health and lens history." },
  { step: "03", title: "Lens selection", body: "Based on your cornea, we recommend the most suitable lens type — standard RGP, Advanced Flexible RGP, or scleral." },
  { step: "04", title: "Trial fitting", body: "You try the lens in clinic so we can assess fit and comfort together." },
  { step: "05", title: "Genuine guidance", body: "We tell you what we genuinely recommend — not what is most expensive." },
];

const FAQS = [
  { q: "Do RGP lenses always feel uncomfortable?", a: "Standard RGP lenses require a brief adjustment period of 1–2 weeks. However, our Advanced Flexible RGP is engineered to reduce this adaptation time significantly. Many patients who previously gave up on RGP lenses find this design noticeably more comfortable from the very first wear." },
  { q: "Can RGP lenses help with keratoconus?", a: "Yes — RGP lenses are one of the most effective non-surgical options for keratoconus. By creating a smooth optical surface over the irregular cornea, they deliver far sharper vision than glasses or soft contact lenses." },
  { q: "How do RGP lenses differ from scleral lenses?", a: "Both are rigid lenses but differ in size and placement. RGP lenses are smaller and sit directly on the cornea. Scleral lenses are larger and vault over the cornea, resting on the white of the eye — offering enhanced comfort for advanced keratoconus or sensitive eyes. During your consultation, we will recommend the option best suited to your eye shape and daily needs." },
  { q: "What is the lifespan of RGP lenses?", a: "With proper care, RGP lenses typically last 1.5 to 2 years. Our Advanced Flexible RGP lenses offer enhanced durability compared to standard materials, ensuring they maintain their performance over time." },
  { q: "Is the Advanced Flexible RGP available at all clinics?", a: "The Advanced Flexible RGP is imported and available at select specialty clinics. We are among the few clinics in Pune offering this lens. We recommend it only when clinically appropriate — and we will be transparent if another design is better suited to your needs." },
  { q: "Can I switch to KeratoCare if I already wear RGP lenses?", a: "Absolutely. Many patients come to us because their current RGP lenses are uncomfortable or fail to deliver sharp vision. We will assess your existing fit and recommend improvements, often with a different design or material." },
];

function RgpLensesPage() {
  return (
    <SiteLayout>
      <header className="relative overflow-hidden bg-warm">
        <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="container-page py-20 sm:py-28 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">RGP lenses Pune</p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
            RGP Lenses — Clear Vision. Better Comfort. Fitted for You.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Many patients try RGP lenses and give up — not because RGP doesn't work, but because they never had the right
            lens. At KeratoCare, we fit both standard RGP lenses and our Next-Generation Flexible RGP — one of the most
            comfortable RGP options available today.
          </p>
          <p className="mt-4 text-sm text-muted-foreground/80">
            Specially suited for keratoconus, irregular cornea, and patients who have struggled with RGP comfort before.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-soft hover:opacity-90 transition-opacity"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp us for a free query
            </a>
            <a
              href={`tel:${CLINIC.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold hover:bg-muted transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {CLINIC.phoneDisplay}
            </a>
          </div>
        </div>
      </header>

      <section className="bg-warm">
        <div className="container-page py-20 sm:py-24 grid lg:grid-cols-2 gap-12 items-start">
          <SectionHeader
            eyebrow="Who it's for"
            title="Are RGP lenses right for you?"
            subtitle="You may benefit from RGP lenses if you have:"
          />
          <div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {CANDIDATES.map((c) => (
                <li key={c} className="rounded-2xl bg-card border border-border p-4 flex gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90">{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <p className="text-sm text-foreground/85 leading-relaxed">
                <strong>Genuine note:</strong> Not everyone needs an RGP lens. At your consultation, we will genuinely
                recommend what works best for your cornea and your lifestyle — whether that's RGP, scleral, or another
                option.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-24">
        <SectionHeader
          eyebrow="Patient education"
          title="What is an RGP lens?"
        />
        <div className="mt-10 max-w-3xl">
          <p className="text-base text-foreground/85 leading-relaxed">
            RGP stands for <strong>Rigid Gas Permeable</strong> lens. Unlike soft lenses, RGP lenses are made from a firm
            but oxygen-permeable material that holds its shape on your eye.
          </p>
          <p className="mt-4 text-base text-foreground/85 leading-relaxed">
            Because they hold their shape, they create a smooth optical surface in front of the cornea — which is why they
            give sharper, more stable vision than soft lenses, especially in conditions like keratoconus where the cornea
            is irregularly shaped.
          </p>
          <p className="mt-4 text-base text-foreground/85 leading-relaxed">
            In simple words: RGP lenses correct your vision by creating a "new front surface" for your eye — one that is
            perfectly smooth, even if your cornea is not. They allow high levels of oxygen to reach your eye, keeping your
            corneas healthy during long hours of wear.
          </p>
        </div>
        <div className="mt-8 rounded-2xl border border-teal/30 bg-teal/10 p-6 max-w-3xl">
          <p className="text-sm font-semibold text-teal-foreground">Did you know?</p>
          <p className="mt-1 text-sm text-foreground/85 leading-relaxed">
            For keratoconus, RGP lenses often give much sharper vision than glasses or soft contact lenses — because they
            correct the irregular shape of your cornea, not just the power.
          </p>
        </div>
      </section>

      <section className="container-page py-20 sm:py-24">
        <SectionHeader
          eyebrow="USP"
          title="Not all RGP lenses are the same"
          subtitle="At KeratoCare, we fit both standard RGP lenses and our Advanced Flexible RGP — here's how they differ."
        />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 pr-4 font-semibold text-muted-foreground w-1/5">Feature</th>
                <th className="text-left py-4 px-4 font-semibold text-muted-foreground w-2/5">Standard RGP</th>
                <th className="text-left py-4 px-4 font-semibold text-primary w-2/5 bg-primary/5 rounded-t-2xl">Advanced Flexible RGP</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.feature} className="border-b border-border">
                  <td className="py-4 pr-4 font-medium text-foreground">{row.feature}</td>
                  <td className="py-4 px-4 text-muted-foreground">{row.standard}</td>
                  <td className="py-4 px-4 text-foreground/85 bg-primary/5">{row.flexible}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          <strong>Most of our keratoconus patients</strong> who had given up on RGP lenses earlier have found the Advanced
          Flexible RGP significantly more comfortable.
        </p>
      </section>

      <section className="bg-warm">
        <div className="container-page py-20 sm:py-24">
          <SectionHeader
            eyebrow="Available at KeratoCare"
            title="Introducing the Advanced Flexible RGP Lens"
            subtitle="Next-generation RGP for keratoconus & sensitive eyes"
          />
          <p className="mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed">
            This is not a regular RGP lens. It is designed for patients who need the optical precision of RGP — but want a
            more comfortable, more durable wearing experience.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {FLEXIBLE_BENEFITS.map((b) => (
              <div key={b.title} className="rounded-2xl bg-card border border-border p-6 hover:shadow-lift transition-all">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Who is this lens especially for?</p>
            <ul className="mt-4 space-y-2">
              {[
                "Keratoconus patients in early to moderate stages",
                "Patients who tried RGP before and found it uncomfortable",
                "Patients who want sharp RGP vision without the heaviness of a conventional lens",
                "Patients who want a longer-lasting lens with less risk of breakage",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/85">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200/50 bg-amber-50/50 p-6 max-w-3xl">
            <p className="text-sm text-foreground/85 leading-relaxed">
              <strong>A note from KeratoCare:</strong> This lens is imported and not commonly available across all clinics in
              India. We recommend it for patients where the fit and clinical need is appropriate. At your consultation, we
              will tell you genuinely whether this lens is right for you — or whether a different design will serve you
              better.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-24">
        <SectionHeader
          eyebrow="Your first visit"
          title="What happens at your consultation?"
          subtitle="We know visiting a contact lens clinic for the first time can feel uncertain. Here is exactly what we do."
        />
        <ol className="mt-12 relative grid gap-4">
          <div aria-hidden className="absolute left-6 sm:left-7 top-3 bottom-3 w-px bg-border" />
          {PROCESS.map((s) => (
            <li key={s.step} className="relative grid grid-cols-[auto_1fr] gap-5 sm:gap-7 items-start">
              <div className="relative z-10 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-soft">
                {s.step}
              </div>
              <div className="rounded-2xl bg-card border border-border p-5 sm:p-6">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-warm">
        <div className="container-page py-16 sm:py-20">
          <SectionHeader align="center" eyebrow="Frequently asked" title="Common questions about RGP lenses" />
          <div className="mt-10 max-w-3xl mx-auto">
            <FaqAccordion faqs={FAQS} />
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-[1.05]">
            Tried RGP lenses before and gave up?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            It might not have been the right lens. Let's find out.
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            At KeratoCare, we take time to understand your eye, your history and what you need — before recommending
            anything. Whether you are newly diagnosed with keratoconus, or already wearing RGP lenses but struggling with
            comfort — we are here to help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-soft hover:opacity-90 transition-opacity"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp us — it's free to ask
            </a>
            <a
              href={`tel:${CLINIC.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold hover:bg-muted transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {CLINIC.phoneDisplay}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold hover:bg-muted transition-colors"
            >
              <CalendarCheck className="h-4 w-4" /> Book an appointment
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}

function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border-y border-border">
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
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                  isOpen ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="pb-6 pr-10 text-sm text-muted-foreground leading-relaxed animate-fade-in">{f.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
