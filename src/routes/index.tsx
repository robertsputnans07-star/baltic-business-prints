import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Handshake, Wallet } from "lucide-react";
import heroImg from "@/assets/hero-products.jpg";
import pensImg from "@/assets/product-pens.jpg";
import bagImg from "@/assets/product-bag.jpg";
import bottlesImg from "@/assets/product-bottles.jpg";
import otherImg from "@/assets/product-other.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Drukveratika — Apdrukātas dāvanas uzņēmumiem" },
      { name: "description", content: "Kvalitatīvas korporatīvas dāvanas ar Jūsu logo Baltijas uzņēmumiem." },
    ],
  }),
  component: Index,
});

const products = [
  { title: "Pildspalvas", img: pensImg },
  { title: "Maisiņi", img: bagImg },
  { title: "Pudeles", img: bottlesImg },
  { title: "Un daudz kas cits", img: otherImg },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="container-page pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Apdrukātas dāvanas uzņēmumiem,{" "}
              <span style={{ color: "var(--primary)" }}>kas strādā jūsu labā.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Kvalitatīvas dāvanas{" "}
              <span style={{ color: "var(--primary)" }}>ar Jūsu logo</span>, kas stiprina
              zīmolu, iepriecina klientus un motivē darbiniekus.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/kontakti" className="btn-primary">Sazināties</Link>
              <Link to="/pakalpojumi" className="btn-outline">Skatīt piemērus</Link>
            </div>
            <div className="mt-10 flex items-start gap-3 text-sm text-muted-foreground max-w-sm">
              <Handshake className="text-[color:var(--primary)] shrink-0 mt-0.5" size={28} />
              <span>Izdevīgi ilgtermiņa sadarbības risinājumi uzņēmumiem.</span>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Apdrukāti korporatīvie dāvanu piemēri ar Jūsu logo"
              width={1280}
              height={1024}
              className="rounded-2xl w-full h-auto object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="container-page py-12">
        <h2 className="text-3xl md:text-4xl text-center mb-10">Populārākie produktu piemēri</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <Link
              key={p.title}
              to="/pakalpojumi"
              className="group relative block rounded-2xl bg-card border border-border/60 p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
              <div className="aspect-square overflow-hidden rounded-xl bg-[color:var(--muted)]">
                <img src={p.img} alt={p.title} width={640} height={640} loading="lazy"
                  className="h-full w-full object-cover" />
              </div>
              <span className="absolute bottom-7 right-7 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--primary)] text-[color:var(--primary-foreground)] transition-transform group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="container-page py-12">
        <div className="rounded-2xl bg-[color:var(--primary-soft)] p-8 md:p-10 grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
          <div className="h-16 w-16 rounded-full bg-background flex items-center justify-center">
            <Wallet className="text-[color:var(--primary)]" size={28} />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl">
              Cenas pielāgotas{" "}
              <span style={{ color: "var(--primary)" }}>jūsu vajadzībām.</span>
            </h3>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Cenas atkarīgas no apjoma un prasībām. Piedāvājam izdevīgus nosacījumus
              un elastīgus risinājumus katram uzņēmumam. Visu piedāvājumu un cenas
              sūtām atsevišķi — klientam izdevīgāk.
            </p>
          </div>
          <Link to="/kontakti" className="btn-primary whitespace-nowrap">Sazināties ar mums</Link>
        </div>
      </section>
    </>
  );
}
