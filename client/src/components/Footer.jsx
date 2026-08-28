import React from 'react';
import { Link } from 'react-router-dom';
import KinzeiLogo from './KinzeiLogo';
import { MapPin, Phone, Mail, Clock, ArrowRight, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #8C6B2F 0%, #5E461A 100%)',
      borderTop: '3px solid #FFD700',
      paddingTop: '65px',
      paddingBottom: '25px',
      color: '#F3F4F6'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '45px'
        }}>
          {/* Col 1: About & Info with Logo */}
          <div>
            <KinzeiLogo height={70} isBrownHeader={true} />
            <p style={{ marginTop: '20px', fontSize: '0.9rem', lineHeight: '1.7', color: '#E5E7EB' }}>
              Kinzei Consultants (Private) Limited provides expert corporate tax, statutory audit, retainership, SECP registration, and international tax advisory services to navigate regulatory requirements with confidence, accuracy, and transparency.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="mailto:info@kinzeiconsultants.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFD700', fontWeight: 600, fontSize: '0.9rem' }}>
                <Mail size={16} color="#FFD700" />
                <span>info@kinzeiconsultants.com</span>
              </a>
              <a href="tel:03034063970" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontWeight: 800, fontSize: '0.95rem' }}>
                <Phone size={16} color="#FFD700" />
                <span>03034063970</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '6px' }}>
                <a 
                  href="https://www.linkedin.com/in/amina-batool-kc?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                  target="_blank" 
                  rel="noreferrer" 
                  title="LinkedIn"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '32px', height: '32px', borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFD700',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0A66C2'; e.currentTarget.style.color = '#FFFFFF'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#FFD700'; }}
                >
                  <Linkedin size={16} />
                </a>
                <a 
                  href="https://www.instagram.com/kinzei_consultants?igsi=MWtncDBkM2ZtNHA1" 
                  target="_blank" 
                  rel="noreferrer" 
                  title="Instagram"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '32px', height: '32px', borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFD700',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#E1306C'; e.currentTarget.style.color = '#FFFFFF'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#FFD700'; }}
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '20px', position: 'relative', paddingBottom: '8px', fontWeight: 800 }}>
              Quick Links
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '35px', height: '3px', backgroundColor: '#FFD700', borderRadius: '2px' }}></span>
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Tax Calculator', path: '/tax-calculator' },
                { name: 'Our Team', path: '/team' },
                { name: 'Contact Us', path: '/contact' },
              ].map(link => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    style={{ color: '#E5E7EB', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FFD700'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#E5E7EB'}
                  >
                    <ArrowRight size={12} color="#FFD700" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services List */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '20px', position: 'relative', paddingBottom: '8px', fontWeight: 800 }}>
              Core Services
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '35px', height: '3px', backgroundColor: '#FFD700', borderRadius: '2px' }}></span>
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              {[
                { name: 'Audit & Assurance', id: 'audit-assurance' },
                { name: 'Taxation Services', id: 'taxation-services' },
                { name: 'Business Registration', id: 'business-registration-services' },
                { name: 'Accounting Software', id: 'accounting-software-services' },
                { name: 'Retainership Services', id: 'retainership-services' },
                { name: 'Business Advisory', id: 'business-advisory-services' },
                { name: 'IT Audit', id: 'it-audit-services' },
                { name: 'UK Corporate Registration', id: 'uk-tax-advisory' },
                { name: 'US Registration & Tax', id: 'us-tax-advisory' },
              ].map(s => (
                <li key={s.id}>
                  <Link 
                    to={`/services/detail/${s.id}`} 
                    style={{ color: '#E5E7EB', transition: 'color 0.2s', fontWeight: 500 }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FFD700'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#E5E7EB'}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Office Location & Hours */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '20px', position: 'relative', paddingBottom: '8px', fontWeight: 800 }}>
              Office Location
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '35px', height: '3px', backgroundColor: '#FFD700', borderRadius: '2px' }}></span>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <MapPin size={22} color="#FFD700" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#F3F4F6' }}>First Floor, Plot # 14, Main Road, Block 1 College Rd, Sector C2 Block 1 Twp Sector C 2 Township, Lahore, 54770</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Clock size={18} color="#FFD700" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#F3F4F6' }}>Morning: 10:00 AM – 6:00 PM<br/>Evening: 8:00 PM – 4:00 AM (PKT)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.85rem',
          color: '#D1D5DB'
        }}>
          <div>
            Copyright © 2026 | All Rights Reserved by <strong style={{ color: '#FFFFFF' }}>Kinzei Consultants (Private) Limited</strong>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link 
              to="/privacy-policy" 
              style={{ color: '#E5E7EB', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFD700'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#E5E7EB'}
            >
              Privacy Policy
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
            <Link 
              to="/terms-and-conditions" 
              style={{ color: '#E5E7EB', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFD700'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#E5E7EB'}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
