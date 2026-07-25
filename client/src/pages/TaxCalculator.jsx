import React, { useState, useEffect } from 'react';
import { Calculator, CheckCircle2, ShieldCheck, RefreshCw } from 'lucide-react';
import { PKFlag, USFlag, UKFlag, UAEFlag } from '../components/CountryFlags';
import { calculatePakistanSalaryTax, calculateUSSalaryTax, calculateUKSalaryTax, calculateUAETax } from '../../../server/data/taxSlabs.js';

export default function TaxCalculator({ onOpenSchedule }) {
  // State for Form Controls
  const [country, setCountry] = useState('pk');
  const [taxYear, setTaxYear] = useState('2025-26');
  const [monthlySalary, setMonthlySalary] = useState(200000);

  // Country-Specific Scenarios
  const [autoMedical, setAutoMedical] = useState(false);
  const [manualMedical, setManualMedical] = useState('');
  
  const [filingStatus, setFilingStatus] = useState('single');
  const [deduction401k, setDeduction401k] = useState(0);

  const [pensionPercent, setPensionPercent] = useState(5);
  const [studentLoan, setStudentLoan] = useState('none');

  const [entityType, setEntityType] = useState('salary');

  // Calculated Results
  const [taxResult, setTaxResult] = useState(null);

  // Calculate Tax instantly (Client side fallback + Server API sync)
  const computeLocalTax = () => {
    const salary = Number(monthlySalary) || 0;
    let res = null;

    if (country === 'pk') {
      res = calculatePakistanSalaryTax({
        monthlySalary: salary,
        taxYear,
        autoMedical,
        manualMedical: Number(manualMedical) || 0
      });
    } else if (country === 'us') {
      res = calculateUSSalaryTax({
        monthlySalary: salary,
        taxYear,
        filingStatus,
        deduction401k: Number(deduction401k) || 0
      });
    } else if (country === 'uk') {
      res = calculateUKSalaryTax({
        monthlySalary: salary,
        taxYear,
        pensionPercent: Number(pensionPercent) || 0,
        studentLoan
      });
    } else if (country === 'uae') {
      res = calculateUAETax({
        monthlySalary: salary,
        entityType
      });
    }

    setTaxResult(res);
  };

  useEffect(() => {
    computeLocalTax();
  }, [country, taxYear, monthlySalary, autoMedical, manualMedical, filingStatus, deduction401k, pensionPercent, studentLoan, entityType]);

  // Handle Country Change defaults
  const handleCountryChange = (e) => {
    const selected = e.target.value;
    setCountry(selected);
    if (selected === 'us') {
      setMonthlySalary(6500);
    } else if (selected === 'uk') {
      setMonthlySalary(3800);
    } else if (selected === 'uae') {
      setMonthlySalary(25000);
    } else {
      setMonthlySalary(200000);
    }
  };

  return (
    <div>
      {/* HEADER BANNER - UNIFIED STATIC HEADING ACROSS ALL COUNTRIES */}
      <section style={{
        background: 'linear-gradient(180deg, #181C26 0%, #090A0E 100%)',
        padding: '60px 0 40px 0',
        textAlign: 'center',
        borderBottom: '1px solid rgba(212, 175, 55, 0.15)'
      }}>
        <div className="container">
          <span className="badge-gold">Interactive Financial Tool</span>
          <h1 style={{ fontSize: '2.8rem', marginTop: '10px', marginBottom: '12px' }}>
            Tax <span className="gold-gradient-text">Calculator</span>
          </h1>
          <p style={{ color: '#9BA4B5', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>
            Calculate accurate income & corporate tax liabilities for Pakistan, US, UK, and UAE per official government tax regulations.
          </p>
        </div>
      </section>

      {/* CALCULATOR MAIN BOX (EXACT MATCH TO ATTACHED SCREENSHOTS) */}
      <section style={{ padding: '60px 0 90px 0', backgroundColor: '#090A0E' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          
          <div style={{
            backgroundColor: '#141822',
            borderRadius: '24px',
            padding: '40px',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
            position: 'relative'
          }}>
            
            {/* Inner Title inside Card */}
            <h2 style={{
              textAlign: 'center',
              fontSize: '1.8rem',
              color: '#FFFFFF',
              marginBottom: '32px',
              fontWeight: 800
            }}>
              Tax Calculator
            </h2>

            {/* 1. Country Selection Dropdown */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#D1D7E3', fontWeight: 600, marginBottom: '8px' }}>
                Select Country
              </label>
              <select
                value={country}
                onChange={handleCountryChange}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  backgroundColor: '#1C2230',
                  border: '1.5px solid rgba(212, 175, 55, 0.4)',
                  borderRadius: '10px',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  fontWeight: 700,
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="pk">🇵🇰 Pakistan</option>
                <option value="us">🇺🇸 United States</option>
                <option value="uk">🇬🇧 United Kingdom</option>
                <option value="uae">🇦🇪 United Arab Emirates</option>
              </select>
            </div>

            {/* 2. Select Financial Year Dropdown */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#D1D7E3', fontWeight: 600, marginBottom: '8px' }}>
                Select Financial Year
              </label>
              <select
                value={taxYear}
                onChange={(e) => setTaxYear(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  backgroundColor: '#1C2230',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '10px',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="2025-26">Tax Year 2025–26</option>
                <option value="2024-25">Tax Year 2024–25</option>
              </select>
            </div>

            {/* 3. Enter Monthly Gross Salary */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#D1D7E3', fontWeight: 600, marginBottom: '8px' }}>
                Enter Monthly Gross {country === 'uae' && entityType === 'corporate' ? 'Revenue / Income' : 'Salary'}
              </label>
              <input
                type="number"
                value={monthlySalary}
                onChange={(e) => setMonthlySalary(e.target.value)}
                placeholder="e.g. 200000"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  backgroundColor: '#1C2230',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '10px',
                  color: '#E5C158',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  outline: 'none'
                }}
              />
            </div>

            {/* 4. COUNTRY-SPECIFIC SCENARIO CONTROLS */}
            
            {/* PAKISTAN SCENARIO CONTROLS */}
            {country === 'pk' && (
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    id="autoMedical"
                    checked={autoMedical}
                    onChange={(e) => {
                      setAutoMedical(e.target.checked);
                      if (e.target.checked) setManualMedical('');
                    }}
                    style={{ width: '18px', height: '18px', accentColor: '#D4AF37', cursor: 'pointer' }}
                  />
                  <label htmlFor="autoMedical" style={{ color: '#D1D7E3', fontSize: '0.92rem', cursor: 'pointer' }}>
                    Auto calculate Medical Allowance @10% of Basic Salary
                  </label>
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#8A94A6', marginBottom: '6px' }}>
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
                      backgroundColor: autoMedical ? '#161922' : '#1C2230',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      color: autoMedical ? '#555' : '#FFFFFF',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                {/* Salary Breakup Card (Monthly) matching Image 3 & 4 */}
                {taxResult && (
                  <div style={{
                    backgroundColor: '#1A1E2B',
                    borderRadius: '12px',
                    padding: '20px 24px',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    marginTop: '16px'
                  }}>
                    <h4 style={{ fontSize: '1.1rem', color: '#4FB3F6', marginBottom: '10px' }}>
                      Salary Breakup (Monthly)
                    </h4>
                    <div style={{ fontSize: '0.95rem', color: '#D1D7E3' }}>
                      Basic Salary: <strong>{Number(taxResult.basicMonthly || 0).toLocaleString()}</strong>
                    </div>
                    <div style={{ fontSize: '0.95rem', color: '#2ECC71', marginTop: '4px' }}>
                      Medical Allowance: <strong>{Number(taxResult.medicalMonthly || 0).toLocaleString()}</strong>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* US SCENARIO CONTROLS */}
            {country === 'us' && (
              <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', color: '#8A94A6', marginBottom: '6px' }}>Filing Status</label>
                  <select
                    value={filingStatus}
                    onChange={(e) => setFilingStatus(e.target.value)}
                    style={{ width: '100%', padding: '12px', backgroundColor: '#1C2230', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#FFF' }}
                  >
                    <option value="single">Single Filer ($14,600 Standard Deduction)</option>
                    <option value="joint">Married Filing Jointly ($29,200 Standard Deduction)</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', color: '#8A94A6', marginBottom: '6px' }}>Monthly 401(k) / Pre-Tax Health Deduction ($)</label>
                  <input
                    type="number"
                    value={deduction401k}
                    onChange={(e) => setDeduction401k(e.target.value)}
                    style={{ width: '100%', padding: '12px', backgroundColor: '#1C2230', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#FFF' }}
                  />
                </div>
              </div>
            )}

            {/* UK SCENARIO CONTROLS */}
            {country === 'uk' && (
              <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', color: '#8A94A6', marginBottom: '6px' }}>Employee Pension Contribution (%)</label>
                  <input
                    type="number"
                    value={pensionPercent}
                    onChange={(e) => setPensionPercent(e.target.value)}
                    style={{ width: '100%', padding: '12px', backgroundColor: '#1C2230', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#FFF' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', color: '#8A94A6', marginBottom: '6px' }}>Student Loan Plan</label>
                  <select
                    value={studentLoan}
                    onChange={(e) => setStudentLoan(e.target.value)}
                    style={{ width: '100%', padding: '12px', backgroundColor: '#1C2230', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#FFF' }}
                  >
                    <option value="none">No Student Loan Repayment</option>
                    <option value="plan1">Plan 1 (£24,990 threshold @ 9%)</option>
                    <option value="plan2">Plan 2 (£27,295 threshold @ 9%)</option>
                  </select>
                </div>
              </div>
            )}

            {/* UAE SCENARIO CONTROLS */}
            {country === 'uae' && (
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', color: '#8A94A6', marginBottom: '6px' }}>Tax Regime Type</label>
                <select
                  value={entityType}
                  onChange={(e) => setEntityType(e.target.value)}
                  style={{ width: '100%', padding: '12px', backgroundColor: '#1C2230', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#FFF' }}
                >
                  <option value="salary">Individual Salary (0% Personal Income Tax)</option>
                  <option value="corporate">UAE Corporate Tax (0% up to AED 375,000, 9% above)</option>
                </select>
              </div>
            )}

            {/* 5. TWO SIDE-BY-SIDE RESULT CARDS: MONTHLY AND YEARLY */}
            {taxResult && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginTop: '30px'
              }} className="results-grid">

                {/* MONTHLY CARD */}
                <div style={{
                  backgroundColor: '#1A1E2B',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                }}>
                  <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>
                    Monthly
                  </h3>

                  <div style={{ fontSize: '1rem', color: '#D1D7E3', marginBottom: '8px' }}>
                    Gross Income: <strong>{Number(taxResult.monthlyGross || 0).toLocaleString()}</strong>
                  </div>

                  <div style={{ fontSize: '1rem', color: '#E74C3C', fontWeight: 700, marginBottom: '8px' }}>
                    Tax: <span>{Number(taxResult.monthlyTax || 0).toLocaleString()}</span>
                  </div>

                  <div style={{ fontSize: '1rem', color: '#2ECC71', fontWeight: 700 }}>
                    Net Income: <span>{Number(taxResult.monthlyNet || 0).toLocaleString()}</span>
                  </div>
                </div>

                {/* YEARLY CARD */}
                <div style={{
                  backgroundColor: '#1A1E2B',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                }}>
                  <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>
                    Yearly
                  </h3>

                  <div style={{ fontSize: '1rem', color: '#D1D7E3', marginBottom: '8px' }}>
                    Gross Income: <strong>{Number(taxResult.annualGross || 0).toLocaleString()}</strong>
                  </div>

                  <div style={{ fontSize: '1rem', color: '#E74C3C', fontWeight: 700, marginBottom: '8px' }}>
                    Tax: <span>{Number(taxResult.annualTax || 0).toLocaleString()}</span>
                  </div>

                  <div style={{ fontSize: '1rem', color: '#2ECC71', fontWeight: 700 }}>
                    Net Income: <span>{Number(taxResult.annualNet || 0).toLocaleString()}</span>
                  </div>
                </div>

              </div>
            )}

            {/* Bottom Footnote */}
            <div style={{
              marginTop: '28px',
              textAlign: 'center',
              fontSize: '0.82rem',
              color: '#8A94A6',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '16px'
            }}>
              {taxResult?.note || `Tax calculated as per selected ${country.toUpperCase()} tax slabs.`}
            </div>

            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <button onClick={onOpenSchedule} className="btn-primary" style={{ padding: '12px 28px', fontSize: '0.92rem' }}>
                <span>Book Tax Advisory Session With Kinzei Expert</span>
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
