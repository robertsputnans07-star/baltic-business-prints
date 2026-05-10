import { createFileRoute } from '@tanstack/react-router'
import { Gift, Pencil, Package, Truck } from "lucide-react";

export const Route = createFileRoute("/pakalpojumi")({
  head: () => ({
    meta: [
      { title: "Pakalpojumi — Drukveratika" },
      { name: "description", content: "Korporatīvās dāvanas izstādēm, biroja piederumi ar Jūsu logo, individuāli risinājumi un bezmaksas piegāde Baltijā." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Gift,
    title: "Korporatīvās dāvanas izstādēm",
    desc: "Nodrošinām korporatīvās dāvanas Jūsu uzņēmumam izstādēm, konferencēm un pasākumiem — iespaidīgi un atmiņās paliekoši.",
  },
  {
    icon: Pencil,
    title: "Apdrukāti biroja piederumi",
    desc: "Apdrukājam biroja piederumus ar Jūsu logo — pildspalvas, blociņus, krūzes un daudz ko citu darbiniekiem.",
  },
  {
    icon: Package,
    title: "Individuāli risinājumi",
    desc: "Veidojam unikālus risinājumus uzņēmumiem — no koncepta līdz galaproduktam atbilstoši Jūsu zīmolam.",
  },
  {
    icon: Truck,
    title: "Bezmaksas piegāde Baltijā",
    desc: "Visā Baltijā piegādājam Jūsu pasūtījumu bez papildu maksas — Latvijā, Lietuvā un Igaunijā.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="container-page py-16 md:py-24">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--primary)]">Pakalpojumi</span>
          <h1 className="mt-3 text-4xl md:text-5xl leading-tight">
            Drukveratika piedāvā
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Pilns pakalpojumu klāsts korporatīvajām dāvanām un biroja piederumu apdrukai.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <div key={s.title} className="rounded-2xl bg-card border border-border/60 p-7 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-14 w-14 rounded-xl bg-[color:var(--primary-soft)] flex items-center justify-center">
                  <s.icon className="text-[color:var(--primary)]" size={26} />
                </div>
                <span className="text-sm font-semibold text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}
