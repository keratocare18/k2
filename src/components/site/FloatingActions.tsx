import { Phone } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-30 flex flex-col gap-2">
      <a
        href={CLINIC.whatsapp}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift hover:scale-105 transition-transform"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>
      <a
        href={`tel:${CLINIC.phone}`}
        aria-label="Call KeratoCare"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift hover:scale-105 transition-transform"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
