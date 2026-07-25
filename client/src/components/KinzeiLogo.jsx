import React from 'react';

export default function KinzeiLogo({ height = 75 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Official Kinzei Consultants Wide Logo Image */}
      <img
        src="/logo.png"
        alt="Kinzei Consultants (Private) Limited Logo"
        style={{
          height: `${height}px`,
          width: 'auto',
          maxWidth: '280px',
          objectFit: 'contain',
          filter: 'drop-shadow(0 3px 10px rgba(212, 175, 55, 0.45))',
          transition: 'all 0.2s ease'
        }}
      />
    </div>
  );
}
