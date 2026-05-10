import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Pencil, Package, Truck } from "lucide-react";

export const Route = createFileRoute("/par-mums")({
  head: () => ({
    meta: [
      { title: "Par mums — Drukveratika" },
      { name: "description", content: "Drukveratika — uzņēmums, kas Baltijas uzņēmumiem nodrošina korporatīvas dāvanas klientiem un darbiniekiem." },
    ],
  }),
  component: AboutPage,
});

const steps = [
  { icon: Lightbulb, title: "Ideja", desc: "Kopā ar Jums izstrādājam koncepciju, kas atspoguļo Jūsu zīmolu." },
  { icon: Pencil, title: "Piedāvājums", desc: "Sagatavojam vizuālu piedāvājumu un pielāgojam to budžetam." },
  { icon: Package, title: "Maketi", desc: "Izveidojam apdrukas maketus apstiprināšanai pirms ražošanas." },
  { icon: Truck, title: "Ražošana un piegāde", desc: "Kvalitatīva apdruka un savlaicīga piegāde visā Baltijā." },
];

function AboutPage() {
  return (
    <>
      <section className="container-page py-16 md:py-24">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--primary)]">Par mums</span>
          <h1 className="mt-3 text-4xl md:text-5xl leading-tight">
            Korporatīvas dāvanas Baltijas uzņēmumiem
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            <strong>Drukveratika</strong> specializējas kvalitatīvu korporatīvo dāvanu
            izstrādē un sagatavošanā Baltijas uzņēmumiem. Mēs nodrošinām pilnu servisu —
            no dizaina izstrādes un apdrukas līdz gatavam risinājumam izstādēm,
            pasākumiem un ikdienas reprezentācijai.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Mūsu mērķis ir radīt korporatīvās dāvanas, kas stiprina uzņēmuma tēlu,
            atstāj profesionālu iespaidu un palīdz veidot spēcīgākas attiecības ar
            klientiem, partneriem un darbiniekiem.
          </p>
        </div>
      </section>

      <section className="container-page pb-20">
        <h2 className="text-2xl md:text-3xl mb-10">Kā mēs strādājam — no idejas līdz rezultātam</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl bg-card border border-border/60 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-10 w-10 rounded-full bg-[color:var(--primary-soft)] flex items-center justify-center text-[color:var(--primary)] font-bold">
                  {i + 1}
                </span>
                <s.icon className="text-[color:var(--primary)]" size={22} />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
