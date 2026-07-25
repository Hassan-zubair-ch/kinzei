import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react';

export default function ScheduleModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '10:00 AM',
    topic: 'Tax & Advisory Consultation'
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (data.success) {
        setSuccessMsg(data.message);
        setFormData({ fullName: '', email: '', phone: '', preferredDate: '', preferredTime: '10:00 AM', topic: 'Tax & Advisory Consultation' });
      } else {
        setErrorMsg(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setErrorMsg('Failed to connect to Kinzei server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      animation: 'fadeIn 0.2s ease-out'
    }}>
      <div style={{
        backgroundColor: '#141822',
        border: '1px solid var(--border-gold)',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '540px',
        padding: '32px',
        boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
        position: 'relative',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255,255,255,0.05)',
            border: 'none',
            color: '#9BA4B5',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span className="badge-gold">Kinzei Advisory</span>
          <h2 style={{ fontSize: '1.75rem', marginTop: '8px', color: '#FFFFFF' }}>Book Schedule Now</h2>
          <p style={{ color: '#9BA4B5', fontSize: '0.9rem', marginTop: '6px' }}>
            Schedule an expert consultation with our tax, audit, and legal advisors.
          </p>
        </div>

        {successMsg ? (
          <div style={{
            backgroundColor: 'rgba(39, 174, 96, 0.12)',
            border: '1px solid rgba(39, 174, 96, 0.4)',
            borderRadius: '12px',
            padding: '24px',
            textAlign: 'center',
            color: '#2ECC71'
          }}>
            <CheckCircle size={48} style={{ margin: '0 auto 12px auto' }} />
            <h3 style={{ color: '#2ECC71', fontSize: '1.3rem' }}>Booking Confirmed!</h3>
            <p style={{ color: '#D5F5E3', fontSize: '0.95rem', marginTop: '8px' }}>{successMsg}</p>
            <button
              onClick={() => { setSuccessMsg(''); onClose(); }}
              className="btn-primary"
              style={{ marginTop: '20px' }}
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {errorMsg && (
              <div style={{ padding: '12px', borderRadius: '8px', backgroundColor: 'rgba(231, 76, 60, 0.15)', border: '1px solid rgba(231, 76, 60, 0.4)', color: '#E74C3C', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertCircle size={16} />
                <span>{errorMsg}</span>
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#B0B8C8', marginBottom: '6px', fontWeight: 600 }}>Consultation Topic</label>
              <select
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
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
                <option value="Taxation & Advisory">Taxation & FBR Filings Advisory</option>
                <option value="Audit & Assurance">Statutory Audit & Assurance</option>
                <option value="Business Registration">SECP / Entity Registration</option>
                <option value="US Registration & Tax">US Entity Formation & Tax Advisory</option>
                <option value="UK Registration & Tax">UK Incorporation & HMRC Tax</option>
                <option value="UAE Corporate Tax & Setup">UAE Corporate Tax & Free Zone Setup</option>
                <option value="Retainership & Accounting">Ongoing Retainership & Accounting</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#B0B8C8', marginBottom: '6px', fontWeight: 600 }}>Full Name *</label>
              <div style={{ position: 'relative' }}>
                <User size={16} style={{ position: 'absolute', left: '14px', top: '14px', color: '#7E899C' }} />
                <input
                  type="text"
                  required
                  placeholder="e.g. AbuBaker Jatoi"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px 12px 42px',
                    backgroundColor: '#1E2330',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    color: '#FFFFFF',
                    fontSize: '0.95rem'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#B0B8C8', marginBottom: '6px', fontWeight: 600 }}>Email Address *</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={16} style={{ position: 'absolute', left: '14px', top: '14px', color: '#7E899C' }} />
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px 12px 42px',
                      backgroundColor: '#1E2330',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '10px',
                      color: '#FFFFFF',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#B0B8C8', marginBottom: '6px', fontWeight: 600 }}>Phone Number *</label>
                <div style={{ position: 'relative' }}>
                  <Phone size={16} style={{ position: 'absolute', left: '14px', top: '14px', color: '#7E899C' }} />
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 0000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px 12px 42px',
                      backgroundColor: '#1E2330',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '10px',
                      color: '#FFFFFF',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#B0B8C8', marginBottom: '6px', fontWeight: 600 }}>Preferred Date</label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
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
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#B0B8C8', marginBottom: '6px', fontWeight: 600 }}>Time Slot</label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
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
                  <option>10:00 AM</option>
                  <option>11:30 AM</option>
                  <option>02:00 PM</option>
                  <option>04:00 PM</option>
                  <option>05:30 PM</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{ marginTop: '12px', padding: '14px', justifyContent: 'center', width: '100%' }}
            >
              {loading ? 'Processing Schedule...' : 'Confirm Consultation Booking'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
