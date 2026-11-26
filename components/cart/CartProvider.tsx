"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import type { Product } from "@/lib/types";
import { products } from "@/data/products";
import {
  getServerSnapshot,
  getSnapshot,
  subscribe,
  write,
} from "@/lib/cartStore";

export type CartLine = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  total: number;
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Košík je uložený v prehliadači (lib/cartStore) — prežije obnovenie stránky.
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isOpen, setIsOpen] = useState(false);

  const lines = useMemo<CartLine[]>(
    () =>
      stored
        .map((l) => {
          const product = products.find((p) => p.id === l.id);
          return product ? { product, quantity: l.quantity } : null;
        })
        .filter((l): l is CartLine => l !== null),
    [stored],
  );

  const addItem = useCallback((product: Product) => {
    const prev = getSnapshot();
    const existing = prev.find((l) => l.id === product.id);
    write(
      existing
        ? prev.map((l) => (l.id === product.id ? { ...l, quantity: Math.min(l.quantity + 1, 99) } : l))
        : [...prev, { id: product.id, quantity: 1 }],
    );
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    write(getSnapshot().filter((l) => l.id !== id));
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    write(
      getSnapshot().map((l) =>
        l.id === id ? { ...l, quantity: Math.min(Math.max(1, quantity), 99) } : l,
      ),
    );
  }, []);

  const clear = useCallback(() => write([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const count = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines],
  );
  const total = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity * l.product.price, 0),
    [lines],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      count,
      total,
      isOpen,
      addItem,
      removeItem,
      setQuantity,
      clear,
      openCart,
      closeCart,
    }),
    [
      lines,
      count,
      total,
      isOpen,
      addItem,
      removeItem,
      setQuantity,
      clear,
      openCart,
      closeCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
