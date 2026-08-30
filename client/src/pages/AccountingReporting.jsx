import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FileSpreadsheet, BookOpen, Layers, CheckCircle2, Phone, Calendar, 
  ArrowRight, Calculator, PieChart, Cpu, Database, 
  HelpCircle, ChevronDown, ChevronUp, Sparkles, TrendingUp,
  Receipt, Landmark, ShieldCheck
} from 'lucide-react';

export default function AccountingReporting({ onOpenSchedule }) {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const phoneNumber = "923034063970";
  const defaultMessage = encodeURIComponent("Hello Kinzei Consultants, I would like to inquire regarding your Accounting & Financial Reporting services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const accountingPillars = [
    {
      icon: BookOpen,
      title: "Full-Cycle Bookkeeping & Ledgers",
      subtitle: "Day-to-Day Transaction Management",
      desc: "Systematic recording of daily sales, vendor purchases, journal vouchers, and expense classifications under customized Chart of Accounts matching your industry vertical.",
      deliverables: [
        "Double-entry general ledger and subsidiary ledgers",
        "Vendor bills and customer invoicing management",
        "Multi-currency transaction recording and FX gain/loss",
        "Clean, audit-ready digital document archive"
      ]
    },
    {
      icon: PieChart,
      title: "Monthly Management Accounts (MIS)",
      subtitle: "Executive Decision-Making Dashboards",
      desc: "Delivering timely, insightful financial statements to directors and leadership by the 10th of every month, complete with KPI ratios, variance analysis, and cash burn projections.",
      deliverables: [
        "Monthly Profit & Loss (P&L) statement with department breakdown",
        "Balance Sheet and working capital health analysis",
        "Statement of Cash Flows (Operating, Investing, Financing)",
        "Budget vs. Actual variance reporting with executive summary"
      ]
    },
    {
      icon: Layers,
      title: "IFRS Financial Statement Compilation",
      subtitle: "SECP & Statutory Tax Reporting",
      desc: "Annual financial statement compilation strictly compliant with International Financial Reporting Standards (IFRS / IFRS for SMEs) and the Fourth/Fifth Schedules of the Companies Act 2017.",
      deliverables: [
        "Complete annual statutory financial statements with full notes",
        "Compliance with SECP accounting disclosures",
        "Seamless coordination and handover with statutory auditors",
        "Tax-ready balance sheet matching FBR Iris requirements"
      ]
    },
    {
      icon: Landmark,
      title: "Bank & Merchant Reconciliations",
      subtitle: "Zero Discrepancy Assurance",
      desc: "Rigorous daily and monthly 3-way reconciliations across Pakistani commercial banks, international accounts (Wise, Payoneer, Stripe), and local merchant payment gateways.",
      deliverables: [
        "Monthly bank reconciliation statements (BRS)",
        "Stripe, Shopify, PayPal, and POS gateway clearing",
        "Inter-company loan and branch balance matching",
        "Unreconciled difference investigation and resolution"
      ]
    },
    {
      icon: Receipt,
      title: "Payroll & Withholding Tax Accounting",
      subtitle: "Confidential Payroll Processing",
      desc: "End-to-end employee salary computation, income tax withholding under Section 149, provident fund calculations, and automated monthly digital payslips.",
      deliverables: [
        "Monthly salary disbursement sheets and bank advice letters",
        "Salary tax deduction computation and CPR generation",
        "Provident fund & gratuity liability accounting",
        "Annual salary tax certificates for all staff members"
      ]
    },
    {
      icon: Database,
      title: "Cloud ERP Setup & Migration",
      subtitle: "QuickBooks, Xero, Odoo & Zoho",
      desc: "Architecture, migration, and automation of your entire financial system onto modern cloud platforms, enabling 24/7 access to live financial metrics anywhere in the world.",
      deliverables: [
        "Custom Chart of Accounts design for your specific business",
        "Historical transaction cleanup and data migration",
        "Automated bank feed sync and OCR receipt capture setup",
        "Staff training and custom financial reporting templates"
      ]
    }
  ];

  const comparisonData = [
    {
      feature: "Cost Efficiency",
      inHouse: "High overhead (Salary, benefits, workspace, software licenses)",
      kinzei: "Up to 60% lower cost with all-inclusive flat retainer model"
    },
    {
      feature: "Expertise & Oversight",
      inHouse: "Single generalist bookkeeper prone to knowledge gaps",
      kinzei: "Team of CAs, IT system specialists & High Court tax supervisors"
    },
    {
      feature: "Business Continuity",
      inHouse: "Risk of disruption during employee sick leaves or resignations",
      kinzei: "Zero downtime with dedicated backup team and strict SLAs"
    },
    {
      feature: "Technology & Tools",
      inHouse: "Manual spreadsheets or expensive disjointed software",
      kinzei: "Access to enterprise Cloud ERPs, automated bank syncs & MIS"
    },
    {
      feature: "Tax & SECP Synergy",
      inHouse: "Requires hiring external consultants for tax filings & audits",
      kinzei: "Seamless integrated tax compliance, audit readiness & SECP filings"
    }
  ];

  const onboardingSteps = [
    {
      step: "01",
      title: "Financial Diagnostic",
      desc: "We review your existing ledgers, bank statements, and tax returns to assess chart of accounts health and identify historical cleanup needs."
    },
    {
      step: "02",
      title: "System & Cloud Setup",
      desc: "We establish your secure cloud accounting instance (QuickBooks/Xero/Odoo), configure bank feeds, and set up user permission levels."
    },
    {
      step: "03",
      title: "Historical Cleanup",
      desc: "Our team reconciles past bank statements, corrects misclassified ledgers, and establishes accurate opening balances for the current fiscal year."
    },
    {
      step: "04",
      title: "Monthly Reporting Routine",
      desc: "We maintain live bookkeeping and deliver verified management accounts (P&L, Balance Sheet, Cash Flow) by the 10th of every month."
    }
  ];

  const faqs = [
    {
      q: "Can Kinzei clean up messy or backlogged accounting records from previous years?",
      a: "Yes. Our catch-up bookkeeping team specializes in reviewing historical bank statements, unrecorded invoices, and past tax returns to reconstruct complete, accurate, and audit-ready general ledgers for multiple backlogged fiscal years."
    },
    {
      q: "Which cloud accounting software do you recommend for Pakistani and international businesses?",
      a: "We work seamlessly with QuickBooks Online, Xero, Odoo ERP, Zoho Books, and Sage. For services and tech export companies, QuickBooks Online and Xero provide the best multi-currency and international bank connectivity. For manufacturing or distribution, Odoo provides robust inventory tracking."
    },
    {
      q: "How does Kinzei guarantee the security and confidentiality of our financial data?",
      a: "All financial data is processed under strict Non-Disclosure Agreements (NDAs). We utilize enterprise-grade 256-bit SSL encrypted cloud platforms with multi-factor authentication (MFA) and role-based access control, ensuring your sensitive payroll and financial records remain completely confidential."
    },
    {
      q: "How does outsourced accounting integrate with our annual tax filings?",
      a: "Because your books are maintained by Kinzei's accounting team under the supervision of our senior tax managers, your year-end financial statements seamlessly translate into FBR Iris income tax returns and sales tax reconciliations without requiring third-party adjustments."
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111827', minHeight: '100vh' }}>
      
      {/* 1. HERO BANNER */}
      <section style={{
        position: 'relative',
        padding: '90px 0 75px 0',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: '#FFFFFF',
        overflow: 'hidden'
      }}>
        {/* Glow Accent */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 160, 23, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '920px' }}>
            
            {/* Badges Bar */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
              <span style={{
                backgroundColor: 'rgba(212, 160, 23, 0.2)',
                color: '#FCD34D',
                border: '1px solid rgba(212, 160, 23, 0.4)',
                padding: '5px 14px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Cpu size={14} color="#FCD34D" />
                <span>Cloud ERP &amp; IFRS Compliant</span>
              </span>

              <span style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#E2E8F0',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '5px 14px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 700
              }}>
                QuickBooks • Xero • Odoo • Zoho
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              lineHeight: 1.15,
              fontWeight: 900,
              color: '#FFFFFF',
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}>
              Accounting &amp; Financial Reporting <span style={{ color: '#D4A017' }}>Services</span>
            </h1>

            <p style={{
              fontSize: '1.14rem',
              color: '#CBD5E1',
              lineHeight: 1.75,
              marginBottom: '36px',
              maxWidth: '820px',
              fontWeight: 500
            }}>
              Institutional-grade bookkeeping, monthly management accounts (MIS), bank reconciliations, and IFRS-compliant financial statements. Transform your financial data into clear strategic insights and seamless statutory tax filings.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenSchedule} 
                className="btn-primary" 
                style={{ padding: '14px 34px', fontSize: '0.94rem', borderRadius: '8px' }}
              >
                <Calendar size={18} />
                <span>Book Accounting Consultation</span>
              </button>

              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.94rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)',
                  transition: 'all 0.2s ease'
                }}
              >
                <Phone size={18} />
                <span>Direct WhatsApp: 03034063970</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section style={{
        backgroundColor: '#F8FAFC',
        borderBottom: '1px solid #E2E8F0',
        padding: '28px 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            textAlign: 'center'
          }}>
            {[
              { num: "99.8%", label: "Ledger Reconciliation Accuracy" },
              { num: "By 10th", label: "Monthly MIS Delivery SLA" },
              { num: "100%", label: "Tax & Audit Ready Accounts" },
              { num: "Up to 60%", label: "Cost Savings vs. Full-Time Staff" }
            ].map((stat, idx) => (
              <div key={idx} style={{ padding: '12px' }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#B8860B',
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '4px'
                }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE ACCOUNTING PILLARS */}
      <section style={{ padding: '85px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px auto' }}>
            <span className="badge-gold">Service Scope</span>
            <h2 style={{ fontSize: '2.5rem', color: '#0F172A', marginTop: '12px', marginBottom: '16px', fontWeight: 900 }}>
              End-to-End Accounting &amp; Reporting Solutions
            </h2>
            <p style={{ color: '#475569', fontSize: '1.08rem', lineHeight: 1.7, fontWeight: 500 }}>
              From transaction recording to boardroom financial presentations, our accountants and digital systems architects manage every dimension of your finances.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            {accountingPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    padding: '36px 30px',
                    boxShadow: '0 10px 30px -4px rgba(15, 23, 42, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    transition: 'all 0.3s ease'
                  }}
                  className="interactive-card"
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #E5B338 0%, #D4A017 100%)'
                  }} />

                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    backgroundColor: '#FFFBEB',
                    border: '1px solid #D4A017',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#B8860B',
                    marginBottom: '20px'
                  }}>
                    <IconComp size={28} />
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                    {pillar.title}
                  </h3>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#D4A017', textTransform: 'uppercase', marginBottom: '14px', letterSpacing: '0.5px' }}>
                    {pillar.subtitle}
                  </div>

                  <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.65, marginBottom: '22px', fontWeight: 500 }}>
                    {pillar.desc}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '18px', borderTop: '1px solid #F1F5F9' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', marginBottom: '10px' }}>
                      Key Deliverables:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {pillar.deliverables.map((del, dIdx) => (
                        <div key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span style={{ fontSize: '0.86rem', color: '#334155', lineHeight: 1.5, fontWeight: 600 }}>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. COMPARISON: IN-HOUSE VS KINZEI OUTSOURCING */}
      <section style={{ padding: '85px 0', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px auto' }}>
            <span className="badge-gold">Strategic Advantage</span>
            <h2 style={{ fontSize: '2.4rem', color: '#0F172A', marginTop: '12px', marginBottom: '16px', fontWeight: 800 }}>
              In-House Bookkeeper vs. Kinzei Outsourced Finance Team
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.65, fontWeight: 500 }}>
              Why leading enterprises and high-growth SMEs partner with Kinzei Consultants instead of hiring full-time internal bookkeepers.
            </p>
          </div>

          <div style={{
            overflowX: 'auto',
            borderRadius: '16px',
            border: '1.5px solid #E2E8F0',
            boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
            backgroundColor: '#FFFFFF'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
              <thead>
                <tr style={{ backgroundColor: '#0F172A', color: '#FFFFFF' }}>
                  <th style={{ padding: '20px 24px', fontSize: '0.94rem', fontWeight: 800, width: '25%' }}>Key Consideration</th>
                  <th style={{ padding: '20px 24px', fontSize: '0.94rem', fontWeight: 800, width: '37.5%', color: '#CBD5E1' }}>In-House Full-Time Staff</th>
                  <th style={{ padding: '20px 24px', fontSize: '0.94rem', fontWeight: 800, width: '37.5%', color: '#FCD34D' }}>Kinzei Outsourced Retainer</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, cIdx) => (
                  <tr key={cIdx} style={{
                    backgroundColor: cIdx % 2 === 0 ? '#FFFFFF' : '#F8FAFC',
                    borderBottom: '1px solid #E2E8F0'
                  }}>
                    <td style={{ padding: '18px 24px', fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: '18px 24px', fontSize: '0.9rem', color: '#64748B', fontWeight: 500 }}>
                      {row.inHouse}
                    </td>
                    <td style={{ padding: '18px 24px', fontSize: '0.9rem', color: '#0F172A', fontWeight: 700, backgroundColor: 'rgba(212, 160, 23, 0.05)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0 }} />
                        <span>{row.kinzei}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 5. ONBOARDING & IMPLEMENTATION WORKFLOW */}
      <section style={{ padding: '85px 0', backgroundColor: '#0F172A', color: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
            <span className="badge-gold">Seamless Transition</span>
            <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginTop: '12px', marginBottom: '16px', fontWeight: 800 }}>
              How We Transition Your Accounts in 4 Steps
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.65, fontWeight: 500 }}>
              Our structured onboarding methodology guarantees zero downtime and a flawless migration to institutional-grade financial reporting.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {onboardingSteps.map((step, sIdx) => (
              <div 
                key={sIdx}
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.75)',
                  borderRadius: '16px',
                  padding: '32px 24px',
                  border: '1px solid rgba(212, 160, 23, 0.25)',
                  position: 'relative'
                }}
              >
                <div style={{
                  fontSize: '2.2rem',
                  fontWeight: 900,
                  color: '#FCD34D',
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '12px'
                }}>
                  {step.step}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. SPECIALIST LEADERSHIP SPOTLIGHT */}
      <section style={{ padding: '75px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1080px' }}>
          
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            border: '1.5px solid #E2E8F0',
            padding: '40px',
            boxShadow: '0 12px 36px rgba(0,0,0,0.06)',
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '40px',
            alignItems: 'center'
          }} className="lead-grid">
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                overflow: 'hidden',
                margin: '0 auto 16px auto',
                border: '3px solid #D4A017',
                boxShadow: '0 8px 24px rgba(212, 160, 23, 0.25)'
              }}>
                <img 
                  src="/team/azeem-usman.png" 
                  alt="Azeem Usman - Head of IT & Digital Systems"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%' }}
                />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '2px' }}>
                Azeem Usman
              </h3>
              <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#B8860B', textTransform: 'uppercase', marginBottom: '6px' }}>
                Head of IT &amp; Digital Systems
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600 }}>
                Cloud ERP &amp; Financial Systems Lead
              </div>
            </div>

            <div>
              <span className="badge-gold" style={{ marginBottom: '14px' }}>Digital Architecture Support</span>
              <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
                Automate Your Accounting Workflows
              </h3>
              <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.7, marginBottom: '24px', fontWeight: 500 }}>
                Speak with our Digital Systems and Accounting supervisors regarding customized ERP setup, historical ledger cleanups, or outsourced monthly bookkeeping retainers tailored to your operational volume.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  onClick={onOpenSchedule} 
                  className="btn-primary"
                  style={{ padding: '12px 24px', fontSize: '0.88rem', borderRadius: '8px' }}
                >
                  <Calendar size={16} />
                  <span>Book Systems Consultation</span>
                </button>

                <a 
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello Azeem Usman, I would like to discuss Cloud Accounting and ERP setup with Kinzei Consultants.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ padding: '12px 22px', fontSize: '0.88rem', borderRadius: '8px' }}
                >
                  <Phone size={15} />
                  <span>WhatsApp Lead</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section style={{ padding: '85px 0', backgroundColor: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="badge-gold">Common Queries</span>
            <h2 style={{ fontSize: '2.4rem', color: '#0F172A', marginTop: '12px', marginBottom: '16px', fontWeight: 800 }}>
              Frequently Asked Questions on Accounting
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, fontWeight: 500 }}>
              Practical answers regarding bookkeeping onboarding, software integration, and tax synchronizations.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, fIdx) => (
              <div 
                key={fIdx}
                style={{
                  border: '1.5px solid #E2E8F0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  transition: 'all 0.2s ease'
                }}
              >
                <button
                  onClick={() => toggleFaq(fIdx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    backgroundColor: openFaq === fIdx ? '#FFFBEB' : '#FFFFFF',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '16px'
                  }}
                >
                  <span style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0F172A' }}>
                    {faq.q}
                  </span>
                  {openFaq === fIdx ? (
                    <ChevronUp size={20} color="#D4A017" style={{ flexShrink: 0 }} />
                  ) : (
                    <ChevronDown size={20} color="#64748B" style={{ flexShrink: 0 }} />
                  )}
                </button>

                {openFaq === fIdx && (
                  <div style={{
                    padding: '0 24px 22px 24px',
                    backgroundColor: '#FFFBEB',
                    color: '#334155',
                    fontSize: '0.96rem',
                    lineHeight: 1.7,
                    fontWeight: 500
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section style={{
        padding: '75px 0',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: '#FFFFFF',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '16px' }}>
            Transform Your Numbers into <span style={{ color: '#D4A017' }}>Growth Driver</span>
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#CBD5E1', lineHeight: 1.7, marginBottom: '34px', fontWeight: 500 }}>
            Contact our senior accounting consultants today to establish a dependable bookkeeping system, automate your bank reconciliations, or clean up historical ledgers.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenSchedule} 
              className="btn-primary" 
              style={{ padding: '14px 34px', fontSize: '0.94rem', borderRadius: '8px' }}
            >
              <Calendar size={18} />
              <span>Schedule Free Consultation</span>
            </button>

            <a 
              href="tel:03034063970" 
              className="btn-outline" 
              style={{ padding: '14px 28px', fontSize: '0.94rem', borderRadius: '8px', color: '#FFFFFF', borderColor: '#CBD5E1' }}
            >
              <Phone size={16} />
              <span>Call 03034063970</span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .lead-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            text-align: center;
          }
        }
      `}</style>

    </div>
  );
}
