import React from 'react';
import { Mail, Phone, Linkedin, ShieldCheck, Calendar } from 'lucide-react';

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
    <div style={{ backgroundColor: '#FFFFFF', color: '#111827', minHeight: '100vh' }}>
      {/* BANNER */}
      <section style={{
        backgroundColor: '#F8F9FA',
        padding: '60px 0 45px 0',
        textAlign: 'center',
        borderBottom: '1px solid #E5E7EB'
      }}>
        <div className="container">
          <span className="badge-gold">Leadership & Experts</span>
          <h1 style={{ fontSize: '2.8rem', color: '#111827', marginTop: '12px', marginBottom: '16px', fontWeight: 800 }}>
            Meet Our <span style={{ color: '#9E7B3B' }}>Advisory Team</span>
          </h1>
          <p style={{ color: '#4B5563', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            Our team comprises Chartered Accountants, tax attorneys, IRS Enrolled Agents, and IT auditors committed to safeguarding your financial interest.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section style={{ padding: '70px 0 100px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {teamMembers.map((m, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1.5px solid #E5E7EB',
                  overflow: 'hidden',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#9E7B3B';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E5E7EB';
                }}
              >
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={m.image}
                    alt={m.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    backgroundColor: '#FFFFFF',
                    color: '#9E7B3B',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: '20px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                  }}>
                    {m.qualifications}
                  </div>
                </div>

                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.3rem', color: '#111827', marginBottom: '4px', fontWeight: 800 }}>{m.name}</h3>
                  <div style={{ fontSize: '0.9rem', color: '#9E7B3B', fontWeight: 700, marginBottom: '14px' }}>{m.title}</div>
                  <p style={{ fontSize: '0.92rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '20px' }}>{m.bio}</p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E5E7EB', paddingTop: '16px' }}>
                    <a href={`mailto:${m.email}`} style={{ color: '#4B5563', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                      <Mail size={14} color="#9E7B3B" />
                      <span>Contact Partner</span>
                    </a>

                    <button onClick={onOpenSchedule} className="btn-primary" style={{ padding: '6px 14px', fontSize: '0.8rem', borderRadius: '15px' }}>
                      <Calendar size={12} />
                      <span>Book</span>
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
