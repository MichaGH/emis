import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";

type Variant = "primary" | "white" | "glass";

const styles: Record<Variant, string> = {
  primary: "btn-primary",
  white: "btn-light",
  glass: "btn-outline-light",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = true,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-lg px-7 py-3.5 text-[15px] font-bold ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}
