import React from 'react';

const ExpertsIcon = ({ color = "#E87817" }) => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="16" r="10" stroke={color} strokeWidth="2" fill="none" />
    <ellipse cx="22" cy="16" rx="4.5" ry="10" stroke={color} strokeWidth="1.8" fill="none" />
    <line x1="12" y1="16" x2="32" y2="16" stroke={color} strokeWidth="1.8" />
    <circle cx="22" cy="30" r="3" stroke={color} strokeWidth="1.8" fill="none" />
    <path d="M16 38C16 34.5 18.5 33.5 22 33.5C25.5 33.5 28 34.5 28 38" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
  </svg>
);

const ConsultationsIcon = ({ color = "#FFFFFF" }) => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="10" width="18" height="14" rx="3" stroke={color} strokeWidth="2.2" fill="none" />
    <path d="M12 24L10 28L16 24" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
    <line x1="12" y1="15" x2="22" y2="15" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="19" x2="18" y2="19" stroke={color} strokeWidth="2" strokeLinecap="round" />

    <rect x="20" y="18" width="16" height="13" rx="3" stroke={color} strokeWidth="2.2" fill="none" />
    <path d="M30 31L34 34L33 31" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
    <line x1="24" y1="22" x2="32" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="26" x2="29" y2="26" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const TimeIcon = ({ color = "#FFFFFF" }) => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="22" r="13" stroke={color} strokeWidth="2.2" fill="none" />
    <line x1="22" y1="14" x2="22" y2="22" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    <line x1="22" y1="22" x2="28" y2="22" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M15 15L13 13" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M29 15L31 13" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M29 29L31 31" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M15 29L13 31" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const QualityIcon = ({ color = "#E87817" }) => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 6L24.5 9.5L29 8.5L29.5 13L34 14L32.5 18.5L36 22L32.5 25.5L34 30L29.5 31L29 35.5L24.5 34.5L22 38L19.5 34.5L15 35.5L14.5 31L10 30L11.5 25.5L8 22L11.5 18.5L10 14L14.5 13L15 8.5L19.5 9.5L22 6Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
    <path d="M17 25V21C17 21 17 17 20 17C21.5 17 21 19.5 22.5 21C23 21.5 27 21.5 27 23.5C27 24.5 26 25 26.5 26C27 27 25.5 27.5 25.5 28.5C25.5 29.5 24 30 22 30H19C17.5 30 17 29 17 29" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export default function WhyChooseUsSection({ onOpenSchedule }) {
  const cards = [
    {
      titleLine1: 'Professional',
      titleLine2: 'Experts',
      isOrange: false,
      Icon: ExpertsIcon
    },
    {
      titleLine1: 'Free',
      titleLine2: 'Consultations',
      isOrange: true,
      Icon: ConsultationsIcon
    },
    {
      titleLine1: 'Saving You',
      titleLine2: 'Time',
      isOrange: true,
      Icon: TimeIcon
    },
    {
      titleLine1: 'Best Quality',
      titleLine2: 'Service',
      isOrange: false,
      Icon: QualityIcon
    }
  ];

  return (
    <section style={{
      backgroundColor: '#4A2E16',
      backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(242, 122, 24, 0.08) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(242, 122, 24, 0.05) 0%, transparent 40%)',
      padding: '85px 0 95px 0',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div 
          className="why-choose-us-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '60px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Heading & Subtitle */}
          <div>
            <div style={{ display: 'inline-block' }}>
              <span style={{
                fontSize: '1.05rem',
                fontWeight: '700',
                color: '#FFFFFF',
                letterSpacing: '0.2px'
              }}>
                Why Choose Us
              </span>
              <div style={{
                width: '42px',
                height: '3px',
                backgroundColor: '#E87817',
                marginTop: '6px',
                borderRadius: '2px'
              }} />
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.6rem)',
              fontWeight: '800',
              color: '#FFFFFF',
              marginTop: '22px',
              marginBottom: '22px',
              lineHeight: 1.25,
              maxWidth: '560px'
            }}>
              Trusted by Businesses for Professional Tax & Advisory Services
            </h2>

            <p style={{
              fontSize: '1.02rem',
              color: '#E2D8CF',
              lineHeight: '1.7',
              maxWidth: '540px',
              margin: 0
            }}>
              We support businesses with reliable tax, audit, compliance, and advisory solutions. Our experienced professionals focus on accuracy, transparency, and timely delivery to help clients meet regulatory requirements and achieve long-term growth with confidence.
            </p>
          </div>

          {/* Right Column: 2x2 Feature Cards Grid */}
          <div 
            className="why-cards-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}
          >
            {cards.map((card, index) => {
              const CardIcon = card.Icon;
              const iconColor = card.isOrange ? '#FFFFFF' : '#E87817';
              return (
                <div
                  key={index}
                  onClick={onOpenSchedule}
                  className="why-card-hover"
                  style={{
                    backgroundColor: card.isOrange ? '#E87817' : '#FFFFFF',
                    borderRadius: '8px',
                    padding: '30px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    boxShadow: card.isOrange 
                      ? '0 10px 25px rgba(232, 120, 23, 0.3)' 
                      : '0 10px 25px rgba(0, 0, 0, 0.12)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ flexShrink: 0 }}>
                    <CardIcon color={iconColor} />
                  </div>
                  <div>
                    <div style={{
                      fontSize: '1.18rem',
                      fontWeight: '700',
                      color: card.isOrange ? '#FFFFFF' : '#1E2B4B',
                      lineHeight: '1.25'
                    }}>
                      {card.titleLine1}
                    </div>
                    <div style={{
                      fontSize: '1.18rem',
                      fontWeight: '700',
                      color: card.isOrange ? '#FFFFFF' : '#1E2B4B',
                      lineHeight: '1.25'
                    }}>
                      {card.titleLine2}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .why-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.25) !important;
        }

        @media (max-width: 992px) {
          .why-choose-us-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        @media (max-width: 540px) {
          .why-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
