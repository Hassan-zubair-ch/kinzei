import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Clock, 
  HelpCircle, 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Briefcase, 
  Home, 
  CreditCard, 
  Percent, 
  FileText, 
  ChevronRight, 
  DollarSign, 
  Users,
  Info,
  Calendar,
  Layers,
  Building2,
  RefreshCw,
  Award
} from 'lucide-react';
import { UKFlag, USFlag, PKFlag } from '../components/CountryFlags';
import { 
  UK_TAX_YEARS, 
  UK_CALCULATORS_DIRECTORY, 
  calculateUKTakeHome, 
  calculateUKHourlyWage, 
  calculateUKMaternitySickPay, 
  calculateUKRequiredSalary, 
  calculateUKTwoJobs, 
  calculateUKProRata, 
  calculateUKTwoSalaryComparison, 
  calculateUKMortgage, 
  calculateUKDebtConsolidation 
} from '../data/ukTaxData';

// Format currency as GBP (£)
function formatGBP(val, decimals = 2) {
  if (val === undefined || val === null || isNaN(val)) return '£0.00';
  return '£' + Number(val).toLocaleString('en-GB', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

function formatPercent(val) {
  if (!val || isNaN(val)) return '0.0%';
  return (val * 100).toFixed(1) + '%';
}

export default function UKTaxCalculator({ onOpenSchedule }) {
  const workstationRef = useRef(null);

  // Active Calculator Mode ('take-home' | 'hourly-wage' | 'maternity-sick' | 'required-salary' | 'two-jobs' | 'pro-rata' | 'compare-salaries' | 'mortgage-repayment' | 'debt-consolidation')
  const [activeCalculatorId, setActiveCalculatorId] = useState('take-home');

  // Common Settings
  const [taxYear, setTaxYear] = useState('2026/27');
  const [isScotland, setIsScotland] = useState(false);

  // 1. Take-Home Calculator State
  const [salary, setSalary] = useState(30000);
  const [activeTab, setActiveTab] = useState('tax-code');
  const [taxCode, setTaxCode] = useState('1257L');
  const [studentLoanPlan, setStudentLoanPlan] = useState('none');
  const [hasPostgradLoan, setHasPostgradLoan] = useState(false);
  const [pensionType, setPensionType] = useState('none');
  const [pensionPercent, setPensionPercent] = useState(5);
  const [pensionFixedAmount, setPensionFixedAmount] = useState(0);
  const [pensionReliefType, setPensionReliefType] = useState('netpay');
  const [bonusAmount, setBonusAmount] = useState(0);
  const [overtimeHours15, setOvertimeHours15] = useState(0);
  const [overtimeHours20, setOvertimeHours20] = useState(0);
  const [standardWeeklyHours, setStandardWeeklyHours] = useState(37.5);
  const [overtimeCashMonthly, setOvertimeCashMonthly] = useState(0);
  const [childcareVouchersMonthly, setChildcareVouchersMonthly] = useState(0);
  const [salarySacrificeAnnual, setSalarySacrificeAnnual] = useState(0);
  const [taxableBenefitsAnnual, setTaxableBenefitsAnnual] = useState(0);
  const [isOverStatePensionAge, setIsOverStatePensionAge] = useState(false);
  const [isBlind, setIsBlind] = useState(false);
  const [hasMarriageAllowance, setHasMarriageAllowance] = useState(false);

  // Frequency period display checkboxes
  const [showPeriods, setShowPeriods] = useState({
    yearly: true,
    monthly: true,
    fourWeekly: false,
    twoWeekly: false,
    weekly: true,
    daily: true
  });

  // 2. Hourly Wage State
  const [hourlyRate, setHourlyRate] = useState(15.50);
  const [hourlyHoursPerWeek, setHourlyHoursPerWeek] = useState(37.5);
  const [hourlyDaysPerWeek, setHourlyDaysPerWeek] = useState(5);
  const [hourlyWeeksPerYear, setHourlyWeeksPerYear] = useState(52);
  const [hourlyOvertimeHours, setHourlyOvertimeHours] = useState(5);
  const [hourlyOvertimeMultiplier, setHourlyOvertimeMultiplier] = useState(1.5);

  // 3. Maternity / Sick State
  const [maternitySalary, setMaternitySalary] = useState(36000);
  const [leaveType, setLeaveType] = useState('maternity');
  const [fullPayWeeks, setFullPayWeeks] = useState(6);
  const [smpWeeks, setSmpWeeks] = useState(33);
  const [sspWeeks, setSspWeeks] = useState(12);

  // 4. Required Salary State
  const [desiredMonthlyNet, setDesiredMonthlyNet] = useState(2500);
  const [reqHasStudentLoan, setReqHasStudentLoan] = useState(false);
  const [reqStudentPlan, setReqStudentPlan] = useState('plan2');

  // 5. Two Jobs State
  const [job1Salary, setJob1Salary] = useState(32000);
  const [job1TaxCode, setJob1TaxCode] = useState('1257L');
  const [job2Salary, setJob2Salary] = useState(12000);
  const [job2TaxCode, setJob2TaxCode] = useState('BR');

  // 6. Pro-Rata State
  const [fteSalary, setFteSalary] = useState(42000);
  const [standardFteHours, setStandardFteHours] = useState(37.5);
  const [actualPartHours, setActualPartHours] = useState(22.5);
  const [standardFteWeeks, setStandardFteWeeks] = useState(52);
  const [actualPartWeeks, setActualPartWeeks] = useState(52);

  // 7. Compare Two Salaries State
  const [compareSalaryA, setCompareSalaryA] = useState(35000);
  const [compareSalaryB, setCompareSalaryB] = useState(48000);
  const [comparePensionA, setComparePensionA] = useState(5);
  const [comparePensionB, setComparePensionB] = useState(5);

  // 8. Mortgage Repayment State
  const [mortgagePrice, setMortgagePrice] = useState(320000);
  const [mortgageDeposit, setMortgageDeposit] = useState(50000);
  const [mortgageInterestRate, setMortgageInterestRate] = useState(4.65);
  const [mortgageTermYears, setMortgageTermYears] = useState(25);
  const [mortgageRepaymentType, setMortgageRepaymentType] = useState('capital');

  // 9. Debt Consolidation State
  const [debts, setDebts] = useState([
    { name: 'Credit Card (Barclaycard)', balance: 4500, apr: 22.9, monthlyPayment: 135 },
    { name: 'Personal Loan', balance: 8000, apr: 11.2, monthlyPayment: 220 },
    { name: 'Store Card', balance: 1800, apr: 29.9, monthlyPayment: 70 }
  ]);
  const [consolidationApr, setConsolidationApr] = useState(7.9);
  const [consolidationTermYears, setConsolidationTermYears] = useState(4);

  // Switch active calculator and smooth scroll to workstation
  const handleSelectCalculator = (id) => {
    setActiveCalculatorId(id);
    if (workstationRef.current) {
      workstationRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // 1. Take-Home Calculation Memo
  const takeHomeResult = useMemo(() => {
    return calculateUKTakeHome({
      annualSalary: salary,
      isScotland,
      taxYear,
      taxCode,
      studentLoanPlan,
      hasPostgradLoan,
      pensionType,
      pensionPercent,
      pensionFixedAmount,
      pensionReliefType,
      bonusAmount,
      overtimeHours15,
      overtimeHours20,
      standardWeeklyHours,
      overtimeCashMonthly,
      childcareVouchersMonthly,
      salarySacrificeAnnual,
      taxableBenefitsAnnual,
      isOverStatePensionAge,
      isBlind,
      hasMarriageAllowance
    });
  }, [
    salary, isScotland, taxYear, taxCode, studentLoanPlan, hasPostgradLoan,
    pensionType, pensionPercent, pensionFixedAmount, pensionReliefType,
    bonusAmount, overtimeHours15, overtimeHours20, standardWeeklyHours,
    overtimeCashMonthly, childcareVouchersMonthly, salarySacrificeAnnual,
    taxableBenefitsAnnual, isOverStatePensionAge, isBlind, hasMarriageAllowance
  ]);

  // 2. Hourly Wage Calculation Memo
  const hourlyWageResult = useMemo(() => {
    return calculateUKHourlyWage({
      hourlyRate,
      hoursPerWeek: hourlyHoursPerWeek,
      daysPerWeek: hourlyDaysPerWeek,
      weeksPerYear: hourlyWeeksPerYear,
      overtimeHours: hourlyOvertimeHours,
      overtimeMultiplier: hourlyOvertimeMultiplier,
      isScotland,
      taxYear
    });
  }, [hourlyRate, hourlyHoursPerWeek, hourlyDaysPerWeek, hourlyWeeksPerYear, hourlyOvertimeHours, hourlyOvertimeMultiplier, isScotland, taxYear]);

  // 3. Maternity/Sick Pay Memo
  const maternitySickResult = useMemo(() => {
    return calculateUKMaternitySickPay({
      regularAnnualSalary: maternitySalary,
      leaveType,
      fullPayWeeks,
      smpWeeks,
      sspWeeks,
      isScotland,
      taxYear
    });
  }, [maternitySalary, leaveType, fullPayWeeks, smpWeeks, sspWeeks, isScotland, taxYear]);

  // 4. Required Salary Memo
  const requiredSalaryResult = useMemo(() => {
    return calculateUKRequiredSalary({
      desiredMonthlyTakeHome: desiredMonthlyNet,
      isScotland,
      taxYear,
      hasStudentLoan: reqHasStudentLoan,
      studentLoanPlan: reqStudentPlan
    });
  }, [desiredMonthlyNet, isScotland, taxYear, reqHasStudentLoan, reqStudentPlan]);

  // 5. Two Jobs Memo
  const twoJobsResult = useMemo(() => {
    return calculateUKTwoJobs({
      job1Salary,
      job1TaxCode,
      job2Salary,
      job2TaxCode,
      isScotland,
      taxYear
    });
  }, [job1Salary, job1TaxCode, job2Salary, job2TaxCode, isScotland, taxYear]);

  // 6. Pro-Rata Memo
  const proRataResult = useMemo(() => {
    return calculateUKProRata({
      fullTimeEquivalentSalary: fteSalary,
      standardFullTimeHours: standardFteHours,
      actualWeeklyHours: actualPartHours,
      standardWeeksPerYear: standardFteWeeks,
      actualWeeksPerYear: actualPartWeeks,
      isScotland,
      taxYear
    });
  }, [fteSalary, standardFteHours, actualPartHours, standardFteWeeks, actualPartWeeks, isScotland, taxYear]);

  // 7. Compare Two Salaries Memo
  const compareSalariesResult = useMemo(() => {
    return calculateUKTwoSalaryComparison({
      salaryA: compareSalaryA,
      salaryB: compareSalaryB,
      pensionA: comparePensionA,
      pensionB: comparePensionB,
      isScotland,
      taxYear
    });
  }, [compareSalaryA, compareSalaryB, comparePensionA, comparePensionB, isScotland, taxYear]);

  // 8. Mortgage Memo
  const mortgageResult = useMemo(() => {
    return calculateUKMortgage({
      propertyPrice: mortgagePrice,
      depositAmount: mortgageDeposit,
      interestRate: mortgageInterestRate,
      termYears: mortgageTermYears,
      repaymentType: mortgageRepaymentType
    });
  }, [mortgagePrice, mortgageDeposit, mortgageInterestRate, mortgageTermYears, mortgageRepaymentType]);

  // 9. Debt Consolidation Memo
  const debtResult = useMemo(() => {
    return calculateUKDebtConsolidation({
      debts,
      consolidationApr,
      consolidationTermYears
    });
  }, [debts, consolidationApr, consolidationTermYears]);

  const updateDebtItem = (index, field, value) => {
    const updated = [...debts];
    updated[index][field] = value;
    setDebts(updated);
  };

  const addDebtItem = () => {
    if (debts.length < 6) {
      setDebts([...debts, { name: `Facility ${debts.length + 1}`, balance: 3000, apr: 18.9, monthlyPayment: 100 }]);
    }
  };

  const removeDebtItem = (index) => {
    if (debts.length > 1) {
      setDebts(debts.filter((_, i) => i !== index));
    }
  };

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
            <span style={{ color: '#F1F5F9', fontWeight: 600 }}>United Kingdom</span>
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
        padding: '44px 0 52px',
        borderBottom: '3px solid #D4A017'
      }}>
        <div className="container" style={{ maxWidth: '1180px' }}>
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
            <UKFlag size={18} />
            HMRC PAYE, National Insurance & Salary Suite
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 3.8vw, 2.7rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '14px',
            color: '#FFFFFF'
          }}>
            United Kingdom Tax & Take-Home Pay Calculator
          </h1>

          <p style={{
            fontSize: '1.02rem',
            color: '#CBD5E1',
            maxWidth: '820px',
            lineHeight: 1.6,
            marginBottom: '24px'
          }}>
            The authoritative UK salary calculation suite aligned with HMRC legislation for tax years <strong>2026/27</strong> and <strong>2025/26</strong>. Instant calculations for Take-Home Pay, Hourly Wages, Maternity/Sick Leave, Two Jobs, Pro-Rata, Mortgage Repayments, and Debt Consolidation with 100% mathematical parity.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '0.86rem' }}>
              <ShieldCheck size={18} color="#D4A017" />
              <span>HMRC & Scottish Budget Compliant</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '0.86rem' }}>
              <Sparkles size={18} color="#D4A017" />
              <span>9 Dedicated Calculators</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '0.86rem' }}>
              <TrendingUp size={18} color="#D4A017" />
              <span>Penny-Exact Mathematical Parity</span>
            </div>
          </div>
        </div>
      </section>

      {/* TOP SECTION: 9 UK CALCULATOR DIRECTORY CARDS (Matching Screenshot 1 & 2 in Luxury Palette) */}
      <section className="container" style={{ maxWidth: '1180px', marginTop: '-24px', marginBottom: '40px' }}>
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E2E8F0',
          padding: '24px 24px 28px',
          boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px', borderBottom: '1px solid #F1F5F9', paddingBottom: '14px' }}>
            <div>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#D4A017', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Complete Financial & Salary Toolkit
              </span>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                Select UK Calculator
              </h2>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>
              Click any card to launch interactive workstation below
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '16px'
          }}>
            {UK_CALCULATORS_DIRECTORY.map((dir) => {
              const isSelected = activeCalculatorId === dir.id;
              return (
                <div
                  key={dir.id}
                  onClick={() => handleSelectCalculator(dir.id)}
                  style={{
                    backgroundColor: isSelected ? '#FFFBEB' : '#F8FAFC',
                    border: isSelected ? '2px solid #D4A017' : '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '18px 18px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    boxShadow: isSelected ? '0 4px 14px rgba(212, 160, 23, 0.18)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.borderColor = '#CBD5E1';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#F8FAFC';
                      e.currentTarget.style.borderColor = '#E2E8F0';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        backgroundColor: isSelected ? '#D4A017' : '#E2E8F0',
                        color: isSelected ? '#0F172A' : '#475569',
                        padding: '2px 8px',
                        borderRadius: '12px'
                      }}>
                        {dir.badge}
                      </span>
                      {isSelected && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.76rem', color: '#B4820E', fontWeight: 700 }}>
                          <Check size={14} /> Active
                        </span>
                      )}
                    </div>

                    <h3 style={{
                      fontSize: '1.08rem',
                      fontWeight: 700,
                      color: isSelected ? '#92400E' : '#0F172A',
                      marginBottom: '6px',
                      lineHeight: 1.3
                    }}>
                      {dir.name}
                    </h3>

                    <p style={{
                      fontSize: '0.84rem',
                      color: '#475569',
                      lineHeight: 1.45,
                      margin: 0
                    }}>
                      {dir.tagline}
                    </p>
                  </div>

                  <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px', color: isSelected ? '#B4820E' : '#0F172A', fontSize: '0.82rem', fontWeight: 700 }}>
                    <span>Launch Calculator</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTERACTIVE WORKSTATION */}
      <div ref={workstationRef} className="container" style={{ maxWidth: '1180px', marginBottom: '50px' }}>
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1.5px solid #E2E8F0',
          boxShadow: '0 8px 30px rgba(15, 23, 42, 0.08)',
          overflow: 'hidden'
        }}>
          {/* Workstation Header & Tabs */}
          <div style={{
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            padding: '20px 28px',
            borderBottom: '2px solid #D4A017',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#D4A017', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Interactive Engine
              </span>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 800, margin: 0, color: '#FFFFFF' }}>
                {UK_CALCULATORS_DIRECTORY.find(c => c.id === activeCalculatorId)?.name || 'UK Tax Calculator'}
              </h2>
            </div>

            {/* Global Tax Year & Scotland Toggle for tax calculators */}
            {['take-home', 'hourly-wage', 'maternity-sick', 'required-salary', 'two-jobs', 'pro-rata', 'compare-salaries'].includes(activeCalculatorId) && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ fontSize: '0.84rem', color: '#CBD5E1', fontWeight: 600 }}>Tax Year:</label>
                  <select
                    value={taxYear}
                    onChange={(e) => setTaxYear(e.target.value)}
                    style={{
                      backgroundColor: '#1E293B',
                      color: '#FFFFFF',
                      border: '1px solid #475569',
                      borderRadius: '6px',
                      padding: '6px 12px',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    <option value="2026/27">2026 / 27</option>
                    <option value="2025/26">2025 / 26</option>
                    <option value="2024/25">2024 / 25</option>
                  </select>
                </div>

                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: isScotland ? 'rgba(212, 160, 23, 0.2)' : 'rgba(255,255,255,0.06)',
                  border: isScotland ? '1px solid #D4A017' : '1px solid rgba(255,255,255,0.12)',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: isScotland ? '#D4A017' : '#CBD5E1'
                }}>
                  <input
                    type="checkbox"
                    checked={isScotland}
                    onChange={(e) => setIsScotland(e.target.checked)}
                    style={{ accentColor: '#D4A017', cursor: 'pointer' }}
                  />
                  <span>Resident in Scotland?</span>
                </label>
              </div>
            )}
          </div>

          {/* CALCULATOR 1: THE TAKE-HOME CALCULATOR (Matching Screenshot 3) */}
          {activeCalculatorId === 'take-home' && (
            <div style={{ padding: '28px 28px' }}>
              {/* Primary Salary Input Header */}
              <div style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '24px 24px',
                marginBottom: '24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '14px' }}>
                  <label style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', whiteSpace: 'nowrap' }}>
                    I want to see the breakdown for a salary of
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '14px', fontSize: '1.25rem', fontWeight: 800, color: '#B4820E' }}>£</span>
                    <input
                      type="number"
                      value={salary}
                      onChange={(e) => setSalary(Number(e.target.value) || 0)}
                      min="0"
                      step="500"
                      style={{
                        padding: '10px 16px 10px 32px',
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: '#0F172A',
                        border: '2px solid #D4A017',
                        borderRadius: '8px',
                        width: '200px',
                        backgroundColor: '#FFFFFF',
                        boxShadow: '0 2px 8px rgba(212, 160, 23, 0.15)'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '0.86rem', color: '#475569' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={isScotland}
                      onChange={(e) => setIsScotland(e.target.checked)}
                      style={{ accentColor: '#D4A017', width: '16px', height: '16px' }}
                    />
                    <span style={{ fontWeight: 600 }}>Resident in Scotland?</span>
                  </label>
                  <span style={{ color: '#94A3B8' }}>•</span>
                  <span>Applies Scottish 19%-48% income tax bands and thresholds</span>
                </div>
              </div>

              {/* Nine Category Tabs (Matching Image 3: Tax Code, Student Loan, Pension, Bonus, Overtime, Childcare, Salary Sacrifice, Taxable Benefits, Additional Options) */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '4px',
                  backgroundColor: '#0F172A',
                  padding: '6px',
                  borderRadius: '10px'
                }}>
                  {[
                    { id: 'tax-code', label: 'Tax Code' },
                    { id: 'student-loan', label: 'Student Loan' },
                    { id: 'pension', label: 'Pension' },
                    { id: 'bonus', label: 'Bonus' },
                    { id: 'overtime', label: 'Overtime' },
                    { id: 'childcare', label: 'Childcare' },
                    { id: 'salary-sacrifice', label: 'Salary Sacrifice' },
                    { id: 'benefits', label: 'Taxable Benefits' },
                    { id: 'additional', label: 'Additional Options' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      style={{
                        backgroundColor: activeTab === tab.id ? '#D4A017' : 'transparent',
                        color: activeTab === tab.id ? '#0F172A' : '#E2E8F0',
                        border: 'none',
                        padding: '10px 16px',
                        borderRadius: '6px',
                        fontWeight: 700,
                        fontSize: '0.86rem',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        whiteSpace: 'nowrap',
                        flexGrow: 1,
                        textAlign: 'center'
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Contents */}
                <div style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderTop: 'none',
                  borderRadius: '0 0 12px 12px',
                  padding: '24px 22px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                }}>
                  {/* TAB 1: Tax Code */}
                  {activeTab === 'tax-code' && (
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                        HMRC PAYE Tax Code
                      </h4>
                      <p style={{ fontSize: '0.86rem', color: '#64748B', marginBottom: '16px' }}>
                        If you know your tax code from your P60 or payslip, enter it below. The standard personal allowance code is <strong>1257L</strong> (£12,570 tax-free). Codes like <strong>BR</strong> (flat 20%), <strong>D0</strong> (flat 40%), or <strong>0T</strong> (zero allowance) are supported.
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <input
                          type="text"
                          value={taxCode}
                          onChange={(e) => setTaxCode(e.target.value.toUpperCase())}
                          placeholder="e.g. 1257L, BR, D0"
                          style={{
                            padding: '10px 14px',
                            border: '1.5px solid #CBD5E1',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            fontWeight: 700,
                            width: '180px',
                            textTransform: 'uppercase'
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => setTaxCode('1257L')}
                          style={{
                            backgroundColor: '#F1F5F9',
                            border: '1px solid #CBD5E1',
                            borderRadius: '6px',
                            padding: '8px 14px',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          Reset to 1257L
                        </button>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: Student Loan */}
                  {activeTab === 'student-loan' && (
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                        UK Student Loan Repayments
                      </h4>
                      <p style={{ fontSize: '0.86rem', color: '#64748B', marginBottom: '16px' }}>
                        Select your loan plan. Repayments are 9% (or 6% for postgraduate) of earnings over the statutory threshold.
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '16px' }}>
                        {[
                          { id: 'none', label: 'No Student Loan', desc: '£0 deduction' },
                          { id: 'plan1', label: 'Plan 1 (Pre-2012 UK)', desc: 'Threshold: £24,990 (9%)' },
                          { id: 'plan2', label: 'Plan 2 (Post-2012 Eng/Wal)', desc: 'Threshold: £27,295 (9%)' },
                          { id: 'plan4', label: 'Plan 4 (Scotland)', desc: 'Threshold: £31,395 (9%)' },
                          { id: 'plan5', label: 'Plan 5 (New 2023+)', desc: 'Threshold: £25,000 (9%)' }
                        ].map(p => (
                          <label
                            key={p.id}
                            style={{
                              border: studentLoanPlan === p.id ? '2px solid #D4A017' : '1px solid #E2E8F0',
                              backgroundColor: studentLoanPlan === p.id ? '#FFFBEB' : '#F8FAFC',
                              borderRadius: '8px',
                              padding: '12px 14px',
                              cursor: 'pointer',
                              display: 'block'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.88rem', color: '#0F172A' }}>
                              <input
                                type="radio"
                                name="studentLoan"
                                checked={studentLoanPlan === p.id}
                                onChange={() => setStudentLoanPlan(p.id)}
                                style={{ accentColor: '#D4A017' }}
                              />
                              <span>{p.label}</span>
                            </div>
                            <span style={{ fontSize: '0.76rem', color: '#64748B', marginLeft: '24px', display: 'block' }}>{p.desc}</span>
                          </label>
                        ))}
                      </div>

                      <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '12px', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={hasPostgradLoan}
                          onChange={(e) => setHasPostgradLoan(e.target.checked)}
                          style={{ accentColor: '#D4A017', width: '16px', height: '16px' }}
                        />
                        <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#0F172A' }}>
                          I also have a Postgraduate Master's / Doctoral Loan (6% above £21,000)
                        </span>
                      </label>
                    </div>
                  )}

                  {/* TAB 3: Pension */}
                  {activeTab === 'pension' && (
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                        Workplace & Personal Pension Contributions
                      </h4>
                      <p style={{ fontSize: '0.86rem', color: '#64748B', marginBottom: '16px' }}>
                        Choose whether pension is deducted via percentage, auto-enrolment qualifying earnings, or fixed monthly amount.
                      </p>

                      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '18px' }}>
                        {[
                          { id: 'none', label: 'No Pension (0%)' },
                          { id: 'percentage', label: 'Percentage (%) of Salary' },
                          { id: 'auto', label: 'Auto-Enrolment (5% of Qualifying Earnings)' },
                          { id: 'fixed', label: 'Fixed Amount (£/month)' }
                        ].map(opt => (
                          <label
                            key={opt.id}
                            style={{
                              border: pensionType === opt.id ? '2px solid #D4A017' : '1px solid #CBD5E1',
                              backgroundColor: pensionType === opt.id ? '#FFFBEB' : '#FFFFFF',
                              padding: '10px 16px',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              fontSize: '0.86rem',
                              fontWeight: 700,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              color: '#0F172A'
                            }}
                          >
                            <input
                              type="radio"
                              name="pensionType"
                              checked={pensionType === opt.id}
                              onChange={() => setPensionType(opt.id)}
                              style={{ accentColor: '#D4A017' }}
                            />
                            <span>{opt.label}</span>
                          </label>
                        ))}
                      </div>

                      {pensionType === 'percentage' && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                          <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Employee Contribution:</label>
                          <input
                            type="number"
                            value={pensionPercent}
                            onChange={(e) => setPensionPercent(Number(e.target.value) || 0)}
                            min="0"
                            max="100"
                            step="0.5"
                            style={{ padding: '8px 12px', width: '90px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700 }}
                          />
                          <span style={{ fontWeight: 700 }}>%</span>
                        </div>
                      )}

                      {pensionType === 'fixed' && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                          <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Monthly Contribution:</label>
                          <span style={{ fontWeight: 700 }}>£</span>
                          <input
                            type="number"
                            value={pensionFixedAmount}
                            onChange={(e) => setPensionFixedAmount(Number(e.target.value) || 0)}
                            min="0"
                            step="25"
                            style={{ padding: '8px 12px', width: '130px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700 }}
                          />
                          <span style={{ fontSize: '0.84rem', color: '#64748B' }}>per month</span>
                        </div>
                      )}

                      {pensionType !== 'none' && (
                        <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '14px', marginTop: '10px' }}>
                          <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                            Pension Relief Type:
                          </span>
                          <div style={{ display: 'flex', gap: '20px', fontSize: '0.85rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                              <input
                                type="radio"
                                name="pensionRelief"
                                checked={pensionReliefType === 'netpay'}
                                onChange={() => setPensionReliefType('netpay')}
                                style={{ accentColor: '#D4A017' }}
                              />
                              <span>Salary Sacrifice / Net Pay (Deducted before tax)</span>
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                              <input
                                type="radio"
                                name="pensionRelief"
                                checked={pensionReliefType === 'relief_at_source'}
                                onChange={() => setPensionReliefType('relief_at_source')}
                                style={{ accentColor: '#D4A017' }}
                              />
                              <span>Relief at Source (Deducted after tax, basic relief added)</span>
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* TAB 4: Bonus */}
                  {activeTab === 'bonus' && (
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                        Bonus Payments
                      </h4>
                      <p style={{ fontSize: '0.86rem', color: '#64748B', marginBottom: '16px' }}>
                        Enter an annual performance bonus or one-off lump sum to evaluate its marginal tax and National Insurance impact.
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Bonus Amount:</label>
                        <span style={{ fontWeight: 800, color: '#B4820E' }}>£</span>
                        <input
                          type="number"
                          value={bonusAmount}
                          onChange={(e) => setBonusAmount(Number(e.target.value) || 0)}
                          min="0"
                          step="250"
                          placeholder="0"
                          style={{ padding: '8px 12px', width: '160px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700 }}
                        />
                      </div>
                    </div>
                  )}

                  {/* TAB 5: Overtime (Matching Image 3 precisely) */}
                  {activeTab === 'overtime' && (
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                        Overtime Hours & Pay (Matching TheSalaryCalculator)
                      </h4>
                      <p style={{ fontSize: '0.86rem', color: '#64748B', marginBottom: '18px' }}>
                        How many hours of paid overtime do you do each month? Enter hours and multipliers, or specify a fixed monthly overtime sum.
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '640px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '0.88rem' }}>I do</span>
                          <input
                            type="number"
                            value={overtimeHours15}
                            onChange={(e) => setOvertimeHours15(Number(e.target.value) || 0)}
                            min="0"
                            placeholder="0"
                            style={{ width: '80px', padding: '6px 10px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700 }}
                          />
                          <span style={{ fontSize: '0.88rem' }}>hours at</span>
                          <span style={{ backgroundColor: '#F1F5F9', padding: '6px 12px', borderRadius: '6px', fontWeight: 800, border: '1px solid #CBD5E1' }}>1.5</span>
                          <span style={{ fontSize: '0.88rem' }}>times my normal hourly rate</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '0.88rem' }}>I do</span>
                          <input
                            type="number"
                            value={overtimeHours20}
                            onChange={(e) => setOvertimeHours20(Number(e.target.value) || 0)}
                            min="0"
                            placeholder="0"
                            style={{ width: '80px', padding: '6px 10px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700 }}
                          />
                          <span style={{ fontSize: '0.88rem' }}>hours at</span>
                          <span style={{ backgroundColor: '#F1F5F9', padding: '6px 12px', borderRadius: '6px', fontWeight: 800, border: '1px solid #CBD5E1' }}>2.0</span>
                          <span style={{ fontSize: '0.88rem' }}>times my normal hourly rate</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '0.88rem' }}>The normal working week is</span>
                          <input
                            type="number"
                            value={standardWeeklyHours}
                            onChange={(e) => setStandardWeeklyHours(Number(e.target.value) || 37.5)}
                            min="1"
                            step="0.5"
                            style={{ width: '80px', padding: '6px 10px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700 }}
                          />
                          <span style={{ fontSize: '0.88rem' }}>hours</span>
                        </div>
                      </div>

                      <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}>
                        <p style={{ fontSize: '0.86rem', color: '#64748B', marginBottom: '8px' }}>
                          If it is easier, you can enter the cash value of the overtime:
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ fontSize: '0.88rem' }}>I receive £</span>
                          <input
                            type="number"
                            value={overtimeCashMonthly}
                            onChange={(e) => setOvertimeCashMonthly(Number(e.target.value) || 0)}
                            min="0"
                            placeholder="0"
                            style={{ width: '130px', padding: '6px 10px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700 }}
                          />
                          <span style={{ fontSize: '0.88rem' }}>in overtime pay every month</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 6: Childcare */}
                  {activeTab === 'childcare' && (
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                        Childcare Vouchers Scheme
                      </h4>
                      <p style={{ fontSize: '0.86rem', color: '#64748B', marginBottom: '16px' }}>
                        If you receive employer-supported childcare vouchers under a salary sacrifice scheme, enter the monthly voucher value.
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Monthly Vouchers:</label>
                        <span style={{ fontWeight: 800, color: '#B4820E' }}>£</span>
                        <input
                          type="number"
                          value={childcareVouchersMonthly}
                          onChange={(e) => setChildcareVouchersMonthly(Number(e.target.value) || 0)}
                          min="0"
                          step="10"
                          placeholder="0"
                          style={{ padding: '8px 12px', width: '140px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700 }}
                        />
                        <span style={{ fontSize: '0.84rem', color: '#64748B' }}>per month</span>
                      </div>
                    </div>
                  )}

                  {/* TAB 7: Salary Sacrifice */}
                  {activeTab === 'salary-sacrifice' && (
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                        Salary Sacrifice Schemes
                      </h4>
                      <p style={{ fontSize: '0.86rem', color: '#64748B', marginBottom: '16px' }}>
                        Enter the total annual deduction for Cycle to Work, EV lease schemes, ultra-low emission vehicles, or tech benefits.
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Annual Salary Sacrifice:</label>
                        <span style={{ fontWeight: 800, color: '#B4820E' }}>£</span>
                        <input
                          type="number"
                          value={salarySacrificeAnnual}
                          onChange={(e) => setSalarySacrificeAnnual(Number(e.target.value) || 0)}
                          min="0"
                          step="100"
                          placeholder="0"
                          style={{ padding: '8px 12px', width: '160px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700 }}
                        />
                        <span style={{ fontSize: '0.84rem', color: '#64748B' }}>per year</span>
                      </div>
                    </div>
                  )}

                  {/* TAB 8: Taxable Benefits */}
                  {activeTab === 'benefits' && (
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                        Taxable Benefits in Kind (P11D Value)
                      </h4>
                      <p style={{ fontSize: '0.86rem', color: '#64748B', marginBottom: '16px' }}>
                        Enter taxable company car benefit, private medical insurance, or other employer-provided benefits reported on form P11D.
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>P11D Taxable Benefits:</label>
                        <span style={{ fontWeight: 800, color: '#B4820E' }}>£</span>
                        <input
                          type="number"
                          value={taxableBenefitsAnnual}
                          onChange={(e) => setTaxableBenefitsAnnual(Number(e.target.value) || 0)}
                          min="0"
                          step="100"
                          placeholder="0"
                          style={{ padding: '8px 12px', width: '160px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700 }}
                        />
                        <span style={{ fontSize: '0.84rem', color: '#64748B' }}>per year</span>
                      </div>
                    </div>
                  )}

                  {/* TAB 9: Additional Options */}
                  {activeTab === 'additional' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                        Additional Statutory Circumstances
                      </h4>
                      
                      <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={isOverStatePensionAge}
                          onChange={(e) => setIsOverStatePensionAge(e.target.checked)}
                          style={{ accentColor: '#D4A017', width: '16px', height: '16px' }}
                        />
                        <div>
                          <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A' }}>I am over State Pension age (No Employee NI)</span>
                          <span style={{ fontSize: '0.78rem', color: '#64748B', display: 'block' }}>Exempts employee Class 1 National Insurance</span>
                        </div>
                      </label>

                      <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={isBlind}
                          onChange={(e) => setIsBlind(e.target.checked)}
                          style={{ accentColor: '#D4A017', width: '16px', height: '16px' }}
                        />
                        <div>
                          <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A' }}>I am registered blind</span>
                          <span style={{ fontSize: '0.78rem', color: '#64748B', display: 'block' }}>Adds £3,070 Blind Person's Allowance</span>
                        </div>
                      </label>

                      <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={hasMarriageAllowance}
                          onChange={(e) => setHasMarriageAllowance(e.target.checked)}
                          style={{ accentColor: '#D4A017', width: '16px', height: '16px' }}
                        />
                        <div>
                          <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A' }}>Marriage Allowance Transfer</span>
                          <span style={{ fontSize: '0.78rem', color: '#64748B', display: 'block' }}>Transfers £1,260 unused allowance from spouse</span>
                        </div>
                      </label>
                    </div>
                  )}
                </div>
              </div>

              {/* Period Checkbox Selectors (Matching Image 3) */}
              <div style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '10px',
                padding: '14px 18px',
                marginBottom: '26px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#0F172A' }}>
                  Show Periods in Breakdown:
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  {[
                    { id: 'yearly', label: 'Yearly' },
                    { id: 'monthly', label: 'Monthly' },
                    { id: 'fourWeekly', label: '4 Weekly' },
                    { id: 'twoWeekly', label: '2 Weekly' },
                    { id: 'weekly', label: 'Weekly' },
                    { id: 'daily', label: 'Daily' }
                  ].map(p => (
                    <label key={p.id} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem', fontWeight: 600, cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={showPeriods[p.id]}
                        onChange={(e) => setShowPeriods({ ...showPeriods, [p.id]: e.target.checked })}
                        style={{ accentColor: '#D4A017' }}
                      />
                      <span>{p.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* RESULTS SUMMARY CARDS (In Luxury Gold & Navy) */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginBottom: '28px'
              }}>
                <div style={{
                  backgroundColor: '#0F172A',
                  color: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '20px 20px',
                  border: '1.5px solid #D4A017',
                  boxShadow: '0 6px 18px rgba(15, 23, 42, 0.12)'
                }}>
                  <span style={{ fontSize: '0.78rem', color: '#D4A017', fontWeight: 700, textTransform: 'uppercase' }}>
                    Net Take-Home Pay
                  </span>
                  <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', margin: '4px 0' }}>
                    {formatGBP(takeHomeResult.periods.takeHome.yearly)}
                  </div>
                  <div style={{ fontSize: '0.86rem', color: '#10B981', fontWeight: 700 }}>
                    {formatGBP(takeHomeResult.periods.takeHome.monthly)} / month
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '18px 18px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                    Total Income Tax
                  </span>
                  <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', margin: '4px 0' }}>
                    {formatGBP(takeHomeResult.periods.tax.yearly)}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748B' }}>
                    {formatGBP(takeHomeResult.periods.tax.monthly)} / mo
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '18px 18px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                    National Insurance
                  </span>
                  <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', margin: '4px 0' }}>
                    {formatGBP(takeHomeResult.periods.ni.yearly)}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748B' }}>
                    {formatGBP(takeHomeResult.periods.ni.monthly)} / mo
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '18px 18px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                    Effective Deduction Rate
                  </span>
                  <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#D4A017', margin: '4px 0' }}>
                    {formatPercent(takeHomeResult.effectiveTotalDeductionRate)}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748B' }}>
                    Tax: {formatPercent(takeHomeResult.effectiveTaxRate)}
                  </div>
                </div>
              </div>

              {/* COMPLETE BREAKDOWN TABLE (Matching TheSalaryCalculator Table Format) */}
              <div style={{
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
                marginBottom: '30px'
              }}>
                <div style={{
                  backgroundColor: '#0F172A',
                  color: '#FFFFFF',
                  padding: '14px 20px',
                  fontSize: '0.96rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span>Complete UK PAYE Salary & Deductions Breakdown</span>
                  <span style={{ fontSize: '0.8rem', color: '#D4A017', fontWeight: 600 }}>
                    Tax Year: {taxYear} • {isScotland ? 'Scottish Bands' : 'England & Wales Rates'}
                  </span>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right', fontSize: '0.88rem' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '2px solid #E2E8F0', color: '#475569', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
                        <th style={{ padding: '12px 16px', textAlign: 'left' }}>Period</th>
                        <th style={{ padding: '12px 14px' }}>Gross Salary</th>
                        <th style={{ padding: '12px 14px' }}>Tax-free</th>
                        <th style={{ padding: '12px 14px' }}>Total Taxable</th>
                        <th style={{ padding: '12px 14px' }}>Total Tax</th>
                        <th style={{ padding: '12px 14px' }}>Nat. Insurance</th>
                        {takeHomeResult.periods.studentLoan.yearly > 0 && <th style={{ padding: '12px 14px' }}>Student Loan</th>}
                        {takeHomeResult.periods.pension.yearly > 0 && <th style={{ padding: '12px 14px' }}>Pension</th>}
                        <th style={{ padding: '12px 14px' }}>Total Deductions</th>
                        <th style={{ padding: '12px 16px', color: '#0F172A', fontWeight: 800, backgroundColor: '#FEF3C7' }}>Take-Home Pay</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { key: 'yearly', label: 'Yearly' },
                        { key: 'monthly', label: 'Monthly' },
                        { key: 'fourWeekly', label: '4 Weekly' },
                        { key: 'twoWeekly', label: '2 Weekly' },
                        { key: 'weekly', label: 'Weekly' },
                        { key: 'daily', label: 'Daily' }
                      ].filter(p => showPeriods[p.key]).map((p, idx) => {
                        const isEven = idx % 2 === 0;
                        const grossVal = takeHomeResult.periods.gross[p.key];
                        const allowanceVal = takeHomeResult.personalAllowance / (p.key === 'yearly' ? 1 : p.key === 'monthly' ? 12 : p.key === 'fourWeekly' ? 13 : p.key === 'twoWeekly' ? 26 : p.key === 'weekly' ? 52 : 260);
                        const taxableVal = takeHomeResult.periods.taxable[p.key];
                        const taxVal = takeHomeResult.periods.tax[p.key];
                        const niVal = takeHomeResult.periods.ni[p.key];
                        const slVal = takeHomeResult.periods.studentLoan[p.key];
                        const penVal = takeHomeResult.periods.pension[p.key];
                        const deductionsVal = taxVal + niVal + slVal + penVal;
                        const takeHomeVal = takeHomeResult.periods.takeHome[p.key];

                        return (
                          <tr key={p.key} style={{ backgroundColor: isEven ? '#FFFFFF' : '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                            <td style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, color: '#0F172A' }}>
                              {p.label}
                            </td>
                            <td style={{ padding: '12px 14px', fontWeight: 600 }}>{formatGBP(grossVal)}</td>
                            <td style={{ padding: '12px 14px', color: '#64748B' }}>{formatGBP(allowanceVal)}</td>
                            <td style={{ padding: '12px 14px' }}>{formatGBP(taxableVal)}</td>
                            <td style={{ padding: '12px 14px', color: '#B45309', fontWeight: 600 }}>{formatGBP(taxVal)}</td>
                            <td style={{ padding: '12px 14px', color: '#334155' }}>{formatGBP(niVal)}</td>
                            {takeHomeResult.periods.studentLoan.yearly > 0 && <td style={{ padding: '12px 14px', color: '#475569' }}>{formatGBP(slVal)}</td>}
                            {takeHomeResult.periods.pension.yearly > 0 && <td style={{ padding: '12px 14px', color: '#475569' }}>{formatGBP(penVal)}</td>}
                            <td style={{ padding: '12px 14px', fontWeight: 700, color: '#B4820E' }}>{formatGBP(deductionsVal)}</td>
                            <td style={{ padding: '12px 16px', fontWeight: 800, color: '#047857', backgroundColor: '#FEF3C7', fontSize: '0.92rem' }}>
                              {formatGBP(takeHomeVal)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* CALCULATOR 2: HOURLY WAGE CALCULATOR */}
          {activeCalculatorId === 'hourly-wage' && (
            <div style={{ padding: '28px 28px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', marginBottom: '26px' }}>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Hourly Rate (£/hr):</label>
                  <input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value) || 0)}
                    step="0.5"
                    style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #CBD5E1', borderRadius: '8px', fontWeight: 700, fontSize: '1rem' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Hours Per Week:</label>
                  <input
                    type="number"
                    value={hourlyHoursPerWeek}
                    onChange={(e) => setHourlyHoursPerWeek(Number(e.target.value) || 0)}
                    step="0.5"
                    style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #CBD5E1', borderRadius: '8px', fontWeight: 700, fontSize: '1rem' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Overtime Hours/Week:</label>
                  <input
                    type="number"
                    value={hourlyOvertimeHours}
                    onChange={(e) => setHourlyOvertimeHours(Number(e.target.value) || 0)}
                    step="1"
                    style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #CBD5E1', borderRadius: '8px', fontWeight: 700, fontSize: '1rem' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Overtime Multiplier:</label>
                  <select
                    value={hourlyOvertimeMultiplier}
                    onChange={(e) => setHourlyOvertimeMultiplier(Number(e.target.value))}
                    style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #CBD5E1', borderRadius: '8px', fontWeight: 700, fontSize: '1rem' }}
                  >
                    <option value="1.0">1.0x (Standard)</option>
                    <option value="1.5">1.5x (Time and a Half)</option>
                    <option value="2.0">2.0x (Double Time)</option>
                  </select>
                </div>
              </div>

              {/* Hourly Wage Results */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                <div style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1.5px solid #D4A017' }}>
                  <span style={{ fontSize: '0.78rem', color: '#D4A017', fontWeight: 700, textTransform: 'uppercase' }}>Annual Equivalent Gross</span>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, margin: '4px 0' }}>{formatGBP(hourlyWageResult.totalAnnualGross)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>{formatGBP(hourlyWageResult.regularAnnualGross)} regular + {formatGBP(hourlyWageResult.overtimeAnnualGross)} OT</span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Monthly Take-Home</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#047857', margin: '4px 0' }}>{formatGBP(hourlyWageResult.takeHomeResult.periods.takeHome.monthly)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>Net after Tax & NI</span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Weekly Take-Home</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', margin: '4px 0' }}>{formatGBP(hourlyWageResult.takeHomeResult.periods.takeHome.weekly)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>{formatGBP(hourlyWageResult.takeHomeResult.periods.takeHome.daily)} / working day</span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Effective Net Rate</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#B4820E', margin: '4px 0' }}>{formatGBP(hourlyWageResult.effectiveNetHourlyRate)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>In-pocket per hour worked</span>
                </div>
              </div>
            </div>
          )}

          {/* CALCULATOR 3: MATERNITY / SICK PAY */}
          {activeCalculatorId === 'maternity-sick' && (
            <div style={{ padding: '28px 28px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '24px' }}>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Regular Annual Salary:</label>
                  <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '12px', fontWeight: 700, color: '#B4820E' }}>£</span>
                    <input
                      type="number"
                      value={maternitySalary}
                      onChange={(e) => setMaternitySalary(Number(e.target.value) || 0)}
                      step="500"
                      style={{ width: '100%', padding: '10px 14px 10px 28px', border: '1.5px solid #CBD5E1', borderRadius: '8px', fontWeight: 700, fontSize: '1rem' }}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Leave Category:</label>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => setLeaveType('maternity')}
                      style={{
                        flexGrow: 1,
                        padding: '10px',
                        borderRadius: '6px',
                        border: leaveType === 'maternity' ? '2px solid #D4A017' : '1px solid #CBD5E1',
                        backgroundColor: leaveType === 'maternity' ? '#FFFBEB' : '#FFFFFF',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      Maternity (SMP)
                    </button>
                    <button
                      onClick={() => setLeaveType('sick')}
                      style={{
                        flexGrow: 1,
                        padding: '10px',
                        borderRadius: '6px',
                        border: leaveType === 'sick' ? '2px solid #D4A017' : '1px solid #CBD5E1',
                        backgroundColor: leaveType === 'sick' ? '#FFFBEB' : '#FFFFFF',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      Sick Pay (SSP)
                    </button>
                  </div>
                </div>
              </div>

              {/* Maternity / Sick Results */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                <div style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1.5px solid #D4A017' }}>
                  <span style={{ fontSize: '0.78rem', color: '#D4A017', fontWeight: 700, textTransform: 'uppercase' }}>Leave Monthly Take-Home</span>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, margin: '4px 0' }}>{formatGBP(maternitySickResult.leaveMonthlyTakeHome)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>Annualized: {formatGBP(maternitySickResult.totalLeavePayAnnual)}</span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Regular Monthly Take-Home</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', margin: '4px 0' }}>{formatGBP(maternitySickResult.regularMonthlyTakeHome)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>Full pay baseline</span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '0.78rem', color: '#B45309', fontWeight: 700, textTransform: 'uppercase' }}>Monthly Net Difference</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#B45309', margin: '4px 0' }}>- {formatGBP(maternitySickResult.monthlyReduction)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>Expected monthly drop</span>
                </div>
              </div>
            </div>
          )}

          {/* CALCULATOR 4: REQUIRED SALARY (REVERSE TAX) */}
          {activeCalculatorId === 'required-salary' && (
            <div style={{ padding: '28px 28px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px', marginBottom: '24px' }}>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Target Desired Monthly Take-Home:</label>
                  <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '12px', fontWeight: 700, color: '#B4820E' }}>£</span>
                    <input
                      type="number"
                      value={desiredMonthlyNet}
                      onChange={(e) => setDesiredMonthlyNet(Number(e.target.value) || 0)}
                      step="100"
                      style={{ width: '100%', padding: '10px 14px 10px 28px', border: '1.5px solid #CBD5E1', borderRadius: '8px', fontWeight: 700, fontSize: '1rem' }}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '24px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.86rem', fontWeight: 600, cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={reqHasStudentLoan}
                      onChange={(e) => setReqHasStudentLoan(e.target.checked)}
                      style={{ accentColor: '#D4A017' }}
                    />
                    <span>Include Student Loan?</span>
                  </label>
                </div>
              </div>

              {/* Required Salary Results */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                <div style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1.5px solid #D4A017' }}>
                  <span style={{ fontSize: '0.78rem', color: '#D4A017', fontWeight: 700, textTransform: 'uppercase' }}>Required Annual Gross Salary</span>
                  <div style={{ fontSize: '1.85rem', fontWeight: 800, margin: '4px 0' }}>{formatGBP(requiredSalaryResult.requiredAnnualSalary)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>{formatGBP(requiredSalaryResult.requiredMonthlySalary)} / month gross</span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Produces Desired Take-Home</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#047857', margin: '4px 0' }}>{formatGBP(requiredSalaryResult.result.periods.takeHome.monthly)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>Annual: {formatGBP(requiredSalaryResult.result.takeHomePay)}</span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Total Annual Deductions</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#B4820E', margin: '4px 0' }}>{formatGBP(requiredSalaryResult.result.totalDeductions)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>Tax: {formatGBP(requiredSalaryResult.result.incomeTax)} • NI: {formatGBP(requiredSalaryResult.result.nationalInsurance)}</span>
                </div>
              </div>
            </div>
          )}

          {/* CALCULATOR 5: TWO JOBS CALCULATOR */}
          {activeCalculatorId === 'two-jobs' && (
            <div style={{ padding: '28px 28px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                <div style={{ backgroundColor: '#F8FAFC', padding: '18px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>Primary Employment (Job 1)</h4>
                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Gross Salary:</label>
                    <input
                      type="number"
                      value={job1Salary}
                      onChange={(e) => setJob1Salary(Number(e.target.value) || 0)}
                      step="500"
                      style={{ width: '100%', padding: '8px 12px', border: '1.5px solid #CBD5E1', borderRadius: '6px', fontWeight: 700 }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Tax Code (Standard):</label>
                    <input
                      type="text"
                      value={job1TaxCode}
                      onChange={(e) => setJob1TaxCode(e.target.value.toUpperCase())}
                      style={{ width: '100%', padding: '8px 12px', border: '1.5px solid #CBD5E1', borderRadius: '6px', fontWeight: 700 }}
                    />
                  </div>
                </div>

                <div style={{ backgroundColor: '#F8FAFC', padding: '18px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>Secondary Employment (Job 2)</h4>
                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Gross Salary:</label>
                    <input
                      type="number"
                      value={job2Salary}
                      onChange={(e) => setJob2Salary(Number(e.target.value) || 0)}
                      step="500"
                      style={{ width: '100%', padding: '8px 12px', border: '1.5px solid #CBD5E1', borderRadius: '6px', fontWeight: 700 }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Secondary Tax Code (BR / 0T / D0):</label>
                    <input
                      type="text"
                      value={job2TaxCode}
                      onChange={(e) => setJob2TaxCode(e.target.value.toUpperCase())}
                      style={{ width: '100%', padding: '8px 12px', border: '1.5px solid #CBD5E1', borderRadius: '6px', fontWeight: 700 }}
                    />
                  </div>
                </div>
              </div>

              {/* Combined Results */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                <div style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1.5px solid #D4A017' }}>
                  <span style={{ fontSize: '0.78rem', color: '#D4A017', fontWeight: 700, textTransform: 'uppercase' }}>Combined Monthly Net</span>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, margin: '4px 0' }}>{formatGBP(twoJobsResult.combined.monthlyTakeHome)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>Annual: {formatGBP(twoJobsResult.combined.takeHome)}</span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Combined Gross Income</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', margin: '4px 0' }}>{formatGBP(twoJobsResult.combined.gross)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>Job 1: {formatGBP(twoJobsResult.job1.totalGrossIncome)} • Job 2: {formatGBP(twoJobsResult.job2.totalGrossIncome)}</span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Total Combined Tax & NI</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#B4820E', margin: '4px 0' }}>{formatGBP(twoJobsResult.combined.tax + twoJobsResult.combined.ni)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>Tax: {formatGBP(twoJobsResult.combined.tax)} • NI: {formatGBP(twoJobsResult.combined.ni)}</span>
                </div>
              </div>
            </div>
          )}

          {/* CALCULATOR 6: PRO-RATA CALCULATOR */}
          {activeCalculatorId === 'pro-rata' && (
            <div style={{ padding: '28px 28px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', marginBottom: '24px' }}>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Full-Time Equivalent (FTE) Salary:</label>
                  <input
                    type="number"
                    value={fteSalary}
                    onChange={(e) => setFteSalary(Number(e.target.value) || 0)}
                    step="500"
                    style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #CBD5E1', borderRadius: '8px', fontWeight: 700 }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Standard Full-Time Hours/Week:</label>
                  <input
                    type="number"
                    value={standardFteHours}
                    onChange={(e) => setStandardFteHours(Number(e.target.value) || 37.5)}
                    step="0.5"
                    style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #CBD5E1', borderRadius: '8px', fontWeight: 700 }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Actual Part-Time Hours/Week:</label>
                  <input
                    type="number"
                    value={actualPartHours}
                    onChange={(e) => setActualPartHours(Number(e.target.value) || 0)}
                    step="0.5"
                    style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #CBD5E1', borderRadius: '8px', fontWeight: 700 }}
                  />
                </div>
              </div>

              {/* Pro-Rata Results */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                <div style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1.5px solid #D4A017' }}>
                  <span style={{ fontSize: '0.78rem', color: '#D4A017', fontWeight: 700, textTransform: 'uppercase' }}>Pro-Rata Actual Gross</span>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, margin: '4px 0' }}>{formatGBP(proRataResult.proRataGross)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>{proRataResult.proRataPercentage} of Full-Time ({formatGBP(proRataResult.fteSalary)})</span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Part-Time Monthly Take-Home</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#047857', margin: '4px 0' }}>{formatGBP(proRataResult.proRataTakeHome.periods.takeHome.monthly)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>Yearly: {formatGBP(proRataResult.proRataTakeHome.takeHomePay)}</span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Full-Time Monthly Equivalent</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', margin: '4px 0' }}>{formatGBP(proRataResult.fteTakeHome.periods.takeHome.monthly)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>If working {standardFteHours}h full time</span>
                </div>
              </div>
            </div>
          )}

          {/* CALCULATOR 7: COMPARE TWO SALARIES */}
          {activeCalculatorId === 'compare-salaries' && (
            <div style={{ padding: '28px 28px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                <div style={{ backgroundColor: '#F8FAFC', padding: '18px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>Role A (Current Salary / Offer 1)</h4>
                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Gross Salary:</label>
                    <input
                      type="number"
                      value={compareSalaryA}
                      onChange={(e) => setCompareSalaryA(Number(e.target.value) || 0)}
                      step="500"
                      style={{ width: '100%', padding: '8px 12px', border: '1.5px solid #CBD5E1', borderRadius: '6px', fontWeight: 700 }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Pension (%):</label>
                    <input
                      type="number"
                      value={comparePensionA}
                      onChange={(e) => setComparePensionA(Number(e.target.value) || 0)}
                      min="0"
                      style={{ width: '100%', padding: '8px 12px', border: '1.5px solid #CBD5E1', borderRadius: '6px', fontWeight: 700 }}
                    />
                  </div>
                </div>

                <div style={{ backgroundColor: '#F8FAFC', padding: '18px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>Role B (New Salary / Offer 2)</h4>
                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Gross Salary:</label>
                    <input
                      type="number"
                      value={compareSalaryB}
                      onChange={(e) => setCompareSalaryB(Number(e.target.value) || 0)}
                      step="500"
                      style={{ width: '100%', padding: '8px 12px', border: '1.5px solid #CBD5E1', borderRadius: '6px', fontWeight: 700 }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Pension (%):</label>
                    <input
                      type="number"
                      value={comparePensionB}
                      onChange={(e) => setComparePensionB(Number(e.target.value) || 0)}
                      min="0"
                      style={{ width: '100%', padding: '8px 12px', border: '1.5px solid #CBD5E1', borderRadius: '6px', fontWeight: 700 }}
                    />
                  </div>
                </div>
              </div>

              {/* Comparison Results */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                <div style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1.5px solid #D4A017' }}>
                  <span style={{ fontSize: '0.78rem', color: '#D4A017', fontWeight: 700, textTransform: 'uppercase' }}>Net Monthly Difference</span>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, margin: '4px 0', color: compareSalariesResult.diff.netMonthly >= 0 ? '#10B981' : '#B45309' }}>
                    {compareSalariesResult.diff.netMonthly >= 0 ? '+' : ''}{formatGBP(compareSalariesResult.diff.netMonthly)} / mo
                  </div>
                  <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>Yearly: {formatGBP(compareSalariesResult.diff.netAnnual)}</span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Gross Salary Raise</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', margin: '4px 0' }}>{formatGBP(compareSalariesResult.diff.grossAnnual)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>Before tax & national insurance</span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Marginal Retention Rate</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#B4820E', margin: '4px 0' }}>{formatPercent(compareSalariesResult.diff.retentionRate)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>Of every extra £1, you keep {formatGBP(compareSalariesResult.diff.retentionRate)}</span>
                </div>
              </div>
            </div>
          )}

          {/* CALCULATOR 8: MORTGAGE REPAYMENT */}
          {activeCalculatorId === 'mortgage-repayment' && (
            <div style={{ padding: '28px 28px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '18px', marginBottom: '24px' }}>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Property Price (£):</label>
                  <input
                    type="number"
                    value={mortgagePrice}
                    onChange={(e) => setMortgagePrice(Number(e.target.value) || 0)}
                    step="5000"
                    style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #CBD5E1', borderRadius: '8px', fontWeight: 700 }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Deposit Amount (£):</label>
                  <input
                    type="number"
                    value={mortgageDeposit}
                    onChange={(e) => setMortgageDeposit(Number(e.target.value) || 0)}
                    step="2500"
                    style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #CBD5E1', borderRadius: '8px', fontWeight: 700 }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Interest Rate (% APR):</label>
                  <input
                    type="number"
                    value={mortgageInterestRate}
                    onChange={(e) => setMortgageInterestRate(Number(e.target.value) || 0)}
                    step="0.05"
                    style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #CBD5E1', borderRadius: '8px', fontWeight: 700 }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Mortgage Term (Years):</label>
                  <input
                    type="number"
                    value={mortgageTermYears}
                    onChange={(e) => setMortgageTermYears(Number(e.target.value) || 25)}
                    min="5"
                    max="40"
                    style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #CBD5E1', borderRadius: '8px', fontWeight: 700 }}
                  />
                </div>
              </div>

              {/* Mortgage Results */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                <div style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1.5px solid #D4A017' }}>
                  <span style={{ fontSize: '0.78rem', color: '#D4A017', fontWeight: 700, textTransform: 'uppercase' }}>Monthly Mortgage Repayment</span>
                  <div style={{ fontSize: '1.85rem', fontWeight: 800, margin: '4px 0' }}>{formatGBP(mortgageResult.monthlyPayment)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>Borrowing {formatGBP(mortgageResult.loanAmount)} ({mortgageResult.ltv}% LTV)</span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Total Interest Over Term</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#B4820E', margin: '4px 0' }}>{formatGBP(mortgageResult.totalInterest)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>Over {mortgageTermYears} years</span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Total Capital & Interest</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', margin: '4px 0' }}>{formatGBP(mortgageResult.totalRepaid)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>Total cash repaid</span>
                </div>
              </div>
            </div>
          )}

          {/* CALCULATOR 9: DEBT CONSOLIDATION */}
          {activeCalculatorId === 'debt-consolidation' && (
            <div style={{ padding: '28px 28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>Existing Debt Liabilities:</h4>
                {debts.length < 6 && (
                  <button
                    onClick={addDebtItem}
                    style={{
                      backgroundColor: '#F1F5F9',
                      border: '1px solid #CBD5E1',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    + Add Debt Facility
                  </button>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
                {debts.map((d, idx) => (
                  <div key={idx} style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1fr 1.2fr 40px', gap: '10px', alignItems: 'center', backgroundColor: '#F8FAFC', padding: '10px 14px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <input
                      type="text"
                      value={d.name}
                      onChange={(e) => updateDebtItem(idx, 'name', e.target.value)}
                      style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.86rem', fontWeight: 600 }}
                    />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ fontSize: '0.84rem', fontWeight: 700 }}>£</span>
                      <input
                        type="number"
                        value={d.balance}
                        onChange={(e) => updateDebtItem(idx, 'balance', Number(e.target.value) || 0)}
                        style={{ width: '100%', padding: '6px 10px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.86rem', fontWeight: 700 }}
                      />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <input
                        type="number"
                        value={d.apr}
                        onChange={(e) => updateDebtItem(idx, 'apr', Number(e.target.value) || 0)}
                        step="0.1"
                        style={{ width: '100%', padding: '6px 10px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.86rem', fontWeight: 700 }}
                      />
                      <span style={{ fontSize: '0.84rem', fontWeight: 700 }}>%</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ fontSize: '0.84rem', fontWeight: 700 }}>£</span>
                      <input
                        type="number"
                        value={d.monthlyPayment}
                        onChange={(e) => updateDebtItem(idx, 'monthlyPayment', Number(e.target.value) || 0)}
                        style={{ width: '100%', padding: '6px 10px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.86rem', fontWeight: 700 }}
                      />
                    </div>
                    {debts.length > 1 && (
                      <button
                        onClick={() => removeDebtItem(idx)}
                        style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', fontSize: '1.2rem', fontWeight: 700 }}
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ backgroundColor: '#FFFBEB', border: '1.5px solid #D4A017', borderRadius: '10px', padding: '16px 18px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <div>
                  <label style={{ fontSize: '0.84rem', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Consolidation Loan APR (%):</label>
                  <input
                    type="number"
                    value={consolidationApr}
                    onChange={(e) => setConsolidationApr(Number(e.target.value) || 0)}
                    step="0.1"
                    style={{ width: '110px', padding: '6px 10px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700 }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.84rem', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Consolidation Term (Years):</label>
                  <input
                    type="number"
                    value={consolidationTermYears}
                    onChange={(e) => setConsolidationTermYears(Number(e.target.value) || 1)}
                    min="1"
                    max="10"
                    style={{ width: '110px', padding: '6px 10px', borderRadius: '6px', border: '1.5px solid #CBD5E1', fontWeight: 700 }}
                  />
                </div>
              </div>

              {/* Debt Results */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                <div style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1.5px solid #D4A017' }}>
                  <span style={{ fontSize: '0.78rem', color: '#D4A017', fontWeight: 700, textTransform: 'uppercase' }}>Monthly Cash Savings</span>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, margin: '4px 0', color: debtResult.monthlySaving >= 0 ? '#10B981' : '#CBD5E1' }}>
                    {debtResult.monthlySaving >= 0 ? '+' : ''}{formatGBP(debtResult.monthlySaving)} / mo
                  </div>
                  <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>New Monthly: {formatGBP(debtResult.newMonthlyPayment)} vs Old: {formatGBP(debtResult.totalExistingMonthly)}</span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Total Debt Balance</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', margin: '4px 0' }}>{formatGBP(debtResult.totalExistingBalance)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>Consolidated into 1 loan</span>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>New Total Interest</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#B4820E', margin: '4px 0' }}>{formatGBP(debtResult.newTotalInterest)}</div>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>Total repaid: {formatGBP(debtResult.newTotalRepaid)}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* COMPREHENSIVE EDUCATIONAL GUIDE: HOW TO USE THE TAKE-HOME CALCULATOR & UK PAYE GUIDE (Matching Screenshot 4) */}
      <section className="container" style={{ maxWidth: '1180px', marginBottom: '40px' }}>
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E2E8F0',
          padding: '36px 32px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#D4A017', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
            <FileText size={16} />
            HMRC PAYE Operational Reference
          </div>
          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0F172A', marginBottom: '18px' }}>
            How to use the Take-Home Calculator & UK PAYE Guide
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.94rem', color: '#334155', lineHeight: 1.65 }}>
            <p>
              To use the tax calculator, enter your annual gross salary (or the salary of a new role you are evaluating) in the salary box above. The engine computes your net take-home pay, total income tax, and National Insurance contributions in real time across yearly, monthly, 4-weekly, 2-weekly, weekly, and daily frequencies.
            </p>

            <p>
              <strong>Bonus & Overtime Payments:</strong> If you are receiving a bonus payment in a specific pay period, enter the value in the Bonus tab. The calculator models the exact marginal deduction. For shift workers, specify your monthly overtime hours and multiplier (such as 1.5x time-and-a-half or 2.0x double time) to see how additional hours convert into take-home cash.
            </p>

            <p>
              <strong>Scottish Tax Residency:</strong> If your main residence is in Scotland, check the <em>"Resident in Scotland?"</em> toggle. HMRC applies Scottish Income Tax rates set by the Scottish Parliament: 19% (Starter), 20% (Basic), 21% (Intermediate), 42% (Higher), 45% (Advanced), and 48% (Top Rate). National Insurance remains governed by UK-wide Westminster thresholds.
            </p>

            <p>
              <strong>HMRC Tax Codes:</strong> Your tax code informs your employer how much tax-free personal allowance to allocate before deducting tax. The standard code for 2024/25, 2025/26, and 2026/27 is <strong>1257L</strong>, granting £12,570 of tax-free personal allowance. For second jobs or pension income, common emergency codes include <strong>BR</strong> (20% flat tax), <strong>D0</strong> (40% flat tax), or <strong>0T</strong> (no personal allowance with standard rate bands).
            </p>

            <p>
              <strong>Personal Allowance Taper above £100,000:</strong> Taxpayers with adjusted net income exceeding £100,000 lose £1 of personal allowance for every £2 earned above £100,000. This creates an effective 60% marginal tax trap on earnings between £100,000 and £125,140, where the personal allowance is reduced to zero. Pension contributions and charitable gift aid can legally reduce adjusted net income below £100,000 to reclaim your allowance.
            </p>

            <p>
              <strong>Student Loan Repayments:</strong> Student loan deductions are automatically computed based on statutory thresholds:
              <br />• <strong>Plan 1:</strong> 9% on gross earnings above £24,990.
              <br />• <strong>Plan 2:</strong> 9% on gross earnings above £27,295.
              <br />• <strong>Plan 4 (Scotland):</strong> 9% on gross earnings above £31,395.
              <br />• <strong>Plan 5 (Courses starting after August 2023):</strong> 9% on earnings above £25,000.
              <br />• <strong>Postgraduate Loan:</strong> 6% on earnings above £21,000 (repaid concurrently with undergraduate loans).
            </p>

            <p>
              <strong>National Insurance Reform:</strong> Following the UK Autumn and Spring Budgets, employee Class 1 National Insurance is set at 8% between the Primary Threshold (£12,570) and the Upper Earnings Limit (£50,270), and 2% on earnings above £50,270. Individuals over State Pension age are completely exempt from employee National Insurance.
            </p>
          </div>
        </div>
      </section>

      {/* KINZEI UK & CROSS-BORDER ADVISORY CTA BANNER */}
      <section className="container" style={{ maxWidth: '1180px' }}>
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
              Kinzei UK & Cross-Border Advisory Desk
            </span>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px', lineHeight: 1.3 }}>
              Navigating UK Statutory Compliance or Expatriate Relocation?
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#CBD5E1', margin: 0, lineHeight: 1.6 }}>
              Our senior chartered tax advisers provide comprehensive structuring for UK non-domiciles, foreign income & gains (FIG) regime transitions, remittance basis rules, double taxation treaties (UK-US, UK-Pakistan), and corporate IR35 compliance.
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
            <span>Book Chartered Tax Advisory</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
