import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Eye,
  Sparkles,
  Heart,
  ShieldCheck,
  GraduationCap,
  Microscope,
  CalendarCheck,
  ArrowRight,
  Check,
  Star,
   ChevronDown,
   Quote,
   MapPin,
 } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import heroEye from "@/assets/assets/hero-eye.jpg";
import trustAvatar1 from "@/assets/avatars/trust-avatar-1.jpg";
import trustAvatar2 from "@/assets/avatars/trust-avatar-2.jpg";
import trustAvatar3 from "@/assets/avatars/trust-avatar-3.jpg";
import blurryBefore from "@/assets/assets/treatments/blurry-vision/before.jpg";
import blurryAfter from "@/assets/assets/treatments/blurry-vision/after.jpg";
import nightBefore from "@/assets/assets/treatments/night-glare/before.jpg";
import nightAfter from "@/assets/assets/treatments/night-glare/after.jpg";
import lightBefore from "@/assets/assets/treatments/light-sensitivity/before.jpg";
import lightAfter from "@/assets/assets/treatments/light-sensitivity/after.jpg";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";
import { SymptomChecker } from "@/components/site/SymptomChecker";
import { CLINIC } from "@/lib/clinic";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KeratoCare - Keratoconus & Scleral Lens Specialists in Pune" },
      {
        name: "description",
        content:
          "Pune's specialty contact lens center for keratoconus, scleral lenses & irregular cornea cases. Genuine guidance, advanced technology, clearer vision.",
      },
      { property: "og:title", content: "KeratoCare - Specialty Contact Lens Center, Pune" },
      {
        property: "og:description",
        content:
          "Custom scleral lenses, RGP & specialty contact lens solutions for keratoconus. 500+ patients, advanced corneal mapping.",
      },
      { property: "og:image", content: heroEye },
      { name: "twitter:image", content: heroEye },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroEye, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "KeratoCare - Keratoconus & Specialty Lens Clinic",
          description:
            "Specialty contact lens clinic in Pune for keratoconus, scleral lenses & irregular cornea management.",
          telephone: "+918432861131",
          medicalSpecialty: "Ophthalmic",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Shop No. 137, Mahalaxmi Metro Square, Jogeshwari Lane, Budhwar Peth",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            postalCode: "411002",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 10:00-19:00",
          priceRange: "₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "120",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

const PROBLEMS = [
  { title: "Blurry vision that glasses can't fix", body: "Even with the latest prescription, the world stays slightly out of focus." },
  { title: "Ghosting & doubled letters", body: "Reading feels like every line has a faint shadow behind it." },
  { title: "Frequent prescription changes", body: "Your number keeps shifting - and the new glasses don't really help." },
  { title: "Glare & halos at night", body: "Headlights smear, streetlights bloom - night driving feels unsafe." },
];

const WHY = [
  { icon: Eye, title: "Specialty focus", body: "Keratoconus and irregular corneas are not a sideline here. They're what we do every single day." },
  { icon: Microscope, title: "Advanced technology", body: "Corneal topography, scleral imaging and custom-design lens systems trusted by specialists worldwide." },
  { icon: Heart, title: "Genuine advice", body: "We tell you what you need - not what we want to sell. If lenses aren't right for you, we'll say so." },
  { icon: GraduationCap, title: "Patient education", body: "You'll leave understanding your condition - what's happening, what's changing, what's next." },
  { icon: ShieldCheck, title: "Difficult cases welcome", body: "Advanced keratoconus, irregular corneas, post-LASIK ectasia - these are the cases we see every day." },
  { icon: Sparkles, title: "Long-term care", body: "Your fitting is the start, not the end. We follow up for comfort, vision and lens fit over years." },
];

const PROCESS = [
  { step: "01", title: "Book a consultation", body: "Tell us briefly what you're experiencing. We'll find a time that works - clinic or WhatsApp." },
  { step: "02", title: "Detailed evaluation", body: "Corneal topography, scleral imaging, vision history and a calm conversation about your goals." },
  { step: "03", title: "Lens trial", body: "We try a custom-fit specialty lens designed for your cornea - and you see the difference in real time." },
  { step: "04", title: "Comfort optimisation", body: "Small refinements in fit, edge profile and material until the lens feels almost invisible." },
  { step: "05", title: "Long-term follow-up", body: "Periodic check-ins to protect vision, lens health and corneal stability over the years." },
];

const STORIES = [
  {
    name: "Aarav, 22 · Engineering student",
    challenge: "Diagnosed with advanced keratoconus in his second year of college. Glasses had stopped working and he was struggling to read the board.",
    journey: "Corneal topography confirmed the diagnosis. We coordinated cross-linking to halt progression, then fitted custom scleral lenses across two visits.",
    outcome: "6/6 vision restored in both eyes. Back to coding, gaming and driving - comfortably, all day.",
    emotion: "'I'd quietly accepted that my vision would just keep getting worse. Walking out seeing clearly felt unreal.'",
  },
  {
    name: "Priya, 29 · Architect",
    challenge: "Years of contact lens discomfort. Two specialists had told her she'd 'just have to live with it.'",
    journey: "Full scleral profilometry revealed why off-the-shelf lenses kept failing. A custom RGP was designed for her exact corneal shape.",
    outcome: "Stable, sharp vision and all-day comfort by the end of week one. Now in her second year of pain-free wear.",
    emotion: "'For the first time, my eyes don't run my day. I forget the lenses are even there.'",
  },
  {
    name: "Rohan, 35 · Software engineer",
    challenge: "Six years after LASIK, severe halos and double vision had ended his night driving. Diagnosed with post-LASIK ectasia.",
    journey: "Cross-linking with a partner surgeon to stabilise the cornea, followed by custom scleral lens fitting at the clinic.",
    outcome: "Night halos reduced by ~80%. 6/6 daytime vision, confidently driving his family at night again.",
    emotion: "'I drove to Lonavala for the first time in three years. I'd shrunk my whole life around bad vision without realising it.'",
  },
];

const FAQS = [
  { q: "Will I go blind from keratoconus?", a: "Almost certainly not. Modern keratoconus care - cross-linking to stop progression and specialty contact lenses to restore vision - protects sight in the overwhelming majority of patients. True blindness from keratoconus is rare today." },
  { q: "Do I need surgery?", a: "Most patients don't. The first line of treatment is specialty contact lenses (often scleral lenses), which restore clear vision without any surgery. Cross-linking is a minor in-clinic procedure to halt progression - not a major operation. Corneal transplants are reserved for advanced cases where lenses cannot deliver functional vision, and are rarely needed today." },
  { q: "Is corneal cross-linking painful?", a: "Discomfort is mild and brief. The procedure itself is done under anaesthetic drops and takes around an hour. Most patients describe the first 48 hours of healing as a gritty, watery sensation - manageable with prescribed drops - and are back to normal activity within a week." },
  { q: "Are scleral lenses uncomfortable?", a: "Modern sclerals are surprisingly comfortable - most patients forget they're wearing them within a few days. They're filled with saline, so there's actually a cushion of fluid between the lens and your eye." },
  { q: "What happens at my first visit?", a: "A calm 60–90 minute consultation. We do a full corneal topography scan, discuss your vision and goals, and (in most cases) trial a lens on the same visit so you can see the difference in real time. No pressure, no surprise costs." },
  { q: "How much does treatment cost?", a: "Costs vary by lens type, complexity and number of eyes treated. After your evaluation we give you a transparent, written quote - so you know exactly what's involved before you decide anything." },
  { q: "What is keratoconus?", a: "Keratoconus is a progressive eye condition where the cornea thins and bulges into a cone-like shape. This distorts vision and is often misdiagnosed as 'just astigmatism' for years before being correctly identified." },
  { q: "Can keratoconus be cured?", a: "There is no permanent cure, but modern care reliably stops it progressing (corneal cross-linking) and restores clear, comfortable vision (specialty contact lenses)." },
  { q: "What are scleral lenses?", a: "Large-diameter rigid lenses that vault completely over the cornea and rest gently on the white of the eye. They create a smooth optical surface and a fluid reservoir, giving sharp vision and excellent comfort." },
  { q: "Do I need a referral?", a: "No referral needed. You can book directly with us - bring any prior reports if you have them." },
  { q: "How long do specialty lenses last?", a: "Typically 1–2 years per pair, depending on care and prescription stability. We replace them on a planned schedule." },
  { q: "Do you treat children?", a: "Yes - we routinely fit teenagers and young adults, who form the largest group of keratoconus patients." },
  { q: "Where are you located?", a: `${CLINIC.address}. Easy access via Pune central, with parking nearby.` },
];

const CONDITIONS = [
  { to: "/keratoconus" as const, title: "Keratoconus", body: "Progressive corneal thinning - diagnosed early, managed gently, vision restored with specialty lenses." },
  { to: "/rgp-lenses" as const, title: "RGP Lenses", body: "Standard and next-generation flexible RGP lenses — sharper vision and better comfort for keratoconus and irregular corneas." },
  { to: "/irregular-cornea" as const, title: "Irregular Cornea", body: "Scars, injury or surgery-related irregular astigmatism - custom lenses replace the uneven surface optically." },
  { to: "/irregular-cornea" as const, title: "Pellucid Marginal Degeneration (PMD)", body: "Lower corneal thinning causing irregular astigmatism — managed effectively with custom scleral lens fitting." },
  { to: "/irregular-cornea" as const, title: "Post Corneal Transplant (PKP / DALK / Intacs)", body: "Specialty contact lenses for stable, comfortable vision after corneal graft surgery." },
  { to: "/irregular-cornea" as const, title: "Corneal Scars & Post Infection Irregular Cornea", body: "Custom lenses that optically bypass corneal scars and restore functional vision." },
  { to: "/irregular-cornea" as const, title: "High Irregular Astigmatism / RGP Intolerance", body: "Advanced scleral and specialty lens designs for patients who cannot tolerate standard RGP lenses." },
];

const TRUST_AVATARS = [trustAvatar1, trustAvatar2, trustAvatar3];

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <SymptomChecker />
      <BeforeAfterSection />
      <ConditionsSection />
      <WhySection />
      <ProcessSection />
      <StoriesSection />
      <FaqSection />
      <BlogStrip />
      <FindUsSection />
      <CTASection />
    </SiteLayout>
  );
}

function Hero() {
  return <FullHero />;
}

function FullHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Mobile: image background overlay */}
      <div className="lg:hidden absolute inset-0">
        <img
          src={heroEye}
          alt="Close-up eye visual used in the KeratoCare hero section"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/95" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />
      </div>

      <div className="relative lg:overflow-hidden lg:bg-[radial-gradient(circle_at_top_left,rgba(14,79,145,0.08),transparent_34%),radial-gradient(circle_at_88%_14%,rgba(170,221,224,0.28),transparent_24%),linear-gradient(180deg,#fdf9f2_0%,#fffdf8_56%,#fffaf1_100%)]">
        <div aria-hidden className="absolute left-[-7%] top-[18%] h-64 w-64 rounded-full bg-primary/6 blur-3xl" />
        <div aria-hidden className="absolute right-[10%] top-[10%] h-56 w-56 rounded-full bg-teal/28 blur-3xl" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/70 to-transparent" />

        <div className="container-page relative py-14 xl:py-16 2xl:py-20">
          <div className="grid min-h-0 lg:min-h-[720px] items-start lg:items-center gap-10 lg:gap-12 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(430px,0.96fr)] xl:gap-16">
            {/* Text content */}
            <div className="relative z-10 max-w-[41rem] animate-reveal">
              <h1 className="text-[2.5rem] xs:text-5xl lg:text-[4.5rem] font-semibold leading-[0.94] tracking-[-0.05em] text-white lg:text-foreground drop-shadow-[0_2px_18px_rgba(0,0,0,0.6)] lg:drop-shadow-none xl:text-[5.35rem]">
                Do I have
                <br />
                <span className="text-[#f1d3a3] lg:text-primary">keratoconus?</span>
              </h1>

              <p className="mt-7 lg:mt-8 max-w-[38rem] text-[15px] lg:text-[1.45rem] leading-snug lg:leading-[1.7] text-white/85 lg:text-muted-foreground">
                Blurry vision, ghosting, frequent prescription changes or night glare? Get a calm, expert evaluation before vision gets worse, from Pune&apos;s dedicated keratoconus and specialty cornea team.
              </p>

              <div className="mt-9 lg:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white lg:bg-primary text-foreground lg:text-primary-foreground px-6 lg:px-7 py-4 text-[15px] lg:text-lg font-semibold shadow-2xl lg:shadow-[0_22px_44px_-26px_rgba(14,79,145,0.8)] ring-1 lg:ring-0 ring-white/40 transition-all duration-300 hover:bg-teal lg:hover:bg-[#0b5f9e] hover:text-white lg:hover:text-primary-foreground hover:shadow-[0_18px_40px_-12px_rgba(20,184,166,0.55)] lg:hover:shadow-[0_22px_44px_-26px_rgba(14,79,145,0.8)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <CalendarCheck className="h-5 w-5" />
                  Book Keratoconus Evaluation
                </Link>

                <a
                  href={CLINIC.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 lg:border-slate-200 bg-white/10 lg:bg-white backdrop-blur-md lg:backdrop-blur-none px-6 lg:px-7 py-4 text-[15px] lg:text-lg font-semibold text-white lg:text-foreground shadow-lg lg:shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 lg:hover:border-primary/20 lg:hover:bg-slate-50"
                >
                  <WhatsAppIcon className="h-5 w-5 text-teal-200 lg:text-primary" />
                  WhatsApp Us
                </a>
              </div>

              <a
                href="#symptom-checker"
                className="mt-4 inline-flex items-center justify-center gap-3 rounded-full border border-teal/45 bg-teal/22 px-8 py-4 text-lg font-semibold text-white lg:text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal/28"
              >
                Take Symptom Checker
                <ArrowRight className="h-5 w-5" />
              </a>

              <div className="mt-8 lg:mt-12 flex flex-wrap items-center gap-x-6 lg:gap-x-8 gap-y-3 text-base lg:text-lg text-white/70 lg:text-muted-foreground">
                <span className="inline-flex items-center gap-2.5">
                  <Check className="h-5 w-5 text-teal" />
                  500+ patients
                </span>
                <span className="inline-flex items-center gap-2.5">
                  <span className="flex items-center gap-0.5 text-amber-400 lg:text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </span>
                  4.9 rating
                </span>
                <span className="inline-flex items-center gap-2.5">
                  <Check className="h-5 w-5 text-teal" />
                  Advanced corneal mapping
                </span>
              </div>
            </div>

            {/* Desktop: image in rounded card on right */}
            <div className="relative flex justify-end hidden lg:flex">
              <div
                className="relative w-full max-w-[620px] animate-reveal"
                style={{ animationDelay: "140ms" }}
              >
                <div className="relative h-[720px] overflow-hidden rounded-[2.7rem] border border-white/85 bg-[#eadccf] shadow-[0_32px_80px_-34px_rgba(15,23,42,0.45)]">
                  <img
                    src={heroEye}
                    alt="Close-up eye visual used in the KeratoCare hero section"
                    className="absolute inset-0 size-full object-cover object-center"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-slate-950/8 via-transparent to-white/22" />
                  <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_52%_50%,rgba(255,255,255,0.1),transparent_30%)]" />
                </div>

                <div className="absolute -right-6 -top-6 flex h-[9.5rem] w-[9.5rem] flex-col items-center justify-center rounded-[2rem] bg-white/96 text-center shadow-[0_24px_50px_-26px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/80">
                  <div className="text-[3rem] font-semibold tracking-[-0.05em] text-primary">98%</div>
                  <div className="mt-1 text-[0.78rem] font-medium uppercase tracking-[0.28em] text-slate-500">
                    Success rate
                  </div>
                </div>

                <div className="absolute inset-x-5 bottom-5 flex items-center gap-4 rounded-[1.8rem] bg-white/96 px-6 py-5 shadow-[0_26px_54px_-30px_rgba(15,23,42,0.42)] ring-1 ring-slate-200/75">
                  <div className="flex -space-x-2">
                    {TRUST_AVATARS.map((avatarSrc) => (
                      <img
                        key={avatarSrc}
                        src={avatarSrc}
                        alt=""
                        className="h-12 w-12 rounded-full border-2 border-white object-cover object-center"
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="text-[1.4rem] font-semibold leading-none text-foreground">
                      Trusted by 500+ patients
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-base text-muted-foreground">
                      <span className="flex items-center gap-0.5 text-amber-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </span>
                      4.9 average rating
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip - mobile only */}
      <div className="relative border-y border-border bg-background shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.35)] lg:hidden">
        <div className="container-page py-6 grid grid-cols-3 gap-2 text-center">
          <div>
            <div className="text-xl font-semibold text-foreground">500+</div>
            <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">Patients</div>
          </div>
          <div className="border-x border-border">
            <div className="text-xl font-semibold text-foreground">98%</div>
            <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">Success</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-0.5 text-xl font-semibold text-foreground">
              4.9 <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = ["Keratoconus specialists", "Scleral lens fitting", "Corneal topography", "Customised RGP Lenses"];
  return (
    <div className="border-y border-border bg-warm/60">
      <div className="container-page py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {items.map((i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-primary/60" /> {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProblemSection() {
  return (
    <section className="container-page py-12 sm:py-16">
      <SectionHeader
        eyebrow="If this sounds familiar"
        title="Glasses not giving you clear vision anymore?"
        subtitle="You're not imagining it. These are the signs we hear about every single day - and there are real, modern solutions for each of them."
      />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROBLEMS.map((p) => (
          <div
            key={p.title}
            className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lift hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-primary/8 text-primary mb-4">
              <Eye className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/keratoconus"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
        >
          Learn about keratoconus <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function ComparisonCard({ id, title, before, after, beforeAlt, afterAlt }: {
  id: string; title: string; before: string; after: string; beforeAlt: string; afterAlt: string;
}) {
  const [view, setView] = useState<"before" | "after">("before");

  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl sm:text-3xl font-semibold text-center">{title}</h3>
      <p className="mt-2 text-center text-sm text-muted-foreground">
        Click <span className="font-medium text-foreground">Before</span> and{" "}
        <span className="font-medium text-foreground">After</span> to compare treatment results.
      </p>

      <div className="mt-6 rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
        <div className="flex">
          <button
            onClick={() => setView("before")}
            aria-pressed={view === "before"}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-semibold transition-all duration-300 relative active:scale-[0.98] ${
              view === "before"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-white text-foreground hover:bg-muted/50 hover:shadow-sm"
            }`}
          >
            {view === "before" && <Eye className="h-4 w-4" />}
            Before Treatment
            {view === "before" && <span className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-white rounded-full" />}
          </button>
          <div className="w-px bg-border" />
          <button
            onClick={() => setView("after")}
            aria-pressed={view === "after"}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-semibold transition-all duration-300 relative active:scale-[0.98] ${
              view === "after"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-white text-foreground hover:bg-muted/50 hover:shadow-sm"
            }`}
          >
            {view === "after" && <Eye className="h-4 w-4" />}
            After Treatment
            {view === "after" && <span className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-white rounded-full" />}
          </button>
        </div>

        <div className="relative overflow-hidden bg-white">
          <img
            src={before}
            alt={beforeAlt}
            loading="lazy"
            className="block w-full object-contain transition-opacity duration-[350ms] ease-out"
            style={{ opacity: view === "before" ? 1 : 0 }}
          />
          <img
            src={after}
            alt={afterAlt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-[350ms] ease-out"
            style={{ opacity: view === "after" ? 1 : 0 }}
          />
        </div>
      </div>
    </div>
  );
}

function BeforeAfterSection() {
  const comparisons = [
    { id: "blurry", title: "Blurry Vision", before: blurryBefore, after: blurryAfter, beforeAlt: "Blurry vision before treatment", afterAlt: "Clear vision after treatment" },
    { id: "night", title: "Night Glare & Halos", before: nightBefore, after: nightAfter, beforeAlt: "Night glare before treatment", afterAlt: "Reduced night glare after treatment" },
    { id: "light", title: "Light Sensitivity", before: lightBefore, after: lightAfter, beforeAlt: "Light sensitivity before treatment", afterAlt: "Comfortable light after treatment" },
  ];

  return (
    <section className="bg-warm/60">
      <div className="container-page py-12 sm:py-16">
        <SectionHeader
          align="center"
          title="See what changes after treatment"
          subtitle="Blurry vision, glare at night, sensitivity to light. See the difference treatment can make."
        />

        <div className="mt-12 space-y-16">
          {comparisons.map((c) => (
            <ComparisonCard key={c.id} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="bg-warm">
      <div className="container-page py-12 sm:py-16">
        <SectionHeader
          eyebrow="Why KeratoCare"
          title="Specialists who genuinely understand difficult vision."
          subtitle="We do one thing - and we do it carefully. Here's what that means for you."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY.map((c) => (
            <div key={c.title} className="rounded-2xl bg-card border border-border p-6 hover:shadow-lift transition-all">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="container-page py-12 sm:py-16">
      <SectionHeader
        eyebrow="Our process"
        title="From first call to lasting clarity."
        subtitle="No pressure, no surprises. Here's exactly what happens at every stage."
      />
      <ol className="mt-12 relative grid gap-4">
        <div aria-hidden className="absolute left-6 sm:left-7 top-3 bottom-3 w-px bg-border" />
        {PROCESS.map((p) => (
          <li key={p.step} className="relative grid grid-cols-[auto_1fr] gap-5 sm:gap-7 items-start">
            <div className="relative z-10 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-soft">
              {p.step}
            </div>
            <div className="rounded-2xl bg-card border border-border p-5 sm:p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ConditionsSection() {
  return (
    <section className="container-page py-12 sm:py-16">
      <SectionHeader
        eyebrow="Conditions we treat"
        title="Specialist care for difficult corneas."
        subtitle="Dedicated, condition-specific pathways - so you know exactly what's involved before you walk in."
      />
      <div className="mt-12 grid sm:grid-cols-2 gap-4">
        {CONDITIONS.map((c, i) => (
          <Link
            key={`${c.to}-${i}`}
            to={c.to}
            className="group rounded-3xl border border-border bg-card p-6 sm:p-7 hover:shadow-lift hover:-translate-y-0.5 transition-all flex items-start justify-between gap-6"
          >
            <div>
              <h3 className="text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-primary mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        ))}
      </div>
    </section>
  );
}

function StoriesSection() {
  return (
    <section className="container-page py-12 sm:py-16">
      <SectionHeader
        eyebrow="Patient success stories"
        title="From quiet worry to clear vision."
        subtitle="Real patients, real journeys. Each one started with a careful evaluation - not a sales pitch."
      />
      <div className="mt-12 grid lg:grid-cols-3 gap-5">
        {STORIES.map((s) => (
          <article key={s.name} className="rounded-3xl bg-card border border-border p-6 sm:p-7 flex flex-col">
            <Quote className="h-6 w-6 text-primary/30" />
            <div className="mt-4 space-y-4 text-sm flex-1">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Challenge</div>
                <p className="mt-1 text-foreground/85 leading-relaxed">{s.challenge}</p>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-foreground/70">Treatment journey</div>
                <p className="mt-1 text-foreground/85 leading-relaxed">{s.journey}</p>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Outcome</div>
                <p className="mt-1 text-foreground/85 leading-relaxed">{s.outcome}</p>
              </div>
              <blockquote className="rounded-2xl bg-warm border border-border p-4 italic text-foreground/85 leading-relaxed">
                {s.emotion}
              </blockquote>
            </div>
            <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
              <span className="font-semibold text-sm">{s.name}</span>
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current text-amber-500" />
                ))}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BlogStrip() {
  const posts = BLOG_POSTS.slice(0, 3);
  return (
    <section className="bg-warm">
      <div className="container-page py-12 sm:py-16">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeader
            eyebrow="Read & learn"
            title="Plain-language guides to your vision."
            subtitle="Written by our specialists - so you walk into your next consultation knowing the right questions to ask."
          />
          <Link to="/blog" className="text-sm font-semibold text-primary hover:underline">All articles →</Link>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group rounded-2xl bg-card border border-border p-6 hover:shadow-lift hover:-translate-y-0.5 transition-all"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{p.category}</div>
              <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                <span>{p.readTime}</span>
                <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container-page py-12 sm:py-16">
      <SectionHeader
        align="center"
        eyebrow="Frequently asked"
        title="Genuine answers to the questions you'd want to ask."
      />
      <div className="mt-12 max-w-3xl mx-auto divide-y divide-border border-y border-border">
        {FAQS.map((f, i) => {
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
                <div className="pb-6 pr-10 text-sm text-muted-foreground leading-relaxed animate-fade-in">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FindUsSection() {
  return (
    <section id="find-us" className="container-page py-10 sm:py-14">
      <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft">
        <div className="flex items-center gap-3">
          <MapPin className="h-6 w-6 text-primary" />
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            Find Us on Map
          </h2>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border">
          <iframe
            title="KeratoCare location on Google Maps"
            src={CLINIC.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-[360px] w-full sm:h-[440px] block"
          />
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href={CLINIC.mapLink}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
