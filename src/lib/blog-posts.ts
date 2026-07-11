export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: { heading?: string; body: string }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-is-keratoconus",
    title: "What is Keratoconus? Early Signs, Causes & Treatment Options",
    description:
      "A clear, simple guide to keratoconus - what causes the cornea to bulge, the earliest symptoms to watch for, and the modern treatments that stop it progressing.",
    date: "2025-09-12",
    readTime: "6 min read",
    category: "Keratoconus 101",
    excerpt:
      "Keratoconus is a progressive eye condition where the cornea thins and bulges into a cone shape. Here's how to spot it early and what to do next.",
    content: [
      {
        body: "Keratoconus is a progressive eye condition where the normally round cornea thins and starts to bulge outward into a cone-like shape. This irregular shape bends light entering the eye incorrectly, leading to distorted, blurry vision that glasses alone can rarely correct after a certain stage.",
      },
      {
        heading: "Early signs most patients miss",
        body: "The first signs are usually subtle - frequent prescription changes, increasing sensitivity to light, ghosting or doubling of letters, and halos around lights at night. Many patients are told they have astigmatism for years before keratoconus is diagnosed.",
      },
      {
        heading: "What causes it",
        body: "There is no single cause. Genetics, persistent eye rubbing (often linked to allergies), and connective tissue disorders all increase risk. It usually starts in the teens or twenties and can progress for 10–20 years before stabilising.",
      },
      {
        heading: "Treatment options today",
        body: "Modern keratoconus care is built around two goals: stop the cornea from getting worse, and restore functional vision. Corneal cross-linking halts progression. Specialty contact lenses - RGP, hybrid, and scleral lenses - vault over the irregular cornea to give clear, comfortable vision without surgery.",
      },
      {
        heading: "When to see a specialist",
        body: "If your prescription keeps changing, glasses no longer give you sharp vision, or you notice glare and halos worsening, book a corneal topography scan. The earlier keratoconus is caught, the more vision can be preserved.",
      },
    ],
  },
  {
    slug: "scleral-lenses-guide",
    title: "Scleral Lenses for Keratoconus: A Complete Patient Guide",
    description:
      "How scleral lenses work, what fitting involves, daily care, costs in India, and why they often succeed when other lenses fail keratoconus patients.",
    date: "2025-10-04",
    readTime: "7 min read",
    category: "Specialty Lenses",
    excerpt:
      "Scleral lenses vault over the cornea and rest on the white of the eye, giving keratoconus patients sharp, comfortable vision all day.",
    content: [
      {
        body: "Scleral lenses are large-diameter rigid gas permeable lenses that vault completely over the cornea and rest on the sclera - the white of the eye. Because they never touch the sensitive, irregular cornea, they deliver sharp optics with surprising all-day comfort.",
      },
      {
        heading: "Why they work for keratoconus",
        body: "A keratoconus cornea is uneven. Glasses and soft lenses follow that uneven surface, so the distortion remains. A scleral lens replaces that surface with a perfectly smooth optical dome filled with sterile saline - vision becomes crisp again, often 20/20 or close.",
      },
      {
        heading: "What fitting involves",
        body: "Fitting starts with corneal topography to map the cone, then trial lenses are placed and evaluated under the slit lamp. Several refinements are normal - the goal is even clearance over the cornea and a soft landing on the sclera. Most patients are dispensed within 2–4 visits.",
      },
      {
        heading: "Daily wear and care",
        body: "You fill the bowl of the lens with preservative-free saline, apply it with a small plunger, and wear it 10–14 hours a day. Cleaning is straightforward - a daily cleaner, weekly enzymatic, and rinse with saline before insertion.",
      },
      {
        heading: "What it costs",
        body: "In India, custom scleral lenses are typically available on a monthly access plan starting from ₹3,500/month at specialty clinics. Most patients find this far more sustainable than repeated trial-and-error at general optical stores.",
      },
    ],
  },
  {
    slug: "corneal-cross-linking-explained",
    title: "Corneal Cross-Linking (C3R): When You Need It and What to Expect",
    description:
      "C3R is the only treatment that stops keratoconus from progressing. Learn how it works, who it's for, recovery time, and what results to expect.",
    date: "2025-11-02",
    readTime: "5 min read",
    category: "Treatments",
    excerpt:
      "Cross-linking strengthens the cornea using riboflavin and UV light. It won't reverse keratoconus, but it stops it getting worse - usually for life.",
    content: [
      {
        body: "Corneal cross-linking (often called C3R or CXL) is a minor outpatient procedure that uses vitamin B2 (riboflavin) drops and controlled UV-A light to create new bonds between collagen fibres in the cornea. The result: a stronger, stiffer cornea that resists further bulging.",
      },
      {
        heading: "Who needs it",
        body: "Anyone with documented progression of keratoconus - worsening topography, increasing astigmatism, or thinning on pachymetry - is a candidate. Patients under 30 are particularly important to treat, as their corneas tend to progress faster.",
      },
      {
        heading: "The procedure",
        body: "The procedure takes around 45–60 minutes per eye. The epithelium may be removed (epi-off) or kept intact (epi-on), riboflavin drops saturate the cornea, then calibrated UV light is applied. You go home the same day with a bandage contact lens.",
      },
      {
        heading: "Recovery",
        body: "Expect mild discomfort and light sensitivity for 3–5 days. Vision often dips temporarily before settling over 1–3 months. Most patients return to normal activities within a week.",
      },
      {
        heading: "Results",
        body: "Cross-linking stabilises about 95% of keratoconus cases. It does not reverse the cone, but it stops it growing - meaning your future vision plan stays predictable, and lens prescriptions stop drifting every six months.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
