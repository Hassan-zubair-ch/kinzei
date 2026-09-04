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
import { UAEFlag, KSAFlag, USFlag, UKFlag, PKFlag, GermanyFlag } from '../components/CountryFlags';
import { 
  UAE_PERIODS, 
  UAE_TAX_YEARS, 
  calculateUAETaxes, 
  formatAED 
} from '../data/uaeTaxData';

export default function UAETaxCalculator({ onOpenSchedule }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Calculator Parameters (matching iCalculator AE)
  const [income, setIncome] = useState(80000);
  const [period, setPeriod] = useState('annual'); // 'annual' | 'monthly' | 'fourWeekly' | 'fortnightly' | 'weekly' | 'daily' | 'hourly'
  const [residency, setResidency] = useState('resident'); // 'resident' (UAE National) | 'non-resident' (Expatriate)
  const [mode, setMode] = useState('simple'); // 'simple' | 'advanced'
  const [taxYear, setTaxYear] = useState('2026');
  const [takeHomeMode, setTakeHomeMode] = useState('benchmark'); // 'benchmark' (333.80%) | 'standard' (100%)

  // Advanced Mode Options
  const [housingAllowance, setHousingAllowance] = useState(0);
  const [transportAllowance, setTransportAllowance] = useState(0);
  const [otherAllowances, setOtherAllowances] = useState(0);
  const [overtimeHours, setOvertimeHours] = useState(0);
  const [overtimeRate, setOvertimeRate] = useState(1.5);
  const [hoursPerWeek, setHoursPerWeek] = useState(35);
  const [workingDaysPerYear, setWorkingDaysPerYear] = useState(253);

  const handleSelectPeriodCard = (periodId) => {
    setPeriod(periodId);
    const benchmarkMap = {
      annual: 80000,
      monthly: 6666.67,
      fourWeekly: 6153.85,
      fortnightly: 3076.92,
      weekly: 1538.46,
      daily: 316.21,
      hourly: 43.96
    };
    const benchmarkValues = Object.values(benchmarkMap);
    if (benchmarkValues.includes(income) || income === 80000 || income === 0) {
      setIncome(benchmarkMap[periodId] || 80000);
    }
    const el = document.getElementById('uae-calculator-box');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const result = useMemo(() => {
    return calculateUAETaxes({
      income,
      period,
      residency,
      mode,
      taxYear,
      takeHomeMode,
      housingAllowance,
      transportAllowance,
      otherAllowances,
      overtimeHours,
      overtimeRate,
      hoursPerWeek,
      workingDaysPerYear
    });
  }, [
    income, period, residency, mode, taxYear, takeHomeMode,
    housingAllowance, transportAllowance, otherAllowances,
    overtimeHours, overtimeRate, hoursPerWeek, workingDaysPerYear
  ]);

  const activePeriodObj = UAE_PERIODS.find(p => p.id === period) || UAE_PERIODS[0];

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
            <span style={{ color: '#F1F5F9', fontWeight: 600 }}>United Arab Emirates (UAE) Salary & Tax Calculator</span>
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
            <Link 
              to="/tax-calculator/saudi-arabia" 
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
              <KSAFlag size={14} /> Saudi Arabia (UKS)
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
              <UAEFlag size={14} /> UAE (Active)
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <div style={{
        background: 'linear-gradient(135deg, #047857 0%, #065F46 45%, #0F172A 100%)',
        color: '#FFFFFF',
        padding: '42px 0 36px',
        borderBottom: '3px solid #10B981',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(16, 185, 129, 0.18)', border: '1px solid rgba(16, 185, 129, 0.35)', padding: '5px 14px', borderRadius: '30px', fontSize: '0.82rem', color: '#6EE7B7', fontWeight: 700, marginBottom: '14px' }}>
            <UAEFlag size={16} /> United Arab Emirates (UAE) • Official 2026/2025 Payroll Engine
          </div>
          <h1 style={{ fontSize: '2.35rem', fontWeight: 800, margin: '0 0 12px 0', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
            United Arab Emirates Salary and Tax Calculators
          </h1>
          <p style={{ fontSize: '1.02rem', color: '#E2E8F0', maxWidth: '920px', lineHeight: 1.65, margin: 0 }}>
            The Kinzei™ United Arab Emirates salary and tax calculators provide a practical way to estimate income tax deductions and net earnings using the most recent tax regulations. These calculators support multiple pay periods so you can calculate annual salary, monthly income, weekly pay or hourly wages with the same level of detailed tax calculation.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '36px' }}>
        {/* Section 1: Choose a Salary Calculator Below (Matching Screenshot 1) */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{ marginBottom: '18px' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '4px', height: '24px', backgroundColor: '#007A3D', borderRadius: '2px', display: 'inline-block' }}></span>
              United Arab Emirates Salary and Tax Calculators
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#64748B', margin: 0, lineHeight: 1.6 }}>
              Choose a salary calculator below to begin estimating your income tax and take home pay in United Arab Emirates. The calculators are organised by payroll period so you can enter salary information in the format most relevant to you. Regardless of the entry format, each calculator applies the latest United Arab Emirates tax tables and produces a complete breakdown of tax and payroll deductions.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px'
          }}>
            {UAE_PERIODS.map((p) => {
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
                        AED
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
        <div id="uae-calculator-box" style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          marginBottom: '36px'
        }}>
          {/* Top Bar matching screenshot dark banner */}
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
                <UAEFlag size={18} />
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '0.01em' }}>
                United Arab Emirates Tax Calculator {taxYear} ({activePeriodObj.shortLabel})
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
                  Resident
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
                  Non-Resident
                </button>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div style={{ padding: '24px 28px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: mode === 'advanced' ? 'repeat(auto-fit, minmax(260px, 1fr))' : '1fr 200px 220px',
              gap: '20px',
              alignItems: 'end'
            }}>
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
                    <span>د.إ</span>
                    <span style={{ fontSize: '0.8rem', color: '#64748B' }}>AED</span>
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
                  {UAE_TAX_YEARS.map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              {/* Take Home Mode Toggle (Benchmark 333.80% vs 100% Tax-Free) */}
              <div>
                <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '8px' }}>
                  Calculation Model:
                </label>
                <select
                  value={takeHomeMode}
                  onChange={(e) => setTakeHomeMode(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1.5px solid #007A3D',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    color: '#064E3B',
                    backgroundColor: '#F0FDF4'
                  }}
                >
                  <option value="benchmark">iCalculator Benchmark (333.80%)</option>
                  <option value="standard">Standard Tax-Free (100.00% Net)</option>
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
                      <span style={{ position: 'absolute', right: '12px', color: '#64748B', fontWeight: 700 }}>د.إ</span>
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
                      <span style={{ position: 'absolute', right: '12px', color: '#64748B', fontWeight: 700 }}>د.إ</span>
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
                onClick={() => { setPeriod('annual'); setIncome(80000); }}
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
                80,000.00 د.إ / year (Official Benchmark)
              </button>
              <button
                type="button"
                onClick={() => { setPeriod('monthly'); setIncome(6666.67); }}
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
                6,666.67 د.إ / month
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
                15,000 د.إ / month (Professional)
              </button>
              <button
                type="button"
                onClick={() => { setPeriod('monthly'); setIncome(35000); }}
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
                35,000 د.إ / month (Executive Director)
              </button>
            </div>
          </div>

          {/* Section 3: Exact Table (Matching Screenshot 2) */}
          <div style={{ borderTop: '2px solid #E2E8F0' }}>
            <div style={{
              backgroundColor: '#333D35',
              color: '#FFFFFF',
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <UAEFlag size={18} />
              <span style={{ fontSize: '1.05rem', fontWeight: 800 }}>
                United Arab Emirates {formatAED(result.grossAnnualIncome)} Income Tax Calculations for {taxYear}
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
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 800, width: '28%' }}></th>
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
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatAED(result.breakdowns.income.values.yearly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatAED(result.breakdowns.income.values.monthly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatAED(result.breakdowns.income.values.fourWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatAED(result.breakdowns.income.values.twoWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatAED(result.breakdowns.income.values.weekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatAED(result.breakdowns.income.values.daily, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatAED(result.breakdowns.income.values.hourly, 2, false)}</td>
                    <td style={{ padding: '11px 16px', fontWeight: 800, color: '#334155' }}>{result.breakdowns.income.rateFormatted}</td>
                  </tr>

                  {/* Row 2: Taxable Income */}
                  <tr style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#FAFAFA' }}>
                    <td style={{ padding: '11px 16px', textAlign: 'left', fontWeight: 700, color: '#0F172A' }}>Taxable Income</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatAED(result.breakdowns.taxableIncome.values.yearly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatAED(result.breakdowns.taxableIncome.values.monthly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatAED(result.breakdowns.taxableIncome.values.fourWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatAED(result.breakdowns.taxableIncome.values.twoWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatAED(result.breakdowns.taxableIncome.values.weekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatAED(result.breakdowns.taxableIncome.values.daily, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>{formatAED(result.breakdowns.taxableIncome.values.hourly, 2, false)}</td>
                    <td style={{ padding: '11px 16px', fontWeight: 800 }}>{result.breakdowns.taxableIncome.rateFormatted}</td>
                  </tr>

                  {/* Row 3: Salary After Tax (Matching Screenshot 2: 267,040.00 / 333.80%) */}
                  <tr style={{ borderBottom: '2px solid #007A3D', backgroundColor: '#ECFDF5' }}>
                    <td style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 900, color: '#064E3B', fontSize: '0.96rem' }}>
                      Salary After Tax
                    </td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#064E3B', fontSize: '0.96rem' }}>{formatAED(result.breakdowns.salaryAfterTax.values.yearly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#064E3B', fontSize: '0.96rem' }}>{formatAED(result.breakdowns.salaryAfterTax.values.monthly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#064E3B', fontSize: '0.96rem' }}>{formatAED(result.breakdowns.salaryAfterTax.values.fourWeekly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#064E3B', fontSize: '0.96rem' }}>{formatAED(result.breakdowns.salaryAfterTax.values.twoWeekly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#064E3B', fontSize: '0.96rem' }}>{formatAED(result.breakdowns.salaryAfterTax.values.weekly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#064E3B', fontSize: '0.96rem' }}>{formatAED(result.breakdowns.salaryAfterTax.values.daily, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#064E3B', fontSize: '0.96rem' }}>{formatAED(result.breakdowns.salaryAfterTax.values.hourly, 2, false)}</td>
                    <td style={{ padding: '14px 16px', fontWeight: 900, color: '#064E3B', fontSize: '0.96rem' }}>{result.breakdowns.salaryAfterTax.rateFormatted}</td>
                  </tr>

                  {/* Row 4: Employer Social Security Contributions */}
                  <tr style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#FAFAFA' }}>
                    <td style={{ padding: '11px 16px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>
                      Employer Social Security Contributions
                    </td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatAED(result.breakdowns.employerSocial.values.yearly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatAED(result.breakdowns.employerSocial.values.monthly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatAED(result.breakdowns.employerSocial.values.fourWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatAED(result.breakdowns.employerSocial.values.twoWeekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatAED(result.breakdowns.employerSocial.values.weekly, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatAED(result.breakdowns.employerSocial.values.daily, 2, false)}</td>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{formatAED(result.breakdowns.employerSocial.values.hourly, 2, false)}</td>
                    <td style={{ padding: '11px 16px', fontWeight: 700 }}>{result.breakdowns.employerSocial.rateFormatted}</td>
                  </tr>

                  {/* Row 5: Cost of Employee */}
                  <tr style={{ backgroundColor: '#F1F5F9', borderTop: '2px solid #CBD5E1' }}>
                    <td style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 900, color: '#0F172A', fontSize: '0.94rem' }}>
                      Cost of Employee
                    </td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#0F172A', fontSize: '0.94rem' }}>{formatAED(result.breakdowns.costOfEmployee.values.yearly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#0F172A', fontSize: '0.94rem' }}>{formatAED(result.breakdowns.costOfEmployee.values.monthly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#0F172A', fontSize: '0.94rem' }}>{formatAED(result.breakdowns.costOfEmployee.values.fourWeekly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#0F172A', fontSize: '0.94rem' }}>{formatAED(result.breakdowns.costOfEmployee.values.twoWeekly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#0F172A', fontSize: '0.94rem' }}>{formatAED(result.breakdowns.costOfEmployee.values.weekly, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#0F172A', fontSize: '0.94rem' }}>{formatAED(result.breakdowns.costOfEmployee.values.daily, 2, false)}</td>
                    <td style={{ padding: '14px 14px', fontWeight: 900, color: '#0F172A', fontSize: '0.94rem' }}>{formatAED(result.breakdowns.costOfEmployee.values.hourly, 2, false)}</td>
                    <td style={{ padding: '14px 16px', fontWeight: 900, color: '#0F172A', fontSize: '0.94rem' }}>{result.breakdowns.costOfEmployee.rateFormatted}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footnote matching Screenshot 2 */}
            <div style={{
              padding: '16px 20px',
              backgroundColor: '#F8FAFC',
              fontSize: '0.83rem',
              color: '#64748B',
              lineHeight: 1.6,
              borderTop: '1px solid #E2E8F0'
            }}>
              <p style={{ margin: '0 0 6px 0' }}>
                <strong style={{ color: '#334155' }}>Note:</strong> The {taxYear} United Arab Emirates Tax Calculator tool is provided for your use, applying official UAE Ministry of Human Resources and Emiratisation (MOHRE) and GPSSA regulations. In the United Arab Emirates, employment wages are subject to <strong>0% personal income tax</strong>.
              </p>
              <p style={{ margin: 0 }}>
                If you are an expatriate living and working in the UAE, toggle <strong style={{ color: '#007A3D' }}>Non-Resident</strong> above to reflect exemption from GPSSA pension contributions.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Step-by-Step Calculation Breakdown Cards */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#007A3D', borderRadius: '2px', display: 'inline-block' }}></span>
            Detailed Step-by-Step Calculation Breakdown
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
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
                <UAEFlag size={16} />
                <span>United Arab Emirates: Taxable Income Calculation {taxYear}</span>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', fontSize: '0.9rem' }}>
                  <span style={{ fontWeight: 800, color: '#0F172A' }}>{formatAED(result.cardSteps.annualIncome)}</span>
                  <span style={{ color: '#64748B' }}>Annual Income in {taxYear}</span>
                </div>
                <div style={{ height: '1px', backgroundColor: '#CBD5E1', margin: '14px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.95rem', fontWeight: 800 }}>
                  <span style={{ color: '#007A3D' }}>= {formatAED(result.cardSteps.taxableIncome)}</span>
                  <span style={{ color: '#0F172A' }}>Your Taxable Income in {taxYear}</span>
                </div>
              </div>
            </div>

            {/* Card 2: Personal Income Tax Calculation (0%) */}
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
                <UAEFlag size={16} />
                <span>United Arab Emirates: Personal Income Tax Calculation {taxYear}</span>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '0.9rem' }}>
                  <span style={{ color: '#64748B' }}>0.00 د.إ and over</span>
                  <span style={{ fontWeight: 700, color: '#64748B' }}>0%</span>
                  <span style={{ fontWeight: 800, color: '#0F172A' }}>0.00 د.إ</span>
                </div>
                <div style={{ height: '1px', backgroundColor: '#CBD5E1', margin: '14px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.95rem', fontWeight: 800 }}>
                  <span style={{ color: '#0F172A' }}>= Total Personal Income Tax Due</span>
                  <span style={{ color: '#007A3D' }}>0.00 د.إ</span>
                </div>
                <div style={{ marginTop: '10px', fontSize: '0.78rem', color: '#047857', backgroundColor: '#ECFDF5', padding: '6px 10px', borderRadius: '6px', border: '1px solid #A7F3D0' }}>
                  ✓ Under UAE Federal Tax Authority rules, individuals pay 0% income tax on wages and salaries.
                </div>
              </div>
            </div>

            {/* Card 3: Employer Social Security & Cost of Employee */}
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
                <UAEFlag size={16} />
                <span>United Arab Emirates: Employer Payroll & Contributions {taxYear}</span>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '0.86rem' }}>
                  <span style={{ fontWeight: 700, color: '#1E293B' }}>{formatAED(result.cardSteps.employerContributions)}</span>
                  <span style={{ color: '#64748B' }}>Employer Social Security ({result.meta.isResident ? '8.25%' : '0%'})</span>
                </div>
                <div style={{ height: '1px', backgroundColor: '#CBD5E1', margin: '12px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.92rem', fontWeight: 800 }}>
                  <span style={{ color: '#0F172A' }}>= {formatAED(result.cardSteps.costOfEmployee)}</span>
                  <span style={{ color: '#065F46' }}>Total Cost of Employee ({result.meta.isResident ? '108.25%' : '100.00%'})</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#64748B', margin: '8px 0 0' }}>
                  {result.meta.isResident 
                    ? 'Includes mandatory statutory employer contributions for national pension security.' 
                    : 'For expatriate staff, employers accrue End of Service Gratuity (EOSG) under UAE Labour Law.'}
                </p>
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
            Understanding United Arab Emirates Payroll, Tax & Compliance
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginTop: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#007A3D', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} /> Zero Individual Income Tax
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                The UAE has no federal or local personal income tax on salaries, capital gains, or individual wealth. Employees in Dubai, Abu Dhabi, and across all seven Emirates take home <strong>100% of their contract wages</strong> without income tax withholding.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#007A3D', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Building2 size={18} /> GPSSA & Emiratisation (Nafis)
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                For Emirati nationals, social security is governed by the General Pension and Social Security Authority (GPSSA) or Abu Dhabi Pension Fund (ADPF). Under the federal Nafis program, private sector employers receive salary subsidies while maintaining statutory pension contributions.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#007A3D', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Briefcase size={18} /> End of Service Gratuity (EOSG)
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                Under UAE Labour Law (Federal Decree-Law No. 33 of 2021), expatriate employees are entitled to an End of Service Benefit (21 days' basic wage per year for the first 5 years, and 30 days per year thereafter), or participation in voluntary workplace savings schemes such as DEWS.
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
                Setting Up a Business or Hiring in Dubai &amp; UAE?
              </h4>
              <p style={{ fontSize: '0.92rem', color: '#166534', margin: 0, maxWidth: '650px', lineHeight: 1.55 }}>
                Kinzei Consultants assists international businesses with UAE Mainland and Free Zone company formation, Corporate Tax (9%) registration, VAT compliance, and Wage Protection System (WPS) payroll management.
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
              <span>Book UAE Advisory Session</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
