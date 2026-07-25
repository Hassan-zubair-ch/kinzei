import React from 'react';

export default function KinzeiLogo({ height = 140 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Official Kinzei Consultants Logo Image - Extra Large Prominent Display */}
      <img
        src="/logo.png"
        alt="Kinzei Consultants (Private) Limited Logo"
        style={{
          height: `${height}px`,
          width: 'auto',
          maxHeight: '220px',
          objectFit: 'contain',
          filter: 'drop-shadow(0 6px 18px rgba(212, 175, 55, 0.55))',
          transition: 'all 0.2s ease'
        }}
      />
    </div>
  );
}
