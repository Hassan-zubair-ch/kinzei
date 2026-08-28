import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Linkedin, 
  Instagram, 
  ExternalLink 
} from 'lucide-react';

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
        setSuccessMsg(data.message || 'Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', phone: '', country: 'pk', service: 'Taxation Services', message: '' });
      } else {
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
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
          <p style={{ color: '#1F2937', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto', fontWeight: 500 }}>
            Reach out to our Lahore office or schedule a consultation regarding tax, audit, statutory incorporation, or international expansion.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT GRID */}
      <section style={{ padding: '75px 0 90px 0', backgroundColor: '#FFFFFF' }}>
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
              <p style={{ color: '#1F2937', fontSize: '1rem', lineHeight: 1.7, marginBottom: '32px', fontWeight: 500 }}>
                We welcome inquiries from startups, corporate directors, and non-resident investors seeking dependable tax and audit counsel.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '36px' }}>
                
                {/* Office Address */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    backgroundColor: '#FFFBEB', border: '1.5px solid #9E7B3B',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9E7B3B', flexShrink: 0
                  }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: '#111827', fontWeight: 800 }}>Office Address</h4>
                    <p style={{ fontSize: '0.95rem', color: '#1F2937', marginTop: '4px', lineHeight: 1.6, fontWeight: 500 }}>
                      First Floor, Plot # 14, Main Road, Block 1 College Rd, Sector C2 Block 1 Twp Sector C 2 Township, Lahore, 54770, Pakistan
                    </p>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
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
                      <a href="tel:03034063970" style={{ fontSize: '1.05rem', color: '#9E7B3B', fontWeight: 800, textDecoration: 'none' }}>
                        03034063970
                      </a>
                      <a href="tel:03170841452" style={{ fontSize: '1.05rem', color: '#9E7B3B', fontWeight: 800, textDecoration: 'none' }}>
                        03170841452
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
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
                      <a href="mailto:info@kinzeiconsultants.com" style={{ fontSize: '0.98rem', color: '#1F2937', textDecoration: 'none', fontWeight: 700 }}>
                        info@kinzeiconsultants.com
                      </a>
                      <a href="mailto:hr@kinzeiconsultants.com" style={{ fontSize: '0.98rem', color: '#1F2937', textDecoration: 'none', fontWeight: 700 }}>
                        hr@kinzeiconsultants.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    backgroundColor: '#FFFBEB', border: '1.5px solid #9E7B3B',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9E7B3B', flexShrink: 0
                  }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: '#111827', fontWeight: 800 }}>Working Hours</h4>
                    <p style={{ fontSize: '0.95rem', color: '#1F2937', marginTop: '4px', lineHeight: 1.6, fontWeight: 600 }}>
                      Morning: 10:00 AM – 6:00 PM<br />
                      Evening: 8:00 PM – 4:00 AM (PKT)
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Channels Connect */}
              <div style={{
                padding: '16px 20px',
                backgroundColor: '#F8F9FA',
                borderRadius: '14px',
                border: '1px solid #E5E7EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#111827' }}>Connect on Social Media</div>
                  <div style={{ fontSize: '0.82rem', color: '#4B5563' }}>Follow our official channels</div>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a
                    href="https://www.linkedin.com/in/amina-batool-kc?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '38px', height: '38px', borderRadius: '8px',
                      backgroundColor: '#FFFFFF', border: '1px solid #D1D5DB',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#0A66C2', transition: 'all 0.2s ease', boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
                    }}
                    title="LinkedIn"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0A66C2'; e.currentTarget.style.color = '#FFFFFF'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.color = '#0A66C2'; }}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/kinzei_consultants?igsi=MWtncDBkM2ZtNHA1"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '38px', height: '38px', borderRadius: '8px',
                      backgroundColor: '#FFFFFF', border: '1px solid #D1D5DB',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#E1306C', transition: 'all 0.2s ease', boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
                    }}
                    title="Instagram"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#E1306C'; e.currentTarget.style.color = '#FFFFFF'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.color = '#E1306C'; }}
                  >
                    <Instagram size={18} />
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
              <h3 style={{ fontSize: '1.65rem', color: '#111827', marginBottom: '24px', fontWeight: 800 }}>
                Send Us an Inquiry
              </h3>

              {successMsg && (
                <div style={{
                  backgroundColor: '#ECFDF5', border: '1px solid #10B981', color: '#065F46',
                  padding: '14px 18px', borderRadius: '10px', fontSize: '0.92rem', marginBottom: '20px',
                  display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700
                }}>
                  <CheckCircle2 size={20} color="#10B981" />
                  <span>{successMsg}</span>
                </div>
              )}

              {errorMsg && (
                <div style={{
                  backgroundColor: '#FEF2F2', border: '1px solid #EF4444', color: '#991B1B',
                  padding: '14px 18px', borderRadius: '10px', fontSize: '0.92rem', marginBottom: '20px', fontWeight: 700
                }}>
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                
                {/* Full Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', color: '#111827', fontWeight: 800, marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Name"
                    style={{
                      width: '100%', padding: '13px 16px', backgroundColor: '#F9FAFB',
                      border: '1.5px solid #CBD5E1', borderRadius: '8px', color: '#111827', fontSize: '0.96rem', fontWeight: 600, outline: 'none'
                    }}
                  />
                </div>

                {/* Email & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="contact-form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', color: '#111827', fontWeight: 800, marginBottom: '6px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email"
                      style={{
                        width: '100%', padding: '13px 16px', backgroundColor: '#F9FAFB',
                        border: '1.5px solid #CBD5E1', borderRadius: '8px', color: '#111827', fontSize: '0.96rem', fontWeight: 600, outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', color: '#111827', fontWeight: 800, marginBottom: '6px' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone Number"
                      style={{
                        width: '100%', padding: '13px 16px', backgroundColor: '#F9FAFB',
                        border: '1.5px solid #CBD5E1', borderRadius: '8px', color: '#111827', fontSize: '0.96rem', fontWeight: 600, outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Country Region & Target Service */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="contact-form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', color: '#111827', fontWeight: 800, marginBottom: '6px' }}>
                      Country Region
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      style={{
                        width: '100%', padding: '13px 16px', backgroundColor: '#F9FAFB',
                        border: '1.5px solid #CBD5E1', borderRadius: '8px', color: '#111827', fontSize: '0.96rem', fontWeight: 700, outline: 'none'
                      }}
                    >
                      <option value="pk">🇵🇰 Pakistan</option>
                      <option value="us">🇺🇸 USA</option>
                      <option value="uk">🇬🇧 UK</option>
                      <option value="uae">🇦🇪 UAE</option>
                      <option value="uks">🇸🇦 Saudi Arabia (KSA)</option>
                      <option value="de">🇩🇪 Germany</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', color: '#111827', fontWeight: 800, marginBottom: '6px' }}>
                      Target Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%', padding: '13px 16px', backgroundColor: '#F9FAFB',
                        border: '1.5px solid #CBD5E1', borderRadius: '8px', color: '#111827', fontSize: '0.96rem', fontWeight: 700, outline: 'none'
                      }}
                    >
                      <option value="Taxation Services">Taxation Services</option>
                      <option value="Audit & Assurance">Audit & Assurance</option>
                      <option value="Business Registration">Business Registration</option>
                      <option value="Retainership Services">Retainership Services</option>
                      <option value="US/UK Entity Advisory">US/UK/UAE Entity Advisory</option>
                      <option value="IT Audit">IT Audit</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', color: '#111827', fontWeight: 800, marginBottom: '6px' }}>
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Message"
                    style={{
                      width: '100%', padding: '13px 16px', backgroundColor: '#F9FAFB',
                      border: '1.5px solid #CBD5E1', borderRadius: '8px', color: '#111827', fontSize: '0.96rem', fontWeight: 600, outline: 'none', resize: 'vertical'
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '14px', borderRadius: '10px', fontSize: '1rem', marginTop: '6px' }}
                >
                  <Send size={18} />
                  <span>{loading ? 'Submitting Inquiry...' : 'Submit Inquiry'}</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* GOOGLE MAP SECTION */}
      <section style={{ padding: '0 0 80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            backgroundColor: '#F8F9FA',
            borderRadius: '20px',
            border: '1.5px solid #E5E7EB',
            overflow: 'hidden',
            boxShadow: '0 6px 25px rgba(0,0,0,0.04)'
          }}>
            {/* Map Header */}
            <div style={{
              padding: '20px 24px',
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid #E5E7EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '14px'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                  <MapPin size={18} color="#9E7B3B" />
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111827', margin: 0 }}>
                    Our Office Location on Google Maps
                  </h3>
                </div>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#4B5563', fontWeight: 500 }}>
                  First Floor, Plot # 14, Main Road, Block 1 College Rd, Sector C2 Township, Lahore, 54770
                </p>
              </div>

              <a
                href="https://share.google/5kXDl7CYu4aJsuvp2"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{
                  padding: '9px 18px',
                  borderRadius: '8px',
                  fontSize: '0.86rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none'
                }}
              >
                <ExternalLink size={15} />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Map Iframe */}
            <div style={{ width: '100%', height: '400px', position: 'relative' }}>
              <iframe
                title="Office Location"
                src="https://maps.google.com/maps?q=Antztec%2C%20Plot%2014%2C%20College%20Rd%2C%20Sector%20C2%20Township%2C%20Lahore&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .contact-form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
