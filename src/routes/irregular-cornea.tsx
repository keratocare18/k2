import { createFileRoute } from "@tanstack/react-router";
import { ConditionPage } from "@/components/site/ConditionPage";

export const Route = createFileRoute("/irregular-cornea")({
  head: () => ({
    meta: [
      { title: "Irregular Cornea Treatment - KeratoCare Pune" },
      { name: "description", content: "Specialty contact lens solutions for irregular corneas from injury, infection, surgery or scarring. Custom scleral & RGP lens fitting in Pune." },
      { property: "og:title", content: "Irregular Cornea Treatment - KeratoCare" },
      { property: "og:description", content: "Restore vision in irregular corneas with custom-designed specialty contact lenses in Pune." },
      { property: "og:url", content: "/irregular-cornea" },
      { property: "og:image", content: "/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/irregular-cornea" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalCondition",
          name: "Irregular Cornea",
          description: "Corneal irregularity from injury, infection, surgery or scarring that distorts vision.",
          relevantSpecialty: "Ophthalmic",
        }),
      },
    ],
  }),
  component: IrregularCorneaPage,
});

function IrregularCorneaPage() {
  return (
    <ConditionPage
      heroBadge="Irregular cornea care"
      eyebrow="Irregular cornea"
      title="When the cornea is uneven, glasses can't keep up. Custom lenses can."
      intro="Scarring, injury, infection, or a previous surgery can leave the cornea uneven - and any prescription you put in glasses is fighting an already-distorted surface. A custom specialty lens replaces that surface with a perfectly smooth one, so light finally focuses correctly."
      symptoms={[
        "Distorted or 'wavy' vision in one or both eyes",
        "Ghosting, doubling or shadowing of letters",
        "Glasses that never quite give clear vision",
        "Glare and halos at night",
        "History of corneal injury, infection or scar",
        "Visible astigmatism on topography that won't fully correct",
      ]}
      affects={[
        "Patients with corneal scars from old injury or infection",
        "People with high or irregular astigmatism uncorrectable by glasses",
        "Post-surgical patients (RK, LASIK, cataract) with residual irregularity",
        "Children and adults with congenital corneal irregularities",
      ]}
      solutions={[
        { title: "Scleral lenses", body: "The most versatile option for irregular corneas - vault over the entire cornea and create a uniform optical surface." },
        { title: "Custom RGP & specialty designs", body: "For less severe irregularities, smaller rigid lenses can deliver excellent comfort and vision." },
        { title: "Hybrid lenses", body: "A rigid centre with a soft skirt - useful when comfort is a major concern." },
        { title: "Therapeutic bandage lenses", body: "Where the surface needs protection during healing, soft bandage lenses are used short-term." },
      ]}
      story={{
        name: "Sameer, 41 · Industrial accident survivor",
        challenge: "A workplace injury left a paracentral scar on his right cornea. Glasses gave him 6/36 vision at best; he had stopped driving.",
        journey: "Topography mapped the irregular surface. We trialed a mini-scleral lens, refined the vault over the scar across two visits, and locked in his final design.",
        outcome: "6/9 vision restored in the injured eye, full comfort across 12-hour days.",
        emotion: "'I went back to work full-time within a month. My family told me I'd started smiling again.'",
      }}
      faqs={[
        { q: "Can a contact lens really fix a scarred cornea?", a: "It can't heal the scar - but a well-designed lens can completely bypass it optically, restoring clear vision in most cases." },
        { q: "Will the lens irritate the scar?", a: "No - sclerals vault over the cornea and never touch the scarred area. They are remarkably comfortable." },
        { q: "Is surgery a better option?", a: "Surgery (such as a graft) is reserved for cases where lenses cannot deliver functional vision. Most irregular corneas do not need it." },
        { q: "How long does fitting take?", a: "Usually 2–3 visits over a few weeks. We never rush a difficult fit." },
        { q: "Will my insurance cover this?", a: "Some policies cover medically necessary specialty contact lens fitting. We'll help you with the paperwork." },
      ]}
    />
  );
}
