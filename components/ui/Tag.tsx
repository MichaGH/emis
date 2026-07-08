// Čistý kategóriový štítok. Zámerne BEZ uppercase, letter-spacingu a bodky —
// tie robili z popisku typický AI „eyebrow", ktorý klient nechce. Toto pôsobí
// ako pokojný, značkový štítok, nie ako editoriálna linka nad každým nadpisom.
export function Tag({
  label,
  tone = "light",
  className = "",
}: {
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const styles =
    tone === "dark"
      ? "bg-white/10 text-white ring-1 ring-white/15"
      : "bg-primary-soft text-primary ring-1 ring-primary/15";

  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-1 text-[13px] font-semibold ${styles} ${className}`}
    >
      {label}
    </span>
  );
}
