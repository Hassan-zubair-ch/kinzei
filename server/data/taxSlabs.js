export function calculatePakistanSalaryTax({ monthlySalary = 0, taxYear = '2026-2027' }) {
  const grossMonthly = Number(monthlySalary) || 0;
  const annualGross = grossMonthly * 12;

  let annualTax = 0;
  let rem = annualGross;

  if (taxYear === '2026-2027' || taxYear === '2026-27') {
    if (rem > 600000 && rem <= 1200000) {
      annualTax = (rem - 600000) * 0.01;
    } else if (rem > 1200000 && rem <= 2200000) {
      annualTax = 6000 + (rem - 1200000) * 0.11;
    } else if (rem > 2200000 && rem <= 3200000) {
      annualTax = 116000 + (rem - 2200000) * 0.20;
    } else if (rem > 3200000 && rem <= 4100000) {
      annualTax = 316000 + (rem - 3200000) * 0.25;
    } else if (rem > 4100000 && rem <= 5600000) {
      annualTax = 541000 + (rem - 4100000) * 0.29;
    } else if (rem > 5600000 && rem <= 7000000) {
      annualTax = 976000 + (rem - 5600000) * 0.32;
    } else if (rem > 7000000) {
      annualTax = 1424000 + (rem - 7000000) * 0.35;
    }
  } else if (taxYear === '2025-2026' || taxYear === '2025-26') {
    if (rem > 600000 && rem <= 1200000) {
      annualTax = (rem - 600000) * 0.01;
    } else if (rem > 1200000 && rem <= 2200000) {
      annualTax = 6000 + (rem - 1200000) * 0.11;
    } else if (rem > 2200000 && rem <= 3200000) {
      annualTax = 116000 + (rem - 2200000) * 0.23;
    } else if (rem > 3200000 && rem <= 4100000) {
      annualTax = 346000 + (rem - 3200000) * 0.30;
    } else if (rem > 4100000) {
      annualTax = 616000 + (rem - 4100000) * 0.35;
    }
    if (annualGross > 10000000) {
      annualTax = annualTax * 1.09;
    }
  } else if (taxYear === '2024-2025' || taxYear === '2024-25') {
    if (rem > 600000 && rem <= 1200000) {
      annualTax = (rem - 600000) * 0.05;
    } else if (rem > 1200000 && rem <= 2200000) {
      annualTax = 30000 + (rem - 1200000) * 0.15;
    } else if (rem > 2200000 && rem <= 3200000) {
      annualTax = 180000 + (rem - 2200000) * 0.25;
    } else if (rem > 3200000 && rem <= 4100000) {
      annualTax = 430000 + (rem - 3200000) * 0.3;
    } else if (rem > 4100000) {
      annualTax = 700000 + (rem - 4100000) * 0.35;
    }
  } else if (taxYear === '2023-2024' || taxYear === '2023-24') {
    if (rem > 600000 && rem <= 1200000) {
      annualTax = (rem - 600000) * 0.025;
    } else if (rem > 1200000 && rem <= 2400000) {
      annualTax = 15000 + (rem - 1200000) * 0.125;
    } else if (rem > 2400000 && rem <= 3600000) {
      annualTax = 165000 + (rem - 2400000) * 0.225;
    } else if (rem > 3600000 && rem <= 6000000) {
      annualTax = 435000 + (rem - 3600000) * 0.275;
    } else if (rem > 6000000) {
      annualTax = 1095000 + (rem - 6000000) * 0.35;
    }
  }

  annualTax = Math.round(annualTax);
  const monthlyTax = Math.round(annualTax / 12);
  const monthlyNet = Math.max(0, grossMonthly - monthlyTax);
  const annualNet = Math.max(0, annualGross - annualTax);

  return {
    country: 'Pakistan',
    currency: 'PKR',
    symbol: 'Rs',
    monthlyGross: Math.round(grossMonthly),
    monthlyTax: monthlyTax,
    monthlyNet: monthlyNet,
    annualGross: Math.round(annualGross),
    annualTax: annualTax,
    annualNet: annualNet,
    note: `Tax calculated per official taxcalculator.pk logic for ${taxYear}.`
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
    if (annualGross > 375000) {
      annualTax = (annualGross - 375000) * 0.09;
    }
  } else {
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
