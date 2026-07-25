import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'pk',
    service: 'Taxation Services',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMsg(data.message);
        setFormData({ name: '', email: '', phone: '', country: 'pk', service: 'Taxation Services', message: '' });
      } else {
        setErrorMsg(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setErrorMsg('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
          <span className="badge-gold">Get In Touch</span>
          <h1 style={{ fontSize: '2.8rem', marginTop: '12px', marginBottom: '16px' }}>
            Contact <span className="gold-gradient-text">Kinzei Consultants</span>
          </h1>
          <p style={{ color: '#9BA4B5', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto' }}>
            Reach out to our Lahore office or schedule a consultation regarding tax, audit, statutory incorporation, or international expansion.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section style={{ padding: '80px 0 100px 0', backgroundColor: '#090A0E' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '50px'
          }} className="contact-grid">

            {/* Left Info Cards */}
            <div>
              <h2 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '24px' }}>
                Contact Information
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                <div style={{ backgroundColor: '#141822', padding: '24px', borderRadius: '16px', border: '1px solid rgba(212, 175, 55, 0.2)', display: 'flex', gap: '16px' }}>
                  <MapPin size={28} color="#D4AF37" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '4px' }}>Office Location</h4>
                    <p style={{ color: '#9BA4B5', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      Office No. 1009, 10th Floor, Al-Hafeez Heights, 65-D1, Gulberg III, Lahore, Pakistan
                    </p>
                  </div>
                </div>

                <div style={{ backgroundColor: '#141822', padding: '24px', borderRadius: '16px', border: '1px solid rgba(212, 175, 55, 0.2)', display: 'flex', gap: '16px' }}>
                  <Phone size={28} color="#D4AF37" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '4px' }}>Phone Helpline</h4>
                    <a href="tel:03034063970" style={{ display: 'block', color: '#E5C158', fontWeight: 700, fontSize: '1.1rem' }}>03034063970</a>
                  </div>
                </div>

                <div style={{ backgroundColor: '#141822', padding: '24px', borderRadius: '16px', border: '1px solid rgba(212, 175, 55, 0.2)', display: 'flex', gap: '16px' }}>
                  <Mail size={28} color="#D4AF37" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '4px' }}>Email Inquiry</h4>
                    <a href="mailto:kinzeiconsultants@gmail.com" style={{ display: 'block', color: '#D1D7E3', fontSize: '0.95rem' }}>kinzeiconsultants@gmail.com</a>
                  </div>
                </div>

                <div style={{ backgroundColor: '#141822', padding: '24px', borderRadius: '16px', border: '1px solid rgba(212, 175, 55, 0.2)', display: 'flex', gap: '16px' }}>
                  <Clock size={28} color="#D4AF37" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '4px' }}>Working Hours</h4>
                    <p style={{ color: '#9BA4B5', fontSize: '0.95rem' }}>9 AM - 6 PM , Monday - Friday</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div style={{
              backgroundColor: '#141822',
              borderRadius: '20px',
              padding: '40px',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}>
              <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '10px' }}>Send Us a Message</h3>
              <p style={{ color: '#9BA4B5', fontSize: '0.92rem', marginBottom: '24px' }}>
                Fill out the form below to receive professional tax or audit consultation from Kinzei Consultants.
              </p>

              {successMsg ? (
                <div style={{
                  backgroundColor: 'rgba(39, 174, 96, 0.15)',
                  border: '1px solid rgba(39, 174, 96, 0.4)',
                  padding: '24px',
                  borderRadius: '14px',
                  textAlign: 'center',
                  color: '#2ECC71'
                }}>
                  <CheckCircle2 size={48} style={{ margin: '0 auto 12px auto' }} />
                  <h4 style={{ fontSize: '1.3rem', color: '#2ECC71' }}>Inquiry Submitted!</h4>
                  <p style={{ color: '#D5F5E3', marginTop: '8px', fontSize: '0.95rem' }}>{successMsg}</p>
                  <button onClick={() => setSuccessMsg('')} className="btn-primary" style={{ marginTop: '20px' }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {errorMsg && (
                    <div style={{ padding: '12px', borderRadius: '8px', backgroundColor: 'rgba(231, 76, 60, 0.15)', border: '1px solid rgba(231, 76, 60, 0.4)', color: '#E74C3C', fontSize: '0.88rem' }}>
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#B0B8C8', marginBottom: '6px', fontWeight: 600 }}>Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        backgroundColor: '#1E2330',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '10px',
                        color: '#FFFFFF',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: '#B0B8C8', marginBottom: '6px', fontWeight: 600 }}>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          backgroundColor: '#1E2330',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '10px',
                          color: '#FFFFFF',
                          fontSize: '0.95rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: '#B0B8C8', marginBottom: '6px', fontWeight: 600 }}>Phone Number</label>
                      <input
                        type="tel"
                        placeholder="03034063970"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          backgroundColor: '#1E2330',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '10px',
                          color: '#FFFFFF',
                          fontSize: '0.95rem'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: '#B0B8C8', marginBottom: '6px', fontWeight: 600 }}>Region of Interest</label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          backgroundColor: '#1E2330',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '10px',
                          color: '#FFFFFF',
                          fontSize: '0.95rem'
                        }}
                      >
                        <option value="pk">Pakistan (PK)</option>
                        <option value="us">United States (US)</option>
                        <option value="uk">United Kingdom (UK)</option>
                        <option value="uae">United Arab Emirates (UAE)</option>
                        <option value="other">Global / Other</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: '#B0B8C8', marginBottom: '6px', fontWeight: 600 }}>Primary Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          backgroundColor: '#1E2330',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '10px',
                          color: '#FFFFFF',
                          fontSize: '0.95rem'
                        }}
                      >
                        <option>Taxation Services</option>
                        <option>Audit & Assurance</option>
                        <option>Business Registration</option>
                        <option>Retainership Services</option>
                        <option>US Registration & Tax</option>
                        <option>UK Corporate Registration</option>
                        <option>UAE Corporate Tax</option>
                        <option>Accounting Software</option>
                        <option>IT Audit</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#B0B8C8', marginBottom: '6px', fontWeight: 600 }}>Message Details *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please describe your tax or advisory requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        backgroundColor: '#1E2330',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '10px',
                        color: '#FFFFFF',
                        fontSize: '0.95rem',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{ padding: '14px', justifyContent: 'center', marginTop: '6px' }}
                  >
                    <Send size={16} />
                    <span>{loading ? 'Sending Message...' : 'Submit Inquiry'}</span>
                  </button>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}
