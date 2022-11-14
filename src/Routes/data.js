export const unitsMap = {
  weight: [
    {
      name: 'tonne',
      value: 't',
    },
    {
      name: 'kg',
      value: 'k',
    },
    {
      name: 'gram',
      value: 'u',
    },
    {
      name: 'cg',
      value: 'c',
    },
    {
      name: 'mg',
      value: 'm',
    },
  ],
  distance: [
    {
      name: 'km',
      value: 'k',
    },
    {
      name: 'metre',
      value: 'u',
    },
    {
      name: 'cm',
      value: 'c',
    },
    {
      name: 'mm',
      value: 'm',
    },
  ],
  volume: [
    {
      name: 'kL',
      value: 'k',
    },
    {
      name: 'litre',
      value: 'u',
    },
    {
      name: 'cL',
      value: 'c',
    },
    {
      name: 'mL',
      value: 'm',
    },
  ],
  common: [
    {
      name: 'Kilo',
      value: 'k',
    },
    {
      name: 'Hecto',
      value: 'h',
    },
    {
      name: 'Deca',
      value: 'da',
    },
    {
      name: 'Unit (gm,ltr,m)',
      value: 'u',
    },
    {
      name: 'Deci',
      value: 'd',
    },
    {
      name: 'Centi',
      value: 'c',
    },
    {
      name: 'Milli',
      value: 'm',
    },
  ],
}

export const unitNorms = {
  t: 1000000,
  k: 1000,
  h: 100,
  da: 10,
  u: 1,
  d: 0.1,
  c: 0.01,
  m: 0.001,
}

export const unitDisplay = {
  t: {
    weight: 'tonne',
  },
  k: { weight: 'kg', distance: 'km', volume: 'kL', common: 'kilo' },
  h: { common: 'hecto' },
  da: { common: 'deca' },
  u: { weight: 'gram', distance: 'meter', volume: 'litre', common: 'unit' },
  d: { common: 'deci' },
  c: { weight: 'cg', distance: 'cm', volume: 'cL', common: 'centi' },
  m: { weight: 'mg', distance: 'mm', volume: 'mL', common: 'mili' },
}
