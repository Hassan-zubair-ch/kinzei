// UK Tax Data & Calculation Engine (2025/2026 and 2026/2027 Tax Years)
// Legislation aligned with HMRC, UK Treasury, and Scottish Government budgets

export const UK_TAX_YEARS = {
  '2026/27': {
    name: '2026 / 27',
    personalAllowance: 12570,
    allowanceTaperThreshold: 100000,
    // England, Wales, Northern Ireland Income Tax
    bands: [
      { name: 'Personal Allowance', min: 0, max: 12570, rate: 0.0 },
      { name: 'Basic Rate', min: 12570, max: 50270, rate: 0.20 },
      { name: 'Higher Rate', min: 50270, max: 125140, rate: 0.40 },
      { name: 'Additional Rate', min: 125140, max: Infinity, rate: 0.45 }
    ],
    // Scottish Income Tax
    scotlandBands: [
      { name: 'Personal Allowance', min: 0, max: 12570, rate: 0.0 },
      { name: 'Starter Rate', min: 12570, max: 14876, rate: 0.19 },
      { name: 'Basic Rate', min: 14876, max: 26561, rate: 0.20 },
      { name: 'Intermediate Rate', min: 26561, max: 43662, rate: 0.21 },
      { name: 'Higher Rate', min: 43662, max: 75000, rate: 0.42 },
      { name: 'Advanced Rate', min: 75000, max: 125140, rate: 0.45 },
      { name: 'Top Rate', min: 125140, max: Infinity, rate: 0.48 }
    ],
    // National Insurance (Class 1 Employee NI)
    ni: {
      primaryThreshold: 12570, // £1,048/month, £242/week
      upperEarningsLimit: 50270, // £4,189/month, £967/week
      mainRate: 0.08, // 8% between PT and UEL
      upperRate: 0.02 // 2% above UEL
    },
    // Student Loan Annual Thresholds (2026/27)
    studentLoans: {
      plan1: { threshold: 26933, rate: 0.09 },
      plan2: { threshold: 29400, rate: 0.09 },
      plan4: { threshold: 33800, rate: 0.09 }, // Scotland
      plan5: { threshold: 25133, rate: 0.09 },
      postgrad: { threshold: 21200, rate: 0.06 }
    },
    autoEnrolment: {
      qualifyingEarningsLower: 6240,
      qualifyingEarningsUpper: 50270,
      defaultEmployeeRate: 0.05,
      defaultEmployerRate: 0.03
    },
    blindAllowance: 3070,
    marriageAllowance: 1260
  },
  '2025/26': {
    name: '2025 / 26',
    personalAllowance: 12570,
    allowanceTaperThreshold: 100000,
    bands: [
      { name: 'Personal Allowance', min: 0, max: 12570, rate: 0.0 },
      { name: 'Basic Rate', min: 12570, max: 50270, rate: 0.20 },
      { name: 'Higher Rate', min: 50270, max: 125140, rate: 0.40 },
      { name: 'Additional Rate', min: 125140, max: Infinity, rate: 0.45 }
    ],
    scotlandBands: [
      { name: 'Personal Allowance', min: 0, max: 12570, rate: 0.0 },
      { name: 'Starter Rate', min: 12570, max: 14876, rate: 0.19 },
      { name: 'Basic Rate', min: 14876, max: 26561, rate: 0.20 },
      { name: 'Intermediate Rate', min: 26561, max: 43662, rate: 0.21 },
      { name: 'Higher Rate', min: 43662, max: 75000, rate: 0.42 },
      { name: 'Advanced Rate', min: 75000, max: 125140, rate: 0.45 },
      { name: 'Top Rate', min: 125140, max: Infinity, rate: 0.48 }
    ],
    ni: {
      primaryThreshold: 12570,
      upperEarningsLimit: 50270,
      mainRate: 0.08,
      upperRate: 0.02
    },
    studentLoans: {
      plan1: { threshold: 24990, rate: 0.09 },
      plan2: { threshold: 27295, rate: 0.09 },
      plan4: { threshold: 31395, rate: 0.09 },
      plan5: { threshold: 25000, rate: 0.09 },
      postgrad: { threshold: 21000, rate: 0.06 }
    },
    autoEnrolment: {
      qualifyingEarningsLower: 6240,
      qualifyingEarningsUpper: 50270,
      defaultEmployeeRate: 0.05,
      defaultEmployerRate: 0.03
    },
    blindAllowance: 3070,
    marriageAllowance: 1260
  },
  '2024/25': {
    name: '2024 / 25',
    personalAllowance: 12570,
    allowanceTaperThreshold: 100000,
    bands: [
      { name: 'Personal Allowance', min: 0, max: 12570, rate: 0.0 },
      { name: 'Basic Rate', min: 12570, max: 50270, rate: 0.20 },
      { name: 'Higher Rate', min: 50270, max: 125140, rate: 0.40 },
      { name: 'Additional Rate', min: 125140, max: Infinity, rate: 0.45 }
    ],
    scotlandBands: [
      { name: 'Personal Allowance', min: 0, max: 12570, rate: 0.0 },
      { name: 'Starter Rate', min: 12570, max: 14876, rate: 0.19 },
      { name: 'Basic Rate', min: 14876, max: 26561, rate: 0.20 },
      { name: 'Intermediate Rate', min: 26561, max: 43662, rate: 0.21 },
      { name: 'Higher Rate', min: 43662, max: 75000, rate: 0.42 },
      { name: 'Advanced Rate', min: 75000, max: 125140, rate: 0.45 },
      { name: 'Top Rate', min: 125140, max: Infinity, rate: 0.48 }
    ],
    ni: {
      primaryThreshold: 12570,
      upperEarningsLimit: 50270,
      mainRate: 0.08,
      upperRate: 0.02
    },
    studentLoans: {
      plan1: { threshold: 24990, rate: 0.09 },
      plan2: { threshold: 27295, rate: 0.09 },
      plan4: { threshold: 31395, rate: 0.09 },
      plan5: { threshold: 25000, rate: 0.09 },
      postgrad: { threshold: 21000, rate: 0.06 }
    },
    autoEnrolment: {
      qualifyingEarningsLower: 6240,
      qualifyingEarningsUpper: 50270,
      defaultEmployeeRate: 0.05,
      defaultEmployerRate: 0.03
    },
    blindAllowance: 3070,
    marriageAllowance: 1260
  }
};

// 9 UK Calculator Directory Profiles (Matching Screenshot 1 & 2)
export const UK_CALCULATORS_DIRECTORY = [
  {
    id: 'take-home',
    name: 'The Take-Home Calculator',
    shortName: 'Take-Home Pay',
    tagline: 'Work out what an annual gross salary means on a monthly, weekly, or daily basis, factoring in UK Tax, National Insurance, student loans, and pension contributions.',
    badge: 'Flagship PAYE'
  },
  {
    id: 'hourly-wage',
    name: 'The Hourly Wage Calculator',
    shortName: 'Hourly Wage',
    tagline: 'Convert your hourly rate into annual gross salary, monthly take-home, and daily earnings. See what a difference a few hours of overtime will make.',
    badge: 'Wage & Shift'
  },
  {
    id: 'maternity-sick',
    name: 'The Maternity / Sick Pay Calculator',
    shortName: 'Maternity / Sick Pay',
    tagline: 'Taking time off on Statutory Maternity Pay (SMP) or Statutory Sick Pay (SSP)? Estimate the exact effect reduced or statutory pay will have on take-home pay.',
    badge: 'Statutory Leave'
  },
  {
    id: 'required-salary',
    name: 'The Required Salary Calculator',
    shortName: 'Required Salary',
    tagline: 'Want to work it backwards? Enter your dream monthly take-home pay, and let the reverse tax calculator determine the gross salary needed to support your lifestyle.',
    badge: 'Reverse Tax'
  },
  {
    id: 'two-jobs',
    name: 'Two Jobs Salary Calculator',
    shortName: 'Two Jobs',
    tagline: 'What happens to your take-home pay if you take on a second job or freelance contract? Calculate combined tax, secondary BR/0T codes, and National Insurance.',
    badge: 'Dual Income'
  },
  {
    id: 'pro-rata',
    name: 'Pro-Rata Salary Calculator',
    shortName: 'Pro-Rata / Furlough',
    tagline: 'Changing hours or evaluating part-time or term-time roles? Calculate your pro-rata gross earnings and see the net impact on tax, NI, and pension.',
    badge: 'Part-Time'
  },
  {
    id: 'compare-salaries',
    name: 'Two Salary Comparison Calculator',
    shortName: 'Compare Two Salaries',
    tagline: 'Weighing two job offers or negotiating a raise? Compare two salaries side-by-side to see how the difference breaks down into net disposable monthly cash.',
    badge: 'Job Offer A vs B'
  },
  {
    id: 'mortgage-repayment',
    name: 'The Mortgage Repayment Calculator',
    shortName: 'Mortgages',
    tagline: 'Looking at buying a property or remortgaging? Calculate monthly payments, capital vs. interest splits, and evaluate interest rate scenarios against your take-home pay.',
    badge: 'Property & Loan'
  },
  {
    id: 'debt-consolidation',
    name: 'The Debt Consolidation Calculator',
    shortName: 'Debts',
    tagline: 'Consolidating multiple credit cards and loans into a single payment? Compare your existing monthly repayments against a consolidated facility and calculate interest saved.',
    badge: 'Debt Freedom'
  }
];

// Helper: Calculate tax using progressive bands
function calculateBandsTax(taxableIncome, bands) {
  let tax = 0;
  for (const band of bands) {
    if (taxableIncome > band.min) {
      const taxableInBand = Math.min(taxableIncome - band.min, band.max - band.min);
      tax += taxableInBand * band.rate;
    } else {
      break;
    }
  }
  return tax;
}

// 1. MASTER TAKE-HOME PAY CALCULATOR
export function calculateUKTakeHome({
  annualSalary = 30000,
  isScotland = false,
  taxYear = '2026/27',
  taxCode = '1257L',
  // Student Loan: 'none' | 'plan1' | 'plan2' | 'plan4' | 'plan5' | 'postgrad' | array
  studentLoanPlan = 'none',
  hasPostgradLoan = false,
  // Pension options (default to 'none' to match TheSalaryCalculator default)
  pensionType = 'none', // 'none' | 'auto' | 'percentage' | 'fixed'
  pensionPercent = 0,
  pensionFixedAmount = 0,
  pensionReliefType = 'netpay', // 'netpay' (salary sacrifice/before tax) | 'relief_at_source'
  // Bonus & Overtime
  bonusAmount = 0,
  overtimeHours15 = 0,
  overtimeHours20 = 0,
  standardWeeklyHours = 37.5,
  overtimeCashMonthly = 0,
  // Benefits & Salary Sacrifice
  childcareVouchersMonthly = 0,
  salarySacrificeAnnual = 0,
  taxableBenefitsAnnual = 0,
  // Additional Options
  isOverStatePensionAge = false, // No Employee NI
  isBlind = false,
  hasMarriageAllowance = false,
  _isPriorYearCalc = false
}) {
  const config = UK_TAX_YEARS[taxYear] || UK_TAX_YEARS['2026/27'];

  // Base Gross Calculations
  let grossSalary = Math.max(0, Number(annualSalary) || 0);

  // Overtime computation
  let overtimeAnnual = 0;
  if (overtimeCashMonthly > 0) {
    overtimeAnnual = overtimeCashMonthly * 12;
  } else if ((overtimeHours15 > 0 || overtimeHours20 > 0) && standardWeeklyHours > 0) {
    const hourlyRate = grossSalary / (standardWeeklyHours * 52);
    const otMonthly = (overtimeHours15 * hourlyRate * 1.5) + (overtimeHours20 * hourlyRate * 2.0);
    overtimeAnnual = otMonthly * 12;
  }

  const bonusAnnual = Math.max(0, Number(bonusAmount) || 0);
  const totalGrossIncome = grossSalary + overtimeAnnual + bonusAnnual;

  // Salary Sacrifice & Childcare Vouchers (reduce gross for tax & NI)
  const childcareAnnual = Math.max(0, Number(childcareVouchersMonthly) || 0) * 12;
  const totalSalarySacrifice = Math.max(0, Number(salarySacrificeAnnual) || 0) + childcareAnnual;

  const adjustedGross = Math.max(0, totalGrossIncome - totalSalarySacrifice);

  // Pension Calculations
  let employeePension = 0;
  let employerPension = 0;

  if (pensionType === 'auto') {
    // Qualifying earnings between £6,240 and £50,270
    const qualifyingEarnings = Math.max(0, Math.min(adjustedGross, config.autoEnrolment.qualifyingEarningsUpper) - config.autoEnrolment.qualifyingEarningsLower);
    employeePension = qualifyingEarnings * config.autoEnrolment.defaultEmployeeRate;
    employerPension = qualifyingEarnings * config.autoEnrolment.defaultEmployerRate;
  } else if (pensionType === 'percentage' && pensionPercent > 0) {
    const pRate = (Number(pensionPercent) || 0) / 100;
    employeePension = adjustedGross * pRate;
    employerPension = adjustedGross * 0.03; // Standard statutory employer baseline
  } else if (pensionType === 'fixed' && pensionFixedAmount > 0) {
    employeePension = Math.max(0, Number(pensionFixedAmount) || 0) * 12;
    employerPension = 0;
  }

  // Pre-tax pension deduction if netpay/salary sacrifice
  const preTaxPensionDeduction = pensionReliefType === 'netpay' ? employeePension : 0;

  // Tax Code & Personal Allowance Calculation
  let standardAllowance = config.personalAllowance;
  if (isBlind) standardAllowance += config.blindAllowance;
  if (hasMarriageAllowance) standardAllowance += config.marriageAllowance;

  // Custom tax code parsing
  const upperCode = (taxCode || '1257L').toUpperCase().trim();
  let isCustomEmergencyOrFlat = false;
  let flatTaxRate = null;

  if (upperCode === 'BR') {
    flatTaxRate = 0.20;
    standardAllowance = 0;
    isCustomEmergencyOrFlat = true;
  } else if (upperCode === 'D0') {
    flatTaxRate = 0.40;
    standardAllowance = 0;
    isCustomEmergencyOrFlat = true;
  } else if (upperCode === 'D1') {
    flatTaxRate = 0.45;
    standardAllowance = 0;
    isCustomEmergencyOrFlat = true;
  } else if (upperCode === '0T') {
    standardAllowance = 0;
  } else {
    const numMatch = upperCode.match(/^([S|C]?)([0-9]+)([L|M|N|T]?)$/);
    if (numMatch && numMatch[2]) {
      standardAllowance = parseInt(numMatch[2], 10) * 10;
    }
  }

  // Allowance Taper for Adjusted Net Income > £100,000 (£1 lost for every £2 over £100k)
  const adjustedNetIncome = Math.max(0, adjustedGross - preTaxPensionDeduction);
  let effectiveAllowance = standardAllowance;

  if (!isCustomEmergencyOrFlat && adjustedNetIncome > config.allowanceTaperThreshold) {
    const excess = adjustedNetIncome - config.allowanceTaperThreshold;
    const reduction = Math.floor(excess / 2);
    effectiveAllowance = Math.max(0, standardAllowance - reduction);
  }

  // Taxable Income
  const taxablePay = Math.max(0, adjustedNetIncome + (Number(taxableBenefitsAnnual) || 0) - effectiveAllowance);

  // Income Tax Computation
  let incomeTax = 0;
  if (flatTaxRate !== null) {
    incomeTax = (adjustedNetIncome + (Number(taxableBenefitsAnnual) || 0)) * flatTaxRate;
  } else if (isScotland) {
    // Dynamic Scottish Bands shifted by effective allowance
    const scotBands = [
      { min: 0, max: 2306, rate: 0.19 }, // £12,570 to £14,876 (Starter)
      { min: 2306, max: 13991, rate: 0.20 }, // £14,876 to £26,561 (Basic)
      { min: 13991, max: 31092, rate: 0.21 }, // £26,561 to £43,662 (Intermediate)
      { min: 31092, max: 62430, rate: 0.42 }, // £43,662 to £75,000 (Higher)
      { min: 62430, max: 125140, rate: 0.45 }, // £75,000 to £125,140 (Advanced)
      { min: 125140, max: Infinity, rate: 0.48 } // Over £125,140 (Top Rate)
    ];
    incomeTax = calculateBandsTax(taxablePay, scotBands);
  } else {
    // England, Wales, NI standard bands
    // Basic rate: first £37,700 of taxable pay taxed at 20%
    // Higher rate: taxable pay between £37,700 and £125,140 taxed at 40%
    // Additional rate: taxable pay over £125,140 taxed at 45%
    const engBands = [
      { min: 0, max: 37700, rate: 0.20 },
      { min: 37700, max: 125140, rate: 0.40 },
      { min: 125140, max: Infinity, rate: 0.45 }
    ];
    incomeTax = calculateBandsTax(taxablePay, engBands);
  }

  // National Insurance (Class 1 Employee NI)
  let nationalInsurance = 0;
  if (!isOverStatePensionAge) {
    const niEarnings = adjustedGross; // NI calculated on gross earnings after salary sacrifice
    if (niEarnings > config.ni.primaryThreshold) {
      const basicNi = Math.min(niEarnings, config.ni.upperEarningsLimit) - config.ni.primaryThreshold;
      const upperNi = Math.max(0, niEarnings - config.ni.upperEarningsLimit);
      nationalInsurance = (basicNi * config.ni.mainRate) + (upperNi * config.ni.upperRate);
    }
  }

  // Student Loan Deductions
  let studentLoan = 0;
  const plans = Array.isArray(studentLoanPlan) ? studentLoanPlan : [studentLoanPlan];
  for (const p of plans) {
    if (p && config.studentLoans[p]) {
      const loanRule = config.studentLoans[p];
      if (adjustedGross > loanRule.threshold) {
        studentLoan += (adjustedGross - loanRule.threshold) * loanRule.rate;
      }
    }
  }
  if (hasPostgradLoan) {
    const pg = config.studentLoans.postgrad;
    if (adjustedGross > pg.threshold) {
      studentLoan += (adjustedGross - pg.threshold) * pg.rate;
    }
  }

  // Post-tax pension deduction if relief at source
  const postTaxPensionDeduction = pensionReliefType === 'relief_at_source' ? employeePension : 0;

  // Total Deductions & Net Take-Home Pay
  const totalDeductions = incomeTax + nationalInsurance + studentLoan + preTaxPensionDeduction + postTaxPensionDeduction;
  const takeHomePay = Math.max(0, totalGrossIncome - totalSalarySacrifice - totalDeductions);

  // Accurate 2-decimal currency helpers
  const round2 = (num) => Math.round((Number(num) || 0) * 100) / 100;
  const floor2 = (num) => Math.floor((Number(num) || 0) * 100) / 100;

  // Detailed tax bands breakdown
  const taxBandsBreakdown = [];
  if (flatTaxRate !== null) {
    taxBandsBreakdown.push({
      name: `Flat Rate (${(flatTaxRate * 100).toFixed(0)}%)`,
      rate: flatTaxRate,
      taxable: round2(taxablePay),
      tax: round2(incomeTax)
    });
  } else {
    taxBandsBreakdown.push({
      name: 'Personal Allowance (0%)',
      rate: 0,
      taxable: round2(Math.min(adjustedNetIncome, effectiveAllowance)),
      tax: 0
    });
    const activeBands = isScotland ? [
      { name: 'Starter Rate (19%)', min: 0, max: 2306, rate: 0.19 },
      { name: 'Basic Rate (20%)', min: 2306, max: 13991, rate: 0.20 },
      { name: 'Intermediate Rate (21%)', min: 13991, max: 31092, rate: 0.21 },
      { name: 'Higher Rate (42%)', min: 31092, max: 62430, rate: 0.42 },
      { name: 'Advanced Rate (45%)', min: 62430, max: 125140, rate: 0.45 },
      { name: 'Top Rate (48%)', min: 125140, max: Infinity, rate: 0.48 }
    ] : [
      { name: 'Basic Rate (20%)', min: 0, max: 37700, rate: 0.20 },
      { name: 'Higher Rate (40%)', min: 37700, max: 125140, rate: 0.40 },
      { name: 'Additional Rate (45%)', min: 125140, max: Infinity, rate: 0.45 }
    ];

    for (const b of activeBands) {
      if (taxablePay > b.min) {
        const taxableInBand = Math.min(taxablePay - b.min, b.max - b.min);
        const taxInBand = taxableInBand * b.rate;
        taxBandsBreakdown.push({
          name: b.name,
          rate: b.rate,
          taxable: round2(taxableInBand),
          tax: round2(taxInBand)
        });
      }
    }
  }

  // Calculate prior tax year (2025/26) take home for side-by-side comparison
  let priorYearTakeHomePeriods = null;
  if (!_isPriorYearCalc && taxYear === '2026/27') {
    try {
      const priorResult = calculateUKTakeHome({
        annualSalary: grossSalary,
        isScotland,
        taxYear: '2025/26',
        taxCode,
        studentLoanPlan,
        hasPostgradLoan,
        pensionType,
        pensionPercent,
        pensionFixedAmount,
        pensionReliefType,
        bonusAmount,
        overtimeHours15,
        overtimeHours20,
        standardWeeklyHours,
        overtimeCashMonthly,
        childcareVouchersMonthly,
        salarySacrificeAnnual,
        taxableBenefitsAnnual,
        isOverStatePensionAge,
        isBlind,
        hasMarriageAllowance,
        _isPriorYearCalc: true
      });
      priorYearTakeHomePeriods = priorResult.periods.takeHome;
    } catch (e) {
      console.error('Error calculating prior year comparison:', e);
    }
  }

  const periodsList = [
    { key: 'yearly', divisor: 1, taxFn: round2 },
    { key: 'monthly', divisor: 12, taxFn: floor2 },
    { key: 'fourWeekly', divisor: 13, taxFn: round2 },
    { key: 'twoWeekly', divisor: 26, taxFn: round2 },
    { key: 'weekly', divisor: 52, taxFn: round2 },
    { key: 'daily', divisor: 260, taxFn: floor2 }
  ];

  const periods = {
    gross: {},
    taxable: {},
    tax: {},
    ni: {},
    studentLoan: {},
    pension: {},
    takeHome: {},
    takeHomePriorYear: {}
  };

  for (const p of periodsList) {
    const g = round2(totalGrossIncome / p.divisor);
    const tb = round2(taxablePay / p.divisor);
    const t = p.taxFn(incomeTax / p.divisor);
    const n = round2(nationalInsurance / p.divisor);
    const sl = round2(studentLoan / p.divisor);
    const pen = round2(employeePension / p.divisor);
    const th = round2(g - t - n - sl - pen);

    periods.gross[p.key] = g;
    periods.taxable[p.key] = tb;
    periods.tax[p.key] = t;
    periods.ni[p.key] = n;
    periods.studentLoan[p.key] = sl;
    periods.pension[p.key] = pen;
    periods.takeHome[p.key] = th;
    periods.takeHomePriorYear[p.key] = priorYearTakeHomePeriods ? priorYearTakeHomePeriods[p.key] : th;
  }

  return {
    grossSalary: round2(grossSalary),
    overtimeAnnual: round2(overtimeAnnual),
    bonusAnnual: round2(bonusAnnual),
    totalGrossIncome: round2(totalGrossIncome),
    adjustedGross: round2(adjustedGross),
    personalAllowance: round2(effectiveAllowance),
    taxablePay: round2(taxablePay),
    incomeTax: round2(incomeTax),
    nationalInsurance: round2(nationalInsurance),
    studentLoan: round2(studentLoan),
    employeePension: round2(employeePension),
    employerPension: round2(employerPension),
    totalDeductions: round2(totalDeductions),
    takeHomePay: round2(takeHomePay),
    effectiveTaxRate: totalGrossIncome > 0 ? (incomeTax / totalGrossIncome) : 0,
    effectiveTotalDeductionRate: totalGrossIncome > 0 ? (totalDeductions / totalGrossIncome) : 0,
    taxBandsBreakdown,
    periods
  };
}

// 2. HOURLY WAGE CALCULATOR
export function calculateUKHourlyWage({
  hourlyRate = 15,
  hoursPerWeek = 37.5,
  daysPerWeek = 5,
  weeksPerYear = 52,
  overtimeHours = 0,
  overtimeMultiplier = 1.5,
  isScotland = false,
  taxYear = '2026/27'
}) {
  const baseRate = Math.max(0, Number(hourlyRate) || 0);
  const baseHours = Math.max(0, Number(hoursPerWeek) || 0);
  const weeks = Math.max(1, Math.min(52, Number(weeksPerYear) || 52));
  const otHours = Math.max(0, Number(overtimeHours) || 0);
  const mult = Math.max(1, Number(overtimeMultiplier) || 1.5);

  const regularAnnualGross = baseRate * baseHours * weeks;
  const overtimeAnnualGross = otHours * (baseRate * mult) * weeks;
  const totalAnnualGross = regularAnnualGross + overtimeAnnualGross;

  const takeHomeResult = calculateUKTakeHome({
    annualSalary: totalAnnualGross,
    isScotland,
    taxYear
  });

  const totalHoursWorkedAnnual = (baseHours + otHours) * weeks;
  const effectiveNetHourlyRate = totalHoursWorkedAnnual > 0 ? (takeHomeResult.takeHomePay / totalHoursWorkedAnnual) : 0;

  return {
    baseRate,
    regularAnnualGross,
    overtimeAnnualGross,
    totalAnnualGross,
    effectiveNetHourlyRate,
    takeHomeResult
  };
}

// 3. MATERNITY / SICK PAY CALCULATOR
export function calculateUKMaternitySickPay({
  regularAnnualSalary = 35000,
  leaveType = 'maternity', // 'maternity' | 'sick'
  fullPayWeeks = 6,
  smpWeeks = 33, // Statutory Maternity Pay (£184.03/week in 2024-2026)
  unpaidWeeks = 13,
  sspWeeks = 28, // Statutory Sick Pay (£116.75/week in 2024-2026)
  isScotland = false,
  taxYear = '2026/27'
}) {
  const regularWeeklyGross = regularAnnualSalary / 52;
  const SMP_WEEKLY_RATE = 184.03;
  const SSP_WEEKLY_RATE = 116.75;

  let totalLeavePayAnnual = 0;
  if (leaveType === 'maternity') {
    // First 6 weeks @ 90% of regular average earnings
    const first6WeeksPay = fullPayWeeks * (regularWeeklyGross * 0.90);
    // Next 33 weeks @ lower of £184.03 or 90%
    const smpWeekly = Math.min(SMP_WEEKLY_RATE, regularWeeklyGross * 0.90);
    const smpTotal = smpWeeks * smpWeekly;
    totalLeavePayAnnual = first6WeeksPay + smpTotal;
  } else {
    // Sick Pay
    const paidWeeks = Math.min(28, Number(sspWeeks) || 0);
    totalLeavePayAnnual = paidWeeks * SSP_WEEKLY_RATE;
  }

  const regularTakeHome = calculateUKTakeHome({ annualSalary: regularAnnualSalary, isScotland, taxYear });
  const leaveTakeHome = calculateUKTakeHome({ annualSalary: totalLeavePayAnnual, isScotland, taxYear });

  return {
    regularAnnualSalary,
    totalLeavePayAnnual,
    regularMonthlyTakeHome: regularTakeHome.periods.takeHome.monthly,
    leaveMonthlyTakeHome: leaveTakeHome.periods.takeHome.monthly,
    monthlyReduction: Math.max(0, regularTakeHome.periods.takeHome.monthly - leaveTakeHome.periods.takeHome.monthly),
    regularTakeHome,
    leaveTakeHome
  };
}

// 4. REQUIRED SALARY CALCULATOR (REVERSE TAKE-HOME)
export function calculateUKRequiredSalary({
  desiredMonthlyTakeHome = 2500,
  isScotland = false,
  taxYear = '2026/27',
  hasStudentLoan = false,
  studentLoanPlan = 'plan2'
}) {
  const targetAnnualTakeHome = Math.max(0, Number(desiredMonthlyTakeHome) || 0) * 12;

  // Binary search for exact gross salary needed
  let low = targetAnnualTakeHome;
  let high = targetAnnualTakeHome * 3 + 50000;
  let iterations = 0;
  let estimatedGross = targetAnnualTakeHome;

  while (iterations < 40 && (high - low) > 1) {
    const mid = (low + high) / 2;
    const testRes = calculateUKTakeHome({
      annualSalary: mid,
      isScotland,
      taxYear,
      studentLoanPlan: hasStudentLoan ? studentLoanPlan : 'none'
    });

    if (testRes.takeHomePay < targetAnnualTakeHome) {
      low = mid;
    } else {
      high = mid;
    }
    estimatedGross = mid;
    iterations++;
  }

  const exactGross = Math.round(estimatedGross);
  const result = calculateUKTakeHome({
    annualSalary: exactGross,
    isScotland,
    taxYear,
    studentLoanPlan: hasStudentLoan ? studentLoanPlan : 'none'
  });

  return {
    targetMonthlyTakeHome: desiredMonthlyTakeHome,
    targetAnnualTakeHome,
    requiredAnnualSalary: exactGross,
    requiredMonthlySalary: exactGross / 12,
    result
  };
}

// 5. TWO JOBS SALARY CALCULATOR
export function calculateUKTwoJobs({
  job1Salary = 30000,
  job1TaxCode = '1257L',
  job2Salary = 15000,
  job2TaxCode = 'BR', // Basic rate 20% on second job
  isScotland = false,
  taxYear = '2026/27'
}) {
  const res1 = calculateUKTakeHome({ annualSalary: job1Salary, taxCode: job1TaxCode, isScotland, taxYear });
  const res2 = calculateUKTakeHome({ annualSalary: job2Salary, taxCode: job2TaxCode, isScotland, taxYear });

  const combinedGross = res1.totalGrossIncome + res2.totalGrossIncome;
  const combinedTax = res1.incomeTax + res2.incomeTax;
  const combinedNI = res1.nationalInsurance + res2.nationalInsurance;
  const combinedTakeHome = res1.takeHomePay + res2.takeHomePay;

  return {
    job1: res1,
    job2: res2,
    combined: {
      gross: combinedGross,
      tax: combinedTax,
      ni: combinedNI,
      takeHome: combinedTakeHome,
      monthlyTakeHome: combinedTakeHome / 12,
      weeklyTakeHome: combinedTakeHome / 52
    }
  };
}

// 6. PRO-RATA SALARY CALCULATOR
export function calculateUKProRata({
  fullTimeEquivalentSalary = 40000,
  standardFullTimeHours = 37.5,
  actualWeeklyHours = 22.5,
  standardWeeksPerYear = 52,
  actualWeeksPerYear = 52,
  isScotland = false,
  taxYear = '2026/27'
}) {
  const fte = Math.max(0, Number(fullTimeEquivalentSalary) || 0);
  const fteHours = Math.max(1, Number(standardFullTimeHours) || 37.5);
  const partHours = Math.max(0, Number(actualWeeklyHours) || 0);
  const fteWeeks = Math.max(1, Number(standardWeeksPerYear) || 52);
  const partWeeks = Math.max(1, Number(actualWeeksPerYear) || 52);

  const hoursRatio = partHours / fteHours;
  const weeksRatio = partWeeks / fteWeeks;
  const combinedRatio = hoursRatio * weeksRatio;

  const proRataGross = Math.round(fte * combinedRatio);

  const fteTakeHome = calculateUKTakeHome({ annualSalary: fte, isScotland, taxYear });
  const proRataTakeHome = calculateUKTakeHome({ annualSalary: proRataGross, isScotland, taxYear });

  return {
    fteSalary: fte,
    proRataGross,
    proRataPercentage: (combinedRatio * 100).toFixed(1) + '%',
    fteTakeHome,
    proRataTakeHome
  };
}

// 7. TWO SALARY COMPARISON CALCULATOR
export function calculateUKTwoSalaryComparison({
  salaryA = 35000,
  salaryB = 45000,
  pensionA = 5,
  pensionB = 5,
  isScotland = false,
  taxYear = '2026/27'
}) {
  const resA = calculateUKTakeHome({ annualSalary: salaryA, pensionPercent: pensionA, isScotland, taxYear });
  const resB = calculateUKTakeHome({ annualSalary: salaryB, pensionPercent: pensionB, isScotland, taxYear });

  const annualGrossDiff = resB.totalGrossIncome - resA.totalGrossIncome;
  const annualNetDiff = resB.takeHomePay - resA.takeHomePay;
  const monthlyNetDiff = resB.periods.takeHome.monthly - resA.periods.takeHome.monthly;
  const weeklyNetDiff = resB.periods.takeHome.weekly - resA.periods.takeHome.weekly;

  return {
    jobA: resA,
    jobB: resB,
    diff: {
      grossAnnual: annualGrossDiff,
      netAnnual: annualNetDiff,
      netMonthly: monthlyNetDiff,
      netWeekly: weeklyNetDiff,
      retentionRate: annualGrossDiff > 0 ? (annualNetDiff / annualGrossDiff) : 0
    }
  };
}

// 8. MORTGAGE REPAYMENT CALCULATOR
export function calculateUKMortgage({
  propertyPrice = 300000,
  depositAmount = 45000,
  interestRate = 4.5, // %
  termYears = 25,
  repaymentType = 'capital' // 'capital' (repayment) | 'interest_only'
}) {
  const price = Math.max(0, Number(propertyPrice) || 0);
  const deposit = Math.max(0, Number(depositAmount) || 0);
  const loanAmount = Math.max(0, price - deposit);
  const rateAnnual = (Number(interestRate) || 0) / 100;
  const monthlyRate = rateAnnual / 12;
  const totalPayments = Math.max(1, (Number(termYears) || 25) * 12);

  let monthlyPayment = 0;
  if (repaymentType === 'interest_only') {
    monthlyPayment = loanAmount * monthlyRate;
  } else {
    // Amortization formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
    if (monthlyRate > 0) {
      monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    } else {
      monthlyPayment = loanAmount / totalPayments;
    }
  }

  const totalRepaid = repaymentType === 'interest_only' 
    ? (monthlyPayment * totalPayments) + loanAmount
    : monthlyPayment * totalPayments;
  const totalInterest = Math.max(0, totalRepaid - loanAmount);
  const ltv = price > 0 ? ((loanAmount / price) * 100).toFixed(1) : '0.0';

  return {
    propertyPrice: price,
    depositAmount: deposit,
    loanAmount,
    ltv,
    monthlyPayment: Math.round(monthlyPayment),
    totalRepaid: Math.round(totalRepaid),
    totalInterest: Math.round(totalInterest)
  };
}

// 9. DEBT CONSOLIDATION CALCULATOR
export function calculateUKDebtConsolidation({
  debts = [
    { name: 'Credit Card 1', balance: 5000, apr: 22.9, monthlyPayment: 150 },
    { name: 'Personal Loan', balance: 8000, apr: 11.5, monthlyPayment: 210 },
    { name: 'Store Card', balance: 2000, apr: 29.9, monthlyPayment: 75 }
  ],
  consolidationApr = 7.5,
  consolidationTermYears = 4
}) {
  let totalExistingBalance = 0;
  let totalExistingMonthly = 0;

  for (const d of debts) {
    totalExistingBalance += Math.max(0, Number(d.balance) || 0);
    totalExistingMonthly += Math.max(0, Number(d.monthlyPayment) || 0);
  }

  const newApr = (Number(consolidationApr) || 7.5) / 100;
  const monthlyRate = newApr / 12;
  const months = Math.max(1, (Number(consolidationTermYears) || 4) * 12);

  let newMonthlyPayment = 0;
  if (monthlyRate > 0) {
    newMonthlyPayment = totalExistingBalance * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  } else {
    newMonthlyPayment = totalExistingBalance / months;
  }

  const newTotalRepaid = newMonthlyPayment * months;
  const newTotalInterest = Math.max(0, newTotalRepaid - totalExistingBalance);
  const monthlySaving = totalExistingMonthly - newMonthlyPayment;

  return {
    totalExistingBalance,
    totalExistingMonthly,
    newMonthlyPayment: Math.round(newMonthlyPayment),
    newTotalRepaid: Math.round(newTotalRepaid),
    newTotalInterest: Math.round(newTotalInterest),
    monthlySaving: Math.round(monthlySaving),
    isSavingMoney: monthlySaving > 0
  };
}
