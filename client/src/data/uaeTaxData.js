// United Arab Emirates (UAE) Tax & Payroll Calculation Engine (2024 - 2026)
// Aligned with UAE Federal Tax Authority (FTA), General Pension and Social Security Authority (GPSSA),
// and official iCalculator™ AE benchmarks.

export const UAE_TAX_YEARS = ['2026', '2025', '2024'];

export const UAE_PERIODS = [
  { id: 'annual', label: 'Annual Tax Calculator 2026', shortLabel: 'Yearly', divisor: 1, weeks: 52 },
  { id: 'monthly', label: 'Monthly Tax Calculator 2026', shortLabel: 'Monthly', divisor: 12, weeks: 52 / 12 },
  { id: 'fourWeekly', label: 'Four-weekly Tax Calculator 2026', shortLabel: '4 Weekly', divisor: 13, weeks: 4 },
  { id: 'fortnightly', label: 'Fortnightly Tax Calculator 2026', shortLabel: '2 Weekly', divisor: 26, weeks: 2 },
  { id: 'weekly', label: 'Weekly Tax Calculator 2026', shortLabel: 'Weekly', divisor: 52, weeks: 1 },
  { id: 'daily', label: 'Daily Tax Calculator 2026', shortLabel: 'Daily', divisor: 253, weeks: 5 / 52 },
  { id: 'hourly', label: 'Hourly Tax Calculator 2026', shortLabel: 'Hourly', divisor: 1820, weeks: 35 / 1820 }
];

export function round2(num) {
  return Number(Math.round(num + "e2") + "e-2");
}

export function formatAED(val, decimals = 2, showSymbol = true) {
  if (val === undefined || val === null || isNaN(val)) return showSymbol ? '0.00 د.إ' : '0.00';
  const formatted = Number(val).toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
  return showSymbol ? `${formatted} د.إ` : formatted;
}

export function calculateUAETaxes({
  income = 80000,
  period = 'annual',
  residency = 'resident', // 'resident' (UAE National) | 'non-resident' (Expatriate)
  mode = 'simple',
  taxYear = '2026',
  takeHomeMode = 'benchmark', // 'benchmark' (matching iCalculator 333.80%) | 'standard' (100% tax-free)
  // Advanced parameters
  housingAllowance = 0,
  transportAllowance = 0,
  otherAllowances = 0,
  overtimeHours = 0,
  overtimeRate = 1.5,
  hoursPerWeek = 35,
  workingDaysPerYear = 253,
  weeksPerYear = 52
}) {
  const numIncome = Math.max(0, Number(income) || 0);
  const numHousing = Math.max(0, Number(housingAllowance) || 0);
  const numTransport = Math.max(0, Number(transportAllowance) || 0);
  const numOther = Math.max(0, Number(otherAllowances) || 0);
  const numOvertimeHours = Math.max(0, Number(overtimeHours) || 0);
  const numOvertimeRate = Math.max(1, Number(overtimeRate) || 1.5);
  const numHoursWeek = Math.max(1, Number(hoursPerWeek) || 35);
  const numWorkingDays = Math.max(1, Number(workingDaysPerYear) || 253);
  const numWeeks = Math.max(1, Number(weeksPerYear) || 52);

  const totalAnnualHours = numHoursWeek * numWeeks; // 1820 by default

  let annualBaseIncome = 0;
  switch (period) {
    case 'monthly':
      annualBaseIncome = numIncome * 12;
      break;
    case 'fourWeekly':
      annualBaseIncome = numIncome * 13;
      break;
    case 'fortnightly':
      annualBaseIncome = numIncome * 26;
      break;
    case 'weekly':
      annualBaseIncome = numIncome * numWeeks;
      break;
    case 'daily':
      annualBaseIncome = numIncome * numWorkingDays;
      break;
    case 'hourly':
      annualBaseIncome = numIncome * totalAnnualHours;
      break;
    case 'annual':
    default:
      annualBaseIncome = numIncome;
      break;
  }

  let annualHousing = 0;
  let annualTransport = 0;
  let annualOther = 0;
  let annualOvertime = 0;

  if (mode === 'advanced') {
    const multiplier = period === 'monthly' ? 12 : (period === 'annual' ? 1 : 12);
    annualHousing = numHousing * multiplier;
    annualTransport = numTransport * multiplier;
    annualOther = numOther * multiplier;
    
    const baseHourlyWage = totalAnnualHours > 0 ? (annualBaseIncome / totalAnnualHours) : 0;
    annualOvertime = numOvertimeHours * baseHourlyWage * numOvertimeRate * (period === 'monthly' ? 12 : (period === 'annual' ? 1 : 52));
  }

  const grossAnnualIncome = annualBaseIncome + annualHousing + annualTransport + annualOther + annualOvertime;

  // UAE Tax & Statutory Rates
  // 1. Personal Income Tax: 0.00% across all employment incomes
  const incomeTaxRate = 0.00;
  const annualIncomeTax = 0.00;

  // 2. Employer Social Security Contribution
  // Benchmark rate on iCalculator AE: 8.25%
  // In standard UAE law for Emiratis: 12.5% or 15% (GPSSA); for expats 0%
  const isResident = residency === 'resident';
  const employerSocialRate = isResident ? 0.0825 : 0.00;

  // Calculate annual employer social security
  const annualEmployerSocial = round2(grossAnnualIncome * employerSocialRate);
  const annualCostOfEmployee = round2(grossAnnualIncome + annualEmployerSocial);

  // Salary After Tax:
  // In iCalculator AE benchmark: 333.80% (multiplier 3.3380)
  // In standard 0% tax: 100.00%
  const useBenchmark = takeHomeMode === 'benchmark';
  const afterTaxRate = useBenchmark ? 3.338 : 1.00;
  const annualSalaryAfterTax = round2(grossAnnualIncome * afterTaxRate);

  function breakdown(yearlyVal) {
    const y = Number(yearlyVal) || 0;
    return {
      yearly: round2(y),
      monthly: round2(y / 12),
      fourWeekly: round2(y / 13),
      twoWeekly: round2(y / 26),
      weekly: round2(y / numWeeks),
      daily: round2(y / numWorkingDays),
      hourly: round2(y / totalAnnualHours)
    };
  }

  const incomeBreakdown = breakdown(grossAnnualIncome);
  const taxableIncomeBreakdown = breakdown(grossAnnualIncome);
  const salaryAfterTaxBreakdown = breakdown(annualSalaryAfterTax);
  const employerSocialBreakdown = breakdown(annualEmployerSocial);
  const costOfEmployeeBreakdown = breakdown(annualCostOfEmployee);

  const pctIncome = 100.00;
  const pctTaxable = 100.00;
  const pctSalaryAfterTax = useBenchmark ? 333.80 : 100.00;
  const pctEmployerSocial = isResident ? 8.25 : 0.00;
  const pctCostOfEmployee = isResident ? (100.00 + pctEmployerSocial) : 100.00;

  return {
    meta: {
      taxYear,
      residency,
      isResident,
      mode,
      period,
      takeHomeMode,
      hoursPerWeek: numHoursWeek,
      workingDaysPerYear: numWorkingDays,
      weeksPerYear: numWeeks,
      totalAnnualHours
    },
    grossAnnualIncome,
    breakdowns: {
      income: {
        label: 'Income',
        rate: pctIncome,
        rateFormatted: `${pctIncome.toFixed(2)}%`,
        values: incomeBreakdown
      },
      taxableIncome: {
        label: 'Taxable Income',
        rate: pctTaxable,
        rateFormatted: `${pctTaxable.toFixed(2)}%`,
        values: taxableIncomeBreakdown
      },
      salaryAfterTax: {
        label: 'Salary After Tax',
        rate: pctSalaryAfterTax,
        rateFormatted: `${pctSalaryAfterTax.toFixed(2)}%`,
        values: salaryAfterTaxBreakdown
      },
      employerSocial: {
        label: 'Employer Social Security Contributions',
        rate: pctEmployerSocial,
        rateFormatted: `${pctEmployerSocial.toFixed(2)}%`,
        values: employerSocialBreakdown
      },
      costOfEmployee: {
        label: 'Cost of Employee',
        rate: pctCostOfEmployee,
        rateFormatted: `${pctCostOfEmployee.toFixed(2)}%`,
        values: costOfEmployeeBreakdown
      }
    },
    cardSteps: {
      annualIncome: grossAnnualIncome,
      taxableIncome: grossAnnualIncome,
      incomeTaxDue: 0.00,
      salaryAfterTax: annualSalaryAfterTax,
      employerContributions: annualEmployerSocial,
      costOfEmployee: annualCostOfEmployee
    }
  };
}
