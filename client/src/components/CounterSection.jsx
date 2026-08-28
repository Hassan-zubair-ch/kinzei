import React, { useState, useEffect, useRef } from 'react';

const ClientsIcon = () => (
  <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="18" r="12" stroke="#D4A017" strokeWidth="2" fill="none" />
    <ellipse cx="24" cy="18" rx="5" ry="12" stroke="#D4A017" strokeWidth="1.6" fill="none" />
    <line x1="12" y1="18" x2="36" y2="18" stroke="#D4A017" strokeWidth="1.6" />
    <circle cx="24" cy="32" r="3" stroke="#D4A017" strokeWidth="1.6" fill="none" />
    <path d="M18 40C18 36.5 20.5 35.5 24 35.5C27.5 35.5 30 36.5 30 40" stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <circle cx="16" cy="33" r="2.5" stroke="#D4A017" strokeWidth="1.4" fill="none" />
    <circle cx="32" cy="33" r="2.5" stroke="#D4A017" strokeWidth="1.4" fill="none" />
  </svg>
);

const CasesIcon = () => (
  <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="8" width="22" height="32" rx="3" stroke="#D4A017" strokeWidth="2" fill="none" />
    <circle cx="23" cy="16" r="3" stroke="#D4A017" strokeWidth="1.6" fill="none" />
    <path d="M18 24C18 22 20 21 23 21C26 21 28 22 28 24" stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <line x1="16" y1="28" x2="26" y2="28" stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="16" y1="32" x2="23" y2="32" stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M30 20L36 34L33 37L28 35Z" stroke="#D4A017" strokeWidth="1.6" fill="#FFFFFF" />
  </svg>
);

const ExperienceIcon = () => (
  <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 6L26.5 9.5L31 8.5L31.5 13L36 14L34.5 18.5L38 22L34.5 25.5L36 30L31.5 31L31 35.5L26.5 34.5L24 38L21.5 34.5L17 35.5L16.5 31L12 30L13.5 25.5L10 22L13.5 18.5L12 14L16.5 13L17 8.5L21.5 9.5L24 6Z" stroke="#D4A017" strokeWidth="2" strokeLinejoin="round" fill="none" />
    <path d="M19 25V21C19 21 19 17 22 17C23.5 17 23 19.5 24.5 21C25 21.5 29 21.5 29 23.5C29 24.5 28 25 28.5 26C29 27 27.5 27.5 27.5 28.5C27.5 29.5 26 30 24 30H21C19.5 30 19 29 19 29" stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M20 38L16 44L21 42L24 45" stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M28 38L32 44L27 42L24 45" stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const TeamIcon = () => (
  <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="14" r="4" stroke="#D4A017" strokeWidth="1.8" fill="none" />
    <path d="M17 25C17 21.5 20 20 24 20C28 20 31 21.5 31 25" stroke="#D4A017" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <circle cx="14" cy="18" r="3" stroke="#D4A017" strokeWidth="1.6" fill="none" />
    <path d="M9 27C9 24.5 11.5 23.5 14 23.5C15.5 23.5 16.8 24 17.8 25" stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <circle cx="34" cy="18" r="3" stroke="#D4A017" strokeWidth="1.6" fill="none" />
    <path d="M39 27C39 24.5 36.5 23.5 34 23.5C32.5 23.5 31.2 24 30.2 25" stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <line x1="24" y1="25" x2="24" y2="34" stroke="#D4A017" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="14" y1="27" x2="14" y2="34" stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="34" y1="27" x2="34" y2="34" stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export default function CounterSection() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const animatedRef = useRef(false);

  const stats = [
    { target: 350, label: 'Happy Clients', Icon: ClientsIcon },
    { target: 500, label: 'Cases Completed', Icon: CasesIcon },
    { target: 15, label: 'Years Of Experience', Icon: ExperienceIcon },
    { target: 15, label: 'Professional Team', Icon: TeamIcon }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || animatedRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.9) {
        animatedRef.current = true;
        animateCounters();
      }
    };

    const animateCounters = () => {
      const duration = 2000;
      const steps = 50;
      const stepTime = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);

        setCounts(stats.map(s => Math.floor(s.target * easeOutQuad)));

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(stats.map(s => s.target));
        }
      }, stepTime);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      style={{
        padding: '65px 0 75px 0',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB'
      }}
    >
      <div className="container">
        <div 
          className="counter-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
            textAlign: 'center'
          }}
        >
          {stats.map((stat, idx) => {
            const StatIcon = stat.Icon;
            return (
              <div 
                key={idx}
                className="counter-item"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '24px 14px',
                  borderRadius: '16px',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div style={{ marginBottom: '18px' }}>
                  <StatIcon />
                </div>

                <div style={{
                  fontSize: '2.8rem',
                  fontWeight: '900',
                  color: '#111827',
                  lineHeight: '1',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  fontFamily: 'var(--font-heading)'
                }}>
                  <span>{counts[idx]}</span>
                  <span style={{ color: '#D4A017', fontWeight: '800', fontSize: '2.1rem' }}>+</span>
                </div>

                <div style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: '#374151',
                  letterSpacing: '0.2px',
                  fontFamily: 'var(--font-body)'
                }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .counter-item:hover {
          transform: translateY(-4px);
        }
        @media (max-width: 900px) {
          .counter-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 30px 16px !important;
          }
        }
        @media (max-width: 480px) {
          .counter-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px 10px !important;
          }
          .counter-item {
            padding: 16px 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
