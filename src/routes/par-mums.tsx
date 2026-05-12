import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Pencil, Package, Truck } from "lucide-react";
import expoMedbaltica from "@/assets/expo-medbaltica.jpg";
import expoRigacomm from "@/assets/expo-rigacomm.jpg";
import expoFurniture from "@/assets/expo-furniture.jpg";
import expoTechindustry from "@/assets/expo-techindustry.jpg";
import expoBalttour from "@/assets/expo-balttour.jpg";
import expoOutdoor from "@/assets/expo-outdoor.jpg";
import expoMaja from "@/assets/expo-maja.jpg";
import expoAuto from "@/assets/expo-auto.jpg";
import expoDarzs from "@/assets/expo-darzs.jpg";

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

          <div className="w-full">
            <div className="relative mx-auto w-full max-w-[560px] aspect-square">
              {/* Center caption — text fills the square */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[34%] aspect-square">
                <div className="bg-[color:var(--primary)] text-[color:var(--primary-foreground)] rounded-2xl shadow-xl w-full h-full flex items-center justify-center px-3 py-3 text-center">
                  <p className="text-base md:text-xl font-bold leading-tight">
                    Izstādes, kurās jau esam palīdzējuši uzņēmumiem
                  </p>
                </div>
              </div>

              {/* Scattered images, tight around the center without overlapping */}
              {[
                { src: expoMedbaltica,   alt: "Medbaltica '26",                 x: 2,  y: 4,  rot: -4 },
                { src: expoRigacomm,     alt: "Riga Comm 2026",                 x: 39, y: 6,  rot: 3 },
                { src: expoFurniture,    alt: "Riga Furniture & Interior 2026", x: 76, y: 4,  rot: -3 },
                { src: expoTechindustry, alt: "Tech Industry 2026",             x: 4,  y: 30, rot: 4 },
                { src: expoBalttour,     alt: "Balttour 2027",                  x: 74, y: 30, rot: -4 },
                { src: expoOutdoor,      alt: "Outdoor Riga 2027",              x: 4,  y: 56, rot: 3 },
                { src: expoDarzs,        alt: "Dārzs un dzīvesstils 2027",      x: 74, y: 56, rot: -3 },
                { src: expoMaja,         alt: "Māja 2027",                      x: 22, y: 78, rot: 4 },
                { src: expoAuto,         alt: "Auto '27",                       x: 56, y: 78, rot: -4 },
              ].map((item, i) => (
                <img
                  key={i}
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute w-[22%] aspect-[4/3] object-cover rounded-xl shadow-lg border-2 border-card"
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    transform: `rotate(${item.rot}deg)`,
                  }}
                />
              ))}
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
