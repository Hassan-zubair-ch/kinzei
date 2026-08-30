import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  BookOpen, Layers, CheckCircle2, Phone, Calendar, 
  ArrowRight, Calculator, PieChart, Database, 
  ChevronDown, ChevronUp, Receipt, Landmark, ShieldCheck 
} from 'lucide-react';

export default function AccountingReporting({ onOpenSchedule }) {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const phoneNumber = "923034063970";
  const defaultMessage = encodeURIComponent("Hello Kinzei Consultants, I would like to inquire about your Accounting & Financial Reporting services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const accountingServices = [
    {
      icon: BookOpen,
      title: "Full-Cycle Bookkeeping & General Ledger",
      desc: "Systematic recording of daily sales, vendor purchases, journal vouchers, and expense classifications under customized Chart of Accounts.",
      deliverables: [
        "General ledger & subsidiary ledgers maintenance",
        "Accounts payable & accounts receivable tracking",
        "Multi-currency transaction recording & FX gain/loss",
        "Audit-ready digital document archiving"
      ]
    },
    {
      icon: PieChart,
      title: "Monthly Management Accounts (MIS)",
      desc: "Delivering insightful financial statements by the 10th of every month, complete with KPI metrics, variance analysis, and cash flow projections.",
      deliverables: [
        "Monthly Profit & Loss (P&L) Statement",
        "Balance Sheet & Working Capital Health Analysis",
        "Statement of Cash Flows (Operating, Investing, Financing)",
        "Budget vs. Actual variance reporting"
      ]
    },
    {
      icon: Layers,
      title: "IFRS Financial Statement Compilation",
      desc: "Annual financial statement compilation compliant with International Financial Reporting Standards (IFRS) and Companies Act 2017.",
      deliverables: [
        "Statutory annual financial statements with complete disclosures",
        "SECP Fourth and Fifth Schedule compliance",
        "Seamless coordination with external statutory auditors",
        "Tax-ready balance sheet matching FBR Iris requirements"
      ]
    },
    {
      icon: Landmark,
      title: "Bank & Merchant Account Reconciliations",
      desc: "Periodic 3-way reconciliations across Pakistani commercial banks, international accounts (Wise, Payoneer, Stripe), and payment gateways.",
      deliverables: [
        "Monthly Bank Reconciliation Statements (BRS)",
        "Stripe, Shopify, PayPal, and POS gateway clearing",
        "Inter-company loan & branch balance matching",
        "Unreconciled difference investigation & resolution"
      ]
    },
    {
      icon: Receipt,
      title: "Payroll & Withholding Tax Processing",
      desc: "End-to-end employee salary computation, salary tax withholding under Section 149, provident fund calculations, and automated payslips.",
      deliverables: [
        "Monthly salary disbursement sheets & bank advice",
        "Salary withholding tax computation & CPR challans",
        "Provident fund & gratuity liability accounting",
        "Annual salary tax deduction certificates"
      ]
    },
    {
      icon: Database,
      title: "Cloud ERP Setup & Migration",
      desc: "Setup, migration, and automation of your financial system onto modern cloud platforms (QuickBooks, Xero, Odoo, Zoho Books).",
      deliverables: [
        "Custom Chart of Accounts architecture",
        "Historical ledger cleanup and balance migration",
        "Automated bank feed sync and digital receipt capture",
        "Staff training & custom reporting dashboards"
      ]
    }
  ];

  const comparisonData = [
    {
      feature: "Cost Structure",
      inHouse: "High overhead (Salary, benefits, workspace, software licenses)",
      kinzei: "Up to 60% lower cost with flat monthly retainer model"
    },
    {
      feature: "Expertise & Oversight",
      inHouse: "Single generalist bookkeeper with potential knowledge gaps",
      kinzei: "Team of Chartered Accountants & Cloud ERP specialists"
    },
    {
      feature: "Business Continuity",
      inHouse: "Risk of disruption during leaves, turnover, or vacations",
      kinzei: "Zero downtime with dedicated team redundancy and strict SLAs"
    },
    {
      feature: "Technology",
      inHouse: "Manual spreadsheets or expensive disjointed software",
      kinzei: "Access to modern Cloud ERPs, automated syncs & live MIS"
    },
    {
      feature: "Tax & SECP Synergy",
      inHouse: "Requires hiring external consultants for year-end returns",
      kinzei: "Integrated tax compliance, audit readiness & SECP filings"
    }
  ];

  const faqs = [
    {
      q: "Can Kinzei clean up backlogged accounting records from previous years?",
      a: "Yes. Our catch-up bookkeeping team reviews historical bank statements, unrecorded invoices, and past tax returns to reconstruct complete, accurate, and audit-ready general ledgers for multiple prior fiscal years."
    },
    {
      q: "Which cloud accounting software platforms do you support?",
      a: "We support QuickBooks Online, Xero, Odoo ERP, Zoho Books, and Sage. We help select and implement the best platform based on your industry, transaction volume, and currency needs."
    },
    {
      q: "How does outsourced accounting integrate with our annual tax filings?",
      a: "Because your books are maintained per statutory standards, your year-end financial statements seamlessly translate into FBR Iris income tax returns and sales tax reconciliations without requiring third-party adjustments."
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111827', minHeight: '100vh' }}>
      
      {/* 1. HERO BANNER */}
      <section style={{
        position: 'relative',
        padding: '85px 0 65px 0',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: '#FFFFFF'
      }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(212, 160, 23, 0.2)',
              color: '#FCD34D',
              border: '1px solid rgba(212, 160, 23, 0.4)',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              <ShieldCheck size={13} color="#FCD34D" />
              <span>IFRS • Cloud ERP • MIS Reporting</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)',
              lineHeight: 1.16,
              fontWeight: 900,
              color: '#FFFFFF',
              marginBottom: '16px',
              fontFamily: 'var(--font-heading)'
            }}>
              Accounting &amp; Financial Reporting <span style={{ color: '#D4A017' }}>Services</span>
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: '#CBD5E1',
              lineHeight: 1.7,
              marginBottom: '30px',
              fontWeight: 500
            }}>
              Accurate bookkeeping, monthly management accounts (MIS), bank reconciliations, and IFRS-compliant financial statements to support informed decision-making and statutory tax compliance.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenSchedule} 
                className="btn-primary" 
                style={{ padding: '13px 30px', fontSize: '0.92rem', borderRadius: '8px' }}
              >
                <Calendar size={16} />
                <span>Schedule Accounting Consultation</span>
              </button>

              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  padding: '13px 24px',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none'
                }}
              >
                <Phone size={16} />
                <span>WhatsApp: 03034063970</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE ACCOUNTING SERVICES */}
      <section style={{ padding: '75px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
            <span className="badge-gold">Service Scope</span>
            <h2 style={{ fontSize: '2.3rem', color: '#0F172A', marginTop: '10px', marginBottom: '14px', fontWeight: 900 }}>
              Accounting &amp; Reporting Solutions
            </h2>
            <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.65, fontWeight: 500 }}>
              Institutional-grade accounting, financial compilation, and cloud software integrations for modern enterprises.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px'
          }}>
            {accountingServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '14px',
                    border: '1px solid #E2E8F0',
                    padding: '30px 26px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  className="interactive-card"
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    backgroundColor: '#FFFBEB',
                    border: '1.5px solid #D4A017',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#B8860B',
                    marginBottom: '18px'
                  }}>
                    <IconComp size={24} />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                    {service.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px', fontWeight: 500 }}>
                    {service.desc}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Deliverables:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {service.deliverables.map((del, dIdx) => (
                        <div key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <CheckCircle2 size={15} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span style={{ fontSize: '0.84rem', color: '#334155', lineHeight: 1.5, fontWeight: 600 }}>{del}</span>
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

      {/* 3. COMPARISON TABLE */}
      <section style={{ padding: '75px 0', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 45px auto' }}>
            <span className="badge-gold">Strategic Advantage</span>
            <h2 style={{ fontSize: '2.3rem', color: '#0F172A', marginTop: '10px', marginBottom: '14px', fontWeight: 900 }}>
              In-House Staff vs. Kinzei Retainer Model
            </h2>
          </div>

          <div style={{
            overflowX: 'auto',
            borderRadius: '12px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
            backgroundColor: '#FFFFFF'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '650px' }}>
              <thead>
                <tr style={{ backgroundColor: '#0F172A', color: '#FFFFFF' }}>
                  <th style={{ padding: '16px 20px', fontSize: '0.9rem', fontWeight: 800, width: '25%' }}>Feature</th>
                  <th style={{ padding: '16px 20px', fontSize: '0.9rem', fontWeight: 800, width: '37.5%', color: '#CBD5E1' }}>In-House Staff</th>
                  <th style={{ padding: '16px 20px', fontSize: '0.9rem', fontWeight: 800, width: '37.5%', color: '#FCD34D' }}>Kinzei Outsourced Retainer</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, cIdx) => (
                  <tr key={cIdx} style={{
                    backgroundColor: cIdx % 2 === 0 ? '#FFFFFF' : '#F8FAFC',
                    borderBottom: '1px solid #E2E8F0'
                  }}>
                    <td style={{ padding: '14px 20px', fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: '14px 20px', fontSize: '0.86rem', color: '#64748B', fontWeight: 500 }}>
                      {row.inHouse}
                    </td>
                    <td style={{ padding: '14px 20px', fontSize: '0.86rem', color: '#0F172A', fontWeight: 700 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle2 size={15} color="#10B981" style={{ flexShrink: 0 }} />
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

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section style={{ padding: '75px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span className="badge-gold">Common Queries</span>
            <h2 style={{ fontSize: '2.2rem', color: '#0F172A', marginTop: '10px', marginBottom: '12px', fontWeight: 900 }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, fIdx) => (
              <div 
                key={fIdx}
                style={{
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <button
                  onClick={() => toggleFaq(fIdx)}
                  style={{
                    width: '100%',
                    padding: '18px 20px',
                    backgroundColor: openFaq === fIdx ? '#FFFBEB' : '#FFFFFF',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '14px'
                  }}
                >
                  <span style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0F172A' }}>
                    {faq.q}
                  </span>
                  {openFaq === fIdx ? (
                    <ChevronUp size={18} color="#D4A017" style={{ flexShrink: 0 }} />
                  ) : (
                    <ChevronDown size={18} color="#64748B" style={{ flexShrink: 0 }} />
                  )}
                </button>

                {openFaq === fIdx && (
                  <div style={{
                    padding: '0 20px 18px 20px',
                    backgroundColor: '#FFFBEB',
                    color: '#334155',
                    fontSize: '0.92rem',
                    lineHeight: 1.65,
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

      {/* 5. CALL TO ACTION BANNER */}
      <section style={{
        padding: '65px 0',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: '#FFFFFF',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <h2 style={{ fontSize: '2.3rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '14px' }}>
            Transform Your Accounting with <span style={{ color: '#D4A017' }}>Kinzei Consultants</span>
          </h2>
          <p style={{ fontSize: '1.02rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '28px', fontWeight: 500 }}>
            Connect with our accounting consultants to establish a dependable bookkeeping system, automate bank reconciliations, or clean up historical ledgers.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenSchedule} 
              className="btn-primary" 
              style={{ padding: '13px 30px', fontSize: '0.92rem', borderRadius: '8px' }}
            >
              <Calendar size={16} />
              <span>Schedule Consultation</span>
            </button>
            <a 
              href="tel:03034063970" 
              className="btn-outline" 
              style={{ padding: '13px 26px', fontSize: '0.92rem', borderRadius: '8px', color: '#FFFFFF', borderColor: '#CBD5E1' }}
            >
              <Phone size={15} />
              <span>Call 03034063970</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
