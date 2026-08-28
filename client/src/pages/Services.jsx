import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { USFlag, UAEFlag, UKFlag, PKFlag, KSAFlag, GermanyFlag } from '../components/CountryFlags';
import { Search } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCountry = searchParams.get('country') || 'pk';
  
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);
  const [services, setServices] = useState(servicesData[initialCountry] || []);
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredServices = services.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#111827' }}>
      {/* PAGE HEADER BANNER */}
      <section style={{
        backgroundColor: '#F8FAFC',
        padding: '60px 0 45px 0',
        textAlign: 'center',
        borderBottom: '1px solid #E5E7EB'
      }}>
        <div className="container">
          <span className="badge-gold">Kinzei Global Offerings</span>
          <h1 style={{ fontSize: '2.8rem', color: '#111827', marginTop: '12px', marginBottom: '16px', fontWeight: 800 }}>
            Our International <span style={{ color: '#D4A017' }}>Services</span>
          </h1>
          <p style={{ color: '#1F2937', fontSize: '1.08rem', maxWidth: '720px', margin: '0 auto 36px auto', fontWeight: 500 }}>
            Select your target country below to explore localized tax filing, statutory audit, corporate registration, and advisory solutions.
          </p>

          {/* 6 Country Filter Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '30px'
          }}>
            {countryTabs.map((tab) => {
              const TabFlag = tab.Flag;
              const isActive = selectedCountry === tab.code;
              return (
                <button
                  key={tab.code}
                  onClick={() => handleCountryChange(tab.code)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 24px',
                    borderRadius: '30px',
                    fontSize: '0.94rem',
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
                  <TabFlag size={22} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Filter Input */}
          <div style={{ maxWidth: '440px', margin: '0 auto', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '14px', color: '#6B7280' }} />
            <input
              type="text"
              placeholder="Search services (e.g. Audit, Tax, Registration)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px 12px 46px',
                borderRadius: '30px',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid rgba(212, 160, 23, 0.45)',
                color: '#111827',
                fontSize: '0.95rem',
                outline: 'none',
                fontWeight: 600
              }}
            />
          </div>
        </div>
      </section>

      {/* SERVICES GRID (INSTANT LOAD - ZERO DELAY) */}
      <section style={{ padding: '60px 0 90px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          {filteredServices.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#4B5563', fontWeight: 600 }}>
              No services found matching "{searchQuery}". Try selecting another country tab above.
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '30px'
            }}>
              {filteredServices.map(service => (
                <ServiceCard key={service.id} service={service} isDarkTheme={false} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
