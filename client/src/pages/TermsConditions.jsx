import React from 'react';
import { ShieldCheck, FileCheck, AlertCircle } from 'lucide-react';

export default function TermsConditions() {
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
          <span className="badge-gold">Legal Framework</span>
          <h1 style={{ fontSize: '2.6rem', marginTop: '12px', marginBottom: '16px' }}>
            Terms & <span className="gold-gradient-text">Conditions</span>
          </h1>
          <p style={{ color: '#9BA4B5', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto' }}>
            Terms governing professional advisory, audit engagements, retainership, and use of our online tools.
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
              Kinzei Consultants (Private) Limited Engagement Terms
            </p>

            <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '12px' }}>1. Professional Services Scope</h3>
            <p style={{ marginBottom: '20px' }}>
              All professional engagements for tax return filing, statutory audit, retainership, SECP business registration, and international tax advisory are performed strictly under written engagement letters detailing agreed scope, responsibilities, and professional fees.
            </p>

            <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '12px' }}>2. Client Responsibilities & Data Accuracy</h3>
            <p style={{ marginBottom: '20px' }}>
              Clients are responsible for providing complete, true, and accurate financial records, bank statements, and transaction documents. Kinzei Consultants relies on client-provided data to execute regulatory tax filings and audit procedures.
            </p>

            <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '12px' }}>3. Online Tax Calculator Disclaimer</h3>
            <p style={{ marginBottom: '20px' }}>
              Our online Tax Calculator provides estimates based on current published tax slabs (FBR, IRS, HMRC, UAE FTA). While we strive for absolute accuracy, calculated values serve as preliminary guidance and do not replace formal tax advice tailored to complex corporate structures.
            </p>

            <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '12px' }}>4. Intellectual Property & Brand Rights</h3>
            <p style={{ marginBottom: '20px' }}>
              All content, logo graphics, design systems, and statutory templates on this website are the intellectual property of Kinzei Consultants (Private) Limited. Unauthorized reproduction or redistribution is strictly prohibited.
            </p>

            <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '12px' }}>5. Limitation of Liability</h3>
            <p style={{ marginBottom: '20px' }}>
              Kinzei Consultants is not liable for statutory penalties resulting from client non-disclosure, delayed documentation, or fraudulent records provided by the client.
            </p>

            <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '12px' }}>6. Governing Law</h3>
            <p>
              These Terms & Conditions are governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. Any legal proceedings fall under the jurisdiction of the courts in Lahore.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
