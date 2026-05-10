import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/atsauksmes")({
  head: () => ({
    meta: [
      { title: "Atsauksmes — Drukveratika" },
      { name: "description", content: "Ko par mūsu darbu saka Baltijas uzņēmumi un mūsu klienti." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  {
    text: "Drukveratika sagatavoja izcilas dāvanas mūsu klientiem izstādei Rīgā. Kvalitāte un piegāde laikā — bez nevienas piezīmes.",
    name: "SIA C****",
  },
  {
    text: "Apdrukātās krūzes un blociņi ar mūsu logo ir kļuvušas par neatņemamu sastāvdaļu darbinieku ikdienā. Iesakām!",
    name: "SIA K****",
  },
  {
    text: "Operatīva komunikācija un elastīga pieeja. Saņēmām individuālu piedāvājumu, kas precīzi atbilda mūsu budžetam.",
    name: "SIA A****",
  },
];

function ReviewsPage() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--primary)]">Atsauksmes</span>
        <h1 className="mt-3 text-4xl md:text-5xl leading-tight">Ko saka mūsu klienti</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Mēs lepojamies ar ilgtermiņa sadarbību un godīgām atsauksmēm.
        </p>
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
