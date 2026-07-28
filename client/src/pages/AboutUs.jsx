import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Target, Eye, Award, CheckCircle2, Building, Users, 
  ArrowRightCircle, FileText, Briefcase, ChevronDown, ChevronUp, Calendar 
} from 'lucide-react';

export default function AboutUs({ onOpenSchedule }) {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "What regulatory registrations does Kinzei Consultants handle in Pakistan?",
      a: "We manage complete company incorporation with SECP (Private Limited, SMC-Pvt, LLP), FBR Income Tax & Sales Tax (NTN / STRN), Provincial Revenue Authorities (PRA, SRB, KPRA), Chamber of Commerce membership, and EOBI/PESSI registration."
    },
    {
      q: "How does Kinzei handle US, UK, UAE, Saudi & German entity setups?",
      a: "Our international desk manages turnkey entity formation, obtaining IRS EIN numbers, state sales tax permits, Companies House incorporation, HMRC Corporation Tax & VAT registration, Saudi ZATCA filings, German Finanzamt setups, and annual compliance returns."
    },
    {
      q: "What is included in Kinzei’s monthly Retainership Service?",
      a: "Our retainership model covers regular monthly management accounting, sales tax & withholding tax filings, SECP annual returns, payroll management, and direct access to senior consultants for day-to-day advisory."
    },
    {
      q: "How accurate is the online Tax Calculator?",
      a: "Our Pakistan Tax Calculator is updated per the latest FBR tax slabs (Tax Year 2026-27, 2025-26 & 2024-25). It automatically accounts for Medical Allowance exemptions up to 10% of basic salary."
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111827' }}>
      {/* 1. HEADER BANNER */}
      <section style={{
        backgroundColor: '#F8F9FA',
        padding: '60px 0 45px 0',
        textAlign: 'center',
        borderBottom: '1px solid #E5E7EB'
      }}>
        <div className="container">
          <span className="badge-gold">About Our Firm</span>
          <h1 style={{ fontSize: '2.8rem', color: '#111827', marginTop: '12px', marginBottom: '16px', fontWeight: 800 }}>
            Kinzei Consultants <span style={{ color: '#9E7B3B' }}>(Private) Limited</span>
          </h1>
          <p style={{ color: '#4B5563', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto' }}>
            Providing independent statutory audit, corporate taxation, legal retainership, and multi-country corporate advisory with absolute accuracy, transparency, and integrity.
          </p>
        </div>
      </section>

      {/* 2. TRUSTED FINANCIAL PARTNERS */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '60px',
            alignItems: 'center'
          }} className="about-grid">

            {/* Left Box */}
            <div style={{
              backgroundColor: '#F8F9FA',
              borderRadius: '24px',
              padding: '40px',
              border: '1.5px solid rgba(158, 123, 59, 0.3)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
            }}>
              <span className="badge-gold" style={{ marginBottom: '16px' }}>Est. 2016</span>
              <h3 style={{ fontSize: '1.8rem', color: '#111827', marginBottom: '16px', fontWeight: 800 }}>
                Trusted Accounting & Advisory Specialists
              </h3>
              <p style={{ color: '#4B5563', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '20px' }}>
                Kinzei Consultants (Private) Limited operates as a leading corporate tax advisory and audit firm based in Lahore, Pakistan, extending services across Pakistan, US, UK, UAE, Saudi Arabia, and Germany.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['100% Tax Statute Compliance', 'FBR Active Tax Payer Status', 'SECP Incorporation Specialists', 'Multi-Jurisdictional Advisory'].map((feat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: '#111827', fontWeight: 700 }}>
                    <CheckCircle2 size={16} color="#9E7B3B" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Overview */}
            <div>
              <span className="badge-gold">Our Legacy</span>
              <h2 style={{ fontSize: '2.4rem', color: '#111827', marginTop: '12px', marginBottom: '20px', fontWeight: 800 }}>
                Navigating Regulatory Landscapes <span style={{ color: '#9E7B3B' }}>With Confidence</span>
              </h2>
              <p style={{ color: '#4B5563', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '24px' }}>
                We assist companies in managing financial risks, ensuring complete FBR & SECP statutory compliance, and optimizing tax positions through empirical tax planning and strategic advisory.
              </p>
              <p style={{ color: '#4B5563', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '32px' }}>
                Our senior partners bring years of direct experience working with revenue authorities, corporate registries, and financial institutions to safeguard client assets and elevate operating margins.
              </p>

              <button onClick={onOpenSchedule} className="btn-primary" style={{ padding: '14px 30px', borderRadius: '30px' }}>
                <Calendar size={18} />
                <span>Book Advisory Session</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section style={{ padding: '80px 0', backgroundColor: '#F8F9FA' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }} className="mv-grid">

            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '36px',
              border: '1.5px solid #E5E7EB',
              boxShadow: '0 8px 25px rgba(0,0,0,0.04)'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                backgroundColor: '#FFFBEB',
                border: '1px solid #9E7B3B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9E7B3B',
                marginBottom: '20px'
              }}>
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#111827', marginBottom: '12px', fontWeight: 800 }}>Our Mission</h3>
              <p style={{ color: '#4B5563', fontSize: '0.96rem', lineHeight: 1.7 }}>
                To empower businesses with flawless statutory compliance, actionable financial insights, and legal tax optimization that drive sustainable economic growth.
              </p>
            </div>

            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '36px',
              border: '1.5px solid #E5E7EB',
              boxShadow: '0 8px 25px rgba(0,0,0,0.04)'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                backgroundColor: '#FFFBEB',
                border: '1px solid #9E7B3B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9E7B3B',
                marginBottom: '20px'
              }}>
                <Eye size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#111827', marginBottom: '12px', fontWeight: 800 }}>Our Vision</h3>
              <p style={{ color: '#4B5563', fontSize: '0.96rem', lineHeight: 1.7 }}>
                To be the most trusted corporate advisory and audit firm across Pakistan and international jurisdictions, renowned for technical excellence and uncompromising integrity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span className="badge-gold">Common Queries</span>
            <h2 style={{ fontSize: '2.4rem', color: '#111827', marginTop: '10px', fontWeight: 800 }}>
              Frequently Asked <span style={{ color: '#9E7B3B' }}>Questions</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#F8F9FA',
                    borderRadius: '14px',
                    border: '1.5px solid #E5E7EB',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '18px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: 'transparent',
                      color: '#111827',
                      fontSize: '1.02rem',
                      fontWeight: 700,
                      textAlign: 'left'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} color="#9E7B3B" /> : <ChevronDown size={20} color="#6B7280" />}
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 20px 24px', color: '#4B5563', fontSize: '0.96rem', lineHeight: 1.6 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          .about-grid, .mv-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
