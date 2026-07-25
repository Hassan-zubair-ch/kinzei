import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Calculator, Handshake, Building2, Code, TrendingUp, Cpu, 
  Globe, Landmark, FileText, Building, Receipt, Globe2, BookOpen, ShieldAlert, 
  Briefcase, CheckCircle, FileCheck, Users, Lightbulb, Search, LineChart, 
  Layers, Shield, ArrowRight 
} from 'lucide-react';

const iconMap = {
  ShieldCheck, Calculator, Handshake, Building2, Code, TrendingUp, Cpu, 
  Globe, Landmark, FileText, Building, Receipt, Globe2, BookOpen, ShieldAlert, 
  Briefcase, CheckCircle, FileCheck, Users, Lightbulb, SearchAlert: Search, LineChart, 
  Layers, Shield
};

export default function ServiceCard({ service, isDarkTheme = false }) {
  const IconComponent = iconMap[service.icon] || Building2;

  return (
    <div 
      className="service-card"
      style={{
        backgroundColor: isDarkTheme ? '#181C26' : '#FFFFFF',
        color: isDarkTheme ? '#FFFFFF' : '#1A1D24',
        borderRadius: '16px',
        padding: '36px 28px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: isDarkTheme ? '0 10px 30px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.06)',
        border: isDarkTheme ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid #EFEFEF',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = isDarkTheme 
          ? '0 20px 45px rgba(212, 175, 55, 0.25)' 
          : '0 20px 45px rgba(212, 175, 55, 0.18)';
        e.currentTarget.style.borderColor = '#D4AF37';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = isDarkTheme 
          ? '0 10px 30px rgba(0,0,0,0.3)' 
          : '0 10px 30px rgba(0,0,0,0.06)';
        e.currentTarget.style.borderColor = isDarkTheme ? 'rgba(212, 175, 55, 0.2)' : '#EFEFEF';
      }}
    >
      {/* Top Gold Graphic Banner / Icon Avatar */}
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.05) 100%)',
        border: '1px solid rgba(212, 175, 55, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '24px',
        color: '#D4AF37',
        boxShadow: '0 8px 20px rgba(212, 175, 55, 0.15)'
      }}>
        <IconComponent size={30} strokeWidth={1.8} />
      </div>

      {/* Country Badge if available */}
      {service.countryName && (
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 700,
          color: '#D4AF37',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '8px'
        }}>
          {service.countryName}
        </span>
      )}

      {/* Card Title */}
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 700,
        color: isDarkTheme ? '#FFFFFF' : '#1A1E29',
        marginBottom: '14px',
        lineHeight: 1.3,
        minHeight: '2.6em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {service.title}
      </h3>

      {/* Short Description */}
      <p style={{
        fontSize: '0.92rem',
        color: isDarkTheme ? '#A0AABF' : '#5E6678',
        lineHeight: 1.6,
        marginBottom: '28px',
        flexGrow: 1
      }}>
        {service.shortDescription}
      </p>

      {/* Read More Link */}
      <Link 
        to={`/services/detail/${service.id}`}
        style={{
          color: '#D4AF37',
          fontWeight: 700,
          fontSize: '0.9rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 16px',
          borderRadius: '20px',
          backgroundColor: isDarkTheme ? 'rgba(212, 175, 55, 0.08)' : '#FFFBF0',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          transition: 'all 0.25s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#D4AF37';
          e.currentTarget.style.color = '#0A0B0E';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = isDarkTheme ? 'rgba(212, 175, 55, 0.08)' : '#FFFBF0';
          e.currentTarget.style.color = '#D4AF37';
        }}
      >
        <span>Read More</span>
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}
