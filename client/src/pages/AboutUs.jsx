import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, Target, Eye, Award, CheckCircle2, Building2, Users, 
  Mail, Phone, MapPin, ChevronDown, ChevronUp, Calendar, ArrowRight 
} from 'lucide-react';

export default function AboutUs({ onOpenSchedule }) {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    {
      q: "What regulatory registrations does Kinzei Consultants handle?",
      a: "We manage complete company incorporation with SECP (Private Limited, SMC-Pvt, LLP), FBR Income Tax & Sales Tax (NTN / STRN), Provincial Revenue Authorities (PRA, SRB, KPRA), Chamber of Commerce membership, and EOBI/PESSI registration."
    },
    {
      q: "How do you handle international tax and company setups?",
      a: "Our international advisory desk manages turnkey entity formation, obtaining IRS EIN numbers, State Sales Tax permits, UK Companies House incorporation, HMRC Corporation Tax & VAT registration, ZATCA filings in Saudi Arabia, and UAE Corporate Tax compliance."
    },
    {
      q: "What services are included in the monthly retainer package?",
      a: "Our monthly retainership covers routine management accounting, sales tax & withholding tax returns, SECP annual compliance filings, payroll processing, and direct access to senior consultants for ongoing advisory."
    },
    {
      q: "Which industries do you specialize in?",
      a: "We serve clients across Textiles, Real Estate, Pharmaceuticals, Electronics, Education, Media, Agriculture, Trade Associations, and Non-Profit Organizations (NPOs)."
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111827' }}>
      
      {/* 1. HERO BANNER WITH FINANCIAL DESK BACKGROUND */}
      <section style={{
        position: 'relative',
        padding: '100px 0 90px 0',
        backgroundImage: 'linear-gradient(135deg, rgba(17, 24, 39, 0.88) 0%, rgba(140, 107, 47, 0.82) 100%), url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#FFFFFF',
        textAlign: 'center',
        boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', 
            color: '#FFFFFF', 
            fontWeight: 800, 
            letterSpacing: '-0.5px',
            marginBottom: '12px',
            fontFamily: 'var(--font-heading)'
          }}>
            About Us
          </h1>
          <div style={{
            width: '60px',
            height: '4px',
            backgroundColor: '#C49A2C',
            margin: '0 auto 16px auto',
            borderRadius: '2px'
          }} />
          <p style={{ color: '#F3F4F6', fontSize: '1.15rem', maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
            Kinzei Consultants (Private) Limited
          </p>
        </div>
      </section>

      {/* 2. WHO WE ARE SECTION (MATCHING TARGET SCREENSHOT) */}
      <section style={{ padding: '90px 0 80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          <div style={{
            fontSize: '1.08rem',
            color: '#C49A2C',
            fontStyle: 'italic',
            fontWeight: 600,
            marginBottom: '10px',
            fontFamily: 'Georgia, serif'
          }}>
            Who we are
          </div>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 3.5vw, 2.8rem)',
            lineHeight: 1.2,
            marginBottom: '28px',
            fontWeight: 800,
            color: '#111827',
            fontFamily: 'var(--font-heading)'
          }}>
            About Us
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.04rem', color: '#4B5563', lineHeight: 1.75 }}>
            <p>
              <strong>Kinzei Consultants (Private) Limited</strong> is a premier professional services firm providing audit, accounting, taxation, and corporate advisory services to businesses and individuals. The firm is led by senior professionals with over <strong>15+ years of professional experience</strong> across public and private sector organizations.
            </p>

            <p>
              We are committed to delivering reliable, practical, and high-quality professional services that help our clients meet regulatory requirements, strengthen financial controls, and make informed business decisions. Our approach is based on integrity, technical expertise, and a clear understanding of our clients' business needs.
            </p>

            <p>
              The firm offers a wide range of services including <strong>Audit &amp; Assurance, Accounting &amp; Financial Reporting, Taxation &amp; Litigation Support, Corporate &amp; Secretarial Advisory, and Information Technology support</strong>. We work closely with our clients to provide tailored solutions that are aligned with their operational and strategic objectives.
            </p>

            <p>
              At Kinzei Consultants, we believe in building long-term relationships with our clients. We focus on clear communication, timely delivery, and maintaining the highest standards of professional ethics and confidentiality. Our team combines strong technical knowledge with practical industry experience to deliver value-driven solutions.
            </p>

            <p>
              Whether you are a growing business, an established organization, or an individual seeking professional financial advice, we strive to be a trusted partner supporting your compliance, growth, and long-term success.
            </p>
          </div>

          <div style={{ marginTop: '36px' }}>
            <button
              onClick={() => navigate('/contact')}
              style={{
                backgroundColor: '#C49A2C',
                color: '#FFFFFF',
                border: 'none',
                padding: '14px 34px',
                fontSize: '0.88rem',
                fontWeight: 800,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                borderRadius: '2px',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(196, 154, 44, 0.3)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B28923';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#C49A2C';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              LET'S CONNECT
            </button>
          </div>

        </div>
      </section>

      {/* 3. COUNTER / STATS BAND (MATCHING TARGET SCREENSHOT - CHARCOAL BLACK & GOLD) */}
      <section style={{
        backgroundColor: '#111827',
        color: '#FFFFFF',
        padding: '55px 0',
        borderTop: '3px solid #C49A2C',
        borderBottom: '3px solid #8C6B2F'
      }}>
        <div className="container">
          <div 
            className="about-counter-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '30px',
              textAlign: 'center'
            }}
          >
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#FFFFFF', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                15+
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#C49A2C', marginTop: '8px' }}>
                Years Experience
              </div>
            </div>

            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#FFFFFF', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                300+
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#C49A2C', marginTop: '8px' }}>
                Satisfied Clients
              </div>
            </div>

            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#FFFFFF', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                20+
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#C49A2C', marginTop: '8px' }}>
                Industries Served
              </div>
            </div>

            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#FFFFFF', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                98%
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#C49A2C', marginTop: '8px' }}>
                Client Satisfaction
              </div>
            </div>

          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .about-counter-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 30px !important; }
          }
        `}</style>
      </section>

      {/* 4. MANAGING PARTNER & FOUNDER SPOTLIGHT (MATCHING TARGET SCREENSHOT) */}
      <section style={{ padding: '90px 0 85px 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container">
          <div 
            className="partner-spotlight-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '0.9fr 1.1fr',
              gap: '60px',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Portrait Image */}
            <div>
              <div style={{
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
                border: '1px solid #E5E7EB',
                backgroundColor: '#F8F9FA'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                  alt="Managing Partner & Founder - Kinzei Consultants" 
                  style={{
                    width: '100%',
                    height: '500px',
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
            </div>

            {/* Right Column: Bio & Qualifications */}
            <div>
              <div style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#4B5563',
                marginBottom: '6px'
              }}>
                Managing Partner &amp; Founder
              </div>

              <h2 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                fontWeight: 800,
                color: '#111827',
                marginBottom: '4px',
                fontFamily: 'var(--font-heading)'
              }}>
                Kinzei Leadership Desk
              </h2>

              <div style={{
                fontSize: '0.96rem',
                fontWeight: 700,
                color: '#C49A2C',
                marginBottom: '22px'
              }}>
                Chartered Accountants &amp; Senior Advisory Partners
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.96rem', color: '#4B5563', lineHeight: 1.7 }}>
                <p>
                  Our Founder and Managing Leadership Team bring extensive professional experience in audit, accounting, taxation, and financial reporting. Having served a wide range of public and private sector organizations, our partners bring deep expertise in financial management, compliance, governance, and internal controls.
                </p>

                <p>
                  Our professional leadership includes senior experience from top tier chartered accountancy practices and international firms. We specialize in financial reporting under <strong>IFRS</strong>, internal and external audits, tax compliance, financial modeling, budgeting, and strategic financial advisory.
                </p>

                <p>
                  Known for a practical, disciplined, and ethical approach, our partners work closely with clients to understand their business challenges and deliver clear, reliable, and value-driven solutions. Our focus remains on strengthening financial systems, ensuring regulatory compliance, and supporting sustainable business growth.
                </p>
              </div>

              {/* Direct Contact Bar */}
              <div style={{
                marginTop: '30px',
                paddingTop: '20px',
                borderTop: '1px solid #E5E7EB',
                display: 'flex',
                alignItems: 'center',
                gap: '35px',
                flexWrap: 'wrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={20} color="#C49A2C" />
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#6B7280', fontWeight: 600 }}>Email Address</div>
                    <a href="mailto:kinzeiconsultants@gmail.com" style={{ color: '#111827', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                      kinzeiconsultants@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={20} color="#C49A2C" />
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#6B7280', fontWeight: 600 }}>Phone No.</div>
                    <a href="tel:03034063970" style={{ color: '#111827', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                      03034063970
                    </a>
                  </div>
                </div>
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

      {/* 5. OUR VALUES / VISION & MISSION BLOCK (MATCHING TARGET SCREENSHOT - DEEP CHARCOAL & GOLD) */}
      <section style={{
        backgroundColor: '#111827',
        color: '#FFFFFF',
        padding: '90px 0 95px 0',
        position: 'relative'
      }}>
        <div className="container">
          <div 
            className="values-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '60px',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Our Values Description */}
            <div>
              <div style={{
                fontSize: '1.08rem',
                color: '#C49A2C',
                fontStyle: 'italic',
                fontWeight: 600,
                marginBottom: '10px',
                fontFamily: 'Georgia, serif'
              }}>
                Our Value
              </div>

              <h2 style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 2.8rem)',
                lineHeight: 1.2,
                marginBottom: '24px',
                fontWeight: 800,
                color: '#FFFFFF',
                fontFamily: 'var(--font-heading)'
              }}>
                Building Trust Through Professional Excellence
              </h2>

              <p style={{
                fontSize: '1rem',
                color: '#E5E7EB',
                lineHeight: 1.7,
                marginBottom: '20px'
              }}>
                We create value for our clients by delivering reliable audit, accounting, taxation, and advisory services. Our approach is based on integrity, technical expertise, and a deep understanding of our clients' business needs.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#E5E7EB',
                lineHeight: 1.7
              }}>
                We focus on building long-term relationships by providing clear advice, timely support, and solutions that add real value to our clients' businesses.
              </p>
            </div>

            {/* Right Column: Vision & Mission Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Vision Box */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                padding: '32px',
                border: '1px solid rgba(196, 154, 44, 0.3)',
                display: 'grid',
                gridTemplateColumns: '50px 1fr',
                gap: '20px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#C49A2C',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontWeight: 900
                }}>
                  <Eye size={26} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#C49A2C', marginBottom: '10px' }}>
                    Our Vision
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#E5E7EB', lineHeight: 1.6, margin: 0 }}>
                    To be a trusted professional services firm known for quality, integrity, and practical solutions that help businesses grow with confidence and compliance.
                  </p>
                </div>
              </div>

              {/* Mission Box */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                padding: '32px',
                border: '1px solid rgba(196, 154, 44, 0.3)',
                display: 'grid',
                gridTemplateColumns: '50px 1fr',
                gap: '20px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#C49A2C',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontWeight: 900
                }}>
                  <Target size={26} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#C49A2C', marginBottom: '10px' }}>
                    Our Mission
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#E5E7EB', lineHeight: 1.6, margin: 0 }}>
                    To provide high-quality audit, accounting, taxation, and advisory services through experienced professionals, while maintaining the highest standards of ethics, confidentiality, and client care.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        <style>{`
          @media (max-width: 992px) {
            .values-grid { grid-template-columns: 1fr !important; gap: 45px !important; }
          }
        `}</style>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span className="badge-gold">Common Queries</span>
            <h2 style={{ fontSize: '2.4rem', color: '#111827', marginTop: '10px', fontWeight: 800 }}>
              Frequently Asked <span style={{ color: '#C49A2C' }}>Questions</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#F8F9FA',
                    borderRadius: '10px',
                    border: '1.5px solid #E5E7EB',
                    overflow: 'hidden'
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
                      fontWeight: 700,
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} color="#C49A2C" /> : <ChevronDown size={20} color="#6B7280" />}
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 22px 24px', color: '#4B5563', fontSize: '0.96rem', lineHeight: 1.65 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
