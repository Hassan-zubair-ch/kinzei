import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Linkedin, Instagram } from 'lucide-react';

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
    <div style={{ backgroundColor: '#FFFFFF', color: '#111827', minHeight: '100vh' }}>
      {/* HEADER BANNER */}
      <section style={{
        backgroundColor: '#F8F9FA',
        padding: '60px 0 45px 0',
        textAlign: 'center',
        borderBottom: '1px solid #E5E7EB'
      }}>
        <div className="container">
          <span className="badge-gold">Get In Touch</span>
          <h1 style={{ fontSize: '2.8rem', color: '#111827', marginTop: '12px', marginBottom: '16px', fontWeight: 800 }}>
            Contact <span style={{ color: '#9E7B3B' }}>Kinzei Consultants</span>
          </h1>
          <p style={{ color: '#4B5563', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto' }}>
            Reach out to our Lahore office or schedule a consultation regarding tax, audit, statutory incorporation, or international expansion.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT GRID */}
      <section style={{ padding: '80px 0 100px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '50px'
          }} className="contact-grid">

            {/* Left Contact Info */}
            <div>
              <h2 style={{ fontSize: '2rem', color: '#111827', marginBottom: '16px', fontWeight: 800 }}>
                Speak With a Senior Partner
              </h2>
              <p style={{ color: '#4B5563', fontSize: '1rem', lineHeight: 1.7, marginBottom: '32px' }}>
                We welcome inquiries from startups, corporate directors, and non-resident investors seeking dependable tax and audit counsel.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    backgroundColor: '#FFFBEB', border: '1.5px solid #9E7B3B',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9E7B3B', flexShrink: 0
                  }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: '#111827', fontWeight: 800 }}>Office Address</h4>
                    <p style={{ fontSize: '0.94rem', color: '#4B5563', marginTop: '4px' }}>
                      First Floor, Plot # 14, Main Road, Block 1 College Rd, Sector C2 Block 1 Twp Sector C 2 Township, Lahore, 54770, Pakistan
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    backgroundColor: '#FFFBEB', border: '1.5px solid #9E7B3B',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9E7B3B', flexShrink: 0
                  }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: '#111827', fontWeight: 800 }}>Phone / WhatsApp</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
                      <a href="tel:03034063970" style={{ fontSize: '1.02rem', color: '#9E7B3B', fontWeight: 800, textDecoration: 'none' }}>
                        03034063970
                      </a>
                      <a href="tel:03170841452" style={{ fontSize: '1.02rem', color: '#9E7B3B', fontWeight: 800, textDecoration: 'none' }}>
                        03170841452
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    backgroundColor: '#FFFBEB', border: '1.5px solid #9E7B3B',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9E7B3B', flexShrink: 0
                  }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: '#111827', fontWeight: 800 }}>Email Address</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
                      <a href="mailto:info@kinzeiconsultants.com" style={{ fontSize: '0.96rem', color: '#4B5563', textDecoration: 'none', fontWeight: 600 }}>
                        info@kinzeiconsultants.com
                      </a>
                      <a href="mailto:hr@kinzeiconsultants.com" style={{ fontSize: '0.96rem', color: '#4B5563', textDecoration: 'none', fontWeight: 600 }}>
                        hr@kinzeiconsultants.com
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    backgroundColor: '#FFFBEB', border: '1.5px solid #9E7B3B',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9E7B3B', flexShrink: 0
                  }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: '#111827', fontWeight: 800 }}>Working Hours</h4>
                    <p style={{ fontSize: '0.94rem', color: '#4B5563', marginTop: '4px' }}>
                      Monday – Friday: 9:00 AM – 6:00 PM (PKT)
                    </p>
                  </div>
                </div>
              </div>

              {/* Connect on Social Media */}
              <div style={{
                padding: '18px 22px',
                backgroundColor: '#F9FAFB',
                borderRadius: '16px',
                border: '1.5px solid #E5E7EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div>
                  <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#111827' }}>Connect on Social Media</div>
                  <div style={{ fontSize: '0.82rem', color: '#6B7280' }}>Follow our official corporate profiles</div>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a
                    href="https://www.linkedin.com/in/amina-batool-kc?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '42px', height: '42px', borderRadius: '10px',
                      backgroundColor: '#FFFFFF', border: '1.5px solid #D1D5DB',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#0A66C2', transition: 'all 0.2s ease', boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
                    }}
                    title="LinkedIn"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0A66C2'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.borderColor = '#0A66C2'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.color = '#0A66C2'; e.currentTarget.style.borderColor = '#D1D5DB'; }}
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/kinzei_consultants?igsi=MWtncDBkM2ZtNHA1"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '42px', height: '42px', borderRadius: '10px',
                      backgroundColor: '#FFFFFF', border: '1.5px solid #D1D5DB',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#E1306C', transition: 'all 0.2s ease', boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
                    }}
                    title="Instagram"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#E1306C'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.borderColor = '#E1306C'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.color = '#E1306C'; e.currentTarget.style.borderColor = '#D1D5DB'; }}
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Contact Form Card */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '40px',
              border: '1.5px solid rgba(158, 123, 59, 0.3)',
              boxShadow: '0 12px 35px rgba(0,0,0,0.06)'
            }}>
              <h3 style={{ fontSize: '1.6rem', color: '#111827', marginBottom: '24px', fontWeight: 800 }}>
                Send Us an Inquiry
              </h3>

              {successMsg && (
                <div style={{
                  backgroundColor: '#ECFDF5', border: '1px solid #10B981', color: '#065F46',
                  padding: '14px 18px', borderRadius: '10px', fontSize: '0.92rem', marginBottom: '20px',
                  display: 'flex', alignItems: 'center', gap: '10px'
                }}>
                  <CheckCircle2 size={20} color="#10B981" />
                  <span>{successMsg}</span>
                </div>
              )}

              {errorMsg && (
                <div style={{
                  backgroundColor: '#FEF2F2', border: '1px solid #EF4444', color: '#991B1B',
                  padding: '14px 18px', borderRadius: '10px', fontSize: '0.92rem', marginBottom: '20px'
                }}>
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', color: '#1F2937', fontWeight: 700, marginBottom: '6px' }}>Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ali Ahmed"
                    style={{
                      width: '100%', padding: '12px 16px', backgroundColor: '#F9FAFB',
                      border: '1.5px solid #D1D5DB', borderRadius: '8px', color: '#111827', fontSize: '0.95rem', outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', color: '#1F2937', fontWeight: 700, marginBottom: '6px' }}>Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      style={{
                        width: '100%', padding: '12px 16px', backgroundColor: '#F9FAFB',
                        border: '1.5px solid #D1D5DB', borderRadius: '8px', color: '#111827', fontSize: '0.95rem', outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', color: '#1F2937', fontWeight: 700, marginBottom: '6px' }}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="03001234567"
                      style={{
                        width: '100%', padding: '12px 16px', backgroundColor: '#F9FAFB',
                        border: '1.5px solid #D1D5DB', borderRadius: '8px', color: '#111827', fontSize: '0.95rem', outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', color: '#1F2937', fontWeight: 700, marginBottom: '6px' }}>Country Region</label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      style={{
                        width: '100%', padding: '12px 16px', backgroundColor: '#F9FAFB',
                        border: '1.5px solid #D1D5DB', borderRadius: '8px', color: '#111827', fontSize: '0.95rem', outline: 'none'
                      }}
                    >
                      <option value="pk">🇵🇰 Pakistan</option>
                      <option value="us">🇺🇸 USA</option>
                      <option value="uk">🇬🇧 UK</option>
                      <option value="uae">🇦🇪 UAE</option>
                      <option value="uks">🇸🇦 UKS (Saudi Arabia)</option>
                      <option value="de">🇩🇪 Germany</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', color: '#1F2937', fontWeight: 700, marginBottom: '6px' }}>Target Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%', padding: '12px 16px', backgroundColor: '#F9FAFB',
                        border: '1.5px solid #D1D5DB', borderRadius: '8px', color: '#111827', fontSize: '0.95rem', outline: 'none'
                      }}
                    >
                      <option value="Taxation Services">Taxation Services</option>
                      <option value="Audit & Assurance">Audit & Assurance</option>
                      <option value="Business Registration">Business Registration</option>
                      <option value="Retainership Services">Retainership Services</option>
                      <option value="US/UK Entity Advisory">US/UK/UAE Entity Advisory</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', color: '#1F2937', fontWeight: 700, marginBottom: '6px' }}>Message Details *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry or statutory requirement..."
                    style={{
                      width: '100%', padding: '12px 16px', backgroundColor: '#F9FAFB',
                      border: '1.5px solid #D1D5DB', borderRadius: '8px', color: '#111827', fontSize: '0.95rem', outline: 'none', resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '14px', borderRadius: '10px', fontSize: '1rem', marginTop: '10px' }}
                >
                  <Send size={18} />
                  <span>{loading ? 'Submitting Inquiry...' : 'Submit Inquiry'}</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
