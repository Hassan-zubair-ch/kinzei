import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import KinzeiLogo from './KinzeiLogo';

export default function WhyChooseUsSection({ onOpenSchedule }) {
  const navigate = useNavigate();

  const bulletPoints = [
    "15+ years of professional experience",
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
          {/* Left Column: Image with Floating 15+ Years Badge & Favicon Logo */}
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

            {/* Top-Left Floating Badge: 15+ Years Experience (Matching Target Screenshot) */}
            <div style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              backgroundColor: '#FFFFFF',
              padding: '24px 30px',
              borderRadius: '4px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12)',
              border: '2px solid #C49A2C',
              textAlign: 'center',
              zIndex: 10,
              minWidth: '170px'
            }}>
              <div style={{
                fontSize: '2.8rem',
                fontWeight: 900,
                color: '#C49A2C',
                lineHeight: 1,
                fontFamily: 'var(--font-heading)'
              }}>
                15+
              </div>
              <div style={{
                fontSize: '0.88rem',
                fontWeight: 700,
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
              color: '#C49A2C',
              fontStyle: 'italic',
              fontWeight: 600,
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
              <strong>Kinzei Consultants (Private) Limited</strong>, operating together with <strong>Javed Zafar &amp; Co. Chartered Accountants</strong>, is a premier professional firm offering statutory audit, accounting, taxation, and corporate advisory services to businesses across diverse industries. Guided by senior leadership with over <strong>15+ years of experience</strong> (ex-Deloitte &amp; leading advisory practices), we deliver practical solutions, transparent guidance, and dependable execution.
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
                    border: '1.8px solid #C49A2C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C49A2C',
                    flexShrink: 0
                  }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 900, lineHeight: 1 }}>➔</span>
                  </div>
                  <span style={{
                    fontSize: '0.96rem',
                    color: '#374151',
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
                  backgroundColor: '#C49A2C',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '13px 32px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(196, 154, 44, 0.3)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#B28923';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#C49A2C';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                LEARN MORE
              </button>

              <button
                onClick={() => navigate('/services')}
                style={{
                  backgroundColor: 'transparent',
                  color: '#C49A2C',
                  border: '1.8px solid #C49A2C',
                  padding: '12px 30px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FEF3C7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
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
