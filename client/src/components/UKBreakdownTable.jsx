import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info, HelpCircle } from 'lucide-react';

export default function UKBreakdownTable({
  takeHomeResult,
  title = "Complete PAYE Salary & Deductions Breakdown",
  taxYear = "2026/27",
  isScotland = false,
  customSubtitle = null
}) {
  const [showPeriods, setShowPeriods] = useState({
    yearly: true,
    monthly: true,
    fourWeekly: false,
    twoWeekly: false,
    weekly: true,
    daily: true
  });

  const [showTaxBreakdown, setShowTaxBreakdown] = useState(false);

  if (!takeHomeResult || !takeHomeResult.periods) {
    return null;
  }

  const { periods, taxBandsBreakdown = [] } = takeHomeResult;

  const formatGBP = (val) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(Number(val) || 0);
  };

  const periodOptions = [
    { key: 'yearly', label: 'Yearly' },
    { key: 'monthly', label: 'Monthly' },
    { key: 'fourWeekly', label: '4-Weekly' },
    { key: 'twoWeekly', label: '2-Weekly' },
    { key: 'weekly', label: 'Weekly' },
    { key: 'daily', label: 'Daily', tooltip: 'Daily values based on standard 5-day working week (260 days)' }
  ];

  const hasStudentLoan = periods.studentLoan && periods.studentLoan.yearly > 0;
  const hasPension = periods.pension && periods.pension.yearly > 0;

  return (
    <div style={{
      borderRadius: '12px',
      border: '1px solid #E2E8F0',
      backgroundColor: '#FFFFFF',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(15, 23, 42, 0.06)',
      marginTop: '24px',
      marginBottom: '28px'
    }}>
      {/* Table Header Bar */}
      <div style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: '#FFFFFF',
        padding: '16px 22px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        borderBottom: '2px solid #D4A017'
      }}>
        <div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', margin: 0, letterSpacing: '-0.01em' }}>
            {title}
          </h3>
          <p style={{ fontSize: '0.80rem', color: '#CBD5E1', margin: '4px 0 0 0' }}>
            {customSubtitle || `HMRC ${taxYear} PAYE Rates • ${isScotland ? 'Scottish Tax Bands' : 'England, Wales & NI Tax Bands'}`}
          </p>
        </div>

        {/* Tax Breakdown Toggle Button */}
        <button
          onClick={() => setShowTaxBreakdown(!showTaxBreakdown)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: showTaxBreakdown ? '#D4A017' : 'rgba(212, 160, 23, 0.18)',
            color: showTaxBreakdown ? '#0F172A' : '#FFD700',
            border: '1px solid #D4A017',
            padding: '7px 14px',
            borderRadius: '6px',
            fontSize: '0.80rem',
            fontWeight: 800,
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <span>Tax Breakdown</span>
          {showTaxBreakdown ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {/* Period Checkboxes Filter */}
      <div style={{
        backgroundColor: '#F8FAFC',
        borderBottom: '1px solid #E2E8F0',
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#334155' }}>
            Show Periods:
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          {periodOptions.map(p => (
            <label 
              key={p.key} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px', 
                fontSize: '0.82rem', 
                fontWeight: 600, 
                color: '#475569', 
                cursor: 'pointer',
                userSelect: 'none'
              }}
              title={p.tooltip}
            >
              <input
                type="checkbox"
                checked={showPeriods[p.key]}
                onChange={(e) => setShowPeriods({ ...showPeriods, [p.key]: e.target.checked })}
                style={{ accentColor: '#D4A017', width: '15px', height: '15px', cursor: 'pointer' }}
              />
              <span>{p.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Collapsible Tax Breakdown Drawer */}
      {showTaxBreakdown && (
        <div style={{
          backgroundColor: '#FFFBEB',
          borderBottom: '1px solid #FDE68A',
          padding: '16px 20px',
          animation: 'fadeIn 0.2s ease-in-out'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <Info size={16} color="#B45309" />
            <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#92400E', margin: 0 }}>
              HMRC Statutory Tax Band Distribution (Annual)
            </h4>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '10px'
          }}>
            {taxBandsBreakdown.length > 0 ? (
              taxBandsBreakdown.map((band, i) => (
                <div key={i} style={{
                  backgroundColor: '#FFFFFF',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid #FCD34D'
                }}>
                  <div style={{ fontSize: '0.76rem', color: '#78350F', fontWeight: 700 }}>
                    {band.name}
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginTop: '2px' }}>
                    {formatGBP(band.tax)}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#64748B' }}>
                    Taxed on {formatGBP(band.taxable)}
                  </div>
                </div>
              ))
            ) : (
              <div style={{ fontSize: '0.84rem', color: '#78350F' }}>
                Standard personal allowance covers entire income. Zero income tax applicable.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Results Table (Matching thesalarycalculator.co.uk/hourly.php) */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '0.88rem',
          textAlign: 'right'
        }}>
          <thead>
            <tr style={{
              backgroundColor: '#F1F5F9',
              borderBottom: '2px solid #CBD5E1',
              color: '#334155',
              fontSize: '0.82rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.02em'
            }}>
              <th style={{ padding: '14px 18px', textAlign: 'left', minWidth: '110px' }}>
                Period
              </th>
              <th style={{ padding: '14px 16px', minWidth: '130px' }}>
                Gross Income
              </th>
              <th style={{ padding: '14px 16px', minWidth: '130px' }}>
                Taxable Income
              </th>
              <th style={{ padding: '14px 16px', minWidth: '120px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span>Tax</span>
                  <span 
                    onClick={() => setShowTaxBreakdown(!showTaxBreakdown)}
                    style={{
                      fontSize: '0.68rem',
                      color: '#B45309',
                      backgroundColor: '#FEF3C7',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      border: '1px solid #FCD34D'
                    }}
                    title="Click to view band breakdown"
                  >
                    BREAKDOWN
                  </span>
                </div>
              </th>
              <th style={{ padding: '14px 16px', minWidth: '140px' }}>
                National Insurance
              </th>
              {hasStudentLoan && (
                <th style={{ padding: '14px 16px', minWidth: '120px' }}>
                  Student Loan
                </th>
              )}
              {hasPension && (
                <th style={{ padding: '14px 16px', minWidth: '120px' }}>
                  Pension
                </th>
              )}
              <th style={{
                padding: '14px 18px',
                minWidth: '150px',
                color: '#0F172A',
                backgroundColor: '#FEF3C7',
                borderLeft: '2px solid #FCD34D',
                fontWeight: 900
              }}>
                2026 Take Home
              </th>
              <th style={{
                padding: '14px 18px',
                minWidth: '140px',
                color: '#475569',
                backgroundColor: '#F8FAFC'
              }}>
                2025 Take Home
              </th>
            </tr>
          </thead>
          <tbody>
            {periodOptions
              .filter(p => showPeriods[p.key])
              .map((p, idx) => {
                const isEven = idx % 2 === 0;
                const grossVal = periods.gross[p.key];
                const taxableVal = periods.taxable[p.key];
                const taxVal = periods.tax[p.key];
                const niVal = periods.ni[p.key];
                const slVal = periods.studentLoan ? periods.studentLoan[p.key] : 0;
                const penVal = periods.pension ? periods.pension[p.key] : 0;
                const takeHomeVal = periods.takeHome[p.key];
                const priorTakeHomeVal = periods.takeHomePriorYear ? periods.takeHomePriorYear[p.key] : takeHomeVal;

                return (
                  <tr 
                    key={p.key} 
                    style={{ 
                      backgroundColor: isEven ? '#FFFFFF' : '#F8FAFC', 
                      borderBottom: '1px solid #E2E8F0',
                      transition: 'background-color 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(212, 160, 23, 0.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = isEven ? '#FFFFFF' : '#F8FAFC'}
                  >
                    <td style={{ 
                      padding: '14px 18px', 
                      textAlign: 'left', 
                      fontWeight: 800, 
                      color: '#0F172A'
                    }}>
                      {p.label}
                    </td>
                    <td style={{ padding: '14px 16px', fontWeight: 700, color: '#0F172A' }}>
                      {formatGBP(grossVal)}
                    </td>
                    <td style={{ padding: '14px 16px', color: '#475569', fontWeight: 600 }}>
                      {formatGBP(taxableVal)}
                    </td>
                    <td style={{ padding: '14px 16px', color: '#B45309', fontWeight: 700 }}>
                      {formatGBP(taxVal)}
                    </td>
                    <td style={{ padding: '14px 16px', color: '#334155', fontWeight: 600 }}>
                      {formatGBP(niVal)}
                    </td>
                    {hasStudentLoan && (
                      <td style={{ padding: '14px 16px', color: '#475569', fontWeight: 600 }}>
                        {formatGBP(slVal)}
                      </td>
                    )}
                    {hasPension && (
                      <td style={{ padding: '14px 16px', color: '#475569', fontWeight: 600 }}>
                        {formatGBP(penVal)}
                      </td>
                    )}
                    <td style={{ 
                      padding: '14px 18px', 
                      fontWeight: 800, 
                      color: '#047857', 
                      backgroundColor: '#FEF3C7',
                      borderLeft: '2px solid #FCD34D',
                      fontSize: '0.94rem'
                    }}>
                      {formatGBP(takeHomeVal)}
                    </td>
                    <td style={{ 
                      padding: '14px 18px', 
                      color: '#64748B', 
                      fontWeight: 700,
                      backgroundColor: '#F8FAFC'
                    }}>
                      {formatGBP(priorTakeHomeVal)}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
