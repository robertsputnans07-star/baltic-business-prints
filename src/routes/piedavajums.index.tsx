import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import img1 from "@/assets/product-pens.jpg";
import img2 from "@/assets/product-bag.jpg";
import img3 from "@/assets/product-bottles.jpg";

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
  { to: "/piedavajums/klientu-piesaiste", title: "GŪSTI KLIENTUS", price: "no ~ 899€", img: img1 },
  { to: "/piedavajums/atpazistamiba", title: "PARĀDI SEVI VISIEM", price: "no ~ 399€", img: img2 },
  { to: "/piedavajums/sadarbiba", title: "STIPRINI SADARBĪBU", price: "no ~ 299€", img: img3 },
] as const;

function PiedavajumsIndex() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl leading-tight" style={{ color: "var(--primary)" }}>
          Izstādes stratēģijas pamatprincipi
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Katrai izstādei ir savs mērķis — piesaistīt jaunus klientus, palielināt atpazīstamību
          vai stiprināt esošās attiecības. Tāpēc esam izveidojuši trīs izstādes stratēģijas
          pamatprincipus, kurus kombinējot izstrādājam piemērotāko risinājumu katram uzņēmumam.
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
            <div className="rounded-full overflow-hidden aspect-square mx-auto w-[80%] bg-[color:var(--muted)]">
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
    </section>
  );
}
