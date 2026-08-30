import React from 'react';
import { 
  Building2, ShieldCheck, Mail, Phone, MapPin, CheckCircle2, 
  Sparkles, Scale, Briefcase, Users, FileText
} from 'lucide-react';

export default function JavedZafarSection({ onOpenSchedule }) {
  const practiceServices = [
    { name: 'Audit & Assurance', desc: 'Statutory Audits, Internal Controls & Tax Audits' },
    { name: 'Taxation & Litigation', desc: 'Direct/Indirect Tax, FBR Appeals & Filing' },
    { name: 'Corporate & Secretarial', desc: 'SECP Company Registration & Compliance' },
    { name: 'Financial Advisory', desc: 'Business Valuations, Feasibility & Loan Advisory' },
    { name: 'BPO Outsourcing', desc: 'Bookkeeping, Payroll & Financial Statements' }
  ];

  const keyTeamData = [
    { name: 'Javed Zafar (ACA)', role: 'Managing Partner & Lead CA (ex-Deloitte Pakistan)' },
    { name: 'Zeeshan Khalid (CPA, PIPFA, ICIAP)', role: 'Senior Audit & Assurance Supervisor' },
    { name: 'Iftikhar Hussain (CPA, CA Associate)', role: '43+ Years Corporate Finance Leadership' },
    { name: 'Muhammad Nouman (CA)', role: 'Financial Reporting & SAP/QuickBooks Specialist' }
  ];

  const sectors = [
    'NGOs / NPOs', 'Textile', 'Electronics', 'Pharmaceutical', 
    'Education', 'Media', 'Real Estate', 'Agriculture'
  ];

  return (
    <section 
      id="javed-zafar-firm" 
      style={{ 
        padding: '70px 0', 
        backgroundColor: '#F8FAF9', 
        position: 'relative',
        borderTop: '2px solid #E5E7EB',
        borderBottom: '2px solid #E5E7EB'
      }}
    >
      <div className="container">
        
        {/* MAIN JAVED ZAFAR & CO. BLOCK */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '40px 45px',
          boxShadow: '0 10px 35px rgba(0, 0, 0, 0.05)',
          border: '1.5px solid rgba(196, 154, 44, 0.35)'
        }}>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            gap: '45px',
            alignItems: 'center',
            marginBottom: '35px'
          }} className="jz-top-grid">

            {/* Left: EXACT JAVED ZAFAR LOGO IMAGE CARD */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '24px 20px',
              border: '2px solid #D4A017',
              boxShadow: '0 8px 25px rgba(212, 160, 23, 0.15)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }} className="interactive-card">
              <img 
                src="/javed-zafar-logo.png" 
                alt="Javed Zafar & Co. Chartered Accountants" 
                style={{ 
                  width: '100%', 
                  maxWidth: '240px', 
                  height: 'auto', 
                  objectFit: 'contain',
                  display: 'block'
                }} 
              />
              <div style={{
                marginTop: '14px',
                paddingTop: '10px',
                borderTop: '1px solid #E5E7EB',
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#D4A017',
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}>
                Chartered Accountants Practice
              </div>
            </div>

            {/* Right: Firm Info & Short Intro */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#FFFBEB',
                color: '#B8860B',
                fontSize: '0.78rem',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.6px',
                marginBottom: '12px',
                border: '1px solid rgba(212, 160, 23, 0.3)'
              }}>
                <Sparkles size={13} color="#D4A017" />
                <span>IN ASSOCIATION WITH KINZEI CONSULTANTS (PRIVATE) LIMITED</span>
              </div>

              <h2 style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)',
                color: '#111827',
                fontWeight: 800,
                marginBottom: '10px',
                lineHeight: 1.2
              }}>
                Javed Zafar &amp; Co. <span style={{ color: '#D4A017' }}>Chartered Accountants</span>
              </h2>

              <p style={{
                fontSize: '0.98rem',
                color: '#1E293B',
                lineHeight: 1.7,
                marginBottom: '20px',
                fontWeight: 500
              }}>
                <strong>Javed Zafar &amp; Co.</strong> is a Chartered Accountants firm offering expert accounting, taxation, bookkeeping, auditing, and compliance services. In association with <strong>Kinzei Consultants (Private) Limited</strong>, the practice helps businesses stay compliant, manage financial risks, and grow with confidence.
              </p>

              {/* Contact Bar Row */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                flexWrap: 'wrap',
                fontSize: '0.88rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0A0F1D', fontWeight: 800 }}>
                  <MapPin size={16} color="#D4A017" style={{ flexShrink: 0 }} />
                  <span>First Floor, Plot # 14, Main Road, Block 1 College Rd, Sector C2 Block 1 Twp Sector C 2 Township, Lahore, 54770</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0A0F1D', fontWeight: 800 }}>
                  <Phone size={16} color="#D4A017" />
                  <a 
                    href="tel:03034063970" 
                    style={{ color: '#0A0F1D', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#D4A017'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#0A0F1D'}
                  >
                    03034063970
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0A0F1D', fontWeight: 800 }}>
                  <Mail size={16} color="#D4A017" />
                  <a 
                    href="mailto:info@kinzeiconsultants.com" 
                    style={{ color: '#0A0F1D', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#D4A017'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#0A0F1D'}
                  >
                    info@kinzeiconsultants.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* LOWER DATA GRID */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px',
            paddingTop: '25px',
            borderTop: '1px solid #E2E8F0'
          }} className="jz-bottom-grid">

            {/* Column 1: Core Practice Services */}
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0A0F1D', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} color="#D4A017" />
                <span>Practice Areas &amp; Services</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {practiceServices.map((ps, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={15} color="#D4A017" style={{ flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: '#0A0F1D' }}>{ps.name}:</strong>{' '}
                      <span style={{ color: '#1E293B', fontWeight: 500 }}>{ps.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Key Professional Team & Sectors */}
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#111827', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={18} color="#D4A017" />
                <span>Key Qualified Professionals</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
                {keyTeamData.map((tm, i) => (
                  <div key={i} style={{ padding: '8px 12px', backgroundColor: '#F9FAFB', borderRadius: '6px', borderLeft: '3px solid #D4A017' }}>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#111827' }}>{tm.name}</div>
                    <div style={{ fontSize: '0.78rem', color: '#6B7280' }}>{tm.role}</div>
                  </div>
                ))}
              </div>

              {/* Sectors Served */}
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#111827', marginBottom: '6px' }}>
                  Client Sectors Served:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {sectors.map((sec, i) => (
                    <span key={i} style={{ backgroundColor: '#FFFBEB', color: '#B8860B', border: '1px solid rgba(212, 160, 23, 0.25)', fontSize: '0.74rem', fontWeight: 800, padding: '2px 8px', borderRadius: '4px' }}>
                      {sec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .jz-top-grid, .jz-bottom-grid {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }
        }
      `}</style>
    </section>
  );
}
