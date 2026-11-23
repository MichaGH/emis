import {
  Beaker,
  Electrodes,
  StirBar,
  Unit,
  Wire,
  particles,
} from "@/components/illustrations/parts";

// Obr. 1 — výroba koloidného striebra (rez prístrojom GKS 906).
// Čísla v krúžkoch zodpovedajú legende pod výkresom.

const dots = [
  // hustejšie pri elektródach…
  ...particles(28, { x: 152, y: 210, w: 28, h: 166 }, 11),
  ...particles(18, { x: 222, y: 210, w: 24, h: 166 }, 23),
  // …a rozptýlené v celom objeme
  ...particles(42, { x: 146, y: 212, w: 134, h: 168 }, 5),
];

function Badge({
  n,
  x,
  y,
  to,
}: {
  n: number;
  x: number;
  y: number;
  to: [number, number][];
}) {
  const points = [[x + 10, y], ...to].map((p) => p.join(",")).join(" ");
  const end = to[to.length - 1];
  return (
    <g>
      <polyline
        points={points}
        fill="none"
        className="stroke-primary"
        strokeWidth={1.2}
      />
      <circle cx={end[0]} cy={end[1]} r={2.6} className="fill-primary" />
      <circle cx={x} cy={y} r={11} className="fill-primary" />
      <text
        x={x}
        y={y + 4}
        textAnchor="middle"
        className="fill-white"
        fontSize={11.5}
        fontWeight={700}
      >
        {n}
      </text>
    </g>
  );
}

export function ProcessDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="20 28 360 440"
      className={className}
      role="img"
      aria-label="Schéma generátora koloidného striebra: strieborné elektródy v destilovanej vode, regulácia prúdu a magnetické miešadlo"
    >
      {/* káble k prístroju */}
      <Wire d="M166 92 C166 46 352 46 352 150 V438 H320" accent />
      <Wire d="M234 92 C234 66 340 66 340 160 V428 H320" />

      <Beaker
        x={110}
        y={140}
        w={180}
        h={270}
        fill={0.74}
        graduations={[
          { y: 360, label: "100" },
          { y: 310, label: "200" },
          { y: 260, label: "300" },
          { y: 210, label: "400 ml" },
        ]}
      />

      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.r}
          className="fill-foreground"
          opacity={d.o * 0.5}
        />
      ))}

      <Electrodes
        xs={[166, 234]}
        top={92}
        bottom={378}
        plate={{ x: 90, y: 118, w: 220 }}
      />

      <StirBar cx={200} y={396} w={48} />

      <Unit x={80} y={414} w={240} h={40} label="GKS 906" />

      <Badge n={1} x={52} y={96} to={[[110, 96], [158, 108]]} />
      <Badge n={2} x={52} y={250} to={[[132, 250]]} />
      <Badge n={3} x={52} y={330} to={[[120, 330], [176, 396]]} />
      <Badge n={4} x={52} y={435} to={[[90, 435]]} />
    </svg>
  );
}

export const processLegend = [
  { n: 1, title: "Elektródy", detail: "striebro 99,99 %" },
  { n: 2, title: "Destilovaná voda", detail: "400 ml" },
  { n: 3, title: "Magnetické miešadlo", detail: "rovnomerný roztok" },
  { n: 4, title: "Regulácia prúdu", detail: "elektronická" },
];
