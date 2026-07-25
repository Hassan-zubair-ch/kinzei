import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Target, Eye, Award, CheckCircle2, Building, Users, 
  ArrowRightCircle, FileText, Briefcase, ChevronDown, ChevronUp 
} from 'lucide-react';

export default function AboutUs({ onOpenSchedule }) {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "What regulatory registrations does Kinzei Consultants handle in Pakistan?",
      a: "We manage complete company incorporation with SECP (Private Limited, SMC-Pvt, LLP), FBR Income Tax & Sales Tax (NTN / STRN), Provincial Revenue Authorities (PRA, SRB, KPRA), Chamber of Commerce membership, and EOBI/PESSI registration."
    },
    {
      q: "How does Kinzei handle US LLC and UK Limited company setups?",
      a: "Our dedicated US & UK Desks manage turnkey entity formation, obtaining IRS EIN numbers, state sales tax permits, Companies House incorporation, HMRC Corporation Tax & VAT registration, and annual filings."
    },
    {
      q: "What is included in Kinzei’s monthly Retainership Service?",
      a: "Our retainership model covers regular monthly management accounting, sales tax & withholding tax filings, SECP annual returns, payroll management, and direct access to senior consultants for day-to-day advisory."
    },
    {
      q: "How accurate is the online Tax Calculator?",
      a: "Our Tax Calculator is updated per the latest FBR 2024-2026 tax slabs, IRS federal brackets, and HMRC rules. It automatically accounts for Medical Allowance exemptions and pre-tax deductions."
    }
  ];

  return (
    <div>
      {/* 1. HEADER BANNER */}
      <section style={{
        background: 'linear-gradient(180deg, #181C26 0%, #090A0E 100%)',
        padding: '80px 0 60px 0',
        textAlign: 'center',
        borderBottom: '1px solid rgba(212, 175, 55, 0.15)'
      }}>
        <div className="container">
          <span className="badge-gold">About Our Firm</span>
          <h1 style={{ fontSize: '2.8rem', marginTop: '12px', marginBottom: '16px' }}>
            Kinzei Consultants <span className="gold-gradient-text">(Private) Limited</span>
          </h1>
          <p style={{ color: '#9BA4B5', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto' }}>
            Providing independent statutory audit, corporate taxation, legal retainership, and multi-country corporate advisory with absolute accuracy, transparency, and integrity.
          </p>
        </div>
      </section>

      {/* 2. TRUSTED FINANCIAL PARTNERS FOR YOUR BUSINESS */}
      <section style={{ padding: '90px 0', backgroundColor: '#090A0E', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '60px',
            alignItems: 'center'
          }} className="about-grid">

            {/* Left Image with Badge */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                height: '440px'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                  alt="Corporate Partners"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                backgroundColor: '#181C26',
                border: '2px solid #D4AF37',
                borderRadius: '16px',
                padding: '20px 28px',
                boxShadow: '0 15px 35px rgba(212, 175, 55, 0.3)',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '2.6rem', fontWeight: 900, color: '#D4AF37', fontFamily: 'var(--font-heading)' }}>15+</span>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Years of<br />Experience
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div>
              <span className="badge-gold">Empowering Growth</span>
              <h2 style={{ fontSize: '2.4rem', marginTop: '12px', marginBottom: '20px', lineHeight: 1.25 }}>
                Trusted Financial Partners <span className="gold-gradient-text">for Your Business</span>
              </h2>
              <p style={{ color: '#B0B8C8', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '28px' }}>
                Kinzei Consultants (Private) Limited is a firm of Chartered Accountants providing audit, accounting, taxation, and advisory services to businesses across various sectors. Led by senior professionals with over <strong>15+ years of experience</strong>, we focus on delivering practical solutions, clear advice, and dependable service.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {[
                  '15+ years of professional experience',
                  'Qualified and experienced team of FCA & CPAs',
                  'Complete audit, tax & advisory services',
                  'Ethical, confidential, and reliable execution',
                  'Client-focused and practical solutions'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ArrowRightCircle size={20} color="#D4AF37" style={{ flexShrink: 0 }} />
                    <span style={{ color: '#E1E6F0', fontSize: '0.98rem', fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. COUNTER STATISTICS */}
      <section style={{ backgroundColor: '#11141C', padding: '60px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{
            backgroundColor: '#181C26',
            borderRadius: '24px',
            padding: '40px 30px',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            textAlign: 'center'
          }}>
            {[
              { icon: Users, number: '350 +', label: 'Happy Clients' },
              { icon: FileText, number: '500 +', label: 'Cases Completed' },
              { icon: Award, number: '15 +', label: 'Years Of Experience' },
              { icon: Briefcase, number: '15 +', label: 'Professional Team' },
            ].map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(212, 175, 55, 0.12)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D4AF37',
                    marginBottom: '14px'
                  }}>
                    <StatIcon size={24} />
                  </div>
                  <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#9BA4B5', marginTop: '4px', fontWeight: 600 }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OUR VALUE: BUILDING TRUST THROUGH PROFESSIONAL EXCELLENCE */}
      <section style={{
        padding: '90px 0',
        background: 'linear-gradient(135deg, #0F172A 0%, #090A0E 100%)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }} className="about-grid">

            {/* Left Content */}
            <div>
              <span style={{ fontSize: '0.85rem', color: '#D4AF37', fontStyle: 'italic', fontWeight: 700 }}>
                Our Value
              </span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '8px', marginBottom: '24px', color: '#FFFFFF', lineHeight: 1.25 }}>
                Building Trust Through <span className="gold-gradient-text">Professional Excellence</span>
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '16px' }}>
                We create value for our clients by delivering reliable audit, accounting, taxation, and advisory services. Our approach is based on integrity, technical expertise, and a deep understanding of our clients’ business needs.
              </p>
              <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.8 }}>
                We focus on building long-term relationships by providing clear advice, timely support, and solutions that add real value to our clients’ businesses.
              </p>
            </div>

            {/* Right Vision & Mission Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{
                backgroundColor: '#1E293B',
                borderRadius: '16px',
                padding: '30px',
                borderLeft: '5px solid #D4AF37',
                display: 'flex',
                gap: '20px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#D4AF37',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Eye size={24} color="#0F172A" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '8px' }}>Our Vision</h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    To be a trusted professional services firm known for quality, integrity, and practical solutions that help businesses grow with confidence and compliance.
                  </p>
                </div>
              </div>

              <div style={{
                backgroundColor: '#1E293B',
                borderRadius: '16px',
                padding: '30px',
                borderLeft: '5px solid #D4AF37',
                display: 'flex',
                gap: '20px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#D4AF37',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Target size={24} color="#0F172A" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '8px' }}>Our Mission</h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    To provide high-quality audit, accounting, taxation, and advisory services through experienced professionals, while maintaining the highest standards of ethics, confidentiality, and client care.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE FAQ ACCORDION */}
      <section style={{ padding: '90px 0', backgroundColor: '#090A0E' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="badge-gold">Frequently Asked Questions</span>
            <h2 style={{ fontSize: '2.4rem', marginTop: '12px', color: '#FFFFFF' }}>
              Got Questions? <span className="gold-gradient-text">We Have Answers</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#141822',
                    borderRadius: '14px',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      padding: '20px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '1.05rem'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} color="#D4AF37" /> : <ChevronDown size={20} color="#D4AF37" />}
                  </div>

                  {isOpen && (
                    <div style={{
                      padding: '0 24px 20px 24px',
                      color: '#9BA4B5',
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      borderTop: '1px solid rgba(255,255,255,0.05)',
                      paddingTop: '16px'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <button onClick={onOpenSchedule} className="btn-primary" style={{ padding: '14px 32px' }}>
              <span>Schedule Direct Partner Meeting</span>
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}
