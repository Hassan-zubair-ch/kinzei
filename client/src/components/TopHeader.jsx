import React from 'react';
import { Mail, Calendar, Linkedin, Instagram, ShieldCheck, Clock } from 'lucide-react';

export default function TopHeader({ onOpenSchedule }) {
  return (
    <div 
      className="top-header-bar"
      style={{ 
        backgroundColor: '#0B1120', 
        borderBottom: '1px solid rgba(212, 160, 23, 0.25)', 
        fontSize: '0.82rem',
        padding: '8px 0',
        color: '#E2E8F0'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
        
        {/* Left Side: Email, Two-Shift Working Hours & Compliance Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          
          {/* Email */}
          <a 
            href="mailto:info@kinzeiconsultants.com" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: '#F8FAFC', 
              fontWeight: 700, 
              textDecoration: 'none',
              transition: 'color 0.2s ease' 
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#D4A017'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#F8FAFC'}
          >
            <div style={{ 
              width: '24px', 
              height: '24px', 
              borderRadius: '6px', 
              backgroundColor: 'rgba(212, 160, 23, 0.15)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <Mail size={13} color="#D4A017" />
            </div>
            <span>info@kinzeiconsultants.com</span>
          </a>

          {/* Working Hours: Morning & Evening Shifts */}
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            color: '#E2E8F0', 
            fontWeight: 600, 
            fontSize: '0.82rem',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            padding: '4px 12px',
            borderRadius: '20px'
          }}>
            <div style={{ 
              width: '20px', 
              height: '20px', 
              borderRadius: '50%', 
              backgroundColor: 'rgba(212, 160, 23, 0.2)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <Clock size={12} color="#D4A017" />
            </div>
            <span>
              <span style={{ color: '#D4A017', fontWeight: 800 }}>Morning:</span> 10:00 AM – 6:00 PM &nbsp;&nbsp; <span style={{ color: '#D4A017', fontWeight: 800 }}>Evening:</span> 8:00 PM – 4:00 AM
            </span>
          </div>

          {/* FBR & SECP Registered Badge */}
          <div style={{ 
            fontSize: '0.76rem', 
            backgroundColor: 'rgba(212, 160, 23, 0.12)', 
            color: '#FCD34D', 
            border: '1px solid rgba(212, 160, 23, 0.4)',
            padding: '4px 12px', 
            borderRadius: '20px', 
            fontWeight: 800, 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '6px',
            letterSpacing: '0.02em'
          }}>
            <ShieldCheck size={13} color="#D4A017" />
            <span>FBR &amp; SECP Registered</span>
          </div>

        </div>

        {/* Right Side: Social Media Channels & Executive Schedule CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          
          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a 
              href="https://www.linkedin.com/in/amina-batool-kc?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noreferrer" 
              title="Official LinkedIn" 
              style={{ 
                width: '28px', 
                height: '28px', 
                borderRadius: '8px', 
                backgroundColor: 'rgba(255,255,255,0.06)', 
                color: '#CBD5E1', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0A66C2'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#CBD5E1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Linkedin size={15} />
            </a>
            <a 
              href="https://www.instagram.com/kinzei_consultants?igsi=MWtncDBkM2ZtNHA1" 
              target="_blank" 
              rel="noreferrer" 
              title="Official Instagram" 
              style={{ 
                width: '28px', 
                height: '28px', 
                borderRadius: '8px', 
                backgroundColor: 'rgba(255,255,255,0.06)', 
                color: '#CBD5E1', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#E1306C'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#CBD5E1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Instagram size={15} />
            </a>
          </div>

          {/* Book Schedule Button */}
          <button 
            onClick={onOpenSchedule}
            style={{ 
              background: 'linear-gradient(135deg, #E5B338 0%, #D4A017 50%, #B8860B 100%)',
              color: '#FFFFFF',
              border: 'none',
              padding: '6px 16px', 
              fontSize: '0.78rem', 
              borderRadius: '20px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 2px 10px rgba(212, 160, 23, 0.4)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(212, 160, 23, 0.55)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(212, 160, 23, 0.4)';
            }}
          >
            <Calendar size={13} />
            <span>Book Consultation</span>
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .top-header-bar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
