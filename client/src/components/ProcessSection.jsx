import React from 'react';

const AppointmentIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="12" width="24" height="34" rx="3" stroke="#C49A2C" strokeWidth="2.2" fill="none" />
    <line x1="22" y1="34" x2="34" y2="34" stroke="#C49A2C" strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="39" x2="29" y2="39" stroke="#C49A2C" strokeWidth="2" strokeLinecap="round" />
    <rect x="10" y="14" width="16" height="14" rx="2" stroke="#C49A2C" strokeWidth="2" fill="#FFFFFF" />
    <polygon points="16,18 22,21 16,24" fill="#C49A2C" />
  </svg>
);

const ConsultationIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="8" width="11" height="8" rx="2" stroke="#C49A2C" strokeWidth="2" fill="none" />
    <rect x="29" y="8" width="11" height="8" rx="2" stroke="#C49A2C" strokeWidth="2" fill="none" />
    <circle cx="28" cy="23" r="5" stroke="#C49A2C" strokeWidth="2" fill="none" />
    <path d="M20 37C20 32 23.5 30 28 30C32.5 30 36 32 36 37" stroke="#C49A2C" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="17" cy="25" r="4" stroke="#C49A2C" strokeWidth="1.8" fill="none" />
    <path d="M11 37C11 33 13.5 31.5 17 31.5C18.5 31.5 19.8 32 20.8 33" stroke="#C49A2C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <circle cx="39" cy="25" r="4" stroke="#C49A2C" strokeWidth="1.8" fill="none" />
    <path d="M45 37C45 33 42.5 31.5 39 31.5C37.5 31.5 36.2 32 35.2 33" stroke="#C49A2C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
  </svg>
);

const ProblemSolvedIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 6L29.2 9.8L33 11L29.2 12.2L28 16L26.8 12.2L23 11L26.8 9.8L28 6Z" fill="#C49A2C" />
    <path d="M15 25L21 19L27 25L23 29L15 25Z" stroke="#C49A2C" strokeWidth="2" strokeLinejoin="round" fill="none" />
    <path d="M41 25L35 19L29 25L33 29L41 25Z" stroke="#C49A2C" strokeWidth="2" strokeLinejoin="round" fill="none" />
    <path d="M21 19L28 26L35 19" stroke="#C49A2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M25 28L28 31L31 28" stroke="#C49A2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M13 27L19 35H25" stroke="#C49A2C" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M43 27L37 35H31" stroke="#C49A2C" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

export default function ProcessSection({ onOpenSchedule }) {
  const steps = [
    {
      number: '01.',
      title: 'Make An Appointment',
      description: 'Book a meeting with our professionals to discuss your business needs and service requirements.',
      Icon: AppointmentIcon
    },
    {
      number: '02.',
      title: 'Get Consultation',
      description: 'Receive expert guidance and professional advice tailored to your tax, audit, and compliance needs.',
      Icon: ConsultationIcon
    },
    {
      number: '03.',
      title: 'Your Problem Solved',
      description: 'We deliver reliable solutions and ongoing support to resolve issues and help your business move forward.',
      Icon: ProblemSolvedIcon
    }
  ];

  return (
    <section style={{ padding: '85px 0 95px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #F3F4F6' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px auto' }}>
          <div style={{ display: 'inline-block' }}>
            <span style={{
              fontSize: '1.05rem',
              fontWeight: '700',
              color: '#111827',
              letterSpacing: '0.2px',
              fontFamily: 'var(--font-heading)'
            }}>
              Our Process
            </span>
            <div style={{
              width: '42px',
              height: '3px',
              backgroundColor: '#C49A2C',
              margin: '6px auto 0 auto',
              borderRadius: '2px'
            }} />
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.8vw, 2.5rem)',
            fontWeight: '800',
            color: '#111827',
            marginTop: '16px',
            marginBottom: '16px',
            lineHeight: 1.2,
            fontFamily: 'var(--font-heading)'
          }}>
            Simple Steps to Get the Right Solutions
          </h2>

          <p style={{
            fontSize: '1.02rem',
            color: '#4B5563',
            lineHeight: '1.65',
            fontFamily: 'var(--font-body)'
          }}>
            We follow a clear process to understand your needs and deliver reliable tax, audit, and advisory solutions with transparency and efficiency.
          </p>
        </div>

        {/* Steps Grid */}
        <div style={{ position: 'relative', maxWidth: '1140px', margin: '0 auto' }}>
          {/* Dashed Connecting Line (Desktop) */}
          <div 
            className="process-dashed-line"
            style={{
              position: 'absolute',
              top: '28px',
              left: '16.66%',
              right: '16.66%',
              height: '2px',
              borderTop: '2px dashed rgba(196, 154, 44, 0.4)',
              zIndex: 0
            }} 
          />

          <div 
            className="process-steps-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              position: 'relative',
              zIndex: 1
            }}
          >
            {steps.map((step, idx) => {
              const StepIcon = step.Icon;
              return (
                <div 
                  key={idx} 
                  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  {/* Step Number Circle */}
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #D4AF37 0%, #C49A2C 50%, #8C6B2F 100%)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '800',
                      fontSize: '1.18rem',
                      boxShadow: '0 4px 16px rgba(196, 154, 44, 0.35)',
                      zIndex: 2
                    }}>
                      {step.number}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div
                    onClick={onOpenSchedule}
                    className="process-card-hover"
                    style={{
                      flex: 1,
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      padding: '42px 30px',
                      textAlign: 'center',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                      border: '1px solid #E5E7EB',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <div style={{ marginBottom: '22px' }}>
                      <StepIcon />
                    </div>

                    <h3 style={{
                      fontSize: '1.35rem',
                      fontWeight: '700',
                      color: '#111827',
                      marginBottom: '14px',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {step.title}
                    </h3>

                    <p style={{
                      fontSize: '0.94rem',
                      color: '#4B5563',
                      lineHeight: '1.65',
                      margin: 0,
                      fontFamily: 'var(--font-body)'
                    }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .process-card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 45px rgba(196, 154, 44, 0.2) !important;
          border-color: #C49A2C !important;
        }

        @media (max-width: 900px) {
          .process-dashed-line {
            display: none !important;
          }
          .process-steps-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
