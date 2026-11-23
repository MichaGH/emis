// Spoločné časti technických výkresov (SVG). Kreslené ako jednoduché
// čiarové pohľady — rovnaký štýl na celom webe, ľahko nahraditeľné
// reálnymi fotografiami, keď ich klient dodá.

export const STROKE = 1.4;

type BeakerProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  /** 0–1, výška hladiny */
  fill?: number;
  /** ryska s objemom (ml) — ľavá strana */
  graduations?: { y: number; label: string }[];
};

export function Beaker({ x, y, w, h, fill = 0.72, graduations }: BeakerProps) {
  const r = 10;
  const wy = y + h * (1 - fill);
  const outline = `M${x - 6} ${y} H${x} V${y + h - r} Q${x} ${y + h} ${x + r} ${y + h} H${x + w - r} Q${x + w} ${y + h} ${x + w} ${y + h - r} V${y} H${x + w + 6}`;
  const water = `M${x + 1} ${wy} H${x + w - 1} V${y + h - r} Q${x + w - 1} ${y + h - 1} ${x + w - r} ${y + h - 1} H${x + r} Q${x + 1} ${y + h - 1} ${x + 1} ${y + h - r} Z`;

  return (
    <g>
      <path d={water} className="fill-[#dce7fb]" />
      <line
        x1={x + 1}
        x2={x + w - 1}
        y1={wy}
        y2={wy}
        className="stroke-foreground/50"
        strokeWidth={1}
      />
      {/* odlesk skla */}
      <line
        x1={x + w - 9}
        x2={x + w - 9}
        y1={y + 16}
        y2={y + h - 18}
        className="stroke-white"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      {graduations?.map((g) => (
        <g key={g.label}>
          <line
            x1={x}
            x2={x + 10}
            y1={g.y}
            y2={g.y}
            className="stroke-foreground"
            strokeWidth={1}
          />
          <text
            x={x + 14}
            y={g.y + 3}
            className="fill-muted"
            fontSize={8.5}
          >
            {g.label}
          </text>
        </g>
      ))}
      <path
        d={outline}
        fill="none"
        className="stroke-foreground"
        strokeWidth={STROKE}
        strokeLinejoin="round"
      />
    </g>
  );
}

type ElectrodesProps = {
  xs: number[];
  top: number;
  bottom: number;
  plate: { x: number; y: number; w: number };
};

/** Držiak (doska) s dvomi striebornými elektródami a svorkami */
export function Electrodes({ xs, top, bottom, plate }: ElectrodesProps) {
  return (
    <g>
      {xs.map((ex) => (
        <rect
          key={`rod-${ex}`}
          x={ex - 3.5}
          y={top}
          width={7}
          height={bottom - top}
          rx={1.5}
          className="fill-silver stroke-foreground"
          strokeWidth={1}
        />
      ))}
      <rect
        x={plate.x}
        y={plate.y}
        width={plate.w}
        height={11}
        rx={2}
        className="fill-white stroke-foreground"
        strokeWidth={STROKE}
      />
      {xs.map((ex) => (
        <g key={`clip-${ex}`}>
          <rect
            x={ex - 7}
            y={plate.y - 12}
            width={14}
            height={12}
            rx={1.5}
            className="fill-white stroke-foreground"
            strokeWidth={1.1}
          />
          <circle
            cx={ex}
            cy={top}
            r={3.2}
            className="fill-silver-light stroke-foreground"
            strokeWidth={1}
          />
        </g>
      ))}
    </g>
  );
}

type UnitProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  label?: string;
  leds?: number;
  knob?: boolean;
};

/** Skrinka prístroja s kontrolkami na čelnom paneli */
export function Unit({ x, y, w, h, label, leds = 3, knob }: UnitProps) {
  const cy = y + h / 2 + 1;
  return (
    <g>
      {/* nožičky */}
      <rect x={x + 12} y={y + h} width={14} height={3} className="fill-foreground" />
      <rect
        x={x + w - 26}
        y={y + h}
        width={14}
        height={3}
        className="fill-foreground"
      />
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={4}
        className="fill-white stroke-foreground"
        strokeWidth={STROKE}
      />
      <line
        x1={x + 4}
        x2={x + w - 4}
        y1={y + 6}
        y2={y + 6}
        className="stroke-border"
        strokeWidth={1}
      />
      {Array.from({ length: leds }).map((_, i) => (
        <circle
          key={i}
          cx={x + 16 + i * 13}
          cy={cy}
          r={3.2}
          className={
            i === 0
              ? "fill-primary stroke-primary"
              : "fill-white stroke-foreground"
          }
          strokeWidth={1}
        />
      ))}
      {knob && (
        <g>
          <circle
            cx={x + w - 24}
            cy={cy}
            r={8}
            className="fill-surface stroke-foreground"
            strokeWidth={1.2}
          />
          <line
            x1={x + w - 24}
            x2={x + w - 24}
            y1={cy - 7}
            y2={cy - 2}
            className="stroke-foreground"
            strokeWidth={1.4}
          />
        </g>
      )}
      {label && (
        <text
          x={knob ? x + w - 42 : x + w - 12}
          y={cy + 3.5}
          textAnchor="end"
          className="fill-foreground"
          fontSize={10}
          letterSpacing={0.5}
        >
          {label}
        </text>
      )}
    </g>
  );
}

/** Magnetické miešadlo + naznačený pohyb vody */
export function StirBar({ cx, y, w = 44 }: { cx: number; y: number; w?: number }) {
  return (
    <g>
      <path
        d={`M${cx - w / 2 - 12} ${y - 9} A ${w / 2 + 14} 7 0 0 0 ${cx + w / 2 + 12} ${y - 9}`}
        fill="none"
        className="stroke-muted"
        strokeWidth={1}
        strokeDasharray="3 3"
      />
      <path
        d={`M${cx + w / 2 + 12} ${y - 9} l -6 -1.5 M${cx + w / 2 + 12} ${y - 9} l -2.5 5`}
        fill="none"
        className="stroke-muted"
        strokeWidth={1}
      />
      <rect
        x={cx - w / 2}
        y={y}
        width={w}
        height={7}
        rx={3.5}
        className="fill-foreground"
      />
    </g>
  );
}

/** Kábel — jednoduchá krivka */
export function Wire({ d, accent }: { d: string; accent?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      className={accent ? "stroke-primary" : "stroke-foreground"}
      strokeWidth={1.6}
      strokeLinecap="round"
    />
  );
}

/** Deterministické „náhodné“ body — častice striebra vo vode */
export function particles(
  count: number,
  box: { x: number; y: number; w: number; h: number },
  seed = 7,
) {
  let s = seed;
  const rand = () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
  return Array.from({ length: count }, () => ({
    x: box.x + rand() * box.w,
    y: box.y + rand() * box.h,
    r: 0.8 + rand() * 1.4,
    o: 0.35 + rand() * 0.55,
  }));
}
