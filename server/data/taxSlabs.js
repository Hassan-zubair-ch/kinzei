export function calculatePakistanSalaryTax({ monthlySalary = 0, taxYear = '2025-26', autoMedical = false, manualMedical = 0 }) {
  let grossMonthly = Number(monthlySalary) || 0;
  let medicalMonthly = 0;
  let basicMonthly = grossMonthly;

  if (autoMedical) {
    // Gross = Basic + Medical (10% of Basic) => Gross = 1.1 * Basic
    basicMonthly = grossMonthly / 1.1;
    medicalMonthly = grossMonthly - basicMonthly;
  } else if (manualMedical > 0) {
    medicalMonthly = Number(manualMedical);
    basicMonthly = Math.max(0, grossMonthly - medicalMonthly);
  }

  // Under FBR rules, Medical Allowance up to 10% of Basic Salary is tax exempt
  const exemptMedicalMonthly = Math.min(medicalMonthly, basicMonthly * 0.10);
  const taxableMonthly = Math.max(0, grossMonthly - exemptMedicalMonthly);
  const taxableAnnual = taxableMonthly * 12;

  let annualTax = 0;

  if (taxYear === '2025-26') {
    // FBR 2025-26 Salaried Slabs
    if (taxableAnnual <= 600000) {
      annualTax = 0;
    } else if (taxableAnnual <= 1200000) {
      annualTax = (taxableAnnual - 600000) * 0.05;
    } else if (taxableAnnual <= 2200000) {
      annualTax = 30000 + (taxableAnnual - 1200000) * 0.15;
    } else if (taxableAnnual <= 3200000) {
      annualTax = 180000 + (taxableAnnual - 2200000) * 0.25;
    } else if (taxableAnnual <= 4100000) {
      annualTax = 430000 + (taxableAnnual - 3200000) * 0.30;
    } else {
      annualTax = 700000 + (taxableAnnual - 4100000) * 0.35;
    }
  } else {
    // FBR 2024-25 Salaried Slabs
    if (taxableAnnual <= 600000) {
      annualTax = 0;
    } else if (taxableAnnual <= 1200000) {
      annualTax = (taxableAnnual - 600000) * 0.025;
    } else if (taxableAnnual <= 2400000) {
      annualTax = 15000 + (taxableAnnual - 1200000) * 0.125;
    } else if (taxableAnnual <= 3600000) {
      annualTax = 165000 + (taxableAnnual - 2400000) * 0.225;
    } else if (taxableAnnual <= 6000000) {
      annualTax = 435000 + (taxableAnnual - 3600000) * 0.275;
    } else {
      annualTax = 1095000 + (taxableAnnual - 6000000) * 0.35;
    }
  }

  const monthlyTax = annualTax / 12;
  const annualGross = grossMonthly * 12;
  const monthlyNet = grossMonthly - monthlyTax;
  const annualNet = annualGross - annualTax;

  return {
    country: 'Pakistan',
    currency: 'PKR',
    symbol: 'Rs',
    basicMonthly: Math.round(basicMonthly),
    medicalMonthly: Math.round(medicalMonthly),
    monthlyGross: Math.round(grossMonthly),
    monthlyTax: Math.round(monthlyTax),
    monthlyNet: Math.round(monthlyNet),
    annualGross: Math.round(annualGross),
    annualTax: Math.round(annualTax),
    annualNet: Math.round(annualNet),
    note: `Tax calculated as per selected FBR ${taxYear} salaried slabs.`
  };
}

export function calculateUSSalaryTax({ monthlySalary = 0, taxYear = '2025-26', filingStatus = 'single', deduction401k = 0 }) {
  const grossMonthly = Number(monthlySalary) || 0;
  const annualGross = grossMonthly * 12;
  const monthly401k = Number(deduction401k) || 0;
  const annual401k = monthly401k * 12;

  const stdDeduction = filingStatus === 'joint' ? 29200 : 14600;
  const taxableAnnual = Math.max(0, annualGross - stdDeduction - annual401k);

  let annualTax = 0;
  let rem = taxableAnnual;

  if (filingStatus === 'joint') {
    if (rem > 0) {
      const b1 = Math.min(rem, 23200);
      annualTax += b1 * 0.10;
      rem -= b1;
    }
    if (rem > 0) {
      const b2 = Math.min(rem, 71100);
      annualTax += b2 * 0.12;
      rem -= b2;
    }
    if (rem > 0) {
      const b3 = Math.min(rem, 106750);
      annualTax += b3 * 0.22;
      rem -= b3;
    }
    if (rem > 0) {
      annualTax += rem * 0.24;
    }
  } else {
    if (rem > 0) {
      const b1 = Math.min(rem, 11600);
      annualTax += b1 * 0.10;
      rem -= b1;
    }
    if (rem > 0) {
      const b2 = Math.min(rem, 35550);
      annualTax += b2 * 0.12;
      rem -= b2;
    }
    if (rem > 0) {
      const b3 = Math.min(rem, 53375);
      annualTax += b3 * 0.22;
      rem -= b3;
    }
    if (rem > 0) {
      annualTax += rem * 0.24;
    }
  }

  const monthlyTax = annualTax / 12;
  const monthlyNet = grossMonthly - monthlyTax - monthly401k;
  const annualNet = annualGross - annualTax - annual401k;

  return {
    country: 'United States',
    currency: 'USD',
    symbol: '$',
    stdDeduction,
    monthly401k: Math.round(monthly401k),
    monthlyGross: Math.round(grossMonthly),
    monthlyTax: Math.round(monthlyTax),
    monthlyNet: Math.round(monthlyNet),
    annualGross: Math.round(annualGross),
    annualTax: Math.round(annualTax),
    annualNet: Math.round(annualNet),
    note: `Tax calculated as per IRS federal tax brackets for ${filingStatus} filing.`
  };
}

export function calculateUKSalaryTax({ monthlySalary = 0, taxYear = '2025-26', pensionPercent = 5, studentLoan = 'none' }) {
  const grossMonthly = Number(monthlySalary) || 0;
  const annualGross = grossMonthly * 12;

  const monthlyPension = grossMonthly * (pensionPercent / 100);
  const annualPension = monthlyPension * 12;

  const personalAllowance = 12570;
  const taxableAnnual = Math.max(0, annualGross - personalAllowance - annualPension);

  let annualTax = 0;
  let rem = taxableAnnual;

  if (rem > 0) {
    const basicBand = Math.min(rem, 37700);
    annualTax += basicBand * 0.20;
    rem -= basicBand;
  }
  if (rem > 0) {
    const higherBand = Math.min(rem, 74870);
    annualTax += higherBand * 0.40;
    rem -= higherBand;
  }
  if (rem > 0) {
    annualTax += rem * 0.45;
  }

  let annualStudentLoan = 0;
  if (studentLoan === 'plan1' && annualGross > 24990) {
    annualStudentLoan = (annualGross - 24990) * 0.09;
  } else if (studentLoan === 'plan2' && annualGross > 27295) {
    annualStudentLoan = (annualGross - 27295) * 0.09;
  }

  const totalDeductionsAnnual = annualTax + annualPension + annualStudentLoan;
  const monthlyTax = totalDeductionsAnnual / 12;
  const monthlyNet = grossMonthly - monthlyTax;
  const annualNet = annualGross - totalDeductionsAnnual;

  return {
    country: 'United Kingdom',
    currency: 'GBP',
    symbol: '£',
    personalAllowance,
    monthlyPension: Math.round(monthlyPension),
    monthlyGross: Math.round(grossMonthly),
    monthlyTax: Math.round(monthlyTax),
    monthlyNet: Math.round(monthlyNet),
    annualGross: Math.round(annualGross),
    annualTax: Math.round(totalDeductionsAnnual),
    annualNet: Math.round(annualNet),
    note: `Tax calculated as per HMRC tax bands and personal allowance rules.`
  };
}

export function calculateUAETax({ monthlySalary = 0, entityType = 'salary' }) {
  const grossMonthly = Number(monthlySalary) || 0;
  const annualGross = grossMonthly * 12;

  let annualTax = 0;
  if (entityType === 'corporate') {
    // UAE Corporate tax: 0% up to AED 375,000, 9% above
    if (annualGross > 375000) {
      annualTax = (annualGross - 375000) * 0.09;
    }
  } else {
    // Individual salary in UAE is 0% tax
    annualTax = 0;
  }

  const monthlyTax = annualTax / 12;
  const monthlyNet = grossMonthly - monthlyTax;
  const annualNet = annualGross - annualTax;

  return {
    country: 'United Arab Emirates',
    currency: 'AED',
    symbol: 'AED',
    monthlyGross: Math.round(grossMonthly),
    monthlyTax: Math.round(monthlyTax),
    monthlyNet: Math.round(monthlyNet),
    annualGross: Math.round(annualGross),
    annualTax: Math.round(annualTax),
    annualNet: Math.round(annualNet),
    note: entityType === 'corporate'
      ? 'Calculated per UAE FTA Corporate Tax Law (0% up to AED 375,000, 9% above).'
      : 'Personal income tax in the UAE is currently 0%.'
  };
}
