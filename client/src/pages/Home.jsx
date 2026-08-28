import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import ProcessSection from '../components/ProcessSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import AffiliationsSection from '../components/AffiliationsSection';
import CounterSection from '../components/CounterSection';
import JavedZafarSection from '../components/JavedZafarSection';
import { USFlag, UAEFlag, UKFlag, PKFlag, KSAFlag, GermanyFlag } from '../components/CountryFlags';
import { 
  ShieldCheck, Award, CheckCircle2, Phone, Calendar, 
  ArrowRight, Calculator 
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function Home({ onOpenSchedule }) {
  const [activeCountry, setActiveCountry] = useState('pk');
  const [services, setServices] = useState(servicesData['pk'] || []);
  const navigate = useNavigate();

  const handleCountryChange = (code) => {
    setActiveCountry(code);
    setServices(servicesData[code] || []);
  };

  const countryTabs = [
    { code: 'pk', label: 'PK Services', name: 'Pakistan', Flag: PKFlag },
    { code: 'us', label: 'US Services', name: 'USA', Flag: USFlag },
    { code: 'uk', label: 'UK Services', name: 'UK', Flag: UKFlag },
    { code: 'uae', label: 'UAE Services', name: 'UAE', Flag: UAEFlag },
    { code: 'uks', label: 'UKS Services', name: 'Saudi Arabia', Flag: KSAFlag },
    { code: 'de', label: 'Germany Services', name: 'Germany', Flag: GermanyFlag },
  ];

  const currentTab = countryTabs.find(t => t.code === activeCountry) || countryTabs[0];

  const displayedServices = services.slice(0, 3);

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111827' }}>
      {/* 1. HERO SECTION */}
      <section style={{
        position: 'relative',
        padding: '70px 0 80px 0',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden'
      }}>
        {/* Subtle Wave Vector Graphic in Left Background */}
        <svg 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '50%',
            height: '70%',
            opacity: 0.18,
            pointerEvents: 'none',
            zIndex: 0
          }}
          viewBox="0 0 600 400" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-100 350 C100 250, 300 450, 500 280 C550 240, 580 200, 600 150" stroke="#D4A017" strokeWidth="1.5" />
          <path d="M-100 370 C120 270, 320 470, 520 300 C570 260, 590 220, 620 170" stroke="#D4A017" strokeWidth="1.2" />
          <path d="M-100 390 C140 290, 340 490, 540 320 C590 280, 610 240, 640 190" stroke="#D4A017" strokeWidth="1.2" />
          <path d="M-100 330 C80 230, 280 430, 480 260 C530 220, 560 180, 580 130" stroke="#D4A017" strokeWidth="1.5" />
          <path d="M-100 310 C60 210, 260 410, 460 240 C510 200, 540 160, 560 110" stroke="#D4A017" strokeWidth="1" />
        </svg>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center'
          }} className="hero-grid">
            
            {/* Left Hero Content */}
            <div style={{ paddingRight: '10px' }}>
              <div style={{
                fontSize: '1.12rem',
                color: '#D4A017',
                fontStyle: 'italic',
                fontWeight: 700,
                marginBottom: '16px',
                fontFamily: 'Georgia, serif'
              }}>
                Welcome to Kinzei Consultants
              </div>

              <h1 style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)',
                lineHeight: 1.16,
                marginBottom: '20px',
                fontWeight: 900,
                color: '#111827',
                fontFamily: 'var(--font-heading)'
              }}>
                Trusted Chartered Accountants for Your Business Success
              </h1>

              <p style={{
                fontSize: '1.08rem',
                color: '#374151',
                lineHeight: 1.7,
                marginBottom: '36px',
                maxWidth: '580px',
                fontWeight: 500
              }}>
                We provide reliable audit, accounting, taxation, and advisory services to help businesses stay compliant, grow confidently, and make informed financial decisions.
              </p>

              <div>
                <button 
                  onClick={onOpenSchedule} 
                  style={{
                    background: 'linear-gradient(135deg, #E5B338 0%, #D4A017 50%, #B8860B 100%)',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '14px 34px',
                    fontSize: '0.92rem',
                    fontWeight: 800,
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 6px 20px rgba(212, 160, 23, 0.35)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(212, 160, 23, 0.45)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 160, 23, 0.35)';
                  }}
                >
                  <span>GET STARTED</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 900 }}>&gt;</span>
                </button>
              </div>

            </div>

            {/* Right Hero Graphic */}
            <div style={{ position: 'relative', textAlign: 'center', minHeight: '480px' }}>
              
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '540px',
                margin: '0 auto'
              }}>

                <svg 
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: 1
                  }}
                  viewBox="0 0 540 480" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M 50 420 A 220 220 0 1 1 490 420" 
                    stroke="#CBD5E1" 
                    strokeWidth="1.8" 
                    strokeDasharray="none"
                  />
                  <circle cx="90" cy="170" r="5" fill="#D4A017" />
                  <circle cx="270" cy="50" r="5" fill="#D4A017" />
                  <circle cx="450" cy="170" r="5" fill="#D4A017" />
                  <circle cx="65" cy="370" r="5" fill="#D4A017" />
                  <circle cx="475" cy="370" r="5" fill="#D4A017" />
                </svg>

                {/* 4 Orbit Node Labels */}
                <div style={{
                  position: 'absolute',
                  top: '8%',
                  left: '0%',
                  zIndex: 10,
                  width: '160px',
                  textAlign: 'right',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  color: '#111827',
                  lineHeight: 1.25,
                  fontFamily: 'var(--font-heading)'
                }}>
                  Accounting &amp;<br />Financial Reporting
                </div>

                <div style={{
                  position: 'absolute',
                  top: '8%',
                  right: '0%',
                  zIndex: 10,
                  width: '150px',
                  textAlign: 'left',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  color: '#111827',
                  lineHeight: 1.25,
                  fontFamily: 'var(--font-heading)'
                }}>
                  Taxation<br />Services
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '16%',
                  left: '-2%',
                  zIndex: 10,
                  width: '160px',
                  textAlign: 'right',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  color: '#111827',
                  lineHeight: 1.25,
                  fontFamily: 'var(--font-heading)'
                }}>
                  Consultancy &amp;<br />Outsourcing
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '14%',
                  right: '-2%',
                  zIndex: 10,
                  width: '170px',
                  textAlign: 'left',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  color: '#111827',
                  lineHeight: 1.25,
                  fontFamily: 'var(--font-heading)'
                }}>
                  Information<br />Technology<br />Services
                </div>

                {/* Senior Partner Cutout Image Container */}
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  margin: '40px auto 0 auto',
                  maxWidth: '330px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.08)'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=700&auto=format&fit=crop" 
                    alt="Senior Partner & CEO - Kinzei Consultants" 
                    style={{
                      width: '100%',
                      height: '420px',
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                      display: 'block',
                      filter: 'contrast(1.02)'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=700&auto=format&fit=crop';
                    }}
                  />

                  {/* Gradient Shadow Overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '30px 16px 14px 16px',
                    background: 'linear-gradient(to top, rgba(17, 24, 39, 0.92) 0%, rgba(17, 24, 39, 0.4) 65%, transparent 100%)',
                    color: '#FFFFFF',
                    textAlign: 'center'
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      letterSpacing: '0.3px',
                      margin: 0,
                      textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      Senior Partner &amp; CEO
                    </h3>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. 3 SLEEK FEATURE BOXES BAND */}
      <section style={{
        backgroundColor: '#111827',
        color: '#FFFFFF',
        position: 'relative',
        zIndex: 5,
        borderTop: '3px solid #D4A017'
      }}>
        <div className="container" style={{ padding: '42px 24px' }}>
          <div 
            className="hero-boxes-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '40px',
              alignItems: 'flex-start'
            }}
          >
            {/* Box 1 */}
            <div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 800,
                color: '#D4A017',
                marginBottom: '10px',
                fontFamily: 'var(--font-heading)'
              }}>
                Audit &amp; Assurance
              </h3>
              <p style={{
                fontSize: '0.94rem',
                color: '#E5E7EB',
                lineHeight: '1.6',
                margin: 0,
                fontFamily: 'var(--font-body)'
              }}>
                Independent audit services to ensure transparency, compliance, and confidence in your financial reporting.
              </p>
            </div>

            {/* Box 2 */}
            <div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 800,
                color: '#D4A017',
                marginBottom: '10px',
                fontFamily: 'var(--font-heading)'
              }}>
                Accounting &amp; Reporting
              </h3>
              <p style={{
                fontSize: '0.94rem',
                color: '#E5E7EB',
                lineHeight: '1.6',
                margin: 0,
                fontFamily: 'var(--font-body)'
              }}>
                Accurate accounting and financial reporting services to support informed decision-making and business growth.
              </p>
            </div>

            {/* Box 3 */}
            <div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 800,
                color: '#D4A017',
                marginBottom: '10px',
                fontFamily: 'var(--font-heading)'
              }}>
                Tax &amp; Advisory
              </h3>
              <p style={{
                fontSize: '0.94rem',
                color: '#E5E7EB',
                lineHeight: '1.6',
                margin: 0,
                fontFamily: 'var(--font-body)'
              }}>
                Comprehensive tax and advisory services to help manage compliance, planning, and regulatory matters effectively.
              </p>
            </div>

          </div>
        </div>

        <div style={{ width: '100%', height: '4px', backgroundColor: '#D4A017' }} />

        <style>{`
          @media (max-width: 992px) {
            .hero-boxes-grid {
              grid-template-columns: 1fr !important;
              gap: 25px !important;
            }
          }
        `}</style>
      </section>

      {/* 3. JAVED ZAFAR & CO. CHARTERED ACCOUNTANTS PRACTICE SECTION */}
      <JavedZafarSection onOpenSchedule={onOpenSchedule} />

      {/* 4. WHY CHOOSE US SECTION */}
      <WhyChooseUsSection onOpenSchedule={onOpenSchedule} />

      {/* 5. SERVICES SECTION (BROWSE SERVICES BY COUNTRY) */}
      <section style={{ padding: '80px 0 90px 0', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto' }}>
            <span className="badge-gold">Global Capabilities</span>
            <h2 style={{ fontSize: '2.4rem', color: '#111827', marginTop: '10px', marginBottom: '14px', fontWeight: 800 }}>
              Browse Services by <span style={{ color: '#D4A017' }}>Service Country</span>
            </h2>
            <p style={{ color: '#374151', fontSize: '1.02rem', fontWeight: 500 }}>
              Select any of our 6 core operating regions below to view specialized financial, tax, and registration services.
            </p>
          </div>

          {/* 6 Country Filter Buttons with Interactive Hover */}
          <div 
            className="home-country-tabs"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}
          >
            {countryTabs.map((tab) => {
              const isActive = activeCountry === tab.code;
              const FlagIcon = tab.Flag;
              return (
                <button
                  key={tab.code}
                  onClick={() => handleCountryChange(tab.code)}
                  className="home-country-btn"
                  style={{
                    backgroundColor: isActive ? '#D4A017' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#111827',
                    border: isActive ? '1.5px solid #D4A017' : '1.5px solid #D1D5DB',
                    padding: '10px 22px',
                    borderRadius: '30px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: isActive ? '0 4px 14px rgba(212, 160, 23, 0.35)' : '0 2px 4px rgba(0,0,0,0.03)',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = '#D4A017';
                      e.currentTarget.style.color = '#D4A017';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = '#D1D5DB';
                      e.currentTarget.style.color = '#111827';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  <FlagIcon size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Services Grid (INSTANT RENDER) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {displayedServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '45px' }}>
            <button
              onClick={() => navigate(`/services?country=${activeCountry}`)}
              className="btn-primary"
              style={{ padding: '14px 34px' }}
            >
              View All {currentTab.name} Services ({services.length})
            </button>
          </div>

        </div>
      </section>

      {/* 6. AFFILIATIONS SECTION */}
      <AffiliationsSection />

      {/* 7. OUR PROCESS SECTION */}
      <ProcessSection onOpenSchedule={onOpenSchedule} />

      {/* 8. COUNTER / STATS SECTION */}
      <CounterSection />

      {/* 9. CALL TO ACTION BANNER */}
      <section style={{
        backgroundColor: '#111827',
        color: '#FFFFFF',
        padding: '75px 0',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px', color: '#FFFFFF' }}>
              Ready to Streamline Your <span style={{ color: '#D4A017' }}>Tax &amp; Financial Operations?</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#E5E7EB', marginBottom: '32px', lineHeight: 1.6, fontWeight: 500 }}>
              Get in touch with our senior partners today for a confidential consultation tailored to your business needs in Pakistan, USA, UK, UAE, Saudi Arabia, or Germany.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenSchedule}
                className="btn-primary"
                style={{ padding: '14px 34px', fontSize: '0.92rem', borderRadius: '8px' }}
              >
                Schedule Free Consultation
              </button>

              <button 
                onClick={() => navigate('/contact')}
                style={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  border: '1.8px solid #FFFFFF',
                  padding: '13px 32px',
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#111827';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Contact Our Office
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
