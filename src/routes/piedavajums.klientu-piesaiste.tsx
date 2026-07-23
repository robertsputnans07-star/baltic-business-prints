import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import penboxImg from "@/assets/sub-penbox.jpg.asset.json";
import bottleImg from "@/assets/sub-bottle.png.asset.json";
import bagImg from "@/assets/sub-bag.png.asset.json";

export const Route = createFileRoute("/piedavajums/klientu-piesaiste")({
  head: () => ({
    meta: [
      { title: "Klientu piesaistes sākuma risinājums — Drukveratika" },
      { name: "description", content: "Personalizētas korporatīvās dāvanas jaunu klientu piesaistei izstādēs." },
    ],
  }),
  component: Page,
});

const items = [
  { img: penboxImg.url, label: "pildspalvas + kartiņa", qty: "510 gab." },
  { img: bottleImg.url, label: "pudeles", qty: "40 gab." },
  { img: bagImg.url, label: "maisiņi", qty: "40 gab." },
];

function Page() {
  return (
    <section className="container-page py-16 md:py-24">
      <Link
        to="/piedavajums"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--primary)] hover:underline mb-8"
      >
        <ArrowLeft size={16} /> Atpakaļ uz piedāvājumu
      </Link>
      <h1 className="text-3xl md:text-4xl mb-10">Klientu piesaistes sākuma risinājums</h1>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <div className="space-y-8">
            {items.map((it, i) => {
              const imageFirst = i % 2 === 0;
              const image = (
                <div className="rounded-2xl overflow-hidden aspect-square bg-[color:var(--primary-soft)]">
                  <img src={it.img} alt={it.label} className="h-full w-full object-cover" />
                </div>
              );
              const text = (
                <div className="text-lg font-semibold">
                  {it.label} — {it.qty}
                </div>
              );
              return (
                <div key={it.label} className="grid grid-cols-[160px_1fr] items-center gap-5">
                  {imageFirst ? (<>{image}{text}</>) : (<>{text}{image}</>)}
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-muted-foreground">Iekļauta personalizācija un drukas sagatavošana.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold" style={{ color: "var(--primary)" }}>
            Kāpēc šī stratēģija strādā?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Šis sākuma risinājums ir veidots uzņēmumiem, kuru galvenais izstādes mērķis ir{" "}
            <span style={{ color: "var(--primary)" }}>piesaistīt jaunus klientus un veidot kvalitatīvus kontaktus</span>.
            Stratēģijas pamatā ir personalizētas korporatīvās dāvanas, kas ne tikai nes uzņēmuma
            logo, bet arī vizuāli un konceptuāli atspoguļo pašu uzņēmumu. Dāvanas tiek pasniegtas
            pēc sarunas, palielinot iespēju, ka katrs kontakts kļūs par potenciālu sadarbību.
          </p>
          <div className="mt-8 rounded-2xl bg-[color:var(--primary-soft)] p-6">
            <Link
              to="/kontakti"
              className="inline-flex items-center gap-3 rounded-full bg-[color:var(--primary)] px-5 py-3 text-[color:var(--primary-foreground)] font-semibold"
            >
              <span className="h-8 w-8 rounded-full border-2 border-[color:var(--primary-foreground)] flex items-center justify-center">
                <ArrowRight size={16} />
              </span>
              Saņemt personalizētu risinājumu
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Izstādes mērķi, auditorija un budžets katram uzņēmumam ir atšķirīgi. Tāpēc
              personalizēts risinājums vienmēr nodrošina precīzāku pieeju nekā gatavs sākuma variants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
