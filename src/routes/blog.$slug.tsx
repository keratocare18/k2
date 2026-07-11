import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog-posts";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const post = loaderData?.post;
    if (!post) {
      return { meta: [{ title: "Article not found - KeratoCare" }] };
    }
    return {
      meta: [
        { title: `${post.title} | KeratoCare` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { property: "article:published_time", content: post.date },
        { property: "article:section", content: post.category },
        { property: "og:image", content: "/logo.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "/logo.png" },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { "@type": "Organization", name: "KeratoCare" },
            articleSection: post.category,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center px-6">
      <div className="text-center">
        <h1 className="font-display text-3xl mb-2">Article not found</h1>
        <Link to="/blog" className="text-primary hover:underline">
          ← Back to blog
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen grid place-items-center px-6">
      <button onClick={reset} className="text-primary hover:underline">
        Try again
      </button>
    </div>
  ),
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <SiteLayout>
      <article className="container-page max-w-3xl pt-16 sm:pt-24 pb-16">
        <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
          ← All articles
        </Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {post.category} · {post.readTime}
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] text-balance">
          {post.title}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{post.description}</p>
        <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Published{" "}
          {new Date(post.date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>

        <div className="mt-12 space-y-7">
          {post.content.map((block: { heading?: string; body: string }, i: number) => (
            <section key={i}>
              {block.heading && (
                <h2 className="text-2xl font-semibold mb-3">{block.heading}</h2>
              )}
              <p className="text-base leading-relaxed text-foreground/85">{block.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 p-8 rounded-3xl bg-primary text-primary-foreground shadow-lift">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Next step</p>
          <h3 className="mt-2 text-2xl font-semibold leading-snug">
            Talk to a keratoconus specialist in Pune.
          </h3>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 bg-background text-foreground px-5 py-3 rounded-full text-sm font-semibold hover:bg-warm transition-colors"
          >
            Book a consultation →
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border bg-warm">
          <div className="container-page max-w-3xl py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-6">
              Keep reading
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="block p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-soft transition-all"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-2">
                      {p.category}
                    </p>
                    <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
