import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, Calendar, ShieldCheck } from 'lucide-react';

export default function ServiceDetail({ onOpenSchedule }) {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/services/detail/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setService(data.data);
          setRelated(data.related || []);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading service detail:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div style={{ padding: '120px 0', textAlign: 'center', backgroundColor: '#090A0E', color: '#D4AF37' }}>
        Loading service details...
      </div>
    );
  }

  if (!service) {
    return (
      <div style={{ padding: '120px 0', textAlign: 'center', backgroundColor: '#090A0E', color: '#FFFFFF' }}>
        <h2>Service Not Found</h2>
        <p style={{ color: '#9BA4B5', marginTop: '12px' }}>The requested service page does not exist.</p>
        <Link to="/services" className="btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }}>
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* HIGH-IMPACT HERO BANNER WITH RELEVANT BACKGROUND IMAGE */}
      <section style={{
        position: 'relative',
        padding: '110px 0 90px 0',
        backgroundImage: `linear-gradient(180deg, rgba(9, 10, 14, 0.82) 0%, rgba(9, 10, 14, 0.96) 100%), url(${service.bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px' }}>
              <span className="badge-gold">{service.countryName || 'Global Services'}</span>
              <span style={{ color: '#9BA4B5', fontSize: '0.85rem' }}>• Kinzei Practice Area</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              lineHeight: 1.2,
              marginBottom: '20px',
              color: '#FFFFFF',
              fontWeight: 800
            }}>
              {service.title}
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: '#D1D7E3',
              lineHeight: 1.7,
              marginBottom: '32px'
            }}>
              {service.overview}
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button onClick={onOpenSchedule} className="btn-primary" style={{ padding: '14px 30px' }}>
                <Calendar size={18} />
                <span>Book Schedule Now</span>
              </button>
              <a href="tel:03034063970" className="btn-outline" style={{ padding: '14px 26px' }}>
                <Phone size={16} />
                <span>03034063970</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED CONTENT SECTION */}
      <section style={{ padding: '80px 0 100px 0', backgroundColor: '#090A0E' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 340px',
            gap: '50px'
          }} className="detail-layout">

            {/* Main Left Content */}
            <div>
              <div style={{ backgroundColor: '#141822', borderRadius: '20px', padding: '40px', border: '1px solid rgba(255,255,255,0.06)', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>
                  Service Breakdown & Approach
                </h2>

                {service.paragraphs && service.paragraphs.map((p, idx) => (
                  <p key={idx} style={{ color: '#B0B8C8', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '20px' }}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Key Features & Deliverables */}
              {service.features && service.features.length > 0 && (
                <div style={{ backgroundColor: '#141822', borderRadius: '20px', padding: '40px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '24px' }}>
                    Key Services & Core Capabilities
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {service.features.map((feat, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '14px',
                        backgroundColor: '#1A1E2B',
                        padding: '16px 20px',
                        borderRadius: '12px',
                        border: '1px solid rgba(212, 175, 55, 0.15)'
                      }}>
                        <CheckCircle2 size={22} color="#D4AF37" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ color: '#E1E6F0', fontSize: '0.98rem', lineHeight: 1.5, fontWeight: 500 }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Right */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

              {/* Quick Consultation Box */}
              <div style={{
                backgroundColor: '#181C26',
                borderRadius: '20px',
                padding: '30px',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                textAlign: 'center'
              }}>
                <ShieldCheck size={40} color="#D4AF37" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '10px' }}>Need Expert Advisory?</h3>
                <p style={{ color: '#9BA4B5', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  Speak directly with senior auditors and certified tax specialists regarding {service.title}.
                </p>

                <button onClick={onOpenSchedule} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Book Schedule Now</span>
                </button>

                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.85rem' }}>
                  <div style={{ color: '#8A94A6' }}>Or Email Direct:</div>
                  <a href="mailto:kinzeiconsultants@gmail.com" style={{ color: '#D4AF37', fontWeight: 600 }}>kinzeiconsultants@gmail.com</a>
                </div>
              </div>

              {/* Related Services */}
              {related.length > 0 && (
                <div style={{
                  backgroundColor: '#141822',
                  borderRadius: '20px',
                  padding: '28px',
                  border: '1px solid rgba(255,255,255,0.06)'
                }}>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '18px', paddingBottom: '8px', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>
                    Related Practice Areas
                  </h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {related.map(rel => (
                      <Link
                        key={rel.id}
                        to={`/services/detail/${rel.id}`}
                        style={{
                          backgroundColor: '#1A1E2B',
                          padding: '14px 16px',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          color: '#FFFFFF',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          transition: 'all 0.2s'
                        }}
                      >
                        <span>{rel.title}</span>
                        <ArrowRight size={14} color="#D4AF37" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          .detail-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
