import React from 'react';

export default function KinzeiLogo({ height = 150 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Official Kinzei Consultants Logo Image - Doubled Extra Large Size */}
      <img
        src="/logo.png"
        alt="Kinzei Consultants (Private) Limited Logo"
        style={{
          height: `${height}px`,
          width: 'auto',
          maxHeight: '260px',
          objectFit: 'contain',
          filter: 'drop-shadow(0 6px 20px rgba(212, 175, 55, 0.6))',
          transition: 'all 0.2s ease'
        }}
      />
    </div>
  );
}
