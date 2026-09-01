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
        backgroundColor: '#F8FAFC',
        padding: '65px 0 50px 0',
        textAlign: 'center',
        borderBottom: '1px solid #E5E7EB',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ display: 'inline-block', marginBottom: '8px' }}>
            <span style={{
              fontSize: '0.82rem',
              fontWeight: '800',
              color: '#D4A017',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              backgroundColor: '#FFFBEB',
              border: '1.5px solid #D4A017',
              padding: '6px 18px',
              borderRadius: '30px',
              fontFamily: 'var(--font-heading)'
            }}>
              Get In Touch
            </span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', 
            color: '#111827', 
            marginTop: '16px', 
            marginBottom: '16px', 
            fontWeight: 900,
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.5px'
          }}>
            Contact <span style={{ color: '#D4A017' }}>Kinzei Consultants</span>
          </h1>

          <p style={{ 
            color: '#374151', 
            fontSize: '1.1rem', 
            maxWidth: '680px', 
            margin: '0 auto', 
            fontWeight: 500,
            lineHeight: 1.65,
            fontFamily: 'var(--font-body)'
          }}>
            Reach out to our Lahore office or schedule a consultation regarding tax, audit, statutory incorporation, or international expansion.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT GRID */}
      <section style={{ padding: '80px 0 95px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.25fr',
            gap: '55px',
            alignItems: 'start'
          }} className="contact-grid">

            {/* Left Contact Info */}
            <div>
              <div style={{ marginBottom: '8px' }}>
                <span style={{
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  color: '#D4A017',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Direct Partnership
                </span>
              </div>

              <h2 style={{ 
                fontSize: 'clamp(1.9rem, 3vw, 2.3rem)', 
                color: '#111827', 
                marginBottom: '14px', 
                fontWeight: 900,
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.2
              }}>
                Speak With a Senior Partner
              </h2>

              <p style={{ color: '#374151', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '36px', fontWeight: 500 }}>
                We welcome inquiries from startups, corporate directors, and non-resident investors seeking dependable tax and audit counsel.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', marginBottom: '40px' }}>
                
                {/* Office Address */}
                <div 
                  className="contact-info-card"
                  style={{
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'flex-start',
                    padding: '16px',
                    borderRadius: '14px',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E5E7EB',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FEF3C7 0%, #FFFBEB 100%)', 
                    border: '1.5px solid #D4A017',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4A017', flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(212, 160, 23, 0.15)'
                  }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.08rem', color: '#111827', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)' }}>
                      Office Address
                    </h4>
                    <p style={{ fontSize: '0.94rem', color: '#1F2937', marginTop: '6px', lineHeight: 1.6, fontWeight: 500, margin: 0 }}>
                      First Floor, Plot # 14, Main Road, Block 1 College Rd, Sector C2 Block 1 Twp Sector C 2 Township, Lahore, 54770, Pakistan
                    </p>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div 
                  className="contact-info-card"
                  style={{
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'flex-start',
                    padding: '16px',
                    borderRadius: '14px',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E5E7EB',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FEF3C7 0%, #FFFBEB 100%)', 
                    border: '1.5px solid #D4A017',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4A017', flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(212, 160, 23, 0.15)'
                  }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.08rem', color: '#111827', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)' }}>
                      Phone / WhatsApp
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '6px' }}>
                      <a 
                        href="tel:03034063970" 
                        style={{ fontSize: '1.05rem', color: '#D4A017', fontWeight: 800, textDecoration: 'none', transition: 'transform 0.2s ease', display: 'inline-block' }}
                      >
                        03034063970
                      </a>
                      <a 
                        href="tel:03170841452" 
                        style={{ fontSize: '1.05rem', color: '#D4A017', fontWeight: 800, textDecoration: 'none', transition: 'transform 0.2s ease', display: 'inline-block' }}
                      >
                        03170841452
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div 
                  className="contact-info-card"
                  style={{
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'flex-start',
                    padding: '16px',
                    borderRadius: '14px',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E5E7EB',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FEF3C7 0%, #FFFBEB 100%)', 
                    border: '1.5px solid #D4A017',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4A017', flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(212, 160, 23, 0.15)'
                  }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.08rem', color: '#111827', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)' }}>
                      Email Address
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '6px' }}>
                      <a href="mailto:info@kinzeiconsultants.com" style={{ fontSize: '0.98rem', color: '#111827', textDecoration: 'none', fontWeight: 700 }}>
                        info@kinzeiconsultants.com
                      </a>
                      <a href="mailto:hr@kinzeiconsultants.com" style={{ fontSize: '0.98rem', color: '#111827', textDecoration: 'none', fontWeight: 700 }}>
                        hr@kinzeiconsultants.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div 
                  className="contact-info-card"
                  style={{
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'flex-start',
                    padding: '16px',
                    borderRadius: '14px',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E5E7EB',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FEF3C7 0%, #FFFBEB 100%)', 
                    border: '1.5px solid #D4A017',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4A017', flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(212, 160, 23, 0.15)'
                  }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.08rem', color: '#111827', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)' }}>
                      Working Hours
                    </h4>
                    <p style={{ fontSize: '0.95rem', color: '#1F2937', marginTop: '6px', lineHeight: 1.6, fontWeight: 600, margin: 0 }}>
                      Morning: 10:00 AM – 6:00 PM<br />
                      Evening: 8:00 PM – 4:00 AM
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Channels Connect */}
              <div style={{
                padding: '20px 24px',
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                border: '1.5px solid #E5E7EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '14px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
              }}>
                <div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 800, color: '#111827', fontFamily: 'var(--font-heading)' }}>Connect on Social Media</div>
                  <div style={{ fontSize: '0.84rem', color: '#4B5563', marginTop: '2px', fontWeight: 500 }}>Follow our official channels</div>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a
                    href="https://www.linkedin.com/in/amina-batool-kc?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '42px', height: '42px', borderRadius: '10px',
                      backgroundColor: '#FFFFFF', border: '1.5px solid #E5E7EB',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#0A66C2', transition: 'all 0.25s ease', boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
                    }}
                    title="LinkedIn"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0A66C2'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.borderColor = '#0A66C2'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.color = '#0A66C2'; e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/kinzei_consultants?igsi=MWtncDBkM2ZtNHA1"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '42px', height: '42px', borderRadius: '10px',
                      backgroundColor: '#FFFFFF', border: '1.5px solid #E5E7EB',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#E1306C', transition: 'all 0.25s ease', boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
                    }}
                    title="Instagram"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#E1306C'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.borderColor = '#E1306C'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.color = '#E1306C'; e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.transform = 'translateY(0)'; }}
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
              padding: '44px 40px',
              border: '1.5px solid #E5E7EB',
              boxShadow: '0 20px 45px -12px rgba(0,0,0,0.08), 0 0 1px 1px rgba(212, 160, 23, 0.12)',
              position: 'relative'
            }}>
              <div style={{ marginBottom: '6px' }}>
                <span style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: '#D4A017',
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Online Assistance
                </span>
              </div>

              <h3 style={{ 
                fontSize: '1.85rem', 
                color: '#111827', 
                marginBottom: '26px', 
                fontWeight: 900,
                fontFamily: 'var(--font-heading)'
              }}>
                Send Us an Inquiry
              </h3>

              {successMsg && (
                <div style={{
                  backgroundColor: '#ECFDF5', border: '1.5px solid #10B981', color: '#065F46',
                  padding: '16px 20px', borderRadius: '12px', fontSize: '0.94rem', marginBottom: '24px',
                  display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 700
                }}>
                  <CheckCircle2 size={22} color="#10B981" />
                  <span>{successMsg}</span>
                </div>
              )}

              {errorMsg && (
                <div style={{
                  backgroundColor: '#FEF2F2', border: '1.5px solid #EF4444', color: '#991B1B',
                  padding: '16px 20px', borderRadius: '12px', fontSize: '0.94rem', marginBottom: '24px', fontWeight: 700
                }}>
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* Full Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.92rem', color: '#111827', fontWeight: 800, marginBottom: '8px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Name"
                    className="contact-input-field"
                    style={{
                      width: '100%', padding: '14px 16px', backgroundColor: '#FFFFFF',
                      border: '1.5px solid #CBD5E1', borderRadius: '10px', color: '#111827', fontSize: '0.96rem', fontWeight: 600, outline: 'none',
                      transition: 'all 0.2s ease'
                    }}
                  />
                </div>

                {/* Email & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }} className="contact-form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.92rem', color: '#111827', fontWeight: 800, marginBottom: '8px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email"
                      className="contact-input-field"
                      style={{
                        width: '100%', padding: '14px 16px', backgroundColor: '#FFFFFF',
                        border: '1.5px solid #CBD5E1', borderRadius: '10px', color: '#111827', fontSize: '0.96rem', fontWeight: 600, outline: 'none',
                        transition: 'all 0.2s ease'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.92rem', color: '#111827', fontWeight: 800, marginBottom: '8px' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone Number"
                      className="contact-input-field"
                      style={{
                        width: '100%', padding: '14px 16px', backgroundColor: '#FFFFFF',
                        border: '1.5px solid #CBD5E1', borderRadius: '10px', color: '#111827', fontSize: '0.96rem', fontWeight: 600, outline: 'none',
                        transition: 'all 0.2s ease'
                      }}
                    />
                  </div>
                </div>

                {/* Country Region & Target Service */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }} className="contact-form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.92rem', color: '#111827', fontWeight: 800, marginBottom: '8px' }}>
                      Country Region
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="contact-input-field"
                      style={{
                        width: '100%', padding: '14px 16px', backgroundColor: '#FFFFFF',
                        border: '1.5px solid #CBD5E1', borderRadius: '10px', color: '#111827', fontSize: '0.96rem', fontWeight: 700, outline: 'none',
                        transition: 'all 0.2s ease', cursor: 'pointer'
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
                    <label style={{ display: 'block', fontSize: '0.92rem', color: '#111827', fontWeight: 800, marginBottom: '8px' }}>
                      Target Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="contact-input-field"
                      style={{
                        width: '100%', padding: '14px 16px', backgroundColor: '#FFFFFF',
                        border: '1.5px solid #CBD5E1', borderRadius: '10px', color: '#111827', fontSize: '0.96rem', fontWeight: 700, outline: 'none',
                        transition: 'all 0.2s ease', cursor: 'pointer'
                      }}
                    >
                      <option value="Taxation Services">Taxation Services</option>
                      <option value="Audit & Assurance">Audit & Assurance</option>
                      <option value="In-House Dedicated Staffing">In-House Dedicated Staffing (Under CA Oversight)</option>
                      <option value="Business Registration">Business Registration</option>
                      <option value="Retainership Services">Retainership Services</option>
                      <option value="US/UK Entity Advisory">US/UK/UAE Entity Advisory</option>
                      <option value="IT Audit">IT Audit</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.92rem', color: '#111827', fontWeight: 800, marginBottom: '8px' }}>
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Message"
                    className="contact-input-field"
                    style={{
                      width: '100%', padding: '14px 16px', backgroundColor: '#FFFFFF',
                      border: '1.5px solid #CBD5E1', borderRadius: '10px', color: '#111827', fontSize: '0.96rem', fontWeight: 600, outline: 'none', resize: 'vertical',
                      transition: 'all 0.2s ease'
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '16px',
                    borderRadius: '12px',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    letterSpacing: '0.5px',
                    marginTop: '8px',
                    background: 'linear-gradient(135deg, #E5B338 0%, #D4A017 50%, #B8860B 100%)',
                    color: '#FFFFFF',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 6px 20px rgba(212, 160, 23, 0.4)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 10px 28px rgba(212, 160, 23, 0.55)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 160, 23, 0.4)';
                  }}
                >
                  <Send size={19} />
                  <span>{loading ? 'Submitting Inquiry...' : 'Submit Inquiry'}</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* GOOGLE MAP SECTION */}
      <section style={{ padding: '0 0 85px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            backgroundColor: '#F8FAFC',
            borderRadius: '20px',
            border: '1.5px solid #E5E7EB',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
          }}>
            {/* Map Header */}
            <div style={{
              padding: '22px 28px',
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid #E5E7EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                  <MapPin size={20} color="#D4A017" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', margin: 0, fontFamily: 'var(--font-heading)' }}>
                    Our Office Location on Google Maps
                  </h3>
                </div>
                <p style={{ margin: 0, fontSize: '0.92rem', color: '#4B5563', fontWeight: 500 }}>
                  First Floor, Plot # 14, Main Road, Block 1 College Rd, Sector C2 Township, Lahore, 54770
                </p>
              </div>

              <a
                href="https://share.google/5kXDl7CYu4aJsuvp2"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, #E5B338 0%, #D4A017 50%, #B8860B 100%)',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 14px rgba(212, 160, 23, 0.35)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 22px rgba(212, 160, 23, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(212, 160, 23, 0.35)';
                }}
              >
                <ExternalLink size={16} />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Map Iframe */}
            <div style={{ width: '100%', height: '420px', position: 'relative' }}>
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
        .contact-info-card:hover {
          background-color: #FFFFFF !important;
          border-color: #D4A017 !important;
          box-shadow: 0 8px 25px rgba(212, 160, 23, 0.15) !important;
          transform: translateY(-2px);
        }

        .contact-input-field:focus {
          border-color: #D4A017 !important;
          box-shadow: 0 0 0 3px rgba(212, 160, 23, 0.2) !important;
        }

        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .contact-form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
