import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CalendarCheck, Check, ChevronDown } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CLINIC } from "@/lib/clinic";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact KeratoCare - Book Appointment in Pune" },
      {
        name: "description",
        content:
          "Book your specialty contact lens consultation at KeratoCare, Pune. WhatsApp, call or fill the form - we respond within hours.",
      },
      { property: "og:title", content: "Book an appointment - KeratoCare Pune" },
      {
        property: "og:description",
        content:
          "Specialty contact lens consultations for keratoconus & irregular corneas. Mon–Sun, 10am–7pm.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: "/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "KeratoCare",
          description: "Specialty contact lens clinic in Pune for keratoconus, scleral lenses & irregular cornea management.",
          telephone: "+918432861131",
          email: "care@keratocare.in",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop No. 137, Mahalaxmi Metro Square, Jogeshwari Ln, Budhwar Peth",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            postalCode: "411002",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 18.9550,
            longitude: 72.8310,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "10:00",
            closes: "19:00",
          },
          priceRange: "₹₹",
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "");
    const phone = String(fd.get("phone") ?? "");
    const reason = String(fd.get("reason") ?? "");
    const message = String(fd.get("message") ?? "");
    const text = `Hi KeratoCare, I'd like to book an appointment.%0A%0AName: ${name}%0APhone: ${phone}%0AReason: ${reason}%0AMessage: ${message}`;
    window.open(`https://wa.me/918432861131?text=${text}`, "_blank");
    setSent(true);
  }

  return (
    <SiteLayout>
      <header className="relative overflow-hidden bg-warm">
        <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
        <div className="container-page py-12 sm:py-20 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Get in touch</p>
          <h1 className="mt-4 text-[2.25rem] sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
            Let's get you seeing clearly.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Book a consultation, ask a question, or just say hello. We usually
            respond within a few hours during clinic time.
          </p>
        </div>
      </header>

      <section className="container-page py-12 sm:py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12">
        <div>
          <div className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-soft">
            <h2 className="text-2xl font-semibold">Book an appointment</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill this in and we'll continue on WhatsApp - fastest way to confirm a slot.
            </p>

            {sent ? (
              <div className="mt-8 rounded-2xl bg-teal/15 border border-teal/40 p-6 text-sm flex gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">WhatsApp window opened</div>
                  <p className="mt-1 text-muted-foreground">
                    Send the message to complete your request. We'll reply shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <Field label="Full name" name="name" required placeholder="Your full name" />
                <Field label="Phone number" name="phone" type="tel" required placeholder="+91 9xxxx xxxxx" />
                <div className="grid gap-2">
                  <label htmlFor="reason" className="text-sm font-medium">Reason for visit</label>
                  <div className="relative">
                    <select
                      id="reason"
                      name="reason"
                      className="h-11 w-full appearance-none rounded-xl border border-input bg-background pl-3 pr-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>Select an option</option>
                      <option>Keratoconus evaluation</option>
                      <option>Scleral lens fitting</option>
                      <option>RGP / specialty lens fitting</option>
                      <option>Second opinion</option>
                      <option>General enquiry</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">Message <span className="text-muted-foreground">(optional)</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us briefly what you're experiencing"
                    className="rounded-xl border border-input bg-background p-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-soft hover:opacity-90"
                >
                  <CalendarCheck className="h-4 w-4" /> Request appointment
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  By submitting you'll be taken to WhatsApp to confirm your request.
                </p>
              </form>
            )}
          </div>
        </div>

        <aside className="space-y-4">
          <a
            href={CLINIC.whatsapp}
            target="_blank"
            rel="noopener"
            className="block rounded-3xl bg-[#25D366]/10 border border-[#25D366]/30 p-6 hover:bg-[#25D366]/15 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-white">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold">Chat on WhatsApp</div>
                <div className="text-xs text-muted-foreground">Fastest way to reach us</div>
              </div>
            </div>
          </a>

          <a
            href={`tel:${CLINIC.phone}`}
            className="block rounded-3xl bg-card border border-border p-6 hover:shadow-soft transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold">{CLINIC.phoneDisplay}</div>
                <div className="text-xs text-muted-foreground">Tap to call the clinic</div>
              </div>
            </div>
          </a>

          <div className="rounded-3xl bg-card border border-border p-6 space-y-4">
            <InfoRow icon={MapPin} label="Visit us" value={CLINIC.address} />
            <InfoRow icon={Clock} label="Hours" value={CLINIC.hours} />
            <InfoRow icon={Mail} label="Email" value={CLINIC.email} href={`mailto:${CLINIC.email}`} />
          </div>
        </aside>
      </section>

      <section className="container-page pb-12 sm:pb-20">
        <div className="rounded-3xl overflow-hidden border border-border shadow-soft aspect-[16/9] sm:aspect-[21/9] bg-muted">
          <iframe
            title="KeratoCare clinic location on Google Maps"
            src={CLINIC.mapEmbed}
            loading="lazy"
            className="w-full h-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-xl border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
    </div>
  );
}

function InfoRow({
  icon: Icon, label, value, href,
}: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex gap-3">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/8 text-primary shrink-0">
        <Icon className="h-4 w-4" />
      </span>
      <div className="text-sm">
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</div>
        <div className="mt-1 text-foreground/90 leading-relaxed">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80">{content}</a> : content;
}
