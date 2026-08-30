import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, CheckCircle2, Phone, Calendar, 
  ArrowRight, FileCheck, Search, Scale, FileText, 
  BarChart3, ChevronDown, ChevronUp, Clock, HelpCircle 
} from 'lucide-react';

export default function AuditAssurance({ onOpenSchedule }) {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const phoneNumber = "923034063970";
  const defaultMessage = encodeURIComponent("Hello Kinzei Consultants, I would like to inquire about your Audit & Assurance services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const auditServices = [
    {
      icon: ShieldCheck,
      title: "Statutory Financial Audit",
      desc: "Independent examination of annual financial statements per International Standards on Auditing (ISA) and the Companies Act 2017.",
      deliverables: [
        "Independent Auditor's Report to Shareholders",
        "Audited Balance Sheet, P&L, and Cash Flow Statements",
        "SECP, FBR & Banking Covenant Compliance",
        "Management Letter on internal control recommendations"
      ]
    },
    {
      icon: Search,
      title: "Internal Audit & Risk Governance",
      desc: "Independent evaluation of internal control mechanisms, financial procedures, and operational risk registers.",
      deliverables: [
        "Risk & Control Matrix (RCM) establishment",
        "Operational efficiency & process audit reports",
        "Anti-fraud and expenditure control reviews",
        "Board & Audit Committee quarterly reporting"
      ]
    },
    {
      icon: Scale,
      title: "Forensic Audit & Investigations",
      desc: "Specialized investigations to detect financial irregularities, fund misappropriations, and corporate dispute evidence.",
      deliverables: [
        "Forensic accounting evidence for legal proceedings",
        "Asset tracing and fund reconciliation dossiers",
        "Reconstruction of accounting ledgers",
        "Dispute resolution and litigation support"
      ]
    },
    {
      icon: BarChart3,
      title: "Financial Due Diligence (FDD)",
      desc: "Rigorous buy-side and sell-side financial reviews for mergers, acquisitions, and investment transactions.",
      deliverables: [
        "Quality of Earnings (QoE) & normalized EBITDA review",
        "Unrecorded liabilities & contingent tax exposure checks",
        "Working capital baseline assessments",
        "Transaction risk evaluation"
      ]
    },
    {
      icon: FileCheck,
      title: "Agreed-Upon Procedures (ISRS 4400)",
      desc: "Custom verification assignments tailored to specific financial accounts, donor grants, or contractual terms.",
      deliverables: [
        "Factual Findings Report with zero opinion bias",
        "Donor grant utilization verifications",
        "Physical inventory stock-take witness reports",
        "Revenue-sharing and royalty audits"
      ]
    },
    {
      icon: FileText,
      title: "Tax & Statutory Special Audits",
      desc: "Technical representation and audit readiness for FBR tax audits under Income Tax Ordinance 2001 and Sales Tax Act 1990.",
      deliverables: [
        "Sales and purchase reconciliations for FBR Iris",
        "Withholding tax deduction audit verification",
        "Comprehensive audit trail files for tax officers",
        "Mitigation of penalty notices and default surcharges"
      ]
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Planning & Scoping",
      desc: "Define materiality thresholds, evaluate industry risks, and formulate the customized audit strategy."
    },
    {
      num: "02",
      title: "Control Testing",
      desc: "Evaluate the design and operating effectiveness of internal financial and authorization controls."
    },
    {
      num: "03",
      title: "Substantive Verification",
      desc: "Perform ledger vouching, analytical procedures, direct bank confirmations, and asset verification."
    },
    {
      num: "04",
      title: "Reporting & Governance",
      desc: "Issue the Independent Auditor's Report, discuss audit adjustments, and deliver Management Letters."
    }
  ];

  const complianceSchedule = [
    {
      entity: "Private Limited Company (Paid-up Capital ≥ 3M PKR)",
      requirement: "Mandatory Annual Statutory Audit by Chartered Accountant",
      authority: "SECP (Companies Act 2017)",
      deadline: "Within 120 days of fiscal year end"
    },
    {
      entity: "Public Limited / Listed Company",
      requirement: "Mandatory Annual Audit + Half-Yearly Review (ISRE 2410)",
      authority: "SECP & PSX",
      deadline: "Quarterly within 30 days; Annual within 120 days"
    },
    {
      entity: "Single Member Company (SMC-Pvt Ltd)",
      requirement: "Statutory Financial Statements Compilation / Audit",
      authority: "SECP & FBR Iris",
      deadline: "Form A/29 with Verified Accounts"
    },
    {
      entity: "Non-Profit Organization (NPO / Section 42)",
      requirement: "Mandatory Statutory Audit + Donor Grant Audits",
      authority: "SECP, EAD & FBR",
      deadline: "Annual filing within 120 days"
    },
    {
      entity: "Corporate Taxpayer (Turnover > 250M PKR)",
      requirement: "Audited Financial Statements mandatory for FBR Tax Return",
      authority: "FBR (Income Tax Ordinance 2001)",
      deadline: "December 31 of each tax year"
    }
  ];

  const faqs = [
    {
      q: "Which companies in Pakistan are legally required to conduct a statutory audit?",
      a: "Under the Companies Act 2017, all Public Limited companies, Private Limited companies with a paid-up capital of PKR 3 Million or more (or subsidiaries of public companies), and Section 42 non-profit companies are legally required to have their annual financial statements audited by a practicing Chartered Accountant holding a valid Certificate of Practice from ICAP."
    },
    {
      q: "What is the difference between a Statutory Audit and an Internal Audit?",
      a: "A Statutory Audit is an independent external examination required by law to provide shareholders, SECP, and FBR with assurance that financial statements present a 'true and fair view'. An Internal Audit is a management tool focused on risk management, internal controls, fraud deterrence, and operational efficiency."
    },
    {
      q: "How long does a standard audit engagement take?",
      a: "For small-to-medium private enterprises, a standard audit takes between 2 to 4 weeks depending on the availability of records and bank confirmations. For larger corporate entities with multiple locations, audits typically span 4 to 8 weeks."
    },
    {
      q: "What documents are required to commence an audit engagement?",
      a: "Initial requirements include the trial balance, general ledgers, bank statements with reconciliations, fixed asset registers, inventory valuation sheets, tax returns (Income Tax & Sales Tax), minutes of board meetings, and existing statutory filings with SECP (Form A and Form 29)."
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
              <span>ICAP • SECP • IFRS Frameworks</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)',
              lineHeight: 1.16,
              fontWeight: 900,
              color: '#FFFFFF',
              marginBottom: '16px',
              fontFamily: 'var(--font-heading)'
            }}>
              Audit &amp; Assurance <span style={{ color: '#D4A017' }}>Services</span>
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: '#CBD5E1',
              lineHeight: 1.7,
              marginBottom: '30px',
              fontWeight: 500
            }}>
              Independent statutory audits, internal control risk reviews, forensic investigations, and M&amp;A financial due diligence to ensure compliance with SECP and FBR regulatory standards.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenSchedule} 
                className="btn-primary" 
                style={{ padding: '13px 30px', fontSize: '0.92rem', borderRadius: '8px' }}
              >
                <Calendar size={16} />
                <span>Schedule Audit Consultation</span>
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

      {/* 2. CORE AUDIT SERVICES */}
      <section style={{ padding: '75px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
            <span className="badge-gold">Scope of Assurance</span>
            <h2 style={{ fontSize: '2.3rem', color: '#0F172A', marginTop: '10px', marginBottom: '14px', fontWeight: 900 }}>
              Audit &amp; Assurance Capabilities
            </h2>
            <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.65, fontWeight: 500 }}>
              Independent, rigorous assurance services compliant with International Standards on Auditing (ISA) and the Companies Act 2017.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px'
          }}>
            {auditServices.map((service, idx) => {
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

      {/* 3. AUDIT PROCESS FLOW */}
      <section style={{ padding: '75px 0', backgroundColor: '#0F172A', color: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
            <span className="badge-gold">Execution Process</span>
            <h2 style={{ fontSize: '2.3rem', color: '#FFFFFF', marginTop: '10px', marginBottom: '14px', fontWeight: 900 }}>
              4-Stage Audit Methodology
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.02rem', lineHeight: 1.65, fontWeight: 500 }}>
              A structured audit lifecycle designed to minimize operational disruption while ensuring complete compliance.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px'
          }}>
            {processSteps.map((step, sIdx) => (
              <div 
                key={sIdx}
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.75)',
                  borderRadius: '14px',
                  padding: '28px 22px',
                  border: '1px solid rgba(212, 160, 23, 0.25)'
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#FCD34D',
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '10px'
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. STATUTORY COMPLIANCE TABLE */}
      <section style={{ padding: '75px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 45px auto' }}>
            <span className="badge-gold">Statutory Deadlines</span>
            <h2 style={{ fontSize: '2.3rem', color: '#0F172A', marginTop: '10px', marginBottom: '14px', fontWeight: 900 }}>
              Statutory Audit Requirements in Pakistan
            </h2>
            <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.6, fontWeight: 500 }}>
              Key audit obligations under the Companies Act 2017 and FBR tax statutes.
            </p>
          </div>

          <div style={{
            overflowX: 'auto',
            borderRadius: '12px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '650px' }}>
              <thead>
                <tr style={{ backgroundColor: '#0F172A', color: '#FFFFFF' }}>
                  <th style={{ padding: '16px 20px', fontSize: '0.9rem', fontWeight: 800 }}>Entity Type</th>
                  <th style={{ padding: '16px 20px', fontSize: '0.9rem', fontWeight: 800 }}>Audit Requirement</th>
                  <th style={{ padding: '16px 20px', fontSize: '0.9rem', fontWeight: 800 }}>Authority</th>
                  <th style={{ padding: '16px 20px', fontSize: '0.9rem', fontWeight: 800 }}>Deadline</th>
                </tr>
              </thead>
              <tbody>
                {complianceSchedule.map((row, rIdx) => (
                  <tr key={rIdx} style={{
                    backgroundColor: rIdx % 2 === 0 ? '#FFFFFF' : '#F8FAFC',
                    borderBottom: '1px solid #E2E8F0'
                  }}>
                    <td style={{ padding: '14px 20px', fontSize: '0.88rem', fontWeight: 700, color: '#0F172A' }}>
                      {row.entity}
                    </td>
                    <td style={{ padding: '14px 20px', fontSize: '0.86rem', color: '#334155', fontWeight: 500 }}>
                      {row.requirement}
                    </td>
                    <td style={{ padding: '14px 20px', fontSize: '0.86rem', color: '#B8860B', fontWeight: 700 }}>
                      {row.authority}
                    </td>
                    <td style={{ padding: '14px 20px', fontSize: '0.86rem', color: '#10B981', fontWeight: 700 }}>
                      {row.deadline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section style={{ padding: '75px 0', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
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

      {/* 6. CALL TO ACTION BANNER */}
      <section style={{
        padding: '65px 0',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: '#FFFFFF',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <h2 style={{ fontSize: '2.3rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '14px' }}>
            Book Your Audit &amp; Assurance <span style={{ color: '#D4A017' }}>Consultation</span>
          </h2>
          <p style={{ fontSize: '1.02rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '28px', fontWeight: 500 }}>
            Connect with our Chartered Accountants to discuss your statutory audit requirements, internal control reviews, or due diligence engagements.
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
