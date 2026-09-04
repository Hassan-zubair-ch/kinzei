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
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import { GermanyFlag, USFlag, UKFlag, PKFlag } from '../components/CountryFlags';
import { 
  GERMAN_FEDERAL_STATES, 
  GERMAN_TAX_YEARS_DATA, 
  calculateGermanTaxes 
} from '../data/germanyTaxData';

function formatEUR(val, decimals = 2) {
  if (val === undefined || val === null || isNaN(val)) return '€0.00';
  return '€' + Number(val).toLocaleString('de-DE', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

export default function GermanyTaxCalculator({ onOpenSchedule }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form State (Matching Screenshot 1)
  const [grossIncome, setGrossIncome] = useState(3000);
  const [billingPeriod, setBillingPeriod] = useState('month'); // 'month' | 'year'
  const [monetaryBenefit, setMonetaryBenefit] = useState(0);
  const [accountingYear, setAccountingYear] = useState('2026');
  const [annualAllowance, setAnnualAllowance] = useState(0);
  const [taxClass, setTaxClass] = useState('3'); // Grade 3 as in Screenshot 1
  const [church, setChurch] = useState(false);
  const [federalState, setFederalState] = useState('Baden-Württemberg');
  const [age, setAge] = useState(25);
  const [hasChildren, setHasChildren] = useState(false);
  const [childrenCount, setChildrenCount] = useState(0);
  const [healthInsuranceType, setHealthInsuranceType] = useState('legal');
  const [healthSupplementaryRate, setHealthSupplementaryRate] = useState(2.9);
  const [pensionInsurance, setPensionInsurance] = useState('legal');
  const [unemploymentInsurance, setUnemploymentInsurance] = useState('legal');

  // Master Tax Calculation
  const result = useMemo(() => {
    return calculateGermanTaxes({
      grossIncome,
      billingPeriod,
      monetaryBenefit,
      accountingYear,
      annualAllowance,
      taxClass,
      church,
      federalState,
      age,
      hasChildren,
      childrenCount,
      healthInsuranceType,
      healthSupplementaryRate,
      pensionInsurance,
      unemploymentInsurance
    });
  }, [
    grossIncome, billingPeriod, monetaryBenefit, accountingYear, annualAllowance,
    taxClass, church, federalState, age, hasChildren, childrenCount,
    healthInsuranceType, healthSupplementaryRate, pensionInsurance, unemploymentInsurance
  ]);

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
            <span style={{ color: '#F1F5F9', fontWeight: 600 }}>Germany Gross to Net Salary Calculator</span>
          </div>

          <Link
            to="/tax-calculator"
            style={{
              backgroundColor: 'rgba(255,255,255,0.06)',
              color: '#D4A017',
              padding: '6px 14px',
              borderRadius: '6px',
              fontSize: '0.82rem',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              border: '1px solid rgba(212, 160, 23, 0.3)'
            }}
          >
            <span>&lt; Back to All Calculators Hub</span>
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <section style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: '#FFFFFF',
        padding: '44px 0 50px',
        borderBottom: '3px solid #D4A017'
      }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(212, 160, 23, 0.14)',
            border: '1px solid #D4A017',
            padding: '5px 14px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#D4A017',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '16px'
          }}>
            <GermanyFlag size={20} />
            Federal Ministry of Finance (BMF) Compliant
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 3.8vw, 2.7rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '14px',
            color: '#FFFFFF'
          }}>
            Gross to Net Calculator (Germany Salary & Tax 2026)
          </h1>

          <p style={{
            fontSize: '1.02rem',
            color: '#CBD5E1',
            maxWidth: '860px',
            lineHeight: 1.6,
            marginBottom: '24px'
          }}>
            Calculate your exact German net take-home salary for tax years <strong>2026, 2025, and 2024</strong>. Our statutory calculation engine factors in progressive income tax, solidarity surcharge, church tax, and all four social security contributions across all 16 German Federal States with zero discrepancies.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '22px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '0.86rem' }}>
              <ShieldCheck size={18} color="#D4A017" />
              <span>Official BMF Tariff 2026 & Social Code Rules</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '0.86rem' }}>
              <Sparkles size={18} color="#D4A017" />
              <span>Tax Classes 1 through 6 Supported</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '0.86rem' }}>
              <TrendingUp size={18} color="#D4A017" />
              <span>Penny-Exact Mathematical Parity</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CALCULATOR CONTAINER (Full width, wide 2-column layout) */}
      <section className="container" style={{ maxWidth: '1240px', marginTop: '-24px', marginBottom: '50px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(360px, 460px) 1fr',
          gap: '28px',
          alignItems: 'start'
        }} className="germany-calc-grid">

          {/* ================= LEFT COLUMN: INPUT FORM ================= */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '1.5px solid #E2E8F0',
            padding: '28px 26px',
            boxShadow: '0 8px 30px rgba(15, 23, 42, 0.08)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '2px solid #D4A017',
              paddingBottom: '12px',
              marginBottom: '22px'
            }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                Calculate Net Income!
              </h2>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#D4A017', backgroundColor: '#FFFBEB', padding: '3px 10px', borderRadius: '12px', border: '1px solid #FEF3C7' }}>
                Tax Year {accountingYear}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Gross Income & Billing Period */}
              <div>
                <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                  Gross Income:
                </label>
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  <input
                    type="number"
                    value={grossIncome}
                    onChange={(e) => setGrossIncome(Number(e.target.value) || 0)}
                    min="0"
                    step="100"
                    style={{
                      width: '100%',
                      padding: '10px 42px 10px 14px',
                      borderRadius: '8px',
                      border: '2px solid #D4A017',
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      boxShadow: '0 2px 6px rgba(212, 160, 23, 0.12)'
                    }}
                  />
                  <span style={{ position: 'absolute', right: '14px', fontWeight: 800, color: '#B4820E', fontSize: '1.1rem' }}>€</span>
                </div>
              </div>

              {/* Billing Period Radio (Month vs Year) */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>Billing Period:</span>
                <div style={{ display: 'flex', gap: '14px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.86rem', fontWeight: 600, cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="period"
                      checked={billingPeriod === 'year'}
                      onChange={() => setBillingPeriod('year')}
                      style={{ accentColor: '#D4A017' }}
                    />
                    <span>Year</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.86rem', fontWeight: 700, cursor: 'pointer', color: '#0F172A' }}>
                    <input
                      type="radio"
                      name="period"
                      checked={billingPeriod === 'month'}
                      onChange={() => setBillingPeriod('month')}
                      style={{ accentColor: '#D4A017' }}
                    />
                    <span>Month</span>
                  </label>
                </div>
              </div>

              {/* Monetary Benefit (Geldwerter Vorteil) */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <label style={{ fontSize: '0.84rem', fontWeight: 700, color: '#334155' }}>
                    Monetary Benefit (Monthly Value / Company Car):
                  </label>
                  <span style={{ fontSize: '0.74rem', color: '#64748B' }}>e.g. 1% rule</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  <input
                    type="number"
                    value={monetaryBenefit}
                    onChange={(e) => setMonetaryBenefit(Number(e.target.value) || 0)}
                    min="0"
                    step="50"
                    placeholder="0"
                    style={{ width: '100%', padding: '8px 36px 8px 12px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontSize: '0.95rem', fontWeight: 700 }}
                  />
                  <span style={{ position: 'absolute', right: '12px', fontWeight: 700, color: '#64748B' }}>€</span>
                </div>
              </div>

              {/* Accounting Year */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>Accounting Year:</label>
                <select
                  value={accountingYear}
                  onChange={(e) => setAccountingYear(e.target.value)}
                  style={{ width: '150px', padding: '8px 12px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700, fontSize: '0.9rem' }}
                >
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                </select>
              </div>

              {/* Annual Tax Allowance (Freibetrag) */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>Annual Tax Allowance:</label>
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative', width: '150px' }}>
                  <input
                    type="number"
                    value={annualAllowance || ''}
                    onChange={(e) => setAnnualAllowance(Number(e.target.value) || 0)}
                    placeholder="0"
                    style={{ width: '100%', padding: '8px 32px 8px 10px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700, fontSize: '0.9rem' }}
                  />
                  <span style={{ position: 'absolute', right: '10px', fontWeight: 700, color: '#64748B' }}>€</span>
                </div>
              </div>

              {/* Tax Class */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>Tax Class:</label>
                <select
                  value={taxClass}
                  onChange={(e) => setTaxClass(e.target.value)}
                  style={{ width: '180px', padding: '8px 12px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700, fontSize: '0.9rem' }}
                >
                  <option value="1">Grade 1 (Single)</option>
                  <option value="2">Grade 2 (Single Parent)</option>
                  <option value="3">Grade 3 (Married - Primary)</option>
                  <option value="4">Grade 4 (Married - Equal)</option>
                  <option value="5">Grade 5 (Married - Secondary)</option>
                  <option value="6">Grade 6 (Second Job)</option>
                </select>
              </div>

              {/* Church Tax */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>Church Tax:</label>
                <div style={{ display: 'flex', gap: '14px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.86rem', fontWeight: 600, cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="church"
                      checked={church === true}
                      onChange={() => setChurch(true)}
                      style={{ accentColor: '#D4A017' }}
                    />
                    <span>Yes</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.86rem', fontWeight: 700, cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="church"
                      checked={church === false}
                      onChange={() => setChurch(false)}
                      style={{ accentColor: '#D4A017' }}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              {/* Federal State */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>Federal State:</label>
                <select
                  value={federalState}
                  onChange={(e) => setFederalState(e.target.value)}
                  style={{ width: '210px', padding: '8px 12px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700, fontSize: '0.88rem' }}
                >
                  {GERMAN_FEDERAL_STATES.map(s => (
                    <option key={s.code} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>

              {/* Age */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>Age (Years):</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value) || 25)}
                  min="16"
                  max="99"
                  style={{ width: '90px', padding: '8px 12px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700, fontSize: '0.9rem' }}
                />
              </div>

              {/* Children */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>Children:</label>
                <div style={{ display: 'flex', gap: '14px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.86rem', fontWeight: 600, cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="hasChildren"
                      checked={hasChildren === true}
                      onChange={() => setHasChildren(true)}
                      style={{ accentColor: '#D4A017' }}
                    />
                    <span>Yes</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.86rem', fontWeight: 700, cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="hasChildren"
                      checked={hasChildren === false}
                      onChange={() => setHasChildren(false)}
                      style={{ accentColor: '#D4A017' }}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              {/* Health Insurance */}
              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>Health Insurance:</label>
                  <select
                    value={healthInsuranceType}
                    onChange={(e) => setHealthInsuranceType(e.target.value)}
                    style={{ width: '180px', padding: '8px 12px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700, fontSize: '0.88rem' }}
                  >
                    <option value="legal">Legally Insured</option>
                    <option value="private">Privately Insured</option>
                    <option value="voluntary">Voluntary Statutory</option>
                  </select>
                </div>

                {healthInsuranceType === 'legal' && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#475569' }}>
                      Supplementary Contribution:
                    </label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <input
                        type="number"
                        value={healthSupplementaryRate}
                        onChange={(e) => setHealthSupplementaryRate(Number(e.target.value) || 0)}
                        step="0.1"
                        style={{ width: '75px', padding: '6px 10px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700 }}
                      />
                      <span style={{ fontWeight: 700 }}>%</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Pension & Unemployment Insurance */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>Pension Insurance (9.3%):</label>
                  <select
                    value={pensionInsurance}
                    onChange={(e) => setPensionInsurance(e.target.value)}
                    style={{ width: '180px', padding: '8px 12px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700, fontSize: '0.88rem' }}
                  >
                    <option value="legal">Legally Insured</option>
                    <option value="exempt">Exempt</option>
                  </select>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>Unemployment Insurance (1.3%):</label>
                  <select
                    value={unemploymentInsurance}
                    onChange={(e) => setUnemploymentInsurance(e.target.value)}
                    style={{ width: '180px', padding: '8px 12px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700, fontSize: '0.88rem' }}
                  >
                    <option value="legal">Legally Insured</option>
                    <option value="exempt">Exempt</option>
                  </select>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                style={{
                  marginTop: '10px',
                  backgroundColor: '#D4A017',
                  color: '#0F172A',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '14px 20px',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(212, 160, 23, 0.3)',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <Calculator size={18} />
                <span>Calculate Net Income</span>
              </button>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: OUTPUTS & TABLE (Matching Screenshot 2) ================= */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* KPI Summary Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px'
            }}>
              <div style={{
                backgroundColor: '#0F172A',
                color: '#FFFFFF',
                borderRadius: '14px',
                padding: '22px 20px',
                border: '1.5px solid #D4A017',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.12)'
              }}>
                <span style={{ fontSize: '0.78rem', color: '#D4A017', fontWeight: 700, textTransform: 'uppercase' }}>
                  Net Take-Home Pay
                </span>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#10B981', margin: '4px 0' }}>
                  {formatEUR(result.net.month)}
                </div>
                <div style={{ fontSize: '0.86rem', color: '#E2E8F0' }}>
                  {formatEUR(result.net.year)} / year
                </div>
              </div>

              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                padding: '20px 18px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}>
                <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                  Total Taxes
                </span>
                <div style={{ fontSize: '1.55rem', fontWeight: 800, color: '#0F172A', margin: '4px 0' }}>
                  {formatEUR(result.taxes.totalTaxes.month)}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#64748B' }}>
                  {formatEUR(result.taxes.totalTaxes.year)} / year
                </div>
              </div>

              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                padding: '20px 18px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}>
                <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                  Social Contributions
                </span>
                <div style={{ fontSize: '1.55rem', fontWeight: 800, color: '#B4820E', margin: '4px 0' }}>
                  {formatEUR(result.socialSecurity.totalSocialSecurity.month)}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#64748B' }}>
                  {formatEUR(result.socialSecurity.totalSocialSecurity.year)} / year
                </div>
              </div>
            </div>

            {/* DETAILED RESULTS TABLE (Matching Screenshot 2 Precisely) */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              overflow: 'hidden',
              boxShadow: '0 6px 20px rgba(15, 23, 42, 0.05)'
            }}>
              <div style={{
                backgroundColor: '#0F172A',
                color: '#FFFFFF',
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '2px solid #D4A017'
              }}>
                <span style={{ fontSize: '1.05rem', fontWeight: 800 }}>
                  Detailed Salary, Tax & Contribution Breakdown
                </span>
                <span style={{ fontSize: '0.82rem', color: '#D4A017', fontWeight: 600 }}>
                  Tax Class {taxClass} • {federalState}
                </span>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '2px solid #E2E8F0', color: '#475569', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase' }}>
                    <th style={{ padding: '12px 20px', textAlign: 'left' }}>Result Category</th>
                    <th style={{ padding: '12px 18px', width: '150px' }}>Month</th>
                    <th style={{ padding: '12px 20px', width: '160px' }}>Year</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Gross Income */}
                  <tr style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#FFFFFF' }}>
                    <td style={{ padding: '12px 20px', textAlign: 'left', fontWeight: 800, color: '#0F172A' }}>
                      Gross Income:
                    </td>
                    <td style={{ padding: '12px 18px', fontWeight: 700 }}>{formatEUR(result.gross.month)}</td>
                    <td style={{ padding: '12px 20px', fontWeight: 700 }}>{formatEUR(result.gross.year)}</td>
                  </tr>

                  {/* Monetary Benefit */}
                  <tr style={{ borderBottom: '2px solid #E2E8F0', backgroundColor: '#F8FAFC' }}>
                    <td style={{ padding: '10px 20px', textAlign: 'left', color: '#64748B', fontWeight: 600 }}>
                      Monetary Benefit:
                    </td>
                    <td style={{ padding: '10px 18px', color: '#64748B' }}>{formatEUR(result.monetaryBenefit.month)}</td>
                    <td style={{ padding: '10px 20px', color: '#64748B' }}>{formatEUR(result.monetaryBenefit.year)}</td>
                  </tr>

                  {/* SECTION: TAXES */}
                  <tr style={{ backgroundColor: '#FFFBEB', borderBottom: '1px solid #FEF3C7' }}>
                    <td colSpan={3} style={{ padding: '8px 20px', textAlign: 'left', fontWeight: 800, fontSize: '0.82rem', color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Taxes & Surcharges
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '10px 20px', textAlign: 'left' }}>Solidarity Surcharge:</td>
                    <td style={{ padding: '10px 18px' }}>{formatEUR(result.taxes.solidaritySurcharge.month)}</td>
                    <td style={{ padding: '10px 20px' }}>{formatEUR(result.taxes.solidaritySurcharge.year)}</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '10px 20px', textAlign: 'left' }}>Church Tax:</td>
                    <td style={{ padding: '10px 18px' }}>{formatEUR(result.taxes.churchTax.month)}</td>
                    <td style={{ padding: '10px 20px' }}>{formatEUR(result.taxes.churchTax.year)}</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '10px 20px', textAlign: 'left' }}>Income Tax:</td>
                    <td style={{ padding: '10px 18px', fontWeight: 700, color: '#B45309' }}>{formatEUR(result.taxes.incomeTax.month)}</td>
                    <td style={{ padding: '10px 20px', fontWeight: 700, color: '#B45309' }}>{formatEUR(result.taxes.incomeTax.year)}</td>
                  </tr>
                  <tr style={{ borderBottom: '2px solid #E2E8F0', backgroundColor: '#F8FAFC', fontWeight: 800 }}>
                    <td style={{ padding: '12px 20px', textAlign: 'left', color: '#0F172A' }}>Total Taxes:</td>
                    <td style={{ padding: '12px 18px', color: '#B45309' }}>{formatEUR(result.taxes.totalTaxes.month)}</td>
                    <td style={{ padding: '12px 20px', color: '#B45309' }}>{formatEUR(result.taxes.totalTaxes.year)}</td>
                  </tr>

                  {/* SECTION: SOCIAL SECURITY */}
                  <tr style={{ backgroundColor: '#FFFBEB', borderBottom: '1px solid #FEF3C7' }}>
                    <td colSpan={3} style={{ padding: '8px 20px', textAlign: 'left', fontWeight: 800, fontSize: '0.82rem', color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Social Security Contributions
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '10px 20px', textAlign: 'left' }}>Pension Insurance (9.3%):</td>
                    <td style={{ padding: '10px 18px' }}>{formatEUR(result.socialSecurity.pension.month)}</td>
                    <td style={{ padding: '10px 20px' }}>{formatEUR(result.socialSecurity.pension.year)}</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '10px 20px', textAlign: 'left' }}>Unemployment Insurance (1.3%):</td>
                    <td style={{ padding: '10px 18px' }}>{formatEUR(result.socialSecurity.unemployment.month)}</td>
                    <td style={{ padding: '10px 20px' }}>{formatEUR(result.socialSecurity.unemployment.year)}</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '10px 20px', textAlign: 'left' }}>Health Insurance:</td>
                    <td style={{ padding: '10px 18px' }}>{formatEUR(result.socialSecurity.health.month)}</td>
                    <td style={{ padding: '10px 20px' }}>{formatEUR(result.socialSecurity.health.year)}</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '10px 20px', textAlign: 'left' }}>Long-Term Care Insurance:</td>
                    <td style={{ padding: '10px 18px' }}>{formatEUR(result.socialSecurity.longTermCare.month)}</td>
                    <td style={{ padding: '10px 20px' }}>{formatEUR(result.socialSecurity.longTermCare.year)}</td>
                  </tr>
                  <tr style={{ borderBottom: '2px solid #E2E8F0', backgroundColor: '#F8FAFC', fontWeight: 800 }}>
                    <td style={{ padding: '12px 20px', textAlign: 'left', color: '#0F172A' }}>Total Social Security Contributions:</td>
                    <td style={{ padding: '12px 18px', color: '#B4820E' }}>{formatEUR(result.socialSecurity.totalSocialSecurity.month)}</td>
                    <td style={{ padding: '12px 20px', color: '#B4820E' }}>{formatEUR(result.socialSecurity.totalSocialSecurity.year)}</td>
                  </tr>

                  {/* NET SALARY */}
                  <tr style={{ backgroundColor: '#ECFDF5', borderTop: '2px solid #10B981', fontWeight: 900, fontSize: '1.08rem' }}>
                    <td style={{ padding: '16px 20px', textAlign: 'left', color: '#065F46' }}>
                      Net Take-Home Pay:
                    </td>
                    <td style={{ padding: '16px 18px', color: '#047857' }}>
                      {formatEUR(result.net.month)}
                    </td>
                    <td style={{ padding: '16px 20px', color: '#047857' }}>
                      {formatEUR(result.net.year)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Quick Notes Card */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              border: '1px solid #E2E8F0',
              padding: '20px 22px',
              fontSize: '0.86rem',
              color: '#475569',
              lineHeight: 1.6
            }}>
              <div style={{ fontWeight: 800, color: '#0F172A', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Info size={16} color="#D4A017" />
                <span>Statutory 2026 Regulations Included</span>
              </div>
              The 2026 German Gross-Net Calculator includes company car taxation, the updated basic tax-free allowance (Grundfreibetrag), adjusted contribution ceilings (Beitragsbemessungsgrenzen), and updated care insurance surcharges.
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE EDUCATIONAL GUIDE (In English) */}
      <section className="container" style={{ maxWidth: '1240px', marginBottom: '40px' }}>
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E2E8F0',
          padding: '36px 32px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#D4A017', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
            <FileText size={16} />
            German Payroll Reference Guide
          </div>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0F172A', marginBottom: '18px' }}>
            Understanding the German Tax System & Tax Classes 1–6
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.94rem', color: '#334155', lineHeight: 1.65 }}>
            <p>
              In Germany, employees receive an agreed gross salary from which statutory income tax, solidarity surcharge, optional church tax, and statutory social insurance contributions are withheld directly by the employer through statutory payroll reporting.
            </p>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginTop: '8px' }}>
              The 6 German Tax Classes:
            </h3>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Tax Class 1 (Single):</strong> Unmarried, divorced, widowed, or permanently separated employees without children. Standard basic tax-free allowance applies (€12,348 for 2026).</li>
              <li><strong>Tax Class 2 (Single Parent):</strong> Single parents entitled to the single parent relief allowance (€4,260).</li>
              <li><strong>Tax Class 3 (Married - Primary Earner):</strong> Married or registered civil partners where one partner earns significantly more. Offers double basic allowance, while the partner is placed in Tax Class 5.</li>
              <li><strong>Tax Class 4 (Married - Equal Earners):</strong> Standard default for married couples earning similar salaries. Both partners receive standard individual allowances.</li>
              <li><strong>Tax Class 5 (Married - Secondary Earner):</strong> Paired with Tax Class 3. Zero basic allowance allocated, resulting in higher monthly withholding, balanced during annual tax assessment.</li>
              <li><strong>Tax Class 6 (Second Employment):</strong> Applied to secondary or multiple jobs beyond the mini-job limit. Carries no basic allowance or social deductions relief.</li>
            </ul>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginTop: '8px' }}>
              Statutory Social Security Deductions:
            </h3>
            <p>
              Social insurance is split equally between employee and employer (50/50):
              <br />• <strong>Pension Insurance:</strong> 18.6% total (employee pays 9.3%).
              <br />• <strong>Unemployment Insurance:</strong> 2.6% total (employee pays 1.3%).
              <br />• <strong>Health Insurance:</strong> Standard 14.6% (employee 7.3%) + half of the fund's supplementary contribution (average 2.9%).
              <br />• <strong>Long-Term Care Insurance:</strong> 3.4% base. Childless employees aged 23+ pay an additional 0.6% surcharge (total 2.4% employee share).
            </p>
          </div>
        </div>
      </section>

      {/* KINZEI GERMAN & EUROPEAN ADVISORY BANNER */}
      <section className="container" style={{ maxWidth: '1240px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          borderRadius: '16px',
          padding: '36px 32px',
          border: '1.5px solid #D4A017',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          boxShadow: '0 12px 30px rgba(0,0,0,0.15)'
        }}>
          <div style={{ maxWidth: '680px' }}>
            <span style={{
              display: 'inline-block',
              backgroundColor: 'rgba(212, 160, 23, 0.15)',
              color: '#D4A017',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '10px'
            }}>
              Kinzei European & German Business Desk
            </span>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px', lineHeight: 1.3 }}>
              Expanding into Germany or Hiring Cross-Border Staff?
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#CBD5E1', margin: 0, lineHeight: 1.6 }}>
              Kinzei Consultants provides complete German business establishment, payroll compliance, corporate tax structuring, and double taxation relief for international businesses and cross-border employees.
            </p>
          </div>

          <button
            onClick={onOpenSchedule}
            style={{
              backgroundColor: '#D4A017',
              color: '#0F172A',
              fontWeight: 800,
              fontSize: '0.95rem',
              padding: '14px 28px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(212, 160, 23, 0.35)',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E5B229';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#D4A017';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Book German Advisory</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .germany-calc-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
