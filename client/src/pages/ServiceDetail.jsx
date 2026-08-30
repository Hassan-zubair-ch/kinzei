import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, Phone, Calendar, ArrowRight, ShieldCheck, 
  Building2, Globe, FileText, ChevronRight, Award, Sparkles 
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import AuditAssurance from './AuditAssurance';
import AccountingReporting from './AccountingReporting';
import TaxAdvisory from './TaxAdvisory';
import RegistrationCompliance from './RegistrationCompliance';

export default function ServiceDetail({ onOpenSchedule }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const phoneNumber = "923034063970";
  const defaultMessage = encodeURIComponent("Hello Kinzei Consultants, I would like to consult regarding your professional advisory services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  // 1. ROUTE TO BESPOKE HIGH-END DEDICATED LAYOUTS
  if (id === 'audit-assurance') {
    return <AuditAssurance onOpenSchedule={onOpenSchedule} />;
  }

  if (id === 'accounting-financial-reporting' || id === 'accounting-reporting') {
    return <AccountingReporting onOpenSchedule={onOpenSchedule} />;
  }

  if (id === 'taxation-services' || id === 'tax-advisory') {
    return <TaxAdvisory onOpenSchedule={onOpenSchedule} />;
  }

  if (id === 'registration-licensing-compliance' || id === 'business-registration-services') {
    return <RegistrationCompliance onOpenSchedule={onOpenSchedule} />;
  }

  // 2. MODULAR HIGH-END LAYOUT FOR INTERNATIONAL & SPECIALIZED SERVICES
  const allServices = Object.values(servicesData).flat();
  const initialService = allServices.find(s => s.id === id) || null;
  const initialRelated = initialService 
    ? allServices.filter(s => s.id !== id && (s.country === initialService.country || s.country === 'pk')).slice(0, 3)
    : [];

  const [service, setService] = useState(initialService);
  const [related, setRelated] = useState(initialRelated);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = allServices.find(s => s.id === id);
    if (found) {
      setService(found);
      setRelated(allServices.filter(s => s.id !== id && (s.country === found.country || s.country === 'pk')).slice(0, 3));
    }
  }, [id]);

  if (!service) {
    return (
      <div style={{ padding: '120px 0', textAlign: 'center', backgroundColor: '#FFFFFF', color: '#111827', minHeight: '60vh' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#0F172A' }}>Service Page Not Found</h2>
          <p style={{ color: '#64748B', marginTop: '14px', fontSize: '1.05rem', lineHeight: 1.6 }}>
            The requested advisory service page does not exist or has been relocated.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginTop: '28px' }}>
            <Link to="/services" className="btn-primary" style={{ padding: '12px 28px', borderRadius: '8px' }}>
              Explore All Services
            </Link>
            <Link to="/" className="btn-outline" style={{ padding: '12px 24px', borderRadius: '8px' }}>
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111827', minHeight: '100vh' }}>
      
      {/* 1. HERO BANNER */}
      <section style={{
        position: 'relative',
        padding: '85px 0 70px 0',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: '#FFFFFF',
        overflow: 'hidden'
      }}>
        {/* Glow Element */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 160, 23, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '880px' }}>
            
            {/* Breadcrumb Navigation */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.86rem',
              color: '#94A3B8',
              marginBottom: '16px'
            }}>
              <Link to="/" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Home</Link>
              <ChevronRight size={14} />
              <Link to="/services" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Services</Link>
              <ChevronRight size={14} />
              <span style={{ color: '#FCD34D', fontWeight: 700 }}>{service.title}</span>
            </div>

            {/* Badge */}
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <span style={{
                backgroundColor: 'rgba(212, 160, 23, 0.2)',
                color: '#FCD34D',
                border: '1px solid rgba(212, 160, 23, 0.45)',
                padding: '5px 14px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Globe size={13} color="#FCD34D" />
                <span>{service.countryName ? `${service.countryName} Advisory` : 'Global Advisory'}</span>
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.3rem, 4vw, 3.4rem)',
              lineHeight: 1.18,
              fontWeight: 900,
              color: '#FFFFFF',
              marginBottom: '18px',
              fontFamily: 'var(--font-heading)'
            }}>
              {service.title}
            </h1>

            <p style={{
              fontSize: '1.12rem',
              color: '#CBD5E1',
              lineHeight: 1.7,
              marginBottom: '32px',
              fontWeight: 500
            }}>
              {service.shortDescription}
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenSchedule} 
                className="btn-primary" 
                style={{ padding: '14px 32px', fontSize: '0.92rem', borderRadius: '8px' }}
              >
                <Calendar size={18} />
                <span>Book Advisory Session</span>
              </button>

              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  padding: '14px 26px',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)'
                }}
              >
                <Phone size={17} />
                <span>Direct WhatsApp: 03034063970</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '24px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            textAlign: 'center'
          }}>
            {[
              { num: "100%", label: "Statutory Compliance" },
              { num: "Direct", label: "Senior Partner Advisory" },
              { num: "Tier-1", label: "Quality Assurance" },
              { num: "24/7", label: "Dedicated WhatsApp Support" }
            ].map((stat, sIdx) => (
              <div key={sIdx} style={{ padding: '8px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#B8860B', marginBottom: '2px' }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: '0.84rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTENT BODY & SIDEBAR */}
      <section style={{ padding: '80px 0 100px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 360px',
            gap: '50px'
          }} className="detail-layout-grid">
            
            {/* Left Content Column */}
            <div>
              <div style={{ marginBottom: '36px' }}>
                <span className="badge-gold" style={{ marginBottom: '12px' }}>Overview &amp; Scope</span>
                <h2 style={{ fontSize: '2rem', color: '#0F172A', fontWeight: 900, marginTop: '8px', marginBottom: '16px' }}>
                  Executive Advisory Overview
                </h2>
                <p style={{ fontSize: '1.06rem', color: '#334155', lineHeight: 1.8, marginBottom: '20px', fontWeight: 500 }}>
                  {service.overview}
                </p>

                {service.paragraphs && service.paragraphs.map((p, idx) => (
                  <p key={idx} style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.8, marginBottom: '18px', fontWeight: 500 }}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Core Deliverables Grid */}
              {service.features && service.features.length > 0 && (
                <div style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '16px',
                  padding: '36px',
                  border: '1.5px solid #E2E8F0',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
                  marginTop: '40px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
                    <ShieldCheck size={26} color="#D4A017" />
                    <h3 style={{ fontSize: '1.4rem', color: '#0F172A', fontWeight: 800, margin: 0 }}>
                      Core Deliverables &amp; Regulatory Scope
                    </h3>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        backgroundColor: '#FFFFFF',
                        padding: '14px 18px',
                        borderRadius: '10px',
                        border: '1px solid #E2E8F0'
                      }}>
                        <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontSize: '0.94rem', color: '#1E293B', lineHeight: 1.55, fontWeight: 600 }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar */}
            <div>
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                padding: '32px 26px',
                border: '1.5px solid #E2E8F0',
                boxShadow: '0 12px 35px rgba(0,0,0,0.06)',
                position: 'sticky',
                top: '100px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  backgroundColor: '#FFFBEB',
                  border: '1.5px solid #D4A017',
                  color: '#B8860B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <Sparkles size={24} />
                </div>

                <h3 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '10px', fontWeight: 800 }}>
                  Need Custom Advisory?
                </h3>
                
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '22px', fontWeight: 500 }}>
                  Speak directly with our senior managing partners to discuss cross-border structure, local tax minimization, or institutional compliance.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button 
                    onClick={onOpenSchedule} 
                    className="btn-primary" 
                    style={{ width: '100%', justifyContent: 'center', borderRadius: '8px', padding: '13px', fontSize: '0.9rem' }}
                  >
                    <Calendar size={16} />
                    <span>Schedule Free Session</span>
                  </button>

                  <a 
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hello Kinzei Consultants, I would like to consult about ${service.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      backgroundColor: '#25D366',
                      color: '#FFFFFF',
                      padding: '12px',
                      borderRadius: '8px',
                      fontWeight: 800,
                      fontSize: '0.88rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      textDecoration: 'none'
                    }}
                  >
                    <Phone size={15} />
                    <span>WhatsApp Senior Lead</span>
                  </a>
                </div>

                {/* Trust Points */}
                <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #F1F5F9', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    "Strict Non-Disclosure Agreement (NDA)",
                    "Direct Senior Partner Oversight",
                    "Guaranteed Statutory Timelines"
                  ].map((pt, pIdx) => (
                    <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#334155', fontWeight: 600 }}>
                      <CheckCircle2 size={14} color="#10B981" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. RELATED SERVICES */}
      {related.length > 0 && (
        <section style={{ padding: '75px 0', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '45px' }}>
              <span className="badge-gold">Explore More</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#0F172A', marginTop: '10px' }}>
                Related Professional Services
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}>
              {related.map((rel, rIdx) => (
                <div 
                  key={rIdx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '14px',
                    padding: '30px 24px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  className="interactive-card"
                >
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                    {rel.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px', flexGrow: 1, fontWeight: 500 }}>
                    {rel.shortDescription}
                  </p>
                  <Link 
                    to={`/services/detail/${rel.id}`}
                    style={{
                      color: '#B8860B',
                      fontWeight: 800,
                      fontSize: '0.88rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginTop: 'auto'
                    }}
                  >
                    <span>View Service Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 5. CALL TO ACTION BANNER */}
      <section style={{
        padding: '75px 0',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: '#FFFFFF',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '14px' }}>
            Elevate Your Business with <span style={{ color: '#D4A017' }}>Kinzei Consultants</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: 1.65, marginBottom: '32px', fontWeight: 500 }}>
            Connect with our Chartered Accountants, Tax Litigators, and Corporate Advisors for tailored, confidential strategic guidance.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenSchedule} 
              className="btn-primary" 
              style={{ padding: '14px 34px', fontSize: '0.92rem', borderRadius: '8px' }}
            >
              <Calendar size={18} />
              <span>Schedule Free Consultation</span>
            </button>
            <a 
              href="tel:03034063970" 
              className="btn-outline" 
              style={{ padding: '14px 28px', fontSize: '0.92rem', borderRadius: '8px', color: '#FFFFFF', borderColor: '#CBD5E1' }}
            >
              <Phone size={16} />
              <span>Call 03034063970</span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          .detail-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>

    </div>
  );
}
