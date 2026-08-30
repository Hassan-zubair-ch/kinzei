import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, Award, CheckCircle2, Phone, Calendar, 
  ArrowRight, FileCheck, Search, Scale, FileText, 
  BarChart3, AlertCircle, Building2, HelpCircle, ChevronDown, 
  ChevronUp, Sparkles, Clock, Lock
} from 'lucide-react';

export default function AuditAssurance({ onOpenSchedule }) {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const phoneNumber = "923034063970";
  const defaultMessage = encodeURIComponent("Hello Kinzei Consultants, I would like to consult regarding your Audit & Assurance services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const auditPillars = [
    {
      icon: ShieldCheck,
      title: "Statutory Financial Audit",
      subtitle: "Companies Act 2017 & SECP Compliance",
      desc: "Comprehensive annual audits ensuring true and fair view of financial statements in accordance with International Financial Reporting Standards (IFRS) and Fourth/Fifth Schedules of the Companies Act 2017.",
      deliverables: [
        "Independent Auditor's Report to the Members/Shareholders",
        "Audited Balance Sheet, Profit & Loss, and Cash Flow Statements",
        "Compliance with SECP, FBR, and Banking Covenants",
        "Management Letter outlining internal control recommendations"
      ]
    },
    {
      icon: Search,
      title: "Internal Audit & Risk Governance",
      subtitle: "Operational Efficiency & COSO Framework",
      desc: "Independent, objective evaluations of internal control mechanisms, governance structures, and business risk registers to safeguard assets and prevent operational revenue leakage.",
      deliverables: [
        "Comprehensive Risk & Control Matrices (RCM)",
        "Process-level operational vulnerability assessments",
        "Anti-fraud control audits and SOP evaluations",
        "Quarterly Audit Committee and Board reporting"
      ]
    },
    {
      icon: Scale,
      title: "Forensic Audit & Investigations",
      subtitle: "Fraud Detection & Legal Evidence",
      desc: "Specialized investigative audits applying forensic accounting protocols to identify financial irregularities, misappropriation of company funds, and statutory dispute resolutions.",
      deliverables: [
        "Forensic evidence compilation for legal proceedings",
        "Asset tracing and unauthorized fund movement detection",
        "Reconstruction of altered accounting records",
        "Expert witness documentation for litigation defense"
      ]
    },
    {
      icon: BarChart3,
      title: "Financial Due Diligence (FDD)",
      subtitle: "M&A, Venture Capital & Private Equity",
      desc: "Rigorous buy-side and sell-side financial due diligence reports providing investors and corporate acquirers with verified insights into EBITDA quality, debt overhangs, and working capital needs.",
      deliverables: [
        "Quality of Earnings (QoE) and normalized EBITDA analysis",
        "Unrecorded liabilities & contingent tax exposure checks",
        "Net Working Capital (NWC) target pegs",
        "Post-transaction integration risk assessments"
      ]
    },
    {
      icon: FileCheck,
      title: "Agreed-Upon Procedures (AUP)",
      subtitle: "ISRS 4400 Custom Verification",
      desc: "Tailored engagements under International Standard on Related Services (ISRS 4400) focused on verifying specific financial data, grant fund utilizations, inventory physical counts, or vendor agreements.",
      deliverables: [
        "Factual Findings Report with zero opinion bias",
        "Donor and grant utilization compliance verification",
        "Physical inventory stock-take witness reports",
        "Royalty, franchise fee, and revenue-sharing audits"
      ]
    },
    {
      icon: FileText,
      title: "Tax & Statutory Special Audits",
      subtitle: "FBR Section 177 / 214C & Sales Tax Audits",
      desc: "Specialized technical representation and pre-audit readiness reviews for Federal Board of Revenue (FBR) audit notices under Income Tax Ordinance 2001 and Sales Tax Act 1990.",
      deliverables: [
        "Reconciliation of sales, purchases, and input tax with Iris portal",
        "Withholding tax deduction audit verification",
        "Preparation of comprehensive audit trail dossiers for tax officers",
        "Mitigation of ex-parte assessments and penalty notices"
      ]
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Planning & Materiality",
      desc: "We analyze your business model, understand industry risk factors, define materiality thresholds, and design a customized audit plan tailored to your operating scale."
    },
    {
      num: "02",
      title: "Controls Evaluation",
      desc: "Our audit team tests the design and operational effectiveness of internal financial controls, authorization matrices, and ERP transactional workflows."
    },
    {
      num: "03",
      title: "Substantive Testing",
      desc: "We perform analytical reviews, direct bank and accounts receivable confirmations, physical stock verifications, and detailed ledger vouching."
    },
    {
      num: "04",
      title: "Opinion & Reporting",
      desc: "We formulate the Independent Auditor's Report, discuss audit adjustments with leadership, and issue actionable Management Letters for board governance."
    }
  ];

  const complianceSchedule = [
    {
      entity: "Private Limited Company (Paid-up Capital > 3M PKR)",
      requirement: "Mandatory Annual Statutory Audit by Chartered Accountant (CA)",
      authority: "SECP (Companies Act 2017)",
      deadline: "Within 120 days of fiscal year end (Oct 28 for June 30 entities)"
    },
    {
      entity: "Public Limited / Listed Company",
      requirement: "Mandatory Annual Audit + Half-Yearly Review (ISRE 2410)",
      authority: "SECP & Pakistan Stock Exchange (PSX)",
      deadline: "Quarterly within 30 days; Annual within 120 days"
    },
    {
      entity: "Single Member Company (SMC-Pvt Ltd)",
      requirement: "Statutory Financial Statements Compilation / Audit",
      authority: "SECP & FBR Iris Filing",
      deadline: "Form A/29 with Audited / Verified Accounts by Oct 28"
    },
    {
      entity: "Non-Profit Organization (NPO / NGO / Section 42)",
      requirement: "Mandatory Statutory Audit + Donor Grant Audits",
      authority: "SECP, EAD, and FBR",
      deadline: "Annual statutory submission within 120 days"
    },
    {
      entity: "Corporate Taxpayer (Turnover > 250M PKR)",
      requirement: "Audited Financial Statements mandatory for FBR Return filing",
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
      a: "A Statutory Audit is an independent external examination required by law to provide shareholders, SECP, and FBR with assurance that financial statements present a 'true and fair view'. An Internal Audit is an ongoing management and governance tool focused on evaluating risk management, testing internal controls, preventing fraud, and boosting operational efficiency."
    },
    {
      q: "How long does a typical statutory audit engagement take?",
      a: "For small-to-medium private enterprises, a standard audit takes between 2 to 4 weeks depending on the state of accounting records and promptness of third-party bank confirmations. For larger corporate entities with multiple branch locations, field audits typically span 4 to 8 weeks."
    },
    {
      q: "What documentation does Kinzei require to commence an audit engagement?",
      a: "Initial requirements include the trial balance, general ledgers, bank statements with reconciliations, fixed asset registers, inventory valuation sheets, tax returns (Income Tax & Sales Tax), minutes of board meetings, and existing statutory filings with SECP (Form A and Form 29)."
    },
    {
      q: "Can Kinzei assist during an unexpected FBR tax audit notice?",
      a: "Yes. Our team of audit supervisors and High Court tax litigators prepares detailed reconciliation files, audit trails, and bank-to-ledger cross-matches to represent and defend your company before the Commissioner Inland Revenue (CIR) and Appellate Tribunals."
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
        {/* Subtle Background Glow */}
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
                <ShieldCheck size={14} color="#FCD34D" />
                <span>ICAP &amp; SECP Compliant</span>
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
                IFRS &amp; ISA Frameworks
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
              Audit &amp; Assurance Services in <span style={{ color: '#D4A017' }}>Pakistan</span>
            </h1>

            <p style={{
              fontSize: '1.14rem',
              color: '#CBD5E1',
              lineHeight: 1.75,
              marginBottom: '36px',
              maxWidth: '820px',
              fontWeight: 500
            }}>
              Institutional-grade statutory audits, internal control risk reviews, forensic investigations, and M&amp;A financial due diligence. We provide rigorous, independent assurance that enhances credibility with shareholders, banks, the SECP, and the FBR.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenSchedule} 
                className="btn-primary" 
                style={{ padding: '14px 34px', fontSize: '0.94rem', borderRadius: '8px' }}
              >
                <Calendar size={18} />
                <span>Schedule Audit Consultation</span>
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

      {/* 2. STATS & KEY METRICS STRIP */}
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
              { num: "100%", label: "SECP & FBR Compliance Rate" },
              { num: "Multi-Tier", label: "Supervisory Quality Review" },
              { num: "0-Defect", label: "Statutory Reporting Assurance" },
              { num: "15+ Years", label: "Chartered Advisory Leadership" }
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

      {/* 3. CORE AUDIT & ASSURANCE PILLARS */}
      <section style={{ padding: '85px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px auto' }}>
            <span className="badge-gold">Scope of Assurance</span>
            <h2 style={{ fontSize: '2.5rem', color: '#0F172A', marginTop: '12px', marginBottom: '16px', fontWeight: 900 }}>
              Complete Audit &amp; Risk Governance Solutions
            </h2>
            <p style={{ color: '#475569', fontSize: '1.08rem', lineHeight: 1.7, fontWeight: 500 }}>
              Our audit methodologies adhere strictly to International Standards on Auditing (ISA) adopted by ICAP, delivering reliable attestations for private enterprises, listed companies, and international subsidiaries.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            {auditPillars.map((pillar, idx) => {
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

      {/* 4. AUDIT METHODOLOGY & PROCESS FLOW */}
      <section style={{ padding: '85px 0', backgroundColor: '#0F172A', color: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
            <span className="badge-gold">Proven Methodology</span>
            <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginTop: '12px', marginBottom: '16px', fontWeight: 800 }}>
              Our 4-Stage Independent Audit Lifecycle
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.65, fontWeight: 500 }}>
              We maintain rigorous independence while collaborating closely with client finance teams to prevent disruption to daily business operations.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {processSteps.map((step, sIdx) => (
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
                  {step.num}
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

      {/* 5. STATUTORY AUDIT & COMPLIANCE MATRIX */}
      <section style={{ padding: '85px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px auto' }}>
            <span className="badge-gold">Legal Framework</span>
            <h2 style={{ fontSize: '2.4rem', color: '#0F172A', marginTop: '12px', marginBottom: '16px', fontWeight: 800 }}>
              Statutory Audit Requirements in Pakistan
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.65, fontWeight: 500 }}>
              Know your exact statutory obligations under the Companies Act 2017, SECP regulations, and FBR tax statutes.
            </p>
          </div>

          <div style={{
            overflowX: 'auto',
            borderRadius: '14px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 6px 20px rgba(0,0,0,0.04)'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
              <thead>
                <tr style={{ backgroundColor: '#0F172A', color: '#FFFFFF' }}>
                  <th style={{ padding: '18px 20px', fontSize: '0.92rem', fontWeight: 800 }}>Corporate Entity Type</th>
                  <th style={{ padding: '18px 20px', fontSize: '0.92rem', fontWeight: 800 }}>Statutory Audit Requirement</th>
                  <th style={{ padding: '18px 20px', fontSize: '0.92rem', fontWeight: 800 }}>Regulatory Authority</th>
                  <th style={{ padding: '18px 20px', fontSize: '0.92rem', fontWeight: 800 }}>Filing Deadline</th>
                </tr>
              </thead>
              <tbody>
                {complianceSchedule.map((row, rIdx) => (
                  <tr key={rIdx} style={{
                    backgroundColor: rIdx % 2 === 0 ? '#FFFFFF' : '#F8FAFC',
                    borderBottom: '1px solid #E2E8F0'
                  }}>
                    <td style={{ padding: '16px 20px', fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>
                      {row.entity}
                    </td>
                    <td style={{ padding: '16px 20px', fontSize: '0.88rem', color: '#334155', fontWeight: 500 }}>
                      {row.requirement}
                    </td>
                    <td style={{ padding: '16px 20px', fontSize: '0.88rem', color: '#B8860B', fontWeight: 700 }}>
                      {row.authority}
                    </td>
                    <td style={{ padding: '16px 20px', fontSize: '0.88rem', color: '#10B981', fontWeight: 700 }}>
                      {row.deadline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 6. ASSURANCE LEADERSHIP SPOTLIGHT */}
      <section style={{ padding: '75px 0', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
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
                  src="/team/muhammad-haroon.png" 
                  alt="Muhammad Haroon - Audit Manager"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%' }}
                />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '2px' }}>
                Muhammad Haroon
              </h3>
              <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#B8860B', textTransform: 'uppercase', marginBottom: '6px' }}>
                Audit Manager
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600 }}>
                Audit &amp; Financial Assurance Lead
              </div>
            </div>

            <div>
              <span className="badge-gold" style={{ marginBottom: '14px' }}>Lead Partner Consultation</span>
              <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
                Direct Audit Supervisory Oversight
              </h3>
              <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.7, marginBottom: '24px', fontWeight: 500 }}>
                Engage directly with our Audit Management team for pre-audit risk evaluations, IFRS reporting diagnostics, or statutory SECP filing plans. We ensure your business is completely audit-ready with zero compliance bottlenecks.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  onClick={onOpenSchedule} 
                  className="btn-primary"
                  style={{ padding: '12px 24px', fontSize: '0.88rem', borderRadius: '8px' }}
                >
                  <Calendar size={16} />
                  <span>Book Audit Session</span>
                </button>

                <a 
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello Muhammad Haroon, I would like to discuss an audit engagement with Kinzei Consultants.")}`}
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
      <section style={{ padding: '85px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="badge-gold">Common Queries</span>
            <h2 style={{ fontSize: '2.4rem', color: '#0F172A', marginTop: '12px', marginBottom: '16px', fontWeight: 800 }}>
              Frequently Asked Questions on Audit
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, fontWeight: 500 }}>
              Essential answers regarding audit thresholds, statutory timelines, and SECP/FBR obligations.
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
            Ready to Safeguard Your Business with <span style={{ color: '#D4A017' }}>Rigorous Assurance?</span>
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#CBD5E1', lineHeight: 1.7, marginBottom: '34px', fontWeight: 500 }}>
            Connect with our Chartered Accountants and Audit Supervisors today to discuss your statutory audit, internal control review, or transaction due diligence.
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
