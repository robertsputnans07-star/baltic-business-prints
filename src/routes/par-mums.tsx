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

          <div className="relative h-[520px] md:h-[600px] w-full">
            {/* Scattered exhibition logos */}
            <img src={expoMedbaltica} alt="Medbaltica '26" className="absolute top-0 left-0 w-36 md:w-44 rounded-xl shadow-lg rotate-[-8deg] border-4 border-card" loading="lazy" />
            <img src={expoRigacomm} alt="Riga Comm 2026" className="absolute top-2 right-4 w-32 md:w-40 rounded-xl shadow-lg rotate-[7deg] border-4 border-card" loading="lazy" />
            <img src={expoFurniture} alt="Riga Furniture & Interior 2026" className="absolute top-[28%] left-[-10px] w-32 md:w-40 rounded-xl shadow-lg rotate-[5deg] border-4 border-card" loading="lazy" />
            <img src={expoTechindustry} alt="Tech Industry 2026" className="absolute top-[30%] right-0 w-32 md:w-40 rounded-xl shadow-lg rotate-[-6deg] border-4 border-card" loading="lazy" />
            <img src={expoBalttour} alt="Balttour 2027" className="absolute bottom-[28%] left-[35%] w-32 md:w-40 rounded-xl shadow-lg rotate-[-4deg] border-4 border-card hidden md:block" loading="lazy" />
            <img src={expoOutdoor} alt="Outdoor Riga 2027" className="absolute bottom-[6%] left-2 w-32 md:w-40 rounded-xl shadow-lg rotate-[6deg] border-4 border-card" loading="lazy" />
            <img src={expoMaja} alt="Māja 2027" className="absolute bottom-0 left-[40%] w-28 md:w-36 rounded-xl shadow-lg rotate-[-7deg] border-4 border-card" loading="lazy" />
            <img src={expoAuto} alt="Auto '27" className="absolute bottom-[8%] right-2 w-32 md:w-40 rounded-xl shadow-lg rotate-[8deg] border-4 border-card" loading="lazy" />
            <img src={expoDarzs} alt="Dārzs un dzīvesstils 2027" className="absolute top-[55%] right-[38%] w-28 md:w-32 rounded-xl shadow-lg rotate-[10deg] border-4 border-card hidden md:block" loading="lazy" />

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
