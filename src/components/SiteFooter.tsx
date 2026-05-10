import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { ContactForm } from "./ContactForm";

export function SiteFooter() {
  return (
    <footer id="kontakti" className="border-t border-border/60 bg-[color:var(--primary-soft)]/40 mt-24">
      <div className="container-page py-16 grid gap-12 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Palīdzam uzņēmumiem veidot paliekošas attiecības ar klientiem un darbiniekiem,
            piedāvājot kvalitatīvas apdrukātas dāvanas.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-background border border-border hover:text-[color:var(--primary)]">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-background border border-border hover:text-[color:var(--primary)]">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-4">Kontakti</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[color:var(--primary)]" /> +371 20 123 456
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[color:var(--primary)]" /> info@drukveratika.lv
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-[color:var(--primary)]" /> Rīga, Latvija
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-4">Sazinies ar mums</h3>
          <ContactForm compact />
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Drukveratika SIA. Visas tiesības aizsargātas.
      </div>
    </footer>
  );
}
