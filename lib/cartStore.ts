// Obsah košíka uložený v prehliadači (localStorage), aby prežil obnovenie
// stránky a prechod medzi krokmi objednávky. Ukladajú sa iba id a počty —
// produkty (ceny, názvy) sa vždy berú z katalógu.
import { products } from "@/data/products";

export type StoredLine = { id: string; quantity: number };

const KEY = "emis-cart";
const EMPTY: StoredLine[] = [];

let cache: StoredLine[] | null = null;
const listeners = new Set<() => void>();

function read(): StoredLine[] {
  try {
    const raw = JSON.parse(window.localStorage.getItem(KEY) ?? "[]");
    if (!Array.isArray(raw)) return EMPTY;
    return raw
      .filter(
        (l): l is StoredLine =>
          l && typeof l.id === "string" && products.some((p) => p.id === l.id),
      )
      .map((l) => ({ id: l.id, quantity: Math.min(Math.max(Math.floor(Number(l.quantity)) || 1, 1), 99) }));
  } catch {
    return EMPTY;
  }
}

export function getSnapshot(): StoredLine[] {
  if (cache === null) cache = read();
  return cache;
}

export function getServerSnapshot(): StoredLine[] {
  return EMPTY;
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  // zmena v inej karte prehliadača
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      cache = read();
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function write(next: StoredLine[]) {
  cache = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // súkromný režim / plné úložisko — košík ostane aspoň v pamäti
  }
  listeners.forEach((l) => l());
}
