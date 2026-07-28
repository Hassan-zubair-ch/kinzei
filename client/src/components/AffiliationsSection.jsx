import React from 'react';

export default function AffiliationsSection() {
  const affiliations = [
    {
      name: 'HM Revenue & Customs',
      logo: '/logos/hmrc.svg',
      height: '65px'
    },
    {
      name: 'Internal Revenue Service',
      logo: '/logos/irs.svg',
      height: '65px'
    },
    {
      name: 'The Institute of Chartered Accountants of Pakistan',
      logo: '/logos/icap.png',
      fallbackLogo: '/logos/icap.svg',
      height: '95px'
    }
  ];

  return (
    <section style={{
      padding: '60px 0 70px 0',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #F1F5F9'
    }}>
      <div className="container">
        <h2 style={{
          fontSize: '1.8rem',
          fontWeight: '800',
          color: '#1E2B4B',
          marginBottom: '45px',
          textAlign: 'left'
        }}>
          Affiliations & Certification
        </h2>

        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '40px'
        }}>
          {affiliations.map((item, idx) => (
            <div 
              key={idx} 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 24px',
                borderRadius: '12px',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              className="affiliation-logo-wrapper"
            >
              <img 
                src={item.logo} 
                alt={item.name} 
                title={item.name}
                onError={(e) => {
                  if (item.fallbackLogo) e.target.src = item.fallbackLogo;
                }}
                style={{
                  maxHeight: item.height,
                  maxWidth: '220px',
                  objectFit: 'contain'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .affiliation-logo-wrapper:hover {
          transform: translateY(-4px) scale(1.04);
        }
      `}</style>
    </section>
  );
}
