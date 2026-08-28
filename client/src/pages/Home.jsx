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

            {/* Right Hero Graphic with Large Cutout Partner and Orbit Arc */}
            <div className="hero-graphic-wrapper">
              <div className="hero-orbit-container">

                {/* Circular Orbit Arc with 4 Exact Neutral Grey Dots matching reference */}
                <svg 
                  className="hero-orbit-svg"
                  viewBox="0 0 600 600" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle 
                    cx="300" 
                    cy="300" 
                    r="220" 
                    stroke="#CBD5E1" 
                    strokeWidth="2" 
                  />
                  {/* Dot 1: Top-Right (near Taxation Services) */}
                  <circle cx="456" cy="144" r="8" fill="#CBD5E1" stroke="#FFFFFF" strokeWidth="2.5" />
                  <circle cx="456" cy="144" r="4" fill="#94A3B8" />

                  {/* Dot 2: Mid-Left (between Accounting and Consultancy) */}
                  <circle cx="120" cy="174" r="8" fill="#CBD5E1" stroke="#FFFFFF" strokeWidth="2.5" />
                  <circle cx="120" cy="174" r="4" fill="#94A3B8" />

                  {/* Dot 3: Bottom-Left (near Consultancy & Outsourcing) */}
                  <circle cx="120" cy="426" r="8" fill="#CBD5E1" stroke="#FFFFFF" strokeWidth="2.5" />
                  <circle cx="120" cy="426" r="4" fill="#94A3B8" />

                  {/* Dot 4: Bottom-Right (near Information Technology Services) */}
                  <circle cx="491" cy="410" r="8" fill="#CBD5E1" stroke="#FFFFFF" strokeWidth="2.5" />
                  <circle cx="491" cy="410" r="4" fill="#94A3B8" />
                </svg>

                {/* 4 Orbit Node Labels (All Left-Aligned like reference) */}
                <div className="hero-orbit-node hero-orbit-node-1">
                  Accounting &amp;<br />Financial Reporting
                </div>

                <div className="hero-orbit-node hero-orbit-node-2">
                  Taxation<br />Services
                </div>

                <div className="hero-orbit-node hero-orbit-node-3">
                  Consultancy &amp;<br />Outsourcing
                </div>

                <div className="hero-orbit-node hero-orbit-node-4">
                  Information<br />Technology<br />Services
                </div>

                {/* Center Cutout Partner Image - Large & Dominant */}
                <div className="hero-partner-image-box">
                  <img 
                    src="/hero-partner.png" 
                    alt="Kinzei Leadership & Managing Advisory Partner" 
                    className="hero-partner-cutout"
                    loading="eager"
                    fetchPriority="high"
                  />
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

      <style>{`
        /* Hero Graphic Layout - Desktop & Mobile */
        .hero-graphic-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-orbit-container {
          position: relative;
          width: 100%;
          max-width: 620px;
          height: 580px;
          margin: 0 auto;
        }

        .hero-orbit-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .hero-partner-image-box {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          pointer-events: none;
          width: 100%;
        }

        .hero-partner-cutout {
          width: 480px;
          max-height: 560px;
          object-fit: contain;
          display: block;
        }

        .hero-orbit-node {
          position: absolute;
          font-weight: 700;
          color: #1E2548;
          line-height: 1.25;
          font-family: var(--font-heading);
          z-index: 10;
          white-space: nowrap;
          text-align: left;
        }

        .hero-orbit-node-1 {
          top: 10%;
          left: 0%;
          font-size: 1.32rem;
        }

        .hero-orbit-node-2 {
          top: 10%;
          right: 2%;
          font-size: 1.32rem;
        }

        .hero-orbit-node-3 {
          bottom: 12%;
          left: 0%;
          font-size: 1.32rem;
        }

        .hero-orbit-node-4 {
          bottom: 8%;
          right: 0%;
          font-size: 1.32rem;
        }

        @media (max-width: 1200px) {
          .hero-orbit-container {
            max-width: 540px;
            height: 520px;
          }
          .hero-partner-cutout {
            width: 420px;
            max-height: 500px;
          }
          .hero-orbit-node {
            font-size: 1.15rem;
          }
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            text-align: center;
          }
          .hero-orbit-container {
            max-width: 400px !important;
            height: 400px !important;
            margin: 25px auto 0 auto !important;
          }
          .hero-partner-cutout {
            width: 290px !important;
            max-height: 380px !important;
          }
          .hero-orbit-node {
            font-size: 0.82rem !important;
            line-height: 1.2 !important;
          }
          .hero-orbit-node-1 {
            top: 4% !important;
            left: -8px !important;
          }
          .hero-orbit-node-2 {
            top: 4% !important;
            right: -8px !important;
          }
          .hero-orbit-node-3 {
            bottom: 8% !important;
            left: -8px !important;
          }
          .hero-orbit-node-4 {
            bottom: 8% !important;
            right: -8px !important;
          }
          .hero-boxes-grid {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }
        }

        @media (max-width: 420px) {
          .hero-orbit-container {
            max-width: 350px !important;
            height: 350px !important;
          }
          .hero-partner-cutout {
            width: 250px !important;
            max-height: 340px !important;
          }
          .hero-orbit-node {
            font-size: 0.74rem !important;
          }
          .hero-orbit-node-1 {
            left: -6px !important;
          }
          .hero-orbit-node-2 {
            right: -6px !important;
          }
          .hero-orbit-node-3 {
            left: -6px !important;
          }
          .hero-orbit-node-4 {
            right: -6px !important;
          }
        }
      `}</style>
    </div>
  );
}
