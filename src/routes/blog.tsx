import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Keratoconus Blog - Guides, Lenses & Treatment | KeratoCare Pune" },
      {
        name: "description",
        content:
          "Expert articles on keratoconus, scleral lenses, corneal cross-linking and specialty contact lens care from KeratoCare, Pune.",
      },
      { property: "og:title", content: "KeratoCare Blog - Keratoconus Resources" },
      {
        property: "og:description",
        content:
          "Plain-language guides to keratoconus diagnosis, treatments and specialty lens fitting.",
      },
      { property: "og:url", content: "/blog" },
      { property: "og:image", content: "/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <SiteLayout>
      <header className="bg-warm">
        <div className="container-page py-16 sm:py-24 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">The KeratoCare journal</p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
            Clear answers about keratoconus, lenses & your vision.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Plain-language guides written by our specialists - so you walk into
            your next consultation already knowing the questions to ask.
          </p>
        </div>
      </header>

      <section className="container-page py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-4">
          {BLOG_POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group rounded-3xl bg-card border border-border p-6 sm:p-8 hover:shadow-lift hover:-translate-y-0.5 transition-all flex flex-col"
            >
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span>{p.category}</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                <span className="text-muted-foreground">{p.readTime}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold leading-snug group-hover:text-primary transition-colors">
                {p.title}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Read article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
