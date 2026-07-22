import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail } from "lucide-react";
import { SurveyForm } from "@/components/SurveyForm";

export const Route = createFileRoute("/kontakti")({
  head: () => ({
    meta: [
      { title: "Aizpildi anketu — Drukveratika" },
      { name: "description", content: "Aizpildi aptauju un saņem personalizētu korporatīvo dāvanu risinājumu savai izstādei." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--primary)]">Aptauja</span>
          <h1 className="mt-3 text-4xl md:text-5xl leading-tight">Aizpildi anketu!</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Balstoties uz saņemto informāciju, izveidosim personalizētu korporatīvo dāvanu
            risinājumu un ieteiksim piemērotāko realizācijas stratēģiju tieši jūsu izstādei.
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
          <SurveyForm />
        </div>
      </div>
    </section>
  );
}
