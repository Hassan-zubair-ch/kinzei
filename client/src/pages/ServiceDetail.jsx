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
      <div style={{ padding: '120px 0', textAlign: 'center', backgroundColor: '#FFFFFF', color: '#9E7B3B', fontWeight: 700 }}>
        Loading service details...
      </div>
    );
  }

  if (!service) {
    return (
      <div style={{ padding: '120px 0', textAlign: 'center', backgroundColor: '#FFFFFF', color: '#111827' }}>
        <h2>Service Not Found</h2>
        <p style={{ color: '#4B5563', marginTop: '12px' }}>The requested service page does not exist.</p>
        <Link to="/services" className="btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }}>
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111827', minHeight: '100vh' }}>
      {/* HERO BANNER WITH RELEVANT BACKGROUND IMAGE */}
      <section style={{
        position: 'relative',
        padding: '90px 0 70px 0',
        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.88) 0%, rgba(248, 249, 250, 0.98) 100%), url(${service.bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '1px solid #E5E7EB'
      }}>
        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            <span className="badge-gold">
              {service.countryName ? `${service.countryName} Advisory` : 'Corporate Advisory'}
            </span>

            <h1 style={{ fontSize: '2.8rem', color: '#111827', marginTop: '14px', marginBottom: '16px', fontWeight: 800 }}>
              {service.title}
            </h1>

            <p style={{ fontSize: '1.15rem', color: '#4B5563', lineHeight: '1.7', marginBottom: '28px' }}>
              {service.shortDescription}
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button onClick={onOpenSchedule} className="btn-primary" style={{ padding: '12px 28px', borderRadius: '30px' }}>
                <Calendar size={18} />
                <span>Book Service Advisory</span>
              </button>

              <a href="tel:03034063970" className="btn-outline" style={{ padding: '12px 26px', borderRadius: '30px' }}>
                <Phone size={18} />
                <span>Call 03034063970</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT BODY */}
      <section style={{ padding: '70px 0 100px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '50px' }} className="detail-grid">
            
            {/* Main Content Column */}
            <div>
              <h2 style={{ fontSize: '1.8rem', color: '#111827', marginBottom: '16px', fontWeight: 800 }}>
                Overview & Statutory Scope
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: '1.8', marginBottom: '24px', fontWeight: 500 }}>
                {service.overview}
              </p>

              {service.paragraphs && service.paragraphs.map((p, idx) => (
                <p key={idx} style={{ fontSize: '1rem', color: '#4B5563', lineHeight: '1.8', marginBottom: '20px' }}>
                  {p}
                </p>
              ))}

              {/* Key Features & Deliverables */}
              {service.features && service.features.length > 0 && (
                <div style={{ marginTop: '40px', backgroundColor: '#F8F9FA', borderRadius: '20px', padding: '36px', border: '1.5px solid rgba(158, 123, 59, 0.3)' }}>
                  <h3 style={{ fontSize: '1.4rem', color: '#111827', marginBottom: '20px', fontWeight: 800 }}>
                    Core Deliverables & Regulatory Compliance
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {service.features.map((f, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                        <CheckCircle2 size={20} color="#9E7B3B" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontSize: '0.98rem', color: '#1F2937', lineHeight: '1.6', fontWeight: 600 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar CTA Card */}
            <div>
              <div style={{
                backgroundColor: '#F8F9FA',
                borderRadius: '20px',
                padding: '30px',
                border: '1.5px solid rgba(158, 123, 59, 0.35)',
                position: 'sticky',
                top: '100px'
              }}>
                <h3 style={{ fontSize: '1.4rem', color: '#111827', marginBottom: '14px', fontWeight: 800 }}>
                  Need Professional Guidance?
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '24px' }}>
                  Speak directly with our senior partners regarding custom compliance strategies, SECP/FBR filings, or foreign entity setup.
                </p>

                <button onClick={onOpenSchedule} className="btn-primary" style={{ width: '100%', justifyContent: 'center', borderRadius: '12px', padding: '12px', marginBottom: '12px' }}>
                  <Calendar size={16} />
                  <span>Reserve Advisory Session</span>
                </button>

                <a href="tel:03034063970" className="btn-outline" style={{ width: '100%', justifyContent: 'center', borderRadius: '12px', padding: '12px' }}>
                  <Phone size={16} />
                  <span>Call 03034063970</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          .detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
