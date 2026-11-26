// Obrys tmavej fľaštičky s kvapkadlom (koloidné striebro sa skladuje v tmavej
// fľaši) a pár častíc. Iba čiary, farba = currentColor. Protipól ku ProcessOutline.

export function BottleOutline({ className = "" }: { className?: string }) {
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
      {/* gumička kvapkadla */}
      <path d="M140 92 V64 Q140 40 160 40 Q180 40 180 64 V92" />
      <path d="M146 70 H174" />
      {/* uzáver */}
      <rect x={126} y={92} width={68} height={34} rx={4} />
      <path d="M134 100 V118 M146 100 V118 M158 100 V118 M170 100 V118 M182 100 V118" />
      {/* hrdlo */}
      <path d="M136 126 V146 M184 126 V146" />
      {/* telo fľaše */}
      <path d="M136 146 Q136 168 108 176 Q86 184 86 210 V420 Q86 436 102 436 H218 Q234 436 234 420 V210 Q234 184 212 176 Q184 168 184 146" />
      {/* štítok */}
      <rect x={104} y={250} width={112} height={108} rx={4} />
      <path d="M120 282 H200 M120 300 H180 M120 318 H192" />
      {/* hladina */}
      <path d="M87 222 H233" strokeDasharray="2 5" />
      {/* odlesk skla */}
      <path d="M220 214 V240 M220 372 V412" />

      {/* kvapka a častice vedľa fľaše */}
      <path d="M268 120 Q268 104 278 92 Q288 104 288 120 A10 10 0 0 1 268 120 Z" />
      {[
        [262, 170, 2.5],
        [286, 196, 2],
        [270, 230, 3],
        [292, 262, 2],
        [264, 296, 2.5],
        [40, 150, 2],
        [54, 196, 2.5],
        [36, 250, 2],
        [50, 312, 3],
      ].map(([cx, cy, r]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
      ))}
    </svg>
  );
}
