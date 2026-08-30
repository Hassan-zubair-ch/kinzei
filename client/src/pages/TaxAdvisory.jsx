import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Scale, Landmark, ShieldCheck, CheckCircle2, Phone, Calendar, 
  ArrowRight, FileText, Globe2, ChevronDown, ChevronUp, 
  Percent, Sparkles, Receipt 
} from 'lucide-react';

export default function TaxAdvisory({ onOpenSchedule }) {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const phoneNumber = "923034063970";
  const defaultMessage = encodeURIComponent("Hello Kinzei Consultants, I would like to inquire about your Corporate Taxation & Advisory services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const taxServices = [
    {
      icon: FileText,
      title: "Corporate & Individual Income Tax",
      desc: "Annual income tax return filing on FBR Iris 2.0, wealth statements for directors, advance tax (Section 147), and Active Taxpayer (ATL) status maintenance.",
      deliverables: [
        "Annual corporate income tax returns with statutory annexures",
        "Individual directors' wealth statements & reconciliations",
        "Quarterly advance income tax computations & CPRs",
        "Active Taxpayer List (ATL) 100% active standing"
      ]
    },
    {
      icon: Landmark,
      title: "Sales Tax on Services & Goods",
      desc: "Monthly Federal Sales Tax (STRN) and Provincial Sales Tax on Services returns (PRA, SRB, KPRA, BRA) with input-output tax optimization.",
      deliverables: [
        "Monthly provincial returns (PRA, SRB, KPRA, BRA)",
        "Federal Sales Tax on Goods (STRN) return filing",
        "Input tax reconciliation & Annexure-C purchase matching",
        "Sales tax audit defense & refund verification"
      ]
    },
    {
      icon: Scale,
      title: "Tax Litigation & Appellate Defense",
      desc: "Drafting grounds of appeal, securing stay orders, and representing clients before Commissioner (Appeals), ATIR, and High Courts.",
      deliverables: [
        "Replies to FBR Show Cause notices (Sec 122/177)",
        "Appeals before Commissioner Inland Revenue (Appeals)",
        "Appellate Tribunal Inland Revenue (ATIR) hearings",
        "High Court Tax References, Petitions & Stay Orders"
      ]
    },
    {
      icon: Percent,
      title: "Withholding Tax (WHT) Compliance",
      desc: "Managing your enterprise's role as a Withholding Tax Agent under Income Tax Ordinance 2001, generating CPRs and filing statements.",
      deliverables: [
        "Monthly & bi-annual WHT statements (Section 165)",
        "Vendor withholding tax exemption certificates (Sec 153/159)",
        "Computerized Payment Receipts (CPR challans)",
        "Annual salary tax deduction certificates"
      ]
    },
    {
      icon: Globe2,
      title: "International Tax & Transfer Pricing",
      desc: "Structuring cross-border transactions under Double Tax Avoidance Treaties, foreign remittances, transfer pricing documentation, and expat tax filings.",
      deliverables: [
        "Double Tax Treaty relief & foreign tax credit applications",
        "Transfer Pricing Local File & Master File documentation",
        "Non-resident withholding tax advisory under Section 152",
        "US, UK, UAE & Saudi Arabia expat tax filings"
      ]
    },
    {
      icon: Sparkles,
      title: "Tax Planning & 100% Export Tax Credits",
      desc: "Lawful tax optimization, group tax relief, and securing 100% income tax credits for IT & IT-enabled services under Section 65F.",
      deliverables: [
        "PSEB IT export 100% tax credit compliance (Sec 65F)",
        "Corporate group relief & holding company structuring",
        "Tax due diligence for acquisitions and venture capital",
        "Non-profit & charity tax exemption certificates"
      ]
    }
  ];

  const taxDeadlines = [
    {
      obligation: "Monthly Sales Tax Return (FBR / PRA / SRB / KPRA / BRA)",
      applicableTo: "All registered sales tax businesses and service providers",
      dueDay: "Payment by 15th; Return by 18th of each month",
      authority: "FBR & Provincial Boards"
    },
    {
      obligation: "Quarterly Advance Income Tax (Section 147)",
      applicableTo: "All Companies and Individuals meeting turnover thresholds",
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
      obligation: "Annual Corporate Income Tax Return",
      applicableTo: "All Private Limited, Public, and SMC Companies",
      dueDay: "December 31 (for June 30 year end)",
      authority: "FBR Income Tax Department"
    },
    {
      obligation: "Annual Individual & AOP Income Tax Return",
      applicableTo: "Salaried individuals, business individuals, and AOPs",
      dueDay: "September 30 of each tax year",
      authority: "FBR Active Taxpayer Register"
    }
  ];

  const faqs = [
    {
      q: "What are the key benefits of Active Taxpayer List (ATL) status?",
      a: "Active Taxpayers enjoy 50% to 100% lower withholding tax rates on banking transactions, property registrations, motor vehicles, and dividends. Non-filers face double tax rates and cannot purchase high-value property or vehicles."
    },
    {
      q: "How does Kinzei handle FBR audit notices or Section 122 amendment orders?",
      a: "Our tax litigation team analyzes the notice, reconciles ledgers with past tax returns, drafts technical legal replies, attends hearings before tax officers, and files appeals before CIR Appeals or ATIR to secure stay orders."
    },
    {
      q: "Can IT and software export companies in Pakistan get a 100% tax credit?",
      a: "Yes. Under Section 65F of the Income Tax Ordinance 2001, IT and IT-enabled services exporters registered with PSEB and FBR who receive remittances through official banking channels and file their returns on time can claim a 100% tax credit on export revenues."
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
              <Scale size={13} color="#FCD34D" />
              <span>FBR • PRA • SRB • KPRA • BRA</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)',
              lineHeight: 1.16,
              fontWeight: 900,
              color: '#FFFFFF',
              marginBottom: '16px',
              fontFamily: 'var(--font-heading)'
            }}>
              Taxation &amp; Legal <span style={{ color: '#D4A017' }}>Advisory Services</span>
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: '#CBD5E1',
              lineHeight: 1.7,
              marginBottom: '30px',
              fontWeight: 500
            }}>
              Strategic tax planning, Active Taxpayer status (ATL), monthly provincial sales tax returns, and appellate litigation before the FBR and High Courts to protect your enterprise from penalties.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenSchedule} 
                className="btn-primary" 
                style={{ padding: '13px 30px', fontSize: '0.92rem', borderRadius: '8px' }}
              >
                <Calendar size={16} />
                <span>Schedule Tax Consultation</span>
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

      {/* 2. CORE TAX SERVICES */}
      <section style={{ padding: '75px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
            <span className="badge-gold">Service Scope</span>
            <h2 style={{ fontSize: '2.3rem', color: '#0F172A', marginTop: '10px', marginBottom: '14px', fontWeight: 900 }}>
              Taxation &amp; Advisory Capabilities
            </h2>
            <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.65, fontWeight: 500 }}>
              Comprehensive tax compliance, planning, and appellate representation under Pakistani tax statutes.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px'
          }}>
            {taxServices.map((service, idx) => {
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

      {/* 3. TAX CALENDAR TABLE */}
      <section style={{ padding: '75px 0', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 45px auto' }}>
            <span className="badge-gold">Compliance Schedule</span>
            <h2 style={{ fontSize: '2.3rem', color: '#0F172A', marginTop: '10px', marginBottom: '14px', fontWeight: 900 }}>
              Pakistan Tax Deadlines Calendar
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
                  <th style={{ padding: '16px 20px', fontSize: '0.9rem', fontWeight: 800, width: '30%' }}>Obligation</th>
                  <th style={{ padding: '16px 20px', fontSize: '0.9rem', fontWeight: 800, width: '30%', color: '#CBD5E1' }}>Applicability</th>
                  <th style={{ padding: '16px 20px', fontSize: '0.9rem', fontWeight: 800, width: '25%', color: '#FCD34D' }}>Filing Deadline</th>
                  <th style={{ padding: '16px 20px', fontSize: '0.9rem', fontWeight: 800, width: '15%' }}>Authority</th>
                </tr>
              </thead>
              <tbody>
                {taxDeadlines.map((row, dIdx) => (
                  <tr key={dIdx} style={{
                    backgroundColor: dIdx % 2 === 0 ? '#FFFFFF' : '#F8FAFC',
                    borderBottom: '1px solid #E2E8F0'
                  }}>
                    <td style={{ padding: '14px 20px', fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>
                      {row.obligation}
                    </td>
                    <td style={{ padding: '14px 20px', fontSize: '0.86rem', color: '#475569', fontWeight: 500 }}>
                      {row.applicableTo}
                    </td>
                    <td style={{ padding: '14px 20px', fontSize: '0.86rem', color: '#10B981', fontWeight: 700 }}>
                      {row.dueDay}
                    </td>
                    <td style={{ padding: '14px 20px', fontSize: '0.86rem', color: '#B8860B', fontWeight: 700 }}>
                      {row.authority}
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
            Optimize Your Tax Strategy with <span style={{ color: '#D4A017' }}>Kinzei Consultants</span>
          </h2>
          <p style={{ fontSize: '1.02rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '28px', fontWeight: 500 }}>
            Connect with our tax advisors to file your returns, manage withholding compliance, or represent your enterprise against FBR tax notices.
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
