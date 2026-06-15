import { useState } from "react";
import { Menu, X, ShoppingCart, Cpu } from "lucide-react";
import logoMaia from "@/assets/logomaia.asset.json";
import { useCart } from "@/lib/cart-store";
import { CartSheet } from "./CartSheet";

const links = [
  { href: "#sobre", label: "Sobre o MAIA" },
  { href: "#projetos", label: "Projetos" },
  { href: "#loja", label: "Loja" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const items = useCart();
  const count = items.reduce((n, i) => n + i.qty, 0);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <img src={logoMaia.url} alt="MAIA Facens" className="h-9 w-9 object-contain" />
            <div className="leading-none">
              <div className="font-bold text-lg tracking-tight text-deep">MAIA</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Facens</div>
            </div>
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCartOpen(true)}
              className="relative h-10 w-10 grid place-items-center rounded-full hover:bg-secondary transition"
              aria-label="Carrinho"
            >
              <ShoppingCart className="h-5 w-5 text-deep" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full bg-turquoise text-white text-[11px] font-bold grid place-items-center">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setOpen(true)}
              className="h-10 w-10 grid place-items-center rounded-full bg-gradient-to-br from-turquoise to-aqua text-white shadow-[var(--shadow-soft)] hover:scale-105 transition"
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Sandwich menu overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-deep/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-full max-w-md bg-background grid-bg shadow-2xl transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="relative h-full flex flex-col p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-turquoise">
                <Cpu className="h-4 w-4" />
                <span className="font-mono text-xs uppercase tracking-widest">menu.exe</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="h-10 w-10 grid place-items-center rounded-full hover:bg-secondary"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-16 flex flex-col gap-2">
              {links.map((l, idx) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 py-3 border-b border-border/60 hover:border-turquoise transition"
                >
                  <span className="font-mono text-xs text-turquoise">
                    0{idx + 1}
                  </span>
                  <span className="text-3xl font-bold text-deep group-hover:text-gradient transition-all">
                    {l.label}
                  </span>
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-8 font-mono text-xs text-muted-foreground">
              <div>// machine learning · ai · innovation</div>
              <div className="text-turquoise">{"> MAIA.connect()"}</div>
            </div>
          </div>
        </aside>
      </div>

      <CartSheet open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
