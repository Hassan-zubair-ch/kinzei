import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, Award, Briefcase, Mail, Phone, 
  Calendar, CheckCircle2, ArrowRight, Sparkles 
} from 'lucide-react';

export default function OurTeam({ onOpenSchedule }) {
  const navigate = useNavigate();

  const phoneNumber = "923034063970";
  const defaultMessage = encodeURIComponent("Hello Kinzei Consultants, I would like to consult with your specialized advisory team.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  const teamMembers = [
    {
      name: "Saud Mustafa",
      role: "",
      department: "",
      summary: "Specializes in statutory audit engagements, IFRS financial reporting, and internal control reviews for corporate enterprises.",
      image: "/team/muhammad-haroon.png"
    },
    {
      name: "Khurram Sheikh",
      role: "",
      department: "",
      summary: "Specialist in corporate tax litigation, FBR & Provincial Revenue Authority appeals, and statutory legal defense.",
      image: "/team/khurram-sheikh.png"
    },
    {
      name: "Abdul Rehman",
      role: "",
      department: "",
      summary: "Directs ERP implementations, QuickBooks/Xero integrations, and digital financial workflows.",
      image: "/team/azeem-usman.png"
    },
    {
      name: "Muhammad Abdullah",
      role: "",
      department: "",
      summary: "Oversees statutory field audits, forensic reviews, and financial due diligence for investments.",
      image: "/team/nisar-ahmed.png"
    },
    {
      name: "Komal Muskan",
      role: "",
      department: "",
      summary: "Manages SECP company incorporations, statutory annual returns (Form A/29), and regulatory filings.",
      image: "/team/sidra-ashraf.png"
    },
    {
      name: "Tanzeela Abbasi",
      role: "",
      department: "",
      summary: "Handles corporate and individual NTN tax filings, withholding statements, and sales tax returns.",
      image: "/team/tanzeela-abbasi.png"
    },
    {
      name: "Zeeshan Khalid",
      role: "",
      department: "",
      summary: "Specializes in corporate advisory, financial planning, and statutory tax compliance for growing businesses.",
      image: "/team/zeeshan-khalid.png"
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111827', minHeight: '100vh' }}>
      
      {/* 1. HERO BANNER */}
      <section style={{
        backgroundColor: '#FFFFFF',
        padding: '75px 0 45px 0',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          
          <div style={{
            fontSize: '1.05rem',
            color: '#D4A017',
            fontStyle: 'italic',
            fontWeight: 700,
            marginBottom: '8px',
            fontFamily: 'Georgia, serif'
          }}>
            Meet our team
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3rem)',
            fontWeight: 900,
            color: '#0F172A',
            marginBottom: '16px',
            lineHeight: 1.2,
            fontFamily: 'var(--font-heading)'
          }}>
            Meet the Professionals Driving Our Success
          </h1>

          <div style={{
            width: '100px',
            height: '3px',
            borderRadius: '3px',
            background: 'linear-gradient(90deg, #D4A017 0%, #10B981 100%)',
            margin: '0 auto 20px auto'
          }} />

          <p style={{
            fontSize: '1.05rem',
            color: '#475569',
            lineHeight: 1.7,
            margin: 0,
            fontWeight: 500
          }}>
            Our multidisciplinary team of audit managers, tax supervisors, and IT specialists deliver dependable execution, statutory compliance, and strategic advisory.
          </p>

        </div>
      </section>

      {/* 2. MINIMALIST TEAM MEMBERS GRID */}
      <section style={{ padding: '20px 0 90px 0', backgroundColor: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          
          <div 
            className="team-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px'
            }}
          >
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="team-card-minimal"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Member Portrait */}
                <div style={{
                  width: '100%',
                  height: '320px',
                  backgroundColor: '#F1F5F9',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 10%',
                      display: 'block',
                      transition: 'transform 0.4s ease'
                    }}
                    className="team-img-minimal"
                  />
                </div>

                {/* Member Details */}
                <div style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  backgroundColor: '#FFFFFF'
                }}>
                  
                  {/* Name */}
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    marginBottom: '6px',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {member.name}
                  </h3>

                  {/* Role & Department (only if specified) */}
                  {member.role ? (
                    <div style={{
                      fontSize: '0.86rem',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '6px'
                    }}>
                      <span style={{ fontWeight: 800, color: '#B8860B' }}>
                        {member.role}
                      </span>
                      {member.department && (
                        <>
                          <span style={{ color: '#CBD5E1' }}>•</span>
                          <span style={{ color: '#64748B', fontWeight: 600 }}>
                            {member.department}
                          </span>
                        </>
                      )}
                    </div>
                  ) : (
                    <div style={{ marginBottom: '10px' }} />
                  )}

                  {/* Concise Summary */}
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#475569',
                    lineHeight: 1.6,
                    margin: '0 0 22px 0',
                    flexGrow: 1,
                    fontWeight: 500
                  }}>
                    {member.summary}
                  </p>

                  {/* Action Button */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '10px', marginTop: 'auto' }}>
                    <button
                      onClick={onOpenSchedule}
                      style={{
                        backgroundColor: '#0F172A',
                        color: '#FFFFFF',
                        border: 'none',
                        padding: '11px 16px',
                        borderRadius: '8px',
                        fontSize: '0.86rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        transition: 'all 0.25s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#D4A017';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#0F172A';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                    >
                      <Calendar size={14} />
                      <span>Consult Specialist</span>
                    </button>

                    <a
                      href={`https://wa.me/923034063970?text=${encodeURIComponent(`Hello Kinzei Consultants, I would like to consult with ${member.name} (${member.role}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="WhatsApp Specialist"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        backgroundColor: '#F0FDF4',
                        border: '1px solid #BBF7D0',
                        color: '#16A34A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#16A34A';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#F0FDF4';
                        e.currentTarget.style.color = '#16A34A';
                      }}
                    >
                      <Phone size={15} />
                    </a>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CALL TO ACTION BANNER */}
      <section style={{ padding: '75px 0', backgroundColor: '#FFFFFF', textAlign: 'center', borderTop: '2px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
            Ready to Work with Our <span style={{ color: '#D4A017' }}>Expert Team?</span>
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: 1.7, marginBottom: '32px', fontWeight: 500 }}>
            Connect with our managers and supervisors for a free consultation regarding audit, corporate tax, SECP compliance, or IT financial systems.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenSchedule}
              className="btn-primary"
              style={{ padding: '14px 34px', fontSize: '0.94rem', borderRadius: '8px' }}
            >
              <Calendar size={18} />
              <span>Schedule Free Consultation</span>
            </button>
            <a
              href="tel:03034063970"
              className="btn-outline"
              style={{ padding: '14px 30px', fontSize: '0.94rem', borderRadius: '8px' }}
            >
              <Phone size={16} />
              <span>Call 03034063970</span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .team-card-minimal {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .team-card-minimal:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(15, 23, 42, 0.08) !important;
          border-color: #CBD5E1 !important;
        }
        .team-card-minimal:hover .team-img-minimal {
          transform: scale(1.03);
        }
        @media (max-width: 992px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 22px !important;
          }
        }
        @media (max-width: 640px) {
          .team-grid {
            grid-template-columns: 1fr !important;
            gap: 22px !important;
          }
        }
      `}</style>

    </div>
  );
}
