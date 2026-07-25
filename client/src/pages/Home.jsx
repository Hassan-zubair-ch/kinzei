import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { USFlag, UAEFlag, UKFlag, PKFlag, OtherFlag } from '../components/CountryFlags';
import { 
  ShieldCheck, Award, Users, ArrowRight, CheckCircle2, Phone, Calendar, 
  ArrowRightCircle, Target, Eye, FileText, Briefcase, ChevronRight 
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
    { code: 'us', label: 'US Services', name: 'US', Flag: USFlag },
    { code: 'uae', label: 'UAE Services', name: 'UAE', Flag: UAEFlag },
    { code: 'uk', label: 'UK Services', name: 'UK', Flag: UKFlag },
    { code: 'other', label: 'Other Services', name: 'Other', Flag: OtherFlag },
  ];

  const currentTab = countryTabs.find(t => t.code === activeCountry) || countryTabs[0];

  const displayedServices = services.slice(0, 3);

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section style={{
        position: 'relative',
        padding: '90px 0 110px 0',
        background: 'radial-gradient(circle at 50% 20%, #1A1F2C 0%, #090A0E 80%)',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(212, 175, 55, 0.15)'
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '60px',
            alignItems: 'center'
          }} className="hero-grid">
            
            {/* Left Hero Content */}
            <div>
              <span className="badge-gold" style={{ marginBottom: '16px' }}>
                <ShieldCheck size={14} color="#D4AF37" />
                Kinzei Consultants (Private) Limited
              </span>

              <h1 style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                lineHeight: 1.15,
                marginBottom: '20px',
                fontWeight: 800
              }}>
                Strategic Tax, Audit & <span className="gold-gradient-text">Global Business Advisory</span>
              </h1>

              <p style={{
                fontSize: '1.15rem',
                color: '#A0AABF',
                lineHeight: 1.7,
                marginBottom: '36px',
                maxWidth: '620px'
              }}>
                Kinzei Consultants provides expert corporate tax compliance, statutory audit, SECP entity registration, and cross-border US, UK & UAE advisory services with total transparency.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button onClick={onOpenSchedule} className="btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
                  <Calendar size={18} />
                  <span>Book Schedule Now</span>
                </button>

                <Link to="/tax-calculator" className="btn-outline" style={{ padding: '14px 28px', fontSize: '1rem' }}>
                  <span>Calculate Tax Online</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Trust Badges */}
              <div style={{
                marginTop: '44px',
                paddingTop: '28px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                gap: '28px',
                flexWrap: 'wrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={18} color="#D4AF37" />
                  <span style={{ fontSize: '0.9rem', color: '#D1D7E3', fontWeight: 600 }}>SECP & FBR Compliant</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={18} color="#D4AF37" />
                  <span style={{ fontSize: '0.9rem', color: '#D1D7E3', fontWeight: 600 }}>IRS & Companies House Desk</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={18} color="#D4AF37" />
                  <span style={{ fontSize: '0.9rem', color: '#D1D7E3', fontWeight: 600 }}>100% Tax Accuracy</span>
                </div>
              </div>
            </div>

            {/* Right Hero Graphic Card */}
            <div style={{
              position: 'relative',
              background: 'linear-gradient(145deg, #181C26 0%, #10131B 100%)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '24px',
              padding: '40px 32px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF' }}>Quick Advisory Hub</h3>
                <span className="badge-gold">2026 Tax Rates</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ backgroundColor: '#131620', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 700 }}>TAXATION & COMPLIANCE</span>
                  <h4 style={{ fontSize: '1rem', marginTop: '4px', color: '#FFFFFF' }}>FBR Wealth & Income Tax Filing</h4>
                  <p style={{ fontSize: '0.85rem', color: '#8A94A6', marginTop: '4px' }}>Salaried & Business tax return filing with zero penalty guarantee.</p>
                </div>

                <div style={{ backgroundColor: '#131620', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontSize: '0.8rem', color: '#4FB3F6', fontWeight: 700 }}>GLOBAL EXPANSION</span>
                  <h4 style={{ fontSize: '1rem', marginTop: '4px', color: '#FFFFFF' }}>US LLC & UK Ltd Formation</h4>
                  <p style={{ fontSize: '0.85rem', color: '#8A94A6', marginTop: '4px' }}>Turnkey offshore registration with IRS EIN and HMRC VAT setup.</p>
                </div>

                <div style={{ backgroundColor: '#131620', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontSize: '0.8rem', color: '#2ECC71', fontWeight: 700 }}>AUDIT & RETAINERSHIP</span>
                  <h4 style={{ fontSize: '1rem', marginTop: '4px', color: '#FFFFFF' }}>Statutory & Internal Audit</h4>
                  <p style={{ fontSize: '0.85rem', color: '#8A94A6', marginTop: '4px' }}>Independent assurance and continuous monthly retainership support.</p>
                </div>
              </div>

              <button 
                onClick={onOpenSchedule}
                className="btn-primary" 
                style={{ width: '100%', marginTop: '24px', justifyContent: 'center' }}
              >
                <span>Request Free Call Back</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUSTED FINANCIAL PARTNERS FOR YOUR BUSINESS */}
      <section style={{ padding: '90px 0', backgroundColor: '#0D0E12', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '60px',
            alignItems: 'center'
          }} className="feature-grid">

            {/* Left Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                height: '440px',
                position: 'relative'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop"
                  alt="Trusted Financial Partners"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(9,10,14,0.2) 0%, rgba(9,10,14,0.85) 100%)'
                }} />
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
              <span className="badge-gold">Strategic Partner</span>
              <h2 style={{ fontSize: '2.4rem', marginTop: '12px', marginBottom: '20px', lineHeight: 1.25 }}>
                Trusted Financial Partners <span className="gold-gradient-text">for Your Business</span>
              </h2>
              <p style={{ color: '#B0B8C8', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '28px' }}>
                Kinzei Consultants (Private) Limited is a premier firm of Chartered Accountants and Tax Consultants providing statutory audit, corporate taxation, SECP registration, and cross-border advisory services across various sectors. Led by senior professionals with over <strong>15+ years of hands-on experience</strong>, we deliver practical solutions, clear advice, and dependable execution.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {[
                  '15+ years of professional chartered accountancy & advisory experience',
                  'Qualified and experienced team of FCA consultants & US CPAs',
                  'Complete end-to-end statutory audit, tax & corporate advisory services',
                  'Ethical, confidential, and reliable execution backed by compliance standards',
                  'Client-focused and practical business solutions tailored to your sector'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ArrowRightCircle size={20} color="#D4AF37" style={{ flexShrink: 0 }} />
                    <span style={{ color: '#E1E6F0', fontSize: '0.98rem', fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn-primary" style={{ padding: '12px 28px' }}>
                  <span>Learn More</span>
                </Link>
                <Link to="/services" className="btn-outline" style={{ padding: '12px 26px' }}>
                  <span>Our Services</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES SECTION WITH COUNTRY SWITCHER (POSITIONED AS THE 3RD SECTION ON HOME PAGE) */}
      <section style={{ padding: '90px 0', backgroundColor: '#090A0E', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
            <span className="badge-gold">What Service We Offer</span>
            <h2 style={{ fontSize: '2.4rem', marginTop: '12px', marginBottom: '16px' }}>
              Explore Our Featured <span className="gold-gradient-text">{currentTab.name} Services</span>
            </h2>
            <p style={{ color: '#9BA4B5', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Select a country below to preview top practice areas, or click the view button to inspect the full 9-service catalog.
            </p>

            {/* Country Selector Tabs */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginTop: '32px'
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
                      padding: '12px 24px',
                      borderRadius: '30px',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      backgroundColor: isActive ? '#D4AF37' : '#141822',
                      color: isActive ? '#0A0B0E' : '#F1F3F9',
                      border: isActive ? '1px solid #FFD700' : '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: isActive ? '0 10px 25px rgba(212, 175, 55, 0.3)' : 'none',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <TabFlag size={22} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* EXACTLY 3 CARDS DISPLAYED ON HOMEPAGE */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#D4AF37' }}>
              Loading services...
            </div>
          ) : (
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
              }}>
                {displayedServices.map(service => (
                  <ServiceCard key={service.id} service={service} isDarkTheme={true} />
                ))}
              </div>

              {/* DYNAMIC VIEW ALL BUTTON UNDER THE 3 CARDS */}
              <div style={{ textAlign: 'center' }}>
                <button 
                  onClick={() => navigate(`/services?country=${activeCountry}`)}
                  className="btn-primary" 
                  style={{ padding: '14px 36px', fontSize: '1rem' }}
                >
                  <span>View All {currentTab.name} Services</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. COUNTER STATISTICS SECTION */}
      <section style={{ backgroundColor: '#11141C', padding: '60px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{
            backgroundColor: '#181C26',
            borderRadius: '24px',
            padding: '40px 30px',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            textAlign: 'center'
          }}>
            {[
              { icon: Users, number: '350 +', label: 'Happy Corporate Clients' },
              { icon: FileText, number: '500 +', label: 'Tax & Audit Cases Completed' },
              { icon: Award, number: '15 +', label: 'Years Of Industry Experience' },
              { icon: Briefcase, number: '15 +', label: 'Professional Team Experts' },
            ].map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(212, 175, 55, 0.12)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D4AF37',
                    marginBottom: '16px'
                  }}>
                    <StatIcon size={26} />
                  </div>
                  <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#FFFFFF', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#9BA4B5', marginTop: '6px', fontWeight: 600 }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. PRACTICAL SOLUTIONS FOR STRONG FINANCIAL MANAGEMENT */}
      <section style={{ padding: '90px 0', backgroundColor: '#090A0E', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }} className="feature-grid">

            {/* Left Content */}
            <div>
              <span className="badge-gold">Financial Excellence</span>
              <h2 style={{ fontSize: '2.4rem', marginTop: '12px', marginBottom: '20px', lineHeight: 1.25 }}>
                Practical Solutions for <span className="gold-gradient-text">Strong Financial Management</span>
              </h2>
              <p style={{ color: '#B0B8C8', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '28px' }}>
                We support businesses with reliable audit, accounting, taxation, and advisory services designed to strengthen financial controls, ensure compliance, and support sustainable long-term growth.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                <div style={{ backgroundColor: '#141822', padding: '20px 24px', borderRadius: '16px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '6px' }}>Audit & Assurance</h4>
                  <p style={{ color: '#8A94A6', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    Independent audit services that enhance transparency, strengthen corporate governance, and build stakeholder confidence.
                  </p>
                </div>

                <div style={{ backgroundColor: '#141822', padding: '20px 24px', borderRadius: '16px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '6px' }}>Advisory & Consultations</h4>
                  <p style={{ color: '#8A94A6', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    Practical financial and business advisory services to help clients manage operational risks, improve margin performance, and make informed decisions.
                  </p>
                </div>
              </div>

              <button onClick={onOpenSchedule} className="btn-primary" style={{ padding: '12px 30px' }}>
                <span>Contact Us Today</span>
              </button>
            </div>

            {/* Right Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                height: '420px'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop"
                  alt="Financial Management Solutions"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. OUR VALUE: BUILDING TRUST THROUGH PROFESSIONAL EXCELLENCE */}
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
          }} className="value-grid">

            {/* Left Content */}
            <div>
              <span style={{ fontSize: '0.85rem', color: '#D4AF37', fontStyle: 'italic', fontWeight: 700, letterSpacing: '0.05em' }}>
                Our Value
              </span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '8px', marginBottom: '24px', lineHeight: 1.25, color: '#FFFFFF' }}>
                Building Trust Through <span className="gold-gradient-text">Professional Excellence</span>
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '16px' }}>
                We create value for our clients by delivering reliable audit, accounting, taxation, and advisory services. Our approach is based on integrity, technical expertise, and a deep understanding of our clients’ business needs.
              </p>
              <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.8 }}>
                We focus on building long-term relationships by providing clear advice, timely support, and solutions that add real value to our clients’ businesses.
              </p>
            </div>

            {/* Right Cards: Vision & Mission */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Vision Card */}
              <div style={{
                backgroundColor: '#1E293B',
                borderRadius: '16px',
                padding: '30px',
                borderLeft: '5px solid #D4AF37',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                display: 'flex',
                gap: '20px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#D4AF37',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Eye size={26} color="#0F172A" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '8px' }}>Our Vision</h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    To be a trusted professional services firm known for quality, integrity, and practical solutions that help businesses grow with confidence and compliance.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div style={{
                backgroundColor: '#1E293B',
                borderRadius: '16px',
                padding: '30px',
                borderLeft: '5px solid #D4AF37',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                display: 'flex',
                gap: '20px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#D4AF37',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Target size={26} color="#0F172A" />
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

      {/* 7. BOTTOM CTA BANNER */}
      <section style={{
        padding: '75px 0',
        background: 'linear-gradient(135deg, #181C26 0%, #0D0E12 100%)',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '16px' }}>GET STARTED TODAY</h2>
          <p style={{ color: '#9BA4B5', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 32px auto' }}>
            Kinzei Consultants (Private) Limited provides expert tax, audit, and advisory services to help businesses navigate regulatory requirements with confidence.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={onOpenSchedule} className="btn-primary" style={{ padding: '14px 32px' }}>
              <span>Book Schedule Now</span>
            </button>
            <Link to="/contact" className="btn-outline" style={{ padding: '14px 28px' }}>
              <span>Contact Lahore Office</span>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid, .feature-grid, .value-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}
