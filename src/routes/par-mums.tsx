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
  { icon: Lightbulb, title: "Aptauja", desc: "Aizpildi īsu aptauju par savu uzņēmumu, izstādes mērķiem un budžetu." },
  { icon: Pencil, title: "Personalizēta stratēģija", desc: "Balstoties uz aptaujas rezultātiem, izstrādājam piemērotāko korporatīvo dāvanu risinājumu tieši tavai izstādei." },
  { icon: Package, title: "Saskaņošana", desc: "Pielāgojam produktus, daudzumus, dizainu un budžetu, līdz risinājums pilnībā atbilst jūsu vajadzībām." },
  { icon: Truck, title: "Ražošana un piegāde", desc: "Nodrošinām kvalitatīvu apdruku, ražošanu un savlaicīgu piegādi visā Baltijā." },
];

function AboutPage() {
  return (
    <>
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--primary)]">Par mums</span>
            <h1 className="mt-3 text-4xl md:text-5xl leading-tight">
              Personalizēti korporatīvo dāvanu risinājumi Baltijas uzņēmumiem
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              <strong>Drukveratika</strong> palīdz Baltijas uzņēmumiem sasniegt izstāžu mērķus,
              izstrādājot personalizētus korporatīvo dāvanu risinājumus. Balstoties uz tirgus
              izpēti un izstādes stratēģijas pamatprincipiem, mēs izvēlamies piemērotākos
              produktus, daudzumu un pieeju katra uzņēmuma vajadzībām.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              No dizaina izstrādes un apdrukas līdz gatavam risinājumam — mēs nodrošinām visu
              procesu, lai korporatīvās dāvanas kļūtu par efektīvu instrumentu klientu piesaistei,
              zīmola atpazīstamībai un sadarbības stiprināšanai.
            </p>
          </div>

          <div className="w-full">
            <div className="relative mx-auto w-full max-w-[560px] aspect-square">
              {/* Center caption — smaller box, larger text filling it */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[34%] aspect-square">
                <div className="bg-[color:var(--primary)] text-[color:var(--primary-foreground)] rounded-2xl shadow-xl w-full h-full flex items-center justify-center px-2 py-2 text-center">
                  <p className="text-[13px] md:text-[15px] font-bold leading-tight">
                    Izstādes, kurās jau esam palīdzējuši uzņēmumiem
                  </p>
                </div>
              </div>

              {/* Scattered images — irregular positions, not a strict circle */}
              {[
                { src: expoMedbaltica, alt: "Medbaltica '26", x: 8,  y: 6,  rot: -6 },
                { src: expoRigacomm,   alt: "Riga Comm 2026", x: 46, y: 2,  rot: 4 },
                { src: expoFurniture,  alt: "Riga Furniture & Interior 2026", x: 80, y: 12, rot: -3 },
                { src: expoTechindustry, alt: "Tech Industry 2026", x: 2,  y: 44, rot: 5 },
                { src: expoBalttour,   alt: "Balttour 2027", x: 78, y: 46, rot: -5 },
                { src: expoOutdoor,    alt: "Outdoor Riga 2027", x: 14, y: 78, rot: 6 },
                { src: expoMaja,       alt: "Māja 2027", x: 50, y: 84, rot: -4 },
                { src: expoAuto,       alt: "Auto '27", x: 84, y: 76, rot: 5 },
                { src: expoDarzs,      alt: "Dārzs un dzīvesstils 2027", x: 38, y: 40, rot: -7 },
              ].map((item, i) => (
                <img
                  key={i}
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute w-[24%] aspect-[4/3] object-cover rounded-xl shadow-lg border-2 border-card"
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
