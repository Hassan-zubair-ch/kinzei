import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Calculator, Scale, Landmark, ShieldCheck, CheckCircle2, Phone, Calendar, 
  ArrowRight, FileText, AlertTriangle, Globe2, Building2, 
  HelpCircle, ChevronDown, ChevronUp, Sparkles, Percent, 
  Receipt, Shield, FileCheck
} from 'lucide-react';

export default function TaxAdvisory({ onOpenSchedule }) {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const phoneNumber = "923034063970";
  const defaultMessage = encodeURIComponent("Hello Kinzei Consultants, I would like to consult regarding your Corporate Tax & Advisory services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const taxPillars = [
    {
      icon: FileText,
      title: "Corporate & Individual Income Tax",
      subtitle: "Income Tax Ordinance 2001 & Iris 2.0",
      desc: "Accurate preparation and timely filing of annual corporate income tax returns, individual wealth statements, advance tax quarterly calculations (Section 147), and Active Taxpayer List (ATL) status maintenance.",
      deliverables: [
        "Annual corporate income tax returns with statutory annexures",
        "Individual directors' wealth statements & reconciliation",
        "Advance income tax estimation and quarterly CPR payments",
        "Active Taxpayer Status (ATL) 100% active standing"
      ]
    },
    {
      icon: Landmark,
      title: "Sales Tax on Services & Goods",
      subtitle: "FBR STRN & PRA / SRB / KPRA / BRA",
      desc: "Managing monthly Federal Sales Tax (STRN) and Provincial Sales Tax on Services returns, optimizing input tax adjustments, resolving Annexure-C purchase mismatches, and handling sales tax refund processing.",
      deliverables: [
        "Monthly provincial sales tax returns (PRA, SRB, KPRA, BRA)",
        "Federal Sales Tax on goods filing with FBR Iris/e-FBR portal",
        "Input tax credit reconciliation and purchase matching",
        "Sales tax audit defense and post-refund verification"
      ]
    },
    {
      icon: Scale,
      title: "Tax Litigation & Appellate Defense",
      subtitle: "High Court & FBR Appellate Representation",
      desc: "Robust legal defense and advocacy led by our Advocate High Court. We draft grounds of appeal, secure interim stay orders, and represent clients before Commissioner (Appeals), ATIR, and the High Court of Pakistan.",
      deliverables: [
        "Drafting comprehensive replies to FBR Show Cause notices (Sec 122/177)",
        "Appeals before Commissioner Inland Revenue (CIR Appeals)",
        "Appellate Tribunal Inland Revenue (ATIR) representation",
        "High Court Tax References, Writ Petitions & Stay Orders"
      ]
    },
    {
      icon: Percent,
      title: "Withholding Tax (WHT) Management",
      subtitle: "Section 149, 153, 155 & 165 Compliance",
      desc: "Complete administration of your company's role as a Withholding Tax Agent. We calculate deductions on vendor payments, salaries, rents, generate CPR challans, and file bi-annual/monthly WHT statements.",
      deliverables: [
        "Monthly & bi-annual Withholding Tax Statements (Sec 165)",
        "Vendor withholding tax exemption certificates (Sec 153/159)",
        "Creation of Computerized Payment Receipts (CPR challans)",
        "Annual salary tax deduction certificates for all staff"
      ]
    },
    {
      icon: Globe2,
      title: "International Tax & Transfer Pricing",
      subtitle: "Cross-Border Structuring & Treaties",
      desc: "Structuring cross-border transactions to leverage Double Taxation Avoidance Agreements (DTT), managing foreign remittances, transfer pricing documentation for related-party transactions, and expat tax filings.",
      deliverables: [
        "Double Tax Treaty relief applications and foreign tax credits",
        "Transfer Pricing Local File and Master File documentation",
        "Non-resident withholding tax advisory under Section 152",
        "US, UK, UAE & Saudi Arabia expat tax filings"
      ]
    },
    {
      icon: Sparkles,
      title: "Tax Planning & Exemption Advisory",
      subtitle: "Legal Tax Optimization & 100% Tax Credits",
      desc: "Designing lawful corporate tax structures to optimize effective tax rates, securing 100% tax credit under Section 65F for IT & IT-enabled services (PSEB), and corporate group reorganization advisory.",
      deliverables: [
        "PSEB IT export 100% tax credit qualification (Sec 65F / 65E)",
        "Corporate group relief & holding company structuring",
        "Tax due diligence for mergers, acquisitions and equity investments",
        "Tax exemption certificates for non-profits and charities"
      ]
    }
  ];

  const taxDeadlines = [
    {
      obligation: "Monthly Sales Tax Return (FBR / PRA / SRB / KPRA / BRA)",
      applicableTo: "All registered sales tax businesses and service providers",
      dueDay: "Payment by 15th; Annexure-C & Return by 18th of each month",
      authority: "FBR & Provincial Revenue Boards"
    },
    {
      obligation: "Quarterly Advance Income Tax (Section 147)",
      applicableTo: "All Companies and Individuals with taxable turnover > threshold",
      dueDay: "Q1: Oct 15 | Q2: Dec 15 | Q3: Mar 15 | Q4: Jun 15",
      authority: "FBR Iris Portal"
    },
    {
      obligation: "Monthly Withholding Tax Statement (Section 165)",
      applicableTo: "All registered corporate and commercial withholding agents",
      dueDay: "By 15th of the following month",
      authority: "FBR Withholding Monitoring"
    },
    {
      obligation: "Annual Corporate Income Tax Return (Companies)",
      applicableTo: "All Private Limited, Public, and SMC-Pvt Ltd Companies",
      dueDay: "December 31 (for June 30 year end) / Sept 30 (for Dec 31 year end)",
      authority: "FBR Income Tax Department"
    },
    {
      obligation: "Annual Individual & Sole Proprietor Income Tax Return",
      applicableTo: "All salaried individuals, business individuals, and AOPs",
      dueDay: "September 30 of each tax year",
      authority: "FBR Active Taxpayer Register"
    }
  ];

  const faqs = [
    {
      q: "What are the legal and financial benefits of being an Active Taxpayer (ATL)?",
      a: "Active Taxpayers (ATL) enjoy a 50% to 100% reduction in withholding tax rates across banking transactions, property purchases, vehicle registrations, prize bonds, and stock dividends. Non-filers / inactives face double tax penalties, cannot purchase high-value immovable property, and risk banking account freezing."
    },
    {
      q: "How does Kinzei handle unexpected FBR audit notices or Section 122 amendment orders?",
      a: "Our tax litigation department, led by Advocate High Court Khurram Sheikh, analyzes the show-cause notice, reconciles past returns with bank ledgers, drafts technical legal replies, attends hearings before tax officers, and files appeals before Commissioner Appeals or ATIR to secure stay orders against unlawful tax demands."
    },
    {
      q: "Can IT export and software companies in Pakistan get a 100% income tax credit?",
      a: "Yes. Under Section 65F of the Income Tax Ordinance 2001, IT and IT-enabled services exporters registered with PSEB and FBR who receive remittances through official banking channels and file their withholding statements on time can claim a 100% tax credit on export revenue. Kinzei handles the complete compliance workflow."
    },
    {
      q: "What is the difference between Federal Sales Tax (FBR) and Provincial Sales Tax (PRA/SRB)?",
      a: "The Federal Board of Revenue (FBR) levies sales tax on the manufacturing, import, and sale of physical goods under the Sales Tax Act 1990 (standard rate: 18%). Provincial Revenue Authorities (PRA in Punjab, SRB in Sindh, KPRA in KPK, BRA in Balochistan) levy sales tax on services (ranging from 13% to 16%). If you provide services, you must register provincially."
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
                <Scale size={14} color="#FCD34D" />
                <span>High Court Litigators &amp; Tax Advisors</span>
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
                FBR • PRA • SRB • KPRA • BRA
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
              Corporate Taxation &amp; <span style={{ color: '#D4A017' }}>Advisory Services</span>
            </h1>

            <p style={{
              fontSize: '1.14rem',
              color: '#CBD5E1',
              lineHeight: 1.75,
              marginBottom: '36px',
              maxWidth: '820px',
              fontWeight: 500
            }}>
              Strategic tax planning, Active Taxpayer status (ATL), monthly provincial sales tax filings, and aggressive appellate litigation before the FBR and High Courts. We protect your enterprise from statutory penalties while legally minimizing tax liability.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenSchedule} 
                className="btn-primary" 
                style={{ padding: '14px 34px', fontSize: '0.94rem', borderRadius: '8px' }}
              >
                <Calendar size={18} />
                <span>Schedule Tax Consultation</span>
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
              { num: "100%", label: "Active Taxpayer (ATL) Standing" },
              { num: "PKR Millions", label: "Lawful Tax Savings & Refunds" },
              { num: "High Court", label: "Appellate Defense Lawyers" },
              { num: "0 Notice", label: "Default & Penalty Track Record" }
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

      {/* 3. CORE TAX PILLARS */}
      <section style={{ padding: '85px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px auto' }}>
            <span className="badge-gold">Service Scope</span>
            <h2 style={{ fontSize: '2.5rem', color: '#0F172A', marginTop: '12px', marginBottom: '16px', fontWeight: 900 }}>
              Complete Taxation &amp; Legal Advisory Solutions
            </h2>
            <p style={{ color: '#475569', fontSize: '1.08rem', lineHeight: 1.7, fontWeight: 500 }}>
              From routine monthly sales tax filings to complex High Court constitutional petitions, our senior tax advocates protect your business at every level.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            {taxPillars.map((pillar, idx) => {
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

      {/* 4. STATUTORY TAX CALENDAR & DEADLINES */}
      <section style={{ padding: '85px 0', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px auto' }}>
            <span className="badge-gold">Statutory Deadlines</span>
            <h2 style={{ fontSize: '2.4rem', color: '#0F172A', marginTop: '12px', marginBottom: '16px', fontWeight: 800 }}>
              Pakistan Tax Compliance Calendar
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.65, fontWeight: 500 }}>
              Avoid heavy default surcharges, bank account freezing, and penalties by keeping your enterprise strictly aligned with statutory filing dates.
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
                  <th style={{ padding: '20px 24px', fontSize: '0.94rem', fontWeight: 800, width: '30%' }}>Statutory Tax Filing</th>
                  <th style={{ padding: '20px 24px', fontSize: '0.94rem', fontWeight: 800, width: '30%', color: '#CBD5E1' }}>Applicability</th>
                  <th style={{ padding: '20px 24px', fontSize: '0.94rem', fontWeight: 800, width: '25%', color: '#FCD34D' }}>Filing Deadline</th>
                  <th style={{ padding: '20px 24px', fontSize: '0.94rem', fontWeight: 800, width: '15%' }}>Authority</th>
                </tr>
              </thead>
              <tbody>
                {taxDeadlines.map((row, dIdx) => (
                  <tr key={dIdx} style={{
                    backgroundColor: dIdx % 2 === 0 ? '#FFFFFF' : '#F8FAFC',
                    borderBottom: '1px solid #E2E8F0'
                  }}>
                    <td style={{ padding: '18px 24px', fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>
                      {row.obligation}
                    </td>
                    <td style={{ padding: '18px 24px', fontSize: '0.88rem', color: '#475569', fontWeight: 500 }}>
                      {row.applicableTo}
                    </td>
                    <td style={{ padding: '18px 24px', fontSize: '0.9rem', color: '#10B981', fontWeight: 800, backgroundColor: 'rgba(16, 185, 129, 0.05)' }}>
                      {row.dueDay}
                    </td>
                    <td style={{ padding: '18px 24px', fontSize: '0.86rem', color: '#B8860B', fontWeight: 700 }}>
                      {row.authority}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 5. LEGAL DEFENSE & LITIGATION SPOTLIGHT */}
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
                  src="/team/khurram-sheikh.png" 
                  alt="Khurram Sheikh - Advocate High Court"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%' }}
                />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '2px' }}>
                Khurram Sheikh
              </h3>
              <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#B8860B', textTransform: 'uppercase', marginBottom: '6px' }}>
                Advocate High Court
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600 }}>
                Director Taxation &amp; Legal Affairs
              </div>
            </div>

            <div>
              <span className="badge-gold" style={{ marginBottom: '14px' }}>Appellate Legal Defense</span>
              <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
                Defend Your Rights Against Unlawful Tax Notices
              </h3>
              <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.7, marginBottom: '24px', fontWeight: 500 }}>
                Facing an FBR Section 122 audit assessment, penalty notice, or bank attachment order? Connect directly with our Senior Tax Litigator for strategic legal evaluation, stay orders, and appeal drafting before CIR Appeals and the High Court.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  onClick={onOpenSchedule} 
                  className="btn-primary"
                  style={{ padding: '12px 24px', fontSize: '0.88rem', borderRadius: '8px' }}
                >
                  <Calendar size={16} />
                  <span>Book Legal Tax Consultation</span>
                </button>

                <a 
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello Khurram Sheikh, I need urgent legal guidance regarding an FBR tax notice or appellate defense.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ padding: '12px 22px', fontSize: '0.88rem', borderRadius: '8px' }}
                >
                  <Phone size={15} />
                  <span>WhatsApp Advocate</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      <section style={{ padding: '85px 0', backgroundColor: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="badge-gold">Common Queries</span>
            <h2 style={{ fontSize: '2.4rem', color: '#0F172A', marginTop: '12px', marginBottom: '16px', fontWeight: 800 }}>
              Frequently Asked Questions on Taxation
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, fontWeight: 500 }}>
              Critical insights into ATL status, FBR appeals, and IT export tax exemptions.
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

      {/* 7. CALL TO ACTION BANNER */}
      <section style={{
        padding: '75px 0',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: '#FFFFFF',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '16px' }}>
            Optimize Your Tax Strategy &amp; <span style={{ color: '#D4A017' }}>Stay Protected</span>
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#CBD5E1', lineHeight: 1.7, marginBottom: '34px', fontWeight: 500 }}>
            Contact our senior tax consultants and High Court advocates today for strategic tax planning, FBR returns, or representation against tax notices.
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
