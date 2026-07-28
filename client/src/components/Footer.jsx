import React from 'react';
import { Link } from 'react-router-dom';
import KinzeiLogo from './KinzeiLogo';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#F8F9FA',
      borderTop: '2px solid rgba(158, 123, 59, 0.25)',
      paddingTop: '60px',
      paddingBottom: '30px',
      color: '#4B5563'
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
            <KinzeiLogo height={70} />
            <p style={{ marginTop: '20px', fontSize: '0.9rem', lineHeight: '1.7', color: '#4B5563' }}>
              Kinzei Consultants (Private) Limited provides expert corporate tax, statutory audit, retainership, SECP registration, and international tax advisory services to navigate regulatory requirements with confidence, accuracy, and transparency.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="mailto:kinzeiconsultants@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9E7B3B', fontWeight: 600, fontSize: '0.9rem' }}>
                <Mail size={16} color="#9E7B3B" />
                <span>kinzeiconsultants@gmail.com</span>
              </a>
              <a href="tel:03034063970" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#111827', fontWeight: 800, fontSize: '0.95rem' }}>
                <Phone size={16} color="#9E7B3B" />
                <span>03034063970</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: '#111827', fontSize: '1.1rem', marginBottom: '20px', position: 'relative', paddingBottom: '8px', fontWeight: 800 }}>
              Quick Links
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '35px', height: '3px', backgroundColor: '#9E7B3B', borderRadius: '2px' }}></span>
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
                  <Link to={link.path} style={{ color: '#4B5563', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                    <ArrowRight size={12} color="#9E7B3B" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services List */}
          <div>
            <h4 style={{ color: '#111827', fontSize: '1.1rem', marginBottom: '20px', position: 'relative', paddingBottom: '8px', fontWeight: 800 }}>
              Core Services
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '35px', height: '3px', backgroundColor: '#9E7B3B', borderRadius: '2px' }}></span>
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
                  <Link to={`/services/detail/${s.id}`} style={{ color: '#4B5563', transition: 'color 0.2s', fontWeight: 500 }}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Office Location & Hours */}
          <div>
            <h4 style={{ color: '#111827', fontSize: '1.1rem', marginBottom: '20px', position: 'relative', paddingBottom: '8px', fontWeight: 800 }}>
              Office Location
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '35px', height: '3px', backgroundColor: '#9E7B3B', borderRadius: '2px' }}></span>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <MapPin size={22} color="#9E7B3B" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#374151' }}>Office No. 1009, 10th Floor, Al-Hafeez Heights, 65-D1, Gulberg III, Lahore</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Clock size={18} color="#9E7B3B" style={{ flexShrink: 0 }} />
                <span style={{ color: '#374151' }}>9 AM - 6 PM , Monday - Friday</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div style={{
          borderTop: '1px solid #E5E7EB',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.85rem',
          color: '#6B7280'
        }}>
          <div>
            Copyright © 2026 | All Rights Reserved by <strong style={{ color: '#111827' }}>Kinzei Consultants (Private) Limited</strong>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link to="/privacy-policy" style={{ color: '#4B5563', transition: 'color 0.2s' }}>
              Privacy Policy
            </Link>
            <span style={{ color: '#D1D5DB' }}>|</span>
            <Link to="/terms-and-conditions" style={{ color: '#4B5563', transition: 'color 0.2s' }}>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
