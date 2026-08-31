import { createFileRoute } from "@tanstack/react-router";
import { ImageIcon, ShoppingBag } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/loja")({
  head: () => ({
    meta: [
      { title: "Loja MAIA — Produtos oficiais da equipe" },
      {
        name: "description",
        content:
          "Loja oficial da equipe MAIA Facens. Camiseta e adesivo MAIA — em breve com imagens, preços e links de compra.",
      },
      { property: "og:title", content: "Loja MAIA — Produtos oficiais da equipe" },
      { property: "og:description", content: "Camiseta e adesivo oficiais da equipe MAIA Facens." },
    ],
  }),
  component: LojaPage,
});

const products = [
  { id: "camiseta", name: "Camiseta MAIA", note: "Preço a definir" },
  { id: "adesivo", name: "Adesivo MAIA", note: "Preço a definir" },
];

function LojaPage() {
  return (
    <section className="pt-28 pb-24 grid-bg">
      <div className="max-w-5xl mx-auto px-5">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-turquoise">// loja</p>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold text-deep tracking-tight">
              Produtos <span className="text-gradient">oficiais</span> MAIA.
            </h1>
            <p className="mt-5 text-muted-foreground text-lg">
              Nossos produtos estão sendo preparados. Os espaços abaixo receberão imagens,
              preços e links de compra em breve.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <article className="group h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-turquoise/50 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-square bg-secondary/60 grid place-items-center border-b border-border">
                  <div className="text-center text-muted-foreground">
                    <ImageIcon className="h-8 w-8 mx-auto" />
                    <p className="mt-2 font-mono text-[11px]">imagem do produto</p>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-bold text-lg text-deep">{p.name}</h2>
                  <p className="mt-1 font-mono text-sm text-muted-foreground">{p.note}</p>
                  <a
                    href="/contato"
                    className="mt-5 inline-flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-gradient-to-r from-turquoise to-aqua text-white font-semibold shadow-[var(--shadow-soft)] hover:scale-[1.01] transition"
                  >
                    <ShoppingBag className="h-4 w-4" /> Tenho interesse
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
