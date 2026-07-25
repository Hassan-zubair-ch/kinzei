import React from 'react';

export function USFlag({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '50%', flexShrink: 0 }}>
      <rect width="32" height="32" rx="16" fill="#1A237E"/>
      <path d="M0 4H32V8H0V4ZM0 12H32V16H0V12ZM0 20H32V24H0V20ZM0 28H32V32H0V28Z" fill="#B71C1C"/>
      <path d="M0 0H32V4H0V0ZM0 8H32V12H0V8ZM0 16H32V20H0V16ZM0 24H32V28H0V24Z" fill="#FFFFFF"/>
      <rect width="16" height="16" fill="#0D47A1"/>
      <circle cx="4" cy="4" r="1" fill="#FFFFFF"/>
      <circle cx="12" cy="4" r="1" fill="#FFFFFF"/>
      <circle cx="8" cy="8" r="1" fill="#FFFFFF"/>
      <circle cx="4" cy="12" r="1" fill="#FFFFFF"/>
      <circle cx="12" cy="12" r="1" fill="#FFFFFF"/>
    </svg>
  );
}

export function UAEFlag({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '50%', flexShrink: 0 }}>
      <rect width="32" height="32" rx="16" fill="#007A3D"/>
      <path d="M10 0H32V10.66H10V0Z" fill="#007A3D"/>
      <path d="M10 10.66H32V21.33H10V10.66Z" fill="#FFFFFF"/>
      <path d="M10 21.33H32V32H10V21.33Z" fill="#000000"/>
      <path d="M0 0H10V32H0V0Z" fill="#C8102E"/>
    </svg>
  );
}

export function UKFlag({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '50%', flexShrink: 0 }}>
      <rect width="32" height="32" rx="16" fill="#00247D"/>
      <path d="M0 0L32 32M32 0L0 32" stroke="#FFFFFF" strokeWidth="6"/>
      <path d="M0 0L32 32M32 0L0 32" stroke="#CF142B" strokeWidth="2.5"/>
      <path d="M16 0V32M0 16H32" stroke="#FFFFFF" strokeWidth="8"/>
      <path d="M16 0V32M0 16H32" stroke="#CF142B" strokeWidth="4.5"/>
    </svg>
  );
}

export function PKFlag({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '50%', flexShrink: 0 }}>
      <rect width="32" height="32" rx="16" fill="#01411C"/>
      <rect width="8" height="32" fill="#FFFFFF"/>
      <circle cx="21" cy="16" r="6.5" fill="#FFFFFF"/>
      <circle cx="22.5" cy="15" r="5.5" fill="#01411C"/>
      <polygon points="21,11.5 22.2,14.2 25,14.2 22.8,16 23.6,18.8 21,17 18.4,18.8 19.2,16 17,14.2 19.8,14.2" fill="#FFFFFF"/>
    </svg>
  );
}

export function OtherFlag({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '50%', flexShrink: 0 }}>
      <circle cx="16" cy="16" r="15" fill="#181C26" stroke="#D4AF37" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="6" stroke="#4FB3F6" strokeWidth="2.5" />
      <line x1="18.5" y1="18.5" x2="24" y2="24" stroke="#FCE38A" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
