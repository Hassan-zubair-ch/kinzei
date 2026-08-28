import React from 'react';

export default function AffiliationsSection() {
  const affiliations = [
    {
      name: 'Federal Board of Revenue (FBR)',
      logo: '/logos/fbr.png',
      scale: 1.35
    },
    {
      name: 'The Institute of Chartered Accountants of Pakistan (ICAP)',
      logo: '/logos/icap.png',
      scale: 1.05
    },
    {
      name: 'Internal Revenue Service (IRS)',
      logo: '/logos/irs.png',
      scale: 1.25
    },
    {
      name: 'HM Revenue & Customs (HMRC)',
      logo: '/logos/hmrc.png',
      scale: 1.15
    }
  ];

  return (
    <section style={{
      padding: '70px 0 85px 0',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #E5E7EB'
    }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <span className="badge-gold" style={{ marginBottom: '12px' }}>GLOBAL REGULATORY &amp; COMPLIANCE</span>
          <h2 style={{
            fontSize: '2.4rem',
            fontWeight: '800',
            color: '#111827',
            marginTop: '12px',
            fontFamily: 'var(--font-heading)'
          }}>
            Affiliations &amp; <span style={{ color: '#D4A017' }}>Certifications</span>
          </h2>
        </div>

        {/* Uniform Grid - Identical Card Sizes on All Screens with Zero Bad Gaps */}
        <div 
          className="affiliations-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            alignItems: 'stretch'
          }}
        >
          {affiliations.map((item, idx) => (
            <div 
              key={idx} 
              className="affiliation-logo-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '135px',
                padding: '16px 20px',
                borderRadius: '18px',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #E5E7EB',
                boxShadow: '0 4px 18px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
            >
              <img 
                src={item.logo} 
                alt={item.name} 
                title={item.name}
                style={{
                  height: '86px',
                  width: 'auto',
                  maxWidth: '88%',
                  objectFit: 'contain',
                  transform: `scale(${item.scale})`,
                  imageRendering: '-webkit-optimize-contrast'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .affiliation-logo-card:hover {
          transform: translateY(-6px);
          border-color: #D4A017 !important;
          box-shadow: 0 16px 35px rgba(212, 160, 23, 0.18) !important;
        }
        @media (max-width: 992px) {
          .affiliations-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          .affiliation-logo-card {
            height: 125px !important;
          }
        }
        @media (max-width: 520px) {
          .affiliations-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 14px !important;
          }
          .affiliation-logo-card {
            height: 110px !important;
            padding: 10px 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
