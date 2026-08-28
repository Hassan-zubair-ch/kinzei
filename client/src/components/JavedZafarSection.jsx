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

            {/* Left: EXACT JAZVED ZAFAR LOGO IMAGE CARD (NO PEOPLE FACES) */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: '24px 20px',
              border: '2px solid #C49A2C',
              boxShadow: '0 8px 25px rgba(196, 154, 44, 0.12)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
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
                color: '#8C6B2F',
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
                backgroundColor: '#FEF3C7',
                color: '#92400E',
                fontSize: '0.78rem',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.6px',
                marginBottom: '12px'
              }}>
                <Sparkles size={13} color="#D97706" />
                <span>Operating Under Kinzei Consultants Agency</span>
              </div>

              <h2 style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)',
                color: '#111827',
                fontWeight: 800,
                marginBottom: '10px',
                lineHeight: 1.2
              }}>
                Javed Zafar &amp; Co. <span style={{ color: '#C49A2C' }}>Chartered Accountants</span>
              </h2>

              <p style={{
                fontSize: '0.98rem',
                color: '#4B5563',
                lineHeight: 1.7,
                marginBottom: '20px'
              }}>
                <strong>Javed Zafar &amp; Co.</strong> is a Chartered Accountants firm offering expert accounting, taxation, bookkeeping, auditing, and compliance services. Operating under our agency <strong>Kinzei Consultants (Private) Limited</strong>, the practice helps businesses stay compliant, manage financial risks, and grow with confidence.
              </p>

              {/* Contact Bar Row */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                flexWrap: 'wrap',
                fontSize: '0.88rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#111827', fontWeight: 700 }}>
                  <MapPin size={16} color="#C49A2C" style={{ flexShrink: 0 }} />
                  <span>First Floor, Plot # 14, Main Road, Block 1 College Rd, Sector C2 Block 1 Twp Sector C 2 Township, Lahore, 54770</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#111827', fontWeight: 700 }}>
                  <Phone size={16} color="#C49A2C" />
                  <a href="tel:03034063970" style={{ color: '#111827', textDecoration: 'none' }}>03034063970</a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C49A2C', fontWeight: 700 }}>
                  <Mail size={16} color="#C49A2C" />
                  <a href="mailto:info@kinzeiconsultants.com" style={{ color: '#C49A2C', textDecoration: 'none' }}>
                    info@kinzeiconsultants.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* LOWER DATA GRID: SERVICES & KEY QUALIFIED TEAM DATA */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px',
            paddingTop: '25px',
            borderTop: '1px solid #E5E7EB'
          }} className="jz-bottom-grid">

            {/* Column 1: Core Practice Services */}
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#111827', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} color="#C49A2C" />
                <span>Practice Areas &amp; Services</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {practiceServices.map((ps, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={15} color="#C49A2C" style={{ flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: '#1F2937' }}>{ps.name}:</strong>{' '}
                      <span style={{ color: '#6B7280' }}>{ps.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Key Professional Team & Sectors */}
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#111827', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={18} color="#C49A2C" />
                <span>Key Qualified Professionals</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
                {keyTeamData.map((tm, i) => (
                  <div key={i} style={{ padding: '8px 12px', backgroundColor: '#F9FAFB', borderRadius: '6px', borderLeft: '3px solid #C49A2C' }}>
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
                    <span key={i} style={{ backgroundColor: '#FEF3C7', color: '#92400E', fontSize: '0.74rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
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
