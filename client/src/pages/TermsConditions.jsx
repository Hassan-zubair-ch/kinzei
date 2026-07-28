import React from 'react';
import { ShieldCheck, FileCheck, AlertCircle } from 'lucide-react';

export default function TermsConditions() {
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
          <span className="badge-gold">Legal Framework</span>
          <h1 style={{ fontSize: '2.6rem', color: '#111827', marginTop: '12px', marginBottom: '16px', fontWeight: 800 }}>
            Terms & <span style={{ color: '#9E7B3B' }}>Conditions</span>
          </h1>
          <p style={{ color: '#4B5563', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto' }}>
            Terms governing professional advisory, audit engagements, retainership, and use of our online tools.
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
              Kinzei Consultants (Private) Limited Engagement Terms
            </p>

            <h3 style={{ color: '#111827', fontSize: '1.4rem', marginBottom: '12px', fontWeight: 800 }}>1. Professional Services Scope</h3>
            <p style={{ marginBottom: '20px' }}>
              All professional engagements for tax return filing, statutory audit, retainership, SECP business registration, and international tax advisory are performed strictly under written engagement letters detailing agreed scope, responsibilities, and professional fees.
            </p>

            <h3 style={{ color: '#111827', fontSize: '1.4rem', marginBottom: '12px', fontWeight: 800 }}>2. Client Responsibilities & Data Accuracy</h3>
            <p style={{ marginBottom: '20px' }}>
              Clients are responsible for providing complete, true, and accurate financial records, bank statements, and transaction documents. Kinzei Consultants relies on client-provided data to execute regulatory tax filings and audit procedures.
            </p>

            <h3 style={{ color: '#111827', fontSize: '1.4rem', marginBottom: '12px', fontWeight: 800 }}>3. Online Tax Calculator Disclaimer</h3>
            <p style={{ marginBottom: '20px' }}>
              Our online Pakistan Tax Calculator provides estimates based on current published FBR tax slabs. Calculated values serve as preliminary guidance and do not replace formal tax advice tailored to complex corporate structures.
            </p>

            <h3 style={{ color: '#111827', fontSize: '1.4rem', marginBottom: '12px', fontWeight: 800 }}>4. Intellectual Property & Brand Rights</h3>
            <p style={{ marginBottom: '20px' }}>
              All content, logo graphics, design systems, and statutory templates on this website are the intellectual property of Kinzei Consultants (Private) Limited. Unauthorized reproduction or redistribution is strictly prohibited.
            </p>

            <h3 style={{ color: '#111827', fontSize: '1.4rem', marginBottom: '12px', fontWeight: 800 }}>5. Limitation of Liability</h3>
            <p>
              Kinzei Consultants maintains maximum professional diligence. Final statutory determinations rest with relevant revenue and government authorities (FBR, SECP, IRS, HMRC, ZATCA).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
