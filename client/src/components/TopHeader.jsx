import React from 'react';
import { Phone, Mail, Calendar, Facebook, Linkedin } from 'lucide-react';

export default function TopHeader({ onOpenSchedule }) {
  return (
    <div style={{ 
      backgroundColor: '#F8F9FA', 
      borderBottom: '1px solid #E5E7EB', 
      fontSize: '0.85rem',
      padding: '8px 0',
      color: '#4B5563'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        
        {/* Left Side: Contact Details */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="tel:03034063970" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#9E7B3B', fontWeight: 700 }}>
            <Phone size={14} color="#9E7B3B" />
            <span>03034063970</span>
          </a>
          <a href="mailto:kinzeiconsultants@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#374151', transition: 'color 0.2s' }}>
            <Mail size={14} color="#9E7B3B" />
            <span>kinzeiconsultants@gmail.com</span>
          </a>
          <span style={{ color: '#D1D5DB' }}>|</span>
          <span style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 600 }}>
            Mon - Fri: 9 AM - 6 PM
          </span>
        </div>

        {/* Right Side: Social Media & Action CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingRight: '12px', borderRight: '1px solid #E5E7EB' }}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook" style={{ color: '#4B5563', transition: 'color 0.2s' }}>
              <Facebook size={14} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn" style={{ color: '#4B5563', transition: 'color 0.2s' }}>
              <Linkedin size={14} />
            </a>
            <a href="mailto:kinzeiconsultants@gmail.com" title="Email Us" style={{ color: '#4B5563', transition: 'color 0.2s' }}>
              <Mail size={14} />
            </a>
          </div>

          <button 
            onClick={onOpenSchedule}
            className="btn-primary" 
            style={{ 
              padding: '6px 16px', 
              fontSize: '0.8rem', 
              borderRadius: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}
          >
            <Calendar size={13} />
            <span>Book Schedule Now</span>
          </button>
        </div>

      </div>
    </div>
  );
}
