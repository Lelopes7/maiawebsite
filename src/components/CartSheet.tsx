import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { cart, useCart } from "@/lib/cart-store";

export function CartSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const items = useCart();
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-300 ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
      <div className="absolute inset-0 bg-deep/40 backdrop-blur-sm" onClick={onClose} />
      <aside
        className={`absolute top-0 right-0 h-full w-full max-w-md bg-background shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-turquoise" />
            <h2 className="font-bold text-lg text-deep">Seu carrinho</h2>
          </div>
          <button onClick={onClose} className="h-9 w-9 grid place-items-center rounded-full hover:bg-secondary">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 && (
            <div className="text-center py-16">
              <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-turquoise/20 to-aqua/20 grid place-items-center mb-4">
                <ShoppingBag className="h-8 w-8 text-turquoise" />
              </div>
              <p className="text-muted-foreground">Seu carrinho está vazio</p>
              <p className="font-mono text-xs text-turquoise mt-2">// adicione produtos da loja</p>
            </div>
          )}
          {items.map((i) => (
            <div key={i.id} className="flex gap-3 p-3 rounded-xl border border-border bg-card">
              <img src={i.image} alt={i.name} className="h-20 w-20 object-cover rounded-lg" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-deep text-sm truncate">{i.name}</p>
                <p className="text-turquoise font-bold mt-0.5">R$ {i.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => cart.setQty(i.id, i.qty - 1)} className="h-7 w-7 grid place-items-center rounded-md border border-border hover:bg-secondary">
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="w-6 text-center font-mono text-sm">{i.qty}</span>
                  <button onClick={() => cart.setQty(i.id, i.qty + 1)} className="h-7 w-7 grid place-items-center rounded-md border border-border hover:bg-secondary">
                    <Plus className="h-3 w-3" />
                  </button>
                  <button onClick={() => cart.remove(i.id)} className="ml-auto h-7 w-7 grid place-items-center rounded-md text-destructive hover:bg-destructive/10">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-secondary/50 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-mono">R$ {total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span className="text-deep">Total</span>
              <span className="text-gradient">R$ {total.toFixed(2)}</span>
            </div>
            <button className="w-full h-12 rounded-xl bg-gradient-to-r from-turquoise to-aqua text-white font-semibold shadow-[var(--shadow-glow)] hover:scale-[1.01] transition">
              Finalizar compra
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
