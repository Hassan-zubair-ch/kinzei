import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Info, 
  HelpCircle, 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  FileText, 
  Percent, 
  Building2, 
  Briefcase,
  Layers,
  Clock,
  Calendar,
  DollarSign
} from 'lucide-react';
import { KSAFlag, USFlag, UKFlag, PKFlag, GermanyFlag, UAEFlag } from '../components/CountryFlags';
import { 
  SAUDI_PERIODS, 
  SAUDI_TAX_YEARS, 
  calculateSaudiTaxes, 
  formatSAR 
} from '../data/saudiTaxData';

export default function SaudiTaxCalculator({ onOpenSchedule }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Calculator Parameters (matching iCalculator SA)
  const [income, setIncome] = useState(80000.10);
  const [period, setPeriod] = useState('annual'); // 'annual' | 'monthly' | 'fourWeekly' | 'fortnightly' | 'weekly' | 'daily' | 'hourly'
  const [residency, setResidency] = useState('resident'); // 'resident' (Saudi National) | 'non-resident' (Expatriate)
  const [mode, setMode] = useState('simple'); // 'simple' | 'advanced'
  const [taxYear, setTaxYear] = useState('2026');

  // Advanced Mode Options
  const [housingAllowance, setHousingAllowance] = useState(0);
  const [transportAllowance, setTransportAllowance] = useState(0);
  const [otherAllowances, setOtherAllowances] = useState(0);
  const [overtimeHours, setOvertimeHours] = useState(0);
  const [overtimeRate, setOvertimeRate] = useState(1.5);
  const [hoursPerWeek, setHoursPerWeek] = useState(35);
  const [workingDaysPerYear, setWorkingDaysPerYear] = useState(253);

  // Quick Preset switcher helper matching all 7 periods
  const handleSelectPeriodCard = (periodId) => {
    setPeriod(periodId);
    const benchmarkMap = {
      annual: 80000.10,
      monthly: 6666.68,
      fourWeekly: 6153.85,
      fortnightly: 3076.93,
      weekly: 1538.46,
      daily: 316.21,
      hourly: 43.96
    };
    const benchmarkValues = Object.values(benchmarkMap);
    if (benchmarkValues.includes(income) || income === 80000.10 || income === 0) {
      setIncome(benchmarkMap[periodId] || 80000.10);
    }
    const el = document.getElementById('saudi-calculator-box');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Perform Exact Calculation
  const result = useMemo(() => {
    return calculateSaudiTaxes({
      income,
      period,
      residency,
      mode,
      taxYear,
      housingAllowance,
      transportAllowance,
      otherAllowances,
      overtimeHours,
      overtimeRate,
      hoursPerWeek,
      workingDaysPerYear
    });
  }, [
    income, period, residency, mode, taxYear,
    housingAllowance, transportAllowance, otherAllowances,
    overtimeHours, overtimeRate, hoursPerWeek, workingDaysPerYear
  ]);

  const activePeriodObj = SAUDI_PERIODS.find(p => p.id === period) || SAUDI_PERIODS[0];

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', color: '#0F172A', paddingBottom: '80px' }}>
      {/* Top Breadcrumb Navigation */}
      <div style={{ backgroundColor: '#0F172A', borderBottom: '1px solid rgba(212, 160, 23, 0.25)', padding: '12px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#94A3B8' }}>
            <Link to="/" style={{ color: '#D4A017', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
            <span>/</span>
            <Link to="/tax-calculator" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Global Calculators Hub</Link>
            <span>/</span>
            <span style={{ color: '#F1F5F9', fontWeight: 600 }}>Saudi Arabia (UKS) Salary & Tax Calculator</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <Link 
              to="/tax-calculator/pakistan" 
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.06)', 
                color: '#CBD5E1', 
                padding: '5px 11px', 
                borderRadius: '6px', 
                fontSize: '0.8rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px', 
                textDecoration: 'none' 
              }}
            >
              <PKFlag size={14} /> Pakistan
            </Link>
            <Link 
              to="/tax-calculator/usa" 
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.06)', 
                color: '#CBD5E1', 
                padding: '5px 11px', 
                borderRadius: '6px', 
                fontSize: '0.8rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px', 
                textDecoration: 'none' 
              }}
            >
              <USFlag size={14} /> USA
            </Link>
            <Link 
              to="/tax-calculator/uk" 
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.06)', 
                color: '#CBD5E1', 
                padding: '5px 11px', 
                borderRadius: '6px', 
                fontSize: '0.8rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px', 
                textDecoration: 'none' 
              }}
            >
              <UKFlag size={14} /> UK
            </Link>
            <Link 
              to="/tax-calculator/germany" 
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.06)', 
                color: '#CBD5E1', 
                padding: '5px 11px', 
                borderRadius: '6px', 
                fontSize: '0.8rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px', 
                textDecoration: 'none' 
              }}
            >
              <GermanyFlag size={14} /> Germany
            </Link>
            <span 
              style={{ 
                backgroundColor: 'rgba(212, 160, 23, 0.22)', 
                color: '#FFD700', 
                padding: '5px 11px', 
                borderRadius: '6px', 
                fontSize: '0.8rem', 
                fontWeight: 700, 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px',
                border: '1px solid rgba(255, 215, 0, 0.4)'
              }}
            >
              <KSAFlag size={14} /> Saudi Arabia (Active)
            </span>
            <Link 
              to="/tax-calculator/uae" 
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.06)', 
                color: '#CBD5E1', 
                padding: '5px 11px', 
                borderRadius: '6px', 
                fontSize: '0.8rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px', 
                textDecoration: 'none' 
              }}
            >
              <UAEFlag size={14} /> UAE
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <div style={{
        background: 'linear-gradient(135deg, #064E3B 0%, #065F46 45%, #0F172A 100%)',
        color: '#FFFFFF',
        padding: '42px 0 36px',
        borderBottom: '3px solid #10B981',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(16, 185, 129, 0.18)', border: '1px solid rgba(16, 185, 129, 0.35)', padding: '5px 14px', borderRadius: '30px', fontSize: '0.82rem', color: '#6EE7B7', fontWeight: 700, marginBottom: '14px' }}>
            <KSAFlag size={16} /> Kingdom of Saudi Arabia (KSA / UKS) • Official 2026/2025 Payroll Engine
          </div>
          <h1 style={{ fontSize: '2.35rem', fontWeight: 800, margin: '0 0 12px 0', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
            Saudi Arabia Salary and Tax Calculators
          </h1>
          <p style={{ fontSize: '1.02rem', color: '#E2E8F0', maxWidth: '920px', lineHeight: 1.65, margin: 0 }}>
            The Kinzei™ Saudi Arabia salary and tax calculator suite provides a reliable way to estimate your take home pay, payroll deductions (GOSI & SANED) and employer payroll liabilities using official statutory tables. Whether you are analysing an annual salary, comparing job offers or reviewing monthly earnings, these calculators help you understand how statutory contributions affect your income in Saudi Arabia.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '36px' }}>
        {/* Section 1: Choose the Appropriate Salary Calculator Cards (Matching Screenshot 1) */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{ marginBottom: '18px' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '4px', height: '24px', backgroundColor: '#007A3D', borderRadius: '2px', display: 'inline-block' }}></span>
              Saudi Arabia Salary and Tax Calculators Suite
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#64748B', margin: 0, lineHeight: 1.6 }}>
              Choose the appropriate salary calculator below based on how your earnings are expressed. These calculators apply the latest tax rules in Saudi Arabia and provide a full breakdown of tax deductions, payroll contributions and net take home pay using the same detailed calculation engine.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: '16px'
          }}>
            {SAUDI_PERIODS.map((p) => {
              const isSelected = period === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => handleSelectPeriodCard(p.id)}
                  style={{
                    backgroundColor: isSelected ? '#F0FDF4' : '#FFFFFF',
                    borderRadius: '12px',
                    border: isSelected ? '2px solid #007A3D' : '1.5px solid #E2E8F0',
                    padding: '16px 18px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    boxShadow: isSelected ? '0 8px 24px rgba(0, 122, 61, 0.15)' : '0 2px 6px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.2s ease',
                    position: 'relative'
                  }}
                >
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: isSelected ? '#007A3D' : '#F1F5F9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {isSelected ? (
                      <Check size={20} color="#FFFFFF" strokeWidth={3} />
                    ) : (
                      <div style={{
                        width: '28px',
                        height: '18px',
                        backgroundColor: '#007A3D',
                        borderRadius: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontSize: '0.65rem',
                        fontWeight: 900
                      }}>
                        SAR
                      </div>
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: isSelected ? '#064E3B' : '#1E293B' }}>
                      {p.label}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px' }}>
                      Divisor: {p.divisor === 1 ? 'Annual 1x' : `${p.divisor} periods / year`}
                    </div>
                  </div>
                  {isSelected && (
                    <span style={{
                      backgroundColor: '#007A3D',
                      color: '#FFFFFF',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: '10px'
                    }}>
                      Active
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Active Interactive Calculator Box (Matching Screenshot 2) */}
        <div id="saudi-calculator-box" style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          marginBottom: '36px'
        }}>
          {/* Top Bar matching screenshot dark green banner */}
          <div style={{
            backgroundColor: '#333D35',
            color: '#FFFFFF',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                backgroundColor: '#007A3D',
                borderRadius: '4px',
                padding: '3px 6px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <KSAFlag size={18} />
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '0.01em' }}>
                Saudi Arabia Tax Calculator {taxYear} ({activePeriodObj.shortLabel})
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Simple / Advanced Toggle */}
              <div style={{
                display: 'flex',
                backgroundColor: '#1E2420',
                borderRadius: '8px',
                padding: '3px'
              }}>
                <button
                  type="button"
                  onClick={() => setMode('simple')}
                  style={{
                    backgroundColor: mode === 'simple' ? '#007A3D' : 'transparent',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 16px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                >
                  Simple
                </button>
                <button
                  type="button"
                  onClick={() => setMode('advanced')}
                  style={{
                    backgroundColor: mode === 'advanced' ? '#007A3D' : 'transparent',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 16px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                >
                  Advanced
                </button>
              </div>

              {/* Resident / Non-Resident Toggle */}
              <div style={{
                display: 'flex',
                backgroundColor: '#1E2420',
                borderRadius: '8px',
                padding: '3px'
              }}>
                <button
                  type="button"
                  onClick={() => setResidency('resident')}
                  style={{
                    backgroundColor: residency === 'resident' ? '#007A3D' : 'transparent',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 16px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                >
                  Resident (Saudi)
                </button>
                <button
                  type="button"
                  onClick={() => setResidency('non-resident')}
                  style={{
                    backgroundColor: residency === 'non-resident' ? '#007A3D' : 'transparent',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 16px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                >
                  Non-Resident (Expat)
                </button>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div style={{ padding: '24px 28px' }}>
            <div 
              className="saudi-calc-inputs-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: mode === 'advanced' ? 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))' : '1fr 220px',
                gap: '20px',
                alignItems: 'end'
              }}
            >
              {/* Employment Income Input (matching Screenshot 2) */}
              <div>
                <label style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A', display: 'block', marginBottom: '8px' }}>
                  Employment Income ({activePeriodObj.shortLabel}):
                </label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value) || 0)}
                    min="0"
                    step="100"
                    style={{
                      width: '100%',
                      padding: '12px 85px 12px 16px',
                      borderRadius: '8px',
                      border: '2px solid #007A3D',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      boxShadow: '0 2px 8px rgba(0, 122, 61, 0.1)'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    right: '12px',
                    fontWeight: 800,
                    color: '#007A3D',
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span>ريال</span>
                    <span style={{ fontSize: '0.8rem', color: '#64748B' }}>SAR</span>
                  </div>
                </div>
              </div>

              {/* Tax Year Selection */}
              <div>
                <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '8px' }}>
                  Tax Year:
                </label>
                <select
                  value={taxYear}
                  onChange={(e) => setTaxYear(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  {SAUDI_TAX_YEARS.map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              {/* Advanced Mode Fields */}
              {mode === 'advanced' && (
                <>
                  <div>
                    <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '8px' }}>
                      Housing Allowance (Monthly):
                    </label>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                      <input
                        type="number"
                        value={housingAllowance || ''}
                        onChange={(e) => setHousingAllowance(Number(e.target.value) || 0)}
                        placeholder="0"
                        style={{
                          width: '100%',
                          padding: '10px 50px 10px 14px',
                          borderRadius: '8px',
                          border: '1.5px solid #CBD5E1',
                          fontWeight: 700
                        }}
                      />
                      <span style={{ position: 'absolute', right: '12px', color: '#64748B', fontWeight: 700 }}>ريال</span>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '8px' }}>
                      Transport Allowance (Monthly):
                    </label>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                      <input
                        type="number"
                        value={transportAllowance || ''}
                        onChange={(e) => setTransportAllowance(Number(e.target.value) || 0)}
                        placeholder="0"
                        style={{
                          width: '100%',
                          padding: '10px 50px 10px 14px',
                          borderRadius: '8px',
                          border: '1.5px solid #CBD5E1',
                          fontWeight: 700
                        }}
                      />
                      <span style={{ position: 'absolute', right: '12px', color: '#64748B', fontWeight: 700 }}>ريال</span>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '8px' }}>
                      Working Hours / Week:
                    </label>
                    <input
                      type="number"
                      value={hoursPerWeek}
                      onChange={(e) => setHoursPerWeek(Number(e.target.value) || 35)}
                      min="10"
                      max="60"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1.5px solid #CBD5E1',
                        fontWeight: 700
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '8px' }}>
                      Working Days / Year:
                    </label>
                    <input
                      type="number"
                      value={workingDaysPerYear}
                      onChange={(e) => setWorkingDaysPerYear(Number(e.target.value) || 253)}
                      min="100"
                      max="365"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1.5px solid #CBD5E1',
                        fontWeight: 700
                      }}
                    />
                  </div>
                </>
              )}
            </div>

            {/* Quick Benchmark Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748B' }}>Quick Benchmark Samples:</span>
              <button
                type="button"
                onClick={() => { setPeriod('annual'); setIncome(80000.10); }}
                style={{
                  backgroundColor: '#F1F5F9',
                  border: '1px solid #CBD5E1',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  color: '#1E293B'
                }}
              >
                80,000.10 ريال / year (Official Benchmark)
              </button>
              <button
                type="button"
                onClick={() => { setPeriod('monthly'); setIncome(6666.68); }}
                style={{
                  backgroundColor: '#F1F5F9',
                  border: '1px solid #CBD5E1',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  color: '#1E293B'
                }}
              >
                6,666.68 ريال / month
              </button>
              <button
                type="button"
                onClick={() => { setPeriod('monthly'); setIncome(15000); }}
                style={{
                  backgroundColor: '#F1F5F9',
                  border: '1px solid #CBD5E1',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  color: '#1E293B'
                }}
              >
                15,000 ريال / month (Senior Professional)
              </button>
              <button
                type="button"
                onClick={() => { setPeriod('monthly'); setIncome(30000); }}
                style={{
                  backgroundColor: '#F1F5F9',
                  border: '1px solid #CBD5E1',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  color: '#1E293B'
                }}
              >
                30,000 ريال / month (Executive)
              </button>
            </div>
          </div>

          {/* Section 3: Exact Table (Matching Screenshot 2 & 3) */}
          <div style={{ borderTop: '2px solid #E2E8F0' }}>
            <div style={{
              backgroundColor: '#333D35',
              color: '#FFFFFF',
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <KSAFlag size={18} />
              <span style={{ fontSize: '1.05rem', fontWeight: 800 }}>
                Saudi Arabia {formatSAR(result.grossAnnualIncome)} Income Tax Calculations for {taxYear}
              </span>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'right',
                fontSize: '0.88rem'
              }}>
                <thead>
                  <tr style={{ backgroundColor: '#CFE2D8', color: '#1B382B', borderBottom: '1px solid #A8CBB8' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 800, width: '24%' }}></th>
                    <th style={{ padding: '12px 14px', fontWeight: 800 }}>Yearly</th>
                    <th style={{ padding: '12px 14px', fontWeight: 800 }}>Monthly</th>
                    <th style={{ padding: '12px 14px', fontWeight: 800 }}>4 Weekly</th>
                    <th style={{ padding: '12px 14px', fontWeight: 800 }}>2 Weekly</th>
                    <th style={{ padding: '12px 14px', fontWeight: 800 }}>Weekly</th>
                    <th style={{ padding: '12px 14px', fontWeight: 800 }}>Daily</th>
                    <th style={{ padding: '12px 14px', fontWeight: 800 }}>Hourly</th>
                    <th style={{ padding: '12px 16px', fontWeight: 800 }}>%¹</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1: Income */}
                  <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '11px 16px', textAlign: 'left', fontWeight: 800, color: '#0F172A' }}>Income</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatSAR(result.breakdowns.income.values.yearly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatSAR(result.breakdowns.income.values.monthly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatSAR(result.breakdowns.income.values.fourWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatSAR(result.breakdowns.income.values.twoWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatSAR(result.breakdowns.income.values.weekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatSAR(result.breakdowns.income.values.daily, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatSAR(result.breakdowns.income.values.hourly, 2, false)}</td>
                    <td style={{ padding: '11px 16px', fontWeight: 800, color: '#334155' }}>{result.breakdowns.income.rateFormatted}</td>
                  </tr>

                  {/* Row 2: Social Insurance */}
                  <tr style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#FAFAFA' }}>
                    <td style={{ padding: '11px 16px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>Social Insurance</td>
                    <td style={{ padding: '11px 14px', color: '#B91C1C', fontWeight: 600 }}>{formatSAR(result.breakdowns.socialInsurance.values.yearly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', color: '#B91C1C', fontWeight: 600 }}>{formatSAR(result.breakdowns.socialInsurance.values.monthly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', color: '#B91C1C', fontWeight: 600 }}>{formatSAR(result.breakdowns.socialInsurance.values.fourWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', color: '#B91C1C', fontWeight: 600 }}>{formatSAR(result.breakdowns.socialInsurance.values.twoWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', color: '#B91C1C', fontWeight: 600 }}>{formatSAR(result.breakdowns.socialInsurance.values.weekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', color: '#B91C1C', fontWeight: 600 }}>{formatSAR(result.breakdowns.socialInsurance.values.daily, 2, false)}</td>
                    <td style={{ padding: '11px 14px', color: '#B91C1C', fontWeight: 600 }}>{formatSAR(result.breakdowns.socialInsurance.values.hourly, 2, false)}</td>
                    <td style={{ padding: '11px 16px', fontWeight: 700, color: '#B91C1C' }}>{result.breakdowns.socialInsurance.rateFormatted}</td>
                  </tr>

                  {/* Row 3: Unemployment Insurance (SANED) */}
                  <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '11px 16px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>Unemployment Insurance (SANED)</td>
                    <td style={{ padding: '11px 14px', color: '#B91C1C', fontWeight: 600 }}>{formatSAR(result.breakdowns.saned.values.yearly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', color: '#B91C1C', fontWeight: 600 }}>{formatSAR(result.breakdowns.saned.values.monthly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', color: '#B91C1C', fontWeight: 600 }}>{formatSAR(result.breakdowns.saned.values.fourWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', color: '#B91C1C', fontWeight: 600 }}>{formatSAR(result.breakdowns.saned.values.twoWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', color: '#B91C1C', fontWeight: 600 }}>{formatSAR(result.breakdowns.saned.values.weekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', color: '#B91C1C', fontWeight: 600 }}>{formatSAR(result.breakdowns.saned.values.daily, 2, false)}</td>
                    <td style={{ padding: '11px 14px', color: '#B91C1C', fontWeight: 600 }}>{formatSAR(result.breakdowns.saned.values.hourly, 2, false)}</td>
                    <td style={{ padding: '11px 16px', fontWeight: 700, color: '#B91C1C' }}>{result.breakdowns.saned.rateFormatted}</td>
                  </tr>

                  {/* Row 4: Taxable Income */}
                  <tr style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#FAFAFA' }}>
                    <td style={{ padding: '11px 16px', textAlign: 'left', fontWeight: 700, color: '#0F172A' }}>Taxable Income</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatSAR(result.breakdowns.taxableIncome.values.yearly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatSAR(result.breakdowns.taxableIncome.values.monthly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatSAR(result.breakdowns.taxableIncome.values.fourWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatSAR(result.breakdowns.taxableIncome.values.twoWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatSAR(result.breakdowns.taxableIncome.values.weekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatSAR(result.breakdowns.taxableIncome.values.daily, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatSAR(result.breakdowns.taxableIncome.values.hourly, 2, false)}</td>
                    <td style={{ padding: '11px 16px', fontWeight: 800 }}>{result.breakdowns.taxableIncome.rateFormatted}</td>
                  </tr>

                  {/* Row 5: Total Deductions */}
                  <tr style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#FFF1F2' }}>
                    <td style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 800, color: '#991B1B' }}>Total Deductions</td>
                    <td style={{ padding: '12px 14px', fontWeight: 800, color: '#991B1B' }}>{formatSAR(result.breakdowns.totalDeductions.values.yearly, 2, false)}</td>
                    <td style={{ padding: '12px 14px', fontWeight: 800, color: '#991B1B' }}>{formatSAR(result.breakdowns.totalDeductions.values.monthly, 2, false)}</td>
                    <td style={{ padding: '12px 14px', fontWeight: 800, color: '#991B1B' }}>{formatSAR(result.breakdowns.totalDeductions.values.fourWeekly, 2, false)}</td>
                    <td style={{ padding: '12px 14px', fontWeight: 800, color: '#991B1B' }}>{formatSAR(result.breakdowns.totalDeductions.values.twoWeekly, 2, false)}</td>
                    <td style={{ padding: '12px 14px', fontWeight: 800, color: '#991B1B' }}>{formatSAR(result.breakdowns.totalDeductions.values.weekly, 2, false)}</td>
                    <td style={{ padding: '12px 14px', fontWeight: 800, color: '#991B1B' }}>{formatSAR(result.breakdowns.totalDeductions.values.daily, 2, false)}</td>
                    <td style={{ padding: '12px 14px', fontWeight: 800, color: '#991B1B' }}>{formatSAR(result.breakdowns.totalDeductions.values.hourly, 2, false)}</td>
                    <td style={{ padding: '12px 16px', fontWeight: 900, color: '#991B1B' }}>{result.breakdowns.totalDeductions.rateFormatted}</td>
                  </tr>

                  {/* Row 6: Salary After Tax (Net Take Home) */}
                  <tr style={{ borderBottom: '2px solid #007A3D', backgroundColor: '#ECFDF5' }}>
                    <td style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 900, color: '#064E3B', fontSize: '0.96rem' }}>
                      Salary After Tax
                    </td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#064E3B', fontSize: '0.96rem' }}>{formatSAR(result.breakdowns.salaryAfterTax.values.yearly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#064E3B', fontSize: '0.96rem' }}>{formatSAR(result.breakdowns.salaryAfterTax.values.monthly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#064E3B', fontSize: '0.96rem' }}>{formatSAR(result.breakdowns.salaryAfterTax.values.fourWeekly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#064E3B', fontSize: '0.96rem' }}>{formatSAR(result.breakdowns.salaryAfterTax.values.twoWeekly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#064E3B', fontSize: '0.96rem' }}>{formatSAR(result.breakdowns.salaryAfterTax.values.weekly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#064E3B', fontSize: '0.96rem' }}>{formatSAR(result.breakdowns.salaryAfterTax.values.daily, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#064E3B', fontSize: '0.96rem' }}>{formatSAR(result.breakdowns.salaryAfterTax.values.hourly, 2, false)}</td>
                    <td style={{ padding: '14px 16px', fontWeight: 900, color: '#064E3B', fontSize: '0.96rem' }}>{result.breakdowns.salaryAfterTax.rateFormatted}</td>
                  </tr>

                  {/* Section: Employer Payroll Costs */}
                  <tr style={{ backgroundColor: '#E2E8F0', color: '#1E293B' }}>
                    <td colSpan={9} style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 800, fontSize: '0.86rem' }}>
                      Employer Payroll Costs
                    </td>
                  </tr>

                  {/* Row 7: Employer Social Insurance */}
                  <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '11px 16px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>Social Insurance</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerSocial.values.yearly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerSocial.values.monthly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerSocial.values.fourWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerSocial.values.twoWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerSocial.values.weekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerSocial.values.daily, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerSocial.values.hourly, 2, false)}</td>
                    <td style={{ padding: '11px 16px', fontWeight: 700 }}>{result.breakdowns.employerSocial.rateFormatted}</td>
                  </tr>

                  {/* Row 8: Employer SANED */}
                  <tr style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#FAFAFA' }}>
                    <td style={{ padding: '11px 16px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>Unemployment Insurance (SANED)</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerSaned.values.yearly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerSaned.values.monthly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerSaned.values.fourWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerSaned.values.twoWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerSaned.values.weekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerSaned.values.daily, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerSaned.values.hourly, 2, false)}</td>
                    <td style={{ padding: '11px 16px', fontWeight: 700 }}>{result.breakdowns.employerSaned.rateFormatted}</td>
                  </tr>

                  {/* Row 9: Occupational Hazard Insurance */}
                  <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '11px 16px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>Occupational Hazard Insurance</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerOccHazard.values.yearly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerOccHazard.values.monthly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerOccHazard.values.fourWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerOccHazard.values.twoWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerOccHazard.values.weekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerOccHazard.values.daily, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatSAR(result.breakdowns.employerOccHazard.values.hourly, 2, false)}</td>
                    <td style={{ padding: '11px 16px', fontWeight: 700 }}>{result.breakdowns.employerOccHazard.rateFormatted}</td>
                  </tr>

                  {/* Row 10: Cost of Employee */}
                  <tr style={{ backgroundColor: '#F1F5F9', borderTop: '2px solid #CBD5E1' }}>
                    <td style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 900, color: '#0F172A', fontSize: '0.94rem' }}>
                      Cost of Employee
                    </td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#0F172A', fontSize: '0.94rem' }}>{formatSAR(result.breakdowns.costOfEmployee.values.yearly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#0F172A', fontSize: '0.94rem' }}>{formatSAR(result.breakdowns.costOfEmployee.values.monthly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#0F172A', fontSize: '0.94rem' }}>{formatSAR(result.breakdowns.costOfEmployee.values.fourWeekly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#0F172A', fontSize: '0.94rem' }}>{formatSAR(result.breakdowns.costOfEmployee.values.twoWeekly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#0F172A', fontSize: '0.94rem' }}>{formatSAR(result.breakdowns.costOfEmployee.values.weekly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#0F172A', fontSize: '0.94rem' }}>{formatSAR(result.breakdowns.costOfEmployee.values.daily, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#0F172A', fontSize: '0.94rem' }}>{formatSAR(result.breakdowns.costOfEmployee.values.hourly, 2, false)}</td>
                    <td style={{ padding: '14px 16px', fontWeight: 900, color: '#0F172A', fontSize: '0.94rem' }}>{result.breakdowns.costOfEmployee.rateFormatted}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footnote matching Screenshot 3 */}
            <div style={{
              padding: '16px 20px',
              backgroundColor: '#F8FAFC',
              fontSize: '0.83rem',
              color: '#64748B',
              lineHeight: 1.6,
              borderTop: '1px solid #E2E8F0'
            }}>
              <p style={{ margin: '0 0 6px 0' }}>
                <strong style={{ color: '#334155' }}>Note:</strong> The {taxYear} Saudi Arabia Tax Calculator tool is provided for your use to estimate salary take home pay and employer payroll costs in accordance with General Organization for Social Insurance (GOSI) and SANED regulations. In Saudi Arabia, employment wage income is <strong>0% personal income tax</strong> exempt.
              </p>
              <p style={{ margin: 0 }}>
                If you are an expatriate living and working in Saudi Arabia, toggle <strong style={{ color: '#007A3D' }}>Non-Resident (Expat)</strong> above to reflect exemption from employee GOSI pension and SANED contributions.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Step-by-Step Calculation Breakdown Cards (Matching Screenshot 4) */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#007A3D', borderRadius: '2px', display: 'inline-block' }}></span>
            Detailed Step-by-Step Calculation Breakdown
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
            {/* Card 1: Taxable Income Calculation */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1.5px solid #E2E8F0',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{
                backgroundColor: '#333D35',
                color: '#FFFFFF',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 800,
                fontSize: '0.95rem'
              }}>
                <KSAFlag size={16} />
                <span>Saudi Arabia: Taxable Income Calculation {taxYear}</span>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', fontSize: '0.9rem' }}>
                  <span style={{ fontWeight: 800, color: '#0F172A' }}>{formatSAR(result.cardSteps.annualIncome)}</span>
                  <span style={{ color: '#64748B' }}>Annual Income in {taxYear}</span>
                </div>
                <div style={{ height: '1px', backgroundColor: '#CBD5E1', margin: '14px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.95rem', fontWeight: 800 }}>
                  <span style={{ color: '#007A3D' }}>= {formatSAR(result.cardSteps.taxableIncome)}</span>
                  <span style={{ color: '#0F172A' }}>Your Taxable Income in {taxYear}</span>
                </div>
              </div>
            </div>

            {/* Card 2: Resident / Expat Income Tax Calculation */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1.5px solid #E2E8F0',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{
                backgroundColor: '#333D35',
                color: '#FFFFFF',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 800,
                fontSize: '0.95rem'
              }}>
                <KSAFlag size={16} />
                <span>Saudi Arabia: {result.meta.isResident ? 'Resident' : 'Non-Resident'} Income Tax Calculation {taxYear}</span>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '0.9rem' }}>
                  <span style={{ color: '#64748B' }}>0.00 ريال and over</span>
                  <span style={{ fontWeight: 700, color: '#64748B' }}>0%</span>
                  <span style={{ fontWeight: 800, color: '#0F172A' }}>0.00 ريال</span>
                </div>
                <div style={{ height: '1px', backgroundColor: '#CBD5E1', margin: '14px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.95rem', fontWeight: 800 }}>
                  <span style={{ color: '#0F172A' }}>= Total Income Tax Due</span>
                  <span style={{ color: '#007A3D' }}>0.00 ريال</span>
                </div>
                <div style={{ marginTop: '10px', fontSize: '0.78rem', color: '#047857', backgroundColor: '#ECFDF5', padding: '6px 10px', borderRadius: '6px', border: '1px solid #A7F3D0' }}>
                  ✓ Under Saudi tax law, individual employment salaries are 100% exempt from personal income tax.
                </div>
              </div>
            </div>

            {/* Card 3: Employee Social Security Deductions */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1.5px solid #E2E8F0',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{
                backgroundColor: '#333D35',
                color: '#FFFFFF',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 800,
                fontSize: '0.95rem'
              }}>
                <KSAFlag size={16} />
                <span>Saudi Arabia: Employee Social Security & Deductions {taxYear}</span>
              </div>
              <div style={{ padding: '18px 20px' }}>
                {result.meta.isResident ? (
                  <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', fontSize: '0.88rem' }}>
                      <span style={{ fontWeight: 800, color: '#B91C1C' }}>{formatSAR(result.cardSteps.employeeContributions.social)}</span>
                      <span style={{ color: '#64748B' }}>Employee Social Insurance in {taxYear} (9%)</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', fontSize: '0.88rem' }}>
                      <span style={{ fontWeight: 800, color: '#B91C1C' }}>+ {formatSAR(result.cardSteps.employeeContributions.saned)}</span>
                      <span style={{ color: '#64748B' }}>Unemployment Insurance (SANED) in {taxYear} (0.75%)</span>
                    </div>
                    <div style={{ height: '1px', backgroundColor: '#CBD5E1', margin: '14px 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.92rem', fontWeight: 800 }}>
                      <span style={{ color: '#991B1B' }}>= {formatSAR(result.cardSteps.employeeContributions.total)}</span>
                      <span style={{ color: '#0F172A' }}>Total Employee Deductions (9.75%)</span>
                    </div>
                  </>
                ) : (
                  <div style={{ padding: '10px 0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.92rem', fontWeight: 800 }}>
                      <span style={{ color: '#007A3D' }}>= 0.00 ريال</span>
                      <span style={{ color: '#0F172A' }}>Expatriate Employee Deductions</span>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: '#64748B', margin: '8px 0 0' }}>
                      Expatriate employees are not enrolled in GOSI pension or SANED unemployment scheme. 0% is withheld from the paycheck.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Card 4: Employer Contributions & Cost of Employee */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1.5px solid #E2E8F0',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{
                backgroundColor: '#333D35',
                color: '#FFFFFF',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 800,
                fontSize: '0.95rem'
              }}>
                <KSAFlag size={16} />
                <span>Saudi Arabia: Employer Payroll Costs & Contributions {taxYear}</span>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '0.86rem' }}>
                  <span style={{ fontWeight: 700, color: '#1E293B' }}>{formatSAR(result.cardSteps.employerContributions.social)}</span>
                  <span style={{ color: '#64748B' }}>Employer Social Insurance ({result.meta.isResident ? '9%' : '0%'})</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '0.86rem' }}>
                  <span style={{ fontWeight: 700, color: '#1E293B' }}>+ {formatSAR(result.cardSteps.employerContributions.saned)}</span>
                  <span style={{ color: '#64748B' }}>Employer SANED ({result.meta.isResident ? '0.75%' : '0%'})</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '0.86rem' }}>
                  <span style={{ fontWeight: 700, color: '#1E293B' }}>+ {formatSAR(result.cardSteps.employerContributions.occupationalHazard)}</span>
                  <span style={{ color: '#64748B' }}>Occupational Hazard Insurance (2%)</span>
                </div>
                <div style={{ height: '1px', backgroundColor: '#CBD5E1', margin: '12px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.92rem', fontWeight: 800 }}>
                  <span style={{ color: '#0F172A' }}>= {formatSAR(result.cardSteps.employerContributions.totalCost)}</span>
                  <span style={{ color: '#065F46' }}>Total Cost of Employee ({result.meta.isResident ? '111.75%' : '102.00%'})</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Educational & Advisory Guide */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E2E8F0',
          padding: '36px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          marginBottom: '40px'
        }}>
          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', margin: '0 0 16px 0' }}>
            Understanding Saudi Arabia Payroll, GOSI & Tax Regulations
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
            marginTop: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#007A3D', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} /> Zero Personal Income Tax Regime
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                Saudi Arabia imposes <strong>0% personal income tax</strong> on salaries and wages earned by both Saudi citizens and expatriate workers. Withholding taxes and income taxes in the Kingdom apply only to foreign corporate entities and non-resident service contractors under Zakat, Tax and Customs Authority (ZATCA) provisions.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#007A3D', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Building2 size={18} /> GOSI Social Insurance & SANED
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                For Saudi nationals, retirement pension contributions are managed by the General Organization for Social Insurance (GOSI). The employee pays <strong>9.00%</strong> and the employer matches with <strong>9.00%</strong>. In addition, the SANED unemployment compensation scheme requires <strong>0.75%</strong> from both employee and employer.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#007A3D', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Briefcase size={18} /> Expatriate Employee Payroll Rules
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                Foreign expatriates employed in Saudi Arabia are exempt from GOSI pension and SANED contributions, receiving <strong>100% of their gross agreed pay</strong> without mandatory employee payroll withholdings. Employers are however required to pay <strong>2.00% Occupational Hazard Insurance</strong> on behalf of expat staff.
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div style={{
            marginTop: '32px',
            backgroundColor: '#F0FDF4',
            border: '1.5px solid #BBF7D0',
            borderRadius: '12px',
            padding: '24px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#064E3B', margin: '0 0 6px 0' }}>
                Setting Up Operations or Hiring in Saudi Arabia?
              </h4>
              <p style={{ fontSize: '0.92rem', color: '#166534', margin: 0, maxWidth: '650px', lineHeight: 1.55 }}>
                Kinzei Consultants provides end-to-end KSA market entry, MISA licensing, ZATCA tax & zakat filing, Wage Protection System (WPS) setup, and payroll compliance advisory.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenSchedule}
              style={{
                backgroundColor: '#007A3D',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                fontSize: '0.95rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(0, 122, 61, 0.25)',
                transition: 'all 0.2s ease'
              }}
            >
              <span>Book KSA Advisory Session</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .saudi-calc-inputs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
