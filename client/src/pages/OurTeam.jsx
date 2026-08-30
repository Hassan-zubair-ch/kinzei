import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, Award, Briefcase, Mail, Phone, 
  Calendar, CheckCircle2, ArrowRight, Sparkles 
} from 'lucide-react';

export default function OurTeam({ onOpenSchedule }) {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Muhammad Haroon",
      designation: "AUDIT MANAGER",
      department: "Audit & Financial Assurance",
      qualifications: "CPA / CA Associate (ex-Audit Lead)",
      bio: "Leads statutory audit engagements, IFRS financial reporting compliance, and internal controls evaluations across diverse corporate sectors.",
      image: "/team/muhammad-haroon.png"
    },
    {
      name: "Khurram Sheikh",
      designation: "TAX SUPERVISOR & LITIGATION LEAD",
      department: "Corporate Taxation & FBR Advisory",
      qualifications: "Advocate High Court / Tax Specialist",
      bio: "Specializes in direct and indirect taxation, FBR appeals, provincial revenue authority compliance (PRA/SRB), and tax structuring.",
      image: "/team/khurram-sheikh.png"
    },
    {
      name: "Azeem Usman",
      designation: "HEAD OF IT & DIGITAL SYSTEMS",
      department: "Information Technology & ERP Systems",
      qualifications: "BS-IT / Cloud Infrastructure Specialist",
      bio: "Directs ERP implementations, QuickBooks/Xero financial integrations, IT system security audits, and digital workflows.",
      image: "/team/azeem-usman.png"
    },
    {
      name: "Nisar Ahmed",
      designation: "SENIOR AUDIT SUPERVISOR",
      department: "Financial Assurance & Due Diligence",
      qualifications: "Senior Auditor / Financial Analyst",
      bio: "Oversees field audit teams, forensic reviews, financial statement compilations, and pre-investment due diligence assessments.",
      image: "/team/nisar-ahmed.png"
    },
    {
      name: "Sidra Ashraf",
      designation: "SENIOR AUDITOR & COMPLIANCE ASSOCIATE",
      department: "Corporate Secretarial & Compliance",
      qualifications: "M.Com / Corporate Compliance Associate",
      bio: "Manages SECP corporate filings, annual statutory returns, partnership registrations, and corporate governance documentation.",
      image: "/team/sidra-ashraf.png"
    },
    {
      name: "Tanzeela Abbasi",
      designation: "TAX & FINANCIAL REPORTING CONSULTANT",
      department: "Tax Compliance & Bookkeeping",
      qualifications: "B.Com / Tax Advisory Associate",
      bio: "Handles individual and corporate NTN tax filings, monthly withholding statements, sales tax returns, and digital bookkeeping.",
      image: "/team/tanzeela-abbasi.png"
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111827', minHeight: '100vh' }}>
      
      {/* 1. HERO BANNER */}
      <section style={{
        backgroundColor: '#FFFFFF',
        padding: '75px 0 45px 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          
          <div style={{
            fontSize: '1.08rem',
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
            width: '120px',
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
      <section style={{ padding: '30px 0 90px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1180px' }}>
          
          <div 
            className="team-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '35px'
            }}
          >
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="interactive-card team-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1.5px solid #E2E8F0',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Member Portrait Image */}
                <div style={{
                  width: '100%',
                  height: '350px',
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
                      objectPosition: 'top center',
                      display: 'block',
                      transition: 'transform 0.4s ease'
                    }}
                    className="team-img-hover"
                  />
                  {/* Subtle Gradient at Bottom of Image */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.45) 0%, transparent 40%)',
                    pointerEvents: 'none'
                  }} />
                </div>

                {/* Member Details */}
                <div style={{
                  padding: '28px 24px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  backgroundColor: '#FFFFFF'
                }}>
                  
                  {/* Name */}
                  <h3 style={{
                    fontSize: '1.32rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    marginBottom: '6px',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {member.name}
                  </h3>

                  {/* Designation */}
                  <div style={{
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    color: '#D4A017',
                    letterSpacing: '0.6px',
                    textTransform: 'uppercase',
                    marginBottom: '10px'
                  }}>
                    {member.designation}
                  </div>

                  {/* Department Tag */}
                  <div style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#475569',
                    backgroundColor: '#F8FAFC',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    border: '1px solid #E2E8F0',
                    display: 'inline-block',
                    alignSelf: 'center',
                    marginBottom: '14px'
                  }}>
                    {member.department}
                  </div>

                  {/* Bio */}
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#64748B',
                    lineHeight: 1.6,
                    margin: '0 0 20px 0',
                    flexGrow: 1,
                    fontWeight: 500
                  }}>
                    {member.bio}
                  </p>

                  {/* Quick Action Button */}
                  <button
                    onClick={onOpenSchedule}
                    style={{
                      width: '100%',
                      backgroundColor: '#F8FAFC',
                      color: '#0F172A',
                      border: '1.5px solid #E2E8F0',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      fontSize: '0.84rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0F172A';
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.borderColor = '#0F172A';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#F8FAFC';
                      e.currentTarget.style.color = '#0F172A';
                      e.currentTarget.style.borderColor = '#E2E8F0';
                    }}
                  >
                    <Calendar size={14} />
                    <span>Consult with Team</span>
                  </button>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. WHY OUR MULTI-DISCIPLINARY TEAM EXCELS */}
      <section style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '80px 0' }}>
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
                    border: '1px solid rgba(212, 160, 23, 0.25)'
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
        .team-card:hover .team-img-hover {
          transform: scale(1.04);
        }
        @media (max-width: 992px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 25px !important;
          }
        }
        @media (max-width: 640px) {
          .team-grid {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }
        }
      `}</style>

    </div>
  );
}
