import React from 'react';
import { Phone, Mail, Calendar, Facebook, Linkedin } from 'lucide-react';

export default function TopHeader({ onOpenSchedule }) {
  return (
    <div style={{ 
      backgroundColor: '#07080A', 
      borderBottom: '1px solid rgba(255, 255, 255, 0.06)', 
      fontSize: '0.85rem',
      padding: '8px 0',
      color: '#9BA4B5'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        
        {/* Left Side: Contact Details */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="tel:03034063970" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#E5C158', fontWeight: 600 }}>
            <Phone size={14} />
            <span>03034063970</span>
          </a>
          <a href="mailto:kinzeiconsultants@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#B3C0D6', transition: 'color 0.2s' }}>
            <Mail size={14} />
            <span>kinzeiconsultants@gmail.com</span>
          </a>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span style={{ fontSize: '0.8rem', color: '#7E899C' }}>
            Mon - Fri: 9 AM - 6 PM
          </span>
        </div>

        {/* Right Side: Social Media & Action CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingRight: '12px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook" style={{ color: '#9BA4B5', transition: 'color 0.2s' }}>
              <Facebook size={14} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn" style={{ color: '#9BA4B5', transition: 'color 0.2s' }}>
              <Linkedin size={14} />
            </a>
            <a href="mailto:kinzeiconsultants@gmail.com" title="Email Us" style={{ color: '#9BA4B5', transition: 'color 0.2s' }}>
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
