import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import ProcessSection from '../components/ProcessSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import AffiliationsSection from '../components/AffiliationsSection';
import CounterSection from '../components/CounterSection';
import { USFlag, UAEFlag, UKFlag, PKFlag, KSAFlag, GermanyFlag } from '../components/CountryFlags';
import { 
  ShieldCheck, Award, CheckCircle2, Phone, Calendar, 
  ArrowRight, Calculator 
} from 'lucide-react';

export default function Home({ onOpenSchedule }) {
  const [activeCountry, setActiveCountry] = useState('pk');
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`/api/services?country=${activeCountry}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setServices(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching home services:', err);
        setLoading(false);
      });
  }, [activeCountry]);

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
          <path d="M-100 350 C100 250, 300 450, 500 280 C550 240, 580 200, 600 150" stroke="#C49A2C" strokeWidth="1.5" />
          <path d="M-100 370 C120 270, 320 470, 520 300 C570 260, 590 220, 620 170" stroke="#C49A2C" strokeWidth="1.2" />
          <path d="M-100 390 C140 290, 340 490, 540 320 C590 280, 610 240, 640 190" stroke="#C49A2C" strokeWidth="1.2" />
          <path d="M-100 330 C80 230, 280 430, 480 260 C530 220, 560 180, 580 130" stroke="#C49A2C" strokeWidth="1.5" />
          <path d="M-100 310 C60 210, 260 410, 460 240 C510 200, 540 160, 560 110" stroke="#C49A2C" strokeWidth="1" />
        </svg>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '50px',
            alignItems: 'center'
          }} className="hero-grid">
            
            {/* Left Hero Content */}
            <div style={{ paddingRight: '10px' }}>
              <div style={{
                fontSize: '1.12rem',
                color: '#C49A2C',
                fontStyle: 'italic',
                fontWeight: 600,
                marginBottom: '16px',
                fontFamily: 'Georgia, serif'
              }}>
                Welcome to Kinzei Consultants
              </div>

              <h1 style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)',
                lineHeight: 1.16,
                marginBottom: '20px',
                fontWeight: 800,
                color: '#111827',
                fontFamily: 'var(--font-heading)'
              }}>
                Trusted Chartered Accountants for Your Business Success
              </h1>

              <p style={{
                fontSize: '1.08rem',
                color: '#4B5563',
                lineHeight: 1.7,
                marginBottom: '36px',
                maxWidth: '580px'
              }}>
                We provide reliable audit, accounting, taxation, and advisory services to help businesses stay compliant, grow confidently, and make informed financial decisions.
              </p>

              <div>
                <button 
                  onClick={onOpenSchedule} 
                  style={{
                    backgroundColor: '#C49A2C',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '14px 34px',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 6px 20px rgba(196, 154, 44, 0.3)',
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
                  <span>GET STARTED</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 900 }}>&gt;</span>
                </button>
              </div>

            </div>

            {/* Right Hero Graphic: CEO Orbit Ring & Photo Cutout */}
            <div style={{ position: 'relative', textAlign: 'center' }}>
              
              <div style={{
                position: 'relative',
                maxWidth: '480px',
                margin: '0 auto',
                display: 'inline-block',
                width: '100%'
              }}>

                {/* Silver/Grey Orbit Arch Ring Background SVG */}
                <svg 
                  style={{
                    position: 'absolute',
                    top: '-5%',
                    left: '-5%',
                    width: '110%',
                    height: '105%',
                    pointerEvents: 'none',
                    zIndex: 1
                  }}
                  viewBox="0 0 500 500" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Circular Arc Line */}
                  <path 
                    d="M 60 380 A 210 210 0 1 1 440 380" 
                    stroke="#CBD5E1" 
                    strokeWidth="1.8" 
                    strokeDasharray="none"
                  />
                  {/* Orbit Node Dots */}
                  <circle cx="85" cy="160" r="5" fill="#CBD5E1" />
                  <circle cx="250" cy="40" r="5" fill="#CBD5E1" />
                  <circle cx="415" cy="160" r="5" fill="#CBD5E1" />
                  <circle cx="65" cy="330" r="5" fill="#CBD5E1" />
                  <circle cx="435" cy="330" r="5" fill="#CBD5E1" />
                </svg>

                {/* 4 Orbit Node Labels around the Arc */}
                {/* 1. Top-Left */}
                <div style={{
                  position: 'absolute',
                  top: '6%',
                  left: '-8%',
                  zIndex: 10,
                  maxWidth: '160px',
                  textAlign: 'right',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#2A2E5D',
                  lineHeight: 1.25,
                  fontFamily: 'var(--font-heading)'
                }}>
                  Accounting &amp;<br />Financial Reporting
                </div>

                {/* 2. Top-Right */}
                <div style={{
                  position: 'absolute',
                  top: '6%',
                  right: '-6%',
                  zIndex: 10,
                  maxWidth: '150px',
                  textAlign: 'left',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#2A2E5D',
                  lineHeight: 1.25,
                  fontFamily: 'var(--font-heading)'
                }}>
                  Taxation<br />Services
                </div>

                {/* 3. Bottom-Left */}
                <div style={{
                  position: 'absolute',
                  bottom: '22%',
                  left: '-10%',
                  zIndex: 10,
                  maxWidth: '160px',
                  textAlign: 'right',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#2A2E5D',
                  lineHeight: 1.25,
                  fontFamily: 'var(--font-heading)'
                }}>
                  Consultancy &amp;<br />Outsourcing
                </div>

                {/* 4. Bottom-Right */}
                <div style={{
                  position: 'absolute',
                  bottom: '20%',
                  right: '-12%',
                  zIndex: 10,
                  maxWidth: '170px',
                  textAlign: 'left',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#2A2E5D',
                  lineHeight: 1.25,
                  fontFamily: 'var(--font-heading)'
                }}>
                  Information<br />Technology<br />Services
                </div>

                {/* CEO Cutout Image Container */}
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  margin: '0 auto',
                  maxWidth: '380px',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=700&auto=format&fit=crop" 
                    alt="Muhammad Irfan, FCA - CEO & Founder" 
                    style={{
                      width: '100%',
                      height: '460px',
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

                  {/* Gradient Shadow Overlay for Name */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '40px 20px 16px 20px',
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)',
                    color: '#FFFFFF',
                    textAlign: 'center'
                  }}>
                    <h3 style={{
                      fontSize: '1.75rem',
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

      {/* 3 SLEEK TEXT BOXES BAND UNDER HERO SECTION */}
      <section style={{
        backgroundColor: '#04284D',
        color: '#FFFFFF',
        position: 'relative',
        zIndex: 5
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
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '10px',
                fontFamily: 'var(--font-heading)'
              }}>
                Audit &amp; Assurance
              </h3>
              <p style={{
                fontSize: '0.94rem',
                color: '#CBD5E1',
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
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '10px',
                fontFamily: 'var(--font-heading)'
              }}>
                Accounting &amp; Reporting
              </h3>
              <p style={{
                fontSize: '0.94rem',
                color: '#CBD5E1',
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
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '10px',
                fontFamily: 'var(--font-heading)'
              }}>
                Tax &amp; Advisory
              </h3>
              <p style={{
                fontSize: '0.94rem',
                color: '#CBD5E1',
                lineHeight: '1.6',
                margin: 0,
                fontFamily: 'var(--font-body)'
              }}>
                Comprehensive tax and advisory services to help manage compliance, planning, and regulatory matters effectively.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Gold Accent Bar */}
        <div style={{ width: '100%', height: '5px', backgroundColor: '#C49A2C' }} />

        <style>{`
          @media (max-width: 992px) {
            .hero-boxes-grid {
              grid-template-columns: 1fr !important;
              gap: 25px !important;
            }
          }
        `}</style>
      </section>

      {/* 2. OUR PROCESS SECTION */}
      <ProcessSection onOpenSchedule={onOpenSchedule} />

      {/* 3. AFFILIATIONS & CERTIFICATION SECTION */}
      <AffiliationsSection />

      {/* 4. DYNAMIC REGIONAL SERVICES TAB SECTION */}
      <section style={{ padding: '80px 0 90px 0', backgroundColor: '#F8F9FA', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto' }}>
            <span className="badge-gold">Global Capabilities</span>
            <h2 style={{ fontSize: '2.4rem', color: '#111827', marginTop: '10px', marginBottom: '14px', fontWeight: 800 }}>
              Browse Services by <span style={{ color: '#9E7B3B' }}>Service Country</span>
            </h2>
            <p style={{ color: '#4B5563', fontSize: '1.02rem' }}>
              Select any of our 6 core operating regions below to view specialized financial, tax, and registration services.
            </p>
          </div>

          {/* 6 Country Filter Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '45px'
          }}>
            {countryTabs.map((tab) => {
              const TabFlag = tab.Flag;
              const isActive = activeCountry === tab.code;
              return (
                <button
                  key={tab.code}
                  onClick={() => setActiveCountry(tab.code)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 22px',
                    borderRadius: '30px',
                    fontSize: '0.94rem',
                    fontWeight: 700,
                    backgroundColor: isActive ? '#9E7B3B' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#1F2937',
                    border: isActive ? '1.5px solid #7A5C24' : '1.5px solid #E5E7EB',
                    boxShadow: isActive ? '0 8px 20px rgba(158, 123, 59, 0.25)' : '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <TabFlag size={22} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* 3 Featured Service Cards */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#9E7B3B', fontWeight: 700 }}>
              Loading localized services for {currentTab.name}...
            </div>
          ) : (
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '30px'
              }}>
                {displayedServices.map(service => (
                  <ServiceCard key={service.id} service={service} isDarkTheme={false} />
                ))}
              </div>

              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <button
                  onClick={() => navigate(`/services?country=${activeCountry}`)}
                  className="btn-outline"
                  style={{ padding: '12px 30px', borderRadius: '30px', fontSize: '0.95rem' }}
                >
                  <span>View All {currentTab.name} Services</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <WhyChooseUsSection onOpenSchedule={onOpenSchedule} />

      {/* 6. COUNTER STATS SECTION */}
      <CounterSection />

      {/* 7. SCHEDULE CONSULTATION CTA BANNER */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            backgroundColor: '#FFFBEB',
            borderRadius: '24px',
            padding: '50px 40px',
            border: '1.5px solid rgba(158, 123, 59, 0.3)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '30px',
            flexWrap: 'wrap'
          }}>
            <div>
              <span className="badge-gold" style={{ marginBottom: '12px' }}>Direct Consultation</span>
              <h3 style={{ fontSize: '2rem', color: '#111827', fontWeight: 800, margin: '8px 0' }}>
                Ready to Discuss Your Corporate Tax & Audit Position?
              </h3>
              <p style={{ color: '#4B5563', fontSize: '1.02rem', maxWidth: '600px', margin: 0 }}>
                Schedule a 1-on-1 session with our senior chartered accountants and legal tax specialists today.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="tel:03034063970" className="btn-outline" style={{ padding: '14px 24px', borderRadius: '30px' }}>
                <Phone size={18} />
                <span>03034063970</span>
              </a>

              <button onClick={onOpenSchedule} className="btn-primary" style={{ padding: '14px 30px', borderRadius: '30px' }}>
                <Calendar size={18} />
                <span>Reserve Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
