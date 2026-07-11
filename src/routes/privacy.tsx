import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy - KeratoCare Pune" },
      { name: "description", content: "KeratoCare privacy policy. Learn how we collect, use and protect your personal information." },
      { property: "og:title", content: "Privacy Policy - KeratoCare" },
      { property: "og:description", content: "KeratoCare privacy policy for patient data and website usage." },
      { property: "og:url", content: "/privacy" },
      { property: "og:image", content: "/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <article className="container-page py-16 sm:py-20 md:py-24 max-w-3xl">
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-muted-foreground">Last updated: July 2026</p>

        <div className="mt-8 space-y-8 text-sm sm:text-base leading-relaxed text-foreground/80">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p>We collect personal information you provide directly, including name, phone number, email address, and medical history when you book an appointment or fill out a contact form on our website.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
            <p>Your information is used solely to schedule and provide eye care consultations, respond to your enquiries, and send appointment reminders via WhatsApp or SMS. We do not sell or rent your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">3. Data Protection</h2>
            <p>We implement reasonable security measures to protect your personal information. Patient medical records are handled in accordance with applicable Indian healthcare data protection regulations.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">4. Third-Party Services</h2>
            <p>Our website uses Google Analytics for aggregated, anonymised traffic data. We use WhatsApp for appointment communication. These services may collect data per their own privacy policies.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">5. Cookies</h2>
            <p>Our website uses essential cookies for session functionality and analytics cookies to understand site usage. You may disable cookies in your browser settings.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">6. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data by contacting us at <a href="mailto:care@keratocare.in" className="underline hover:text-foreground">care@keratocare.in</a> or via WhatsApp at <a href="https://wa.me/918432861131" className="underline hover:text-foreground">+91 843 286 1131</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">7. Contact</h2>
            <p>For privacy-related enquiries, contact us at <a href="mailto:care@keratocare.in" className="underline hover:text-foreground">care@keratocare.in</a>.</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/terms" className="text-sm text-primary hover:underline">View Terms of Service →</Link>
        </div>
      </article>
    </SiteLayout>
  );
}
