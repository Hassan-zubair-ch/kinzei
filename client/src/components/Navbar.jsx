import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import KinzeiLogo from './KinzeiLogo';
import { USFlag, UAEFlag, UKFlag, PKFlag, OtherFlag } from './CountryFlags';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenSchedule }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const phoneNumber = "923034063970";
  const defaultMessage = encodeURIComponent("Hello Kinzei Consultants, I would like to inquire about your tax, audit, and business advisory services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const handleCountrySelect = (countryCode) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(`/services?country=${countryCode}`);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services', isDropdown: true },
    { name: 'Tax Calculator', path: '/tax-calculator' },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const countryItems = [
    { code: 'us', label: 'US Services', Flag: USFlag },
    { code: 'uae', label: 'UAE Services', Flag: UAEFlag },
    { code: 'uk', label: 'UK Services', Flag: UKFlag },
    { code: 'pk', label: 'PK Services', Flag: PKFlag },
    { code: 'other', label: 'Other Services', Flag: OtherFlag },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: scrolled ? 'rgba(9, 10, 14, 0.96)' : 'rgba(17, 20, 28, 0.98)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '6px',
        paddingBottom: '6px',
        minHeight: '125px' // Doubled container height for extra large logo display
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <KinzeiLogo height={150} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            if (link.isDropdown) {
              return (
                <div 
                  key={link.name} 
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button 
                    onClick={() => navigate('/services')}
                    style={{
                      background: 'none',
                      color: location.pathname.startsWith('/services') ? '#E5C158' : '#F1F3F9',
                      fontSize: '1rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '6px 0',
                      whiteSpace: 'nowrap',
                      borderBottom: location.pathname.startsWith('/services') ? '2px solid #D4AF37' : '2px solid transparent',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={15} style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
                  </button>

                  {dropdownOpen && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '0',
                      width: '240px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '8px',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                      padding: '8px 0',
                      zIndex: 1100,
                      animation: 'fadeIn 0.2s ease-out',
                      border: '1px solid rgba(0,0,0,0.1)'
                    }}>
                      {countryItems.map((item) => {
                        const FlagComponent = item.Flag;
                        return (
                          <div
                            key={item.code}
                            onClick={() => handleCountrySelect(item.code)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '14px',
                              padding: '12px 20px',
                              cursor: 'pointer',
                              color: '#1E232E',
                              fontWeight: 700,
                              fontSize: '0.95rem',
                              borderBottom: '1px solid #F0F2F5',
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#F5F7FA';
                              e.currentTarget.style.color = '#D4AF37';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = '#1E232E';
                            }}
                          >
                            <FlagComponent size={24} />
                            <span>{item.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link 
                key={link.name} 
                to={link.path}
                style={{
                  color: isActive ? '#E5C158' : '#F1F3F9',
                  fontWeight: 600,
                  fontSize: '1rem',
                  padding: '6px 0',
                  whiteSpace: 'nowrap',
                  borderBottom: isActive ? '2px solid #D4AF37' : '2px solid transparent',
                  transition: 'color 0.2s'
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right WhatsApp Button */}
        <div style={{ display: 'flex', alignItems: 'center' }} className="desktop-cta">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              fontSize: '0.9rem',
              padding: '10px 22px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '30px',
              textDecoration: 'none'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C8.27 2 2 8.27 2 16C2 18.77 2.8 21.36 4.19 23.54L2.5 29.5L8.65 27.88C10.77 29.17 13.3 29.93 16 29.93C23.73 29.93 30 23.66 30 15.93C30 8.2 23.73 2 16 2ZM16 27.5C13.62 27.5 11.4 26.8 9.5 25.59L9.05 25.32L5.4 26.28L6.37 22.71L6.08 22.25C4.73 20.31 4 18.01 4 15.93C4 9.35 9.38 3.97 16 3.97C22.62 3.97 28 9.35 28 15.93C28 22.51 22.62 27.5 16 27.5Z" fill="#0A0B0E"/>
              <path d="M22.05 19.38C21.72 19.21 20.08 18.4 19.78 18.29C19.47 18.18 19.25 18.12 19.03 18.45C18.81 18.78 18.18 19.52 17.99 19.74C17.8 19.96 17.61 19.99 17.28 19.82C16.95 19.65 15.89 19.3 14.63 18.18C13.65 17.31 12.99 16.23 12.8 15.9C12.61 15.57 12.78 15.39 12.94 15.23C13.09 15.08 13.28 14.83 13.44 14.64C13.61 14.45 13.66 14.31 13.77 14.09C13.88 13.87 13.83 13.68 13.74 13.51C13.66 13.34 13.03 11.8 12.77 11.18C12.52 10.58 12.26 10.66 12.07 10.65H11.47C11.25 10.65 10.89 10.73 10.59 11.06C10.29 11.39 9.44 12.19 9.44 13.82C9.44 15.45 10.62 17.03 10.79 17.25C10.96 17.47 13.11 20.76 16.4 22.18C17.18 22.52 17.79 22.72 18.27 22.87C19.05 23.12 19.76 23.08 20.32 23C20.95 22.91 22.25 22.21 22.52 21.45C22.79 20.69 22.38 19.55 22.05 19.38Z" fill="#0A0B0E"/>
            </svg>
            <span>03034063970</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            color: '#FFFFFF',
            padding: '8px',
            display: 'none'
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#11141C',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.name}>
                  <div
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: '#E5C158',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      padding: '8px 0',
                      cursor: 'pointer'
                    }}
                  >
                    <span>Services</span>
                    <ChevronDown size={18} style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'none' }} />
                  </div>

                  {mobileServicesOpen && (
                    <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
                      {countryItems.map((item) => {
                        const FlagComponent = item.Flag;
                        return (
                          <div
                            key={item.code}
                            onClick={() => handleCountrySelect(item.code)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              color: '#F1F3F9',
                              fontWeight: 600,
                              fontSize: '0.95rem',
                              padding: '8px 0',
                              cursor: 'pointer'
                            }}
                          >
                            <FlagComponent size={22} />
                            <span>{item.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: location.pathname === link.path ? '#E5C158' : '#F1F3F9',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  padding: '8px 0'
                }}
              >
                {link.name}
              </Link>
            );
          })}

          <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', borderRadius: '30px', textDecoration: 'none' }}
            >
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2C8.27 2 2 8.27 2 16C2 18.77 2.8 21.36 4.19 23.54L2.5 29.5L8.65 27.88C10.77 29.17 13.3 29.93 16 29.93C23.73 29.93 30 23.66 30 15.93C30 8.2 23.73 2 16 2ZM16 27.5C13.62 27.5 11.4 26.8 9.5 25.59L9.05 25.32L5.4 26.28L6.37 22.71L6.08 22.25C4.73 20.31 4 18.01 4 15.93C4 9.35 9.38 3.97 16 3.97C22.62 3.97 28 9.35 28 15.93C28 22.51 22.62 27.5 16 27.5Z" fill="#0A0B0E"/>
                <path d="M22.05 19.38C21.72 19.21 20.08 18.4 19.78 18.29C19.47 18.18 19.25 18.12 19.03 18.45C18.81 18.78 18.18 19.52 17.99 19.74C17.8 19.96 17.61 19.99 17.28 19.82C16.95 19.65 15.89 19.3 14.63 18.18C13.65 17.31 12.99 16.23 12.8 15.9C12.61 15.57 12.78 15.39 12.94 15.23C13.09 15.08 13.28 14.83 13.44 14.64C13.61 14.45 13.66 14.31 13.77 14.09C13.88 13.87 13.83 13.68 13.74 13.51C13.66 13.34 13.03 11.8 12.77 11.18C12.52 10.58 12.26 10.66 12.07 10.65H11.47C11.25 10.65 10.89 10.73 10.59 11.06C10.29 11.39 9.44 12.19 9.44 13.82C9.44 15.45 10.62 17.03 10.79 17.25C10.96 17.47 13.11 20.76 16.4 22.18C17.18 22.52 17.79 22.72 18.27 22.87C19.05 23.12 19.76 23.08 20.32 23C20.95 22.91 22.25 22.21 22.52 21.45C22.79 20.69 22.38 19.55 22.05 19.38Z" fill="#0A0B0E"/>
              </svg>
              <span>WhatsApp: 03034063970</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 992px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
