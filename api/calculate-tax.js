import { calculatePakistanSalaryTax, calculateUSSalaryTax, calculateUKSalaryTax, calculateUAETax } from '../server/data/taxSlabs.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { 
    country = 'pk', 
    monthlySalary = 0, 
    taxYear = '2025-26', 
    autoMedical = false, 
    manualMedical = 0,
    filingStatus = 'single',
    deduction401k = 0,
    pensionPercent = 5,
    studentLoan = 'none',
    entityType = 'salary'
  } = req.body || {};

  let result = null;

  if (country === 'pk') {
    result = calculatePakistanSalaryTax({ monthlySalary, taxYear, autoMedical, manualMedical });
  } else if (country === 'us') {
    result = calculateUSSalaryTax({ monthlySalary, taxYear, filingStatus, deduction401k });
  } else if (country === 'uk') {
    result = calculateUKSalaryTax({ monthlySalary, taxYear, pensionPercent, studentLoan });
  } else if (country === 'uae') {
    result = calculateUAETax({ monthlySalary, entityType });
  } else {
    result = calculatePakistanSalaryTax({ monthlySalary, taxYear, autoMedical, manualMedical });
  }

  return res.status(200).json({ success: true, result });
}
