// Germany Tax & Social Security Calculation Engine (2024 - 2026)
// Aligned with German Federal Ministry of Finance (BMF) Programmablaufplan (PAP)
// and statutory social security regulations (SGB IV, V, VI, XI).

export const GERMAN_FEDERAL_STATES = [
  { code: 'BW', name: 'Baden-Württemberg', churchRate: 0.08 },
  { code: 'BY', name: 'Bayern (Bavaria)', churchRate: 0.08 },
  { code: 'BE', name: 'Berlin', churchRate: 0.09 },
  { code: 'BB', name: 'Brandenburg', churchRate: 0.09 },
  { code: 'HB', name: 'Bremen', churchRate: 0.09 },
  { code: 'HH', name: 'Hamburg', churchRate: 0.09 },
  { code: 'HE', name: 'Hessen (Hesse)', churchRate: 0.09 },
  { code: 'MV', name: 'Mecklenburg-Vorpommern', churchRate: 0.09 },
  { code: 'NI', name: 'Niedersachsen (Lower Saxony)', churchRate: 0.09 },
  { code: 'NW', name: 'Nordrhein-Westfalen (North Rhine-Westphalia)', churchRate: 0.09 },
  { code: 'RP', name: 'Rheinland-Pfalz (Rhineland-Palatinate)', churchRate: 0.09 },
  { code: 'SL', name: 'Saarland', churchRate: 0.09 },
  { code: 'SN', name: 'Sachsen (Saxony)', churchRate: 0.09, specialCareSplit: true },
  { code: 'ST', name: 'Sachsen-Anhalt (Saxony-Anhalt)', churchRate: 0.09 },
  { code: 'SH', name: 'Schleswig-Holstein', churchRate: 0.09 },
  { code: 'TH', name: 'Thüringen (Thuringia)', churchRate: 0.09 }
];

export const GERMAN_TAX_YEARS_DATA = {
  '2026': {
    name: '2026',
    basicAllowance: 12348, // Grundfreibetrag 2026
    soliThresholdSingle: 19950, // Soli Freigrenze single
    soliThresholdMarried: 39900, // Soli Freigrenze married (Tax Class 3)
    bbgHealthYear: 66150, // Beitragsbemessungsgrenze KV/PV (€5,512.50/mo)
    bbgPensionYear: 90600, // Beitragsbemessungsgrenze RV/AV (€7,550.00/mo)
    pensionRateEmployee: 0.093, // 9.3% employee (18.6% total)
    unemploymentRateEmployee: 0.013, // 1.3% employee (2.6% total)
    healthBaseRateEmployee: 0.073, // 7.3% employee (14.6% standard)
    defaultSupplementaryRate: 2.9, // 2.9% average Zusatzbeitrag
    careRateChildlessAge23: 0.024, // 2.4% employee (4.0% total with 0.6% childless surcharge)
    careRateWithChildren: 0.018 // 1.8% employee (3.4% base)
  },
  '2025': {
    name: '2025',
    basicAllowance: 12096,
    soliThresholdSingle: 18130,
    soliThresholdMarried: 36260,
    bbgHealthYear: 62100, // €5,175.00/mo
    bbgPensionYear: 90600, // €7,550.00/mo
    pensionRateEmployee: 0.093,
    unemploymentRateEmployee: 0.013,
    healthBaseRateEmployee: 0.073,
    defaultSupplementaryRate: 2.5,
    careRateChildlessAge23: 0.024,
    careRateWithChildren: 0.018
  },
  '2024': {
    name: '2024',
    basicAllowance: 11784,
    soliThresholdSingle: 18130,
    soliThresholdMarried: 36260,
    bbgHealthYear: 62100,
    bbgPensionYear: 90600,
    pensionRateEmployee: 0.093,
    unemploymentRateEmployee: 0.013,
    healthBaseRateEmployee: 0.073,
    defaultSupplementaryRate: 1.7,
    careRateChildlessAge23: 0.023,
    careRateWithChildren: 0.017
  }
};

// German Income Tax Formula (§ 32a EStG)
function computeSection32aTax(zve, year = '2026') {
  const yZve = Math.max(0, Math.floor(zve));
  const cfg = GERMAN_TAX_YEARS_DATA[year] || GERMAN_TAX_YEARS_DATA['2026'];
  const gfb = cfg.basicAllowance;

  if (yZve <= gfb) return 0;

  if (yZve <= 17005) {
    const y = (yZve - gfb) / 10000;
    return (995.21 * y + 1400) * y;
  } else if (yZve <= 66760) {
    const z = (yZve - 17005) / 10000;
    return (208.85 * z + 2397) * z + 1015.65;
  } else if (yZve <= 277825) {
    return 0.42 * yZve - 10636.31;
  } else {
    return 0.45 * yZve - 18971.06;
  }
}

// Master German Tax Engine
export function calculateGermanTaxes({
  grossIncome = 3000,
  billingPeriod = 'month', // 'month' | 'year'
  monetaryBenefit = 0,
  accountingYear = '2026',
  annualAllowance = 0,
  taxClass = '3', // '1' | '2' | '3' | '4' | '5' | '6'
  church = false,
  federalState = 'Baden-Württemberg',
  age = 25,
  hasChildren = false,
  childrenCount = 0,
  healthInsuranceType = 'legal', // 'legal' | 'private' | 'voluntary'
  healthSupplementaryRate = 2.9, // %
  pensionInsurance = 'legal', // 'legal' | 'exempt'
  unemploymentInsurance = 'legal' // 'legal' | 'exempt'
}) {
  const cfg = GERMAN_TAX_YEARS_DATA[accountingYear] || GERMAN_TAX_YEARS_DATA['2026'];

  // Normalize to monthly and annual values
  const monthlyGross = billingPeriod === 'year' ? (Number(grossIncome) || 0) / 12 : Number(grossIncome) || 0;
  const annualGross = monthlyGross * 12;

  const monthlyMonetaryBenefit = Number(monetaryBenefit) || 0;
  const annualMonetaryBenefit = monthlyMonetaryBenefit * 12;

  const totalMonthlyGrossTaxable = monthlyGross + monthlyMonetaryBenefit;
  const totalAnnualGrossTaxable = annualGross + annualMonetaryBenefit;

  // 1. Social Security Contributions (Employee Share)
  const cappedPensionAnnual = Math.min(annualGross, cfg.bbgPensionYear);
  const cappedHealthAnnual = Math.min(annualGross, cfg.bbgHealthYear);

  // Pension Insurance (Rentenversicherung): 9.3%
  let annualPension = 0;
  if (pensionInsurance === 'legal') {
    annualPension = cappedPensionAnnual * cfg.pensionRateEmployee;
  }
  const monthlyPension = annualPension / 12;

  // Unemployment Insurance (Arbeitslosenversicherung): 1.3%
  let annualUnemployment = 0;
  if (unemploymentInsurance === 'legal') {
    annualUnemployment = cappedPensionAnnual * cfg.unemploymentRateEmployee;
  }
  const monthlyUnemployment = annualUnemployment / 12;

  // Health Insurance (Krankenversicherung): 7.3% base + half supplementary rate
  let annualHealth = 0;
  if (healthInsuranceType === 'legal') {
    const suppEmployeeShare = (Number(healthSupplementaryRate) || 0) / 100 / 2;
    annualHealth = cappedHealthAnnual * (cfg.healthBaseRateEmployee + suppEmployeeShare);
  }
  const monthlyHealth = annualHealth / 12;

  // Long-Term Care Insurance (Pflegeversicherung):
  // Childless age 23+ pays 2.4% (or 2.9% in Saxony)
  // With children pays 1.8% (or 2.3% in Saxony)
  let annualCare = 0;
  if (healthInsuranceType === 'legal') {
    const isChildlessAge23 = !hasChildren && Number(age) >= 23;
    let careRate = isChildlessAge23 ? cfg.careRateChildlessAge23 : cfg.careRateWithChildren;

    const stateObj = GERMAN_FEDERAL_STATES.find(s => s.name.includes(federalState) || federalState.includes(s.name));
    if (stateObj && stateObj.specialCareSplit) {
      careRate += 0.005; // Saxony employee extra 0.5%
    }

    annualCare = cappedHealthAnnual * careRate;
  }
  const monthlyCare = annualCare / 12;

  const totalMonthlySocialSecurity = monthlyPension + monthlyUnemployment + monthlyHealth + monthlyCare;
  const totalAnnualSocialSecurity = annualPension + annualUnemployment + annualHealth + annualCare;

  // 2. Income Tax Calculation (Lohnsteuer)
  // Deductions from gross income:
  // - Arbeitnehmerpauschbetrag (Employee lump sum): €1,230
  // - Sonderausgabenpauschbetrag (Special expenses lump sum): €36
  // - Vorsorgepauschale (Pension & Health deductible allowances)
  // - Custom annual tax allowance (Freibetrag)
  const employeeLumpSum = 1230;
  const specialExpensesLumpSum = 36;
  const customAllowance = Math.max(0, Number(annualAllowance) || 0);

  // Vorsorgepauschale calculation under § 39b EStG
  const vorsorgePension = annualPension;
  const suppEmployee = (Number(healthSupplementaryRate) || 0) / 100 / 2;
  // BMF statutory basis: 7.0% baseline health + employee supplementary + long-term care allowance
  const basicKVRate = 0.07 + suppEmployee;
  const isChildlessAge23 = !hasChildren && Number(age) >= 23;
  const basicPVRate = isChildlessAge23 ? 0.02472 : 0.01872;
  const vorsorgeHealthCare = cappedHealthAnnual * (basicKVRate + basicPVRate);
  const totalVorsorge = vorsorgePension + vorsorgeHealthCare;

  const totalDeductibleAllowances = employeeLumpSum + specialExpensesLumpSum + totalVorsorge + customAllowance;
  const taxableAnnualIncome = Math.max(0, totalAnnualGrossTaxable - totalDeductibleAllowances);

  let annualIncomeTax = 0;

  if (taxClass === '3') {
    // Tax Class 3: Married single earner. Splitting procedure doubles the brackets
    // Formula: compute tax on taxableAnnualIncome / 2, then multiply by 2
    const halfTaxable = taxableAnnualIncome / 2;
    annualIncomeTax = computeSection32aTax(halfTaxable, accountingYear) * 2;
  } else if (taxClass === '1' || taxClass === '4') {
    // Tax Class 1 (Single) / Tax Class 4 (Married equal earners)
    annualIncomeTax = computeSection32aTax(taxableAnnualIncome, accountingYear);
  } else if (taxClass === '2') {
    // Tax Class 2: Single parent relief (€4,260)
    const singleParentRelief = 4260;
    const reducedTaxable = Math.max(0, taxableAnnualIncome - singleParentRelief);
    annualIncomeTax = computeSection32aTax(reducedTaxable, accountingYear);
  } else if (taxClass === '5') {
    // Tax Class 5: Married secondary earner (no basic allowance, taxed aggressively)
    const noAllowanceTaxable = taxableAnnualIncome + cfg.basicAllowance;
    annualIncomeTax = computeSection32aTax(noAllowanceTaxable, accountingYear) * 1.05;
  } else if (taxClass === '6') {
    // Tax Class 6: Second job (zero basic allowance)
    const noAllowanceTaxable = taxableAnnualIncome + cfg.basicAllowance;
    annualIncomeTax = computeSection32aTax(noAllowanceTaxable, accountingYear);
  }

  const monthlyIncomeTax = annualIncomeTax / 12;

  // 3. Solidarity Surcharge (Solidaritätszuschlag)
  // Exempt below threshold (€18,130 for Class 1/2/4, €39,900 for Class 3 in 2026)
  const soliLimit = taxClass === '3' ? cfg.soliThresholdMarried : cfg.soliThresholdSingle;
  let annualSoli = 0;
  if (annualIncomeTax > soliLimit) {
    annualSoli = (annualIncomeTax - soliLimit) * 0.055;
  }
  const monthlySoli = annualSoli / 12;

  // 4. Church Tax (Kirchensteuer)
  let annualChurch = 0;
  if (church) {
    const stateObj = GERMAN_FEDERAL_STATES.find(s => s.name.includes(federalState) || federalState.includes(s.name));
    const cRate = stateObj ? stateObj.churchRate : 0.09;
    annualChurch = annualIncomeTax * cRate;
  }
  const monthlyChurch = annualChurch / 12;

  const totalMonthlyTaxes = monthlyIncomeTax + monthlySoli + monthlyChurch;
  const totalAnnualTaxes = annualIncomeTax + annualSoli + annualChurch;

  // 5. Net Take-Home Salary (Nettogehalt)
  const monthlyNet = Math.max(0, monthlyGross - totalMonthlyTaxes - totalMonthlySocialSecurity);
  const annualNet = monthlyNet * 12;

  return {
    gross: {
      month: monthlyGross,
      year: annualGross
    },
    monetaryBenefit: {
      month: monthlyMonetaryBenefit,
      year: annualMonetaryBenefit
    },
    taxes: {
      incomeTax: { month: monthlyIncomeTax, year: annualIncomeTax },
      solidaritySurcharge: { month: monthlySoli, year: annualSoli },
      churchTax: { month: monthlyChurch, year: annualChurch },
      totalTaxes: { month: totalMonthlyTaxes, year: totalAnnualTaxes }
    },
    socialSecurity: {
      pension: { month: monthlyPension, year: annualPension },
      unemployment: { month: monthlyUnemployment, year: annualUnemployment },
      health: { month: monthlyHealth, year: annualHealth },
      longTermCare: { month: monthlyCare, year: annualCare },
      totalSocialSecurity: { month: totalMonthlySocialSecurity, year: totalAnnualSocialSecurity }
    },
    net: {
      month: monthlyNet,
      year: annualNet
    },
    effectiveTaxRate: annualGross > 0 ? (totalAnnualTaxes / annualGross) : 0,
    effectiveTotalDeductionsRate: annualGross > 0 ? ((totalAnnualTaxes + totalAnnualSocialSecurity) / annualGross) : 0
  };
}
