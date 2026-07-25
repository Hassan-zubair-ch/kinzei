import React from 'react';
import { Mail, Phone, Linkedin, ShieldCheck } from 'lucide-react';

export default function OurTeam({ onOpenSchedule }) {
  const teamMembers = [
    {
      name: "Corporate Tax Director",
      title: "Lead Tax & Advisory Consultant",
      qualifications: "FCA, Master of Laws (Taxation)",
      bio: "Over 18 years of experience in corporate tax planning, FBR litigation defense, and cross-border M&A advisory.",
      email: "kinzeiconsultants@gmail.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Audit Partner",
      title: "Head of Audit & Assurance",
      qualifications: "FCA, CIA (USA)",
      bio: "Specialist in statutory audits under IFRS, SECP financial reporting compliance, and internal control reviews.",
      email: "kinzeiconsultants@gmail.com",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "US Desk Partner",
      title: "US & Cross-Border Tax Director",
      qualifications: "CPA (US), Enrolled Agent (IRS)",
      bio: "Expert in IRS federal tax compliance, Form 5472 filings, State Sales Tax, and non-resident US LLC structuring.",
      email: "kinzeiconsultants@gmail.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "UK Desk Partner",
      title: "UK & European Advisory Partner",
      qualifications: "CTA (UK), ACCA",
      bio: "Directs UK corporate tax planning, HMRC VAT registrations, Making Tax Digital (MTD), and Companies House compliance.",
      email: "kinzeiconsultants@gmail.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Corporate Secretarial Lead",
      title: "SECP & Legal Advisory Specialist",
      qualifications: "LL.B, Corporate Secretary",
      bio: "Handles SECP company incorporation, partnership deeds, trademark registrations, and statutory board minutes.",
      email: "kinzeiconsultants@gmail.com",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "IT Audit Specialist",
      title: "IT Audit & Risk Management Lead",
      qualifications: "CISA, ISO 27001 Auditor",
      bio: "Specializes in IT system audits, SOC 2 readiness, cybersecurity framework testing, and disaster recovery evaluation.",
      email: "kinzeiconsultants@gmail.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div>
      {/* BANNER */}
      <section style={{
        background: 'linear-gradient(180deg, #181C26 0%, #090A0E 100%)',
        padding: '70px 0 50px 0',
        textAlign: 'center',
        borderBottom: '1px solid rgba(212, 175, 55, 0.15)'
      }}>
        <div className="container">
          <span className="badge-gold">Kinzei Leadership</span>
          <h1 style={{ fontSize: '2.8rem', marginTop: '12px', marginBottom: '16px' }}>
            Meet Our <span className="gold-gradient-text">Expert Advisory Team</span>
          </h1>
          <p style={{ color: '#9BA4B5', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto' }}>
            A seasoned collective of Chartered Accountants, Tax Consultants, US CPAs, and Legal Experts dedicated to your corporate success.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section style={{ padding: '80px 0 100px 0', backgroundColor: '#090A0E' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '30px'
          }}>
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#141822',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(20, 24, 34, 1) 100%)'
                  }} />
                </div>

                <div style={{ padding: '24px 28px', marginTop: '-30px', position: 'relative', zIndex: 2 }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {member.qualifications}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginTop: '4px', marginBottom: '6px' }}>
                    {member.name}
                  </h3>
                  <div style={{ fontSize: '0.9rem', color: '#E5C158', fontWeight: 600, marginBottom: '14px' }}>
                    {member.title}
                  </div>
                  <p style={{ color: '#9BA4B5', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    {member.bio}
                  </p>

                  <div style={{ paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a href={`mailto:${member.email}`} style={{ color: '#9BA4B5', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Mail size={14} color="#D4AF37" />
                      <span>Contact Partner</span>
                    </a>
                    <button onClick={onOpenSchedule} className="btn-outline" style={{ padding: '6px 14px', fontSize: '0.78rem' }}>
                      Book Call
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
