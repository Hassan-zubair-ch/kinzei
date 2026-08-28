import React from 'react';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111827', minHeight: '100vh' }}>
      {/* HEADER BANNER */}
      <section style={{
        backgroundColor: '#F8F9FA',
        padding: '60px 0 45px 0',
        textAlign: 'center',
        borderBottom: '1px solid #E5E7EB'
      }}>
        <div className="container">
          <span className="badge-gold">Legal Information</span>
          <h1 style={{ fontSize: '2.6rem', color: '#111827', marginTop: '12px', marginBottom: '16px', fontWeight: 800 }}>
            Privacy <span style={{ color: '#9E7B3B' }}>Policy</span>
          </h1>
          <p style={{ color: '#4B5563', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto' }}>
            Kinzei Consultants (Private) Limited is committed to maintaining strict confidentiality and protecting your corporate and financial data.
          </p>
        </div>
      </section>

      {/* CONTENT BODY */}
      <section style={{ padding: '60px 0 90px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '40px',
            border: '1.5px solid #E5E7EB',
            boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
            color: '#374151',
            lineHeight: 1.8
          }}>
            <p style={{ fontSize: '0.9rem', color: '#9E7B3B', fontWeight: 700, marginBottom: '24px' }}>
              Effective Date: January 1, 2026 | Last Updated: Tax Year 2026
            </p>

            <h3 style={{ color: '#111827', fontSize: '1.4rem', marginBottom: '12px', fontWeight: 800 }}>1. Information We Collect</h3>
            <p style={{ marginBottom: '20px' }}>
              When you consult with Kinzei Consultants (Private) Limited, we collect information necessary to perform statutory audit, taxation filings, SECP business registration, and financial advisory services. This includes personal identification, company financial records, tax identification numbers (NTN/CNIC/EIN/TRN), and contact details.
            </p>

            <h3 style={{ color: '#111827', fontSize: '1.4rem', marginBottom: '12px', fontWeight: 800 }}>2. How We Use Your Financial Information</h3>
            <p style={{ marginBottom: '20px' }}>
              Your confidential information is strictly used to prepare tax returns, complete statutory audits, file regulatory reports with the FBR, SECP, IRS, or HMRC, and deliver requested advisory services. We do not sell, rent, or trade client data under any circumstances.
            </p>

            <h3 style={{ color: '#111827', fontSize: '1.4rem', marginBottom: '12px', fontWeight: 800 }}>3. Data Protection & Confidentiality</h3>
            <p style={{ marginBottom: '20px' }}>
              All client documents and correspondence are protected under strict professional non-disclosure protocols and encrypted digital storage systems. Access is restricted strictly to assigned chartered accountants and tax consultants.
            </p>

            <h3 style={{ color: '#111827', fontSize: '1.4rem', marginBottom: '12px', fontWeight: 800 }}>4. Third-Party Regulatory Disclosures</h3>
            <p style={{ marginBottom: '20px' }}>
              Information is submitted to statutory revenue and regulatory bodies (such as FBR, SECP, IRS, HMRC, or UAE FTA) solely upon your explicit authorization or under legally binding court subpoenas.
            </p>

            <h3 style={{ color: '#111827', fontSize: '1.4rem', marginBottom: '12px', fontWeight: 800 }}>5. Contact Us Regarding Privacy</h3>
            <p>
              If you have any questions regarding our privacy practices, please contact our compliance desk at <strong>info@kinzeiconsultants.com</strong> or call <strong>03034063970</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
