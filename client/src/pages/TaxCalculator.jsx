import React, { useState, useEffect } from 'react';
import { Calculator, FileText, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { calculatePakistanSalaryTax } from '../data/taxSlabs';
import SEO from '../components/SEO';

export default function TaxCalculator({ onOpenSchedule }) {
  // State for Pakistan Salary Tax Calculator
  const [taxYear, setTaxYear] = useState('2026-27');
  const [monthlySalary, setMonthlySalary] = useState(200000);
  const [autoMedical, setAutoMedical] = useState(false);
  const [manualMedical, setManualMedical] = useState('');

  // Calculated Results
  const [taxResult, setTaxResult] = useState(null);

  // Compute local Pakistan tax instantly
  const computeTax = () => {
    const salary = Number(monthlySalary) || 0;
    
    // Calculate basic and medical allowance if selected
    let medicalMonthlyVal = 0;
    let basicMonthlyVal = salary;

    if (autoMedical) {
      // Typically in Pakistan, basic salary is 60% of gross, and medical allowance is 10% of basic
      basicMonthlyVal = Math.round(salary * 0.60);
      medicalMonthlyVal = Math.round(basicMonthlyVal * 0.10);
    } else if (manualMedical) {
      medicalMonthlyVal = Number(manualMedical) || 0;
    }

    const annualGross = salary * 12;
    // Medical allowance up to 10% of basic salary is exempt under Clause (139) of Part-I of Second Schedule to the Income Tax Ordinance, 2001
    const exemptMedicalAnnual = medicalMonthlyVal * 12;
    const taxableAnnual = Math.max(0, annualGross - exemptMedicalAnnual);

    // Calculate tax based on slabs
    let annualTax = 0;
    let rem = taxableAnnual;

    if (taxYear === '2026-27' || taxYear === '2026-2027') {
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
    } else if (taxYear === '2025-26' || taxYear === '2025-2026') {
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
    } else {
      // 2024-25
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
    }

    annualTax = Math.round(annualTax);
    const monthlyTax = Math.round(annualTax / 12);
    const monthlyNet = Math.max(0, salary - monthlyTax);
    const annualNet = Math.max(0, annualGross - annualTax);

    setTaxResult({
      monthlyGross: salary,
      monthlyTax,
      monthlyNet,
      annualGross,
      annualTax,
      annualNet,
      taxableAnnual,
      basicMonthly: basicMonthlyVal,
      medicalMonthly: medicalMonthlyVal
    });
  };

  useEffect(() => {
    computeTax();
  }, [taxYear, monthlySalary, autoMedical, manualMedical]);

  // FBR Slabs Definition for detailed table display
  const slabs2026 = [
    { range: 'Up to Rs. 600,000', rate: '0%', formula: 'Nil' },
    { range: 'Rs. 600,001 - Rs. 1,200,000', rate: '1%', formula: '1% of amount exceeding Rs. 600,000' },
    { range: 'Rs. 1,200,001 - Rs. 2,200,000', rate: '11%', formula: 'Rs. 6,000 + 11% of amount exceeding Rs. 1,200,000' },
    { range: 'Rs. 2,200,001 - Rs. 3,200,000', rate: '20%', formula: 'Rs. 116,000 + 20% of amount exceeding Rs. 2,200,000' },
    { range: 'Rs. 3,200,001 - Rs. 4,100,000', rate: '25%', formula: 'Rs. 316,000 + 25% of amount exceeding Rs. 3,200,000' },
    { range: 'Rs. 4,100,001 - Rs. 5,600,000', rate: '29%', formula: 'Rs. 541,000 + 29% of amount exceeding Rs. 4,100,000' },
    { range: 'Rs. 5,600,001 - Rs. 7,000,000', rate: '32%', formula: 'Rs. 976,000 + 32% of amount exceeding Rs. 5,600,000' },
    { range: 'Above Rs. 7,000,000', rate: '35%', formula: 'Rs. 1,424,000 + 35% of amount exceeding Rs. 7,000,000' },
  ];

  const slabs2025 = [
    { range: 'Up to Rs. 600,000', rate: '0%', formula: 'Nil' },
    { range: 'Rs. 600,001 - Rs. 1,200,000', rate: '1%', formula: '1% of amount exceeding Rs. 600,000' },
    { range: 'Rs. 1,200,001 - Rs. 2,200,000', rate: '11%', formula: 'Rs. 6,000 + 11% of amount exceeding Rs. 1,200,000' },
    { range: 'Rs. 2,200,001 - Rs. 3,200,000', rate: '23%', formula: 'Rs. 116,000 + 23% of amount exceeding Rs. 2,200,000' },
    { range: 'Rs. 3,200,001 - Rs. 4,100,000', rate: '30%', formula: 'Rs. 346,000 + 30% of amount exceeding Rs. 3,200,000' },
    { range: 'Above Rs. 4,100,000', rate: '35%', formula: 'Rs. 616,000 + 35% of amount exceeding Rs. 4,100,000' },
  ];

  const slabs2024 = [
    { range: 'Up to Rs. 600,000', rate: '0%', formula: 'Nil' },
    { range: 'Rs. 600,001 - Rs. 1,200,000', rate: '5%', formula: '5% of amount exceeding Rs. 600,000' },
    { range: 'Rs. 1,200,001 - Rs. 2,200,000', rate: '15%', formula: 'Rs. 30,000 + 15% of amount exceeding Rs. 1,200,000' },
    { range: 'Rs. 2,200,001 - Rs. 3,200,000', rate: '25%', formula: 'Rs. 180,000 + 25% of amount exceeding Rs. 2,200,000' },
    { range: 'Rs. 3,200,001 - Rs. 4,100,000', rate: '30%', formula: 'Rs. 430,000 + 30% of amount exceeding Rs. 3,200,000' },
    { range: 'Above Rs. 4,100,000', rate: '35%', formula: 'Rs. 700,000 + 35% of amount exceeding Rs. 4,100,000' },
  ];

  const currentSlabs = (taxYear === '2026-27' || taxYear === '2026-2027') ? slabs2026 : ((taxYear === '2025-26' || taxYear === '2025-2026') ? slabs2025 : slabs2024);

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#111827' }}>
      <SEO 
        title="Pakistan Salary & Income Tax Calculator 2026-27 | FBR Tax Slabs"
        description="Calculate your exact monthly and annual Pakistan income tax for FY 2026-27 and FY 2025-26 under the latest FBR Finance Act. Free, instant salary tax computation with exemption rules."
        keywords="Pakistan tax calculator 2026-27, FBR salary tax calculator, Pakistan income tax slabs 2026, take home salary calculator Pakistan, FBR active taxpayer tax rates, Kinzei Consultants"
        canonical="/tax-calculator/pakistan"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Pakistan Salary & Income Tax Calculator 2026-27",
          "operatingSystem": "All",
          "applicationCategory": "FinanceApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "PKR"
          },
          "provider": {
            "@type": "AccountingService",
            "name": "Kinzei Consultants (Private) Limited",
            "url": "https://kinzeiconsultants.com"
          }
        }}
      />
      
      {/* MAIN CALCULATOR CARD CONTAINER */}
      <section style={{ padding: '50px 0 80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '36px',
            border: '1.5px solid rgba(212, 160, 23, 0.35)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.06)',
            position: 'relative'
          }}>
            
            {/* Card Main Title */}
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <h2 style={{
                fontSize: '1.8rem',
                color: '#111827',
                fontWeight: 800,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Calculator color="#D4A017" size={28} />
                <span>Pakistan Salary Tax Calculator</span>
              </h2>
            </div>

            {/* 1. Select Financial Year Dropdown */}
            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontSize: '0.92rem', color: '#1F2937', fontWeight: 700, marginBottom: '8px' }}>
                Select Financial Year
              </label>
              <select
                value={taxYear}
                onChange={(e) => setTaxYear(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid #D1D5DB',
                  borderRadius: '10px',
                  color: '#111827',
                  fontSize: '1rem',
                  fontWeight: 600,
                  outline: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onFocus={(e) => { e.target.style.borderColor = '#D4A017'; e.target.style.boxShadow = '0 0 0 3px rgba(212, 160, 23, 0.2)'; }}
                onBlur={(e) => { e.target.style.borderColor = '#D1D5DB'; e.target.style.boxShadow = 'none'; }}
              >
                <option value="2026-27">Tax Year 2026–27</option>
                <option value="2025-26">Tax Year 2025–26</option>
                <option value="2024-25">Tax Year 2024–25</option>
              </select>
            </div>

            {/* 2. Monthly Salary Input */}
            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontSize: '0.92rem', color: '#1F2937', fontWeight: 700, marginBottom: '8px' }}>
                Enter Monthly Gross Salary (PKR)
              </label>
              <input
                type="number"
                value={monthlySalary}
                onChange={(e) => setMonthlySalary(e.target.value)}
                placeholder="e.g. 200000"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid #D1D5DB',
                  borderRadius: '10px',
                  color: '#111827',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  outline: 'none',
                  transition: 'all 0.2s ease'
                }}
                onFocus={(e) => { e.target.style.borderColor = '#D4A017'; e.target.style.boxShadow = '0 0 0 3px rgba(212, 160, 23, 0.2)'; }}
                onBlur={(e) => { e.target.style.borderColor = '#D1D5DB'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            {/* 3. Medical Allowance Section */}
            <div style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '12px',
              padding: '18px 20px',
              border: '1px solid #E5E7EB',
              marginBottom: '28px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.92rem', color: '#1F2937', fontWeight: 600 }}>
                  <input
                    type="checkbox"
                    checked={autoMedical}
                    onChange={(e) => {
                      setAutoMedical(e.target.checked);
                      if (e.target.checked) setManualMedical('');
                    }}
                    style={{ width: '18px', height: '18px', accentColor: '#D4A017', cursor: 'pointer' }}
                  />
                  <span>Calculate Medical Allowance Exemption Automatically (10% of Basic)</span>
                </label>
              </div>

              {!autoMedical && (
                <div style={{ marginTop: '12px' }}>
                  <label style={{ display: 'block', fontSize: '0.84rem', color: '#4B5563', marginBottom: '6px' }}>
                    Or Enter Specific Monthly Medical Allowance (PKR):
                  </label>
                  <input
                    type="number"
                    value={manualMedical}
                    onChange={(e) => setManualMedical(e.target.value)}
                    placeholder="e.g. 15000"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #D1D5DB',
                      borderRadius: '8px',
                      color: '#111827',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>
              )}

              {taxResult && (autoMedical || manualMedical) && (
                <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #E5E7EB', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                  <div style={{ fontSize: '0.86rem', color: '#4B5563' }}>
                    Basic Salary: <strong style={{ color: '#111827' }}>Rs. {Number(taxResult.basicMonthly || 0).toLocaleString()}</strong>
                  </div>
                  <div style={{ fontSize: '0.86rem', color: '#059669' }}>
                    Medical Allowance: <strong>Rs. {Number(taxResult.medicalMonthly || 0).toLocaleString()}</strong>
                  </div>
                </div>
              )}
            </div>

            {/* 4. TWO SIDE-BY-SIDE RESULT CARDS: MONTHLY AND YEARLY */}
            {taxResult && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginTop: '28px'
              }} className="results-grid">

                {/* MONTHLY CARD */}
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1.5px solid rgba(212, 160, 23, 0.4)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.04)'
                }}>
                  <h3 style={{ fontSize: '1.35rem', color: '#111827', marginBottom: '14px', borderBottom: '2px solid #E5E7EB', paddingBottom: '8px', fontWeight: 800 }}>
                    Monthly Details
                  </h3>

                  <div style={{ fontSize: '0.95rem', color: '#4B5563', marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Gross Salary:</span>
                    <strong style={{ color: '#111827' }}>Rs. {Number(taxResult.monthlyGross || 0).toLocaleString()}</strong>
                  </div>

                  <div style={{ fontSize: '0.95rem', color: '#DC2626', fontWeight: 700, marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Monthly Tax:</span>
                    <span>Rs. {Number(taxResult.monthlyTax || 0).toLocaleString()}</span>
                  </div>

                  <div style={{ fontSize: '0.95rem', color: '#059669', fontWeight: 700, display: 'flex', justifyContent: 'space-between' }}>
                    <span>Net Take-Home:</span>
                    <span>Rs. {Number(taxResult.monthlyNet || 0).toLocaleString()}</span>
                  </div>
                </div>

                {/* YEARLY CARD */}
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1.5px solid rgba(212, 160, 23, 0.4)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.04)'
                }}>
                  <h3 style={{ fontSize: '1.35rem', color: '#111827', marginBottom: '14px', borderBottom: '2px solid #E5E7EB', paddingBottom: '8px', fontWeight: 800 }}>
                    Yearly Details
                  </h3>

                  <div style={{ fontSize: '0.95rem', color: '#4B5563', marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Gross Annual:</span>
                    <strong style={{ color: '#111827' }}>Rs. {Number(taxResult.annualGross || 0).toLocaleString()}</strong>
                  </div>

                  <div style={{ fontSize: '0.95rem', color: '#DC2626', fontWeight: 700, marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Yearly Tax:</span>
                    <span>Rs. {Number(taxResult.annualTax || 0).toLocaleString()}</span>
                  </div>

                  <div style={{ fontSize: '0.95rem', color: '#059669', fontWeight: 700, display: 'flex', justifyContent: 'space-between' }}>
                    <span>Net Annual Income:</span>
                    <span>Rs. {Number(taxResult.annualNet || 0).toLocaleString()}</span>
                  </div>
                </div>

              </div>
            )}

            {/* 5. PROPER TAX DETAILS & FBR SLABS TABLE BREAKDOWN */}
            <div style={{ marginTop: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <FileText color="#D4A017" size={22} />
                <h3 style={{ fontSize: '1.3rem', color: '#111827', fontWeight: 800 }}>
                  FBR Salaried Income Tax Slabs ({taxYear})
                </h3>
              </div>

              <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: '12px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#F3F4F6', color: '#111827', borderBottom: '2px solid #E5E7EB' }}>
                      <th style={{ padding: '12px 16px', fontWeight: 700 }}>#</th>
                      <th style={{ padding: '12px 16px', fontWeight: 700 }}>Taxable Income Slab (Annual)</th>
                      <th style={{ padding: '12px 16px', fontWeight: 700 }}>Tax Rate</th>
                      <th style={{ padding: '12px 16px', fontWeight: 700 }}>Calculation Formula</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentSlabs.map((slab, idx) => {
                      const annualTaxable = taxResult ? taxResult.taxableAnnual : 0;
                      let isCurrentSlab = false;

                      if (taxYear === '2026-27' || taxYear === '2026-2027') {
                        if (idx === 0 && annualTaxable <= 600000) isCurrentSlab = true;
                        else if (idx === 1 && annualTaxable > 600000 && annualTaxable <= 1200000) isCurrentSlab = true;
                        else if (idx === 2 && annualTaxable > 1200000 && annualTaxable <= 2200000) isCurrentSlab = true;
                        else if (idx === 3 && annualTaxable > 2200000 && annualTaxable <= 3200000) isCurrentSlab = true;
                        else if (idx === 4 && annualTaxable > 3200000 && annualTaxable <= 4100000) isCurrentSlab = true;
                        else if (idx === 5 && annualTaxable > 4100000 && annualTaxable <= 5600000) isCurrentSlab = true;
                        else if (idx === 6 && annualTaxable > 5600000 && annualTaxable <= 7000000) isCurrentSlab = true;
                        else if (idx === 7 && annualTaxable > 7000000) isCurrentSlab = true;
                      } else if (taxYear === '2025-26' || taxYear === '2025-2026') {
                        if (idx === 0 && annualTaxable <= 600000) isCurrentSlab = true;
                        else if (idx === 1 && annualTaxable > 600000 && annualTaxable <= 1200000) isCurrentSlab = true;
                        else if (idx === 2 && annualTaxable > 1200000 && annualTaxable <= 2200000) isCurrentSlab = true;
                        else if (idx === 3 && annualTaxable > 2200000 && annualTaxable <= 3200000) isCurrentSlab = true;
                        else if (idx === 4 && annualTaxable > 3200000 && annualTaxable <= 4100000) isCurrentSlab = true;
                        else if (idx === 5 && annualTaxable > 4100000) isCurrentSlab = true;
                      } else {
                        if (idx === 0 && annualTaxable <= 600000) isCurrentSlab = true;
                        else if (idx === 1 && annualTaxable > 600000 && annualTaxable <= 1200000) isCurrentSlab = true;
                        else if (idx === 2 && annualTaxable > 1200000 && annualTaxable <= 2200000) isCurrentSlab = true;
                        else if (idx === 3 && annualTaxable > 2200000 && annualTaxable <= 3200000) isCurrentSlab = true;
                        else if (idx === 4 && annualTaxable > 3200000 && annualTaxable <= 4100000) isCurrentSlab = true;
                        else if (idx === 5 && annualTaxable > 4100000) isCurrentSlab = true;
                      }

                      return (
                        <tr key={idx} style={{
                          backgroundColor: isCurrentSlab ? '#FFFBEB' : (idx % 2 === 0 ? '#FFFFFF' : '#F9FAFB'),
                          borderBottom: '1px solid #E5E7EB',
                          fontWeight: isCurrentSlab ? 700 : 400,
                          color: isCurrentSlab ? '#D4A017' : '#374151'
                        }}>
                          <td style={{ padding: '12px 16px' }}>{idx + 1}</td>
                          <td style={{ padding: '12px 16px' }}>
                            {slab.range}
                            {isCurrentSlab && <span style={{ marginLeft: '8px', fontSize: '0.75rem', backgroundColor: '#D4A017', color: '#FFF', padding: '2px 8px', borderRadius: '10px', fontWeight: 800 }}>Your Slab</span>}
                          </td>
                          <td style={{ padding: '12px 16px' }}>{slab.rate}</td>
                          <td style={{ padding: '12px 16px' }}>{slab.formula}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Footnote */}
            <div style={{
              marginTop: '28px',
              textAlign: 'center',
              fontSize: '0.84rem',
              color: '#6B7280',
              borderTop: '1px solid #E5E7EB',
              paddingTop: '16px'
            }}>
              Tax calculated according to official FBR Pakistan Tax Slabs for {taxYear}. Medical allowance exemption rules applied up to 10% of basic salary.
            </div>

            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <button onClick={onOpenSchedule} className="btn-primary" style={{ padding: '14px 32px', fontSize: '0.98rem' }}>
                <span>Book Tax Advisory Session With Kinzei Expert</span>
                <ArrowRight size={18} />
              </button>
            </div>

          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .results-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
