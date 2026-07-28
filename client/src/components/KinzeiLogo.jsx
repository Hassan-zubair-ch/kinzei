import React from 'react';

export default function KinzeiLogo({ height = 65 }) {
  const primaryTextColor = '#111827';
  const subtitleTextColor = '#1F2937';
  const bronzeGold = '#9E7B3B';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', userSelect: 'none' }}>
      {/* Official Main Logo Icon from favicon.png */}
      <img 
        src="/favicon.png" 
        alt="Kinzei Logo Icon" 
        style={{ 
          height: `${height}px`, 
          width: 'auto', 
          maxHeight: `${height}px`,
          objectFit: 'contain',
          flexShrink: 0,
          filter: 'drop-shadow(0 2px 5px rgba(158, 123, 59, 0.25))'
        }} 
      />

      {/* Typography Section */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight: 1.1 }}>
        <span style={{ 
          fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif", 
          fontSize: `${Math.max(18, height * 0.36)}px`, 
          fontWeight: 900, 
          color: primaryTextColor, 
          letterSpacing: '1.2px',
          textTransform: 'uppercase'
        }}>
          KINZEI
        </span>
        <span style={{ 
          fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif", 
          fontSize: `${Math.max(10, height * 0.17)}px`, 
          fontWeight: 800, 
          color: subtitleTextColor, 
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginTop: '2px'
        }}>
          CONSULTANTS
        </span>
        <span style={{ 
          fontFamily: "'Plus Jakarta Sans', sans-serif", 
          fontSize: `${Math.max(8, height * 0.12)}px`, 
          fontWeight: 700, 
          color: bronzeGold, 
          letterSpacing: '0.8px',
          marginTop: '2px'
        }}>
          (PRIVATE) LIMITED
        </span>
      </div>
    </div>
  );
}
