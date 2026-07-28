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
        padding: '80px 0 90px 0',
        backgroundColor: '#F8F9FA',
        borderBottom: '1px solid #E5E7EB',
        overflow: 'hidden'
      }}>
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
                <ShieldCheck size={15} color="#9E7B3B" />
                Kinzei Consultants (Private) Limited
              </span>

              <h1 style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                lineHeight: 1.15,
                marginBottom: '20px',
                fontWeight: 900,
                color: '#111827'
              }}>
                Strategic Tax, Audit & <span style={{ color: '#9E7B3B' }}>Global Advisory</span>
              </h1>

              <p style={{
                fontSize: '1.12rem',
                color: '#4B5563',
                lineHeight: 1.7,
                marginBottom: '36px',
                maxWidth: '620px'
              }}>
                Kinzei Consultants provides expert corporate tax compliance, statutory audit, entity registration, and cross-border Pakistan, US, UK, UAE, Saudi & German advisory services with total transparency.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button 
                  onClick={onOpenSchedule} 
                  className="btn-primary"
                  style={{ padding: '14px 30px', fontSize: '0.98rem', borderRadius: '30px' }}
                >
                  <Calendar size={18} />
                  <span>Book Schedule Now</span>
                </button>

                <Link 
                  to="/tax-calculator" 
                  className="btn-outline"
                  style={{ padding: '14px 28px', fontSize: '0.98rem', borderRadius: '30px' }}
                >
                  <Calculator size={18} />
                  <span>Pakistan Tax Calculator</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div style={{
                marginTop: '45px',
                paddingTop: '25px',
                borderTop: '1px solid #E5E7EB',
                display: 'flex',
                gap: '30px',
                flexWrap: 'wrap'
              }}>
                <div>
                  <h4 style={{ fontSize: '1.7rem', color: '#9E7B3B', fontWeight: 900 }}>10+</h4>
                  <p style={{ fontSize: '0.85rem', color: '#6B7280', fontWeight: 600 }}>Years Advisory Excellence</p>
                </div>
                <div style={{ width: '1px', backgroundColor: '#E5E7EB' }} />
                <div>
                  <h4 style={{ fontSize: '1.7rem', color: '#9E7B3B', fontWeight: 900 }}>100%</h4>
                  <p style={{ fontSize: '0.85rem', color: '#6B7280', fontWeight: 600 }}>Statutory FBR & SECP Compliance</p>
                </div>
                <div style={{ width: '1px', backgroundColor: '#E5E7EB' }} />
                <div>
                  <h4 style={{ fontSize: '1.7rem', color: '#9E7B3B', fontWeight: 900 }}>6</h4>
                  <p style={{ fontSize: '0.85rem', color: '#6B7280', fontWeight: 600 }}>Service Countries Supported</p>
                </div>
              </div>
            </div>

            {/* Right Hero Graphic Card */}
            <div>
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '36px',
                border: '1.5px solid rgba(158, 123, 59, 0.35)',
                boxShadow: '0 20px 40px rgba(158, 123, 59, 0.12)',
                textAlign: 'center',
                position: 'relative'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 20px auto',
                  borderRadius: '20px',
                  backgroundColor: '#FFFBEB',
                  border: '1.5px solid #9E7B3B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9E7B3B'
                }}>
                  <Award size={40} />
                </div>

                <h3 style={{ fontSize: '1.5rem', color: '#111827', marginBottom: '12px', fontWeight: 800 }}>
                  Corporate Tax & Financial Advisory
                </h3>

                <p style={{ fontSize: '0.94rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '24px' }}>
                  Protect your enterprise with verified statutory audits, FBR tax defense, SECP incorporation, and global entity management.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left', marginBottom: '24px' }}>
                  {['FBR Income & Sales Tax Active Filings', 'Statutory Financial Audit & Assurance', 'US, UK, UAE, Saudi & German Desk', 'Retainership & Ongoing Compliance'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#1F2937', fontWeight: 600 }}>
                      <CheckCircle2 size={16} color="#9E7B3B" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={onOpenSchedule}
                  className="btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', padding: '12px', borderRadius: '12px' }}
                >
                  <span>Book Free Consultation</span>
                </button>
              </div>
            </div>

          </div>
        </div>
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
