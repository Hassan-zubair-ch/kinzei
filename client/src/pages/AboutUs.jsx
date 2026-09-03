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
      
      {/* 1. FOUNDER & CEO LEADERSHIP SECTION */}
      <section style={{ 
        padding: '50px 0 85px 0', 
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '1180px' }}>
          
          {/* Breadcrumb Navigation */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.88rem',
            marginBottom: '32px'
          }}>
            <Link to="/" style={{ color: '#64748B', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
            <ChevronRight size={14} color="#94A3B8" />
            <span style={{ color: '#D4A017', fontWeight: 700 }}>About Us</span>
            <ChevronRight size={14} color="#94A3B8" />
            <span style={{ color: '#0F172A', fontWeight: 700 }}>Executive Leadership</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 440px) 1fr',
            gap: '55px',
            alignItems: 'center'
          }} className="ceo-leadership-grid">
            
            {/* Left Column: CEO Executive Portrait */}
            <div style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div style={{
                width: '100%',
                maxWidth: '430px',
                aspectRatio: '738 / 985',
                borderRadius: '20px',
                border: '2px solid rgba(212, 160, 23, 0.45)',
                boxShadow: '0 20px 45px rgba(15, 23, 42, 0.16)',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#0F172A'
              }}>
                <img
                  src="/team/amina-batool.png"
                  alt="Amina Batool - Chief Executive Officer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block'
                  }}
                />
              </div>

              {/* Floating Badge below portrait */}
              <div style={{
                marginTop: '-22px',
                background: '#FFFFFF',
                border: '1.5px solid #D4A017',
                borderRadius: '30px',
                padding: '8px 24px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                zIndex: 3
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D4A017' }} />
                <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                  Professional Experience: 2021 – Present
                </span>
              </div>
            </div>

            {/* Right Column: Founder & CEO Profile */}
            <div>
              
              <div style={{
                fontSize: '1.05rem',
                color: '#D4A017',
                fontStyle: 'italic',
                fontWeight: 700,
                marginBottom: '6px',
                fontFamily: 'Georgia, serif'
              }}>
                Managing Partner &amp; Chief Executive Officer
              </div>

              <h1 style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 2.8rem)',
                fontWeight: 900,
                color: '#0F172A',
                marginBottom: '6px',
                lineHeight: 1.15,
                fontFamily: 'var(--font-heading)'
              }}>
                Amina Batool
              </h1>

              <div style={{
                fontSize: '0.96rem',
                color: '#64748B',
                fontWeight: 700,
                marginBottom: '18px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: '#0F172A' }}>CA Finalist</span>
                <span style={{ color: '#CBD5E1' }}>•</span>
                <span>BBA (Hons) – Finance</span>
                <span style={{ color: '#CBD5E1' }}>•</span>
                <span style={{ color: '#B8860B' }}>Taxation &amp; Bookkeeping Certified</span>
              </div>

              <div style={{
                width: '65px',
                height: '3px',
                backgroundColor: '#D4A017',
                marginBottom: '20px',
                borderRadius: '2px'
              }} />

              {/* Bio Narrative - Simple, Elegant & Short */}
              <div style={{
                fontSize: '1rem',
                color: '#334155',
                lineHeight: 1.75,
                marginBottom: '20px',
                fontWeight: 500
              }}>
                <p style={{ margin: '0 0 12px 0' }}>
                  <strong>Amina Batool</strong>, Chief Executive Officer of <strong>Kinzei Consultants (Private) Limited</strong>, brings active practice experience from reputable Chartered Accountancy firms since <strong>2021</strong>. She leads the firm’s statutory accounting, audit, and tax compliance advisory.
                </p>
                <p style={{ margin: 0 }}>
                  Her expertise includes full-cycle accounting under IFRS, corporate tax filings, and internal control reviews for businesses across Pakistan, US, UK, and UAE. She also specializes in cloud accounting implementations across QuickBooks, Xero, Zoho, and ERP systems.
                </p>
              </div>

              {/* Core Competency Badges */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginTop: '18px',
                paddingTop: '16px',
                borderTop: '1px solid #E2E8F0'
              }} className="ceo-skills-grid">
                {[
                  "Audit & Assurance (IFRS Reporting)",
                  "Corporate Tax & Statutory Compliance",
                  "Cross-Border Accounting (US, UK, UAE, PK)",
                  "Cloud ERP Systems (QuickBooks, Xero, Zoho)"
                ].map((skill, sIdx) => (
                  <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#D4A017',
                      flexShrink: 0
                    }} />
                    <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1E293B' }}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 2. FIRM OVERVIEW SECTION */}
      <section style={{ padding: '80px 0 85px 0', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
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
                  backgroundColor: 'rgba(212, 160, 23, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={22} color="#D4A017" />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748B', letterSpacing: '0.5px' }}>
                    Head Office
                  </div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0F172A', marginTop: '2px', lineHeight: 1.45 }}>
                    Suite # 505, 5th Floor, Eden Heights, Jail Road, Gulberg, Lahore, Pakistan
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(212, 160, 23, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={22} color="#D4A017" />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748B', letterSpacing: '0.5px' }}>
                    Contact Number
                  </div>
                  <a
                    href="tel:03034063970"
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#0F172A',
                      textDecoration: 'none',
                      marginTop: '2px',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#D4A017'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#0F172A'; }}
                  >
                    0303-4063970
                  </a>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(212, 160, 23, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={22} color="#D4A017" />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748B', letterSpacing: '0.5px' }}>
                    Email Address
                  </div>
                  <a
                    href="mailto:contact@kinzeiconsultants.com"
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#0F172A',
                      textDecoration: 'none',
                      marginTop: '2px',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#D4A017'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#0F172A'; }}
                  >
                    contact@kinzeiconsultants.com
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Established Card */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.02)'
            }}>
              <div style={{
                fontSize: '0.84rem',
                fontWeight: 800,
                color: '#D4A017',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '8px'
              }}>
                Established
              </div>
              <div style={{
                fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
                fontWeight: 900,
                color: '#0F172A',
                lineHeight: 1,
                marginBottom: '16px',
                fontFamily: 'var(--font-heading)'
              }}>
                2023
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

      {/* 3. WHY CHOOSE US / TRUSTED FINANCIAL PARTNERS */}
      <section style={{ padding: '90px 0 85px 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
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
                padding: '22px 24px',
                borderRadius: '4px',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
                border: '2px solid #D4A017',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: '#0F172A',
                  lineHeight: 1,
                  fontFamily: 'var(--font-heading)'
                }}>
                  04<span style={{ color: '#D4A017' }}>+</span>
                </div>
                <div style={{
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  color: '#334155',
                  textTransform: 'uppercase',
                  lineHeight: 1.3,
                  letterSpacing: '0.5px'
                }}>
                  Years of<br />Excellence
                </div>
              </div>

              {/* Floating Brand Badge (Bottom Right) */}
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                right: '25px',
                backgroundColor: '#0F172A',
                color: '#FFFFFF',
                padding: '12px 20px',
                borderRadius: '6px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                borderLeft: '4px solid #D4A017',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <ShieldCheck size={20} color="#D4A017" />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.5px' }}>
                  Institutional-Grade Advisory
                </span>
              </div>

            </div>

            {/* Right Column: Narrative, Bullets, and Action Buttons */}
            <div>
              
              <span className="badge-gold">TRUSTED FINANCIAL PARTNERS</span>
              
              <h2 style={{
                fontSize: 'clamp(2.1rem, 3.5vw, 2.7rem)',
                fontWeight: 900,
                color: '#0F172A',
                marginTop: '12px',
                marginBottom: '18px',
                lineHeight: 1.2,
                fontFamily: 'var(--font-heading)'
              }}>
                Empowering Businesses With <span style={{ color: '#D4A017' }}>Precision &amp; Integrity</span>
              </h2>

              <p style={{
                fontSize: '1.05rem',
                color: '#475569',
                lineHeight: 1.7,
                marginBottom: '16px',
                fontWeight: 500
              }}>
                At Kinzei Consultants, we deliver end-to-end accounting, tax compliance, and corporate advisory solutions designed to help ambitious companies thrive in an increasingly complex regulatory landscape.
              </p>

              <p style={{
                fontSize: '0.96rem',
                color: '#64748B',
                lineHeight: 1.65,
                marginBottom: '28px'
              }}>
                Whether you are managing complex FBR tax audits, establishing multi-jurisdictional operations across the US, UK, and UAE, or seeking trusted day-to-day bookkeeping, our multidisciplinary team of Chartered Accountants and legal advisors provides the clarity and strategic foresight required to safeguard your commercial interests.
              </p>

              {/* Divider Line */}
              <div style={{ height: '1px', backgroundColor: '#E2E8F0', marginBottom: '24px' }} />

              {/* 5 Clean Bullet Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {[
                  "Complete FBR, PRA, SRB & KPRA Tax Compliance and Defense Advisory",
                  "Turnkey Corporate Structuring (SECP, US LLC, UK LTD & UAE Freezone)",
                  "Dedicated In-House Accounting Secondment & Specialist Staffing",
                  "Statutory Audit, Forensic Accounting & Strict IFRS Financial Reporting",
                  "Cloud ERP Implementations Across QuickBooks, Xero & Enterprise Systems"
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(212, 160, 23, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <CheckCircle2 size={13} color="#D4A017" strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '0.94rem', fontWeight: 600, color: '#1E293B' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  onClick={onOpenSchedule}
                  className="btn-primary"
                  style={{
                    padding: '13px 30px',
                    fontSize: '0.92rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Calendar size={16} />
                  <span>Schedule Consultation</span>
                </button>

                <button
                  onClick={() => navigate('/services')}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#0F172A',
                    border: '1.5px solid #CBD5E1',
                    padding: '13px 26px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.92rem',
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

      {/* 5. CORE VALUE PILLARS */}
      <section style={{ padding: '85px 0 90px 0', backgroundColor: '#F8FAFC' }}>
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
          .about-narrative-grid, .values-grid, .about-pillars-grid, .firm-overview-grid, .ceo-leadership-grid {
            grid-template-columns: 1fr !important;
            gap: 35px !important;
          }
        }
        @media (max-width: 580px) {
          .ceo-skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
