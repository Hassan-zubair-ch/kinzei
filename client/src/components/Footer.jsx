import React from 'react';
import { Link } from 'react-router-dom';
import KinzeiLogo from './KinzeiLogo';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#07080B',
      borderTop: '1px solid rgba(212, 175, 55, 0.2)',
      paddingTop: '60px',
      paddingBottom: '30px',
      color: '#9BA4B5'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Col 1: About & Info with Clean 60px Logo */}
          <div>
            <KinzeiLogo height={60} />
            <p style={{ marginTop: '20px', fontSize: '0.9rem', lineHeight: '1.7', color: '#8A94A6' }}>
              Kinzei Consultants (Private) Limited provides expert corporate tax, statutory audit, retainership, SECP registration, and international tax advisory services to navigate regulatory requirements with confidence, accuracy, and transparency.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="mailto:kinzeiconsultants@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5C158', fontSize: '0.9rem' }}>
                <Mail size={16} />
                <span>kinzeiconsultants@gmail.com</span>
              </a>
              <a href="tel:03034063970" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem' }}>
                <Phone size={16} color="#D4AF37" />
                <span>03034063970</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '20px', position: 'relative', paddingBottom: '8px' }}>
              Quick Links
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '35px', height: '2px', backgroundColor: '#D4AF37' }}></span>
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
                  <Link to={link.path} style={{ color: '#9BA4B5', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ArrowRight size={12} color="#D4AF37" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services List */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '20px', position: 'relative', paddingBottom: '8px' }}>
              Core Services
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '35px', height: '2px', backgroundColor: '#D4AF37' }}></span>
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
                  <Link to={`/services/detail/${s.id}`} style={{ color: '#9BA4B5', transition: 'color 0.2s' }}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Office Location & Hours */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '20px', position: 'relative', paddingBottom: '8px' }}>
              Office Location
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '35px', height: '2px', backgroundColor: '#D4AF37' }}></span>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <MapPin size={22} color="#D4AF37" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Office No. 1009, 10th Floor, Al-Hafeez Heights, 65-D1, Gulberg III, Lahore</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Clock size={18} color="#D4AF37" style={{ flexShrink: 0 }} />
                <span>9 AM - 6 PM , Monday - Friday</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.85rem',
          color: '#7E899C'
        }}>
          <div>
            Copyright © 2026 | All Rights Reserved by <strong>Kinzei Consultants (Private) Limited</strong>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link to="/privacy-policy" style={{ color: '#9BA4B5', transition: 'color 0.2s' }}>
              Privacy Policy
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <Link to="/terms-and-conditions" style={{ color: '#9BA4B5', transition: 'color 0.2s' }}>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
