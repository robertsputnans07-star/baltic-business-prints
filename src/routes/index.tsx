import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Award, BadgeEuro, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-products.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Drukveratika — Sasniedz mērķus savā izstādē" },
      { name: "description", content: "Personalizēti korporatīvo dāvanu risinājumi, kas palīdz Baltijas uzņēmumiem sasniegt izstādes mērķus." },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Clock, title: "Ietaupiet laiku", desc: "Pārbaudīta pieeja, pielāgots risinājums" },
  { icon: Award, title: "Augstākā vērtība", desc: "augstākā atdeve no katras dāvanas" },
  { icon: BadgeEuro, title: "Godīga cena", desc: "viss iekļauts, bez slēptām izmaksām" },
  { icon: ShieldCheck, title: "Pilns serviss", desc: "no idejas līdz piegādei" },
];

function Index() {
  return (
    <>
      <section className="container-page pt-12 pb-16 md:pt-20 md:pb-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              <span style={{ color: "var(--primary)" }}>Sasniedz</span> mērķus savā izstādē
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              Balstoties uz tirgus izpēti, Drukveratika ir izveidojusi{" "}
              <span style={{ color: "var(--primary)" }}>izstādes stratēģijas pamatprincipus</span>,
              lai izstrādātu personalizētus korporatīvo dāvanu risinājumus atbilstoši jūsu izstādes
              mērķiem. Aizpildi aptauju — mēs izveidosim{" "}
              <span style={{ color: "var(--primary)" }}>piemērotāko risinājumu</span> tieši jūsu izstādei!
            </p>
            <div className="mt-10">
              <Link
                to="/kontakti"
                className="inline-flex items-center gap-3 rounded-full bg-[color:var(--primary)] px-6 py-4 text-[color:var(--primary-foreground)] font-semibold shadow-lg hover:opacity-95 transition"
              >
                <span className="h-9 w-9 rounded-full border-2 border-[color:var(--primary-foreground)] flex items-center justify-center">
                  <ArrowRight size={18} />
                </span>
                Saņemt personalizētu risinājumu
              </Link>
            </div>
          </div>
          <div>
            <img
              src={heroImg}
              alt="Personalizētas korporatīvās dāvanas ar Drukveratika logo"
              width={1280}
              height={1024}
              className="rounded-2xl w-full h-auto object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="container-page pb-20 md:pb-28">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-start">
              <div className="h-14 w-14 rounded-2xl bg-[color:var(--primary-soft)] flex items-center justify-center mb-4">
                <f.icon className="text-[color:var(--primary)]" size={26} />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
