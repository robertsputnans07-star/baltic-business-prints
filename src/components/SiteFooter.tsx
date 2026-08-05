import { Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { ContactForm } from "./ContactForm";

export function SiteFooter() {
  return (
    <footer id="kontakti" className="border-t border-border/60 bg-[color:var(--primary-soft)]/40 mt-24">
      <div className="container-page py-16 grid gap-12 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Personalizēti korporatīvo dāvanu risinājumi katras izstādes mērķu sasniegšanai.
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-4">Kontakti</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[color:var(--primary)]" /> Roberts — +371 26 779 996
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[color:var(--primary)]" /> Ričards — +371 28 777 710
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[color:var(--primary)]" /> info.drukveratika@gmail.com
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
