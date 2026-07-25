import React from 'react';

export default function KinzeiLogo({ height = 54 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Sleek, Perfectly Proportioned Kinzei Corporate Logo */}
      <img
        src="/logo.png"
        alt="Kinzei Consultants (Private) Limited Logo"
        style={{
          height: `${height}px`,
          width: 'auto',
          maxWidth: '240px',
          objectFit: 'contain',
          filter: 'drop-shadow(0 2px 8px rgba(212, 175, 55, 0.4))',
          display: 'block'
        }}
      />
    </div>
  );
}
