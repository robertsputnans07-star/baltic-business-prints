import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Sākums" },
  { to: "/par-mums", label: "Par mums" },
  { to: "/pakalpojumi", label: "Pakalpojumi" },
  { to: "/atsauksmes", label: "Atsauksmes" },
  { to: "/kontakti", label: "Kontakti" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" aria-label="Drukveratika sākums">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-[color:var(--primary)]"
              activeProps={{
                className:
                  "text-[color:var(--primary)] underline underline-offset-8 decoration-2",
              }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link to="/kontakti" className="btn-primary hidden md:inline-flex">
          Sazināties
        </Link>
      </div>
    </header>
  );
}
