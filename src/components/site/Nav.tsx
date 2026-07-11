import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CLINIC, NAV_LINKS } from "@/lib/clinic";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    if (!menu) return;

    const focusable = menu.querySelectorAll<HTMLElement>("a[href], button, [tabindex]:not([tabindex='-1'])");
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }

    first.focus();
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border"
            : "bg-background/60 backdrop-blur-md",
        ].join(" ")}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center shrink-0 group" aria-label="KeratoCare home">
            <img
              src="/logo.png"
              alt="KeratoCare"
              className="h-10 w-auto transition-transform group-hover:scale-105"
              draggable={false}
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-2.5 py-2 text-sm font-medium whitespace-nowrap text-muted-foreground rounded-full hover:text-foreground hover:bg-muted transition-colors"
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground bg-muted" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-2">
            <a
              href={`tel:${CLINIC.phone}`}
              className="inline-flex items-center gap-1.5 px-2.5 py-2 text-sm font-medium whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" /> {CLINIC.phoneDisplay}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90 transition-opacity"
            >
              Book Appointment
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu - rendered outside <header> so backdrop-blur doesn't trap fixed positioning */}
      {open && (
        <div ref={menuRef} className="xl:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-background animate-fade-in overflow-y-auto">
          <div className="container-page py-6 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3.5 text-lg font-medium rounded-2xl hover:bg-muted"
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-muted text-primary" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-6 grid gap-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3.5 text-base font-semibold text-primary-foreground"
              >
                Book Appointment
              </Link>
              <a
                href={`tel:${CLINIC.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3.5 text-base font-semibold"
              >
                <Phone className="h-4 w-4" /> {CLINIC.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
