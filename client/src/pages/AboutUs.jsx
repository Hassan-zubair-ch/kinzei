import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, Target, Eye, CheckCircle2, 
  Mail, Phone, ChevronDown, ChevronUp, Calendar, ArrowRight,
  Sparkles, Scale, Lock, Award, Briefcase
} from 'lucide-react';
import AffiliationsSection from '../components/AffiliationsSection';
import CounterSection from '../components/CounterSection';

export default function AboutUs({ onOpenSchedule }) {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const corePillars = [
    {
      icon: <Scale size={28} color="#D4A017" />,
      title: "Technical Precision & Ethics",
      desc: "Every tax computation, audit engagement, and statutory filing is prepared strictly in accordance with IFRS, ISA, and national revenue laws."
    },
    {
      icon: <Award size={28} color="#D4A017" />,
      title: "Institutional Excellence",
      desc: "Directed by senior Chartered Accountants and tax consultants with extensive experience in public and private sector advisory."
    },
    {
      icon: <Lock size={28} color="#D4A017" />,
      title: "Absolute Confidentiality",
      desc: "Enterprise-grade digital encryption and strict professional non-disclosure agreements protect every client document and audit record."
    }
  ];

  const faqs = [
    {
      q: "What regulatory registrations does Kinzei Consultants handle in Pakistan?",
      a: "We manage complete company incorporation with SECP (Private Limited, SMC-Pvt, LLP), FBR Income Tax & Sales Tax (NTN / STRN), Provincial Revenue Authorities (PRA, SRB, KPRA, BRA), Chamber of Commerce memberships, and EOBI/PESSI statutory enrollments."
    },
    {
      q: "How does Kinzei handle international tax and cross-border companies?",
      a: "Our dedicated international desk manages turnkey US LLC formations, obtaining IRS EINs, UK Companies House incorporation, HMRC Corporation Tax & VAT registration, ZATCA e-invoicing in Saudi Arabia, and UAE FTA Corporate Tax compliance."
    },
    {
      q: "What services are included in the monthly corporate retainership?",
      a: "Our monthly retainership covers routine management accounting, monthly sales tax & withholding tax statements, SECP annual return filings (Form A/29), payroll processing, and direct phone/in-person access to senior consultants for ongoing advisory."
    },
    {
      q: "What industries do your partners specialize in?",
      a: "We actively serve clients across Information Technology & Software, Real Estate & Construction, Textiles & Manufacturing, Pharmaceuticals, Electronics, Import/Export, Education, and Non-Profit Organizations (NPOs)."
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111827', minHeight: '100vh' }}>
      
      {/* 1. HIGH-END EXECUTIVE HERO BANNER */}
      <section style={{
        position: 'relative',
        padding: '95px 0 85px 0',
        backgroundColor: '#0B1120',
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(212, 160, 23, 0.18) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(30, 41, 59, 0.5) 0%, transparent 70%)',
        color: '#FFFFFF',
        textAlign: 'center',
        borderBottom: '2px solid #D4A017',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '30px',
            backgroundColor: 'rgba(212, 160, 23, 0.15)',
            border: '1px solid rgba(212, 160, 23, 0.4)',
            color: '#FCD34D',
            fontSize: '0.82rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '18px'
          }}>
            <Sparkles size={14} color="#D4A017" />
            <span>ABOUT KINZEI CONSULTANTS</span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', 
            fontWeight: 900, 
            color: '#FFFFFF',
            letterSpacing: '-0.5px',
            marginBottom: '18px',
            fontFamily: 'var(--font-heading)',
            lineHeight: 1.2
          }}>
            Your Trusted Partner in <span style={{ color: '#D4A017' }}>Tax, Audit &amp; Global Advisory</span>
          </h1>

          <p style={{ color: '#E2E8F0', fontSize: '1.12rem', maxWidth: '780px', margin: '0 auto 32px auto', lineHeight: 1.7, fontWeight: 500 }}>
            Kinzei Consultants (Private) Limited delivers chartered accountancy, corporate tax litigation defense, SECP compliance, and international desk operations with institutional excellence.
          </p>

          {/* Quick Metrics Badges */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            fontSize: '0.9rem',
            color: '#F8FAFC'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.12)' }}>
              <ShieldCheck size={16} color="#D4A017" />
              <span>15+ Years Combined Experience</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.12)' }}>
              <Briefcase size={16} color="#D4A017" />
              <span>Institutional Quality Counsel</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.12)' }}>
              <ShieldCheck size={16} color="#D4A017" />
              <span>FBR &amp; SECP Registered</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE & COMPANY NARRATIVE */}
      <section style={{ padding: '85px 0 75px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }} className="about-narrative-grid">
            
            {/* Left Story Column */}
            <div>
              <span className="badge-gold">Corporate Overview</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                lineHeight: 1.25,
                marginTop: '12px',
                marginBottom: '22px',
                fontWeight: 800,
                color: '#111827',
                fontFamily: 'var(--font-heading)'
              }}>
                Strategic Advisory Built on <span style={{ color: '#D4A017' }}>Integrity &amp; Results</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '1.02rem', color: '#374151', lineHeight: 1.75, fontWeight: 500 }}>
                <p>
                  <strong>Kinzei Consultants (Private) Limited</strong> is a premier professional services firm providing audit, accounting, taxation, and corporate advisory services to businesses and individuals. The firm is led by senior professionals with over <strong>15+ years of professional experience</strong> across public and private sector organizations.
                </p>

                <p>
                  We are committed to delivering reliable, practical, and high-quality professional services that help our clients meet regulatory requirements, strengthen financial controls, and make informed business decisions. Our approach is based on integrity, technical expertise, and a clear understanding of our clients' business needs.
                </p>

                <p>
                  The firm offers a wide range of services including <strong>Audit &amp; Assurance, Accounting &amp; Financial Reporting, Taxation &amp; Litigation Support, Corporate &amp; Secretarial Advisory, and Information Technology support</strong>. We work closely with our clients to provide tailored solutions that are aligned with their operational and strategic objectives.
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', marginTop: '30px', flexWrap: 'wrap' }}>
                <button
                  onClick={onOpenSchedule}
                  className="btn-primary"
                  style={{ padding: '12px 28px', fontSize: '0.95rem' }}
                >
                  <Calendar size={16} />
                  <span>Book Partner Consultation</span>
                </button>

                <button
                  onClick={() => navigate('/services')}
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#111827',
                    border: '1.5px solid #D1D5DB',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#D4A017'; e.currentTarget.style.color = '#D4A017'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#D1D5DB'; e.currentTarget.style.color = '#111827'; }}
                >
                  <span>Explore Services</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Visual Card */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.12)',
                border: '1.5px solid #E5E7EB',
                position: 'relative'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop" 
                  alt="Kinzei Corporate Financial Consultation" 
                  style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(11, 17, 32, 0.85) 0%, rgba(11, 17, 32, 0.2) 60%, transparent 100%)'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                  color: '#FFFFFF'
                }}>
                  <div style={{ fontSize: '0.82rem', color: '#D4A017', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    FCA &amp; CISA Led Practice
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', marginTop: '4px', marginBottom: '6px' }}>
                    Trusted by 350+ Businesses Worldwide
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#E2E8F0', margin: 0, lineHeight: 1.5 }}>
                    Dedicated corporate tax desk, statutory compliance, and digital bookkeeping.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE VALUE PILLARS */}
      <section style={{ padding: '20px 0 75px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '26px'
          }} className="about-pillars-grid">
            {corePillars.map((p, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '16px',
                  padding: '30px 26px',
                  border: '1.5px solid #E5E7EB',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)'
                }}
                className="pillar-card-hover"
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid rgba(212, 160, 23, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                  boxShadow: '0 6px 16px rgba(212, 160, 23, 0.12)'
                }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: '1.22rem', color: '#111827', fontWeight: 800, marginBottom: '10px' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#4B5563', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CEO & MANAGING LEADERSHIP SPOTLIGHT (WITH CEO IMAGE) */}
      <section style={{ padding: '85px 0 85px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container">
          <div 
            className="partner-spotlight-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '380px 1fr',
              gap: '60px',
              alignItems: 'center'
            }}
          >
            
            {/* Left Column: CEO Image Card */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 18px 45px rgba(0, 0, 0, 0.12)',
                border: '1.5px solid #E5E7EB'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                  alt="Senior Partner & Managing Director" 
                  style={{
                    width: '100%',
                    height: '460px',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop';
                  }}
                />
              </div>

              <div style={{
                marginTop: '16px',
                padding: '16px 20px',
                backgroundColor: '#F8FAFC',
                borderRadius: '12px',
                border: '1.5px solid rgba(212, 160, 23, 0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
              }}>
                <ShieldCheck size={28} color="#D4A017" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#111827' }}>Senior Managing Leadership</div>
                  <div style={{ fontSize: '0.8rem', color: '#4B5563', fontWeight: 600 }}>Chartered Accountants &amp; Advisory Partners</div>
                </div>
              </div>
            </div>

            {/* Right Column: Managing Director Profile & Message */}
            <div>
              <span className="badge-gold">Leadership &amp; Governance</span>

              <h2 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                fontWeight: 800,
                color: '#111827',
                marginTop: '10px',
                marginBottom: '4px',
                fontFamily: 'var(--font-heading)'
              }}>
                Managing Partner &amp; Founder
              </h2>

              <div style={{
                fontSize: '1rem',
                fontWeight: 800,
                color: '#D4A017',
                marginBottom: '22px'
              }}>
                Chartered Accountants &amp; Senior Advisory Leadership
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.98rem', color: '#374151', lineHeight: 1.75, fontWeight: 500 }}>
                <p>
                  Our Founder and Managing Leadership Team bring extensive professional experience in audit, accounting, taxation, and financial reporting. Having served a wide range of public and private sector organizations, our partners bring deep expertise in financial management, compliance, governance, and internal controls.
                </p>

                <p>
                  Our professional leadership includes senior experience from top tier chartered accountancy practices and international firms. We specialize in financial reporting under <strong>IFRS</strong>, statutory external audits, tax litigation defense with the FBR, financial modeling, budgeting, and strategic corporate advisory.
                </p>

                <p>
                  Known for a practical, disciplined, and ethical approach, our partners work closely with clients to understand their business challenges and deliver clear, reliable, and value-driven solutions. Our focus remains on strengthening financial systems, ensuring regulatory compliance, and supporting sustainable business growth.
                </p>
              </div>

              {/* Direct Contact Bar */}
              <div style={{
                marginTop: '28px',
                paddingTop: '20px',
                borderTop: '1px solid #E5E7EB',
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
                flexWrap: 'wrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(212, 160, 23, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={16} color="#D4A017" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: '#6B7280', fontWeight: 700 }}>Direct Email</div>
                    <a 
                      href="mailto:info@kinzeiconsultants.com" 
                      style={{ color: '#111827', fontWeight: 800, fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#D4A017'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}
                    >
                      info@kinzeiconsultants.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(212, 160, 23, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={16} color="#D4A017" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: '#6B7280', fontWeight: 700 }}>Direct Phone</div>
                    <a 
                      href="tel:03034063970" 
                      style={{ color: '#111827', fontWeight: 800, fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#D4A017'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}
                    >
                      03034063970
                    </a>
                  </div>
                </div>

                <button
                  onClick={onOpenSchedule}
                  className="btn-primary"
                  style={{ padding: '9px 20px', fontSize: '0.85rem', marginLeft: 'auto' }}
                >
                  <Calendar size={14} />
                  <span>Book Consultation</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        <style>{`
          @media (max-width: 992px) {
            .partner-spotlight-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* 5. VISION & MISSION BLOCK */}
      <section style={{
        backgroundColor: '#0B1120',
        color: '#FFFFFF',
        padding: '85px 0',
        borderTop: '2px solid #D4A017',
        borderBottom: '2px solid #D4A017',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '50px',
            alignItems: 'center'
          }} className="values-grid">
            
            {/* Left Column */}
            <div>
              <div style={{
                fontSize: '1rem',
                color: '#D4A017',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '10px'
              }}>
                PURPOSE &amp; GOVERNANCE
              </div>

              <h2 style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 2.8rem)',
                lineHeight: 1.2,
                marginBottom: '20px',
                fontWeight: 800,
                color: '#FFFFFF',
                fontFamily: 'var(--font-heading)'
              }}>
                Building Trust Through <span style={{ color: '#D4A017' }}>Professional Excellence</span>
              </h2>

              <p style={{ fontSize: '1rem', color: '#E2E8F0', lineHeight: 1.7, marginBottom: '16px', fontWeight: 500 }}>
                We create sustainable value for our clients by delivering reliable audit, accounting, taxation, and advisory services. Our approach is based on uncompromising integrity, technical expertise, and an in-depth understanding of your business model.
              </p>

              <p style={{ fontSize: '1rem', color: '#E2E8F0', lineHeight: 1.7, fontWeight: 500 }}>
                We focus on building long-term relationships through clear counsel, prompt execution, and proactive advisory that shields your firm from regulatory risk.
              </p>
            </div>

            {/* Right Column: Vision & Mission Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Vision Card */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '16px',
                padding: '28px',
                border: '1.5px solid rgba(212, 160, 23, 0.35)',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#D4A017',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0,
                  boxShadow: '0 6px 15px rgba(212, 160, 23, 0.35)'
                }}>
                  <Eye size={26} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#D4A017', marginBottom: '8px' }}>
                    Our Vision
                  </h3>
                  <p style={{ fontSize: '0.94rem', color: '#E2E8F0', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                    To be the leading professional services firm recognized globally for technical excellence, institutional integrity, and practical solutions that empower businesses to scale with confidence.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '16px',
                padding: '28px',
                border: '1.5px solid rgba(212, 160, 23, 0.35)',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#D4A017',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0,
                  boxShadow: '0 6px 15px rgba(212, 160, 23, 0.35)'
                }}>
                  <Target size={26} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#D4A017', marginBottom: '8px' }}>
                    Our Mission
                  </h3>
                  <p style={{ fontSize: '0.94rem', color: '#E2E8F0', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                    To deliver highest-tier audit, tax litigation, corporate secretarial, and cross-border advisory through experienced chartered accountants while upholding strict confidentiality and client care.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. AFFILIATIONS & CERTIFICATIONS */}
      <AffiliationsSection />

      {/* 7. COUNTER & IMPACT METRICS */}
      <CounterSection />

      {/* 8. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section style={{ padding: '85px 0 95px 0', backgroundColor: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span className="badge-gold">Common Queries</span>
            <h2 style={{ fontSize: '2.4rem', color: '#111827', marginTop: '10px', fontWeight: 800 }}>
              Frequently Asked <span style={{ color: '#D4A017' }}>Questions</span>
            </h2>
            <p style={{ color: '#4B5563', fontSize: '1.02rem', marginTop: '8px', fontWeight: 500 }}>
              Direct answers to questions regarding our advisory services and compliance engagements.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '14px',
                    border: isOpen ? '1.5px solid #D4A017' : '1.5px solid #E5E7EB',
                    overflow: 'hidden',
                    boxShadow: isOpen ? '0 8px 25px rgba(212, 160, 23, 0.12)' : '0 2px 8px rgba(0,0,0,0.03)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: 'transparent',
                      color: '#111827',
                      fontSize: '1.02rem',
                      fontWeight: 800,
                      textAlign: 'left',
                      cursor: 'pointer',
                      border: 'none'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} color="#D4A017" /> : <ChevronDown size={20} color="#6B7280" />}
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 22px 24px', color: '#374151', fontSize: '0.96rem', lineHeight: 1.7, fontWeight: 500, borderTop: '1px solid #F1F5F9', paddingTop: '16px' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. EXECUTIVE BOTTOM CTA BANNER */}
      <section style={{
        background: 'linear-gradient(135deg, #0B1120 0%, #111827 100%)',
        padding: '75px 0',
        color: '#FFFFFF',
        textAlign: 'center',
        borderTop: '2px solid #D4A017'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="badge-gold" style={{ marginBottom: '14px' }}>CONFIDENTIAL CONSULTATION</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
            fontWeight: 800,
            marginBottom: '16px',
            color: '#FFFFFF',
            fontFamily: 'var(--font-heading)'
          }}>
            Ready to Protect &amp; Grow Your Enterprise?
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#E2E8F0', marginBottom: '32px', lineHeight: 1.6, fontWeight: 500 }}>
            Connect with our senior partners for comprehensive tax planning, statutory audit, and strategic financial advisory.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenSchedule}
              className="btn-primary"
              style={{ padding: '14px 34px', fontSize: '0.98rem' }}
            >
              <Calendar size={18} />
              <span>Schedule Free Consultation</span>
            </button>

            <button
              onClick={() => navigate('/contact')}
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                border: '1.5px solid #FFFFFF',
                padding: '14px 28px',
                borderRadius: '8px',
                fontSize: '0.98rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#D4A017'; e.currentTarget.style.color = '#D4A017'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#FFFFFF'; e.currentTarget.style.color = '#FFFFFF'; }}
            >
              Contact Our Office
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .pillar-card-hover:hover {
          transform: translateY(-5px);
          border-color: #D4A017 !important;
          box-shadow: 0 16px 35px rgba(212, 160, 23, 0.15) !important;
        }
        @media (max-width: 992px) {
          .about-narrative-grid, .values-grid, .about-pillars-grid {
            grid-template-columns: 1fr !important;
            gap: 35px !important;
          }
        }
      `}</style>
    </div>
  );
}
