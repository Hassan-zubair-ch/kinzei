import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

export default function ScheduleModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '10:00 AM',
    topic: 'Pakistan Tax & Financial Advisory'
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
        setFormData({ fullName: '', email: '', phone: '', preferredDate: '', preferredTime: '10:00 AM', topic: 'Pakistan Tax & Financial Advisory' });
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
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      animation: 'fadeIn 0.2s ease-out'
    }}>
      <div 
        className="schedule-modal-content"
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          maxWidth: '560px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '36px 32px',
          border: '1.5px solid rgba(212, 160, 23, 0.45)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: '#6B7280',
            cursor: 'pointer',
            padding: '4px',
            borderRadius: '50%',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
        >
          <X size={24} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span className="badge-gold">1-on-1 Consultation</span>
          <h2 style={{ fontSize: '1.8rem', color: '#111827', marginTop: '8px', fontWeight: 800 }}>
            Book Advisory Session
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#4B5563', marginTop: '4px' }}>
            Reserve a 15-minute consultation with a senior tax partner.
          </p>
        </div>

        {successMsg ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <CheckCircle size={50} color="#10B981" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ fontSize: '1.3rem', color: '#111827', marginBottom: '8px', fontWeight: 800 }}>
              Session Successfully Booked!
            </h3>
            <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
              {successMsg}
            </p>
            <button onClick={onClose} className="btn-primary" style={{ padding: '10px 28px' }}>
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {errorMsg && (
              <div style={{ backgroundColor: '#FEF2F2', border: '1px solid #EF4444', color: '#991B1B', padding: '10px 14px', borderRadius: '8px', fontSize: '0.9rem' }}>
                {errorMsg}
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#1F2937', fontWeight: 700, marginBottom: '6px' }}>
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Name"
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid #D1D5DB',
                  borderRadius: '8px',
                  color: '#111827',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'all 0.2s ease'
                }}
                onFocus={(e) => { e.target.style.borderColor = '#D4A017'; e.target.style.boxShadow = '0 0 0 3px rgba(212, 160, 23, 0.2)'; }}
                onBlur={(e) => { e.target.style.borderColor = '#D1D5DB'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#1F2937', fontWeight: 700, marginBottom: '6px' }}>
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
                    padding: '12px 14px',
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #D1D5DB',
                    borderRadius: '8px',
                    color: '#111827',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#D4A017'; e.target.style.boxShadow = '0 0 0 3px rgba(212, 160, 23, 0.2)'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#D1D5DB'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#1F2937', fontWeight: 700, marginBottom: '6px' }}>
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
                    padding: '12px 14px',
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #D1D5DB',
                    borderRadius: '8px',
                    color: '#111827',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#D4A017'; e.target.style.boxShadow = '0 0 0 3px rgba(212, 160, 23, 0.2)'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#D1D5DB'; e.target.style.boxShadow = 'none'; }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#1F2937', fontWeight: 700, marginBottom: '6px' }}>
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #D1D5DB',
                    borderRadius: '8px',
                    color: '#111827',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#D4A017'; e.target.style.boxShadow = '0 0 0 3px rgba(212, 160, 23, 0.2)'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#D1D5DB'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#1F2937', fontWeight: 700, marginBottom: '6px' }}>
                  Preferred Time Slot
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #D1D5DB',
                    borderRadius: '8px',
                    color: '#111827',
                    fontSize: '0.95rem',
                    outline: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#D4A017'; e.target.style.boxShadow = '0 0 0 3px rgba(212, 160, 23, 0.2)'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#D1D5DB'; e.target.style.boxShadow = 'none'; }}
                >
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#1F2937', fontWeight: 700, marginBottom: '6px' }}>
                Consultation Topic
              </label>
              <select
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid #D1D5DB',
                  borderRadius: '8px',
                  color: '#111827',
                  fontSize: '0.95rem',
                  outline: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onFocus={(e) => { e.target.style.borderColor = '#D4A017'; e.target.style.boxShadow = '0 0 0 3px rgba(212, 160, 23, 0.2)'; }}
                onBlur={(e) => { e.target.style.borderColor = '#D1D5DB'; e.target.style.boxShadow = 'none'; }}
              >
                <option value="Pakistan Tax & Financial Advisory">Pakistan Income / Sales Tax Advisory</option>
                <option value="Statutory Audit & Assurance">Statutory Financial Audit</option>
                <option value="SECP Company Registration">SECP Company Incorporation</option>
                <option value="International Desk (US, UK, UAE, Saudi, German)">International Desk (US, UK, UAE, Saudi, German)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '14px', borderRadius: '10px', fontSize: '1rem', marginTop: '10px' }}
            >
              <span>{loading ? 'Reserving Schedule...' : 'Confirm Schedule Booking'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
