// Germany Tax & Social Security Calculation Engine (2024 - 2026)
// Aligned with German Federal Ministry of Finance (BMF) Programmablaufplan (PAP)
// and statutory social security regulations (SGB IV, V, VI, XI).
import { calculate } from 'lohnsteuerrechner';

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

  const stateObj = GERMAN_FEDERAL_STATES.find(s => s.name.includes(federalState) || federalState.includes(s.name));

  // 1. Social Security Contributions (Employee Share)
  const cappedPensionMonthly = Math.min(monthlyGross, cfg.bbgPensionYear / 12);
  const cappedHealthMonthly = Math.min(monthlyGross, cfg.bbgHealthYear / 12);

  // Pension Insurance (Rentenversicherung): 9.3%
  let monthlyPension = 0;
  if (pensionInsurance === 'legal') {
    monthlyPension = Math.round(cappedPensionMonthly * cfg.pensionRateEmployee * 100) / 100;
  }
  const annualPension = Math.round(monthlyPension * 12 * 100) / 100;

  // Unemployment Insurance (Arbeitslosenversicherung): 1.3%
  let monthlyUnemployment = 0;
  if (unemploymentInsurance === 'legal') {
    monthlyUnemployment = Math.round(cappedPensionMonthly * cfg.unemploymentRateEmployee * 100) / 100;
  }
  const annualUnemployment = Math.round(monthlyUnemployment * 12 * 100) / 100;

  // Health Insurance (Krankenversicherung): 7.3% base + half supplementary rate
  let monthlyHealth = 0;
  if (healthInsuranceType === 'legal') {
    const suppEmployeeShare = (Number(healthSupplementaryRate) || 0) / 100 / 2;
    monthlyHealth = Math.round(cappedHealthMonthly * (cfg.healthBaseRateEmployee + suppEmployeeShare) * 100) / 100;
  }
  const annualHealth = Math.round(monthlyHealth * 12 * 100) / 100;

  // Long-Term Care Insurance (Pflegeversicherung):
  // Childless age 23+ pays 2.4% (or 2.9% in Saxony)
  // With children pays 1.8% (or 2.3% in Saxony)
  let monthlyCare = 0;
  if (healthInsuranceType === 'legal') {
    const isChildlessAge23 = !hasChildren && Number(age) >= 23;
    let careRate = isChildlessAge23 ? cfg.careRateChildlessAge23 : cfg.careRateWithChildren;
    if (stateObj && stateObj.specialCareSplit) {
      careRate += 0.005; // Saxony employee extra 0.5%
    }
    monthlyCare = Math.round(cappedHealthMonthly * careRate * 100) / 100;
  }
  const annualCare = Math.round(monthlyCare * 12 * 100) / 100;

  const totalMonthlySocialSecurity = Math.round((monthlyPension + monthlyUnemployment + monthlyHealth + monthlyCare) * 100) / 100;
  const totalAnnualSocialSecurity = Math.round((annualPension + annualUnemployment + annualHealth + annualCare) * 100) / 100;

  // 2. Official BMF Lohnsteuer Calculation via lohnsteuerrechner
  const calcYear = accountingYear === '2024' ? 2025 : parseInt(accountingYear, 10) || 2026;
  const isChildlessAge23 = !hasChildren && Number(age) >= 23;

  let monthlyIncomeTax = 0;
  let monthlySoli = 0;
  let monthlyChurch = 0;

  try {
    const papParams = {
      RE4: Math.round(totalMonthlyGrossTaxable * 100), // gross income in cents
      LZZ: 2, // 2 = monthly calculation
      STKL: parseInt(taxClass, 10) || 1,
      KVZ: Number(healthSupplementaryRate) || 2.9,
      PVZ: isChildlessAge23 ? 1 : 0,
      PVS: (stateObj && stateObj.specialCareSplit) ? 1 : 0,
      R: church ? 1 : 0,
      ZKF: hasChildren ? (Number(childrenCount) || 1) : 0,
      JFREIB: Math.round((Number(annualAllowance) || 0) * 100),
      PKV: healthInsuranceType === 'private' ? 1 : 0,
      KRV: pensionInsurance === 'exempt' ? 2 : 0,
      ALV: unemploymentInsurance === 'exempt' ? 2 : 0
    };

    const papResult = calculate(calcYear, papParams);

    monthlyIncomeTax = Math.round((papResult.LSTLZZ / 100) * 100) / 100;
    monthlySoli = Math.round((papResult.SOLZLZZ / 100) * 100) / 100;

    if (church && papResult.BK > 0) {
      const churchRate = stateObj ? stateObj.churchRate : 0.09;
      monthlyChurch = Math.round(((papResult.BK / 100) * churchRate) * 100) / 100;
    }
  } catch (err) {
    console.error('Error in BMF PAP calculation:', err);
    // Fallback baseline estimation
    const gfb = cfg.basicAllowance;
    const taxableApprox = Math.max(0, totalAnnualGrossTaxable - 1230 - 36 - totalAnnualSocialSecurity);
    if (taxClass === '3') {
      const halfTax = Math.max(0, taxableApprox / 2 - gfb) * 0.20;
      monthlyIncomeTax = Math.round((halfTax * 2 / 12) * 100) / 100;
    } else {
      monthlyIncomeTax = Math.round((Math.max(0, taxableApprox - gfb) * 0.20 / 12) * 100) / 100;
    }
  }

  const annualIncomeTax = Math.round(monthlyIncomeTax * 12 * 100) / 100;
  const annualSoli = Math.round(monthlySoli * 12 * 100) / 100;
  const annualChurch = Math.round(monthlyChurch * 12 * 100) / 100;

  const totalMonthlyTaxes = Math.round((monthlyIncomeTax + monthlySoli + monthlyChurch) * 100) / 100;
  const totalAnnualTaxes = Math.round((annualIncomeTax + annualSoli + annualChurch) * 100) / 100;

  // 3. Net Take-Home Salary (Nettogehalt)
  const monthlyNet = Math.max(0, Math.round((monthlyGross - totalMonthlyTaxes - totalMonthlySocialSecurity) * 100) / 100);
  const annualNet = Math.round(monthlyNet * 12 * 100) / 100;

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
