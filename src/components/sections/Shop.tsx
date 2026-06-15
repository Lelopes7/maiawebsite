import { Plus } from "lucide-react";
import { cart, type Product } from "@/lib/cart-store";

const products: Product[] = [
  { id: "1", name: "Camiseta MAIA AI", price: 79.9, tag: "Apparel", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80" },
  { id: "2", name: "Moletom Neural", price: 189.9, tag: "Apparel", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80" },
  { id: "3", name: "Caneca Algoritmo", price: 39.9, tag: "Acessórios", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80" },
  { id: "4", name: "Adesivos AI Pack", price: 19.9, tag: "Stickers", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80" },
  { id: "5", name: "Boné Machine", price: 59.9, tag: "Apparel", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80" },
  { id: "6", name: "Mousepad XL", price: 49.9, tag: "Acessórios", image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&q=80" },
];

export function Shop() {
  return (
    <section id="loja" className="py-24">
      <div className="max-w-7xl mx-auto px-5">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-turquoise">// loja</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-deep tracking-tight">
            Vista a <span className="text-gradient">inteligência</span>.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Produtos oficiais do MAIA. Cada compra apoia novos projetos de pesquisa.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-[var(--shadow-glow)] hover:border-turquoise/40 transition-all">
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur font-mono text-[10px] uppercase tracking-wider text-deep">
                  {p.tag}
                </span>
              </div>
              <div className="p-5 flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-deep truncate">{p.name}</h3>
                  <p className="text-gradient font-bold text-lg">R$ {p.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => cart.add(p)}
                  className="h-11 w-11 rounded-xl bg-gradient-to-br from-turquoise to-aqua text-white grid place-items-center hover:scale-110 shadow-[var(--shadow-soft)] transition"
                  aria-label={`Adicionar ${p.name} ao carrinho`}
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
