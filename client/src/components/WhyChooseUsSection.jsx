import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import KinzeiLogo from './KinzeiLogo';

export default function WhyChooseUsSection({ onOpenSchedule }) {
  const navigate = useNavigate();

  const bulletPoints = [
    "3+ years of professional experience (Est. 2023)",
    "Qualified team of CA, ACCA, CPA, and ACMA members",
    "Complete audit, tax, litigation & corporate secretarial services",
    "Ethical, confidential, and reliable client-centric approach",
    "Client-focused, cost-effective, and practical business solutions"
  ];

  return (
    <section style={{
      backgroundColor: '#FFFFFF',
      padding: '85px 0 95px 0',
      color: '#111827',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid #E5E7EB',
      borderBottom: '1px solid #E5E7EB'
    }}>
      <div className="container">
        <div 
          className="why-us-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Image with Floating 3+ Years Badge & Favicon Logo */}
          <div style={{ position: 'relative', paddingLeft: '15px', paddingTop: '15px' }}>
            
            {/* Main Desk Image Container */}
            <div style={{
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.08)',
              position: 'relative',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop" 
                alt="Kinzei Consultants & Javed Zafar & Co. Financial Advisory Desk"
                style={{
                  width: '100%',
                  height: '490px',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'contrast(1.02) brightness(0.98)'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=900&auto=format&fit=crop';
                }}
              />

              {/* Bottom Watermark Badge with Site Favicon & Official Text */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                right: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(8px)',
                padding: '12px 20px',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                border: '1px solid rgba(196, 154, 44, 0.4)'
              }}>
                <KinzeiLogo height={42} isBrownHeader={false} />
              </div>
            </div>

            {/* Top-Left Floating Badge: 3+ Years Experience */}
            <div style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              backgroundColor: '#FFFFFF',
              padding: '24px 30px',
              borderRadius: '8px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12)',
              border: '2px solid #D4A017',
              textAlign: 'center',
              zIndex: 10,
              minWidth: '170px'
            }}>
              <div style={{
                fontSize: '2.8rem',
                fontWeight: 900,
                color: '#D4A017',
                lineHeight: 1,
                fontFamily: 'var(--font-heading)'
              }}>
                3+
              </div>
              <div style={{
                fontSize: '0.88rem',
                fontWeight: 800,
                color: '#111827',
                marginTop: '6px',
                lineHeight: 1.3
              }}>
                Years of<br />Experience
              </div>
            </div>

          </div>

          {/* Right Column: Why Choose Us Content */}
          <div>
            <div style={{
              fontSize: '1.08rem',
              color: '#D4A017',
              fontStyle: 'italic',
              fontWeight: 700,
              marginBottom: '10px',
              fontFamily: 'Georgia, serif'
            }}>
              Why Choose Us
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
              lineHeight: 1.2,
              marginBottom: '20px',
              fontWeight: 800,
              color: '#111827',
              fontFamily: 'var(--font-heading)'
            }}>
              Trusted Financial &amp; CA Partners for Your Business
            </h2>

            <p style={{
              fontSize: '0.98rem',
              color: '#1E293B',
              lineHeight: 1.75,
              marginBottom: '24px',
              fontWeight: 500
            }}>
              <strong>Kinzei Consultants (Private) Limited</strong>, in association with <strong>Javed Zafar &amp; Co. Chartered Accountants</strong>, is a premier professional firm offering statutory audit, accounting, taxation, and corporate advisory services to businesses across diverse industries. Established in <strong>2023</strong> with over <strong>3+ years of dedicated experience</strong>, we deliver practical solutions, transparent guidance, and dependable execution.
            </p>

            {/* Subtle Divider Line */}
            <div style={{ width: '100%', height: '1px', backgroundColor: '#E5E7EB', marginBottom: '24px' }} />

            {/* Bullet Points with Gold Arrow Circle Icons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
              {bulletPoints.map((text, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    border: '1.8px solid #D4A017',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D4A017',
                    flexShrink: 0
                  }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 900, lineHeight: 1 }}>➔</span>
                  </div>
                  <span style={{
                    fontSize: '0.96rem',
                    color: '#1F2937',
                    fontWeight: 600
                  }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* 2 Buttons Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate('/about')}
                style={{
                  background: 'linear-gradient(135deg, #E5B338 0%, #D4A017 50%, #B8860B 100%)',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '13px 32px',
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(212, 160, 23, 0.35)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 22px rgba(212, 160, 23, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 160, 23, 0.35)';
                }}
              >
                LEARN MORE
              </button>

              <button
                onClick={() => navigate('/services')}
                style={{
                  backgroundColor: 'transparent',
                  color: '#D4A017',
                  border: '1.8px solid #D4A017',
                  padding: '12px 30px',
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFBEB';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                OUR SERVICES
              </button>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .why-us-grid {
            grid-template-columns: 1fr !important;
            gap: 45px !important;
          }
        }
      `}</style>
    </section>
  );
}
