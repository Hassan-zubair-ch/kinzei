import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, Phone, Mail, MapPin, CheckCircle2, 
  Sparkles, Calendar, ArrowRight, ShieldCheck, ChevronDown, 
  ChevronUp, Scale, Lock, Award, Briefcase, MessageSquare
} from 'lucide-react';
import AffiliationsSection from '../components/AffiliationsSection';
import CounterSection from '../components/CounterSection';

export default function AboutUs({ onOpenSchedule }) {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const phoneNumber = "923034063970";
  const defaultMessage = encodeURIComponent("Hello Kinzei Consultants, I would like to inquire about your corporate tax, audit, and advisory services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  const whyChoosePoints = [
    {
      title: "Global Reach",
      desc: "With specialized desks and operational networks in Pakistan, the USA, the UK, the UAE, Saudi Arabia, and Germany, we offer seamless cross-border corporate and tax advisory to clients worldwide."
    },
    {
      title: "Expert Multi-Disciplinary Team",
      desc: "In association with Javed Zafar & Co. Chartered Accountants, our professionals possess extensive experience in accounting, auditing, corporate taxation, and business advisory (ex-Deloitte & leading practices)."
    },
    {
      title: "Personalized & Scalable Solutions",
      desc: "We tailor our accounting frameworks, tax planning, corporate structuring, and retainership services to meet the precise operational scale and industry needs of each client."
    },
    {
      title: "Cutting-Edge Expertise & Zero-Penalty Compliance",
      desc: "Our continuous engagement with regulatory bodies (SECP, FBR, PRA, SRB, EOBI, IRS, HMRC) ensures clients benefit from current statutory standards and proactive risk protection."
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
      
      {/* 1. TOP HEADER & ABOUT INTRO SECTION */}
      <section style={{
        padding: '80px 0 50px 0',
        backgroundColor: '#FFFFFF',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '920px' }}>
          
          <h3 style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            fontWeight: 900,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: '#111827',
            marginBottom: '10px',
            fontFamily: 'var(--font-heading)'
          }}>
            WELCOME TO KINZEI CONSULTANTS
          </h3>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
            fontWeight: 900,
            color: '#0F172A',
            marginBottom: '16px',
            fontFamily: 'var(--font-heading)'
          }}>
            About Us
          </h1>

          {/* Gradient Accent Bar */}
          <div style={{
            width: '140px',
            height: '4.5px',
            borderRadius: '4px',
            background: 'linear-gradient(90deg, #D4A017 0%, #10B981 100%)',
            margin: '0 auto 30px auto'
          }} />

          <p style={{
            fontSize: '1.1rem',
            color: '#334155',
            lineHeight: 1.8,
            fontWeight: 500,
            textAlign: 'center'
          }}>
            <strong>Kinzei Consultants (Private) Limited</strong> is a premier corporate, tax, and chartered accountancy advisory firm with a global presence, operating in key financial hubs across Pakistan, the USA, the UK, the UAE, Saudi Arabia, and Germany. Our multidisciplinary expertise spans income tax, sales tax, corporate licensing, statutory audit &amp; assurance, and financial advisory services, providing comprehensive solutions to individuals, enterprises, and multinational corporations worldwide.
          </p>

        </div>
      </section>

      {/* 2. FIRM OVERVIEW SECTION */}
      <section style={{ padding: '40px 0 70px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1060px' }}>
          
          <div style={{
            borderBottom: '1.5px solid #E2E8F0',
            paddingBottom: '16px',
            marginBottom: '35px'
          }}>
            <h2 style={{
              fontSize: '1.85rem',
              fontWeight: 800,
              color: '#0F172A',
              margin: 0,
              fontFamily: 'var(--font-heading)'
            }}>
              Firm Overview
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: '45px',
            alignItems: 'stretch'
          }} className="firm-overview-grid">
            
            {/* Left Column: Office & Contact Credentials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
              
              {/* Head Office */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: '#FFFBEB',
                  border: '1.5px solid #D4A017',
                  color: '#B8860B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Building2 size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                    Principal Head Office
                  </h4>
                  <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                    First Floor, Plot # 14, Main Road, Block 1 College Rd, Sector C2 Block 1 Twp Sector C 2 Township, Lahore, 54770, Pakistan
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: '#FFFBEB',
                  border: '1.5px solid #D4A017',
                  color: '#B8860B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                    Direct Inquiries &amp; Support
                  </h4>
                  <div style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, fontWeight: 600 }}>
                    <div>Phone:{' '}
                      <a href="tel:03034063970" style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 800 }}>
                        03034063970
                      </a>
                    </div>
                    <div>WhatsApp:{' '}
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#16A34A', textDecoration: 'none', fontWeight: 800 }}>
                        +92 303 4063970
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: '#FFFBEB',
                  border: '1.5px solid #D4A017',
                  color: '#B8860B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                    Official Corporate Email
                  </h4>
                  <p style={{ fontSize: '0.94rem', margin: 0 }}>
                    <a href="mailto:info@kinzeiconsultants.com" style={{ color: '#0F172A', fontWeight: 800, textDecoration: 'none' }}>
                      info@kinzeiconsultants.com
                    </a>
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Highlight Card */}
            <div style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '16px',
              padding: '36px 32px',
              border: '1.5px solid #E2E8F0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0 4px 18px rgba(0, 0, 0, 0.02)'
            }}>
              <div style={{
                fontSize: '1rem',
                fontWeight: 800,
                color: '#64748B',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '8px'
              }}>
                Established Practice
              </div>

              <div style={{
                fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)',
                fontWeight: 900,
                color: '#0F172A',
                lineHeight: 1.1,
                marginBottom: '16px',
                fontFamily: 'var(--font-heading)'
              }}>
                15+ <span style={{ color: '#D4A017', fontSize: '2rem' }}>Years Experience</span>
              </div>

              <p style={{
                fontSize: '0.98rem',
                color: '#475569',
                lineHeight: 1.7,
                margin: 0,
                fontWeight: 500
              }}>
                Founded with a steadfast vision to provide comprehensive corporate, financial, chartered accounting, and statutory tax solutions to businesses and entrepreneurs across Pakistan and international jurisdictions.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. WHY CHOOSE KINZEI? */}
      <section style={{ padding: '70px 0', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.7rem)',
              fontWeight: 900,
              color: '#0F172A',
              marginBottom: '14px',
              fontFamily: 'var(--font-heading)'
            }}>
              Why Choose Kinzei?
            </h2>

            {/* Gradient Accent Bar */}
            <div style={{
              width: '140px',
              height: '4px',
              borderRadius: '4px',
              background: 'linear-gradient(90deg, #D4A017 0%, #10B981 100%)',
              margin: '0 auto 24px auto'
            }} />

            <p style={{
              fontSize: '1.05rem',
              color: '#475569',
              lineHeight: 1.7,
              margin: '0 auto',
              maxWidth: '820px',
              fontWeight: 500
            }}>
              At Kinzei Consultants, we pride ourselves on delivering exceptional consultancy services that cater to the unique needs of our clients. Here are a few reasons why you should choose us:
            </p>
          </div>

          {/* List of 4 Why Choose Us Points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginTop: '35px' }}>
            {whyChoosePoints.map((pt, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  backgroundColor: '#FFFFFF',
                  padding: '24px 28px',
                  borderRadius: '14px',
                  border: '1.5px solid #E2E8F0',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                  transition: 'all 0.25s ease'
                }}
              >
                <CheckCircle2 size={24} color="#0F172A" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                    {pt.title}:
                  </h4>
                  <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PARTNER WITH KINZEI */}
      <section style={{ padding: '75px 0 85px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.7rem)',
            fontWeight: 900,
            color: '#0F172A',
            marginBottom: '14px',
            fontFamily: 'var(--font-heading)'
          }}>
            Partner with Kinzei
          </h2>

          {/* Gradient Accent Bar */}
          <div style={{
            width: '140px',
            height: '4px',
            borderRadius: '4px',
            background: 'linear-gradient(90deg, #D4A017 0%, #10B981 100%)',
            margin: '0 auto 26px auto'
          }} />

          <p style={{
            fontSize: '1.08rem',
            color: '#334155',
            lineHeight: 1.8,
            marginBottom: '36px',
            fontWeight: 500
          }}>
            Whether you're an individual or a business, Kinzei Consultants is your trusted partner for navigating the complexities of corporate and tax consultancy. Our commitment to excellence, integrity, and client satisfaction sets us apart as a leader in our field. Contact us today to discover how we can support your financial goals and drive your business forward.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenSchedule}
              className="btn-primary"
              style={{ padding: '14px 34px', fontSize: '0.96rem', borderRadius: '8px' }}
            >
              <Calendar size={18} />
              <span>Schedule Free Consultation</span>
            </button>

            <a
              href="tel:03034063970"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#0F172A',
                border: '1.8px solid #CBD5E1',
                padding: '13px 28px',
                borderRadius: '8px',
                fontSize: '0.96rem',
                fontWeight: 800,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0F172A';
                e.currentTarget.style.backgroundColor = '#F8FAFC';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#CBD5E1';
                e.currentTarget.style.backgroundColor = '#FFFFFF';
              }}
            >
              <Phone size={16} />
              <span>Call 03034063970</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                padding: '14px 28px',
                borderRadius: '8px',
                fontSize: '0.96rem',
                fontWeight: 800,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <MessageSquare size={16} />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>
      </section>

      {/* 5. AFFILIATIONS & CERTIFICATIONS */}
      <AffiliationsSection />

      {/* 6. COUNTER & STATS */}
      <CounterSection />

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section style={{ padding: '80px 0 90px 0', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span className="badge-gold">Common Queries</span>
            <h2 style={{ fontSize: '2.3rem', color: '#0F172A', marginTop: '10px', fontWeight: 800 }}>
              Frequently Asked <span style={{ color: '#D4A017' }}>Questions</span>
            </h2>
            <p style={{ color: '#64748B', fontSize: '1.02rem', marginTop: '8px', fontWeight: 500 }}>
              Direct answers to questions regarding our corporate advisory and statutory compliance engagements.
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
                    border: isOpen ? '1.5px solid #D4A017' : '1.5px solid #E2E8F0',
                    overflow: 'hidden',
                    boxShadow: isOpen ? '0 8px 25px rgba(212, 160, 23, 0.12)' : '0 2px 8px rgba(0,0,0,0.02)',
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
                      color: '#0F172A',
                      fontSize: '1.02rem',
                      fontWeight: 800,
                      textAlign: 'left',
                      cursor: 'pointer',
                      border: 'none'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} color="#D4A017" /> : <ChevronDown size={20} color="#64748B" />}
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 22px 24px', color: '#475569', fontSize: '0.96rem', lineHeight: 1.7, fontWeight: 500, borderTop: '1px solid #F1F5F9', paddingTop: '16px' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .firm-overview-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>

    </div>
  );
}
