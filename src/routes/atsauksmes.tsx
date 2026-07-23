import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/atsauksmes")({
  head: () => ({
    meta: [
      { title: "Atsauksmes — Drukveratika" },
      { name: "description", content: "Ko par mūsu personalizētajiem risinājumiem saka Baltijas uzņēmumi." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  {
    text: "Liels paldies Drukveratikas komandai par ieguldīto darbu! Sākumā plānojām vienkārši pasūtīt korporatīvās dāvanas, taču jūsu pieeja pilnībā mainīja mūsu skatījumu. Aptauja palīdzēja saprast mūsu izstādes mērķus, un saņemtais risinājums bija daudz pārdomātāks, nekā paši būtu spējuši izveidot.",
    name: "SIA C****",
  },
  {
    text: "Paldies par operatīvo komunikāciju un profesionālo pieeju! Visa sadarbība bija vienkārša un pārskatāma. Mēs aizpildījām aptauju, pārējo paveica Drukveratika. Saņēmām kvalitatīvus produktus, skaidru komunikāciju un savlaicīgu piegādi.",
    name: "SIA K****",
  },
  {
    text: "Esam ļoti apmierināti ar sadarbību! Patika, ka katram ieteikumam bija skaidrs pamatojums. Nebija sajūtas, ka vienkārši izvēlamies produktus no kataloga – viss risinājums bija pārdomāts un pielāgots mūsu izstādes mērķiem.",
    name: "SIA A****",
  },
];

function ReviewsPage() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--primary)]">Atsauksmes</span>
        <h1 className="mt-3 text-4xl md:text-5xl leading-tight">Ko saka mūsu klienti</h1>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.name} className="rounded-2xl bg-card border border-border/60 p-7 flex flex-col">
            <Quote className="text-[color:var(--primary)] mb-4" size={28} />
            <blockquote className="text-foreground/90 flex-1">"{r.text}"</blockquote>
            <figcaption className="mt-6 pt-4 border-t border-border/60">
              <div className="font-semibold">{r.name}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
