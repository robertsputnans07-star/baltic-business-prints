import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Pencil, Package, Truck } from "lucide-react";
import heroProducts from "@/assets/hero-products.jpg";
import productPens from "@/assets/product-pens.jpg";
import productBag from "@/assets/product-bag.jpg";
import productBottles from "@/assets/product-bottles.jpg";
import productOther from "@/assets/product-other.jpg";

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
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl">
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

          <div className="relative h-[460px] md:h-[520px] w-full">
            {/* Scattered images */}
            <img
              src={heroProducts}
              alt="Apdrukāti produkti"
              className="absolute top-0 left-2 w-40 md:w-48 h-32 md:h-36 object-cover rounded-2xl shadow-lg rotate-[-6deg] border-4 border-card"
              loading="lazy"
            />
            <img
              src={productPens}
              alt="Apdrukātas pildspalvas"
              className="absolute top-4 right-2 w-36 md:w-44 h-28 md:h-32 object-cover rounded-2xl shadow-lg rotate-[5deg] border-4 border-card"
              loading="lazy"
            />
            <img
              src={productBag}
              alt="Apdrukāta soma"
              className="absolute bottom-6 left-0 w-36 md:w-40 h-32 md:h-36 object-cover rounded-2xl shadow-lg rotate-[-4deg] border-4 border-card"
              loading="lazy"
            />
            <img
              src={productBottles}
              alt="Apdrukātas pudeles"
              className="absolute bottom-0 right-6 w-36 md:w-44 h-28 md:h-32 object-cover rounded-2xl shadow-lg rotate-[6deg] border-4 border-card"
              loading="lazy"
            />
            <img
              src={productOther}
              alt="Citi produkti"
              className="absolute bottom-20 right-0 w-28 md:w-32 h-24 md:h-28 object-cover rounded-2xl shadow-lg rotate-[10deg] border-4 border-card hidden md:block"
              loading="lazy"
            />

            {/* Centered caption */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 max-w-[220px] text-center">
              <div className="bg-[color:var(--primary)] text-[color:var(--primary-foreground)] rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-sm md:text-base font-semibold leading-snug">
                  Izstādes, kurās jau esam palīdzējuši uzņēmumiem
                </p>
              </div>
            </div>
          </div>
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
