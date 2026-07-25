import React from 'react';

export default function KinzeiLogo({ height = 65 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Official Kinzei Consultants Brand Logo */}
      <img
        src="/logo.png"
        alt="Kinzei Consultants (Private) Limited Logo"
        style={{
          height: `${height}px`,
          width: 'auto',
          maxWidth: '260px',
          objectFit: 'contain',
          filter: 'drop-shadow(0 3px 10px rgba(212, 175, 55, 0.45))',
          display: 'block',
          transition: 'all 0.2s ease'
        }}
      />
    </div>
  );
}
