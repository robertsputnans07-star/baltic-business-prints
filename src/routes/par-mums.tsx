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
            <div className="grid grid-cols-3 grid-rows-4 gap-3 md:gap-4">
              <img src={expoMedbaltica} alt="Medbaltica '26" className="w-full h-24 md:h-28 object-cover rounded-xl shadow-md rotate-[-3deg] border-2 border-card" loading="lazy" />
              <img src={expoRigacomm} alt="Riga Comm 2026" className="w-full h-24 md:h-28 object-cover rounded-xl shadow-md rotate-[2deg] border-2 border-card" loading="lazy" />
              <img src={expoFurniture} alt="Riga Furniture & Interior 2026" className="w-full h-24 md:h-28 object-cover rounded-xl shadow-md rotate-[3deg] border-2 border-card" loading="lazy" />

              <img src={expoTechindustry} alt="Tech Industry 2026" className="w-full h-24 md:h-28 object-cover rounded-xl shadow-md rotate-[-2deg] border-2 border-card" loading="lazy" />
              <div className="row-span-2 flex items-center justify-center">
                <div className="bg-[color:var(--primary)] text-[color:var(--primary-foreground)] rounded-2xl px-4 py-5 shadow-xl text-center w-full h-full flex items-center justify-center">
                  <p className="text-sm md:text-base font-semibold leading-snug">
                    Izstādes, kurās jau esam palīdzējuši uzņēmumiem
                  </p>
                </div>
              </div>
              <img src={expoBalttour} alt="Balttour 2027" className="w-full h-24 md:h-28 object-cover rounded-xl shadow-md rotate-[3deg] border-2 border-card" loading="lazy" />

              <img src={expoOutdoor} alt="Outdoor Riga 2027" className="w-full h-24 md:h-28 object-cover rounded-xl shadow-md rotate-[2deg] border-2 border-card" loading="lazy" />
              <img src={expoAuto} alt="Auto '27" className="w-full h-24 md:h-28 object-cover rounded-xl shadow-md rotate-[-3deg] border-2 border-card" loading="lazy" />

              <img src={expoMaja} alt="Māja 2027" className="w-full h-24 md:h-28 object-cover rounded-xl shadow-md rotate-[-2deg] border-2 border-card" loading="lazy" />
              <img src={expoDarzs} alt="Dārzs un dzīvesstils 2027" className="w-full h-24 md:h-28 object-cover rounded-xl shadow-md rotate-[3deg] border-2 border-card" loading="lazy" />
              <div />
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
