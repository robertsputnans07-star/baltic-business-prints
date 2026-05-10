import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/kontakti")({
  head: () => ({
    meta: [
      { title: "Kontakti — Drukveratika" },
      { name: "description", content: "Sazinies ar Drukveratika komandu — e-pasts un tālrunis." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--primary)]">Kontakti</span>
          <h1 className="mt-3 text-4xl md:text-5xl leading-tight">Sazinies ar mums</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Atstāj ziņu vai raksti tieši uz e-pastu — atbildam darba dienās 24h laikā.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-4">
              <span className="h-12 w-12 rounded-full bg-[color:var(--primary-soft)] flex items-center justify-center">
                <Phone className="text-[color:var(--primary)]" size={20} />
              </span>
              <div>
                <div className="text-sm text-muted-foreground">Roberts</div>
                <a href="tel:+37126779996" className="font-semibold">+371 26 779 996</a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="h-12 w-12 rounded-full bg-[color:var(--primary-soft)] flex items-center justify-center">
                <Phone className="text-[color:var(--primary)]" size={20} />
              </span>
              <div>
                <div className="text-sm text-muted-foreground">Ričards</div>
                <a href="tel:+37128777710" className="font-semibold">+371 28 777 710</a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="h-12 w-12 rounded-full bg-[color:var(--primary-soft)] flex items-center justify-center">
                <Mail className="text-[color:var(--primary)]" size={20} />
              </span>
              <div>
                <div className="text-sm text-muted-foreground">E-pasts</div>
                <a href="mailto:info.drukveratika@gmail.com" className="font-semibold">info.drukveratika@gmail.com</a>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-card border border-border/60 p-7 md:p-9">
          <h2 className="text-xl font-semibold mb-5">Atstāj ziņu</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
