import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Cpu } from "lucide-react";
import logoMaia from "@/assets/logomaia.asset.json";

const links = [
  { to: "/", label: "Sobre nós e projetos" },
  { to: "/historia", label: "História" },
  { to: "/loja", label: "Loja" },
  { to: "/contato", label: "Contato" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
            <img src={logoMaia.url} alt="MAIA — Mobilidade Aplicada à Inteligência Artificial" className="h-9 w-9 object-contain" />
            <div className="leading-none">
              <div className="font-bold text-xl tracking-tight text-deep">MAIA</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Facens</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-deep hover:bg-secondary transition"
                activeProps={{ className: "text-deep bg-secondary" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden h-10 w-10 grid place-items-center rounded-full bg-gradient-to-br from-turquoise to-aqua text-white shadow-[var(--shadow-soft)] hover:scale-105 transition"
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile hamburger overlay */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-all duration-400 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-deep/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <aside
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-background grid-bg shadow-2xl transition-transform duration-400 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-turquoise">
                <Cpu className="h-4 w-4" />
                <span className="font-mono text-xs uppercase tracking-widest">menu</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="h-10 w-10 grid place-items-center rounded-full hover:bg-secondary"
                aria-label="Fechar menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-14 flex flex-col">
              {links.map((l, idx) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 py-4 border-b border-border/60 hover:border-turquoise transition"
                >
                  <span className="font-mono text-xs text-turquoise">0{idx + 1}</span>
                  <span className="text-2xl font-bold text-deep">{l.label}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-8 font-mono text-xs text-muted-foreground">
              Mobilidade Aplicada à Inteligência Artificial
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
