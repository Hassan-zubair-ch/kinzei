import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { PKFlag } from '../components/CountryFlags';
import { calculatePakistanSalaryTax } from '../../../server/data/taxSlabs.js';

export default function TaxCalculator({ onOpenSchedule }) {
  // State for Pakistan Salary Tax Calculator (matching taxcalculator.pk)
  const [monthlySalary, setMonthlySalary] = useState(100000);
  const [taxYear, setTaxYear] = useState('2026-2027');
  const [taxResult, setTaxResult] = useState(null);

  // Compute tax using exact taxcalculator.pk logic
  const computeTax = () => {
    const salary = Number(monthlySalary) || 0;
    const res = calculatePakistanSalaryTax({
      monthlySalary: salary,
      taxYear
    });
    setTaxResult(res);
  };

  useEffect(() => {
    computeTax();
  }, [monthlySalary, taxYear]);

  // Tax Slabs Table Definitions
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
    { range: 'Above Rs. 4,100,000', rate: '35%', formula: 'Rs. 616,000 + 35% of amount exceeding Rs. 4,100,000 (+9% surcharge above 10M)' },
  ];

  const slabs2024 = [
    { range: 'Up to Rs. 600,000', rate: '0%', formula: 'Nil' },
    { range: 'Rs. 600,001 - Rs. 1,200,000', rate: '5%', formula: '5% of amount exceeding Rs. 600,000' },
    { range: 'Rs. 1,200,001 - Rs. 2,200,000', rate: '15%', formula: 'Rs. 30,000 + 15% of amount exceeding Rs. 1,200,000' },
    { range: 'Rs. 2,200,001 - Rs. 3,200,000', rate: '25%', formula: 'Rs. 180,000 + 25% of amount exceeding Rs. 2,200,000' },
    { range: 'Rs. 3,200,001 - Rs. 4,100,000', rate: '30%', formula: 'Rs. 430,000 + 30% of amount exceeding Rs. 3,200,000' },
    { range: 'Above Rs. 4,100,000', rate: '35%', formula: 'Rs. 700,000 + 35% of amount exceeding Rs. 4,100,000' },
  ];

  const slabs2023 = [
    { range: 'Up to Rs. 600,000', rate: '0%', formula: 'Nil' },
    { range: 'Rs. 600,001 - Rs. 1,200,000', rate: '2.5%', formula: '2.5% of amount exceeding Rs. 600,000' },
    { range: 'Rs. 1,200,001 - Rs. 2,400,000', rate: '12.5%', formula: 'Rs. 15,000 + 12.5% of amount exceeding Rs. 1,200,000' },
    { range: 'Rs. 2,400,001 - Rs. 3,600,000', rate: '22.5%', formula: 'Rs. 165,000 + 22.5% of amount exceeding Rs. 2,400,000' },
    { range: 'Rs. 3,600,001 - Rs. 6,000,000', rate: '27.5%', formula: 'Rs. 435,000 + 27.5% of amount exceeding Rs. 3,600,000' },
    { range: 'Above Rs. 6,000,000', rate: '35%', formula: 'Rs. 1,095,000 + 35% of amount exceeding Rs. 6,000,000' },
  ];

  const currentSlabs = taxYear === '2023-2024' ? slabs2023 : (taxYear === '2024-2025' ? slabs2024 : (taxYear === '2025-2026' ? slabs2025 : slabs2026));

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#111827', padding: '40px 0 80px 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        {/* Main Card Container */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          padding: '36px',
          border: '1.5px solid rgba(158, 123, 59, 0.35)',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.06)'
        }}>

          {/* Title */}
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
              <span>Tax Calculator Pakistan</span>
            </h2>
          </div>

          {/* 1. Monthly Salary Input */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.92rem', color: '#1F2937', fontWeight: 700, marginBottom: '8px' }}>
              Your Monthly Salary (PKR)
            </label>
            <input
              type="number"
              value={monthlySalary}
              onChange={(e) => setMonthlySalary(e.target.value)}
              placeholder="e.g. 100000"
              style={{
                width: '100%',
                padding: '14px 16px',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #D1D5DB',
                borderRadius: '10px',
                color: '#111827',
                fontSize: '1.2rem',
                fontWeight: 800,
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => { e.target.style.borderColor = '#D4A017'; e.target.style.boxShadow = '0 0 0 3px rgba(212, 160, 23, 0.2)'; }}
              onBlur={(e) => { e.target.style.borderColor = '#D1D5DB'; e.target.style.boxShadow = 'none'; }}
            />
          </div>

          {/* 2. Choose Year Dropdown */}
          <div style={{ marginBottom: '28px' }}>
            <label style={{ display: 'block', fontSize: '0.92rem', color: '#1F2937', fontWeight: 700, marginBottom: '8px' }}>
              Choose Year
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
                fontWeight: 700,
                outline: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => { e.target.style.borderColor = '#D4A017'; e.target.style.boxShadow = '0 0 0 3px rgba(212, 160, 23, 0.2)'; }}
              onBlur={(e) => { e.target.style.borderColor = '#D1D5DB'; e.target.style.boxShadow = 'none'; }}
            >
              <option value="2026-2027">2026 to 2027</option>
              <option value="2025-2026">2025 to 2026</option>
              <option value="2024-2025">2024 to 2025</option>
              <option value="2023-2024">2023 to 2024</option>
            </select>
          </div>

          {/* 3. Output List Rows (Exact Match to taxcalculator.pk) */}
          {taxResult && (
            <div style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px',
              border: '1.5px solid #E5E7EB',
              marginBottom: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #E5E7EB', color: '#374151', fontSize: '0.96rem', fontWeight: 600 }}>
                <span>Monthly Tax</span>
                <span style={{ color: '#DC2626', fontWeight: 800 }}>{taxResult.monthlyTax.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #E5E7EB', color: '#374151', fontSize: '0.96rem', fontWeight: 600 }}>
                <span>Monthly Income After Tax</span>
                <span style={{ color: '#059669', fontWeight: 800 }}>{taxResult.monthlyNet.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #E5E7EB', color: '#374151', fontSize: '0.96rem', fontWeight: 600 }}>
                <span>Yearly Tax</span>
                <span style={{ color: '#DC2626', fontWeight: 800 }}>{taxResult.annualTax.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#111827', fontSize: '1.05rem', fontWeight: 800 }}>
                <span>Yearly Income After Tax</span>
                <span style={{ color: '#D4A017' }}>{taxResult.annualNet.toLocaleString()}</span>
              </div>

            </div>
          )}

          {/* 4. Detailed Tax Slabs Table */}
          <div style={{ marginTop: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <FileText color="#D4A017" size={20} />
              <h3 style={{ fontSize: '1.2rem', color: '#111827', fontWeight: 800 }}>
                Income Tax Slabs ({taxYear})
              </h3>
            </div>

            <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: '12px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: '#F3F4F6', color: '#111827', borderBottom: '2px solid #E5E7EB' }}>
                    <th style={{ padding: '10px 14px', fontWeight: 700 }}>#</th>
                    <th style={{ padding: '10px 14px', fontWeight: 700 }}>Annual Taxable Income Slab</th>
                    <th style={{ padding: '10px 14px', fontWeight: 700 }}>Rate</th>
                    <th style={{ padding: '10px 14px', fontWeight: 700 }}>Tax Formula</th>
                  </tr>
                </thead>
                <tbody>
                  {currentSlabs.map((slab, idx) => {
                    const annual = taxResult ? taxResult.annualGross : 0;
                    let isCurrentSlab = false;

                    if (taxYear === '2026-2027') {
                      if (idx === 0 && annual <= 600000) isCurrentSlab = true;
                      else if (idx === 1 && annual > 600000 && annual <= 1200000) isCurrentSlab = true;
                      else if (idx === 2 && annual > 1200000 && annual <= 2200000) isCurrentSlab = true;
                      else if (idx === 3 && annual > 2200000 && annual <= 3200000) isCurrentSlab = true;
                      else if (idx === 4 && annual > 3200000 && annual <= 4100000) isCurrentSlab = true;
                      else if (idx === 5 && annual > 4100000 && annual <= 5600000) isCurrentSlab = true;
                      else if (idx === 6 && annual > 5600000 && annual <= 7000000) isCurrentSlab = true;
                      else if (idx === 7 && annual > 7000000) isCurrentSlab = true;
                    } else if (taxYear === '2025-2026') {
                      if (idx === 0 && annual <= 600000) isCurrentSlab = true;
                      else if (idx === 1 && annual > 600000 && annual <= 1200000) isCurrentSlab = true;
                      else if (idx === 2 && annual > 1200000 && annual <= 2200000) isCurrentSlab = true;
                      else if (idx === 3 && annual > 2200000 && annual <= 3200000) isCurrentSlab = true;
                      else if (idx === 4 && annual > 3200000 && annual <= 4100000) isCurrentSlab = true;
                      else if (idx === 5 && annual > 4100000) isCurrentSlab = true;
                    } else if (taxYear === '2024-2025') {
                      if (idx === 0 && annual <= 600000) isCurrentSlab = true;
                      else if (idx === 1 && annual > 600000 && annual <= 1200000) isCurrentSlab = true;
                      else if (idx === 2 && annual > 1200000 && annual <= 2200000) isCurrentSlab = true;
                      else if (idx === 3 && annual > 2200000 && annual <= 3200000) isCurrentSlab = true;
                      else if (idx === 4 && annual > 3200000 && annual <= 4100000) isCurrentSlab = true;
                      else if (idx === 5 && annual > 4100000) isCurrentSlab = true;
                    } else {
                      if (idx === 0 && annual <= 600000) isCurrentSlab = true;
                      else if (idx === 1 && annual > 600000 && annual <= 1200000) isCurrentSlab = true;
                      else if (idx === 2 && annual > 1200000 && annual <= 2400000) isCurrentSlab = true;
                      else if (idx === 3 && annual > 2400000 && annual <= 3600000) isCurrentSlab = true;
                      else if (idx === 4 && annual > 3600000 && annual <= 6000000) isCurrentSlab = true;
                      else if (idx === 5 && annual > 6000000) isCurrentSlab = true;
                    }

                    return (
                      <tr key={idx} style={{
                        backgroundColor: isCurrentSlab ? '#FFFBEB' : (idx % 2 === 0 ? '#FFFFFF' : '#F9FAFB'),
                        borderBottom: '1px solid #E5E7EB',
                        fontWeight: isCurrentSlab ? 700 : 400,
                        color: isCurrentSlab ? '#D4A017' : '#374151'
                      }}>
                        <td style={{ padding: '10px 14px' }}>{idx + 1}</td>
                        <td style={{ padding: '10px 14px' }}>
                          {slab.range}
                          {isCurrentSlab && <span style={{ marginLeft: '8px', fontSize: '0.72rem', backgroundColor: '#D4A017', color: '#FFF', padding: '2px 8px', borderRadius: '10px', fontWeight: 800 }}>Your Slab</span>}
                        </td>
                        <td style={{ padding: '10px 14px' }}>{slab.rate}</td>
                        <td style={{ padding: '10px 14px' }}>{slab.formula}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ marginTop: '28px', textAlign: 'center' }}>
            <button onClick={onOpenSchedule} className="btn-primary" style={{ padding: '12px 28px', fontSize: '0.95rem' }}>
              <span>Book Tax Advisory Session With Kinzei Expert</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
