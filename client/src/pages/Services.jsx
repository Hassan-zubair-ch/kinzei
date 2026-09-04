import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import { USFlag, UAEFlag, UKFlag, PKFlag, KSAFlag, GermanyFlag } from '../components/CountryFlags';
import { servicesData } from '../data/servicesData';

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCountry = searchParams.get('country') || 'pk';
  
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);
  const [services, setServices] = useState(servicesData[initialCountry] || []);

  useEffect(() => {
    const c = searchParams.get('country') || 'pk';
    setSelectedCountry(c);
    setServices(servicesData[c] || []);
  }, [searchParams]);

  const handleCountryChange = (code) => {
    setSelectedCountry(code);
    setSearchParams({ country: code });
    setServices(servicesData[code] || []);
  };

  const countryTabs = [
    { code: 'pk', label: 'Pakistan Services', Flag: PKFlag },
    { code: 'us', label: 'USA Services', Flag: USFlag },
    { code: 'uk', label: 'UK Services', Flag: UKFlag },
    { code: 'uae', label: 'UAE Services', Flag: UAEFlag },
    { code: 'uks', label: 'UKS (Saudi Arabia)', Flag: KSAFlag },
    { code: 'de', label: 'Germany Services', Flag: GermanyFlag },
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#111827' }}>
      <SEO 
        title="Corporate Taxation, Audit & SECP Business Registration Services"
        description="Explore Kinzei Consultants' full suite of chartered accounting services: Pakistan corporate taxation, FBR tax returns, statutory audit, SECP company registration, and US/UK/UAE business setup."
        keywords="corporate taxation Pakistan, audit assurance Lahore, SECP company registration, tax consultancy Pakistan, in-house finance staffing secondment, Kinzei Consultants"
        canonical="/services"
      />
      {/* PAGE HEADER BANNER */}
      <section style={{
        backgroundColor: '#F8FAFC',
        padding: '50px 0 40px 0',
        textAlign: 'center',
        borderBottom: '1px solid #E5E7EB'
      }}>
        <div className="container">
          <span className="badge-gold">Kinzei Global Offerings</span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#111827', marginTop: '12px', marginBottom: '14px', fontWeight: 800 }}>
            Our International <span style={{ color: '#D4A017' }}>Services</span>
          </h1>
          <p style={{ color: '#1F2937', fontSize: '1.02rem', maxWidth: '720px', margin: '0 auto 30px auto', fontWeight: 500 }}>
            Select your target country below to explore localized tax filing, statutory audit, corporate registration, and advisory solutions.
          </p>

          {/* 6 Country Filter Buttons - Symmetrical Grid on Mobile & Inline on Desktop */}
          <div 
            className="services-country-tabs"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap'
            }}
          >
            {countryTabs.map((tab) => {
              const TabFlag = tab.Flag;
              const isActive = selectedCountry === tab.code;
              return (
                <button
                  key={tab.code}
                  onClick={() => handleCountryChange(tab.code)}
                  className="services-country-btn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px 22px',
                    borderRadius: '30px',
                    fontSize: '0.92rem',
                    fontWeight: 800,
                    backgroundColor: isActive ? '#D4A017' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#111827',
                    border: isActive ? '1.5px solid #D4A017' : '1.5px solid #D1D5DB',
                    boxShadow: isActive ? '0 8px 20px rgba(212, 160, 23, 0.35)' : '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer'
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
                  <TabFlag size={20} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES GRID (INSTANT LOAD - ZERO DELAY) */}
      <section style={{ padding: '55px 0 85px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          {services.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#4B5563', fontWeight: 600 }}>
              No services found for this jurisdiction. Try selecting another country tab above.
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px'
            }} className="services-list-grid">
              {services.map(service => (
                <ServiceCard key={service.id} service={service} isDarkTheme={false} />
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .services-country-tabs {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .services-country-btn {
            width: 100% !important;
            padding: 10px 8px !important;
            font-size: 0.82rem !important;
            border-radius: 12px !important;
          }
          .services-list-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 400px) {
          .services-country-btn {
            padding: 8px 6px !important;
            font-size: 0.78rem !important;
          }
        }
      `}</style>
    </div>
  );
}
