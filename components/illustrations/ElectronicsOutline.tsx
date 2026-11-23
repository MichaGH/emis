// Obrys testovacieho pracoviska — doska plošných spojov s čipom, plochý kábel
// a prístroj s displejom, gombíkmi a BNC konektormi (ako demodulátor DM716).
// Iba čiary, farba = currentColor. Protipól ku ProcessOutline v úvodnej sekcii.

const pins = [0, 1, 2, 3, 4, 5, 6];

export function ElectronicsOutline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 20 320 440"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* doska plošných spojov */}
      <rect x={50} y={60} width={220} height={150} rx={6} />
      {[
        [64, 74],
        [256, 74],
        [64, 196],
        [256, 196],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={4} />
      ))}

      {/* čip QFP s nožičkami */}
      <rect x={130} y={100} width={60} height={60} rx={3} />
      <circle cx={140} cy={110} r={2.5} />
      {pins.map((i) => {
        const p = 136 + i * 8;
        const q = 106 + i * 8;
        return (
          <g key={i}>
            <path d={`M${p} 100 V93 M${p} 160 V167`} />
            <path d={`M130 ${q} H123 M190 ${q} H197`} />
          </g>
        );
      })}

      {/* vodiče a plôšky */}
      <path d="M123 114 H98 V88 H78" />
      <path d="M123 130 H86" />
      <path d="M123 146 H102 V178 H82" />
      <path d="M197 122 H230 V92" />
      <path d="M197 138 H242" />
      <path d="M197 154 H222 V182 H238" />
      <path d="M144 93 V80 H118" />
      <path d="M176 93 V78 H204" />
      {[
        [78, 88],
        [86, 130],
        [82, 178],
        [230, 92],
        [242, 138],
        [238, 182],
        [118, 80],
        [204, 78],
      ].map(([cx, cy]) => (
        <circle key={`p-${cx}-${cy}`} cx={cx} cy={cy} r={3} />
      ))}

      {/* konektor a plochý kábel */}
      <rect x={124} y={196} width={72} height={10} rx={1.5} />
      {[136, 148, 160, 172, 184].map((x) => (
        <path key={x} d={`M${x} 206 V290`} />
      ))}

      {/* prístroj */}
      <rect x={40} y={290} width={240} height={150} rx={6} />
      <path d="M44 300 H276" />
      {/* displej s priebehom signálu */}
      <rect x={58} y={312} width={124} height={60} rx={3} />
      <path d="M62 342 H178" strokeDasharray="2 5" />
      <path d="M64 342 q10 -20 20 0 t20 0 t20 0 t20 0 t20 0 t10 0" />
      {/* gombíky */}
      <circle cx={214} cy={332} r={14} />
      <path d="M214 320 V327" />
      <circle cx={256} cy={332} r={14} />
      <path d="M266 324 l-5 5" />
      {/* BNC konektory */}
      {[72, 106, 140, 174].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy={408} r={9} />
          <circle cx={cx} cy={408} r={3} />
        </g>
      ))}
      {/* kontrolky */}
      <circle cx={222} cy={408} r={3} />
      <circle cx={238} cy={408} r={3} />
      <circle cx={254} cy={408} r={3} />
      {/* nožičky */}
      <path d="M58 440 v5 h20 v-5 M242 440 v5 h20 v-5" />

      {/* koaxiálny kábel z prvého BNC */}
      <path d="M72 399 C72 372 14 372 14 330 V36" />
    </svg>
  );
}
