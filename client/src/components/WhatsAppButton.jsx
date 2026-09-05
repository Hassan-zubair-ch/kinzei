import React from 'react';

export default function WhatsAppButton() {
  const phoneNumber = "923034063970";
  const defaultMessage = encodeURIComponent("Hello Kinzei Consultants, I would like to inquire about your tax, audit, and business advisory services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Kinzei Consultants"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 1500,
        backgroundColor: '#25D366',
        color: '#FFFFFF',
        width: '62px',
        height: '62px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        border: 'none'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1) translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 14px 35px rgba(37, 211, 102, 0.65)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1) translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.45)';
      }}
    >
      <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8.27 2 2 8.27 2 16C2 18.77 2.8 21.36 4.19 23.54L2.5 29.5L8.65 27.88C10.77 29.17 13.3 29.93 16 29.93C23.73 29.93 30 23.66 30 15.93C30 8.2 23.73 2 16 2ZM16 27.5C13.62 27.5 11.4 26.8 9.5 25.59L9.05 25.32L5.4 26.28L6.37 22.71L6.08 22.25C4.73 20.31 4 18.01 4 15.93C4 9.35 9.38 3.97 16 3.97C22.62 3.97 28 9.35 28 15.93C28 22.51 22.62 27.5 16 27.5Z" fill="#FFFFFF"/>
        <path d="M22.05 19.38C21.72 19.21 20.08 18.4 19.78 18.29C19.47 18.18 19.25 18.12 19.03 18.45C18.81 18.78 18.18 19.52 17.99 19.74C17.8 19.96 17.61 19.99 17.28 19.82C16.95 19.65 15.89 19.3 14.63 18.18C13.65 17.31 12.99 16.23 12.8 15.9C12.61 15.57 12.78 15.39 12.94 15.23C13.09 15.08 13.28 14.83 13.44 14.64C13.61 14.45 13.66 14.31 13.77 14.09C13.88 13.87 13.83 13.68 13.74 13.51C13.66 13.34 13.03 11.8 12.77 11.18C12.52 10.58 12.26 10.66 12.07 10.65H11.47C11.25 10.65 10.89 10.73 10.59 11.06C10.29 11.39 9.44 12.19 9.44 13.82C9.44 15.45 10.62 17.03 10.79 17.25C10.96 17.47 13.11 20.76 16.4 22.18C17.18 22.52 17.79 22.72 18.27 22.87C19.05 23.12 19.76 23.08 20.32 23C20.95 22.91 22.25 22.21 22.52 21.45C22.79 20.69 22.79 20.03 22.71 19.89C22.63 19.75 22.38 19.55 22.05 19.38Z" fill="#FFFFFF"/>
      </svg>
    </a>
  );
}
