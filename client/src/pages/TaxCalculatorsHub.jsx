import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Globe2, 
  FileText,
  DollarSign,
  Layers
} from 'lucide-react';
import { USFlag, UKFlag, PKFlag, UAEFlag, KSAFlag, GermanyFlag } from '../components/CountryFlags';

const CanadaFlag = ({ size = 28 }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 640 320" style={{ borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
    <rect width="640" height="320" fill="#FF0000" />
    <rect x="160" width="320" height="320" fill="#FFFFFF" />
    <path d="M320 60 L328 100 L345 90 L340 120 L370 125 L350 145 L375 165 L345 165 L335 200 L320 185 L305 200 L295 165 L265 165 L290 145 L270 125 L300 120 L295 90 L312 100 Z" fill="#FF0000" />
  </svg>
);

const AustraliaFlag = ({ size = 28 }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 640 320" style={{ borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
    <rect width="640" height="320" fill="#00008B" />
    <rect width="320" height="160" fill="#00247D" />
    <path d="M0 0 L320 160 M320 0 L0 160" stroke="#FFFFFF" strokeWidth="32" />
    <path d="M0 0 L320 160 M320 0 L0 160" stroke="#CC0000" strokeWidth="20" />
    <path d="M160 0 v160 M0 80 h320" stroke="#FFFFFF" strokeWidth="48" />
    <path d="M160 0 v160 M0 80 h320" stroke="#CC0000" strokeWidth="32" />
    <circle cx="160" cy="240" r="18" fill="#FFFFFF" />
    <circle cx="480" cy="80" r="10" fill="#FFFFFF" />
    <circle cx="520" cy="130" r="10" fill="#FFFFFF" />
    <circle cx="480" cy="200" r="10" fill="#FFFFFF" />
    <circle cx="440" cy="140" r="10" fill="#FFFFFF" />
    <circle cx="460" cy="170" r="6" fill="#FFFFFF" />
  </svg>
);

export default function TaxCalculatorsHub({ onOpenSchedule }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeCalculators = [
    {
      id: 'pakistan',
      country: 'Pakistan',
      title: 'Pakistan Income Tax Calculator',
      description: 'Official Federal Board of Revenue (FBR) income tax computation engine for salaried individuals, non-salaried professionals, and associations of persons (AOPs) under the Finance Act.',
      features: ['Updated FBR Slabs & Surcharges', 'Salaried vs. Non-Salaried Regimes', 'Monthly & Annual Withholding Breaks', 'Cross-Border Remittance Rules'],
      link: '/tax-calculator/pakistan',
      badge: 'Live • FBR Salaried & Business',
      badgeColor: '#10B981',
      FlagComponent: PKFlag,
      primaryAction: 'Open Pakistan Calculator'
    },
    {
      id: 'usa',
      country: 'United States',
      title: 'USA Income Tax & Paycheck Calculator',
      description: 'Comprehensive 2026/2027 personal income tax calculator matching IRS tax brackets, FICA payroll taxes (Social Security & Medicare), and state & local taxes across all 50 states + DC.',
      features: ['All 50 States + DC Tax Rates', 'FICA Payroll Taxes (Social Security & Medicare)', 'Standard & Itemized Deductions', 'Marginal & Effective Tax Rates'],
      link: '/tax-calculator/usa',
      badge: 'Live • Federal, State & Local',
      badgeColor: '#D4A017',
      FlagComponent: USFlag,
      primaryAction: 'Open USA Calculator'
    },
    {
      id: 'uk',
      country: 'United Kingdom',
      title: 'UK Take-Home & PAYE Calculator Suite',
      description: 'The complete UK salary calculator suite matching TheSalaryCalculator.co.uk. Features 9 dedicated calculators for Take-Home Pay, Hourly Wage, Maternity/Sick Leave, Required Salary, Two Jobs, Pro-Rata, Two Salaries, Mortgages, and Debt Consolidation.',
      features: ['HMRC 2026/27 & 2025/26 PAYE Legislation', 'Scotland & England/Wales/NI Tax Bands', 'Employee Class 1 NI & Student Loans (Plans 1-5)', '9 Complete Specialised Calculators'],
      link: '/tax-calculator/uk',
      badge: 'Live • HMRC PAYE Suite',
      badgeColor: '#10B981',
      FlagComponent: UKFlag,
      primaryAction: 'Open UK Suite'
    },
    {
      id: 'germany',
      country: 'Germany',
      title: 'Germany Gross to Net Salary Calculator',
      description: 'Official German Brutto-Netto-Rechner matching statutory BMF 2026/2025 wage tax tables, solidarity surcharge, church tax, and all four statutory social security contributions across all 16 Federal States.',
      features: ['Tax Classes I through VI (Steuerklassen)', 'All 16 German Bundesländer & Church Rates', 'Health, Pension, Care & Unemployment Insurance', 'Statutory 2026 Basic Allowances (Grundfreibetrag)'],
      link: '/tax-calculator/germany',
      badge: 'Live • BMF & SGB Compliant',
      badgeColor: '#D4A017',
      FlagComponent: GermanyFlag,
      primaryAction: 'Open Germany Calculator'
    },
    {
      id: 'saudi-arabia',
      country: 'Saudi Arabia',
      title: 'Saudi Arabia Salary & Tax Calculator (UKS)',
      description: 'Official 2026/2025 Saudi payroll calculator matching GOSI social insurance (9%), SANED unemployment scheme (0.75%), and 0% personal income tax regime for nationals and expatriates.',
      features: ['0% Personal Income Tax Regime', 'GOSI Social Insurance & SANED Scheme', 'Resident (Saudi) vs. Non-Resident (Expat) Rules', 'Complete 7-Period Multi-Column Breakdown'],
      link: '/tax-calculator/saudi-arabia',
      badge: 'Live • GOSI & SANED Compliant',
      badgeColor: '#10B981',
      FlagComponent: KSAFlag,
      primaryAction: 'Open Saudi Calculator'
    },
    {
      id: 'uae',
      country: 'United Arab Emirates',
      title: 'UAE Salary & Payroll Tax Calculator',
      description: 'Official 2026/2025 UAE payroll calculator matching iCalculator™ AE benchmarks, GPSSA pension, MOHRE labour law, and 0% personal income tax regime across all 7 Emirates.',
      features: ['0% Personal Income Tax on Salaries', '7-Period Multi-Column Salary Breakdown', 'GPSSA Social Security & Employer Contributions (8.25%)', 'Benchmark & Standard Tax-Free Calculations'],
      link: '/tax-calculator/uae',
      badge: 'Live • MOHRE & GPSSA Compliant',
      badgeColor: '#10B981',
      FlagComponent: UAEFlag,
      primaryAction: 'Open UAE Calculator'
    }
  ];

  const upcomingCalculators = [
    {
      country: 'Canada',
      code: 'ca',
      title: 'Canada Income Tax & RRSP Calculator',
      description: 'Federal CRA tax brackets combined with provincial income tax (Ontario, British Columbia, Alberta, Quebec) and CPP/EI contributions.',
      badge: 'Planned',
      FlagComponent: CanadaFlag
    },
    {
      country: 'Australia',
      code: 'au',
      title: 'Australia Tax & Superannuation Calculator',
      description: 'ATO resident and non-resident tax rates, 2% Medicare levy, low income tax offsets, and 11.5% compulsory superannuation guarantee.',
      badge: 'Planned',
      FlagComponent: AustraliaFlag
    }
  ];

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Top Breadcrumb Navigation */}
      <div style={{ backgroundColor: '#0F172A', borderBottom: '1px solid rgba(212, 160, 23, 0.25)', padding: '14px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#94A3B8' }}>
            <Link to="/" style={{ color: '#D4A017', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#F1F5F9', fontWeight: 600 }}>Global Tax Calculators Directory</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <Link 
              to="/tax-calculator/pakistan"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                color: '#FFFFFF',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: '1px solid rgba(255,255,255,0.12)'
              }}
            >
              <PKFlag size={18} />
              <span>Pakistan</span>
            </Link>
            <Link 
              to="/tax-calculator/usa"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                color: '#FFFFFF',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: '1px solid rgba(255,255,255,0.12)'
              }}
            >
              <USFlag size={18} />
              <span>USA</span>
            </Link>
            <Link 
              to="/tax-calculator/uk"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                color: '#FFFFFF',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: '1px solid rgba(255,255,255,0.12)'
              }}
            >
              <UKFlag size={18} />
              <span>UK</span>
            </Link>
            <Link 
              to="/tax-calculator/germany"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                color: '#FFFFFF',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: '1px solid rgba(255,255,255,0.12)'
              }}
            >
              <GermanyFlag size={18} />
              <span>Germany</span>
            </Link>
            <Link 
              to="/tax-calculator/saudi-arabia"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                color: '#FFFFFF',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: '1px solid rgba(255,255,255,0.12)'
              }}
            >
              <KSAFlag size={18} />
              <span>Saudi Arabia (UKS)</span>
            </Link>
            <Link 
              to="/tax-calculator/uae"
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                color: '#6EE7B7',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: '1px solid rgba(16, 185, 129, 0.35)'
              }}
            >
              <UAEFlag size={18} />
              <span>UAE</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: '#FFFFFF',
        padding: '50px 0 60px',
        borderBottom: '3px solid #D4A017'
      }}>
        <div className="container" style={{ maxWidth: '1140px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(212, 160, 23, 0.12)',
            border: '1px solid #D4A017',
            padding: '6px 16px',
            borderRadius: '30px',
            fontSize: '0.82rem',
            fontWeight: 700,
            color: '#D4A017',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '18px'
          }}>
            <Globe2 size={16} color="#D4A017" />
            Kinzei Global Tax Computation Network
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '16px',
            color: '#FFFFFF'
          }}>
            International Tax & PAYE Calculators Hub
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: '#CBD5E1',
            maxWidth: '780px',
            margin: '0 auto 28px',
            lineHeight: 1.6
          }}>
            Mathematically audited, statutory-compliant tax models designed for expatriates, multinational businesses, cross-border contractors, and personal financial planning. Select your jurisdiction below for instant, zero-latency calculations.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '0.88rem' }}>
              <ShieldCheck size={18} color="#D4A017" />
              <span>Verified Statutory Formulas</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '0.88rem' }}>
              <Sparkles size={18} color="#D4A017" />
              <span>Instant Real-Time Execution</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '0.88rem' }}>
              <TrendingUp size={18} color="#D4A017" />
              <span>Cross-Border Tax Advisory Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Active Calculators Grid */}
      <section className="container" style={{ maxWidth: '1140px', marginTop: '-30px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '50px'
        }}>
          {activeCalculators.map((calc) => {
            const Flag = calc.FlagComponent;
            return (
              <div 
                key={calc.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 10px 25px rgba(15, 23, 42, 0.08)',
                  padding: '30px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Top Accent bar */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  backgroundColor: calc.badgeColor
                }} />

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Flag size={32} />
                      <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {calc.country}
                      </span>
                    </div>
                    <span style={{
                      backgroundColor: `${calc.badgeColor}15`,
                      color: calc.badgeColor,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '20px',
                      border: `1px solid ${calc.badgeColor}40`
                    }}>
                      {calc.badge}
                    </span>
                  </div>

                  <h2 style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    marginBottom: '12px',
                    lineHeight: 1.3
                  }}>
                    {calc.title}
                  </h2>

                  <p style={{
                    fontSize: '0.92rem',
                    color: '#475569',
                    lineHeight: 1.55,
                    marginBottom: '20px'
                  }}>
                    {calc.description}
                  </p>

                  <div style={{
                    backgroundColor: '#F8FAFC',
                    borderRadius: '10px',
                    padding: '14px 16px',
                    marginBottom: '24px',
                    border: '1px solid #F1F5F9'
                  }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
                      Key Features
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {calc.features.map((feat, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#334155' }}>
                          <CheckCircle2 size={14} color="#D4A017" style={{ flexShrink: 0 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to={calc.link}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    backgroundColor: '#0F172A',
                    color: '#FFFFFF',
                    padding: '14px 20px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    border: '1px solid #1E293B',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.12)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#D4A017';
                    e.currentTarget.style.color = '#0F172A';
                    e.currentTarget.style.borderColor = '#D4A017';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#0F172A';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#1E293B';
                  }}
                >
                  <span>{calc.primaryAction}</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Upcoming International Calculators */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E2E8F0',
          padding: '36px 30px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)',
          marginBottom: '40px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#64748B', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                <Clock size={15} color="#D4A017" />
                Global Expansion Roadmap
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                Upcoming International Tax Engines
              </h3>
            </div>
            <button
              onClick={onOpenSchedule}
              style={{
                backgroundColor: 'transparent',
                border: '1.5px solid #D4A017',
                color: '#B4820E',
                padding: '8px 18px',
                borderRadius: '8px',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              Request Custom Jurisdiction
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '18px'
          }}>
            {upcomingCalculators.map((up, i) => {
              const UpFlag = up.FlagComponent;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#F8FAFC',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                    padding: '18px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <UpFlag size={24} />
                        <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A' }}>{up.country}</span>
                      </div>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        backgroundColor: '#E2E8F0',
                        color: '#475569',
                        padding: '2px 8px',
                        borderRadius: '12px'
                      }}>
                        {up.badge}
                      </span>
                    </div>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                      {up.title}
                    </h4>
                    <p style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                      {up.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global Advisory CTA Banner */}
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
              Kinzei Cross-Border Tax Practice
            </span>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px', lineHeight: 1.3 }}>
              Need Professional Guidance for Multi-Jurisdiction Compliance?
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#CBD5E1', margin: 0, lineHeight: 1.6 }}>
              Whether you are an expatriate moving between the UK, US, and Pakistan, or a corporation establishing foreign subsidiaries, our chartered tax advisers structure optimal tax efficiency and ensure full statutory compliance.
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
            <span>Book Tax Consultation</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
