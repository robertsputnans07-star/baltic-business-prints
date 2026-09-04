import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import img1 from "@/assets/offer-clients.png.asset.json";
import img2 from "@/assets/offer-brand.png.asset.json";
import img3 from "@/assets/offer-partners.png.asset.json";
import penImg from "@/assets/sub-penbox.jpg.asset.json";

export const Route = createFileRoute("/piedavajums/")({
  head: () => ({
    meta: [
      { title: "Piedāvājums — Drukveratika" },
      { name: "description", content: "Izstādes stratēģijas pamatprincipi un sākuma risinājumi katram uzņēmumam." },
    ],
  }),
  component: PiedavajumsIndex,
});

const cards = [
  { to: "/piedavajums/klientu-piesaiste", title: "GŪSTI KLIENTUS", price: "no ~ 1290€ + PVN", img: img1.url },
  { to: "/piedavajums/atpazistamiba", title: "PARĀDI SEVI VISIEM", price: "no ~ 1490€ + PVN", img: img2.url },
  { to: "/piedavajums/sadarbiba", title: "STIPRINI SADARBĪBU", price: "no ~ 190€ + PVN", img: img3.url },
] as const;

function PiedavajumsIndex() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--primary)]">Piedāvājums</span>
        <h1 className="mt-3 text-4xl md:text-5xl leading-tight" style={{ color: "var(--primary)" }}>
          Izstādes stratēģijas pamatprincipi
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Katrai izstādei ir savs mērķis — piesaistīt jaunus klientus, palielināt atpazīstamību
          vai stiprināt esošās attiecības. Tāpēc esam izveidojuši trīs izstādes stratēģijas
          pamatprincipus, kurus izmantojam katras izstādes mērķa sasniegšanā.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className="group rounded-3xl border-2 border-[color:var(--primary)] bg-card p-4 flex flex-col hover:shadow-xl transition"
          >
            <div className="rounded-2xl bg-[color:var(--primary)] text-[color:var(--primary-foreground)] text-center font-bold py-3 px-2">
              {c.title}
            </div>
            <div className="text-center my-5 text-2xl font-semibold">{c.price}</div>
            <div className="rounded-2xl overflow-hidden aspect-square mx-auto w-[90%] bg-[color:var(--muted)]">
              <img src={c.img} alt={c.title} className="h-full w-full object-cover" />
            </div>
            <div className="mt-auto pt-5">
              <span className="mx-auto flex items-center justify-center gap-2 rounded-full bg-[color:var(--primary)] text-[color:var(--primary-foreground)] px-5 py-2 text-sm font-medium">
                Uzzināt vairāk <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
        <Link
          to="/kontakti"
          className="group rounded-3xl border-2 border-[color:var(--primary)] bg-card p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition"
        >
          <p className="text-xl font-bold">
            Izveido personalizētu risinājumu savai izstādei
          </p>
          <span className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[color:var(--primary)] text-[color:var(--primary-foreground)] px-5 py-2 text-sm font-medium">
            Uzzināt vairāk <ArrowRight size={14} />
          </span>
        </Link>
      </div>

      {/* Atdalošā līnija starp pirmo un otro piedāvājumu */}
      <div className="mt-16 h-px w-full" style={{ backgroundColor: "var(--primary)" }} />

      {/* Otrais piedāvājums */}
      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="max-w-sm">
          <Link
            to="/piedavajums/davanu-risinajums"
            className="group rounded-3xl border-2 border-[color:var(--primary)] bg-card p-4 flex flex-col hover:shadow-xl transition"
          >
            <div className="rounded-2xl bg-[color:var(--primary)] text-[color:var(--primary-foreground)] text-center font-bold py-3 px-2">
              PALIEC ATMIŅĀ
            </div>
            <div className="text-center my-5 text-2xl font-semibold">no ~ 990€ + PVN</div>
            <div className="rounded-2xl overflow-hidden aspect-square mx-auto w-[90%] bg-[color:var(--muted)]">
              <img src={penImg.url} alt="Pildspalva ar kartiņu" className="h-full w-full object-cover" />
            </div>
            <div className="mt-auto pt-5">
              <span className="mx-auto flex items-center justify-center gap-2 rounded-full bg-[color:var(--primary)] text-[color:var(--primary-foreground)] px-5 py-2 text-sm font-medium">
                Uzzināt vairāk <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl leading-tight" style={{ color: "var(--primary)" }}>
            Ne katram uzņēmumam ir nepieciešama pilna izstādes stratēģija
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Dažādās izstādēs uzņēmumiem ir atšķirīgi mērķi, apmeklētāju paradumi un veids, kā
            radīt interesi par savu piedāvājumu. Tāpēc ne vienmēr nepieciešama pilna stratēģiskā
            pieeja, lai dāvanas radītu vērtību.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Šādos gadījumos piedāvājam vienkāršotu dāvanu risinājumu, kas palīdz papildināt
            uzņēmuma dalību izstādē un palikt apmeklētāja atmiņā arī pēc tās.
          </p>
        </div>
      </div>
    </section>
  );
}
