import React from 'react';
import { Link } from 'react-router-dom';
import KinzeiLogo from './KinzeiLogo';
import { MapPin, Phone, Mail, Clock, ArrowRight, Linkedin, Instagram, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #8C6B2F 0%, #7A5C24 100%)',
      borderTop: '2px solid rgba(255, 215, 0, 0.4)',
      paddingTop: '55px',
      paddingBottom: '24px',
      color: '#F3F4F6',
      position: 'relative'
    }}>
      <div className="container">
        {/* Main 4-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr 1fr 1.1fr',
          gap: '40px',
          marginBottom: '40px'
        }} className="footer-main-grid">
          
          {/* Col 1: Brand Profile & Direct Contact */}
          <div>
            <KinzeiLogo height={56} isBrownHeader={true} />
            <p style={{ marginTop: '16px', fontSize: '0.88rem', lineHeight: '1.65', color: '#F1F5F9', maxWidth: '320px', fontWeight: 500 }}>
              Kinzei Consultants (Private) Limited delivers premier corporate taxation, statutory audit, corporate secretarial, and international desk advisory across 6 key jurisdictions.
            </p>

            <div style={{ marginTop: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a 
                href="mailto:info@kinzeiconsultants.com" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#FFFFFF', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s ease', fontWeight: 600 }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFD700'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
              >
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={13} color="#FFD700" />
                </div>
                <span>info@kinzeiconsultants.com</span>
              </a>

              <a 
                href="tel:03034063970" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#FFFFFF', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s ease', fontWeight: 600 }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFD700'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
              >
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={13} color="#FFD700" />
                </div>
                <span>03034063970</span>
              </a>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '18px' }}>
              <a 
                href="https://www.linkedin.com/in/amina-batool-kc?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                rel="noreferrer" 
                title="LinkedIn"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '34px', height: '34px', borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF',
                  transition: 'all 0.2s ease', textDecoration: 'none'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0A66C2'; e.currentTarget.style.color = '#FFFFFF'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'; e.currentTarget.style.color = '#FFFFFF'; }}
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
                  width: '34px', height: '34px', borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF',
                  transition: 'all 0.2s ease', textDecoration: 'none'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#E1306C'; e.currentTarget.style.color = '#FFFFFF'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'; e.currentTarget.style.color = '#FFFFFF'; }}
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ 
              color: '#FFFFFF', 
              fontSize: '1.05rem', 
              marginBottom: '16px', 
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.3px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ width: '4px', height: '14px', backgroundColor: '#FFD700', borderRadius: '2px' }} />
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.88rem' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services Catalog', path: '/services' },
                { name: 'Tax Calculator', path: '/tax-calculator' },
                { name: 'Advisory Team', path: '/team' },
                { name: 'Contact Us', path: '/contact' },
              ].map(link => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    style={{ color: '#F1F5F9', transition: 'all 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600, textDecoration: 'none' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#FFD700'; e.currentTarget.style.transform = 'translateX(3px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#F1F5F9'; e.currentTarget.style.transform = 'translateX(0)'; }}
                  >
                    <ArrowRight size={12} color="#FFD700" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Practice Areas */}
          <div>
            <h4 style={{ 
              color: '#FFFFFF', 
              fontSize: '1.05rem', 
              marginBottom: '16px', 
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.3px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ width: '4px', height: '14px', backgroundColor: '#FFD700', borderRadius: '2px' }} />
              Practice Areas
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.88rem' }}>
              {[
                { name: 'In-House Dedicated Staffing & Secondment', id: 'inhouse-specialist-staffing' },
                { name: 'Audit & Assurance', id: 'audit-assurance' },
                { name: 'Taxation & FBR Litigation', id: 'taxation-services' },
                { name: 'Corporate Business Registration', id: 'business-registration-services' },
                { name: 'Monthly Retainership Advisory', id: 'retainership-services' },
                { name: 'US & UK International Desk', id: 'us-tax-advisory' },
                { name: 'Information Technology Audit', id: 'it-audit-services' },
              ].map(s => (
                <li key={s.id}>
                  <Link 
                    to={`/services/detail/${s.id}`} 
                    style={{ color: '#F1F5F9', transition: 'all 0.2s ease', fontWeight: 500, textDecoration: 'none', display: 'inline-block' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#FFD700'; e.currentTarget.style.transform = 'translateX(3px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#F1F5F9'; e.currentTarget.style.transform = 'translateX(0)'; }}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Office Location & Hours */}
          <div>
            <h4 style={{ 
              color: '#FFFFFF', 
              fontSize: '1.05rem', 
              marginBottom: '16px', 
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.3px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ width: '4px', height: '14px', backgroundColor: '#FFD700', borderRadius: '2px' }} />
              Office &amp; Timings
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.86rem' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} color="#FFD700" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#F1F5F9', lineHeight: '1.5' }}>First Floor, Plot # 14, Main Road, Block 1 College Rd, Sector C2 Township, Lahore, 54770</span>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Clock size={16} color="#FFD700" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#F1F5F9', lineHeight: '1.5' }}>
                  <strong style={{ color: '#FFFFFF' }}>Morning:</strong> 10:00 AM – 6:00 PM<br/>
                  <strong style={{ color: '#FFFFFF' }}>Evening:</strong> 8:00 PM – 4:00 AM
                </span>
              </div>

              <div style={{ 
                marginTop: '4px',
                padding: '8px 12px',
                borderRadius: '8px',
                backgroundColor: 'rgba(0, 0, 0, 0.18)',
                border: '1px solid rgba(255, 215, 0, 0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.78rem',
                color: '#FFD700',
                fontWeight: 700
              }}>
                <ShieldCheck size={14} color="#FFD700" />
                <span>FBR &amp; SECP Registered Practice</span>
              </div>
            </div>
          </div>

        </div>

        {/* Clean Copyright & Legal Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.82rem',
          color: '#F1F5F9'
        }}>
          <div>
            Copyright © 2026 <strong style={{ color: '#FFFFFF' }}>Kinzei Consultants (Private) Limited</strong>. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link 
              to="/privacy-policy" 
              style={{ color: '#F1F5F9', textDecoration: 'none', transition: 'color 0.2s ease', fontWeight: 500 }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFD700'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#F1F5F9'}
            >
              Privacy Policy
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>•</span>
            <Link 
              to="/terms-and-conditions" 
              style={{ color: '#F1F5F9', textDecoration: 'none', transition: 'color 0.2s ease', fontWeight: 500 }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFD700'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#F1F5F9'}
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 30px !important;
          }
        }
        @media (max-width: 580px) {
          .footer-main-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </footer>
  );
}
