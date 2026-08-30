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
      name: "Muhammad Haroon",
      designation: "Audit Manager",
      department: "Audit & Financial Assurance",
      bio: "Leads statutory audit engagements, IFRS financial reporting compliance, and internal control reviews for corporate enterprises.",
      image: "/team/muhammad-haroon.png",
      badge: "Assurance Lead",
      skills: ["IFRS Reporting", "Statutory Audits", "Internal Controls"]
    },
    {
      name: "Khurram Sheikh",
      designation: "Advocate High Court",
      department: "Director Taxation & Legal Affairs",
      bio: "Specialist in corporate tax litigation, FBR & Provincial Revenue Authority appeals (PRA/SRB), and statutory legal defense.",
      image: "/team/khurram-sheikh.png",
      badge: "High Court Litigator",
      skills: ["Tax Litigation", "FBR Appeals", "Corporate Defense"]
    },
    {
      name: "Azeem Usman",
      designation: "Head of IT & Digital Systems",
      department: "Information Technology & ERP Advisory",
      bio: "Directs ERP implementations, QuickBooks/Xero financial integrations, IT system security audits, and digital workflows.",
      image: "/team/azeem-usman.png",
      badge: "Systems & ERP Architect",
      skills: ["ERP Systems", "QuickBooks / Xero", "IT Security Audits"]
    },
    {
      name: "Nisar Ahmed",
      designation: "Senior Audit Supervisor",
      department: "Financial Assurance & Due Diligence",
      bio: "Oversees comprehensive field audits, forensic reviews, financial statement compilations, and pre-investment due diligence.",
      image: "/team/nisar-ahmed.png",
      badge: "Forensic & Due Diligence",
      skills: ["Field Audits", "Forensic Reviews", "Due Diligence"]
    },
    {
      name: "Sidra Ashraf",
      designation: "Corporate Compliance Supervisor",
      department: "Corporate Secretarial & SECP Filings",
      bio: "Manages SECP company incorporation, statutory annual returns (Form A/29), director changes, and regulatory documentation.",
      image: "/team/sidra-ashraf.png",
      badge: "SECP Specialist",
      skills: ["SECP Filings", "Company Setup", "Corporate Governance"]
    },
    {
      name: "Tanzeela Abbasi",
      designation: "Tax & Reporting Supervisor",
      department: "Direct Taxation & Bookkeeping",
      bio: "Handles corporate and individual NTN tax filings, monthly withholding statements, sales tax returns, and digital bookkeeping.",
      image: "/team/tanzeela-abbasi.png",
      badge: "Taxation Specialist",
      skills: ["Direct & Sales Tax", "Withholding Tax", "Bookkeeping"]
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111827', minHeight: '100vh' }}>
      
      {/* 1. HERO BANNER */}
      <section style={{
        backgroundColor: '#FFFFFF',
        padding: '80px 0 50px 0',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          
          <div style={{
            fontSize: '1.1rem',
            color: '#D4A017',
            fontStyle: 'italic',
            fontWeight: 700,
            marginBottom: '10px',
            fontFamily: 'Georgia, serif'
          }}>
            Meet our team
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            color: '#0F172A',
            marginBottom: '18px',
            lineHeight: 1.2,
            fontFamily: 'var(--font-heading)'
          }}>
            Meet the Professionals Driving Our Success
          </h1>

          {/* Accent Line */}
          <div style={{
            width: '130px',
            height: '4px',
            borderRadius: '4px',
            background: 'linear-gradient(90deg, #D4A017 0%, #10B981 100%)',
            margin: '0 auto 24px auto'
          }} />

          <p style={{
            fontSize: '1.08rem',
            color: '#475569',
            lineHeight: 1.75,
            margin: 0,
            fontWeight: 500
          }}>
            Our multidisciplinary team of audit managers, tax supervisors, senior auditors, and IT specialists work in close synergy to deliver dependable execution, statutory compliance, and strategic advisory.
          </p>

        </div>
      </section>

      {/* 2. TEAM MEMBERS GRID */}
      <section style={{ padding: '20px 0 95px 0', backgroundColor: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          
          <div 
            className="team-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px'
            }}
          >
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="team-card-executive"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px -4px rgba(15, 23, 42, 0.06), 0 4px 10px -2px rgba(15, 23, 42, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Top Subtle Gold Accent Bar */}
                <div style={{
                  height: '4px',
                  width: '100%',
                  background: 'linear-gradient(90deg, #D4A017 0%, #E5B338 50%, #B8860B 100%)'
                }} />

                {/* Member Portrait Image Container with Gradient Scrim */}
                <div style={{
                  width: '100%',
                  height: '340px',
                  backgroundColor: '#0F172A',
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
                      transition: 'transform 0.5s ease'
                    }}
                    className="team-img-portrait"
                  />

                  {/* Gradient Scrim for Visual Depth */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '90px',
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.35) 50%, transparent 100%)',
                    pointerEvents: 'none'
                  }} />

                  {/* Floating Specialty Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    backgroundColor: 'rgba(15, 23, 42, 0.82)',
                    backdropFilter: 'blur(8px)',
                    color: '#FCD34D',
                    border: '1px solid rgba(212, 160, 23, 0.45)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    letterSpacing: '0.6px',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.25)'
                  }}>
                    <Sparkles size={11} color="#FCD34D" />
                    <span>{member.badge}</span>
                  </div>

                  {/* Name Overlaid at Bottom of Image for Clean Impact */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '18px',
                    right: '18px',
                    color: '#FFFFFF'
                  }}>
                    <h3 style={{
                      fontSize: '1.38rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      margin: 0,
                      fontFamily: 'var(--font-heading)',
                      textShadow: '0 2px 8px rgba(0,0,0,0.7)'
                    }}>
                      {member.name}
                    </h3>
                  </div>
                </div>

                {/* Member Details Body */}
                <div style={{
                  padding: '20px 22px 24px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  backgroundColor: '#FFFFFF'
                }}>
                  
                  {/* Designation & Department */}
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{
                      fontSize: '0.84rem',
                      fontWeight: 800,
                      color: '#B8860B',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      marginBottom: '3px'
                    }}>
                      {member.designation}
                    </div>
                    <div style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#64748B'
                    }}>
                      {member.department}
                    </div>
                  </div>

                  {/* Skills / Expertise Chips */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '16px'
                  }}>
                    {member.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          color: '#334155',
                          backgroundColor: '#F1F5F9',
                          border: '1px solid #E2E8F0',
                          padding: '3px 9px',
                          borderRadius: '6px'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#475569',
                    lineHeight: 1.6,
                    margin: '0 0 20px 0',
                    flexGrow: 1,
                    fontWeight: 500
                  }}>
                    {member.bio}
                  </p>

                  {/* Action Buttons Row */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: '10px',
                    alignItems: 'center',
                    marginTop: 'auto',
                    paddingTop: '16px',
                    borderTop: '1px solid #F1F5F9'
                  }}>
                    {/* Main Consultation Button */}
                    <button
                      onClick={onOpenSchedule}
                      className="team-consult-btn"
                      style={{
                        backgroundColor: '#0F172A',
                        color: '#FFFFFF',
                        border: '1px solid #0F172A',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        fontSize: '0.84rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '7px',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <Calendar size={14} color="#FCD34D" />
                      <span>Consult Specialist</span>
                    </button>

                    {/* Direct WhatsApp Quick Chat */}
                    <a
                      href={`https://wa.me/923034063970?text=${encodeURIComponent(`Hello Kinzei Consultants, I would like to consult with ${member.name} (${member.designation}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Chat on WhatsApp about ${member.name}`}
                      style={{
                        width: '38px',
                        height: '38px',
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
                        e.currentTarget.style.borderColor = '#16A34A';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#F0FDF4';
                        e.currentTarget.style.color = '#16A34A';
                        e.currentTarget.style.borderColor = '#BBF7D0';
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

      {/* 3. WHY OUR MULTI-DISCIPLINARY TEAM EXCELS */}
      <section style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '85px 0' }}>
        <div className="container" style={{ maxWidth: '1080px' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px auto' }}>
            <span className="badge-gold">Collaborative Excellence</span>
            <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginTop: '12px', marginBottom: '16px', fontWeight: 800 }}>
              The Power of a <span style={{ color: '#D4A017' }}>Specialized Advisory Team</span>
            </h2>
            <p style={{ color: '#E2E8F0', fontSize: '1.05rem', lineHeight: 1.6, fontWeight: 500 }}>
              By integrating chartered accountants, senior tax litigators, compliance officers, and IT auditors under one roof, Kinzei provides 360-degree protection and growth.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                icon: ShieldCheck,
                title: "Rigorous Quality Assurance",
                desc: "Every audit report, financial model, and tax submission undergoes multi-tier supervisory review before delivery."
              },
              {
                icon: Briefcase,
                title: "Practical Business Acumen",
                desc: "Our managers combine regulatory knowledge with practical commercial insights tailored to Pakistani and international markets."
              },
              {
                icon: Award,
                title: "Zero-Defect Compliance Focus",
                desc: "Proactive compliance schedules ensure our clients remain insulated from statutory penalties and audit notices."
              }
            ].map((col, i) => {
              const IconComponent = col.icon;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'rgba(30, 41, 59, 0.7)',
                    borderRadius: '16px',
                    padding: '32px 26px',
                    border: '1px solid rgba(212, 160, 23, 0.25)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(212, 160, 23, 0.15)',
                    color: '#FACC15',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px'
                  }}>
                    <IconComponent size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>
                    {col.title}
                  </h3>
                  <p style={{ fontSize: '0.94rem', color: '#CBD5E1', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
                    {col.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER */}
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
        .team-card-executive {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .team-card-executive:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -8px rgba(15, 23, 42, 0.14), 0 0 0 1px rgba(212, 160, 23, 0.4) !important;
          border-color: #D4A017 !important;
        }
        .team-card-executive:hover .team-img-portrait {
          transform: scale(1.05);
        }
        .team-card-executive:hover .team-consult-btn {
          background: linear-gradient(135deg, #E5B338 0%, #D4A017 50%, #B8860B 100%) !important;
          border-color: #D4A017 !important;
          color: #FFFFFF !important;
          box-shadow: 0 4px 14px rgba(212, 160, 23, 0.35);
        }
        @media (max-width: 992px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 640px) {
          .team-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>

    </div>
  );
}
