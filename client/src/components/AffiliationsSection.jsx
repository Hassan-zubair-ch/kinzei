import React from 'react';

export default function AffiliationsSection() {
  const affiliations = [
    {
      name: 'Federal Board of Revenue (FBR)',
      logo: '/logos/fbr.png',
      height: '65px'
    },
    {
      name: 'The Institute of Chartered Accountants of Pakistan (ICAP)',
      logo: '/logos/icap.png',
      height: '85px'
    },
    {
      name: 'Internal Revenue Service (IRS)',
      logo: '/logos/irs.png',
      height: '55px'
    },
    {
      name: 'HM Revenue & Customs (HMRC)',
      logo: '/logos/hmrc.png',
      height: '55px'
    }
  ];

  return (
    <section style={{
      padding: '65px 0 75px 0',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #E5E7EB'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <span className="badge-gold" style={{ marginBottom: '10px' }}>Global Regulatory &amp; Compliance</span>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: '800',
            color: '#111827',
            marginTop: '10px',
            fontFamily: 'var(--font-heading)'
          }}>
            Affiliations &amp; <span style={{ color: '#9E7B3B' }}>Certifications</span>
          </h2>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '35px'
        }}>
          {affiliations.map((item, idx) => (
            <div 
              key={idx} 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '18px 30px',
                borderRadius: '16px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E7EB',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                minWidth: '190px'
              }}
              className="affiliation-logo-card"
            >
              <img 
                src={item.logo} 
                alt={item.name} 
                title={item.name}
                style={{
                  maxHeight: item.height,
                  maxWidth: '210px',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .affiliation-logo-card:hover {
          transform: translateY(-5px);
          border-color: #9E7B3B !important;
          box-shadow: 0 12px 30px rgba(158, 123, 59, 0.18) !important;
        }
      `}</style>
    </section>
  );
}
