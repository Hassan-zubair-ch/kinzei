import React from 'react';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div>
      {/* HEADER BANNER */}
      <section style={{
        background: 'linear-gradient(180deg, #181C26 0%, #090A0E 100%)',
        padding: '70px 0 50px 0',
        textAlign: 'center',
        borderBottom: '1px solid rgba(212, 175, 55, 0.15)'
      }}>
        <div className="container">
          <span className="badge-gold">Legal Information</span>
          <h1 style={{ fontSize: '2.6rem', marginTop: '12px', marginBottom: '16px' }}>
            Privacy <span className="gold-gradient-text">Policy</span>
          </h1>
          <p style={{ color: '#9BA4B5', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto' }}>
            Kinzei Consultants (Private) Limited is committed to maintaining strict confidentiality and protecting your corporate and financial data.
          </p>
        </div>
      </section>

      {/* CONTENT BODY */}
      <section style={{ padding: '70px 0 100px 0', backgroundColor: '#090A0E' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{
            backgroundColor: '#141822',
            borderRadius: '20px',
            padding: '40px',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            color: '#B0B8C8',
            lineHeight: 1.8
          }}>
            <p style={{ fontSize: '0.9rem', color: '#E5C158', fontWeight: 600, marginBottom: '24px' }}>
              Effective Date: January 1, 2026 | Last Updated: Tax Year 2026
            </p>

            <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '12px' }}>1. Information We Collect</h3>
            <p style={{ marginBottom: '20px' }}>
              When you consult with Kinzei Consultants (Private) Limited / AbuBaker Jatoi & Co., we collect information necessary to perform statutory audit, taxation filings, SECP business registration, and financial advisory services. This includes personal identification, company financial records, tax identification numbers (NTN/CNIC/EIN/TRN), and contact details.
            </p>

            <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '12px' }}>2. How We Use Your Financial Information</h3>
            <p style={{ marginBottom: '20px' }}>
              Your confidential information is strictly used to prepare tax returns, complete statutory audits, file regulatory reports with the FBR, SECP, IRS, or HMRC, and deliver requested advisory services. We do not sell, rent, or trade client data under any circumstances.
            </p>

            <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '12px' }}>3. Data Protection & Confidentiality</h3>
            <p style={{ marginBottom: '20px' }}>
              All client documents and correspondence are protected under strict professional non-disclosure protocols and encrypted digital storage systems. Access is restricted strictly to assigned chartered accountants and tax consultants.
            </p>

            <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '12px' }}>4. Third-Party Regulatory Disclosures</h3>
            <p style={{ marginBottom: '20px' }}>
              Information is submitted to statutory revenue and regulatory bodies (such as FBR, SECP, IRS, HMRC, or UAE FTA) solely upon your explicit authorization or under legally binding court subpoenas.
            </p>

            <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '12px' }}>5. Contact Us Regarding Privacy</h3>
            <p>
              If you have any questions regarding our Privacy Policy or wish to update your corporate records, please contact our Compliance Officer at <strong style={{ color: '#D4AF37' }}>info@abjatoico.com</strong> or call <strong style={{ color: '#FFFFFF' }}>+92 335-093330-9</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
