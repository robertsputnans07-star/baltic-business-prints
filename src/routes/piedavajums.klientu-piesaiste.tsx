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
        </div>
        <div>
          <p className="text-muted-foreground">
            Ja Jūsu izstādes galvenais mērķis ir iegūt kvalitatīvus kontaktus, korporatīvās dāvanas
            kļūst daudz nozīmīgākas par vienkāršu uzņēmuma reklāmas materiālu — tās kļūst par
            instrumentu, kas palīdz piesaistīt īstos cilvēkus, veidot vērtīgas sarunas un virzīt tās
            pretī potenciālai sadarbībai.
          </p>
          <p className="mt-4 text-muted-foreground">
            Lai korporatīvās dāvanas patiešām palīdzētu sasniegt šo mērķi, nepieciešams pārdomāts
            risinājums, kurā ietilpst izstādes stratēģija, atbilstoši izstādei aprēķināti dāvanu
            daudzumi un proporcijas, piemērota dāvanu izvēle, personalizācija, dizains un skaidra
            realizācijas kārtība.
          </p>
          <p className="mt-4 text-muted-foreground">
            Mēs izveidosim šo risinājumu atbilstoši Jūsu izstādei, uzņēmumam un konkrētajai
            situācijai, lai tas būtu efektīvs, palīdzētu vadīt izstādi un nodrošinātu kvalitatīvus
            kontaktus turpmākai komunikācijai.
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
          </div>
        </div>
      </div>
    </section>
  );
}
