import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, Target, Eye, CheckCircle2, 
  Mail, Phone, ChevronDown, ChevronUp, Calendar, ArrowRight,
  Sparkles, Scale, Lock, Award, Briefcase, Globe, Building2, MapPin
} from 'lucide-react';
import AffiliationsSection from '../components/AffiliationsSection';
import CounterSection from '../components/CounterSection';

export default function AboutUs({ onOpenSchedule }) {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const phoneNumber = "923034063970";
  const defaultMessage = encodeURIComponent("Hello Kinzei Consultants, I would like to learn more about your global corporate and tax advisory services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

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
        padding: '100px 0 85px 0',
        backgroundColor: '#0B1120',
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(212, 160, 23, 0.18) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(30, 41, 59, 0.5) 0%, transparent 70%)',
        color: '#FFFFFF',
        textAlign: 'center',
        borderBottom: '3px solid #D4A017',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          {/* Eyebrow Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '30px',
            backgroundColor: 'rgba(212, 160, 23, 0.15)',
            border: '1px solid rgba(212, 160, 23, 0.45)',
            color: '#FCD34D',
            fontSize: '0.82rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '20px'
          }}>
            <Sparkles size={14} color="#D4A017" />
            <span>WELCOME TO KINZEI CONSULTANTS</span>
          </div>

          {/* Main Heading */}
          <h1 style={{ 
            fontSize: 'clamp(2.6rem, 5vw, 4rem)', 
            fontWeight: 900, 
            color: '#FFFFFF',
            letterSpacing: '-0.5px',
            marginBottom: '20px',
            fontFamily: 'var(--font-heading)',
            lineHeight: 1.15
          }}>
            About <span style={{ color: '#D4A017' }}>Us</span>
          </h1>

          {/* Core Narrative Paragraph */}
          <p style={{ 
            color: '#E2E8F0', 
            fontSize: '1.18rem', 
            maxWidth: '860px', 
            margin: '0 auto 34px auto', 
            lineHeight: 1.8, 
            fontWeight: 500 
          }}>
            Kinzei Consultants is a premier corporate and tax consultancy firm with a global presence, operating in key financial hubs across Pakistan, the USA, the UK, and the UAE. Our expertise spans income tax, sales tax, and corporate advisory services, providing comprehensive solutions to individuals and businesses worldwide.
          </p>

          {/* Financial Hubs / Global Presence Pills */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '36px'
          }}>
            {[
              { flag: "🇵🇰", hub: "Pakistan", desc: "SECP, FBR & PRA" },
              { flag: "🇺🇸", hub: "USA", desc: "IRS, LLC & State Tax" },
              { flag: "🇬🇧", hub: "UK", desc: "Companies House & HMRC" },
              { flag: "🇦🇪", hub: "UAE", desc: "FTA Corporate Tax & VAT" }
            ].map((item, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(212, 160, 23, 0.3)',
                  padding: '8px 16px',
                  borderRadius: '24px',
                  fontSize: '0.86rem'
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{item.flag}</span>
                <span style={{ fontWeight: 800, color: '#FFFFFF' }}>{item.hub}</span>
                <span style={{ color: '#94A3B8', fontSize: '0.78rem' }}>({item.desc})</span>
              </div>
            ))}
          </div>

          {/* Quick Consultation Actions */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenSchedule} 
              className="btn-primary" 
              style={{ padding: '13px 32px', fontSize: '0.94rem', borderRadius: '8px' }}
            >
              <Calendar size={16} />
              <span>Book Advisory Session</span>
            </button>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                padding: '13px 26px',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '0.94rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)'
              }}
            >
              <Phone size={16} />
              <span>WhatsApp: 03034063970</span>
            </a>
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

      {/* 3. FIRM OVERVIEW SECTION */}
      <section style={{ padding: '60px 0 75px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #F1F5F9' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: 900,
              color: '#0F172A',
              margin: 0,
              fontFamily: 'var(--font-heading)'
            }}>
              Firm Overview
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '40px',
            alignItems: 'stretch'
          }} className="firm-overview-grid">
            
            {/* Left Column: Office, Contact, Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', justifyContent: 'center' }}>
              
              {/* Head Office */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: '#F0F9FF',
                  border: '1px solid #BAE6FD',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0284C7',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>
                  <Building2 size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.12rem', fontWeight: 800, color: '#0F172A', margin: 0, marginBottom: '6px' }}>
                    Head Office
                  </h4>
                  <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                    Office No 47, 7th Floor, Madina Heights, Molana Shokat Ali Road, Johar Town, Lahore
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: '#F0F9FF',
                  border: '1px solid #BAE6FD',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0284C7',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.12rem', fontWeight: 800, color: '#0F172A', margin: 0, marginBottom: '6px' }}>
                    Contact
                  </h4>
                  <div style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.6, fontWeight: 500 }}>
                    <div>Phone: <a href="tel:03034063970" style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 700 }}>+92 303 4063970</a></div>
                    <div>WhatsApp: <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 700 }}>+92 303 4063970</a></div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: '#F0F9FF',
                  border: '1px solid #BAE6FD',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0284C7',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.12rem', fontWeight: 800, color: '#0F172A', margin: 0, marginBottom: '6px' }}>
                    Email
                  </h4>
                  <p style={{ fontSize: '0.96rem', color: '#475569', margin: 0, fontWeight: 500 }}>
                    <a href="mailto:info@kinzeiconsultants.com" style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 700 }}>
                      info@kinzeiconsultants.com
                    </a>
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Established Card */}
            <div style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              padding: '42px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)'
            }}>
              <div style={{ fontSize: '1.1rem', color: '#0F172A', fontWeight: 700, marginBottom: '4px' }}>
                Established
              </div>
              <div style={{
                fontSize: 'clamp(2.8rem, 4.5vw, 3.6rem)',
                fontWeight: 900,
                color: '#0284C7',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.1,
                marginBottom: '16px'
              }}>
                2017
              </div>
              <p style={{
                fontSize: '1.02rem',
                color: '#475569',
                lineHeight: 1.65,
                margin: 0,
                fontWeight: 500
              }}>
                Founded with a vision to provide comprehensive corporate and financial solutions to businesses across Pakistan and internationally.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CORE VALUE PILLARS */}
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
          .about-narrative-grid, .values-grid, .about-pillars-grid, .firm-overview-grid {
            grid-template-columns: 1fr !important;
            gap: 35px !important;
          }
        }
      `}</style>
    </div>
  );
}
