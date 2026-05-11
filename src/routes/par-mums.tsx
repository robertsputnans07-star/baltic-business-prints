import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Pencil, Package, Truck } from "lucide-react";
import medbaltica from "@/assets/exhibitions/medbaltica.jpg";
import rigacomm from "@/assets/exhibitions/rigacomm.jpg";
import furniture from "@/assets/exhibitions/furniture.jpg";
import techindustry from "@/assets/exhibitions/techindustry.jpg";
import balttour from "@/assets/exhibitions/balttour.jpg";
import outdoor from "@/assets/exhibitions/outdoor.jpg";
import maja from "@/assets/exhibitions/maja.jpg";
import auto from "@/assets/exhibitions/auto.jpg";
import darzs from "@/assets/exhibitions/darzs.jpg";

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

// Positions around the circle (percentage based, top/left)
const exhibitions = [
  { src: medbaltica, alt: "Medbaltica", top: "2%", left: "38%", size: 110 },
  { src: rigacomm, alt: "Riga Comm", top: "8%", left: "72%", size: 100 },
  { src: furniture, alt: "Riga Furniture & Interior", top: "32%", left: "88%", size: 110 },
  { src: techindustry, alt: "Tech Industry", top: "60%", left: "85%", size: 100 },
  { src: balttour, alt: "Balttour", top: "82%", left: "65%", size: 110 },
  { src: outdoor, alt: "Outdoor Riga", top: "85%", left: "32%", size: 110 },
  { src: maja, alt: "Māja", top: "68%", left: "5%", size: 100 },
  { src: auto, alt: "Auto", top: "35%", left: "2%", size: 110 },
  { src: darzs, alt: "Dārzs un dzīvesstils", top: "8%", left: "8%", size: 100 },
];

function AboutPage() {
  return (
    <>
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
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

          {/* Exhibitions circle */}
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            {/* Centered text */}
            <div className="absolute inset-[22%] rounded-full bg-[color:var(--primary-soft)] flex items-center justify-center text-center p-6">
              <p className="text-base md:text-lg font-semibold text-[color:var(--primary)] leading-snug">
                Izstādes, kurās jau iepriekš esam palīdzējuši uzņēmumiem
              </p>
            </div>
            {/* Logos around the circle */}
            {exhibitions.map((e) => (
              <div
                key={e.alt}
                className="absolute rounded-full overflow-hidden bg-white shadow-md ring-1 ring-border/40"
                style={{
                  top: e.top,
                  left: e.left,
                  width: e.size,
                  height: e.size,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img
                  src={e.src}
                  alt={e.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
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
