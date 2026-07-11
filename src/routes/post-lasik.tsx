import { createFileRoute } from "@tanstack/react-router";
import { ConditionPage } from "@/components/site/ConditionPage";

export const Route = createFileRoute("/post-lasik")({
  head: () => ({
    meta: [
      { title: "Post-LASIK Vision Problems - KeratoCare Pune" },
      { name: "description", content: "Halos, glare, double vision or regression after LASIK? Specialty scleral & RGP lenses can restore clear, comfortable vision - without further surgery." },
      { property: "og:title", content: "Post-LASIK Vision Problems - KeratoCare" },
      { property: "og:description", content: "Calm, expert care for post-LASIK halos, glare, ectasia and visual regression in Pune." },
      { property: "og:url", content: "/post-lasik" },
      { property: "og:image", content: "/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/post-lasik" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalCondition",
          name: "Post-LASIK Ectasia",
          description: "Halos, glare, double vision or regression after LASIK surgery. Managed with specialty contact lenses.",
          relevantSpecialty: "Ophthalmic",
        }),
      },
    ],
  }),
  component: PostLasikPage,
});

function PostLasikPage() {
  return (
    <ConditionPage
      heroBadge="Post-LASIK care"
      eyebrow="Post-LASIK vision problems"
      title="If LASIK didn't end the way you hoped - there are still answers."
      intro="Halos, starbursts, double vision, dryness, regression or ectasia after refractive surgery are more common than people realise. In most cases, specialty contact lenses can quietly restore the vision you were promised."
      symptoms={[
        "Strong halos, starbursts or glare at night",
        "Ghosting or double images, especially while reading",
        "Blurry vision that has slowly returned after LASIK",
        "Dryness, gritty sensation or fluctuating vision through the day",
        "A new diagnosis of post-LASIK ectasia or irregular cornea",
        "Difficulty driving after dark",
      ]}
      affects={[
        "Patients 1–10+ years after LASIK or SMILE who feel vision is no longer 'right'",
        "Those told they have post-LASIK ectasia and don't know what comes next",
        "Working professionals struggling with screens, presentations or night driving",
        "Anyone who has been told 'this is as good as it gets' but suspects otherwise",
      ]}
      solutions={[
        { title: "Scleral lenses", body: "Vault gently over the irregular cornea and create a smooth optical surface. Most patients see a dramatic improvement in halos and clarity within minutes of the trial fit." },
        { title: "Custom RGP lenses", body: "For milder irregularities, smaller rigid lenses can deliver excellent vision and all-day comfort." },
        { title: "Corneal cross-linking", body: "If post-LASIK ectasia is progressing, cross-linking can halt it. We coordinate with leading corneal surgeons in Pune." },
        { title: "Dry-eye management", body: "Many post-LASIK complaints are really dry-eye. We diagnose and treat the cause - not just the symptom." },
      ]}
      story={{
        name: "Rohan, 35 · Software engineer, Pune",
        challenge: "Six years after LASIK, his night vision had collapsed - halos around every streetlight, double images on screens. He had stopped driving after sunset.",
        journey: "A topography scan revealed early post-LASIK ectasia. We fitted custom scleral lenses across two visits, and coordinated cross-linking with a corneal surgeon to stop progression.",
        outcome: "6/6 vision with sclerals. Night halos reduced by an estimated 80%. Cornea now stable on follow-up scans.",
        emotion: "'I drove my family to Lonavala for the first time in three years. I forgot how much I'd shrunk my life around bad vision.'",
      }}
      faqs={[
        { q: "Can post-LASIK problems really be fixed without another surgery?", a: "In the majority of cases, yes. Specialty contact lenses solve the underlying optical problem without touching the cornea again." },
        { q: "Is cross-linking always needed after LASIK?", a: "Only if your cornea shows signs of weakening (ectasia). For most post-LASIK halos and ghosting, lenses alone are enough." },
        { q: "Will I have to wear lenses forever?", a: "Many patients do - but happily, because they finally see clearly. Lenses are removed every night and replaced every 1–2 years." },
        { q: "How soon after LASIK can I be evaluated?", a: "Any time symptoms are bothering you. Most patients come in 6 months or more after surgery, but we see people years later too." },
        { q: "Will sclerals feel uncomfortable?", a: "Modern sclerals are surprisingly comfortable - most patients forget they're wearing them within a week." },
      ]}
    />
  );
}
