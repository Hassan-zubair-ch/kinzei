import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { USFlag, UAEFlag, UKFlag, PKFlag, OtherFlag } from '../components/CountryFlags';
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
    { code: 'pk', label: 'PK Services', Flag: PKFlag },
    { code: 'us', label: 'US Services', Flag: USFlag },
    { code: 'uae', label: 'UAE Services', Flag: UAEFlag },
    { code: 'uk', label: 'UK Services', Flag: UKFlag },
    { code: 'other', label: 'Other Services', Flag: OtherFlag },
  ];

  const filteredServices = services.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* PAGE HEADER BANNER */}
      <section style={{
        background: 'linear-gradient(180deg, #181C26 0%, #090A0E 100%)',
        padding: '70px 0 50px 0',
        textAlign: 'center',
        borderBottom: '1px solid rgba(212, 175, 55, 0.15)'
      }}>
        <div className="container">
          <span className="badge-gold">Our Services</span>
          <h1 style={{ fontSize: '2.8rem', marginTop: '12px', marginBottom: '16px' }}>
            What Service <span className="gold-gradient-text">We Offer</span>
          </h1>
          <p style={{ color: '#9BA4B5', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto 36px auto' }}>
            Select a region below to browse localized tax, audit, statutory incorporation, and ongoing retainership services.
          </p>

          {/* Country Filter Buttons */}
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

          {/* Search Filter Input */}
          <div style={{ maxWidth: '420px', margin: '0 auto', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '14px', color: '#7E899C' }} />
            <input
              type="text"
              placeholder="Search services (e.g. Audit, Tax, LLC)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px 12px 46px',
                borderRadius: '30px',
                backgroundColor: '#141822',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                color: '#FFFFFF',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
          </div>
        </div>
      </section>

      {/* 9-CARD SERVICES GRID */}
      <section style={{ padding: '70px 0 100px 0', backgroundColor: '#090A0E' }}>
        <div className="container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#D4AF37' }}>
              Loading country service catalog...
            </div>
          ) : filteredServices.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#9BA4B5' }}>
              No services found matching "{searchQuery}". Try selecting another country tab.
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '30px'
            }}>
              {filteredServices.map(service => (
                <ServiceCard key={service.id} service={service} isDarkTheme={true} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
