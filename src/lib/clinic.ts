export const CLINIC = {
  name: "KeratoCare",
  tagline: "Specialty contact lens center for keratoconus & difficult vision cases",
  phone: "+918432861131",
  phoneDisplay: "+91 84328 61131",
  whatsapp: "https://wa.me/918432861131?text=Hi%20KeratoCare%2C%20I'd%20like%20to%20book%20an%20appointment.",
  email: "care@keratocare.in",
  address:
    "Shop No. 137, Mahalaxmi Metro Square, Jogeshwari Ln, Budhwar Peth, Pune, Maharashtra 411002",
  hours: "Mon – Sun · 10:00 AM – 7:00 PM",
  mapEmbed:
    "https://www.google.com/maps?q=18.9550,72.8310&output=embed&z=16",
  mapLink: "https://maps.google.com/?q=18.9550,72.8310",
  city: "Pune",
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/keratoconus", label: "Keratoconus" },
  { to: "/irregular-cornea", label: "Irregular Cornea" },
  { to: "/scleral-lenses", label: "Scleral Lenses" },
  { to: "/rgp-lenses", label: "RGP Lenses" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;
