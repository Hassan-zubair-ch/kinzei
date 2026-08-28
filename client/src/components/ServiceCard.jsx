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

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || Building2;

  return (
    <div 
      className="interactive-card"
      style={{
        backgroundColor: '#FFFFFF',
        color: '#111827',
        borderRadius: '16px',
        padding: '34px 28px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
        border: '1.5px solid #E5E7EB',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Top Gold Icon Avatar */}
      <div 
        className="service-icon-box"
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
          border: '1.5px solid #D4A017',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          color: '#D4A017',
          boxShadow: '0 6px 16px rgba(212, 160, 23, 0.15)',
          transition: 'transform 0.3s ease, background 0.3s ease'
        }}
      >
        <IconComponent size={28} strokeWidth={2.2} />
      </div>

      {/* Country Badge if available */}
      {service.countryName && (
        <span style={{
          fontSize: '0.76rem',
          fontWeight: 800,
          color: '#D4A017',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: '8px',
          backgroundColor: '#FFFBEB',
          padding: '2px 10px',
          borderRadius: '12px',
          border: '1px solid rgba(212, 160, 23, 0.25)'
        }}>
          {service.countryName}
        </span>
      )}

      {/* Card Title */}
      <h3 style={{
        fontSize: '1.2rem',
        fontWeight: 800,
        color: '#111827',
        marginBottom: '12px',
        lineHeight: 1.3,
        minHeight: '2.5em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {service.title}
      </h3>

      {/* Short Description */}
      <p style={{
        fontSize: '0.94rem',
        color: '#374151',
        lineHeight: 1.6,
        marginBottom: '24px',
        flexGrow: 1,
        fontWeight: 500
      }}>
        {service.shortDescription}
      </p>

      {/* Read More Link with Hover */}
      <Link 
        to={`/services/detail/${service.id}`}
        style={{
          color: '#D4A017',
          fontWeight: 800,
          fontSize: '0.9rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '9px 20px',
          borderRadius: '25px',
          backgroundColor: '#FFFBEB',
          border: '1.5px solid #D4A017',
          transition: 'all 0.25s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#D4A017';
          e.currentTarget.style.color = '#FFFFFF';
          e.currentTarget.style.transform = 'translateX(2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#FFFBEB';
          e.currentTarget.style.color = '#D4A017';
          e.currentTarget.style.transform = 'translateX(0)';
        }}
      >
        <span>Read Detail</span>
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}
