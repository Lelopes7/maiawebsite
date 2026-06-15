import { useSyncExternalStore } from "react";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  tag: string;
};

export type CartItem = Product & { qty: number };

let items: CartItem[] = [];
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

export const cart = {
  add(p: Product) {
    const existing = items.find((i) => i.id === p.id);
    items = existing
      ? items.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i))
      : [...items, { ...p, qty: 1 }];
    emit();
  },
  remove(id: string) {
    items = items.filter((i) => i.id !== id);
    emit();
  },
  setQty(id: string, qty: number) {
    items = qty <= 0 ? items.filter((i) => i.id !== id) : items.map((i) => (i.id === id ? { ...i, qty } : i));
    emit();
  },
  clear() {
    items = [];
    emit();
  },
  subscribe(cb: () => void) {
    listeners.add(cb);
    return () => listeners.delete(cb);
  },
  snapshot() {
    return items;
  },
};

export function useCart() {
  return useSyncExternalStore(cart.subscribe, cart.snapshot, cart.snapshot);
}
