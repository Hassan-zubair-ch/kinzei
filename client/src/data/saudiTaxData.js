// Saudi Arabia (KSA / UKS) Tax & Payroll Calculation Engine (2024 - 2026)
// Aligned with General Organization for Social Insurance (GOSI), SANED unemployment scheme,
// and official iCalculator™ SA benchmarks.

export const SAUDI_TAX_YEARS = ['2026', '2025', '2024'];

export const SAUDI_PERIODS = [
  { id: 'annual', label: 'Annual Tax Calculator 2026', shortLabel: 'Yearly', divisor: 1, weeks: 52 },
  { id: 'monthly', label: 'Monthly Tax Calculator 2026', shortLabel: 'Monthly', divisor: 12, weeks: 52 / 12 },
  { id: 'fourWeekly', label: 'Four-weekly Tax Calculator 2026', shortLabel: '4 Weekly', divisor: 13, weeks: 4 },
  { id: 'fortnightly', label: 'Fortnightly Tax Calculator 2026', shortLabel: '2 Weekly', divisor: 26, weeks: 2 },
  { id: 'weekly', label: 'Weekly Tax Calculator 2026', shortLabel: 'Weekly', divisor: 52, weeks: 1 },
  { id: 'daily', label: 'Daily Tax Calculator 2026', shortLabel: 'Daily', divisor: 253, weeks: 5 / 52 },
  { id: 'hourly', label: 'Hourly Tax Calculator 2026', shortLabel: 'Hourly', divisor: 1820, weeks: 35 / 1820 }
];

// Helper to round strictly to 2 decimal places to match iCalculator currency formatting
export function round2(num) {
  return Number(Math.round(num + "e2") + "e-2");
}

export function formatSAR(val, decimals = 2, showSymbol = true) {
  if (val === undefined || val === null || isNaN(val)) return showSymbol ? '0.00 ريال' : '0.00';
  const formatted = Number(val).toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
  return showSymbol ? `${formatted} ريال` : formatted;
}

export function calculateSaudiTaxes({
  income = 80000.10,
  period = 'annual', // 'annual' | 'monthly' | 'fourWeekly' | 'fortnightly' | 'weekly' | 'daily' | 'hourly'
  residency = 'resident', // 'resident' (Saudi National) | 'non-resident' (Expatriate)
  mode = 'simple', // 'simple' | 'advanced'
  taxYear = '2026',
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

  // Standard total working hours per year (default 35 * 52 = 1820 hours)
  const totalAnnualHours = numHoursWeek * numWeeks;

  // Compute total base income normalized to annual
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

  // Advanced additions
  let annualHousing = 0;
  let annualTransport = 0;
  let annualOther = 0;
  let annualOvertime = 0;

  if (mode === 'advanced') {
    // Normalise allowances based on selected period
    const multiplier = period === 'monthly' ? 12 : (period === 'annual' ? 1 : 12);
    annualHousing = numHousing * multiplier;
    annualTransport = numTransport * multiplier;
    annualOther = numOther * multiplier;
    
    // Hourly base wage
    const baseHourlyWage = totalAnnualHours > 0 ? (annualBaseIncome / totalAnnualHours) : 0;
    annualOvertime = numOvertimeHours * baseHourlyWage * numOvertimeRate * (period === 'monthly' ? 12 : (period === 'annual' ? 1 : 52));
  }

  const grossAnnualIncome = annualBaseIncome + annualHousing + annualTransport + annualOther + annualOvertime;

  // Saudi Arabia Tax & Statutory Deductions Rates
  // 1. Personal Income Tax: 0.00% across all employment incomes
  const incomeTaxRate = 0.00;
  const annualIncomeTax = 0.00;

  // 2. Social Insurance (GOSI Pension)
  // Resident (Saudi Citizen): 9.00% Employee, 9.00% Employer
  // Non-Resident (Expatriate): 0.00% Employee, 0.00% Employer
  const isResident = residency === 'resident';
  const socialInsuranceEmployeeRate = isResident ? 0.09 : 0.00;
  const socialInsuranceEmployerRate = isResident ? 0.09 : 0.00;

  // 3. Unemployment Insurance (SANED)
  // Resident (Saudi Citizen): 0.75% Employee, 0.75% Employer
  // Non-Resident (Expatriate): 0.00% Employee, 0.00% Employer
  const sanedEmployeeRate = isResident ? 0.0075 : 0.00;
  const sanedEmployerRate = isResident ? 0.0075 : 0.00;

  // 4. Occupational Hazard Insurance (GOSI)
  // Both Resident and Non-Resident: 0.00% Employee, 2.00% Employer
  const occHazardEmployeeRate = 0.00;
  const occHazardEmployerRate = 0.02;

  // Calculate annual raw amounts
  const annualSocialInsuranceEmployee = round2(grossAnnualIncome * socialInsuranceEmployeeRate);
  const annualSanedEmployee = round2(grossAnnualIncome * sanedEmployeeRate);
  const annualTotalEmployeeDeductions = round2(annualSocialInsuranceEmployee + annualSanedEmployee + annualIncomeTax);
  const annualSalaryAfterTax = round2(grossAnnualIncome - annualTotalEmployeeDeductions);

  // Employer Payroll Costs
  const annualSocialInsuranceEmployer = round2(grossAnnualIncome * socialInsuranceEmployerRate);
  const annualSanedEmployer = round2(grossAnnualIncome * sanedEmployerRate);
  const annualOccHazardEmployer = round2(grossAnnualIncome * occHazardEmployerRate);
  const annualTotalEmployerCosts = round2(annualSocialInsuranceEmployer + annualSanedEmployer + annualOccHazardEmployer);
  const annualCostOfEmployee = round2(grossAnnualIncome + annualTotalEmployerCosts);

  // Helper to construct period breakdown object matching iCalculator SA columns exactly
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

  // Summary Table Rows
  const incomeBreakdown = breakdown(grossAnnualIncome);
  const socialInsuranceBreakdown = breakdown(annualSocialInsuranceEmployee);
  const sanedBreakdown = breakdown(annualSanedEmployee);
  const taxableIncomeBreakdown = breakdown(grossAnnualIncome);
  const totalDeductionsBreakdown = breakdown(annualTotalEmployeeDeductions);
  const salaryAfterTaxBreakdown = breakdown(annualSalaryAfterTax);

  // Employer Payroll Costs Breakdown
  const employerSocialBreakdown = breakdown(annualSocialInsuranceEmployer);
  const employerSanedBreakdown = breakdown(annualSanedEmployer);
  const employerOccHazardBreakdown = breakdown(annualOccHazardEmployer);
  const costOfEmployeeBreakdown = breakdown(annualCostOfEmployee);

  // Percentage calculations
  const pctIncome = 100.00;
  const pctSocial = isResident ? 9.00 : 0.00;
  const pctSaned = isResident ? 0.75 : 0.00;
  const pctTaxable = 100.00;
  const pctTotalDeductions = isResident ? 9.75 : 0.00;
  const pctSalaryAfterTax = isResident ? 90.25 : 100.00;

  const pctEmployerSocial = isResident ? 9.00 : 0.00;
  const pctEmployerSaned = isResident ? 0.75 : 0.00;
  const pctEmployerOccHazard = 2.00;
  const pctCostOfEmployee = isResident ? 111.75 : 102.00;

  return {
    meta: {
      taxYear,
      residency,
      isResident,
      mode,
      period,
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
      socialInsurance: {
        label: 'Social Insurance',
        rate: pctSocial,
        rateFormatted: `${pctSocial.toFixed(2)}%`,
        values: socialInsuranceBreakdown
      },
      saned: {
        label: 'Unemployment Insurance (SANED)',
        rate: pctSaned,
        rateFormatted: `${pctSaned.toFixed(2)}%`,
        values: sanedBreakdown
      },
      taxableIncome: {
        label: 'Taxable Income',
        rate: pctTaxable,
        rateFormatted: `${pctTaxable.toFixed(2)}%`,
        values: taxableIncomeBreakdown
      },
      totalDeductions: {
        label: 'Total Deductions',
        rate: pctTotalDeductions,
        rateFormatted: `${pctTotalDeductions.toFixed(2)}%`,
        values: totalDeductionsBreakdown
      },
      salaryAfterTax: {
        label: 'Salary After Tax',
        rate: pctSalaryAfterTax,
        rateFormatted: `${pctSalaryAfterTax.toFixed(2)}%`,
        values: salaryAfterTaxBreakdown
      },
      // Employer Costs
      employerSocial: {
        label: 'Social Insurance',
        rate: pctEmployerSocial,
        rateFormatted: `${pctEmployerSocial.toFixed(2)}%`,
        values: employerSocialBreakdown
      },
      employerSaned: {
        label: 'Unemployment Insurance (SANED)',
        rate: pctEmployerSaned,
        rateFormatted: `${pctEmployerSaned.toFixed(2)}%`,
        values: employerSanedBreakdown
      },
      employerOccHazard: {
        label: 'Occupational Hazard Insurance',
        rate: pctEmployerOccHazard,
        rateFormatted: `${pctEmployerOccHazard.toFixed(2)}%`,
        values: employerOccHazardBreakdown
      },
      costOfEmployee: {
        label: 'Cost of Employee',
        rate: pctCostOfEmployee,
        rateFormatted: `${pctCostOfEmployee.toFixed(2)}%`,
        values: costOfEmployeeBreakdown
      }
    },
    // Step by step breakdown details for cards
    cardSteps: {
      annualIncome: grossAnnualIncome,
      taxableIncome: grossAnnualIncome,
      incomeTaxDue: 0.00,
      employeeContributions: {
        social: annualSocialInsuranceEmployee,
        saned: annualSanedEmployee,
        total: annualTotalEmployeeDeductions
      },
      employerContributions: {
        social: annualSocialInsuranceEmployer,
        saned: annualSanedEmployer,
        occupationalHazard: annualOccHazardEmployer,
        total: annualTotalEmployerCosts,
        totalCost: annualCostOfEmployee
      }
    }
  };
}
