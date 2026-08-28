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
  ExternalLink, 
  ShieldCheck, 
  Lock, 
  PhoneCall
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
        setSuccessMsg(data.message || 'Thank you. Your inquiry has been submitted successfully. A partner will contact you shortly.');
        setFormData({ name: '', email: '', phone: '', country: 'pk', service: 'Taxation Services', message: '' });
      } else {
        setErrorMsg(data.message || 'Something went wrong. Please try again or call us directly.');
      }
    } catch (err) {
      setErrorMsg('Failed to send message. Please reach out to us directly via phone or email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#0F172A', minHeight: '100vh' }}>
      
      {/* 1. EXECUTIVE HEADER BANNER */}
      <section style={{
        backgroundColor: '#F8FAFC',
        padding: '65px 0 50px 0',
        textAlign: 'center',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#FEF3C7',
            color: '#92400E',
            border: '1px solid #FCD34D',
            padding: '6px 18px',
            borderRadius: '30px',
            fontSize: '0.82rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '16px'
          }}>
            <ShieldCheck size={15} />
            <span>Direct Executive Advisory Intake</span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2.3rem, 4vw, 3.2rem)', 
            color: '#0A0F1D', 
            marginBottom: '16px', 
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: '-0.03em'
          }}>
            Speak With Our <span style={{ color: '#9E7B3B' }}>Senior Partners</span>
          </h1>

          <p style={{ 
            color: '#1E293B', 
            fontSize: '1.12rem', 
            lineHeight: 1.7, 
            maxWidth: '720px', 
            margin: '0 auto 24px auto',
            fontWeight: 600
          }}>
            Whether you require statutory audit, corporate tax defense, SECP company incorporation, or cross-border entity structuring, our Chartered Accountants are ready to assist.
          </p>

          {/* Quick Trust Badges */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            fontSize: '0.86rem',
            fontWeight: 800,
            color: '#1E293B'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#9E7B3B" />
              <span>FBR &amp; SECP Registered Practice</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Lock size={15} color="#9E7B3B" />
              <span>100% Confidential Client Intake</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={15} color="#9E7B3B" />
              <span>Same-Day Initial Case Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT & FORM SUITE */}
      <section style={{ padding: '75px 0 95px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1.25fr',
            gap: '48px',
            alignItems: 'start'
          }} className="contact-main-grid">

            {/* LEFT COLUMN: EXECUTIVE CONTACT SUITE */}
            <div>
              <div style={{
                fontSize: '0.84rem',
                fontWeight: 800,
                color: '#9E7B3B',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '8px'
              }}>
                Contact Channels
              </div>

              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 2.5vw, 2.3rem)', 
                color: '#0A0F1D', 
                marginBottom: '14px', 
                fontWeight: 900,
                letterSpacing: '-0.025em'
              }}>
                Direct Office &amp; Partner Channels
              </h2>

              <p style={{ 
                color: '#1E293B', 
                fontSize: '1rem', 
                lineHeight: 1.7, 
                marginBottom: '32px',
                fontWeight: 600
              }}>
                Reach out directly to our principal office in Lahore or contact our dedicated service desks via phone, WhatsApp, and secure email.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                {/* 1. Office Location Card */}
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1.5px solid #E2E8F0',
                  borderLeft: '5px solid #9E7B3B',
                  padding: '22px 24px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  transition: 'all 0.25s ease'
                }} className="contact-card-hover">
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: '#FEF3C7',
                      border: '1px solid #FCD34D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9E7B3B',
                      flexShrink: 0
                    }}>
                      <MapPin size={22} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#9E7B3B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Principal Office &amp; Headquarters
                      </div>
                      <h4 style={{ fontSize: '1.15rem', color: '#0A0F1D', fontWeight: 900, marginTop: '2px', marginBottom: '6px' }}>
                        Kinzei Consultants Office Address
                      </h4>
                      <p style={{ fontSize: '0.98rem', color: '#0F172A', fontWeight: 700, lineHeight: 1.6, margin: 0 }}>
                        First Floor, Plot # 14, Main Road, Block 1 College Rd, Sector C2 Block 1 Twp Sector C 2 Township, Lahore, 54770, Pakistan
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Direct Phone & WhatsApp Card */}
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1.5px solid #E2E8F0',
                  borderLeft: '5px solid #9E7B3B',
                  padding: '22px 24px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  transition: 'all 0.25s ease'
                }} className="contact-card-hover">
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: '#FEF3C7',
                      border: '1px solid #FCD34D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9E7B3B',
                      flexShrink: 0
                    }}>
                      <PhoneCall size={22} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#9E7B3B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Voice &amp; WhatsApp Hotlines
                      </div>
                      <h4 style={{ fontSize: '1.15rem', color: '#0A0F1D', fontWeight: 900, marginTop: '2px', marginBottom: '8px' }}>
                        Direct Contact Numbers
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                        <a 
                          href="tel:03034063970" 
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            backgroundColor: '#F8FAFC',
                            border: '1.5px solid #CBD5E1',
                            padding: '10px 18px',
                            borderRadius: '8px',
                            color: '#0A0F1D',
                            fontWeight: 900,
                            fontSize: '1.05rem',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#9E7B3B'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.borderColor = '#9E7B3B'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F8FAFC'; e.currentTarget.style.color = '#0A0F1D'; e.currentTarget.style.borderColor = '#CBD5E1'; }}
                        >
                          <Phone size={16} color="#9E7B3B" />
                          <span>03034063970</span>
                        </a>

                        <a 
                          href="tel:03170841452" 
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            backgroundColor: '#F8FAFC',
                            border: '1.5px solid #CBD5E1',
                            padding: '10px 18px',
                            borderRadius: '8px',
                            color: '#0A0F1D',
                            fontWeight: 900,
                            fontSize: '1.05rem',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#9E7B3B'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.borderColor = '#9E7B3B'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F8FAFC'; e.currentTarget.style.color = '#0A0F1D'; e.currentTarget.style.borderColor = '#CBD5E1'; }}
                        >
                          <Phone size={16} color="#9E7B3B" />
                          <span>03170841452</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Official Email Desk Card */}
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1.5px solid #E2E8F0',
                  borderLeft: '5px solid #9E7B3B',
                  padding: '22px 24px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  transition: 'all 0.25s ease'
                }} className="contact-card-hover">
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: '#FEF3C7',
                      border: '1px solid #FCD34D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9E7B3B',
                      flexShrink: 0
                    }}>
                      <Mail size={22} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#9E7B3B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Official Email Desks
                      </div>
                      <h4 style={{ fontSize: '1.15rem', color: '#0A0F1D', fontWeight: 900, marginTop: '2px', marginBottom: '8px' }}>
                        Client &amp; Corporate Inquiries
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <a 
                          href="mailto:info@kinzeiconsultants.com"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: '#0A0F1D',
                            fontWeight: 800,
                            fontSize: '1rem',
                            textDecoration: 'none'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#9E7B3B'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#0A0F1D'}
                        >
                          <span style={{ color: '#9E7B3B', fontWeight: 900 }}>• Inquiries:</span>
                          <span style={{ textDecoration: 'underline' }}>info@kinzeiconsultants.com</span>
                        </a>

                        <a 
                          href="mailto:hr@kinzeiconsultants.com"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: '#0A0F1D',
                            fontWeight: 800,
                            fontSize: '1rem',
                            textDecoration: 'none'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#9E7B3B'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#0A0F1D'}
                        >
                          <span style={{ color: '#9E7B3B', fontWeight: 900 }}>• Careers &amp; HR:</span>
                          <span style={{ textDecoration: 'underline' }}>hr@kinzeiconsultants.com</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Consultation Hours Card (Morning & Evening Shifts) */}
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1.5px solid #E2E8F0',
                  borderLeft: '5px solid #9E7B3B',
                  padding: '22px 24px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: '#FEF3C7',
                      border: '1px solid #FCD34D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9E7B3B',
                      flexShrink: 0
                    }}>
                      <Clock size={22} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#9E7B3B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Operational Hours (Two Shifts)
                      </div>
                      <h4 style={{ fontSize: '1.05rem', color: '#0A0F1D', fontWeight: 900, marginTop: '2px', marginBottom: '4px' }}>
                        Morning: 10:00 AM – 6:00 PM &nbsp;|&nbsp; Evening: 8:00 PM – 4:00 AM (PKT)
                      </h4>
                      <p style={{ fontSize: '0.9rem', color: '#1E293B', margin: 0, fontWeight: 700 }}>
                        Monday – Friday (Available for Domestic &amp; International Clients across timezones).
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5. Social Channels Bar */}
                <div style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '16px',
                  border: '1.5px solid #E2E8F0',
                  padding: '18px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '14px'
                }}>
                  <div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 900, color: '#0A0F1D' }}>Official Corporate Profiles</div>
                    <div style={{ fontSize: '0.85rem', color: '#1E293B', fontWeight: 700 }}>Connect on our verified business channels</div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <a
                      href="https://www.linkedin.com/in/amina-batool-kc?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                      target="_blank"
                      rel="noreferrer"
                      title="LinkedIn"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: '#FFFFFF',
                        border: '1.5px solid #CBD5E1',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        color: '#0A66C2',
                        fontWeight: 800,
                        fontSize: '0.88rem',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0A66C2'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.borderColor = '#0A66C2'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.color = '#0A66C2'; e.currentTarget.style.borderColor = '#CBD5E1'; }}
                    >
                      <Linkedin size={17} />
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href="https://www.instagram.com/kinzei_consultants?igsi=MWtncDBkM2ZtNHA1"
                      target="_blank"
                      rel="noreferrer"
                      title="Instagram"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: '#FFFFFF',
                        border: '1.5px solid #CBD5E1',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        color: '#E1306C',
                        fontWeight: 800,
                        fontSize: '0.88rem',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#E1306C'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.borderColor = '#E1306C'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.color = '#E1306C'; e.currentTarget.style.borderColor = '#CBD5E1'; }}
                    >
                      <Instagram size={17} />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: EXECUTIVE INTAKE FORM */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1.5px solid #E2E8F0',
              boxShadow: '0 20px 50px -10px rgba(0,0,0,0.08), 0 0 0 1px rgba(158, 123, 59, 0.1)',
              overflow: 'hidden',
              position: 'relative'
            }}>
              {/* Form Top Golden Accent Bar */}
              <div style={{ height: '5px', background: 'linear-gradient(90deg, #9E7B3B 0%, #C5A059 50%, #7A5C24 100%)' }}></div>

              <div style={{ padding: '36px 40px' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#FEF3C7',
                  color: '#92400E',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '12px'
                }}>
                  <ShieldCheck size={14} />
                  <span>Consultation Request</span>
                </div>

                <h3 style={{ 
                  fontSize: '1.85rem', 
                  color: '#0A0F1D', 
                  marginBottom: '6px', 
                  fontWeight: 900,
                  letterSpacing: '-0.02em'
                }}>
                  Send Us an Inquiry
                </h3>

                <p style={{ 
                  color: '#1E293B', 
                  fontSize: '0.96rem', 
                  lineHeight: 1.6, 
                  marginBottom: '26px',
                  fontWeight: 600 
                }}>
                  Fill in your details. A qualified Chartered Accountant or Senior Tax Consultant will review and respond within 24 hours.
                </p>

                {successMsg && (
                  <div style={{
                    backgroundColor: '#ECFDF5', 
                    border: '1.5px solid #10B981', 
                    color: '#065F46',
                    padding: '16px 20px', 
                    borderRadius: '12px', 
                    fontSize: '0.96rem', 
                    fontWeight: 800,
                    marginBottom: '24px',
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px'
                  }}>
                    <CheckCircle2 size={22} color="#10B981" style={{ flexShrink: 0 }} />
                    <span>{successMsg}</span>
                  </div>
                )}

                {errorMsg && (
                  <div style={{
                    backgroundColor: '#FEF2F2', 
                    border: '1.5px solid #EF4444', 
                    color: '#991B1B',
                    padding: '16px 20px', 
                    borderRadius: '12px', 
                    fontSize: '0.96rem', 
                    fontWeight: 800,
                    marginBottom: '24px'
                  }}>
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  {/* Full Name Field */}
                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontSize: '0.92rem', 
                      color: '#0A0F1D', 
                      fontWeight: 800, 
                      marginBottom: '8px' 
                    }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Name"
                      style={{
                        width: '100%', 
                        padding: '14px 18px', 
                        backgroundColor: '#FFFFFF',
                        border: '1.5px solid #CBD5E1', 
                        borderRadius: '10px', 
                        color: '#0A0F1D', 
                        fontSize: '0.98rem', 
                        fontWeight: 700,
                        outline: 'none',
                        transition: 'border-color 0.2s, box-shadow 0.2s'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#9E7B3B';
                        e.target.style.boxShadow = '0 0 0 3px rgba(158, 123, 59, 0.18)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#CBD5E1';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Email & Phone Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }} className="contact-form-row">
                    <div>
                      <label style={{ 
                        display: 'block', 
                        fontSize: '0.92rem', 
                        color: '#0A0F1D', 
                        fontWeight: 800, 
                        marginBottom: '8px' 
                      }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email"
                        style={{
                          width: '100%', 
                          padding: '14px 18px', 
                          backgroundColor: '#FFFFFF',
                          border: '1.5px solid #CBD5E1', 
                          borderRadius: '10px', 
                          color: '#0A0F1D', 
                          fontSize: '0.98rem', 
                          fontWeight: 700,
                          outline: 'none',
                          transition: 'border-color 0.2s, box-shadow 0.2s'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#9E7B3B';
                          e.target.style.boxShadow = '0 0 0 3px rgba(158, 123, 59, 0.18)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#CBD5E1';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ 
                        display: 'block', 
                        fontSize: '0.92rem', 
                        color: '#0A0F1D', 
                        fontWeight: 800, 
                        marginBottom: '8px' 
                      }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Phone Number"
                        style={{
                          width: '100%', 
                          padding: '14px 18px', 
                          backgroundColor: '#FFFFFF',
                          border: '1.5px solid #CBD5E1', 
                          borderRadius: '10px', 
                          color: '#0A0F1D', 
                          fontSize: '0.98rem', 
                          fontWeight: 700,
                          outline: 'none',
                          transition: 'border-color 0.2s, box-shadow 0.2s'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#9E7B3B';
                          e.target.style.boxShadow = '0 0 0 3px rgba(158, 123, 59, 0.18)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#CBD5E1';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Country Region & Target Service Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }} className="contact-form-row">
                    <div>
                      <label style={{ 
                        display: 'block', 
                        fontSize: '0.92rem', 
                        color: '#0A0F1D', 
                        fontWeight: 800, 
                        marginBottom: '8px' 
                      }}>
                        Country Region
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        style={{
                          width: '100%', 
                          padding: '14px 18px', 
                          backgroundColor: '#FFFFFF',
                          border: '1.5px solid #CBD5E1', 
                          borderRadius: '10px', 
                          color: '#0A0F1D', 
                          fontSize: '0.98rem', 
                          fontWeight: 700,
                          outline: 'none',
                          cursor: 'pointer',
                          transition: 'border-color 0.2s, box-shadow 0.2s'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#9E7B3B';
                          e.target.style.boxShadow = '0 0 0 3px rgba(158, 123, 59, 0.18)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#CBD5E1';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        <option value="pk">🇵🇰 Pakistan</option>
                        <option value="us">🇺🇸 USA</option>
                        <option value="uk">🇬🇧 United Kingdom</option>
                        <option value="uae">🇦🇪 United Arab Emirates</option>
                        <option value="sa">🇸🇦 Saudi Arabia (KSA)</option>
                        <option value="ca">🇨🇦 Canada</option>
                        <option value="eu">🇪🇺 Europe / International</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ 
                        display: 'block', 
                        fontSize: '0.92rem', 
                        color: '#0A0F1D', 
                        fontWeight: 800, 
                        marginBottom: '8px' 
                      }}>
                        Target Advisory Area
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        style={{
                          width: '100%', 
                          padding: '14px 18px', 
                          backgroundColor: '#FFFFFF',
                          border: '1.5px solid #CBD5E1', 
                          borderRadius: '10px', 
                          color: '#0A0F1D', 
                          fontSize: '0.98rem', 
                          fontWeight: 700,
                          outline: 'none',
                          cursor: 'pointer',
                          transition: 'border-color 0.2s, box-shadow 0.2s'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#9E7B3B';
                          e.target.style.boxShadow = '0 0 0 3px rgba(158, 123, 59, 0.18)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#CBD5E1';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        <option value="Taxation Services">Taxation &amp; FBR Compliance</option>
                        <option value="Audit & Assurance">Statutory Audit &amp; Assurance</option>
                        <option value="Business Registration">SECP Company Incorporation</option>
                        <option value="Retainership Services">Monthly Retainership &amp; Bookkeeping</option>
                        <option value="US/UK Entity Advisory">US / UK / UAE Cross-Border Advisory</option>
                        <option value="IT Audit">IT Systems &amp; Information Audit</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontSize: '0.92rem', 
                      color: '#0A0F1D', 
                      fontWeight: 800, 
                      marginBottom: '8px' 
                    }}>
                      Message Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Message"
                      style={{
                        width: '100%', 
                        padding: '14px 18px', 
                        backgroundColor: '#FFFFFF',
                        border: '1.5px solid #CBD5E1', 
                        borderRadius: '10px', 
                        color: '#0A0F1D', 
                        fontSize: '0.98rem', 
                        fontWeight: 600,
                        outline: 'none', 
                        resize: 'vertical',
                        lineHeight: 1.6,
                        transition: 'border-color 0.2s, box-shadow 0.2s'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#9E7B3B';
                        e.target.style.boxShadow = '0 0 0 3px rgba(158, 123, 59, 0.18)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#CBD5E1';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, #B38E46 0%, #9E7B3B 50%, #7A5C24 100%)',
                      color: '#FFFFFF',
                      border: 'none',
                      padding: '16px 28px',
                      borderRadius: '12px',
                      fontSize: '1.08rem',
                      fontWeight: 800,
                      cursor: loading ? 'not-allowed' : 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      boxShadow: '0 10px 25px rgba(158, 123, 59, 0.35)',
                      transition: 'all 0.3s ease',
                      marginTop: '6px'
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 14px 32px rgba(158, 123, 59, 0.45)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!loading) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(158, 123, 59, 0.35)';
                      }
                    }}
                  >
                    <Send size={18} />
                    <span>{loading ? 'Submitting Inquiry...' : 'Submit Consultation Request'}</span>
                  </button>

                  {/* Confidentiality Footer */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: '0.82rem',
                    color: '#475569',
                    fontWeight: 700,
                    textAlign: 'center',
                    marginTop: '4px'
                  }}>
                    <Lock size={13} color="#9E7B3B" />
                    <span>Protected under professional Non-Disclosure &amp; statutory confidentiality</span>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAPS LOCATION SECTION */}
      <section style={{ padding: '0 0 95px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1.5px solid #E2E8F0',
            overflow: 'hidden',
            boxShadow: '0 10px 35px rgba(0,0,0,0.05)'
          }}>
            {/* Map Header Bar */}
            <div style={{
              padding: '26px 32px',
              backgroundColor: '#F8FAFC',
              borderBottom: '1.5px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '18px'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: '#FEF3C7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9E7B3B'
                  }}>
                    <MapPin size={18} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0A0F1D', margin: 0 }}>
                    Kinzei Consultants Office Location on Google Maps
                  </h3>
                </div>
                <p style={{ margin: '4px 0 0 0', fontSize: '0.96rem', color: '#1E293B', fontWeight: 700 }}>
                  First Floor, Plot # 14, Main Road, Block 1 College Rd, Sector C2 Township, Lahore, 54770
                </p>
              </div>

              <a
                href="https://share.google/5kXDl7CYu4aJsuvp2"
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: '#9E7B3B',
                  color: '#FFFFFF',
                  padding: '12px 22px',
                  borderRadius: '10px',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(158, 123, 59, 0.3)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#7A5C24'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#9E7B3B'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <ExternalLink size={16} />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Google Map Iframe */}
            <div style={{ width: '100%', height: '440px', position: 'relative' }}>
              <iframe
                title="Kinzei Consultants Office Location"
                src="https://maps.google.com/maps?q=Kinzei%20Consultants%2C%20Plot%2014%2C%20Block%201%2C%20College%20Rd%2C%20Sector%20C2%20Township%2C%20Lahore&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
          .contact-main-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .contact-form-row { grid-template-columns: 1fr !important; }
        }
        .contact-card-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.06) !important;
          border-color: #CBD5E1 !important;
        }
      `}</style>

    </div>
  );
}
