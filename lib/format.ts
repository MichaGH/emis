export function formatPrice(value: number) {
  return new Intl.NumberFormat("sk-SK", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

// Slovenské skloňovanie: 1 položka, 2–4 položky, 5+ položiek
export function pluralItems(count: number) {
  if (count === 1) return "1 položka";
  if (count >= 2 && count <= 4) return `${count} položky`;
  return `${count} položiek`;
}
