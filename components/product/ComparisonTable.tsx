import Link from "next/link";
import { gksLineup } from "@/data/products";

const columns = [
  { key: "type", label: "Typ" },
  { key: "volume", label: "Objem" },
  { key: "stirrer", label: "Miešačka" },
  { key: "electrodes", label: "Elektródy" },
  { key: "use", label: "Určenie" },
] as const;

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-xl bg-white p-2 shadow-[0_18px_40px_-24px_rgba(13,26,46,0.3)]">
      <table className="w-full min-w-[760px] border-separate border-spacing-0 text-left">
        <thead>
          <tr className="text-sm text-white">
            <th className="rounded-l-xl bg-dark px-5 py-4 font-bold">Model</th>
            {columns.map((c) => (
              <th key={c.key} className="bg-dark px-5 py-4 font-bold">
                {c.label}
              </th>
            ))}
            <th className="rounded-r-xl bg-dark px-5 py-4">
              <span className="sr-only">Akcia</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {gksLineup.map((row, i) => {
            const bg = i % 2 === 1 ? "bg-surface" : "bg-white";
            return (
              <tr key={row.code}>
                <th
                  scope="row"
                  className={`${bg} rounded-l-xl px-5 py-4 text-lg font-bold text-primary`}
                >
                  {row.code}
                </th>
                {columns.map((c) => (
                  <td key={c.key} className={`${bg} px-5 py-4 font-medium`}>
                    {row[c.key]}
                  </td>
                ))}
                <td className={`${bg} rounded-r-xl px-5 py-4 text-right`}>
                  {"slug" in row ? (
                    <Link
                      href={`/produkty/${row.slug}`}
                      className="inline-flex whitespace-nowrap rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover"
                    >
                      Detail
                    </Link>
                  ) : (
                    <Link
                      href="/kontakt"
                      className="inline-flex whitespace-nowrap rounded-lg bg-surface-strong px-4 py-2 text-sm font-semibold text-foreground hover:bg-border"
                    >
                      Na dopyt
                    </Link>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
