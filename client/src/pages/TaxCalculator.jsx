import React, { useState, useEffect } from 'react';
import { Calculator, CheckCircle2, ShieldCheck, HelpCircle, FileText, ArrowRight } from 'lucide-react';
import { PKFlag } from '../components/CountryFlags';
import { calculatePakistanSalaryTax } from '../../../server/data/taxSlabs.js';

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
    const res = calculatePakistanSalaryTax({
      monthlySalary: salary,
      taxYear,
      autoMedical,
      manualMedical: Number(manualMedical) || 0
    });
    setTaxResult(res);
  };

  useEffect(() => {
    computeTax();
  }, [taxYear, monthlySalary, autoMedical, manualMedical]);

  // FBR Slabs Definition for detailed table display
  const slabs2026 = [
    { range: 'Up to Rs. 600,000', rate: '0%', formula: 'Nil' },
    { range: 'Rs. 600,001 - Rs. 1,200,000', rate: '5%', formula: '5% of amount exceeding Rs. 600,000' },
    { range: 'Rs. 1,200,001 - Rs. 2,200,000', rate: '15%', formula: 'Rs. 30,000 + 15% of amount exceeding Rs. 1,200,000' },
    { range: 'Rs. 2,200,001 - Rs. 3,200,000', rate: '25%', formula: 'Rs. 180,000 + 25% of amount exceeding Rs. 2,200,000' },
    { range: 'Rs. 3,200,001 - Rs. 4,100,000', rate: '30%', formula: 'Rs. 430,000 + 30% of amount exceeding Rs. 3,200,000' },
    { range: 'Above Rs. 4,100,000', rate: '35%', formula: 'Rs. 700,000 + 35% of amount exceeding Rs. 4,100,000' },
  ];

  const slabs2025 = [
    { range: 'Up to Rs. 600,000', rate: '0%', formula: 'Nil' },
    { range: 'Rs. 600,001 - Rs. 1,200,000', rate: '5%', formula: '5% of amount exceeding Rs. 600,000' },
    { range: 'Rs. 1,200,001 - Rs. 2,200,000', rate: '15%', formula: 'Rs. 30,000 + 15% of amount exceeding Rs. 1,200,000' },
    { range: 'Rs. 2,200,001 - Rs. 3,200,000', rate: '25%', formula: 'Rs. 180,000 + 25% of amount exceeding Rs. 2,200,000' },
    { range: 'Rs. 3,200,001 - Rs. 4,100,000', rate: '30%', formula: 'Rs. 430,000 + 30% of amount exceeding Rs. 3,200,000' },
    { range: 'Above Rs. 4,100,000', rate: '35%', formula: 'Rs. 700,000 + 35% of amount exceeding Rs. 4,100,000' },
  ];

  const slabs2024 = [
    { range: 'Up to Rs. 600,000', rate: '0%', formula: 'Nil' },
    { range: 'Rs. 600,001 - Rs. 1,200,000', rate: '2.5%', formula: '2.5% of amount exceeding Rs. 600,000' },
    { range: 'Rs. 1,200,001 - Rs. 2,400,000', rate: '12.5%', formula: 'Rs. 15,000 + 12.5% of amount exceeding Rs. 1,200,000' },
    { range: 'Rs. 2,400,001 - Rs. 3,600,000', rate: '22.5%', formula: 'Rs. 165,000 + 22.5% of amount exceeding Rs. 2,400,000' },
    { range: 'Rs. 3,600,001 - Rs. 6,000,000', rate: '27.5%', formula: 'Rs. 435,000 + 27.5% of amount exceeding Rs. 3,600,000' },
    { range: 'Above Rs. 6,000,000', rate: '35%', formula: 'Rs. 1,095,000 + 35% of amount exceeding Rs. 6,000,000' },
  ];

  const currentSlabs = taxYear === '2024-25' ? slabs2024 : (taxYear === '2025-26' ? slabs2025 : slabs2026);

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#111827' }}>
      
      {/* Top Banner Header */}
      <section style={{
        backgroundColor: '#F8F9FA',
        padding: '50px 0 35px 0',
        textAlign: 'center',
        borderBottom: '1px solid #E5E7EB'
      }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }} className="badge-gold">
            <PKFlag size={18} />
            <span>FBR Official Compliant Tool</span>
          </div>
          <h1 style={{ fontSize: '2.6rem', color: '#111827', marginTop: '8px', marginBottom: '10px', fontWeight: 800 }}>
            Pakistan <span style={{ color: '#9E7B3B' }}>Salary Tax Calculator</span>
          </h1>
          <p style={{ color: '#4B5563', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>
            Accurate monthly and annual income tax estimation for salaried individuals in Pakistan according to latest Federal Board of Revenue (FBR) tax rates.
          </p>
        </div>
      </section>

      {/* MAIN CALCULATOR CARD CONTAINER (EXACT MATCH TO ATTACHED DESIGN) */}
      <section style={{ padding: '50px 0 80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '36px',
            border: '1.5px solid rgba(158, 123, 59, 0.3)',
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
                <Calculator color="#9E7B3B" size={28} />
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
                  backgroundColor: '#F9FAFB',
                  border: '1.5px solid #D1D5DB',
                  borderRadius: '10px',
                  color: '#111827',
                  fontSize: '1rem',
                  fontWeight: 600,
                  outline: 'none',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#9E7B3B'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              >
                <option value="2026-27">Tax Year 2026–27</option>
                <option value="2025-26">Tax Year 2025–26</option>
                <option value="2024-25">Tax Year 2024–25</option>
              </select>
            </div>

            {/* 2. Enter Monthly Gross Salary */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.92rem', color: '#1F2937', fontWeight: 700, marginBottom: '8px' }}>
                Enter Monthly Gross Salary (PKR)
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="number"
                  value={monthlySalary}
                  onChange={(e) => setMonthlySalary(e.target.value)}
                  placeholder="PKR 200000"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    backgroundColor: '#F9FAFB',
                    border: '1.5px solid rgba(158, 123, 59, 0.4)',
                    borderRadius: '10px',
                    color: '#9E7B3B',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#9E7B3B'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(158, 123, 59, 0.4)'}
                />
              </div>
            </div>

            {/* 3. Checkbox & Manual Medical Input */}
            <div style={{ marginBottom: '24px', backgroundColor: '#F9FAFB', padding: '16px', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  id="autoMedical"
                  checked={autoMedical}
                  onChange={(e) => {
                    setAutoMedical(e.target.checked);
                    if (e.target.checked) setManualMedical('');
                  }}
                  style={{ width: '18px', height: '18px', accentColor: '#9E7B3B', cursor: 'pointer' }}
                />
                <label htmlFor="autoMedical" style={{ color: '#1F2937', fontSize: '0.94rem', fontWeight: 600, cursor: 'pointer' }}>
                  Auto calculate Medical Allowance @10% of Basic Salary
                </label>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#4B5563', marginBottom: '6px', fontWeight: 600 }}>
                  OR manually input Medical Allowance (Monthly)
                </label>
                <input
                  type="number"
                  disabled={autoMedical}
                  value={manualMedical}
                  onChange={(e) => setManualMedical(e.target.value)}
                  placeholder="e.g. 15000"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    backgroundColor: autoMedical ? '#E5E7EB' : '#FFFFFF',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    color: autoMedical ? '#6B7280' : '#111827',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              {/* Salary Breakup Sub-Card */}
              {taxResult && (
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '16px',
                  border: '1.5px solid rgba(158, 123, 59, 0.25)',
                  marginTop: '16px'
                }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#9E7B3B', marginBottom: '8px', fontWeight: 700 }}>
                    Salary Breakup (Monthly)
                  </h4>
                  <div style={{ fontSize: '0.95rem', color: '#374151' }}>
                    Basic Salary: <strong style={{ color: '#111827' }}>Rs. {Number(taxResult.basicMonthly || 0).toLocaleString()}</strong>
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#059669', marginTop: '4px' }}>
                    Medical Allowance: <strong style={{ color: '#059669' }}>Rs. {Number(taxResult.medicalMonthly || 0).toLocaleString()}</strong>
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
                  backgroundColor: '#F9FAFB',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1.5px solid rgba(158, 123, 59, 0.3)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
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
                  backgroundColor: '#F9FAFB',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1.5px solid rgba(158, 123, 59, 0.3)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
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
                <FileText color="#9E7B3B" size={22} />
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
                      // Check if user's annual taxable income falls into this slab
                      const annualTaxable = taxResult ? taxResult.annualGross : 0;
                      let isCurrentSlab = false;
                      if (idx === 0 && annualTaxable <= 600000) isCurrentSlab = true;
                      else if (idx === 1 && annualTaxable > 600000 && annualTaxable <= 1200000) isCurrentSlab = true;
                      else if (idx === 2 && annualTaxable > 1200000 && annualTaxable <= 2200000) isCurrentSlab = true;
                      else if (idx === 3 && annualTaxable > 2200000 && annualTaxable <= 3200000) isCurrentSlab = true;
                      else if (idx === 4 && annualTaxable > 3200000 && annualTaxable <= 4100000) isCurrentSlab = true;
                      else if (idx === 5 && annualTaxable > 4100000) isCurrentSlab = true;

                      return (
                        <tr key={idx} style={{
                          backgroundColor: isCurrentSlab ? '#FFFBEB' : (idx % 2 === 0 ? '#FFFFFF' : '#F9FAFB'),
                          borderBottom: '1px solid #E5E7EB',
                          fontWeight: isCurrentSlab ? 700 : 400,
                          color: isCurrentSlab ? '#9E7B3B' : '#374151'
                        }}>
                          <td style={{ padding: '12px 16px' }}>{idx + 1}</td>
                          <td style={{ padding: '12px 16px' }}>
                            {slab.range}
                            {isCurrentSlab && <span style={{ marginLeft: '8px', fontSize: '0.75rem', backgroundColor: '#9E7B3B', color: '#FFF', padding: '2px 8px', borderRadius: '10px' }}>Your Slab</span>}
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
