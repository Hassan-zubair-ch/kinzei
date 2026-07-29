import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WhyChooseUsSection({ onOpenSchedule }) {
  const navigate = useNavigate();

  const bulletPoints = [
    "15+ years of professional experience",
    "Qualified and experienced team",
    "Complete audit, tax & advisory services",
    "Ethical, confidential, and reliable",
    "Client-focused and practical solutions"
  ];

  return (
    <section style={{
      backgroundColor: '#F8F9FA',
      padding: '90px 0 100px 0',
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
            gap: '65px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Image with Floating 15+ Years Badge & Logo Overlay */}
          <div style={{ position: 'relative', paddingLeft: '20px', paddingTop: '20px' }}>
            
            {/* Main Desk Image Container */}
            <div style={{
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
              position: 'relative',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop" 
                alt="M. Irfan & Co. Financial Advisory Desk"
                style={{
                  width: '100%',
                  height: '480px',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'contrast(1.03) brightness(0.98)'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=900&auto=format&fit=crop';
                }}
              />

              {/* Bottom-Right Logo Watermark Badge */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                right: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                padding: '14px 22px',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                border: '1px solid rgba(196, 154, 44, 0.3)'
              }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  backgroundColor: '#0F2C4C',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C49A2C',
                  fontWeight: 900,
                  fontSize: '1.2rem'
                }}>
                  K
                </div>
                <div>
                  <div style={{
                    fontSize: '1.05rem',
                    fontWeight: 900,
                    color: '#0F2C4C',
                    letterSpacing: '0.5px',
                    lineHeight: 1.1
                  }}>
                    KINZEI CONSULTANTS
                  </div>
                  <div style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: '#C49A2C',
                    letterSpacing: '1px',
                    marginTop: '3px',
                    textTransform: 'uppercase'
                  }}>
                    (Private) Limited
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Top-Left 15+ Years Badge */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              backgroundColor: '#FFFFFF',
              border: '3.5px solid #C49A2C',
              padding: '24px 28px',
              textAlign: 'center',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
              zIndex: 10,
              minWidth: '160px'
            }}>
              <div style={{
                fontSize: '3.2rem',
                fontWeight: 900,
                color: '#C49A2C',
                lineHeight: 1,
                fontFamily: 'var(--font-heading)'
              }}>
                15+
              </div>
              <div style={{
                fontSize: '0.92rem',
                fontWeight: 700,
                color: '#1F2937',
                marginTop: '6px',
                lineHeight: 1.25,
                fontFamily: 'var(--font-body)'
              }}>
                Years of<br />Experience
              </div>
            </div>

          </div>

          {/* Right Column: Why Choose Us Content */}
          <div>
            <div style={{
              fontSize: '1.05rem',
              fontWeight: '600',
              color: '#C49A2C',
              fontStyle: 'italic',
              marginBottom: '8px',
              fontFamily: 'Georgia, serif'
            }}>
              Why Choose Us
            </div>

            <h2 style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 2.7rem)',
              fontWeight: 800,
              color: '#111827',
              lineHeight: 1.2,
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}>
              Trusted Financial &amp; Corporate<br />Partners for Your Business
            </h2>

            <p style={{
              fontSize: '1.02rem',
              color: '#4B5563',
              lineHeight: '1.7',
              marginBottom: '28px',
              fontFamily: 'var(--font-body)'
            }}>
              <strong style={{ color: '#111827' }}>Kinzei Consultants (Private) Limited</strong> is a premier corporate tax, statutory audit, and financial advisory firm serving businesses across Pakistan, US, UK, UAE, Saudi Arabia, and Germany. Led by senior professionals with over <strong style={{ color: '#111827' }}>15 years of experience</strong>, we deliver practical solutions, regulatory transparency, and dependable strategic advice.
            </p>

            <div style={{ width: '100%', height: '1px', backgroundColor: '#E5E7EB', marginBottom: '24px' }} />

            {/* Checklist with Golden Circled Arrows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
              {bulletPoints.map((text, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    border: '1.8px solid #C49A2C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    backgroundColor: 'rgba(196, 154, 44, 0.05)'
                  }}>
                    <ArrowRight size={13} color="#C49A2C" strokeWidth={2.8} />
                  </div>
                  <span style={{
                    fontSize: '0.98rem',
                    fontWeight: 600,
                    color: '#374151'
                  }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ width: '100%', height: '1px', backgroundColor: '#E5E7EB', marginBottom: '30px' }} />

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => navigate('/about-us')}
                style={{
                  backgroundColor: '#C49A2C',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '13px 34px',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  boxShadow: '0 6px 18px rgba(196, 154, 44, 0.25)',
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
                Learn More
              </button>

              <button 
                onClick={() => navigate('/services')}
                style={{
                  backgroundColor: 'transparent',
                  color: '#C49A2C',
                  border: '1.5px solid #C49A2C',
                  padding: '13px 32px',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#C49A2C';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#C49A2C';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Our Services
              </button>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .why-us-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
        }
      `}</style>
    </section>
  );
}

