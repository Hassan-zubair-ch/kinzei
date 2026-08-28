import React from 'react';
import { Mail, Calendar, Linkedin, Instagram, ShieldCheck, Clock } from 'lucide-react';

export default function TopHeader({ onOpenSchedule }) {
  return (
    <div style={{ 
      backgroundColor: '#0F172A', 
      borderBottom: '1px solid rgba(197, 160, 89, 0.3)', 
      fontSize: '0.82rem',
      padding: '7px 0',
      color: '#E2E8F0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        
        {/* Left Side: Email, Two-Shift Working Hours & Compliance Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          
          {/* Email */}
          <a 
            href="mailto:info@kinzeiconsultants.com" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              color: '#F8FAFC', 
              fontWeight: 700, 
              textDecoration: 'none',
              transition: 'color 0.2s' 
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#C5A059'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#F8FAFC'}
          >
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'rgba(197, 160, 89, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mail size={12} color="#C5A059" />
            </div>
            <span>info@kinzeiconsultants.com</span>
          </a>

          <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>

          {/* Working Hours: Morning & Evening Shifts */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#CBD5E1', fontWeight: 600, fontSize: '0.8rem' }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'rgba(197, 160, 89, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Clock size={12} color="#C5A059" />
            </div>
            <span>
              <strong style={{ color: '#F8FAFC' }}>Morning:</strong> 10:00 AM – 6:00 PM &nbsp;|&nbsp; <strong style={{ color: '#F8FAFC' }}>Evening:</strong> 8:00 PM – 4:00 AM (PKT)
            </span>
          </div>

          <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>

          {/* FBR & SECP Registered Badge */}
          <div style={{ 
            fontSize: '0.75rem', 
            backgroundColor: 'rgba(197, 160, 89, 0.12)', 
            color: '#FCD34D', 
            border: '1px solid rgba(197, 160, 89, 0.3)',
            padding: '3px 10px', 
            borderRadius: '20px', 
            fontWeight: 800, 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '5px',
            letterSpacing: '0.03em'
          }}>
            <ShieldCheck size={13} color="#FCD34D" />
            <span>FBR &amp; SECP Registered</span>
          </div>

        </div>

        {/* Right Side: Social Media Channels & Executive Schedule CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          
          {/* Social Icons with subtle glow hover */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingRight: '10px', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
            <a 
              href="https://www.linkedin.com/in/amina-batool-kc?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noreferrer" 
              title="Official LinkedIn" 
              style={{ 
                width: '26px', 
                height: '26px', 
                borderRadius: '6px', 
                backgroundColor: 'rgba(255,255,255,0.06)', 
                color: '#94A3B8', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0A66C2'; e.currentTarget.style.color = '#FFFFFF'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#94A3B8'; }}
            >
              <Linkedin size={14} />
            </a>
            <a 
              href="https://www.instagram.com/kinzei_consultants?igsi=MWtncDBkM2ZtNHA1" 
              target="_blank" 
              rel="noreferrer" 
              title="Official Instagram" 
              style={{ 
                width: '26px', 
                height: '26px', 
                borderRadius: '6px', 
                backgroundColor: 'rgba(255,255,255,0.06)', 
                color: '#94A3B8', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#E1306C'; e.currentTarget.style.color = '#FFFFFF'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#94A3B8'; }}
            >
              <Instagram size={14} />
            </a>
          </div>

          {/* Book Schedule Button */}
          <button 
            onClick={onOpenSchedule}
            style={{ 
              background: 'linear-gradient(135deg, #C5A059 0%, #9E7B3B 50%, #7A5C24 100%)',
              color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '6px 14px', 
              fontSize: '0.78rem', 
              borderRadius: '20px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 2px 8px rgba(158, 123, 59, 0.35)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(158, 123, 59, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(158, 123, 59, 0.35)';
            }}
          >
            <Calendar size={13} />
            <span>Book Consultation</span>
          </button>
        </div>

      </div>
    </div>
  );
}
