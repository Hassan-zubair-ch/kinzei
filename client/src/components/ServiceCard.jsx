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
        backgroundColor: '#FFFFFF',
        color: '#111827',
        borderRadius: '16px',
        padding: '34px 28px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.05)',
        border: '1.5px solid #E5E7EB',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 16px 35px rgba(158, 123, 59, 0.18)';
        e.currentTarget.style.borderColor = '#9E7B3B';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.05)';
        e.currentTarget.style.borderColor = '#E5E7EB';
      }}
    >
      {/* Top Gold Graphic Banner / Icon Avatar */}
      <div style={{
        width: '62px',
        height: '62px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(158, 123, 59, 0.12) 0%, rgba(158, 123, 59, 0.04) 100%)',
        border: '1.5px solid rgba(158, 123, 59, 0.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
        color: '#9E7B3B',
        boxShadow: '0 6px 15px rgba(158, 123, 59, 0.12)'
      }}>
        <IconComponent size={28} strokeWidth={2} />
      </div>

      {/* Country Badge if available */}
      {service.countryName && (
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 800,
          color: '#9E7B3B',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '8px'
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
        fontSize: '0.92rem',
        color: '#4B5563',
        lineHeight: 1.6,
        marginBottom: '24px',
        flexGrow: 1
      }}>
        {service.shortDescription}
      </p>

      {/* Read More Link */}
      <Link 
        to={`/services/detail/${service.id}`}
        style={{
          color: '#9E7B3B',
          fontWeight: 700,
          fontSize: '0.9rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 18px',
          borderRadius: '20px',
          backgroundColor: '#FFFBEB',
          border: '1.5px solid rgba(158, 123, 59, 0.3)',
          transition: 'all 0.25s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#9E7B3B';
          e.currentTarget.style.color = '#FFFFFF';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#FFFBEB';
          e.currentTarget.style.color = '#9E7B3B';
        }}
      >
        <span>Read Detail</span>
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}
