import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import whitePenImg from "@/assets/sub-whitepen.jpg.asset.json";
import keychainImg from "@/assets/sub-keychain.jpg.asset.json";

export const Route = createFileRoute("/piedavajums/atpazistamiba")({
  head: () => ({
    meta: [
      { title: "Atpazīstamības pamata risinājums — Drukveratika" },
      { name: "description", content: "Zīmola atpazīstamības risinājums plašai auditorijai izstādē." },
    ],
  }),
  component: Page,
});

const items = [
  { img: whitePenImg.url, label: "pildspalvas", qty: "510 gab." },
  { img: keychainImg.url, label: "piekariņi", qty: "110 gab." },
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
      <h1 className="text-3xl md:text-4xl mb-10">Atpazīstamības pamata risinājums</h1>
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
            <span style={{ color: "var(--primary)" }}>palielināt zīmola atpazīstamību un sasniegt pēc iespējas plašāku auditoriju</span>.
            Stratēģijas pamatā ir efektīva dāvanu izplatīšana, nodrošinot, ka uzņēmuma zīmols nonāk
            pie liela skaita izstādes apmeklētāju. Šī pieeja ļauj sasniegt plašu auditoriju ar
            pārdomātu budžetu un veidot ilgstošu zīmola klātbūtni arī pēc izstādes.
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
