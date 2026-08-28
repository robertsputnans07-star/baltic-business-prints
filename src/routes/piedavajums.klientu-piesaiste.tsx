import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import penboxImg from "@/assets/sub-penbox.jpg.asset.json";
import bottleImg from "@/assets/sub-bottle.png.asset.json";

export const Route = createFileRoute("/piedavajums/klientu-piesaiste")({
  head: () => ({
    meta: [
      { title: "Klientu piesaistes pamata risinājums — Drukveratika" },
      { name: "description", content: "Personalizētas korporatīvās dāvanas jaunu klientu piesaistei izstādēs." },
    ],
  }),
  component: Page,
});

const items = [
  { img: penboxImg.url, label: "pildspalvas + kartiņa", qty: "850 gab." },
  { img: bottleImg.url, label: "pudeles", qty: "255 gab." },
];

function Page() {
  return (
    <section className="container-page py-16 md:py-24">
      <Link
        to="/piedavajums"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--primary)] hover:underline mb-8"
      >
        <ArrowLeft size={16} /> Atpakaļ
      </Link>
      <h1 className="text-3xl md:text-4xl mb-10">Klientu piesaistes pamata risinājums</h1>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <div className="grid gap-6 sm:grid-cols-2">
            {items.map((it) => (
              <div key={it.label} className="flex flex-col gap-3">
                <div className="rounded-2xl overflow-hidden aspect-square bg-[color:var(--primary-soft)]">
                  <img src={it.img} alt={it.label} className="h-full w-full object-cover" />
                </div>
                <div className="text-lg font-semibold text-center">
                  {it.label} — {it.qty}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground">Iekļauta personalizācija un drukas sagatavošana.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold" style={{ color: "var(--primary)" }}>
            Kāpēc šī stratēģija strādā?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Šis pamata risinājums ir veidots uzņēmumiem, kuru galvenais izstādes mērķis ir{" "}
            <span style={{ color: "var(--primary)" }}>piesaistīt jaunus klientus un veidot kvalitatīvus kontaktus</span>.
            Stratēģijas pamatā ir personalizētas korporatīvās dāvanas, kas ne tikai nes uzņēmuma
            logo, bet arī vizuāli un konceptuāli atspoguļo pašu uzņēmumu. Dāvanas tiek pasniegtas
            pēc sarunas, palielinot iespēju, ka katrs kontakts kļūs par potenciālu sadarbību.
          </p>
          <div className="mt-8 rounded-2xl bg-[color:var(--primary-soft)] p-6">
            <p className="mb-4 text-sm font-semibold" style={{ color: "var(--primary)" }}>
              Augšā redzamais pamata risinājums ir tikai piemērs, izveido savu risinājumu!
            </p>
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
              Katram risinājumam izveidojam arī realizācijas stratēģiju.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
