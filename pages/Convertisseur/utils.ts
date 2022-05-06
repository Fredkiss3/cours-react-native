export type Mode = `poids` | `longeur` | `devise` | `temperature`;
export type Unit =
  | `kg`
  | `g`
  | `t`
  | `m`
  | `km`
  | `cm`
  | `euro`
  | `centimes`
  | `°c`
  | `°k`;

export const UnitsPerMode: {
  [key in Mode]: { label: string; symbol: Unit; multiplier: number }[];
} = {
  poids: [
    { label: `Kilogrammes`, symbol: `kg`, multiplier: 1000 },
    { label: `Grammes`, symbol: `g`, multiplier: 1 },
    { label: `Tonnes`, symbol: `t`, multiplier: 1_000_000 },
  ],
  longeur: [
    { label: `Mètres`, symbol: `m`, multiplier: 100 },
    { label: `Kilomètres`, symbol: `km`, multiplier: 100_000 },
    { label: `Centimètres`, symbol: `cm`, multiplier: 1 },
  ],
  devise: [
    { label: `Euros`, symbol: `euro`, multiplier: 100 },
    { label: `Centimes`, symbol: `centimes`, multiplier: 1 },
  ],
  temperature: [
    { label: `Celsius`, symbol: `°c`, multiplier: 1 },
    { label: `Kelvin`, symbol: `°k`, multiplier: 1 },
  ],
};

export function convertValue(
  value: number,
  multiplierFrom: number,
  multiplierTo: number,
  unitFrom: Unit,
  unitTo: Unit
) {
  const res = (value * multiplierFrom) / multiplierTo;

  if (unitFrom === `°k` && unitTo === `°c`) {
    return res - 273.15;
  } else if (unitFrom === `°c` && unitTo === `°k`) {
    return res + 273.15;
  } else {
    return res;
  }
}
