import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { USFlag, UAEFlag, UKFlag, PKFlag, KSAFlag, GermanyFlag, OtherFlag } from '../components/CountryFlags';
import { Search } from 'lucide-react';

export default function Services({ onOpenSchedule }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCountry = searchParams.get('country') || 'pk';
  
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const c = searchParams.get('country') || 'pk';
    setSelectedCountry(c);
  }, [searchParams]);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/services?country=${selectedCountry}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setServices(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching services:', err);
        setLoading(false);
      });
  }, [selectedCountry]);

  const handleCountryChange = (code) => {
    setSelectedCountry(code);
    setSearchParams({ country: code });
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
        backgroundColor: '#F8F9FA',
        padding: '60px 0 45px 0',
        textAlign: 'center',
        borderBottom: '1px solid #E5E7EB'
      }}>
        <div className="container">
          <span className="badge-gold">Kinzei Global Offerings</span>
          <h1 style={{ fontSize: '2.8rem', color: '#111827', marginTop: '12px', marginBottom: '16px', fontWeight: 800 }}>
            Our International <span style={{ color: '#9E7B3B' }}>Services</span>
          </h1>
          <p style={{ color: '#4B5563', fontSize: '1.08rem', maxWidth: '720px', margin: '0 auto 36px auto' }}>
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
                border: '1.5px solid rgba(158, 123, 59, 0.35)',
                color: '#111827',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ padding: '60px 0 90px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#9E7B3B', fontWeight: 700 }}>
              Loading country service catalog...
            </div>
          ) : filteredServices.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#4B5563' }}>
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
