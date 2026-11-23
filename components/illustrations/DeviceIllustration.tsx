import type { ProductIllustration } from "@/lib/types";
import {
  Beaker,
  Electrodes,
  StirBar,
  Unit,
  Wire,
} from "@/components/illustrations/parts";

// Čiarové pohľady na jednotlivé produkty (viewBox 320 × 240).
// Dočasná náhrada produktových fotiek — viď README pre odporúčania k fotkám.

function Gks904() {
  return (
    <>
      <Wire d="M196 64 C196 34 128 40 128 176" accent />
      <Wire d="M226 64 C226 20 112 24 112 176" />
      <Beaker x={170} y={84} w={82} h={128} fill={0.7} />
      <Electrodes
        xs={[196, 226]}
        top={64}
        bottom={196}
        plate={{ x: 160, y: 80, w: 102 }}
      />
      <Unit x={44} y={176} w={122} h={34} label="GKS 904" />
    </>
  );
}

function Gks906() {
  return (
    <>
      <Wire d="M136 40 C136 14 244 10 244 70 V182 H230" accent />
      <Wire d="M184 40 C184 24 232 24 232 76 V176 H230" />
      <Beaker x={106} y={66} w={108} h={114} fill={0.72} />
      <Electrodes
        xs={[136, 184]}
        top={40}
        bottom={164}
        plate={{ x: 94, y: 62, w: 132 }}
      />
      <StirBar cx={160} y={168} w={36} />
      <Unit x={80} y={184} w={160} h={34} label="GKS 906" />
    </>
  );
}

function Mgm101() {
  return (
    <>
      <Beaker x={110} y={60} w={100} h={120} fill={0.66} />
      <StirBar cx={160} y={168} w={36} />
      <Unit x={84} y={184} w={152} h={34} label="MGM 101" leds={1} knob />
    </>
  );
}

const map = {
  gks904: Gks904,
  gks906: Gks906,
  mgm101: Mgm101,
} as const;

export function DeviceIllustration({
  type,
  className = "",
  label,
}: {
  type: ProductIllustration;
  className?: string;
  label: string;
}) {
  const Drawing = map[type];
  return (
    <svg viewBox="40 0 240 236" className={className} role="img" aria-label={label}>
      <Drawing />
    </svg>
  );
}
