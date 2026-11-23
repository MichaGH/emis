import { CONTAINER } from "@/constants";
import {
  LgLogo,
  PanasonicLogo,
  PhilipsLogo,
  SamsungLogo,
} from "@/components/ui/ClientLogos";

// Odberatelia s logom. Zoznam vychádza z pôvodného webu emis.sk
// (XPS b.v. tu nie je — nevieme ho doložiť logom ani bližším popisom).
const logos: { name: string; logo: React.ReactNode }[] = [
  {
    name: "LG.Philips Displays",
    logo: (
      <span className="flex items-center gap-3">
        <LgLogo className="h-11 w-auto text-[#A50034]" aria-hidden />
        <PhilipsLogo className="h-5 w-auto text-[#0B5ED7]" aria-hidden />
      </span>
    ),
  },
  { name: "Samsung", logo: <SamsungLogo className="h-6 w-auto text-[#1428A0]" aria-hidden /> },
  { name: "Panasonic", logo: <PanasonicLogo className="h-6 w-auto text-[#0049AB]" aria-hidden /> },
  {
    name: "OVP Orava",
    // PNG použité ako maska (pôvodné logo je biele na čiernom) → tmavé logo
    logo: (
      <span
        aria-hidden
        className="block h-10 bg-foreground [mask-image:url(/images/clients/ovp-orava.png)] [mask-repeat:no-repeat] [mask-size:contain]"
        style={{ aspectRatio: "346 / 149" }}
      />
    ),
  },
];

export function ClientsSection() {
  return (
    <section aria-labelledby="clients-heading" className="bg-surface">
      <div className={`${CONTAINER} py-12 text-center lg:py-14`}>
        <h2 id="clients-heading" className="text-xl font-bold sm:text-2xl">
          Zariadenia sme vyvíjali pre:
        </h2>
        <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-14 gap-y-10 lg:gap-x-24">
          {logos.map((c) => (
            <li key={c.name} className="flex items-center" title={c.name}>
              <span className="sr-only">{c.name}</span>
              {c.logo}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
