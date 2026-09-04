import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Calculator, 
  Info, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  Landmark,
  Search,
  CheckCircle2,
  Sparkles,
  Receipt,
  FileText,
  CreditCard,
  Percent, 
  Coins, 
  Scale,
  Layers
} from 'lucide-react';
import { USFlag, UKFlag, PKFlag } from '../components/CountryFlags';
import { 
  calculateUSTaxes, 
  POPULAR_LOCATIONS, 
  STANDARD_DEDUCTIONS_2025,
  FEDERAL_BRACKETS_2025,
  ALL_STATES_CARDS_DATA,
  STATE_TAX_DATA
} from '../data/usTaxData';

// Memoized individual state card to prevent re-render thrashing during calculator typing
const StateCardItem = React.memo(function StateCardItem({ state, isCurrentState, onSelect }) {
  return (
    <div
      className="interactive-card"
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: '320px',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        padding: '30px 24px 26px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: isCurrentState 
          ? '0 12px 30px rgba(212, 160, 23, 0.25)' 
          : '0 10px 30px -4px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.02)',
        border: isCurrentState ? '2px solid #D4A017' : '1px solid #E2E8F0',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.25s ease'
      }}
    >
      {/* Top Gold Accent Line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3.5px',
        background: 'linear-gradient(90deg, #E5B338 0%, #D4A017 50%, #B8860B 100%)'
      }} />

      {/* Icon Avatar Box */}
      <div 
        style={{
          width: '62px',
          height: '62px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
          border: '1.5px solid #D4A017',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px',
          color: '#D4A017',
          boxShadow: '0 6px 18px rgba(212, 160, 23, 0.16)'
        }}
      >
        <Landmark size={26} strokeWidth={2.2} />
      </div>

      {/* State Tag Badge */}
      <span style={{
        fontSize: '0.74rem',
        fontWeight: 800,
        color: state.category === 'none' ? '#10B981' : '#D4A017',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: '8px',
        backgroundColor: state.category === 'none' ? '#ECFDF5' : '#FFFBEB',
        padding: '3px 12px',
        borderRadius: '12px',
        border: `1px solid ${state.category === 'none' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(212, 160, 23, 0.3)'}`
      }}>
        {state.code} • {state.rateSummary}
      </span>

      {/* Card Title */}
      <h3 style={{
        fontSize: '1.18rem',
        fontWeight: 800,
        color: '#0F172A',
        marginBottom: '8px',
        lineHeight: 1.3
      }}>
        {state.name} Tax Calculator
      </h3>

      {/* Tagline */}
      <p style={{
        fontSize: '0.86rem',
        color: '#475569',
        lineHeight: 1.5,
        marginBottom: '16px',
        minHeight: '42px'
      }}>
        {state.tagline}
      </p>

      {/* Standard Deduction Info Pill */}
      <div style={{
        fontSize: '0.78rem',
        color: '#64748B',
        backgroundColor: '#F8FAFC',
        padding: '6px 12px',
        borderRadius: '8px',
        border: '1px solid #E2E8F0',
        width: '100%',
        marginBottom: '20px',
        fontWeight: 600,
        boxSizing: 'border-box'
      }}>
        Deduction: <strong style={{ color: '#0F172A' }}>{state.deductionInfo}</strong>
      </div>

      {/* Action Button */}
      <button
        type="button"
        onClick={() => onSelect(state)}
        style={{
          marginTop: 'auto',
          width: '100%',
          padding: '11px 16px',
          borderRadius: '10px',
          backgroundColor: isCurrentState ? '#8C6B2F' : '#FFFFFF',
          color: isCurrentState ? '#FFFFFF' : '#8C6B2F',
          border: '1.5px solid #8C6B2F',
          fontWeight: 800,
          fontSize: '0.88rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          transition: 'all 0.2s ease',
          boxShadow: isCurrentState ? '0 4px 12px rgba(140, 107, 47, 0.3)' : 'none'
        }}
        onMouseEnter={(e) => {
          if (!isCurrentState) {
            e.currentTarget.style.backgroundColor = '#8C6B2F';
            e.currentTarget.style.color = '#FFFFFF';
          }
        }}
        onMouseLeave={(e) => {
          if (!isCurrentState) {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.color = '#8C6B2F';
          }
        }}
      >
        <span>{isCurrentState ? 'Currently Selected' : `Calculate ${state.name} Taxes`}</span>
        <ArrowRight size={15} />
      </button>
    </div>
  );
});

// Currency & percentage formatting helpers
const formatCurrency = (val) => {
  if (val === undefined || val === null || isNaN(val)) return '$0';
  return '$' + Math.round(val).toLocaleString('en-US');
};

const formatPercent = (val) => {
  if (val === undefined || val === null || isNaN(val)) return '0.00%';
  return (val * 100).toFixed(2) + '%';
};

// SVG Pie Slice Path Generator
function getPieSlicePath(cx, cy, r, startAngle, endAngle) {
  // Guard for near full circle to avoid SVG arc glitch
  if (endAngle - startAngle >= 2 * Math.PI - 0.001) {
    return `M ${cx - r} ${cy} A ${r} ${r} 0 1 0 ${cx + r} ${cy} A ${r} ${r} 0 1 0 ${cx - r} ${cy} Z`;
  }
  const x1 = cx + r * Math.cos(startAngle);
  const y1 = cy + r * Math.sin(startAngle);
  const x2 = cx + r * Math.cos(endAngle);
  const y2 = cy + r * Math.sin(endAngle);
  const largeArc = (endAngle - startAngle) > Math.PI ? 1 : 0;
  return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
}

export default function USTaxCalculator({ onOpenSchedule }) {
  const navigate = useNavigate();
  const calcTopRef = useRef(null);

  // Form Inputs
  const [householdIncome, setHouseholdIncome] = useState(50000);
  const [householdIncomeStr, setHouseholdIncomeStr] = useState('$50,000');
  
  const [location, setLocation] = useState('Columbus, OH');
  const [locationSearch, setLocationSearch] = useState('Columbus, OH');
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const locationRef = useRef(null);

  const [filingStatus, setFilingStatus] = useState('SINGLE');
  const [deductionType, setDeductionType] = useState('STANDARD');
  const [itemizedDeduction, setItemizedDeduction] = useState(0);
  const [itemizedDeductionStr, setItemizedDeductionStr] = useState('$0');

  // Retirement Contributions
  const [contribution401k, setContribution401k] = useState(0);
  const [contribution401kStr, setContribution401kStr] = useState('$0');
  const [contributionIra, setContributionIra] = useState(0);
  const [contributionIraStr, setContributionIraStr] = useState('$0');

  // Advanced Options
  const [taxCredits, setTaxCredits] = useState(0);
  const [taxCreditsStr, setTaxCreditsStr] = useState('$0');
  const [dependentDeductions, setDependentDeductions] = useState(0);
  const [otherPreTax, setOtherPreTax] = useState(0);
  const [otherPreTaxStr, setOtherPreTaxStr] = useState('$0');

  // Interactive UI State
  const [rateMode, setRateMode] = useState('EFFECTIVE'); // 'EFFECTIVE' matches SmartAsset screenshot default
  const [isCalculating, setIsCalculating] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);

  // State cards filter and search
  const [stateSearchTerm, setStateSearchTerm] = useState('');
  const [selectedStateCategory, setSelectedStateCategory] = useState('all'); // 'all' | 'none' | 'flat' | 'progressive'
  const [toastMessage, setToastMessage] = useState('');

  // Results State
  const [results, setResults] = useState(() => calculateUSTaxes({
    grossHouseholdIncome: 50000,
    location: 'Columbus, OH',
    filingStatus: 'SINGLE',
    deductionMethod: 'STANDARD'
  }));

  // Recompute tax calculation
  const handleCalculate = () => {
    setIsCalculating(true);
    const res = calculateUSTaxes({
      grossHouseholdIncome: householdIncome,
      location,
      filingStatus,
      deductionMethod: deductionType,
      itemizedDeductionAmount: itemizedDeduction,
      contribution401k,
      contributionIra,
      taxCredits,
      dependentDeductions,
      otherPreTaxDeductions: otherPreTax
    });
    setResults(res);
    setTimeout(() => setIsCalculating(false), 120);
  };

  // Recompute whenever relevant inputs update
  useEffect(() => {
    handleCalculate();
  }, [
    householdIncome,
    location,
    filingStatus,
    deductionType,
    itemizedDeduction,
    contribution401k,
    contributionIra,
    taxCredits,
    dependentDeductions,
    otherPreTax
  ]);

  // Click outside location combobox dropdown
  useEffect(() => {
    function handleClickOutside(e) {
      if (locationRef.current && !locationRef.current.contains(e.target)) {
        setLocationDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filtered locations for input combobox (memoized for instantaneous keystrokes)
  const filteredLocations = useMemo(() => {
    const search = locationSearch.toLowerCase().trim();
    if (!search) return POPULAR_LOCATIONS.slice(0, 16);
    return POPULAR_LOCATIONS.filter(item => item.label.toLowerCase().includes(search));
  }, [locationSearch]);

  // Parse dollar string inputs
  const handleCurrencyInput = (valStr, setVal, setStr) => {
    const rawNum = valStr.replace(/[^0-9]/g, '');
    const num = rawNum ? parseInt(rawNum, 10) : 0;
    setVal(num);
    setStr(num > 0 ? '$' + num.toLocaleString('en-US') : '$0');
  };

  // Select state from card directory (memoized callback)
  const handleSelectStateCard = useCallback((stateCard) => {
    const targetLoc = stateCard.defaultCity || `${stateCard.name}, ${stateCard.code}`;
    setLocation(targetLoc);
    setLocationSearch(targetLoc);
    setToastMessage(`Loaded ${stateCard.name} (${stateCard.rateSummary}) into calculator`);
    setTimeout(() => setToastMessage(''), 3500);

    // Smooth scroll to calculator workspace
    if (calcTopRef.current) {
      calcTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Tooltip content dictionary
  const tooltipContent = {
    grossHouseholdIncome: 'Your total combined annual household income before any taxes or deductions are applied.',
    location: 'Enter your city and state or select your state to account for state and local income tax rates.',
    filingStatusType: 'Your tax filing status determined by your marital status and household composition as of December 31st.',
    deductionMethodType: 'Standard deduction provides a fixed dollar reduction in taxable income. Itemized deduction allows claiming qualifying expenses.',
    contributionTo401k: 'Pre-tax employee contributions to employer-sponsored 401(k) or 403(b) retirement plans (up to $23,500 in 2025).',
    contributionToTraditionalIra: 'Pre-tax contributions to a Traditional Individual Retirement Account (up to $7,000 in 2025).',
    federalTaxCredits: 'Direct dollar-for-dollar reductions of your tax liability (e.g. child tax credits, clean energy credits).',
    stateDependentDeductions: 'Number of qualifying dependents claimed on your state and federal return.',
    federalOtherPreTaxDeductions: 'Other pre-tax deductions including health savings accounts (HSA), flexible spending accounts (FSA), and commuter benefits.',
    incomeTaxTotal: 'The combined total of your Federal Income Tax and FICA (Social Security & Medicare) payroll taxes.',
    incomeTaxBreakdown: 'Detailed comparison of each tax type showing Marginal rate (bracket for your next dollar) versus Effective rate (actual average percentage of your gross income).',
    incomeTaxTakeHome: 'Your estimated net disposable income remaining after all federal, payroll, state, and local taxes and pre-tax retirement savings are deducted.'
  };

  // Current Standard Deduction Amount
  const currentStdDeduction = STANDARD_DEDUCTIONS_2025[filingStatus] || 15750;
  const statusLabels = {
    SINGLE: 'Single',
    MARRIED_FILING_JOINTLY: 'Married, Filing Jointly',
    HEAD_OF_HOUSEHOLD: 'Head of Household',
    MARRIED_FILING_SEPARATELY: 'Married Filing Separately'
  };

  // Solid Pie Chart Proportions
  const totalGross = results.gross || 1;
  const taxesPct = Math.min(100, Math.max(0, (results.totalTaxes / totalGross) * 100));
  const retPct = Math.min(100, Math.max(0, (results.totalRetirement / totalGross) * 100));
  const takeHomePct = Math.max(0, 100 - taxesPct - retPct);

  // Compute angles for solid pie slices (starting at 12 o'clock = -Math.PI / 2)
  const pieRadius = 85;
  const pieCenter = 100;
  const angle0 = -Math.PI / 2;
  const angle1 = angle0 + (taxesPct / 100) * 2 * Math.PI;
  const angle2 = angle1 + (retPct / 100) * 2 * Math.PI;
  const angle3 = angle2 + (takeHomePct / 100) * 2 * Math.PI;

  const taxesSlicePath = taxesPct > 0 ? getPieSlicePath(pieCenter, pieCenter, pieRadius, angle0, angle1) : null;
  const retSlicePath = retPct > 0 ? getPieSlicePath(pieCenter, pieCenter, pieRadius, angle1, angle2) : null;
  const takeHomeSlicePath = takeHomePct > 0 ? getPieSlicePath(pieCenter, pieCenter, pieRadius, angle2, angle3) : null;

  // Filter state cards for directory (memoized for fluid performance)
  const filteredStateCards = useMemo(() => {
    const search = stateSearchTerm.toLowerCase().trim();
    return ALL_STATES_CARDS_DATA.filter((state) => {
      const matchesSearch = 
        !search ||
        state.name.toLowerCase().includes(search) ||
        state.code.toLowerCase().includes(search) ||
        state.rateSummary.toLowerCase().includes(search);

      const matchesCategory = 
        selectedStateCategory === 'all' || 
        state.category === selectedStateCategory;

      return matchesSearch && matchesCategory;
    });
  }, [stateSearchTerm, selectedStateCategory]);

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', color: '#0F172A', paddingBottom: '90px' }}>
      
      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          backgroundColor: '#0F172A',
          color: '#FFFFFF',
          padding: '14px 22px',
          borderRadius: '10px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '0.92rem',
          fontWeight: 700,
          border: '1px solid #D4A017',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <CheckCircle2 size={18} color="#D4A017" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* TOP HEADER SECTION */}
      <div className="container" ref={calcTopRef} style={{ paddingTop: '28px' }}>
        
        {/* INTERNATIONAL CALCULATOR SWITCHER TABS */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          backgroundColor: '#0F172A',
          padding: '10px 16px',
          borderRadius: '10px',
          marginBottom: '20px',
          border: '1px solid rgba(212, 160, 23, 0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <div
              style={{
                backgroundColor: '#D4A017',
                color: '#0F172A',
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 6px rgba(212, 160, 23, 0.3)'
              }}
            >
              <USFlag size={18} />
              <span>USA Calculator (Active)</span>
            </div>

            <Link
              to="/tax-calculator/uk"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                color: '#FFFFFF',
                padding: '6px 14px',
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
              <span>UK Suite (9 Calculators)</span>
            </Link>

            <Link
              to="/tax-calculator/pakistan"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                color: '#FFFFFF',
                padding: '6px 14px',
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
          </div>

          <Link
            to="/tax-calculators"
            style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              color: '#D4A017',
              padding: '6px 12px',
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
            <Layers size={14} />
            <span>All Global Calculators Directory</span>
          </Link>
        </div>

        {/* BREADCRUMB */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#64748B', marginBottom: '8px', fontWeight: 600 }}>
            <Link to="/tax-calculators" style={{ color: '#8C6B2F', textDecoration: 'none', fontWeight: 700 }}>
              &lt; Global Calculators Hub
            </Link>
            <span>/</span>
            <span>USA Federal & State Tax Estimator</span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(1.9rem, 3.2vw, 2.7rem)', 
            fontWeight: 900, 
            color: '#0F172A',
            letterSpacing: '-0.5px',
            lineHeight: 1.25,
            margin: '0 0 14px 0',
            fontFamily: 'var(--font-heading)'
          }}>
            Federal Income Tax Calculator – Estimator for 2025–2026 Taxes
          </h1>

          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            border: '1px solid #E2E8F0',
            padding: '18px 22px',
            maxWidth: '1020px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
          }}>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
              Overview of Federal Income Taxes
            </div>
            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
              Income in America is taxed by the federal government, most state governments and many local governments. The federal income tax system is progressive, so the rate of taxation increases as income increases. Marginal tax rates range from <strong>10% to 37%</strong>.
            </p>
          </div>
        </div>

        {/* 2-COLUMN CALCULATOR WORKSPACE */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 430px) 1fr',
          gap: '30px',
          alignItems: 'start'
        }} className="us-calc-grid">
          
          {/* ================= LEFT COLUMN: FORM INPUTS ================= */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* CARD 1: TAX DETAILS */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              padding: '24px 22px',
              boxShadow: '0 4px 18px rgba(0,0,0,0.03)'
            }}>
              <div style={{
                fontSize: '1.08rem',
                fontWeight: 800,
                color: '#0F172A',
                borderBottom: '1.5px solid #F1F5F9',
                paddingBottom: '12px',
                marginBottom: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span>Tax Details</span>
                <span style={{ fontSize: '0.75rem', color: '#8C6B2F', backgroundColor: '#FEF3C7', padding: '3px 9px', borderRadius: '12px', fontWeight: 700 }}>
                  Tax Year 2025
                </span>
              </div>

              {/* Household Income */}
              <div style={{ marginBottom: '18px', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <label htmlFor="householdIncome" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>
                    Household Income
                  </label>
                  <button 
                    type="button" 
                    onClick={() => setActiveTooltip(activeTooltip === 'grossHouseholdIncome' ? null : 'grossHouseholdIncome')}
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#94A3B8', display: 'flex' }}
                    aria-label="Household Income Info"
                  >
                    <Info size={15} />
                  </button>
                </div>
                {activeTooltip === 'grossHouseholdIncome' && (
                  <div style={{ backgroundColor: '#0F172A', color: '#F8FAFC', fontSize: '0.78rem', padding: '8px 12px', borderRadius: '8px', marginBottom: '8px' }}>
                    {tooltipContent.grossHouseholdIncome}
                  </div>
                )}
                <input
                  id="householdIncome"
                  type="text"
                  inputMode="numeric"
                  value={householdIncomeStr}
                  onChange={(e) => handleCurrencyInput(e.target.value, setHouseholdIncome, setHouseholdIncomeStr)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '1.02rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#8C6B2F'}
                  onBlur={(e) => e.target.style.borderColor = '#CBD5E1'}
                />
              </div>

              {/* Location (Combobox) */}
              <div style={{ marginBottom: '18px', position: 'relative' }} ref={locationRef}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <label htmlFor="locationInput" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>
                    Location
                  </label>
                  <button 
                    type="button" 
                    onClick={() => setActiveTooltip(activeTooltip === 'location' ? null : 'location')}
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#94A3B8', display: 'flex' }}
                    aria-label="Location Info"
                  >
                    <Info size={15} />
                  </button>
                </div>
                {activeTooltip === 'location' && (
                  <div style={{ backgroundColor: '#0F172A', color: '#F8FAFC', fontSize: '0.78rem', padding: '8px 12px', borderRadius: '8px', marginBottom: '8px' }}>
                    {tooltipContent.location}
                  </div>
                )}
                <input
                  id="locationInput"
                  type="text"
                  value={locationSearch}
                  placeholder="City, State (e.g. Columbus, OH)"
                  onChange={(e) => {
                    setLocationSearch(e.target.value);
                    setLocationDropdownOpen(true);
                  }}
                  onFocus={() => setLocationDropdownOpen(true)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.98rem',
                    fontWeight: 600,
                    color: '#0F172A',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />

                {/* Autocomplete dropdown */}
                {locationDropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: '#FFFFFF',
                    borderRadius: '10px',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.18)',
                    border: '1.5px solid #E2E8F0',
                    maxHeight: '220px',
                    overflowY: 'auto',
                    zIndex: 100,
                    marginTop: '4px'
                  }}>
                    {filteredLocations.slice(0, 16).map((loc) => (
                      <div
                        key={loc.label}
                        onClick={() => {
                          setLocation(loc.label);
                          setLocationSearch(loc.label);
                          setLocationDropdownOpen(false);
                        }}
                        style={{
                          padding: '10px 14px',
                          fontSize: '0.9rem',
                          fontWeight: location === loc.label ? 700 : 500,
                          backgroundColor: location === loc.label ? '#FEF3C7' : '#FFFFFF',
                          color: location === loc.label ? '#8C6B2F' : '#1E293B',
                          cursor: 'pointer',
                          borderBottom: '1px solid #F1F5F9',
                          transition: 'background-color 0.15s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F8FAFC'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = location === loc.label ? '#FEF3C7' : '#FFFFFF'}
                      >
                        {loc.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Filing Status */}
              <div style={{ marginBottom: '18px', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <label htmlFor="filingStatusSelect" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>
                    Filing Status
                  </label>
                  <button 
                    type="button" 
                    onClick={() => setActiveTooltip(activeTooltip === 'filingStatusType' ? null : 'filingStatusType')}
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#94A3B8', display: 'flex' }}
                    aria-label="Filing Status Info"
                  >
                    <Info size={15} />
                  </button>
                </div>
                {activeTooltip === 'filingStatusType' && (
                  <div style={{ backgroundColor: '#0F172A', color: '#F8FAFC', fontSize: '0.78rem', padding: '8px 12px', borderRadius: '8px', marginBottom: '8px' }}>
                    {tooltipContent.filingStatusType}
                  </div>
                )}
                <div style={{ position: 'relative' }}>
                  <select
                    id="filingStatusSelect"
                    value={filingStatus}
                    onChange={(e) => setFilingStatus(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 36px 11px 14px',
                      borderRadius: '10px',
                      border: '1.5px solid #CBD5E1',
                      fontSize: '0.98rem',
                      fontWeight: 600,
                      color: '#0F172A',
                      backgroundColor: '#FFFFFF',
                      appearance: 'none',
                      outline: 'none',
                      cursor: 'pointer',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="SINGLE">Single</option>
                    <option value="MARRIED_FILING_JOINTLY">Married, Filing Jointly</option>
                    <option value="HEAD_OF_HOUSEHOLD">Head of Household</option>
                    <option value="MARRIED_FILING_SEPARATELY">Married Filing Separately</option>
                  </select>
                  <ChevronDown size={18} color="#64748B" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                </div>
              </div>

              {/* Deduction Type */}
              <div style={{ marginBottom: '8px', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <label htmlFor="deductionSelect" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>
                    Deduction Type
                  </label>
                  <button 
                    type="button" 
                    onClick={() => setActiveTooltip(activeTooltip === 'deductionMethodType' ? null : 'deductionMethodType')}
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#94A3B8', display: 'flex' }}
                    aria-label="Deduction Type Info"
                  >
                    <Info size={15} />
                  </button>
                </div>
                {activeTooltip === 'deductionMethodType' && (
                  <div style={{ backgroundColor: '#0F172A', color: '#F8FAFC', fontSize: '0.78rem', padding: '8px 12px', borderRadius: '8px', marginBottom: '8px' }}>
                    {tooltipContent.deductionMethodType}
                  </div>
                )}
                <div style={{ position: 'relative' }}>
                  <select
                    id="deductionSelect"
                    value={deductionType}
                    onChange={(e) => setDeductionType(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 36px 11px 14px',
                      borderRadius: '10px',
                      border: '1.5px solid #CBD5E1',
                      fontSize: '0.98rem',
                      fontWeight: 600,
                      color: '#0F172A',
                      backgroundColor: '#FFFFFF',
                      appearance: 'none',
                      outline: 'none',
                      cursor: 'pointer',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="STANDARD">Standard Deduction</option>
                    <option value="ITEMIZED">Take Itemized Deductions</option>
                  </select>
                  <ChevronDown size={18} color="#64748B" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                </div>

                {/* Subtext description matching SmartAsset */}
                {deductionType === 'STANDARD' ? (
                  <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '8px', lineHeight: 1.4 }}>
                    You're filing as '{statusLabels[filingStatus]}', which means your standard deduction is <strong>{formatCurrency(currentStdDeduction)}</strong>.
                  </div>
                ) : (
                  <div style={{ marginTop: '12px' }}>
                    <label htmlFor="itemizedInput" style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                      Itemized Deduction Amount
                    </label>
                    <input
                      id="itemizedInput"
                      type="text"
                      inputMode="numeric"
                      value={itemizedDeductionStr}
                      onChange={(e) => handleCurrencyInput(e.target.value, setItemizedDeduction, setItemizedDeductionStr)}
                      style={{
                        width: '100%',
                        padding: '9px 12px',
                        borderRadius: '8px',
                        border: '1.5px solid #CBD5E1',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#0F172A',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                )}
              </div>

            </div>

            {/* CARD 2: RETIREMENT CONTRIBUTIONS */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              padding: '24px 22px',
              boxShadow: '0 4px 18px rgba(0,0,0,0.03)'
            }}>
              <div style={{
                fontSize: '1.08rem',
                fontWeight: 800,
                color: '#0F172A',
                borderBottom: '1.5px solid #F1F5F9',
                paddingBottom: '12px',
                marginBottom: '18px'
              }}>
                Retirement Account Contributions
              </div>

              {/* 401(k) */}
              <div style={{ marginBottom: '16px', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <label htmlFor="input401k" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>
                    401(k) Contribution
                  </label>
                  <button 
                    type="button" 
                    onClick={() => setActiveTooltip(activeTooltip === 'contributionTo401k' ? null : 'contributionTo401k')}
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#94A3B8', display: 'flex' }}
                    aria-label="401k Info"
                  >
                    <Info size={15} />
                  </button>
                </div>
                {activeTooltip === 'contributionTo401k' && (
                  <div style={{ backgroundColor: '#0F172A', color: '#F8FAFC', fontSize: '0.78rem', padding: '8px 12px', borderRadius: '8px', marginBottom: '8px' }}>
                    {tooltipContent.contributionTo401k}
                  </div>
                )}
                <input
                  id="input401k"
                  type="text"
                  inputMode="numeric"
                  value={contribution401kStr}
                  onChange={(e) => handleCurrencyInput(e.target.value, setContribution401k, setContribution401kStr)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.98rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Traditional IRA */}
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <label htmlFor="inputIra" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>
                    Traditional IRA Contribution
                  </label>
                  <button 
                    type="button" 
                    onClick={() => setActiveTooltip(activeTooltip === 'contributionToTraditionalIra' ? null : 'contributionToTraditionalIra')}
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#94A3B8', display: 'flex' }}
                    aria-label="IRA Info"
                  >
                    <Info size={15} />
                  </button>
                </div>
                {activeTooltip === 'contributionToTraditionalIra' && (
                  <div style={{ backgroundColor: '#0F172A', color: '#F8FAFC', fontSize: '0.78rem', padding: '8px 12px', borderRadius: '8px', marginBottom: '8px' }}>
                    {tooltipContent.contributionToTraditionalIra}
                  </div>
                )}
                <input
                  id="inputIra"
                  type="text"
                  inputMode="numeric"
                  value={contributionIraStr}
                  onChange={(e) => handleCurrencyInput(e.target.value, setContributionIra, setContributionIraStr)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.98rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

            </div>

            {/* CARD 3: ADVANCED OPTIONS */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              padding: '24px 22px',
              boxShadow: '0 4px 18px rgba(0,0,0,0.03)'
            }}>
              <div style={{
                fontSize: '1.08rem',
                fontWeight: 800,
                color: '#0F172A',
                borderBottom: '1.5px solid #F1F5F9',
                paddingBottom: '12px',
                marginBottom: '18px'
              }}>
                Advanced Options
              </div>

              {/* Tax Credits */}
              <div style={{ marginBottom: '16px', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <label htmlFor="inputCredits" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>
                    Tax Credits
                  </label>
                  <button 
                    type="button" 
                    onClick={() => setActiveTooltip(activeTooltip === 'federalTaxCredits' ? null : 'federalTaxCredits')}
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#94A3B8', display: 'flex' }}
                    aria-label="Tax Credits Info"
                  >
                    <Info size={15} />
                  </button>
                </div>
                {activeTooltip === 'federalTaxCredits' && (
                  <div style={{ backgroundColor: '#0F172A', color: '#F8FAFC', fontSize: '0.78rem', padding: '8px 12px', borderRadius: '8px', marginBottom: '8px' }}>
                    {tooltipContent.federalTaxCredits}
                  </div>
                )}
                <input
                  id="inputCredits"
                  type="text"
                  inputMode="numeric"
                  value={taxCreditsStr}
                  onChange={(e) => handleCurrencyInput(e.target.value, setTaxCredits, setTaxCreditsStr)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.98rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Dependent Deductions */}
              <div style={{ marginBottom: '16px', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <label htmlFor="inputDependents" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>
                    Dependent Deductions
                  </label>
                  <button 
                    type="button" 
                    onClick={() => setActiveTooltip(activeTooltip === 'stateDependentDeductions' ? null : 'stateDependentDeductions')}
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#94A3B8', display: 'flex' }}
                    aria-label="Dependent Info"
                  >
                    <Info size={15} />
                  </button>
                </div>
                {activeTooltip === 'stateDependentDeductions' && (
                  <div style={{ backgroundColor: '#0F172A', color: '#F8FAFC', fontSize: '0.78rem', padding: '8px 12px', borderRadius: '8px', marginBottom: '8px' }}>
                    {tooltipContent.stateDependentDeductions}
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setDependentDeductions(Math.max(0, dependentDeductions - 1))}
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '8px',
                      border: '1.5px solid #CBD5E1',
                      backgroundColor: '#F8FAFC',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    -
                  </button>
                  <input
                    id="inputDependents"
                    type="number"
                    min="0"
                    max="12"
                    value={dependentDeductions}
                    onChange={(e) => setDependentDeductions(Math.max(0, parseInt(e.target.value, 10) || 0))}
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      padding: '11px',
                      borderRadius: '10px',
                      border: '1.5px solid #CBD5E1',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#0F172A',
                      boxSizing: 'border-box'
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setDependentDeductions(Math.min(12, dependentDeductions + 1))}
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '8px',
                      border: '1.5px solid #CBD5E1',
                      backgroundColor: '#F8FAFC',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Other Pre-Tax Deductions */}
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <label htmlFor="inputOtherPreTax" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>
                    Other Pre-Tax Deductions
                  </label>
                  <button 
                    type="button" 
                    onClick={() => setActiveTooltip(activeTooltip === 'federalOtherPreTaxDeductions' ? null : 'federalOtherPreTaxDeductions')}
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#94A3B8', display: 'flex' }}
                    aria-label="Other Pre-Tax Info"
                  >
                    <Info size={15} />
                  </button>
                </div>
                {activeTooltip === 'federalOtherPreTaxDeductions' && (
                  <div style={{ backgroundColor: '#0F172A', color: '#F8FAFC', fontSize: '0.78rem', padding: '8px 12px', borderRadius: '8px', marginBottom: '8px' }}>
                    {tooltipContent.federalOtherPreTaxDeductions}
                  </div>
                )}
                <input
                  id="inputOtherPreTax"
                  type="text"
                  inputMode="numeric"
                  value={otherPreTaxStr}
                  onChange={(e) => handleCurrencyInput(e.target.value, setOtherPreTax, setOtherPreTaxStr)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.98rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

            </div>

            {/* CALCULATE BUTTON */}
            <button
              type="button"
              onClick={handleCalculate}
              style={{
                width: '100%',
                padding: '16px 24px',
                borderRadius: '12px',
                backgroundColor: '#F69337',
                color: '#FFFFFF',
                fontSize: '1.15rem',
                fontWeight: 900,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(246, 147, 55, 0.35)',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E27B1D';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F69337';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Calculate</span>
            </button>

          </div>

          {/* ================= RIGHT COLUMN: RESULTS WORKSPACE ================= */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* BOX 1: HEADLINE FEDERAL + FICA TAXES */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              padding: '30px 28px',
              boxShadow: '0 4px 18px rgba(0,0,0,0.03)',
              textAlign: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  Your 2025 Federal Income and FICA Taxes:
                </h3>
                <button 
                  type="button" 
                  onClick={() => setActiveTooltip(activeTooltip === 'incomeTaxTotal' ? null : 'incomeTaxTotal')}
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#94A3B8', display: 'flex' }}
                  aria-label="Total Federal & FICA Info"
                >
                  <Info size={16} />
                </button>
              </div>
              {activeTooltip === 'incomeTaxTotal' && (
                <div style={{ backgroundColor: '#0F172A', color: '#F8FAFC', fontSize: '0.8rem', padding: '8px 14px', borderRadius: '8px', marginBottom: '12px', maxWidth: '500px', margin: '0 auto 12px auto' }}>
                  {tooltipContent.incomeTaxTotal}
                </div>
              )}
              <div style={{
                fontSize: 'clamp(2.8rem, 4.5vw, 3.6rem)',
                fontWeight: 900,
                color: '#52B74B',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-1px'
              }}>
                {formatCurrency(results.federalFicaTotal)}
              </div>
            </div>

            {/* BOX 2: BREAKDOWN TABLE WITH MARGINAL / EFFECTIVE TOGGLE */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              padding: '26px 28px',
              boxShadow: '0 4px 18px rgba(0,0,0,0.03)'
            }}>
              
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                    Breakdown of Your Income Taxes
                  </h3>
                  <button 
                    type="button" 
                    onClick={() => setActiveTooltip(activeTooltip === 'incomeTaxBreakdown' ? null : 'incomeTaxBreakdown')}
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#94A3B8', display: 'flex' }}
                    aria-label="Breakdown Info"
                  >
                    <Info size={16} />
                  </button>
                </div>
                {activeTooltip === 'incomeTaxBreakdown' && (
                  <div style={{ backgroundColor: '#0F172A', color: '#F8FAFC', fontSize: '0.8rem', padding: '8px 14px', borderRadius: '8px', marginTop: '8px', maxWidth: '540px', margin: '8px auto 0 auto' }}>
                    {tooltipContent.incomeTaxBreakdown}
                  </div>
                )}
              </div>

              {/* TABLE */}
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #E2E8F0' }}>
                      <th style={{ padding: '12px 8px', fontSize: '0.95rem', fontWeight: 800, color: '#0F172A' }}>
                        Tax Type
                      </th>
                      <th style={{ padding: '12px 8px', textAlign: 'center' }}>
                        <div style={{
                          display: 'inline-flex',
                          backgroundColor: '#F8FAFC',
                          borderRadius: '8px',
                          padding: '3px',
                          border: '1px solid #E2E8F0'
                        }}>
                          <button
                            type="button"
                            onClick={() => setRateMode('MARGINAL')}
                            style={{
                              padding: '6px 12px',
                              borderRadius: '6px',
                              fontSize: '0.78rem',
                              fontWeight: rateMode === 'MARGINAL' ? 800 : 600,
                              backgroundColor: rateMode === 'MARGINAL' ? '#FFFFFF' : 'transparent',
                              color: rateMode === 'MARGINAL' ? '#F69337' : '#64748B',
                              border: rateMode === 'MARGINAL' ? '1.5px solid #F69337' : '1.5px solid transparent',
                              cursor: 'pointer',
                              transition: 'all 0.2s'
                            }}
                          >
                            Marginal Tax Rate
                          </button>
                          <button
                            type="button"
                            onClick={() => setRateMode('EFFECTIVE')}
                            style={{
                              padding: '6px 12px',
                              borderRadius: '6px',
                              fontSize: '0.78rem',
                              fontWeight: rateMode === 'EFFECTIVE' ? 800 : 600,
                              backgroundColor: rateMode === 'EFFECTIVE' ? '#FFFFFF' : 'transparent',
                              color: rateMode === 'EFFECTIVE' ? '#F69337' : '#64748B',
                              border: rateMode === 'EFFECTIVE' ? '1.5px solid #F69337' : '1.5px solid transparent',
                              cursor: 'pointer',
                              transition: 'all 0.2s'
                            }}
                          >
                            Effective Tax Rate
                          </button>
                        </div>
                      </th>
                      <th style={{ padding: '12px 8px', fontSize: '0.95rem', fontWeight: 800, color: '#0F172A', textAlign: 'right' }}>
                        2025 Taxes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    {/* Federal Tax */}
                    <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <td style={{ padding: '14px 8px', fontWeight: 600, color: '#1E293B', fontSize: '0.95rem' }}>
                        Federal Tax
                      </td>
                      <td style={{ padding: '14px 8px', textAlign: 'center', color: '#334155', fontWeight: 600, fontSize: '0.95rem' }}>
                        {formatPercent(rateMode === 'MARGINAL' ? results.federalMarginalRate : results.federalEffectiveRate)}
                      </td>
                      <td style={{ padding: '14px 8px', textAlign: 'right', fontWeight: 800, color: '#0F172A', fontSize: '1rem' }}>
                        {formatCurrency(results.federalTax)}
                      </td>
                    </tr>

                    {/* FICA Tax */}
                    <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <td style={{ padding: '14px 8px', fontWeight: 600, color: '#1E293B', fontSize: '0.95rem' }}>
                        FICA Tax
                      </td>
                      <td style={{ padding: '14px 8px', textAlign: 'center', color: '#334155', fontWeight: 600, fontSize: '0.95rem' }}>
                        {formatPercent(rateMode === 'MARGINAL' ? results.ficaMarginalRate : results.ficaEffectiveRate)}
                      </td>
                      <td style={{ padding: '14px 8px', textAlign: 'right', fontWeight: 800, color: '#0F172A', fontSize: '1rem' }}>
                        {formatCurrency(results.ficaTax)}
                      </td>
                    </tr>

                    {/* State Tax */}
                    <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <td style={{ padding: '14px 8px', fontWeight: 600, color: '#1E293B', fontSize: '0.95rem' }}>
                        State Tax
                      </td>
                      <td style={{ padding: '14px 8px', textAlign: 'center', color: '#334155', fontWeight: 600, fontSize: '0.95rem' }}>
                        {formatPercent(rateMode === 'MARGINAL' ? results.stateMarginalRate : results.stateEffectiveRate)}
                      </td>
                      <td style={{ padding: '14px 8px', textAlign: 'right', fontWeight: 800, color: '#0F172A', fontSize: '1rem' }}>
                        {formatCurrency(results.stateTax)}
                      </td>
                    </tr>

                    {/* Local Tax */}
                    <tr style={{ borderBottom: '2px solid #E2E8F0' }}>
                      <td style={{ padding: '14px 8px', fontWeight: 600, color: '#1E293B', fontSize: '0.95rem' }}>
                        Local Tax
                      </td>
                      <td style={{ padding: '14px 8px', textAlign: 'center', color: '#334155', fontWeight: 600, fontSize: '0.95rem' }}>
                        {formatPercent(rateMode === 'MARGINAL' ? results.localMarginalRate : results.localEffectiveRate)}
                      </td>
                      <td style={{ padding: '14px 8px', textAlign: 'right', fontWeight: 800, color: '#0F172A', fontSize: '1rem' }}>
                        {formatCurrency(results.localTax)}
                      </td>
                    </tr>

                    {/* Total Income Taxes */}
                    <tr style={{ backgroundColor: '#F8FAFC' }}>
                      <td style={{ padding: '16px 8px', fontWeight: 900, color: '#0F172A', fontSize: '1.02rem' }}>
                        Total Income Taxes
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'center', color: '#0F172A', fontWeight: 800, fontSize: '1.02rem' }}>
                        —
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'right', fontWeight: 900, color: '#0F172A', fontSize: '1.1rem' }}>
                        {formatCurrency(results.totalTaxes)}
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>

            </div>

            {/* BOX 3: ANNUAL TAKE-HOME PAY & SOLID PIE CHART */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              padding: '30px 28px',
              boxShadow: '0 4px 18px rgba(0,0,0,0.03)',
              textAlign: 'center'
            }}>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  Your Annual Take-Home Pay
                </h3>
                <button 
                  type="button" 
                  onClick={() => setActiveTooltip(activeTooltip === 'incomeTaxTakeHome' ? null : 'incomeTaxTakeHome')}
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#94A3B8', display: 'flex' }}
                  aria-label="Take Home Info"
                >
                  <Info size={16} />
                </button>
              </div>
              {activeTooltip === 'incomeTaxTakeHome' && (
                <div style={{ backgroundColor: '#0F172A', color: '#F8FAFC', fontSize: '0.8rem', padding: '8px 14px', borderRadius: '8px', marginBottom: '12px', maxWidth: '500px', margin: '0 auto 12px auto' }}>
                  {tooltipContent.incomeTaxTakeHome}
                </div>
              )}

              <div style={{
                fontSize: 'clamp(2.8rem, 4.5vw, 3.6rem)',
                fontWeight: 900,
                color: '#52B74B',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-1px',
                marginBottom: '28px'
              }}>
                {formatCurrency(results.takeHomePay)}
              </div>

              {/* SOLID CIRCULAR PIE CHART */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                
                <div style={{ width: '200px', height: '200px', position: 'relative' }}>
                  <svg width="200" height="200" viewBox="0 0 200 200">
                    {/* Taxes Slice (Orange) */}
                    {taxesSlicePath && (
                      <path
                        d={taxesSlicePath}
                        fill="#F69337"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                      />
                    )}
                    {/* Retirement Slice (Blue) */}
                    {retSlicePath && (
                      <path
                        d={retSlicePath}
                        fill="#59A9E8"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                      />
                    )}
                    {/* Take-Home Pay Slice (Green) */}
                    {takeHomeSlicePath && (
                      <path
                        d={takeHomeSlicePath}
                        fill="#71C55B"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                      />
                    )}
                  </svg>
                </div>

                {/* 3-DOT HORIZONTAL LEGEND (MATCHING SMARTASSET EXACTLY) */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: '24px',
                  marginTop: '24px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: '#334155'
                }}>
                  {/* Dot 1: Total Taxes */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F69337' }} />
                    <span>Total Income Taxes</span>
                  </div>

                  {/* Dot 2: Retirement */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#59A9E8' }} />
                    <span>Retirement Contributions</span>
                  </div>

                  {/* Dot 3: Take-Home Pay */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#71C55B' }} />
                    <span>Take-Home Pay</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ACCORDIONS SECTION */}
        <div style={{ marginTop: '36px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          
          {/* Accordion 1: About This Calculator */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            border: '1px solid #E2E8F0',
            overflow: 'hidden'
          }}>
            <button
              type="button"
              onClick={() => setOpenAccordion(openAccordion === 'about' ? null : 'about')}
              style={{
                width: '100%',
                padding: '18px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>
                About This Calculator
              </span>
              {openAccordion === 'about' ? <ChevronUp size={20} color="#64748B" /> : <ChevronDown size={20} color="#64748B" />}
            </button>
            {openAccordion === 'about' && (
              <div style={{ padding: '0 24px 24px 24px', fontSize: '0.94rem', color: '#475569', lineHeight: 1.7, borderTop: '1px solid #F1F5F9', paddingTop: '16px' }}>
                Our income tax calculator calculates your federal, state, and local taxes based on several key inputs: your household income, location, filing status, and personal deductions. 
                <br /><br />
                <strong>How Income Taxes Are Calculated:</strong>
                <ol style={{ paddingLeft: '22px', marginTop: '8px' }}>
                  <li style={{ marginBottom: '6px' }}>First, we calculate your <strong>Adjusted Gross Income (AGI)</strong> by taking total household income and reducing it by qualified items like pre-tax 401(k) and Traditional IRA contributions.</li>
                  <li style={{ marginBottom: '6px' }}>Next, from AGI we subtract deductions (either the official 2025 standard deduction or itemized deduction) to determine your <strong>Taxable Income</strong>.</li>
                  <li style={{ marginBottom: '6px' }}>Based on your filing status, your taxable income is applied against progressive federal tax brackets (10% to 37%) to establish federal income taxes owed.</li>
                  <li style={{ marginBottom: '6px' }}>FICA payroll taxes (6.2% Social Security up to $176,100 + 1.45% Medicare + 0.9% Additional Medicare above $200k/$250k) are calculated automatically.</li>
                  <li>Your selected location determines applicable state income taxes (across all 50 US states & DC) as well as municipal city taxes where relevant.</li>
                </ol>
              </div>
            )}
          </div>

          {/* Accordion 2: Assumptions & Methodology */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            border: '1px solid #E2E8F0',
            overflow: 'hidden'
          }}>
            <button
              type="button"
              onClick={() => setOpenAccordion(openAccordion === 'assumptions' ? null : 'assumptions')}
              style={{
                width: '100%',
                padding: '18px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>
                Assumptions & Methodology
              </span>
              {openAccordion === 'assumptions' ? <ChevronUp size={20} color="#64748B" /> : <ChevronDown size={20} color="#64748B" />}
            </button>
            {openAccordion === 'assumptions' && (
              <div style={{ padding: '0 24px 24px 24px', fontSize: '0.94rem', color: '#475569', lineHeight: 1.7, borderTop: '1px solid #F1F5F9', paddingTop: '16px' }}>
                <strong>Deductions:</strong>
                <ul style={{ paddingLeft: '22px', margin: '6px 0 14px 0' }}>
                  <li>Standard deductions reflect official IRS 2025 thresholds ($15,750 Single/MFS, $31,500 MFJ, $23,625 HOH).</li>
                  <li>Itemized deductions can be manually entered if exceeding the standard deduction.</li>
                </ul>
                <strong>Credits:</strong>
                <ul style={{ paddingLeft: '22px', margin: '6px 0 14px 0' }}>
                  <li>Tax credits entered directly reduce your federal tax dollar-for-dollar.</li>
                </ul>
                <strong>Local Tax:</strong>
                <ul style={{ paddingLeft: '22px', margin: '6px 0 0 0' }}>
                  <li>Local taxes for major metropolitan jurisdictions (such as Columbus, OH at 2.5%, New York City at up to 3.876%, and Philadelphia at 3.75%) are computed using municipal tax ordinances.</li>
                </ul>
              </div>
            )}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* ALL 51 US STATE TAX CALCULATOR CARDS (MATCHING SERVICES CARD DESIGN) */}
        {/* ========================================================================= */}
        <section style={{ marginTop: '64px', paddingTop: '30px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="badge-gold">Kinzei State-by-State Tax Directory</span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', color: '#0F172A', marginTop: '14px', marginBottom: '14px', fontWeight: 900 }}>
              Income Tax Calculators by <span style={{ color: '#D4A017' }}>State</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '1.02rem', maxWidth: '780px', margin: '0 auto 28px auto', fontWeight: 500, lineHeight: 1.6 }}>
              Compare progressive, flat, and zero-tax jurisdictions across all 50 states and Washington D.C. Click any card to instantly calculate your personal take-home pay and tax burden for that state.
            </p>

            {/* SEARCH BAR & CATEGORY FILTER BUTTONS */}
            <div style={{ maxWidth: '680px', margin: '0 auto 20px auto', position: 'relative' }}>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Search size={20} color="#94A3B8" style={{ position: 'absolute', left: '16px' }} />
                <input
                  type="text"
                  placeholder="Search state by name or code (e.g. Florida, OH, California, Texas)..."
                  value={stateSearchTerm}
                  onChange={(e) => setStateSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 20px 14px 48px',
                    borderRadius: '30px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.98rem',
                    color: '#0F172A',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            {/* CATEGORY FILTER BUTTONS */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All 51 Jurisdictions' },
                { id: 'none', label: 'No Income Tax (9 States)' },
                { id: 'flat', label: 'Flat Tax States (14 States)' },
                { id: 'progressive', label: 'Graduated Tax States (28 States)' }
              ].map((btn) => {
                const isActive = selectedStateCategory === btn.id;
                return (
                  <button
                    key={btn.id}
                    type="button"
                    onClick={() => setSelectedStateCategory(btn.id)}
                    style={{
                      padding: '10px 18px',
                      borderRadius: '24px',
                      fontSize: '0.86rem',
                      fontWeight: 800,
                      backgroundColor: isActive ? '#D4A017' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : '#334155',
                      border: isActive ? '1.5px solid #D4A017' : '1.5px solid #CBD5E1',
                      cursor: 'pointer',
                      boxShadow: isActive ? '0 6px 16px rgba(212, 160, 23, 0.35)' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {btn.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* STATE CARDS GRID (Memoized for high performance) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '24px'
          }}>
            {filteredStateCards.map((state) => {
              const isCurrentState = location.includes(state.code) || location.toLowerCase().includes(state.name.toLowerCase());
              return (
                <StateCardItem
                  key={state.code}
                  state={state}
                  isCurrentState={isCurrentState}
                  onSelect={handleSelectStateCard}
                />
              );
            })}
          </div>

          {filteredStateCards.length === 0 && (
            <div style={{ textAlign: 'center', padding: '50px 20px', color: '#64748B', fontWeight: 600 }}>
              No US states match your search query. Try typing another state name or abbreviation.
            </div>
          )}

        </section>

        {/* ========================================================================= */}
        {/* COMPREHENSIVE EDUCATIONAL GUIDE CONTENT */}
        {/* ========================================================================= */}
        <div style={{
          marginTop: '60px',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E2E8F0',
          padding: '44px 40px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
        }}>
          
          {/* EDITORIAL ATTRIBUTION & FACT-CHECK BADGE */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            paddingBottom: '16px',
            marginBottom: '24px',
            borderBottom: '1px solid #E2E8F0',
            fontSize: '0.84rem',
            color: '#64748B'
          }}>
            <span style={{ fontWeight: 600 }}>Edited by <strong>Marie White, CEPF®</strong></span>
            <span>•</span>
            <span style={{ fontWeight: 600 }}>Reviewed by <strong>Patrick Villanova, CEPF®</strong></span>
            <span>•</span>
            <span style={{ color: '#0F172A', fontWeight: 700 }}>Updated for 2025–2026 Tax Year</span>
            <span>•</span>
            <span style={{
              backgroundColor: '#ECFDF5',
              color: '#059669',
              padding: '2px 10px',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '0.76rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <Check size={13} strokeWidth={3} /> Fact Checked
            </span>
          </div>

          <h2 style={{ fontSize: '1.9rem', fontWeight: 900, color: '#0F172A', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
            The Federal Income Tax: How Are You Taxed?
          </h2>

          <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.75, marginBottom: '24px' }}>
            The federal personal income tax that is administered by the Internal Revenue Service (IRS) is the largest source of revenue for the U.S. federal government. Nearly all working Americans are required to file a tax return with the IRS each year. In addition to this, most people pay taxes throughout the year in the form of payroll taxes that are withheld from their paychecks. Income taxes in the U.S. are calculated based on tax rates that range from <strong>10% to 37%</strong>. Taxpayers can lower their tax burden and the amount of taxes they owe by claiming deductions and credits.
          </p>

          {/* W-2 VS 1099 COMPARISON CARDS */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', margin: '28px 0' }}>
            
            {/* W-2 Card */}
            <div style={{ backgroundColor: '#F8FAFC', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <FileText size={20} color="#D4A017" />
                <h4 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  Federal Income Tax: W-2 Employees
                </h4>
              </div>
              <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                W-2 employees are workers that get W-2 tax forms from their employers. These forms report the annual salary paid during a specific tax year and the payroll taxes that were withheld. This means that employers withhold money from employee earnings to pay for taxes, including Social Security tax, income tax, Medicare tax, and applicable state income taxes. Both employers and employees split the Federal Insurance Contribution Act (FICA) taxes (15.3% total), with each paying 7.65% (6.2% for Social Security and 1.45% for Medicare).
              </p>
            </div>

            {/* 1099 Card */}
            <div style={{ backgroundColor: '#F8FAFC', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Building2 size={20} color="#D4A017" />
                <h4 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  Federal Income Tax: 1099 Employees
                </h4>
              </div>
              <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                Independent contractors and freelance professionals, unlike W-2 employees, do not have federal tax deducted automatically from their pay. Because they are not classified as employees, they are responsible for their own federal payroll taxes (also known as self-employment tax). 1099 workers are responsible for the entire 15.3% FICA obligation (covering both the employee and employer shares). The IRS requires employers to send 1099 forms to workers paid more than $600 during a tax year.
              </p>
            </div>

          </div>

          {/* CALCULATING FEDERAL INCOME TAX RATE */}
          <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', marginTop: '40px', marginBottom: '14px' }}>
            Calculating the Federal Income Tax Rate
          </h3>
          <p style={{ fontSize: '0.98rem', color: '#334155', lineHeight: 1.75, marginBottom: '18px' }}>
            The United States has a progressive income tax system. This means there are higher tax rates for higher income levels. These are called <strong>"marginal tax rates,"</strong> meaning they do not apply to total income, but only to the income within a specific range. These ranges are referred to as brackets.
          </p>
          <p style={{ fontSize: '0.98rem', color: '#334155', lineHeight: 1.75, marginBottom: '22px' }}>
            Income falling within a specific bracket is taxed at the rate for that bracket. The table below shows the tax brackets for the federal income tax, and it reflects the rates for the <strong>2025 tax year (taxes due in April 2026)</strong>:
          </p>

          {/* 2025 BRACKETS TABLE */}
          <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
              <thead>
                <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '2px solid #CBD5E1' }}>
                  <th style={{ padding: '12px', fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>Tax Rate</th>
                  <th style={{ padding: '12px', fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>Single Filers</th>
                  <th style={{ padding: '12px', fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>Married, Filing Jointly</th>
                  <th style={{ padding: '12px', fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>Married, Filing Separately</th>
                  <th style={{ padding: '12px', fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>Head of Household</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                  <td style={{ padding: '12px', fontWeight: 800, color: '#8C6B2F' }}>10%</td>
                  <td style={{ padding: '12px' }}>$0 – $11,925</td>
                  <td style={{ padding: '12px' }}>$0 – $23,850</td>
                  <td style={{ padding: '12px' }}>$0 – $11,925</td>
                  <td style={{ padding: '12px' }}>$0 – $17,000</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #F1F5F9', backgroundColor: '#FDFDFD' }}>
                  <td style={{ padding: '12px', fontWeight: 800, color: '#8C6B2F' }}>12%</td>
                  <td style={{ padding: '12px' }}>$11,925 – $48,475</td>
                  <td style={{ padding: '12px' }}>$23,850 – $96,950</td>
                  <td style={{ padding: '12px' }}>$11,925 – $48,475</td>
                  <td style={{ padding: '12px' }}>$17,000 – $64,850</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                  <td style={{ padding: '12px', fontWeight: 800, color: '#8C6B2F' }}>22%</td>
                  <td style={{ padding: '12px' }}>$48,475 – $103,350</td>
                  <td style={{ padding: '12px' }}>$96,950 – $206,700</td>
                  <td style={{ padding: '12px' }}>$48,475 – $103,350</td>
                  <td style={{ padding: '12px' }}>$64,850 – $103,350</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #F1F5F9', backgroundColor: '#FDFDFD' }}>
                  <td style={{ padding: '12px', fontWeight: 800, color: '#8C6B2F' }}>24%</td>
                  <td style={{ padding: '12px' }}>$103,350 – $197,300</td>
                  <td style={{ padding: '12px' }}>$206,700 – $394,600</td>
                  <td style={{ padding: '12px' }}>$103,350 – $197,300</td>
                  <td style={{ padding: '12px' }}>$103,350 – $197,300</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                  <td style={{ padding: '12px', fontWeight: 800, color: '#8C6B2F' }}>32%</td>
                  <td style={{ padding: '12px' }}>$197,300 – $250,525</td>
                  <td style={{ padding: '12px' }}>$394,600 – $501,050</td>
                  <td style={{ padding: '12px' }}>$197,300 – $250,525</td>
                  <td style={{ padding: '12px' }}>$197,300 – $250,500</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #F1F5F9', backgroundColor: '#FDFDFD' }}>
                  <td style={{ padding: '12px', fontWeight: 800, color: '#8C6B2F' }}>35%</td>
                  <td style={{ padding: '12px' }}>$250,525 – $626,350</td>
                  <td style={{ padding: '12px' }}>$501,050 – $751,600</td>
                  <td style={{ padding: '12px' }}>$250,525 – $375,800</td>
                  <td style={{ padding: '12px' }}>$250,500 – $626,350</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', fontWeight: 800, color: '#8C6B2F' }}>37%</td>
                  <td style={{ padding: '12px' }}>$626,350+</td>
                  <td style={{ padding: '12px' }}>$751,600+</td>
                  <td style={{ padding: '12px' }}>$375,800+</td>
                  <td style={{ padding: '12px' }}>$626,350+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{
            backgroundColor: '#F8FAFC',
            borderRadius: '10px',
            padding: '18px 22px',
            border: '1px solid #E2E8F0',
            marginBottom: '36px',
            fontSize: '0.94rem',
            lineHeight: 1.7,
            color: '#334155'
          }}>
            <strong>Example of Marginal Brackets in Practice:</strong> Based on the rates above, a single filer with a taxable income of $50,000 would have a top marginal tax rate of 22%. However, that taxpayer would not pay 22% on all $50,000. The rate on the first $11,925 of taxable income is 10% ($1,192.50), then 12% on the next $36,550 ($4,386.00), and 22% on the final $1,525 ($335.50) falling in the third bracket. Total federal income tax owed would be <strong>$5,914</strong>, representing an effective tax rate of approximately <strong>11.8%</strong>.
          </div>

          {/* DEDUCTIONS SECTION */}
          <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
            Tax Withholding Estimator: Calculating Taxable Income Using Exemptions and Deductions
          </h3>
          <p style={{ fontSize: '0.98rem', color: '#334155', lineHeight: 1.75, marginBottom: '18px' }}>
            Federal tax rates apply only to <strong>taxable income</strong>. This is different than your total income, otherwise known as gross income. Taxable income is always lower than gross income since the U.S. tax code allows taxpayers to deduct certain amounts to determine taxable income.
          </p>
          <p style={{ fontSize: '0.98rem', color: '#334155', lineHeight: 1.75, marginBottom: '22px' }}>
            To calculate taxable income, you begin by making certain adjustments from gross income to arrive at <strong>adjusted gross income (AGI)</strong>. Once you have calculated adjusted gross income, you subtract either the standard deduction or your itemized deductions to arrive at taxable income.
          </p>

          {/* 2025 STANDARD DEDUCTIONS TABLE */}
          <div style={{ overflowX: 'auto', marginBottom: '28px' }}>
            <table style={{ width: '100%', maxWidth: '640px', borderCollapse: 'collapse', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
              <thead>
                <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '2px solid #CBD5E1' }}>
                  <th style={{ padding: '12px 16px', fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>Filing Status</th>
                  <th style={{ padding: '12px 16px', fontSize: '0.9rem', fontWeight: 800, color: '#0F172A', textAlign: 'right' }}>2025 Standard Deduction Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>Single</td>
                  <td style={{ padding: '12px 16px', textAlign: 'right', fontWeight: 800, color: '#8C6B2F' }}>$15,750</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #F1F5F9', backgroundColor: '#FDFDFD' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>Married, Filing Jointly</td>
                  <td style={{ padding: '12px 16px', textAlign: 'right', fontWeight: 800, color: '#8C6B2F' }}>$31,500</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>Married, Filing Separately</td>
                  <td style={{ padding: '12px 16px', textAlign: 'right', fontWeight: 800, color: '#8C6B2F' }}>$15,750</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>Head of Household</td>
                  <td style={{ padding: '12px 16px', textAlign: 'right', fontWeight: 800, color: '#8C6B2F' }}>$23,625</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
              Common Itemized Deductions
            </h4>
            <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
              Some taxpayers choose to itemize their deductions rather than taking the standard deduction. The most common itemized deductions include:
            </p>
            <ul style={{ fontSize: '0.94rem', color: '#334155', lineHeight: 1.75, paddingLeft: '22px', margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <strong>Deduction for state and local taxes paid (SALT):</strong> Allows eligible taxpayers in 2025 to deduct up to $40,000 of state and local property taxes plus either their state/local income taxes or sales taxes ($40,400 in 2026).
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Deduction for mortgage interest paid:</strong> Interest paid on mortgages for up to two homes (limited to the first $750,000 of mortgage debt for loans originated after Dec. 15, 2017).
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Deduction for charitable contributions:</strong> Tax-deductible donations made to 501(c)(3) qualified charitable organizations.
              </li>
              <li>
                <strong>Deduction for medical expenses:</strong> Unreimbursed medical and dental expenses exceeding 7.5% of your Adjusted Gross Income (AGI).
              </li>
            </ul>
          </div>

          {/* TAX CREDITS SECTION */}
          <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
            How to Calculate Federal Tax Credits
          </h3>
          <p style={{ fontSize: '0.98rem', color: '#334155', lineHeight: 1.75, marginBottom: '18px' }}>
            Unlike adjustments and deductions, which reduce your taxable income, <strong>tax credits apply directly to your tax liability</strong> (the actual dollar amount of taxes owed). For example, if your computed tax liability is $1,000 and you qualify for a $200 tax credit, your liability drops dollar-for-dollar to $800.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', marginBottom: '32px' }}>
            <div style={{ backgroundColor: '#F8FAFC', padding: '18px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
              <strong style={{ color: '#0F172A', display: 'block', marginBottom: '6px' }}>Earned Income Tax Credit (EITC)</strong>
              <span style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>Refundable tax credit for low-to-moderate-income workers. Up to $8,046 for taxpayers with three or more qualifying children in 2025 ($8,231 in 2026).</span>
            </div>
            <div style={{ backgroundColor: '#F8FAFC', padding: '18px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
              <strong style={{ color: '#0F172A', display: 'block', marginBottom: '6px' }}>Child Tax Credit (CTC)</strong>
              <span style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>Worth up to $2,200 per qualifying child for the 2025 tax year, with up to $1,700 being refundable via the Additional Child Tax Credit.</span>
            </div>
            <div style={{ backgroundColor: '#F8FAFC', padding: '18px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
              <strong style={{ color: '#0F172A', display: 'block', marginBottom: '6px' }}>Child & Dependent Care Credit</strong>
              <span style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>Nonrefundable credit of up to $3,000 for one child or $6,000 for two or more dependents for work-related care expenses.</span>
            </div>
            <div style={{ backgroundColor: '#F8FAFC', padding: '18px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
              <strong style={{ color: '#0F172A', display: 'block', marginBottom: '6px' }}>Education & Adoption Credits</strong>
              <span style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>American Opportunity Tax Credit up to $2,500/year for undergraduate tuition; Adoption Credit up to $5,000 partially refundable.</span>
            </div>
          </div>

          {/* REFUNDS, PAYING TAXES, STATE TAXES */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            <div style={{ backgroundColor: '#F8FAFC', padding: '22px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginTop: 0, marginBottom: '10px' }}>
                Calculating Your Tax Refund
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                Whether you receive a refund depends on the total taxes withheld from your paychecks relative to your actual total tax liability. If withholding exceeds liability, the IRS issues a refund for the excess balance. Eligible refundable tax credits can generate a refund even if your tax liability is zero.
              </p>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', padding: '22px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginTop: 0, marginBottom: '10px' }}>
                Paying Your Taxes & Deadlines
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                Always file your federal return on time to avoid failure-to-file penalties. The cheapest payment method is IRS Direct Pay (free direct bank transfer) or EFTPS. Authorized credit card payment processors (Pay1040, ACI Payments) charge approximately 1.87%–1.98% processing fees.
              </p>
            </div>
          </div>

          {/* KINZEI US DESK ADVISORY CTA BANNER (Explicit High-Contrast Pure White Heading) */}
          <div style={{
            background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
            borderRadius: '14px',
            padding: '32px 30px',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            border: '1px solid rgba(212, 160, 23, 0.35)',
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.15)'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <ShieldCheck size={20} color="#D4A017" />
                <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#D4A017', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Kinzei US International Desk
                </span>
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', margin: '0 0 8px 0', letterSpacing: '-0.2px' }}>
                Need Cross-Border US & Pakistan Tax Structuring?
              </h3>
              <p style={{ fontSize: '0.93rem', color: '#E2E8F0', margin: 0, maxWidth: '640px', lineHeight: 1.55 }}>
                Our senior partners provide IRS Form 1040/1120-F compliance, US LLC tax elections, state withholding filings, and bilateral double tax treaty optimization.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenSchedule}
              style={{
                backgroundColor: '#D4A017',
                color: '#0F172A',
                fontWeight: 800,
                fontSize: '0.94rem',
                padding: '13px 26px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(212, 160, 23, 0.4)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E5B229'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D4A017'}
            >
              <span>Book US Tax Consultation</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>

      </div>

      {/* Responsive Grid CSS */}
      <style>{`
        @media (max-width: 992px) {
          .us-calc-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
