import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { BLOG_POSTS } from "@/lib/blog-posts";

const BASE_URL = "https://keratocare.in";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/keratoconus", changefreq: "monthly", priority: "0.9" },
          { path: "/scleral-lenses", changefreq: "monthly", priority: "0.9" },
          { path: "/rgp-lenses", changefreq: "monthly", priority: "0.9" },
          { path: "/irregular-cornea", changefreq: "monthly", priority: "0.9" },
          { path: "/post-lasik", changefreq: "monthly", priority: "0.9" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
          { path: "/privacy", changefreq: "monthly", priority: "0.3" },
          { path: "/terms", changefreq: "monthly", priority: "0.3" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          ...BLOG_POSTS.map((p) => ({
            path: `/blog/${p.slug}`,
            lastmod: p.date,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
        ];

        const urls = entries
          .map((e) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${e.path}</loc>`,
              "lastmod" in e && e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
              `    <changefreq>${e.changefreq}</changefreq>`,
              `    <priority>${e.priority}</priority>`,
              `  </url>`,
            ]
              .filter(Boolean)
              .join("\n"),
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
