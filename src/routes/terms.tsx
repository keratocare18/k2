import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service - KeratoCare Pune" },
      { name: "description", content: "KeratoCare terms of service for website usage and clinic appointments." },
      { property: "og:title", content: "Terms of Service - KeratoCare" },
      { property: "og:description", content: "Terms of service for KeratoCare website and clinic services." },
      { property: "og:url", content: "/terms" },
      { property: "og:image", content: "/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <article className="container-page py-16 sm:py-20 md:py-24 max-w-3xl">
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-3 text-muted-foreground">Last updated: July 2026</p>

        <div className="mt-8 space-y-8 text-sm sm:text-base leading-relaxed text-foreground/80">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">1. Website Use</h2>
            <p>The content on this website is for general informational purposes only and does not constitute medical advice. Always consult a qualified eye care professional for diagnosis and treatment.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">2. Appointments</h2>
            <p>Booking an appointment through our website or WhatsApp does not guarantee availability. We will confirm your slot within a few hours. Cancellations should be made at least 24 hours in advance.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">3. Medical Disclaimer</h2>
            <p>Information provided on this website about conditions, treatments and lenses is for educational purposes. Outcomes vary by individual. Nothing on this site replaces a professional consultation.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">4. Intellectual Property</h2>
            <p>All content on this website, including text, images and branding, is the property of KeratoCare and may not be reproduced without written permission.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">5. Limitation of Liability</h2>
            <p>KeratoCare is not liable for any damages arising from use of this website or reliance on its content. Use of this website is at your own risk.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">6. Changes to These Terms</h2>
            <p>We may update these terms from time to time. Continued use of the website after changes constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">7. Contact</h2>
            <p>For questions about these terms, contact us at <a href="mailto:care@keratocare.in" className="underline hover:text-foreground">care@keratocare.in</a>.</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/privacy" className="text-sm text-primary hover:underline">View Privacy Policy →</Link>
        </div>
      </article>
    </SiteLayout>
  );
}
