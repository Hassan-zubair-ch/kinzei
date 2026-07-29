import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, ShieldCheck, Award, Phone, Mail, MapPin, CheckCircle2, 
  Users, FileText, ChevronRight, Briefcase, Star, Sparkles, Scale, BookOpen
} from 'lucide-react';

export default function JavedZafarSection({ onOpenSchedule, showFullDetails = true }) {
  const [activeTab, setActiveTab] = useState('overview');

  const teamMembers = [
    {
      name: 'Javed Zafar',
      designation: 'Managing Partner & Lead CA',
      qualifications: 'ACA (Chartered Accountant)',
      experience: 'Ex-Deloitte Pakistan',
      bio: 'A seasoned finance and corporate executive. Javed Zafar ACA is a Chartered Accountant with extensive experience in finance, accounting, audit, taxation, and financial reporting. He specializes in IFRS compliance, financial planning, budgeting, and strategic financial management.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop'
    },
    {
      name: 'Zeeshan Khalid',
      designation: 'Senior Audit Supervisor',
      qualifications: 'CPA, PIPFA, ICIAP (Certified Internal Auditor)',
      experience: 'Audit & Assurance Lead',
      bio: 'Qualified finance and audit professional experienced in audit & assurance, accounting, taxation, financial reporting, and financial management across diverse industries as Senior Auditor and Audit Supervisor.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop'
    },
    {
      name: 'Iftikhar Hussain',
      designation: 'Senior Partner - Corporate & Finance',
      qualifications: 'CPA, CA Associate, PGDPA',
      experience: '43+ Years Leadership Experience',
      bio: '43+ years of distinguished leadership experience in corporate finance, taxation, corporate governance, ERP implementation (SAP), strategic planning, and business development across major industries.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
    },
    {
      name: 'Muhammad Nouman',
      designation: 'Audit & Financial Advisory Specialist',
      qualifications: 'Chartered Accountant (CA)',
      experience: 'IFRS & ERP Specialist',
      bio: 'Chartered Accountant with expertise in Audit & Assurance, Financial Reporting, and Corporate Finance. Specialist in internal/external audits, cash flow analysis, and SAP Business One & QuickBooks implementation.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop'
    }
  ];

  const serviceCategories = [
    {
      title: 'Audit & Assurance',
      icon: ShieldCheck,
      description: 'Statutory Audits, Internal Control Reviews, Corporate Governance, Due Diligence, Tax Audits, Management Audits, & Certification Services.'
    },
    {
      title: 'Taxation & Litigation',
      icon: Scale,
      description: 'Direct & Indirect Tax Planning, Corporate Income Tax, Sales Tax/GST, FBR Appeals & Representation, Withholding Tax, & Tax Audits.'
    },
    {
      title: 'Corporate & Secretarial',
      icon: Building2,
      description: 'SECP Company Incorporation, Joint Ventures, Corporate Restructuring, Board Minutes, Statutory Registers, & Mergers & Acquisitions.'
    },
    {
      title: 'Business & Financial Advisory',
      icon: Briefcase,
      description: 'Financial Analysis, Business Feasibility, Loan/Financing Structuring, Valuations, Capital Raising, IPO Advisory, & M&A Due Diligence.'
    },
    {
      title: 'BPO & Back-Office Outsourcing',
      icon: Users,
      description: 'Bookkeeping, Payroll Administration, Accounts Receivable/Payable, Bank Reconciliations, Financial Statements, & HR Outsourcing.'
    }
  ];

  const coreValues = [
    'Integrity & Honesty',
    'Client-Centric Approach',
    'Client Confidentiality',
    'Professional Excellence',
    'Ethical Business Practices',
    'Commitment to Quality'
  ];

  const sectors = [
    'NGOs & NPOs', 'Textile Industry', 'Electronics Industry', 
    'Pharmaceutical Industry', 'Education Sector', 'Media Industry', 
    'Trade Associations', 'Real Estate & Developers', 'Agricultural Sector'
  ];

  return (
    <section 
      id="javed-zafar-firm" 
      style={{ 
        padding: '75px 0', 
        backgroundColor: '#F8FAF9', 
        position: 'relative',
        borderTop: '2px solid #E5E7EB',
        borderBottom: '2px solid #E5E7EB'
      }}
    >
      <div className="container">
        
        {/* TOP AGENCY AFFILIATION HEADER */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '30px 36px',
          boxShadow: '0 10px 35px rgba(140, 107, 47, 0.08)',
          border: '1.5px solid rgba(196, 154, 44, 0.3)',
          marginBottom: '45px',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          gap: '30px',
          alignItems: 'center'
        }} className="javed-zafar-header-card">

          {/* Logo */}
          <div style={{
            padding: '12px 18px',
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            border: '1px solid #E5E7EB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
          }}>
            <img 
              src="/javed-zafar-logo.png" 
              alt="Javed Zafar & Co. Chartered Accountants" 
              style={{ height: '90px', width: 'auto', objectFit: 'contain' }} 
            />
          </div>

          {/* Title & Agency Intro */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#FEF3C7',
              color: '#92400E',
              fontSize: '0.78rem',
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              marginBottom: '10px'
            }}>
              <Sparkles size={13} color="#D97706" />
              <span>Chartered Accountancy Practice under Kinzei Consultants</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)',
              color: '#111827',
              fontWeight: 800,
              marginBottom: '8px',
              lineHeight: 1.2
            }}>
              Javed Zafar & Co. <span style={{ color: '#8C6B2F', fontWeight: 600 }}>Chartered Accountants</span>
            </h2>

            <p style={{
              fontSize: '0.96rem',
              color: '#4B5563',
              lineHeight: 1.65,
              maxWidth: '820px'
            }}>
              <strong>Javed Zafar & Co.</strong> is our premier Chartered Accountancy practice operating under <strong>Kinzei Consultants (Private) Limited</strong>. Offering expert Audit & Assurance, Taxation, Bookkeeping, Corporate Compliance, and Financial Advisory services to ensure seamless business compliance and strategic growth.
            </p>
          </div>

          {/* Quick CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '190px' }}>
            <Link 
              to="/javed-zafar-co" 
              style={{
                backgroundColor: '#8C6B2F',
                color: '#FFFFFF',
                padding: '12px 20px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.86rem',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(140, 107, 47, 0.25)',
                transition: 'all 0.2s ease'
              }}
            >
              <span>Explore Practice Profile</span>
              <ChevronRight size={15} />
            </Link>

            <a 
              href="mailto:jz@javedzafarandco.com" 
              style={{
                backgroundColor: '#F3F4F6',
                color: '#1F2937',
                padding: '10px 18px',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '0.82rem',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                border: '1px solid #D1D5DB'
              }}
            >
              <Mail size={14} color="#8C6B2F" />
              <span>Email CA Practice</span>
            </a>
          </div>
        </div>

        {/* DETAILS GRID: OVERVIEW, TEAM, SERVICES, CONTACT */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '35px'
        }}>

          {/* Card 1: Key Professional Team */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '14px',
            padding: '24px',
            border: '1px solid #E5E7EB',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ padding: '8px', backgroundColor: '#FEF3C7', borderRadius: '8px' }}>
                <Users size={20} color="#8C6B2F" />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#111827', fontWeight: 800 }}>Key Professional Team</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {teamMembers.map((member, i) => (
                <div 
                  key={i} 
                  style={{
                    padding: '12px',
                    backgroundColor: '#F9FAFB',
                    borderRadius: '10px',
                    borderLeft: '4px solid #8C6B2F'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 800, color: '#111827', fontSize: '0.95rem' }}>{member.name}</span>
                    <span style={{ fontSize: '0.74rem', backgroundColor: '#E0E7FF', color: '#3730A3', fontWeight: 700, padding: '2px 8px', borderRadius: '10px' }}>
                      {member.qualifications.split(',')[0]}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#8C6B2F', fontWeight: 700, marginTop: '2px' }}>{member.designation}</div>
                  <div style={{ fontSize: '0.8rem', color: '#6B7280', marginTop: '4px', lineHeight: 1.4 }}>{member.experience}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Core CA Services Offered */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '14px',
            padding: '24px',
            border: '1px solid #E5E7EB',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ padding: '8px', backgroundColor: '#FEF3C7', borderRadius: '8px' }}>
                <ShieldCheck size={20} color="#8C6B2F" />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#111827', fontWeight: 800 }}>Core Practice Areas</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {serviceCategories.map((sc, i) => {
                const IconComponent = sc.icon;
                return (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={16} color="#8C6B2F" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1F2937' }}>{sc.title}</div>
                      <div style={{ fontSize: '0.8rem', color: '#6B7280', lineHeight: 1.4 }}>{sc.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 3: Contact & Office Details */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '14px',
            padding: '24px',
            border: '1px solid #E5E7EB',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ padding: '8px', backgroundColor: '#FEF3C7', borderRadius: '8px' }}>
                  <Building2 size={20} color="#8C6B2F" />
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#111827', fontWeight: 800 }}>Contact CA Practice</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <MapPin size={18} color="#8C6B2F" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#111827' }}>Lahore Office Address</div>
                    <div style={{ color: '#4B5563', fontSize: '0.85rem' }}>61, G3 Johar Town, Lahore</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <Phone size={18} color="#8C6B2F" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#111827' }}>Direct Support & Helpline</div>
                    <div style={{ color: '#4B5563', fontSize: '0.85rem' }}>
                      <a href="tel:+923037249070" style={{ color: '#1F2937', textDecoration: 'none', fontWeight: 700 }}>+92 3037249070</a>
                      <span style={{ margin: '0 6px' }}>|</span>
                      <a href="tel:+923007916353" style={{ color: '#1F2937', textDecoration: 'none', fontWeight: 700 }}>+92 3007916353</a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <Mail size={18} color="#8C6B2F" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#111827' }}>Official Email</div>
                    <a href="mailto:jz@javedzafarandco.com" style={{ color: '#8C6B2F', fontWeight: 700, fontSize: '0.88rem' }}>
                      jz@javedzafarandco.com
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #E5E7EB' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>
                  Key Client Sectors Served:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {sectors.slice(0, 6).map((sec, i) => (
                    <span 
                      key={i} 
                      style={{
                        backgroundColor: '#F3F4F6',
                        color: '#374151',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        padding: '3px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      {sec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ marginTop: '24px' }}>
              <button 
                onClick={onOpenSchedule}
                style={{
                  width: '100%',
                  backgroundColor: '#111827',
                  color: '#FFFFFF',
                  padding: '12px',
                  borderRadius: '6px',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <span>Book Consultation with CA Team</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
