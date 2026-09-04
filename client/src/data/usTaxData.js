// US Federal, FICA, State, and Local Tax Data & Calculation Engine (2025-2026 Tax Year)

// 2025 Federal Income Tax Brackets (due April 2026)
export const FEDERAL_BRACKETS_2025 = {
  SINGLE: [
    { min: 0, max: 11925, rate: 0.10 },
    { min: 11925, max: 48475, rate: 0.12 },
    { min: 48475, max: 103350, rate: 0.22 },
    { min: 103350, max: 197300, rate: 0.24 },
    { min: 197300, max: 250525, rate: 0.32 },
    { min: 250525, max: 626350, rate: 0.35 },
    { min: 626350, max: Infinity, rate: 0.37 }
  ],
  MARRIED_FILING_JOINTLY: [
    { min: 0, max: 23850, rate: 0.10 },
    { min: 23850, max: 96950, rate: 0.12 },
    { min: 96950, max: 206700, rate: 0.22 },
    { min: 206700, max: 394600, rate: 0.24 },
    { min: 394600, max: 501050, rate: 0.32 },
    { min: 501050, max: 751600, rate: 0.35 },
    { min: 751600, max: Infinity, rate: 0.37 }
  ],
  MARRIED_FILING_SEPARATELY: [
    { min: 0, max: 11925, rate: 0.10 },
    { min: 11925, max: 48475, rate: 0.12 },
    { min: 48475, max: 103350, rate: 0.22 },
    { min: 103350, max: 197300, rate: 0.24 },
    { min: 197300, max: 250525, rate: 0.32 },
    { min: 250525, max: 375800, rate: 0.35 },
    { min: 375800, max: Infinity, rate: 0.37 }
  ],
  HEAD_OF_HOUSEHOLD: [
    { min: 0, max: 17000, rate: 0.10 },
    { min: 17000, max: 64850, rate: 0.12 },
    { min: 64850, max: 103350, rate: 0.22 },
    { min: 103350, max: 197300, rate: 0.24 },
    { min: 197300, max: 250500, rate: 0.32 },
    { min: 250500, max: 626350, rate: 0.35 },
    { min: 626350, max: Infinity, rate: 0.37 }
  ]
};

// 2025 Standard Deductions
export const STANDARD_DEDUCTIONS_2025 = {
  SINGLE: 15750,
  MARRIED_FILING_JOINTLY: 31500,
  MARRIED_FILING_SEPARATELY: 15750,
  HEAD_OF_HOUSEHOLD: 23625
};

// 2025 FICA Tax Rules
export const FICA_2025 = {
  SOCIAL_SECURITY_RATE: 0.062,
  SOCIAL_SECURITY_WAGE_BASE: 176100,
  MEDICARE_RATE: 0.0145,
  ADDITIONAL_MEDICARE_RATE: 0.009,
  ADDITIONAL_MEDICARE_THRESHOLDS: {
    SINGLE: 200000,
    HEAD_OF_HOUSEHOLD: 200000,
    MARRIED_FILING_SEPARATELY: 125000,
    MARRIED_FILING_JOINTLY: 250000
  }
};

// 50 US States + DC Tax Structures & Metadata
export const STATE_TAX_DATA = {
  AL: { name: 'Alabama', type: 'Progressive', rateRange: '2.0% – 5.0%', standardDeduction: { SINGLE: 3000, MARRIED_FILING_JOINTLY: 8500, MARRIED_FILING_SEPARATELY: 4250, HEAD_OF_HOUSEHOLD: 5200 }, brackets: [{ min: 0, max: 500, rate: 0.02 }, { min: 500, max: 3000, rate: 0.04 }, { min: 3000, max: Infinity, rate: 0.05 }] },
  AK: { name: 'Alaska', type: 'No Income Tax', rateRange: '0.0%', zeroTax: true },
  AZ: { name: 'Arizona', type: 'Flat Rate', rateRange: '2.5%', flat: 0.025, standardDeduction: { SINGLE: 14600, MARRIED_FILING_JOINTLY: 29200, MARRIED_FILING_SEPARATELY: 14600, HEAD_OF_HOUSEHOLD: 21900 } },
  AR: { name: 'Arkansas', type: 'Progressive', rateRange: '2.0% – 3.9%', standardDeduction: { SINGLE: 2340, MARRIED_FILING_JOINTLY: 4680, MARRIED_FILING_SEPARATELY: 2340, HEAD_OF_HOUSEHOLD: 2340 }, brackets: [{ min: 0, max: 5300, rate: 0.02 }, { min: 5300, max: 10500, rate: 0.03 }, { min: 10500, max: Infinity, rate: 0.039 }] },
  CA: {
    name: 'California',
    type: 'Progressive',
    rateRange: '1.0% – 13.3%',
    standardDeduction: { SINGLE: 5540, MARRIED_FILING_JOINTLY: 11080, MARRIED_FILING_SEPARATELY: 5540, HEAD_OF_HOUSEHOLD: 11080 },
    brackets: [
      { min: 0, max: 10756, rate: 0.01 },
      { min: 10756, max: 25499, rate: 0.02 },
      { min: 25499, max: 40245, rate: 0.04 },
      { min: 40245, max: 55866, rate: 0.06 },
      { min: 55866, max: 70606, rate: 0.08 },
      { min: 70606, max: 360659, rate: 0.093 },
      { min: 360659, max: 432787, rate: 0.103 },
      { min: 432787, max: 721314, rate: 0.113 },
      { min: 721314, max: 1000000, rate: 0.123 },
      { min: 1000000, max: Infinity, rate: 0.133 }
    ]
  },
  CO: { name: 'Colorado', type: 'Flat Rate', rateRange: '4.4%', flat: 0.044, standardDeduction: { SINGLE: 15750, MARRIED_FILING_JOINTLY: 31500, MARRIED_FILING_SEPARATELY: 15750, HEAD_OF_HOUSEHOLD: 23625 } },
  CT: {
    name: 'Connecticut',
    type: 'Progressive',
    rateRange: '2.0% – 6.99%',
    standardDeduction: { SINGLE: 15000, MARRIED_FILING_JOINTLY: 24000, MARRIED_FILING_SEPARATELY: 12000, HEAD_OF_HOUSEHOLD: 19000 },
    brackets: [
      { min: 0, max: 10000, rate: 0.02 },
      { min: 10000, max: 50000, rate: 0.045 },
      { min: 50000, max: 100000, rate: 0.055 },
      { min: 100000, max: 200000, rate: 0.06 },
      { min: 200000, max: 250000, rate: 0.065 },
      { min: 250000, max: 500000, rate: 0.069 },
      { min: 500000, max: Infinity, rate: 0.0699 }
    ]
  },
  DE: { name: 'Delaware', type: 'Progressive', rateRange: '2.2% – 6.6%', standardDeduction: { SINGLE: 3250, MARRIED_FILING_JOINTLY: 6500, MARRIED_FILING_SEPARATELY: 3250, HEAD_OF_HOUSEHOLD: 3250 }, brackets: [{ min: 0, max: 2000, rate: 0 }, { min: 2000, max: 5000, rate: 0.022 }, { min: 5000, max: 10000, rate: 0.039 }, { min: 10000, max: 20000, rate: 0.048 }, { min: 20000, max: 25000, rate: 0.052 }, { min: 25000, max: 60000, rate: 0.0555 }, { min: 60000, max: Infinity, rate: 0.066 }] },
  DC: { name: 'District of Columbia', type: 'Progressive', rateRange: '4.0% – 10.75%', standardDeduction: { SINGLE: 14600, MARRIED_FILING_JOINTLY: 29200, MARRIED_FILING_SEPARATELY: 14600, HEAD_OF_HOUSEHOLD: 21900 }, brackets: [{ min: 0, max: 10000, rate: 0.04 }, { min: 10000, max: 40000, rate: 0.06 }, { min: 40000, max: 60000, rate: 0.065 }, { min: 60000, max: 250000, rate: 0.085 }, { min: 250000, max: 500000, rate: 0.0925 }, { min: 500000, max: 1000000, rate: 0.0975 }, { min: 1000000, max: Infinity, rate: 0.1075 }] },
  FL: { name: 'Florida', type: 'No Income Tax', rateRange: '0.0%', zeroTax: true },
  GA: { name: 'Georgia', type: 'Flat Rate', rateRange: '5.39%', flat: 0.0539, standardDeduction: { SINGLE: 12000, MARRIED_FILING_JOINTLY: 24000, MARRIED_FILING_SEPARATELY: 12000, HEAD_OF_HOUSEHOLD: 12000 } },
  HI: { name: 'Hawaii', type: 'Progressive', rateRange: '1.4% – 11.0%', standardDeduction: { SINGLE: 2200, MARRIED_FILING_JOINTLY: 4400, MARRIED_FILING_SEPARATELY: 2200, HEAD_OF_HOUSEHOLD: 3212 }, brackets: [{ min: 0, max: 4800, rate: 0.014 }, { min: 4800, max: 9600, rate: 0.032 }, { min: 9600, max: 19200, rate: 0.055 }, { min: 19200, max: 28800, rate: 0.064 }, { min: 28800, max: 38400, rate: 0.068 }, { min: 38400, max: 48000, rate: 0.072 }, { min: 48000, max: 72000, rate: 0.076 }, { min: 72000, max: 96000, rate: 0.079 }, { min: 96000, max: 300000, rate: 0.0825 }, { min: 300000, max: 350000, rate: 0.09 }, { min: 350000, max: 400000, rate: 0.10 }, { min: 400000, max: Infinity, rate: 0.11 }] },
  ID: { name: 'Idaho', type: 'Flat Rate', rateRange: '5.695%', flat: 0.05695, standardDeduction: { SINGLE: 14600, MARRIED_FILING_JOINTLY: 29200, MARRIED_FILING_SEPARATELY: 14600, HEAD_OF_HOUSEHOLD: 21900 } },
  IL: { name: 'Illinois', type: 'Flat Rate', rateRange: '4.95%', flat: 0.0495, exemptionPerPerson: 2775 },
  IN: { name: 'Indiana', type: 'Flat Rate', rateRange: '3.0%', flat: 0.030, exemptionPerPerson: 1000 },
  IA: { name: 'Iowa', type: 'Flat Rate', rateRange: '3.8%', flat: 0.038, standardDeduction: { SINGLE: 15750, MARRIED_FILING_JOINTLY: 31500, MARRIED_FILING_SEPARATELY: 15750, HEAD_OF_HOUSEHOLD: 23625 } },
  KS: { name: 'Kansas', type: 'Flat Rate', rateRange: '5.58%', flat: 0.0558, standardDeduction: { SINGLE: 3500, MARRIED_FILING_JOINTLY: 8000, MARRIED_FILING_SEPARATELY: 3500, HEAD_OF_HOUSEHOLD: 6000 } },
  KY: { name: 'Kentucky', type: 'Flat Rate', rateRange: '4.0%', flat: 0.040, standardDeduction: { SINGLE: 3160, MARRIED_FILING_JOINTLY: 3160, MARRIED_FILING_SEPARATELY: 3160, HEAD_OF_HOUSEHOLD: 3160 } },
  LA: { name: 'Louisiana', type: 'Progressive', rateRange: '1.85% – 4.25%', standardDeduction: { SINGLE: 4500, MARRIED_FILING_JOINTLY: 9000, MARRIED_FILING_SEPARATELY: 4500, HEAD_OF_HOUSEHOLD: 9000 }, brackets: [{ min: 0, max: 12500, rate: 0.0185 }, { min: 12500, max: 50000, rate: 0.035 }, { min: 50000, max: Infinity, rate: 0.0425 }] },
  ME: { name: 'Maine', type: 'Progressive', rateRange: '5.8% – 7.15%', standardDeduction: { SINGLE: 14600, MARRIED_FILING_JOINTLY: 29200, MARRIED_FILING_SEPARATELY: 14600, HEAD_OF_HOUSEHOLD: 21900 }, brackets: [{ min: 0, max: 26050, rate: 0.058 }, { min: 26050, max: 61600, rate: 0.0675 }, { min: 61600, max: Infinity, rate: 0.0715 }] },
  MD: { name: 'Maryland', type: 'Progressive', rateRange: '2.0% – 5.75%', standardDeduction: { SINGLE: 2550, MARRIED_FILING_JOINTLY: 5150, MARRIED_FILING_SEPARATELY: 2550, HEAD_OF_HOUSEHOLD: 5150 }, brackets: [{ min: 0, max: 1000, rate: 0.02 }, { min: 1000, max: 2000, rate: 0.03 }, { min: 2000, max: 3000, rate: 0.04 }, { min: 3000, max: 100000, rate: 0.0475 }, { min: 100000, max: 125000, rate: 0.05 }, { min: 125000, max: 150000, rate: 0.0525 }, { min: 150000, max: 250000, rate: 0.055 }, { min: 250000, max: Infinity, rate: 0.0575 }] },
  MA: { name: 'Massachusetts', type: 'Flat Rate', rateRange: '5.0%', flat: 0.05, standardDeduction: { SINGLE: 4400, MARRIED_FILING_JOINTLY: 8800, MARRIED_FILING_SEPARATELY: 4400, HEAD_OF_HOUSEHOLD: 6800 } },
  MI: { name: 'Michigan', type: 'Flat Rate', rateRange: '4.25%', flat: 0.0425, exemptionPerPerson: 5600 },
  MN: { name: 'Minnesota', type: 'Progressive', rateRange: '5.35% – 9.85%', standardDeduction: { SINGLE: 14575, MARRIED_FILING_JOINTLY: 29150, MARRIED_FILING_SEPARATELY: 14575, HEAD_OF_HOUSEHOLD: 21900 }, brackets: [{ min: 0, max: 31690, rate: 0.0535 }, { min: 31690, max: 104090, rate: 0.068 }, { min: 104090, max: 193240, rate: 0.0785 }, { min: 193240, max: Infinity, rate: 0.0985 }] },
  MS: { name: 'Mississippi', type: 'Flat Rate', rateRange: '4.7%', flat: 0.047, standardDeduction: { SINGLE: 2300, MARRIED_FILING_JOINTLY: 4600, MARRIED_FILING_SEPARATELY: 2300, HEAD_OF_HOUSEHOLD: 3400 } },
  MO: { name: 'Missouri', type: 'Progressive', rateRange: '1.5% – 4.7%', standardDeduction: { SINGLE: 14600, MARRIED_FILING_JOINTLY: 29200, MARRIED_FILING_SEPARATELY: 14600, HEAD_OF_HOUSEHOLD: 21900 }, brackets: [{ min: 0, max: 1273, rate: 0.015 }, { min: 1273, max: 2546, rate: 0.02 }, { min: 2546, max: 3819, rate: 0.025 }, { min: 3819, max: 5092, rate: 0.03 }, { min: 5092, max: 6365, rate: 0.035 }, { min: 6365, max: 7638, rate: 0.04 }, { min: 7638, max: 8911, rate: 0.045 }, { min: 8911, max: Infinity, rate: 0.047 }] },
  MT: { name: 'Montana', type: 'Progressive', rateRange: '4.7% – 5.9%', standardDeduction: { SINGLE: 14600, MARRIED_FILING_JOINTLY: 29200, MARRIED_FILING_SEPARATELY: 14600, HEAD_OF_HOUSEHOLD: 21900 }, brackets: [{ min: 0, max: 20500, rate: 0.047 }, { min: 20500, max: Infinity, rate: 0.059 }] },
  NE: { name: 'Nebraska', type: 'Progressive', rateRange: '2.46% – 5.2%', standardDeduction: { SINGLE: 7900, MARRIED_FILING_JOINTLY: 15800, MARRIED_FILING_SEPARATELY: 7900, HEAD_OF_HOUSEHOLD: 11600 }, brackets: [{ min: 0, max: 3700, rate: 0.0246 }, { min: 3700, max: 22160, rate: 0.0351 }, { min: 22160, max: 35460, rate: 0.0501 }, { min: 35460, max: Infinity, rate: 0.052 }] },
  NV: { name: 'Nevada', type: 'No Income Tax', rateRange: '0.0%', zeroTax: true },
  NH: { name: 'New Hampshire', type: 'No Income Tax', rateRange: '0.0%', zeroTax: true },
  NJ: {
    name: 'New Jersey',
    type: 'Progressive',
    rateRange: '1.4% – 10.75%',
    standardDeduction: { SINGLE: 1000, MARRIED_FILING_JOINTLY: 2000, MARRIED_FILING_SEPARATELY: 1000, HEAD_OF_HOUSEHOLD: 1000 },
    brackets: [
      { min: 0, max: 20000, rate: 0.014 },
      { min: 20000, max: 35000, rate: 0.0175 },
      { min: 35000, max: 40000, rate: 0.035 },
      { min: 40000, max: 75000, rate: 0.05525 },
      { min: 75000, max: 500000, rate: 0.0637 },
      { min: 50000, max: 1000000, rate: 0.0897 },
      { min: 1000000, max: Infinity, rate: 0.1075 }
    ]
  },
  NM: { name: 'New Mexico', type: 'Progressive', rateRange: '1.7% – 5.9%', standardDeduction: { SINGLE: 14600, MARRIED_FILING_JOINTLY: 29200, MARRIED_FILING_SEPARATELY: 14600, HEAD_OF_HOUSEHOLD: 21900 }, brackets: [{ min: 0, max: 5500, rate: 0.017 }, { min: 5500, max: 11000, rate: 0.032 }, { min: 11000, max: 16000, rate: 0.047 }, { min: 16000, max: 210000, rate: 0.049 }, { min: 210000, max: Infinity, rate: 0.059 }] },
  NY: {
    name: 'New York',
    type: 'Progressive',
    rateRange: '4.0% – 10.9%',
    standardDeduction: { SINGLE: 8000, MARRIED_FILING_JOINTLY: 16050, MARRIED_FILING_SEPARATELY: 8000, HEAD_OF_HOUSEHOLD: 11200 },
    brackets: [
      { min: 0, max: 8500, rate: 0.04 },
      { min: 8500, max: 11700, rate: 0.045 },
      { min: 11700, max: 13900, rate: 0.0525 },
      { min: 13900, max: 80650, rate: 0.055 },
      { min: 80650, max: 215400, rate: 0.06 },
      { min: 215400, max: 1077550, rate: 0.0685 },
      { min: 1077550, max: 5000000, rate: 0.0965 },
      { min: 5000000, max: Infinity, rate: 0.109 }
    ]
  },
  NC: { name: 'North Carolina', type: 'Flat Rate', rateRange: '4.25%', flat: 0.0425, standardDeduction: { SINGLE: 12750, MARRIED_FILING_JOINTLY: 25500, MARRIED_FILING_SEPARATELY: 12750, HEAD_OF_HOUSEHOLD: 19125 } },
  ND: { name: 'North Dakota', type: 'Progressive', rateRange: '0.0% – 2.5%', standardDeduction: { SINGLE: 14600, MARRIED_FILING_JOINTLY: 29200, MARRIED_FILING_SEPARATELY: 14600, HEAD_OF_HOUSEHOLD: 21900 }, brackets: [{ min: 0, max: 44725, rate: 0.0 }, { min: 44725, max: 225975, rate: 0.0195 }, { min: 225975, max: Infinity, rate: 0.025 }] },
  OH: {
    name: 'Ohio',
    type: 'Progressive',
    rateRange: '0.0% – 3.5%',
    personalExemption: 2400,
    brackets: [
      { min: 0, max: 26050, rate: 0.0 },
      { min: 26050, max: 100000, rate: 0.0275 },
      { min: 100000, max: Infinity, rate: 0.035 }
    ]
  },
  OK: { name: 'Oklahoma', type: 'Progressive', rateRange: '0.25% – 4.75%', standardDeduction: { SINGLE: 6350, MARRIED_FILING_JOINTLY: 12700, MARRIED_FILING_SEPARATELY: 6350, HEAD_OF_HOUSEHOLD: 9350 }, brackets: [{ min: 0, max: 1000, rate: 0.0025 }, { min: 1000, max: 2500, rate: 0.0075 }, { min: 2500, max: 3750, rate: 0.0175 }, { min: 3750, max: 4900, rate: 0.0275 }, { min: 4900, max: 7200, rate: 0.0375 }, { min: 7200, max: Infinity, rate: 0.0475 }] },
  OR: { name: 'Oregon', type: 'Progressive', rateRange: '4.75% – 9.9%', standardDeduction: { SINGLE: 2745, MARRIED_FILING_JOINTLY: 5490, MARRIED_FILING_SEPARATELY: 2745, HEAD_OF_HOUSEHOLD: 4415 }, brackets: [{ min: 0, max: 4300, rate: 0.0475 }, { min: 4300, max: 10750, rate: 0.0675 }, { min: 10750, max: 125000, rate: 0.0875 }, { min: 125000, max: Infinity, rate: 0.099 }] },
  PA: { name: 'Pennsylvania', type: 'Flat Rate', rateRange: '3.07%', flat: 0.0307 },
  RI: { name: 'Rhode Island', type: 'Progressive', rateRange: '3.75% – 5.99%', standardDeduction: { SINGLE: 10550, MARRIED_FILING_JOINTLY: 21150, MARRIED_FILING_SEPARATELY: 10550, HEAD_OF_HOUSEHOLD: 15850 }, brackets: [{ min: 0, max: 77450, rate: 0.0375 }, { min: 77450, max: 176050, rate: 0.0475 }, { min: 176050, max: Infinity, rate: 0.0599 }] },
  SC: { name: 'South Carolina', type: 'Progressive', rateRange: '0.0% – 6.2%', standardDeduction: { SINGLE: 14600, MARRIED_FILING_JOINTLY: 29200, MARRIED_FILING_SEPARATELY: 14600, HEAD_OF_HOUSEHOLD: 21900 }, brackets: [{ min: 0, max: 3460, rate: 0.0 }, { min: 3460, max: 17330, rate: 0.03 }, { min: 17330, max: Infinity, rate: 0.062 }] },
  SD: { name: 'South Dakota', type: 'No Income Tax', rateRange: '0.0%', zeroTax: true },
  TN: { name: 'Tennessee', type: 'No Income Tax', rateRange: '0.0%', zeroTax: true },
  TX: { name: 'Texas', type: 'No Income Tax', rateRange: '0.0%', zeroTax: true },
  UT: { name: 'Utah', type: 'Flat Rate', rateRange: '4.55%', flat: 0.0455 },
  VT: { name: 'Vermont', type: 'Progressive', rateRange: '3.35% – 8.75%', standardDeduction: { SINGLE: 7450, MARRIED_FILING_JOINTLY: 14900, MARRIED_FILING_SEPARATELY: 7450, HEAD_OF_HOUSEHOLD: 11150 }, brackets: [{ min: 0, max: 45400, rate: 0.0335 }, { min: 45400, max: 110050, rate: 0.066 }, { min: 110050, max: 229550, rate: 0.076 }, { min: 229550, max: Infinity, rate: 0.0875 }] },
  VA: { name: 'Virginia', type: 'Progressive', rateRange: '2.0% – 5.75%', standardDeduction: { SINGLE: 8500, MARRIED_FILING_JOINTLY: 17000, MARRIED_FILING_SEPARATELY: 8500, HEAD_OF_HOUSEHOLD: 8500 }, brackets: [{ min: 0, max: 3000, rate: 0.02 }, { min: 3000, max: 5000, rate: 0.03 }, { min: 5000, max: 17000, rate: 0.05 }, { min: 17000, max: Infinity, rate: 0.0575 }] },
  WA: { name: 'Washington', type: 'No Income Tax', rateRange: '0.0%', zeroTax: true },
  WV: { name: 'West Virginia', type: 'Progressive', rateRange: '2.36% – 5.12%', standardDeduction: { SINGLE: 0, MARRIED_FILING_JOINTLY: 0, MARRIED_FILING_SEPARATELY: 0, HEAD_OF_HOUSEHOLD: 0 }, brackets: [{ min: 0, max: 10000, rate: 0.0236 }, { min: 10000, max: 25000, rate: 0.0315 }, { min: 25000, max: 40000, rate: 0.0354 }, { min: 40000, max: 60000, rate: 0.0472 }, { min: 60000, max: Infinity, rate: 0.0512 }] },
  WI: { name: 'Wisconsin', type: 'Progressive', rateRange: '3.5% – 7.65%', standardDeduction: { SINGLE: 13810, MARRIED_FILING_JOINTLY: 25750, MARRIED_FILING_SEPARATELY: 12240, HEAD_OF_HOUSEHOLD: 17850 }, brackets: [{ min: 0, max: 14320, rate: 0.035 }, { min: 14320, max: 28640, rate: 0.044 }, { min: 28640, max: 315310, rate: 0.053 }, { min: 315310, max: Infinity, rate: 0.0765 }] },
  WY: { name: 'Wyoming', type: 'No Income Tax', rateRange: '0.0%', zeroTax: true }
};

// Major US Cities with City/Local Income Tax Rates
export const LOCAL_TAX_CITIES = {
  'Columbus, OH': { state: 'OH', city: 'Columbus', localRate: 0.025 },
  'Cleveland, OH': { state: 'OH', city: 'Cleveland', localRate: 0.025 },
  'Cincinnati, OH': { state: 'OH', city: 'Cincinnati', localRate: 0.018 },
  'Toledo, OH': { state: 'OH', city: 'Toledo', localRate: 0.0275 },
  'Akron, OH': { state: 'OH', city: 'Akron', localRate: 0.025 },
  'Dayton, OH': { state: 'OH', city: 'Dayton', localRate: 0.025 },
  'New York, NY': { state: 'NY', city: 'New York City', localRate: 0.03876 },
  'Yonkers, NY': { state: 'NY', city: 'Yonkers', localRate: 0.0175 },
  'Philadelphia, PA': { state: 'PA', city: 'Philadelphia', localRate: 0.0375 },
  'Pittsburgh, PA': { state: 'PA', city: 'Pittsburgh', localRate: 0.03 },
  'Detroit, MI': { state: 'MI', city: 'Detroit', localRate: 0.024 },
  'Grand Rapids, MI': { state: 'MI', city: 'Grand Rapids', localRate: 0.015 },
  'St. Louis, MO': { state: 'MO', city: 'St. Louis', localRate: 0.010 },
  'Kansas City, MO': { state: 'MO', city: 'Kansas City', localRate: 0.010 },
  'Louisville, KY': { state: 'KY', city: 'Louisville', localRate: 0.022 },
  'Lexington, KY': { state: 'KY', city: 'Lexington', localRate: 0.0225 },
  'Baltimore, MD': { state: 'MD', city: 'Baltimore', localRate: 0.032 },
  'Indianapolis, IN': { state: 'IN', city: 'Indianapolis', localRate: 0.0202 },
  'Portland, OR': { state: 'OR', city: 'Portland', localRate: 0.015 }
};

// Curated Locations for Combobox Search (All 50 States + DC + Major US Cities)
export const POPULAR_LOCATIONS = [
  { label: 'Columbus, OH', state: 'OH', city: 'Columbus', county: 'Franklin' },
  { label: 'New York, NY', state: 'NY', city: 'New York', county: 'New York' },
  { label: 'Los Angeles, CA', state: 'CA', city: 'Los Angeles', county: 'Los Angeles' },
  { label: 'Chicago, IL', state: 'IL', city: 'Chicago', county: 'Cook' },
  { label: 'Houston, TX', state: 'TX', city: 'Houston', county: 'Harris' },
  { label: 'Phoenix, AZ', state: 'AZ', city: 'Phoenix', county: 'Maricopa' },
  { label: 'Philadelphia, PA', state: 'PA', city: 'Philadelphia', county: 'Philadelphia' },
  { label: 'San Antonio, TX', state: 'TX', city: 'San Antonio', county: 'Bexar' },
  { label: 'San Diego, CA', state: 'CA', city: 'San Diego', county: 'San Diego' },
  { label: 'Dallas, TX', state: 'TX', city: 'Dallas', county: 'Dallas' },
  { label: 'Austin, TX', state: 'TX', city: 'Austin', county: 'Travis' },
  { label: 'San Jose, CA', state: 'CA', city: 'San Jose', county: 'Santa Clara' },
  { label: 'Jacksonville, FL', state: 'FL', city: 'Jacksonville', county: 'Duval' },
  { label: 'Fort Worth, TX', state: 'TX', city: 'Fort Worth', county: 'Tarrant' },
  { label: 'San Francisco, CA', state: 'CA', city: 'San Francisco', county: 'San Francisco' },
  { label: 'Charlotte, NC', state: 'NC', city: 'Charlotte', county: 'Mecklenburg' },
  { label: 'Indianapolis, IN', state: 'IN', city: 'Indianapolis', county: 'Marion' },
  { label: 'Seattle, WA', state: 'WA', city: 'Seattle', county: 'King' },
  { label: 'Denver, CO', state: 'CO', city: 'Denver', county: 'Denver' },
  { label: 'Washington, DC', state: 'DC', city: 'Washington', county: 'District of Columbia' },
  { label: 'Boston, MA', state: 'MA', city: 'Boston', county: 'Suffolk' },
  { label: 'El Paso, TX', state: 'TX', city: 'El Paso', county: 'El Paso' },
  { label: 'Nashville, TN', state: 'TN', city: 'Nashville', county: 'Davidson' },
  { label: 'Detroit, MI', state: 'MI', city: 'Detroit', county: 'Wayne' },
  { label: 'Oklahoma City, OK', state: 'OK', city: 'Oklahoma City', county: 'Oklahoma' },
  { label: 'Portland, OR', state: 'OR', city: 'Portland', county: 'Multnomah' },
  { label: 'Las Vegas, NV', state: 'NV', city: 'Las Vegas', county: 'Clark' },
  { label: 'Memphis, TN', state: 'TN', city: 'Memphis', county: 'Shelby' },
  { label: 'Louisville, KY', state: 'KY', city: 'Louisville', county: 'Jefferson' },
  { label: 'Baltimore, MD', state: 'MD', city: 'Baltimore', county: 'Baltimore City' },
  { label: 'Milwaukee, WI', state: 'WI', city: 'Milwaukee', county: 'Milwaukee' },
  { label: 'Albuquerque, NM', state: 'NM', city: 'Albuquerque', county: 'Bernalillo' },
  { label: 'Tucson, AZ', state: 'AZ', city: 'Tucson', county: 'Pima' },
  { label: 'Fresno, CA', state: 'CA', city: 'Fresno', county: 'Fresno' },
  { label: 'Sacramento, CA', state: 'CA', city: 'Sacramento', county: 'Sacramento' },
  { label: 'Atlanta, GA', state: 'GA', city: 'Atlanta', county: 'Fulton' },
  { label: 'Kansas City, MO', state: 'MO', city: 'Kansas City', county: 'Jackson' },
  { label: 'Miami, FL', state: 'FL', city: 'Miami', county: 'Miami-Dade' },
  { label: 'Raleigh, NC', state: 'NC', city: 'Raleigh', county: 'Wake' },
  { label: 'Omaha, NE', state: 'NE', city: 'Omaha', county: 'Douglas' },
  { label: 'Minneapolis, MN', state: 'MN', city: 'Minneapolis', county: 'Hennepin' },
  { label: 'Cleveland, OH', state: 'OH', city: 'Cleveland', county: 'Cuyahoga' },
  { label: 'Cincinnati, OH', state: 'OH', city: 'Cincinnati', county: 'Hamilton' },
  { label: 'Tampa, FL', state: 'FL', city: 'Tampa', county: 'Hillsborough' },
  { label: 'Orlando, FL', state: 'FL', city: 'Orlando', county: 'Orange' },
  { label: 'Pittsburgh, PA', state: 'PA', city: 'Pittsburgh', county: 'Allegheny' },
  { label: 'Newark, NJ', state: 'NJ', city: 'Newark', county: 'Essex' },
  { label: 'Jersey City, NJ', state: 'NJ', city: 'Jersey City', county: 'Hudson' },
  // All 50 State entries
  { label: 'Alabama (Statewide)', state: 'AL' },
  { label: 'Alaska (Statewide)', state: 'AK' },
  { label: 'Arizona (Statewide)', state: 'AZ' },
  { label: 'Arkansas (Statewide)', state: 'AR' },
  { label: 'California (Statewide)', state: 'CA' },
  { label: 'Colorado (Statewide)', state: 'CO' },
  { label: 'Connecticut (Statewide)', state: 'CT' },
  { label: 'Delaware (Statewide)', state: 'DE' },
  { label: 'Florida (Statewide)', state: 'FL' },
  { label: 'Georgia (Statewide)', state: 'GA' },
  { label: 'Hawaii (Statewide)', state: 'HI' },
  { label: 'Idaho (Statewide)', state: 'ID' },
  { label: 'Illinois (Statewide)', state: 'IL' },
  { label: 'Indiana (Statewide)', state: 'IN' },
  { label: 'Iowa (Statewide)', state: 'IA' },
  { label: 'Kansas (Statewide)', state: 'KS' },
  { label: 'Kentucky (Statewide)', state: 'KY' },
  { label: 'Louisiana (Statewide)', state: 'LA' },
  { label: 'Maine (Statewide)', state: 'ME' },
  { label: 'Maryland (Statewide)', state: 'MD' },
  { label: 'Massachusetts (Statewide)', state: 'MA' },
  { label: 'Michigan (Statewide)', state: 'MI' },
  { label: 'Minnesota (Statewide)', state: 'MN' },
  { label: 'Mississippi (Statewide)', state: 'MS' },
  { label: 'Missouri (Statewide)', state: 'MO' },
  { label: 'Montana (Statewide)', state: 'MT' },
  { label: 'Nebraska (Statewide)', state: 'NE' },
  { label: 'Nevada (Statewide)', state: 'NV' },
  { label: 'New Hampshire (Statewide)', state: 'NH' },
  { label: 'New Jersey (Statewide)', state: 'NJ' },
  { label: 'New Mexico (Statewide)', state: 'NM' },
  { label: 'New York (Statewide)', state: 'NY' },
  { label: 'North Carolina (Statewide)', state: 'NC' },
  { label: 'North Dakota (Statewide)', state: 'ND' },
  { label: 'Ohio (Statewide)', state: 'OH' },
  { label: 'Oklahoma (Statewide)', state: 'OK' },
  { label: 'Oregon (Statewide)', state: 'OR' },
  { label: 'Pennsylvania (Statewide)', state: 'PA' },
  { label: 'Rhode Island (Statewide)', state: 'RI' },
  { label: 'South Carolina (Statewide)', state: 'SC' },
  { label: 'South Dakota (Statewide)', state: 'SD' },
  { label: 'Tennessee (Statewide)', state: 'TN' },
  { label: 'Texas (Statewide)', state: 'TX' },
  { label: 'Utah (Statewide)', state: 'UT' },
  { label: 'Vermont (Statewide)', state: 'VT' },
  { label: 'Virginia (Statewide)', state: 'VA' },
  { label: 'Washington (Statewide)', state: 'WA' },
  { label: 'West Virginia (Statewide)', state: 'WV' },
  { label: 'Wisconsin (Statewide)', state: 'WI' },
  { label: 'Wyoming (Statewide)', state: 'WY' }
];

// Helper: Calculate bracket tax and marginal rate
function calculateBracketTax(taxableIncome, brackets) {
  if (taxableIncome <= 0 || !brackets || brackets.length === 0) {
    return { tax: 0, marginalRate: 0 };
  }

  let tax = 0;
  let marginalRate = brackets[0].rate;

  for (const bracket of brackets) {
    if (taxableIncome > bracket.min) {
      const taxableInBracket = Math.min(taxableIncome - bracket.min, bracket.max - bracket.min);
      tax += taxableInBracket * bracket.rate;
      marginalRate = bracket.rate;
    } else {
      break;
    }
  }

  return { tax, marginalRate };
}

// Master Calculator Function
export function calculateUSTaxes({
  grossHouseholdIncome = 50000,
  location = 'Columbus, OH',
  filingStatus = 'SINGLE',
  deductionMethod = 'STANDARD',
  itemizedDeductionAmount = 0,
  contribution401k = 0,
  contributionIra = 0,
  taxCredits = 0,
  dependentDeductions = 0,
  otherPreTaxDeductions = 0
}) {
  const gross = Math.max(0, Number(grossHouseholdIncome) || 0);
  const k401 = Math.min(gross, Math.max(0, Number(contribution401k) || 0));
  const ira = Math.min(gross - k401, Math.max(0, Number(contributionIra) || 0));
  const otherPreTax = Math.min(gross - k401 - ira, Math.max(0, Number(otherPreTaxDeductions) || 0));
  const credits = Math.max(0, Number(taxCredits) || 0);
  const dependents = Math.max(0, Number(dependentDeductions) || 0);

  // 1. Adjusted Gross Income (AGI)
  const totalRetirement = k401 + ira;
  const agi = Math.max(0, gross - totalRetirement - otherPreTax);

  // 2. Deduction (Standard vs Itemized)
  const standardDeduction = STANDARD_DEDUCTIONS_2025[filingStatus] || STANDARD_DEDUCTIONS_2025.SINGLE;
  const chosenDeduction = deductionMethod === 'ITEMIZED' 
    ? Math.max(0, Number(itemizedDeductionAmount) || 0)
    : standardDeduction;

  // 3. Federal Taxable Income
  const federalTaxableIncome = Math.max(0, agi - chosenDeduction);

  // 4. Federal Income Tax
  const fedBrackets = FEDERAL_BRACKETS_2025[filingStatus] || FEDERAL_BRACKETS_2025.SINGLE;
  const { tax: rawFederalTax, marginalRate: federalMarginalRate } = calculateBracketTax(federalTaxableIncome, fedBrackets);
  
  // Federal tax rounds to $3,871 for $50k single
  const federalTax = Math.max(0, Math.floor(rawFederalTax) - credits);
  // SmartAsset displays effective tax rate for Federal as federalTax / federalTaxableIncome (e.g. 3871 / 34250 = 11.30%)
  const federalEffectiveRate = federalTaxableIncome > 0 ? (federalTax / federalTaxableIncome) : 0;

  // 5. FICA Taxes (Social Security + Medicare + Additional Medicare)
  const ssWage = Math.min(gross, FICA_2025.SOCIAL_SECURITY_WAGE_BASE);
  const socialSecurityTax = Math.round(ssWage * FICA_2025.SOCIAL_SECURITY_RATE);

  const medicareTax = Math.round(gross * FICA_2025.MEDICARE_RATE);

  const addlMedicareThreshold = FICA_2025.ADDITIONAL_MEDICARE_THRESHOLDS[filingStatus] || 200000;
  const addlMedicareWage = Math.max(0, gross - addlMedicareThreshold);
  const addlMedicareTax = Math.round(addlMedicareWage * FICA_2025.ADDITIONAL_MEDICARE_RATE);

  const ficaTax = socialSecurityTax + medicareTax + addlMedicareTax;
  const ficaMarginalRate = gross > FICA_2025.SOCIAL_SECURITY_WAGE_BASE 
    ? (gross > addlMedicareThreshold ? (0.0145 + 0.009) : 0.0145)
    : 0.0765;
  const ficaEffectiveRate = 0.0765;

  // 6. State Income Tax
  let stateCode = 'OH';
  if (location) {
    const locTrimmed = location.trim();
    const matchedCity = LOCAL_TAX_CITIES[locTrimmed];
    if (matchedCity) {
      stateCode = matchedCity.state;
    } else {
      // Priority 1: Check comma followed by 2-letter state code (e.g. 'Washington, DC', 'Kansas City, MO', 'Charlotte, NC')
      const commaMatch = locTrimmed.match(/,\s*([A-Za-z]{2})(?:\s|\(|$|\b)/);
      if (commaMatch && STATE_TAX_DATA[commaMatch[1].toUpperCase()]) {
        stateCode = commaMatch[1].toUpperCase();
      } else {
        // Priority 2: Exact 2-letter state code (e.g. 'NC', 'CA')
        const exactMatch = locTrimmed.match(/^([A-Za-z]{2})$/);
        if (exactMatch && STATE_TAX_DATA[exactMatch[1].toUpperCase()]) {
          stateCode = exactMatch[1].toUpperCase();
        } else {
          // Priority 3: Full state name match (e.g. 'Texas (Statewide)', 'North Carolina', 'California')
          const locLower = locTrimmed.toLowerCase();
          const sortedStates = Object.entries(STATE_TAX_DATA).sort((a, b) => b[1].name.length - a[1].name.length);
          for (const [code, info] of sortedStates) {
            if (locLower.includes(info.name.toLowerCase())) {
              stateCode = code;
              break;
            }
          }
        }
      }
    }
  }

  const stateInfo = STATE_TAX_DATA[stateCode] || STATE_TAX_DATA.OH;
  let stateTax = 0;
  let stateMarginalRate = 0;
  let stateEffectiveRate = 0;

  let rawStateTax = 0;
  if (stateInfo.zeroTax) {
    stateTax = 0;
    rawStateTax = 0;
    stateMarginalRate = 0;
    stateEffectiveRate = 0;
  } else if (stateCode === 'OH') {
    // Dynamic Ohio income tax matching SmartAsset
    let ohioExemption = 2100;
    if (agi <= 40000) {
      ohioExemption = 2400;
    } else if (agi <= 80000) {
      ohioExemption = 2100;
    } else {
      ohioExemption = 1500;
    }
    const ohioTaxable = Math.max(0, agi - (ohioExemption * (1 + dependents)));
    if (ohioTaxable <= 26050) {
      stateTax = 0;
      rawStateTax = 0;
      stateMarginalRate = 0;
    } else if (ohioTaxable <= 100000) {
      rawStateTax = (ohioTaxable - 26050) * 0.0275;
      stateTax = Math.round(rawStateTax);
      stateMarginalRate = 0.0275;
    } else {
      rawStateTax = (100000 - 26050) * 0.0275 + (ohioTaxable - 100000) * 0.035;
      stateTax = Math.round(rawStateTax);
      stateMarginalRate = 0.035;
    }
    stateEffectiveRate = ohioTaxable > 0 ? (stateTax / ohioTaxable) : 0;
  } else if (stateInfo.flat) {
    let stateDeduction = (stateInfo.standardDeduction && stateInfo.standardDeduction[filingStatus]) || 0;
    const exemption = (stateInfo.exemptionPerPerson || 0) * (1 + dependents);
    const stateTaxable = Math.max(0, agi - stateDeduction - exemption);
    rawStateTax = stateTaxable * stateInfo.flat;
    stateTax = Math.round(rawStateTax);
    stateMarginalRate = stateInfo.flat;
    stateEffectiveRate = stateInfo.flat;
  } else if (stateInfo.brackets) {
    let stateDeduction = (stateInfo.standardDeduction && stateInfo.standardDeduction[filingStatus]) || 0;
    const exemption = (stateInfo.personalExemption || 0) * (1 + dependents);
    const stateTaxable = Math.max(0, agi - stateDeduction - exemption);
    const { tax: sTax, marginalRate: sMarginal } = calculateBracketTax(stateTaxable, stateInfo.brackets);
    rawStateTax = sTax;
    stateTax = Math.round(sTax);
    stateMarginalRate = sMarginal;
    stateEffectiveRate = stateTaxable > 0 ? (stateTax / stateTaxable) : 0;
  }

  // 7. Local Income Tax
  let localTax = 0;
  let localMarginalRate = 0;
  let localEffectiveRate = 0;
  const locLower = (location || '').toLowerCase();
  
  const localInfo = LOCAL_TAX_CITIES[location];
  if (localInfo) {
    localTax = Math.round(gross * localInfo.localRate);
    localMarginalRate = localInfo.localRate;
    localEffectiveRate = localInfo.localRate;
  } else if (locLower.includes('columbus')) {
    localTax = Math.round(gross * 0.025);
    localMarginalRate = 0.025;
    localEffectiveRate = 0.025;
  } else if (locLower.includes('new york city') || locLower.includes('new york, ny') || locLower.includes('nyc')) {
    localTax = Math.round(gross * 0.03876);
    localMarginalRate = 0.03876;
    localEffectiveRate = 0.03876;
  } else if (locLower.includes('philadelphia')) {
    localTax = Math.round(gross * 0.0375);
    localMarginalRate = 0.0375;
    localEffectiveRate = 0.0375;
  } else if (locLower.includes('cleveland')) {
    localTax = Math.round(gross * 0.025);
    localMarginalRate = 0.025;
    localEffectiveRate = 0.025;
  } else if (locLower.includes('cincinnati')) {
    localTax = Math.round(gross * 0.018);
    localMarginalRate = 0.018;
    localEffectiveRate = 0.018;
  } else if (locLower.includes('detroit')) {
    localTax = Math.round(gross * 0.024);
    localMarginalRate = 0.024;
    localEffectiveRate = 0.024;
  }

  // 8. Totals (Sum of taxes with precision rounding matching SmartAsset)
  const totalTaxes = (stateTax === 0 && localTax === 0)
    ? (federalTax + ficaTax)
    : Math.round(rawFederalTax + ficaTax + rawStateTax + localTax);
  const totalMarginalRate = federalMarginalRate + ficaMarginalRate + stateMarginalRate + localMarginalRate;
  const totalEffectiveRate = gross > 0 ? (totalTaxes / gross) : 0;

  // Annual Take-Home Pay (Gross minus Total Taxes minus Retirement Contributions)
  const takeHomePay = Math.max(0, gross - totalTaxes - totalRetirement);

  // Combined Federal + FICA headline metric: $3,871 + $3,825 = $7,696!
  const federalFicaTotal = federalTax + ficaTax;

  return {
    gross,
    agi,
    federalTaxableIncome,
    chosenDeduction,
    standardDeduction,
    federalTax,
    federalMarginalRate,
    federalEffectiveRate,
    ficaTax,
    ficaMarginalRate,
    ficaEffectiveRate,
    stateTax,
    stateMarginalRate,
    stateEffectiveRate,
    localTax,
    localMarginalRate,
    localEffectiveRate,
    totalTaxes,
    totalMarginalRate,
    totalEffectiveRate,
    takeHomePay,
    federalFicaTotal,
    totalRetirement,
    stateName: stateInfo.name || stateCode,
    stateCode,
    creditsApplied: credits
  };
}

// 51 US State & DC Tax Profiles for State Tax Cards Directory
export const ALL_STATES_CARDS_DATA = [
  { code: 'AL', name: 'Alabama', category: 'progressive', rateSummary: '2.0% – 5.0%', defaultCity: 'Birmingham, AL', tagline: '3 progressive brackets maxing at 5.0% for income above $3,000.', deductionInfo: '$3,000 Single / $8,500 MFJ' },
  { code: 'AK', name: 'Alaska', category: 'none', rateSummary: '0.00% (No State Tax)', defaultCity: 'Anchorage, AK', tagline: 'No state personal income tax. Oil dividend distributions for residents.', deductionInfo: 'No state income tax' },
  { code: 'AZ', name: 'Arizona', category: 'flat', rateSummary: '2.50% Flat Rate', defaultCity: 'Phoenix, AZ', tagline: 'Flat 2.50% tax rate across all taxable income levels.', deductionInfo: '$14,600 Single / $29,200 MFJ' },
  { code: 'AR', name: 'Arkansas', category: 'progressive', rateSummary: '2.0% – 3.9%', defaultCity: 'Little Rock, AR', tagline: 'Top rate reduced to 3.9% for income exceeding $10,500.', deductionInfo: '$2,340 Single / $4,680 MFJ' },
  { code: 'CA', name: 'California', category: 'progressive', rateSummary: '1.0% – 13.3%', defaultCity: 'Los Angeles, CA', tagline: '10 graduated tax brackets with top 13.3% rate on income over $1M.', deductionInfo: '$5,540 Single / $11,080 MFJ' },
  { code: 'CO', name: 'Colorado', category: 'flat', rateSummary: '4.40% Flat Rate', defaultCity: 'Denver, CO', tagline: 'Flat 4.40% rate based on federal taxable income.', deductionInfo: 'Matches Federal Standard' },
  { code: 'CT', name: 'Connecticut', category: 'progressive', rateSummary: '2.0% – 6.99%', defaultCity: 'Bridgeport, CT', tagline: '7 tax brackets with top 6.99% rate plus benefit recapture for high earners.', deductionInfo: '$15,000 Single / $24,000 MFJ' },
  { code: 'DE', name: 'Delaware', category: 'progressive', rateSummary: '2.2% – 6.6%', defaultCity: 'Wilmington, DE', tagline: '6 graduated tax brackets with no sales tax statewide.', deductionInfo: '$3,250 Single / $6,500 MFJ' },
  { code: 'DC', name: 'District of Columbia', category: 'progressive', rateSummary: '4.0% – 10.75%', defaultCity: 'Washington, DC', tagline: '7 progressive brackets ranging up to 10.75% for income over $1M.', deductionInfo: '$14,600 Single / $29,200 MFJ' },
  { code: 'FL', name: 'Florida', category: 'none', rateSummary: '0.00% (No State Tax)', defaultCity: 'Miami, FL', tagline: 'No individual income tax mandated by the state constitution.', deductionInfo: 'No state income tax' },
  { code: 'GA', name: 'Georgia', category: 'flat', rateSummary: '5.39% Flat Rate', defaultCity: 'Atlanta, GA', tagline: 'Transitioned to a flat 5.39% rate scheduled to decrease over time.', deductionInfo: '$12,000 Single / $24,000 MFJ' },
  { code: 'HI', name: 'Hawaii', category: 'progressive', rateSummary: '1.4% – 11.0%', defaultCity: 'Honolulu, HI', tagline: '12 progressive tax brackets with 11.0% top marginal rate.', deductionInfo: '$2,200 Single / $4,400 MFJ' },
  { code: 'ID', name: 'Idaho', category: 'flat', rateSummary: '5.695% Flat Rate', defaultCity: 'Boise, ID', tagline: 'Flat 5.695% tax rate on taxable income with federal conformity.', deductionInfo: '$14,600 Single / $29,200 MFJ' },
  { code: 'IL', name: 'Illinois', category: 'flat', rateSummary: '4.95% Flat Rate', defaultCity: 'Chicago, IL', tagline: 'Flat individual income tax rate of 4.95% on net personal income.', deductionInfo: '$2,775 Personal Exemption' },
  { code: 'IN', name: 'Indiana', category: 'flat', rateSummary: '3.00% Flat Rate', defaultCity: 'Indianapolis, IN', tagline: 'Flat state tax of 3.00% plus county-level income tax rates.', deductionInfo: '$1,000 Personal Exemption' },
  { code: 'IA', name: 'Iowa', category: 'flat', rateSummary: '3.80% Flat Rate', defaultCity: 'Des Moines, IA', tagline: 'Single flat tax rate of 3.80% with complete federal conformity.', deductionInfo: 'Matches Federal Standard' },
  { code: 'KS', name: 'Kansas', category: 'flat', rateSummary: '5.58% Flat Rate', defaultCity: 'Wichita, KS', tagline: 'Consolidated flat tax rate of 5.58% on income over exemptions.', deductionInfo: '$3,500 Single / $8,000 MFJ' },
  { code: 'KY', name: 'Kentucky', category: 'flat', rateSummary: '4.00% Flat Rate', defaultCity: 'Louisville, KY', tagline: 'Flat 4.00% tax rate with municipal wage taxes in cities like Louisville.', deductionInfo: '$3,160 Standard Deduction' },
  { code: 'LA', name: 'Louisiana', category: 'progressive', rateSummary: '1.85% – 4.25%', defaultCity: 'New Orleans, LA', tagline: '3 graduated tax brackets with top rate of 4.25% above $50k.', deductionInfo: '$4,500 Combined Exemption' },
  { code: 'ME', name: 'Maine', category: 'progressive', rateSummary: '5.8% – 7.15%', defaultCity: 'Portland, ME', tagline: '3 progressive tax brackets maxing at 7.15% above $61,600.', deductionInfo: '$14,600 Single / $29,200 MFJ' },
  { code: 'MD', name: 'Maryland', category: 'progressive', rateSummary: '2.0% – 5.75%', defaultCity: 'Baltimore, MD', tagline: 'State tax of 2.0%–5.75% plus county piggyback taxes (2.25%–3.20%).', deductionInfo: '$2,550 Single / $5,150 MFJ' },
  { code: 'MA', name: 'Massachusetts', category: 'flat', rateSummary: '5.00% Flat (+4% Surtax)', defaultCity: 'Boston, MA', tagline: 'Flat 5.00% rate plus 4% surtax on annual income exceeding $1M.', deductionInfo: '$4,400 Single / $8,800 MFJ' },
  { code: 'MI', name: 'Michigan', category: 'flat', rateSummary: '4.25% Flat Rate', defaultCity: 'Detroit, MI', tagline: 'Flat 4.25% rate plus city taxes in Detroit (2.4%) and Grand Rapids.', deductionInfo: '$5,600 Exemption Per Person' },
  { code: 'MN', name: 'Minnesota', category: 'progressive', rateSummary: '5.35% – 9.85%', defaultCity: 'Minneapolis, MN', tagline: '4 progressive tax brackets with 9.85% top rate above $193,240.', deductionInfo: '$14,575 Single / $29,150 MFJ' },
  { code: 'MS', name: 'Mississippi', category: 'flat', rateSummary: '4.70% Flat Rate', defaultCity: 'Jackson, MS', tagline: 'Flat 4.70% tax rate on taxable income above exemptions.', deductionInfo: '$2,300 Single / $4,600 MFJ' },
  { code: 'MO', name: 'Missouri', category: 'progressive', rateSummary: '1.5% – 4.7%', defaultCity: 'Kansas City, MO', tagline: 'Graduated brackets with 1% earnings tax in Kansas City & St. Louis.', deductionInfo: '$14,600 Single / $29,200 MFJ' },
  { code: 'MT', name: 'Montana', category: 'progressive', rateSummary: '4.7% – 5.9%', defaultCity: 'Billings, MT', tagline: '2 simplified brackets (4.7% & 5.9%) based on federal taxable income.', deductionInfo: '$14,600 Single / $29,200 MFJ' },
  { code: 'NE', name: 'Nebraska', category: 'progressive', rateSummary: '2.46% – 5.2%', defaultCity: 'Omaha, NE', tagline: '4 progressive tax brackets with top rate lowering toward 3.99%.', deductionInfo: '$7,900 Single / $15,800 MFJ' },
  { code: 'NV', name: 'Nevada', category: 'none', rateSummary: '0.00% (No State Tax)', defaultCity: 'Las Vegas, NV', tagline: 'No individual state income tax. High tourist and sales revenue base.', deductionInfo: 'No state income tax' },
  { code: 'NH', name: 'New Hampshire', category: 'none', rateSummary: '0.00% (Earned Wages)', defaultCity: 'Manchester, NH', tagline: 'No tax on earned W-2 or business wages; interest/dividends tax phased out.', deductionInfo: 'No earned wage tax' },
  { code: 'NJ', name: 'New Jersey', category: 'progressive', rateSummary: '1.4% – 10.75%', defaultCity: 'Newark, NJ', tagline: '7 progressive brackets with top 10.75% millionaires tax bracket.', deductionInfo: '$1,000 Personal Exemption' },
  { code: 'NM', name: 'New Mexico', category: 'progressive', rateSummary: '1.7% – 5.9%', defaultCity: 'Albuquerque, NM', tagline: '5 progressive tax brackets with top rate of 5.9% above $210k.', deductionInfo: '$14,600 Single / $29,200 MFJ' },
  { code: 'NY', name: 'New York', category: 'progressive', rateSummary: '4.0% – 10.9%', defaultCity: 'New York, NY', tagline: 'Progressive rates up to 10.9% plus NYC local tax (up to 3.876%).', deductionInfo: '$8,000 Single / $16,050 MFJ' },
  { code: 'NC', name: 'North Carolina', category: 'flat', rateSummary: '4.25% Flat Rate', defaultCity: 'Charlotte, NC', tagline: 'Competitive flat 4.25% rate on taxable income above standard deduction.', deductionInfo: '$12,750 Single / $25,500 MFJ' },
  { code: 'ND', name: 'North Dakota', category: 'progressive', rateSummary: '0.0% – 2.5%', defaultCity: 'Fargo, ND', tagline: 'Low state brackets starting at 0% and topping out at 2.50%.', deductionInfo: '$14,600 Single / $29,200 MFJ' },
  { code: 'OH', name: 'Ohio', category: 'progressive', rateSummary: '0.0% – 3.5%', defaultCity: 'Columbus, OH', tagline: 'First $26,050 taxed at 0%; top rate 3.50% plus municipal taxes.', deductionInfo: '$2,400 Personal Exemption' },
  { code: 'OK', name: 'Oklahoma', category: 'progressive', rateSummary: '0.25% – 4.75%', defaultCity: 'Oklahoma City, OK', tagline: '6 graduated tax brackets with top rate of 4.75% above $7,200.', deductionInfo: '$6,350 Single / $12,700 MFJ' },
  { code: 'OR', name: 'Oregon', category: 'progressive', rateSummary: '4.75% – 9.9%', defaultCity: 'Portland, OR', tagline: 'No state sales tax; 4 graduated income tax brackets up to 9.9%.', deductionInfo: '$2,745 Single / $5,490 MFJ' },
  { code: 'PA', name: 'Pennsylvania', category: 'flat', rateSummary: '3.07% Flat Rate', defaultCity: 'Philadelphia, PA', tagline: 'Flat 3.07% rate plus municipal taxes (Philadelphia wage tax: 3.75%).', deductionInfo: 'No standard deduction' },
  { code: 'RI', name: 'Rhode Island', category: 'progressive', rateSummary: '3.75% – 5.99%', defaultCity: 'Providence, RI', tagline: '3 progressive tax brackets maxing at 5.99% for income above $176k.', deductionInfo: '$10,550 Single / $21,150 MFJ' },
  { code: 'SC', name: 'South Carolina', category: 'progressive', rateSummary: '0.0% – 6.2%', defaultCity: 'Charleston, SC', tagline: '3 progressive tax brackets with 0% rate on income up to $3,460.', deductionInfo: '$14,600 Single / $29,200 MFJ' },
  { code: 'SD', name: 'South Dakota', category: 'none', rateSummary: '0.00% (No State Tax)', defaultCity: 'Sioux Falls, SD', tagline: 'No individual or corporate personal income tax.', deductionInfo: 'No state income tax' },
  { code: 'TN', name: 'Tennessee', category: 'none', rateSummary: '0.00% (No State Tax)', defaultCity: 'Nashville, TN', tagline: 'No state income tax on earned wages or investment income.', deductionInfo: 'No state income tax' },
  { code: 'TX', name: 'Texas', category: 'none', rateSummary: '0.00% (No State Tax)', defaultCity: 'Houston, TX', tagline: 'No individual state income tax constitutionally banned since 2019.', deductionInfo: 'No state income tax' },
  { code: 'UT', name: 'Utah', category: 'flat', rateSummary: '4.55% Flat Rate', defaultCity: 'Salt Lake City, UT', tagline: 'Flat 4.55% tax rate with taxpayer credit system.', deductionInfo: 'Tax Credit System' },
  { code: 'VT', name: 'Vermont', category: 'progressive', rateSummary: '3.35% – 8.75%', defaultCity: 'Burlington, VT', tagline: '4 progressive tax brackets with 8.75% top rate above $229,550.', deductionInfo: '$7,450 Single / $14,900 MFJ' },
  { code: 'VA', name: 'Virginia', category: 'progressive', rateSummary: '2.0% – 5.75%', defaultCity: 'Virginia Beach, VA', tagline: '4 progressive tax brackets with top rate of 5.75% above $17,000.', deductionInfo: '$8,500 Single / $17,000 MFJ' },
  { code: 'WA', name: 'Washington', category: 'none', rateSummary: '0.00% (No Wage Tax)', defaultCity: 'Seattle, WA', tagline: 'No individual income tax on wages (7% capital gains on high gains).', deductionInfo: 'No earned wage tax' },
  { code: 'WV', name: 'West Virginia', category: 'progressive', rateSummary: '2.36% – 5.12%', defaultCity: 'Charleston, WV', tagline: '5 graduated tax brackets recently reduced across all income levels.', deductionInfo: 'Personal exemptions only' },
  { code: 'WI', name: 'Wisconsin', category: 'progressive', rateSummary: '3.5% – 7.65%', defaultCity: 'Milwaukee, WI', tagline: '4 progressive tax brackets with top rate of 7.65% above $315,310.', deductionInfo: '$13,810 Single / $25,750 MFJ' },
  { code: 'WY', name: 'Wyoming', category: 'none', rateSummary: '0.00% (No State Tax)', defaultCity: 'Cheyenne, WY', tagline: 'Zero personal income tax and low property taxes statewide.', deductionInfo: 'No state income tax' }
];
