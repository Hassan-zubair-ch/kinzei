import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ShieldCheck, Target, Eye, CheckCircle2, 
  Mail, Phone, ChevronDown, ChevronUp, Calendar, ArrowRight,
  Sparkles, Scale, Lock, Award, Briefcase, Globe, Building2, MapPin,
  ArrowRightCircle, ChevronRight
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
      icon: <Scale size={26} color="#D4A017" />,
      title: "Technical Precision & Ethics",
      desc: "Every tax computation, statutory audit engagement, and SECP filing is prepared strictly in accordance with IFRS, ISA, and national tax legislation."
    },
    {
      icon: <Award size={26} color="#D4A017" />,
      title: "Institutional Quality Counsel",
      desc: "Directed by senior Chartered Accountants and tax consultants with extensive experience advising both emerging startups and established enterprises."
    },
    {
      icon: <Lock size={26} color="#D4A017" />,
      title: "Absolute Client Confidentiality",
      desc: "Enterprise-grade digital records management and strict professional non-disclosure protocols protect every corporate ledger and audit file."
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
      q: "What industries do your consultants specialize in?",
      a: "We actively serve clients across Information Technology & Software, Real Estate & Construction, Textiles & Manufacturing, Pharmaceuticals, Electronics, Import/Export, Education, and Non-Profit Organizations (NPOs)."
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111827', minHeight: '100vh' }}>
      
      {/* 1. PROFESSIONAL EXECUTIVE HERO BANNER */}
      <section style={{
        position: 'relative',
        padding: '85px 0 75px 0',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: '#FFFFFF',
        borderBottom: '3px solid #D4A017'
      }}>
        <div className="container">
          <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* Breadcrumb */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.86rem',
              color: '#94A3B8',
              marginBottom: '16px'
            }}>
              <Link to="/" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Home</Link>
              <ChevronRight size={13} />
              <span style={{ color: '#FCD34D', fontWeight: 700 }}>About Us</span>
            </div>

            {/* Eyebrow Badge */}
            <div style={{ display: 'block', marginBottom: '16px' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 16px',
                borderRadius: '20px',
                backgroundColor: 'rgba(212, 160, 23, 0.18)',
                border: '1px solid rgba(212, 160, 23, 0.45)',
                color: '#FCD34D',
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.8px'
              }}>
                <Sparkles size={13} color="#FCD34D" />
                <span>Welcome to Kinzei Consultants</span>
              </span>
            </div>

            {/* Main Heading */}
            <h1 style={{ 
              fontSize: 'clamp(2.4rem, 4.4vw, 3.6rem)', 
              fontWeight: 900, 
              color: '#FFFFFF',
              marginBottom: '18px',
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.18
            }}>
              About <span style={{ color: '#D4A017' }}>Us</span>
            </h1>

            {/* Core Narrative */}
            <p style={{ 
              color: '#CBD5E1', 
              fontSize: '1.12rem', 
              lineHeight: 1.75, 
              marginBottom: '36px', 
              fontWeight: 500 
            }}>
              Kinzei Consultants is a premier corporate and tax consultancy firm with a global presence, operating in key financial hubs across Pakistan, the USA, the UK, and the UAE. Our expertise spans income tax, sales tax, and corporate advisory services, providing comprehensive solutions to individuals and businesses worldwide.
            </p>

            {/* Structured Financial Hubs Strip */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
              gap: '14px',
              marginBottom: '36px',
              textAlign: 'left'
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
                    backgroundColor: 'rgba(30, 41, 59, 0.65)',
                    border: '1px solid rgba(212, 160, 23, 0.25)',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{item.flag}</span>
                  <div>
                    <div style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '0.92rem' }}>{item.hub}</div>
                    <div style={{ color: '#94A3B8', fontSize: '0.78rem', fontWeight: 500 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action CTAs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenSchedule} 
                className="btn-primary" 
                style={{ padding: '13px 32px', fontSize: '0.92rem', borderRadius: '8px' }}
              >
                <Calendar size={16} />
                <span>Schedule Consultation</span>
              </button>

              <a 
                href="tel:03034063970" 
                style={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  border: '1.5px solid #CBD5E1',
                  padding: '13px 26px',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#0F172A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                <Phone size={16} />
                <span>Call 03034063970</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US / TRUSTED FINANCIAL PARTNERS (BENCHMARK LAYOUT) */}
      <section style={{ padding: '90px 0 85px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '65px',
            alignItems: 'center'
          }} className="about-narrative-grid">
            
            {/* Left Column: Image with Overlapping Floating Experience Badge */}
            <div style={{ position: 'relative' }}>
              
              {/* Main Image Container */}
              <div style={{
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.08)',
                position: 'relative'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop" 
                  alt="Kinzei Financial Advisory and Consulting" 
                  style={{
                    width: '100%',
                    height: '480px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>

              {/* Floating Experience Badge (Top Left Overlap) */}
              <div style={{
                position: 'absolute',
                top: '-25px',
                left: '-25px',
                backgroundColor: '#FFFFFF',
                padding: '24px 28px',
                borderRadius: '4px',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
                border: '2px solid #D4A017',
                textAlign: 'center',
                minWidth: '150px',
                zIndex: 3
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: '#D4A017',
                  lineHeight: 1,
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '6px'
                }}>
                  15+
                </div>
                <div style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: '#0F172A',
                  lineHeight: 1.3,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Years of<br />Experience
                </div>
              </div>

              {/* Floating Brand Badge (Bottom Right) */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                backgroundColor: 'rgba(15, 23, 42, 0.92)',
                backdropFilter: 'blur(8px)',
                padding: '12px 20px',
                borderRadius: '6px',
                border: '1px solid rgba(212, 160, 23, 0.4)',
                color: '#FFFFFF',
                zIndex: 3
              }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 900, color: '#FCD34D', letterSpacing: '0.5px' }}>
                  KINZEI CONSULTANTS
                </div>
                <div style={{ fontSize: '0.72rem', color: '#CBD5E1', fontWeight: 600, letterSpacing: '0.3px' }}>
                  CHARTERED ACCOUNTANTS &amp; TAX ADVISORS
                </div>
              </div>

            </div>

            {/* Right Column: Narrative, Bullets, and Action Buttons */}
            <div>
              
              <div style={{
                fontStyle: 'italic',
                color: '#B8860B',
                fontSize: '1.05rem',
                fontWeight: 700,
                marginBottom: '10px',
                fontFamily: 'serif'
              }}>
                Why Choose Us
              </div>

              <h2 style={{
                fontSize: 'clamp(2.1rem, 3.4vw, 2.7rem)',
                fontWeight: 900,
                color: '#0F172A',
                lineHeight: 1.2,
                marginBottom: '18px',
                fontFamily: 'var(--font-heading)'
              }}>
                Trusted Financial Partners for Your Business
              </h2>

              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.75,
                marginBottom: '24px',
                fontWeight: 500
              }}>
                Kinzei Consultants is a premier firm providing audit, accounting, taxation, and advisory services to businesses across various sectors. Led by senior professionals with over <strong>15+ years of experience</strong>, we focus on delivering practical solutions, clear advice, and dependable service.
              </p>

              {/* Divider Line */}
              <div style={{ width: '100%', height: '1px', backgroundColor: '#E2E8F0', marginBottom: '22px' }} />

              {/* 5 Clean Bullet Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {[
                  "15+ years of professional experience",
                  "Qualified and experienced team of Chartered Accountants",
                  "Complete audit, tax & advisory services",
                  "Ethical, confidential, and reliable corporate governance",
                  "Client-focused and practical solutions tailored to scale"
                ].map((point, pIdx) => (
                  <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ArrowRightCircle size={18} color="#D4A017" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.94rem', color: '#1E293B', fontWeight: 600 }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button
                  onClick={onOpenSchedule}
                  style={{
                    backgroundColor: '#D4A017',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '13px 30px',
                    borderRadius: '4px',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 14px rgba(212, 160, 23, 0.3)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D4A017'}
                >
                  Book Consultation
                </button>

                <button
                  onClick={() => navigate('/services')}
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#0F172A',
                    border: '1.5px solid #CBD5E1',
                    padding: '12px 28px',
                    borderRadius: '4px',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#D4A017';
                    e.currentTarget.style.color = '#D4A017';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#CBD5E1';
                    e.currentTarget.style.color = '#0F172A';
                  }}
                >
                  Our Services
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. FIRM OVERVIEW SECTION */}
      <section style={{ padding: '80px 0 85px 0', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
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
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '26px',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.02)'
            }}>
              
              {/* Head Office */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: '#FFFBEB',
                  border: '1.5px solid rgba(212, 160, 23, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#D4A017',
                  flexShrink: 0,
                  marginTop: '2px',
                  boxShadow: '0 4px 12px rgba(212, 160, 23, 0.12)'
                }}>
                  <Building2 size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#0F172A', margin: 0, marginBottom: '6px' }}>
                    Office Address
                  </h4>
                  <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                    First Floor, Plot # 14, Main Road, Block 1 College Rd, Sector C2 Block 1 Twp Sector C 2 Township, Lahore, 54770, Pakistan
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: '#FFFBEB',
                  border: '1.5px solid rgba(212, 160, 23, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#D4A017',
                  flexShrink: 0,
                  marginTop: '2px',
                  boxShadow: '0 4px 12px rgba(212, 160, 23, 0.12)'
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#0F172A', margin: 0, marginBottom: '6px' }}>
                    Phone / WhatsApp
                  </h4>
                  <div style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, fontWeight: 500 }}>
                    <div>Phone: <a href="tel:03034063970" style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 700 }}>03034063970</a></div>
                    <div>WhatsApp: <a href="tel:03170841452" style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 700 }}>03170841452</a></div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: '#FFFBEB',
                  border: '1.5px solid rgba(212, 160, 23, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#D4A017',
                  flexShrink: 0,
                  marginTop: '2px',
                  boxShadow: '0 4px 12px rgba(212, 160, 23, 0.12)'
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#0F172A', margin: 0, marginBottom: '6px' }}>
                    Email
                  </h4>
                  <p style={{ fontSize: '0.94rem', color: '#475569', margin: 0, fontWeight: 500 }}>
                    <a href="mailto:info@kinzeiconsultants.com" style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 700 }}>
                      info@kinzeiconsultants.com
                    </a>
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Established Card */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1.5px solid #E2E8F0',
              padding: '42px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.02)'
            }}>
              <div style={{ fontSize: '1.1rem', color: '#0F172A', fontWeight: 800, marginBottom: '4px' }}>
                Established
              </div>
              <div style={{
                fontSize: 'clamp(2.8rem, 4.5vw, 3.8rem)',
                fontWeight: 900,
                color: '#D4A017',
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
      <section style={{ padding: '85px 0 90px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
            <span className="badge-gold">Our Foundation</span>
            <h2 style={{ fontSize: '2.3rem', fontWeight: 900, color: '#0F172A', marginTop: '10px', marginBottom: '14px' }}>
              Core Principles of Advisory
            </h2>
            <p style={{ color: '#64748B', fontSize: '1.02rem', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
              The foundational ethical and professional standards that govern every client engagement at Kinzei Consultants.
            </p>
          </div>

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
                  padding: '32px 28px',
                  border: '1.5px solid #E2E8F0',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
                }}
                className="pillar-card-hover"
              >
                <div style={{
                  width: '54px',
                  height: '54px',
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
                <h3 style={{ fontSize: '1.22rem', color: '#0F172A', fontWeight: 800, marginBottom: '10px' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. PURPOSE, VISION & MISSION BLOCK */}
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
                fontSize: '0.88rem',
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
