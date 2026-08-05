import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import mugImg from "@/assets/sub-mug.png.asset.json";

export const Route = createFileRoute("/piedavajums/sadarbiba")({
  head: () => ({
    meta: [
      { title: "Sadarbības stiprināšanas pamata risinājums — Drukveratika" },
      { name: "description", content: "Kvalitatīvas dāvanas nozīmīgu klientu un partneru attiecību stiprināšanai." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="container-page py-16 md:py-24">
      <Link
        to="/piedavajums"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--primary)] hover:underline mb-8"
      >
        <ArrowLeft size={16} /> Atpakaļ
      </Link>
      <h1 className="text-3xl md:text-4xl mb-10">Sadarbības stiprināšanas pamata risinājums (piemērs)</h1>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <div className="flex flex-col gap-4 max-w-md">
            <div className="rounded-2xl overflow-hidden aspect-square bg-[color:var(--primary-soft)]">
              <img src={mugImg.url} alt="dāvanu komplekti" className="h-full w-full object-cover" />
            </div>
            <div className="text-lg font-semibold text-center">dāvanu komplekti — 15 gab.</div>
          </div>
          <p className="mt-8 text-muted-foreground">Iekļauta personalizācija un drukas sagatavošana.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold" style={{ color: "var(--primary)" }}>
            Kāpēc šī stratēģija strādā?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Šis pamata risinājums ir veidots uzņēmumiem, kuru galvenais izstādes mērķis ir{" "}
            <span style={{ color: "var(--primary)" }}>stiprināt attiecības ar nozīmīgiem klientiem, sadarbības partneriem un komandu</span>.
            Stratēģijas pamatā ir kvalitatīvas un pārdomāti noformētas dāvanas, kas izceļ uzņēmuma
            attieksmi, pateicību un vēlmi veidot ilgtermiņa sadarbību. Šāda pieeja palīdz radīt
            personiskāku iespaidu un sniedz lielāku vērtību nekā tradicionāls reklāmas suvenīrs.
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
