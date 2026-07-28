import React from 'react';
import { Mail, Calendar, Facebook, Linkedin, ShieldCheck } from 'lucide-react';

export default function TopHeader({ onOpenSchedule }) {
  return (
    <div style={{ 
      backgroundColor: '#F8F9FA', 
      borderBottom: '1px solid #E5E7EB', 
      fontSize: '0.85rem',
      padding: '8px 0',
      color: '#374151'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        
        {/* Left Side: Email & Operating Hours (Clean & Professional, No duplicate phone number) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="mailto:kinzeiconsultants@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#8C6B2F', fontWeight: 700, transition: 'color 0.2s' }}>
            <Mail size={14} color="#8C6B2F" />
            <span>kinzeiconsultants@gmail.com</span>
          </a>
          <span style={{ color: '#D1D5DB' }}>|</span>
          <span style={{ fontSize: '0.82rem', color: '#4B5563', fontWeight: 600 }}>
            Mon - Fri: 9 AM - 6 PM PKT
          </span>
          <span style={{ color: '#D1D5DB' }}>|</span>
          <span style={{ fontSize: '0.78rem', backgroundColor: '#FEF3C7', color: '#92400E', padding: '2px 8px', borderRadius: '12px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <ShieldCheck size={13} />
            <span>FBR & SECP Registered Firm</span>
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
          </div>

          <button 
            onClick={onOpenSchedule}
            style={{ 
              backgroundColor: '#8C6B2F',
              color: '#FFFFFF',
              border: 'none',
              padding: '6px 16px', 
              fontSize: '0.8rem', 
              borderRadius: '20px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 2px 6px rgba(140, 107, 47, 0.3)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7A5C24'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8C6B2F'}
          >
            <Calendar size={13} />
            <span>Book Schedule Now</span>
          </button>
        </div>

      </div>
    </div>
  );
}
