/** Krátky popisok nad nadpisom sekcie — modrý, bez ozdôb. */
export function SectionLabel({
  label,
  dark = false,
}: {
  label: string;
  dark?: boolean;
}) {
  return (
    <p
      className={`text-[15px] font-semibold ${
        dark ? "text-accent" : "text-primary"
      }`}
    >
      {label}
    </p>
  );
}
