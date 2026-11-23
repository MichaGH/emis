// Iba obrys generátora s kadičkou — bez výplní, popisov a čísel.
// Používa sa ako nenápadná kresba v pozadí (farba = currentColor).

export function ProcessOutline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="60 20 320 460"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* káble */}
      <path d="M166 92 C166 46 352 46 352 150 V438 H320" />
      <path d="M234 92 C234 66 340 66 340 160 V428 H320" />

      {/* kadička */}
      <path d="M104 140 H110 V400 Q110 410 120 410 H280 Q290 410 290 400 V140 H296" />
      <path d="M111 207 H289" strokeDasharray="2 5" />
      <path d="M110 360 h10 M110 310 h10 M110 260 h10 M110 210 h10" />

      {/* elektródy a držiak */}
      <rect x={162.5} y={92} width={7} height={286} rx={1.5} />
      <rect x={230.5} y={92} width={7} height={286} rx={1.5} />
      <rect x={90} y={118} width={220} height={11} rx={2} />
      <rect x={159} y={106} width={14} height={12} rx={1.5} />
      <rect x={227} y={106} width={14} height={12} rx={1.5} />

      {/* miešadlo */}
      <rect x={176} y={396} width={48} height={7} rx={3.5} />
      <path d="M152 387 A 38 7 0 0 0 248 387" strokeDasharray="3 4" />

      {/* skrinka prístroja */}
      <rect x={80} y={414} width={240} height={40} rx={4} />
      <circle cx={96} cy={435} r={3.2} />
      <circle cx={109} cy={435} r={3.2} />
      <circle cx={122} cy={435} r={3.2} />
      <path d="M92 454 v3 h14 v-3 M294 454 v3 h14 v-3" />
    </svg>
  );
}
