import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Building2, FileText, Landmark, Users, Cpu, Globe2, 
  Award, ShieldCheck, MapPin, HeartHandshake, Briefcase, 
  Sliders, KeyRound, Clock, AlertTriangle, CheckCircle2, 
  Phone, Calendar, ArrowRight, Sparkles, Search, ChevronRight,
  Shield, HelpCircle
} from 'lucide-react';

export default function RegistrationCompliance({ onOpenSchedule }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const navigate = useNavigate();

  const phoneNumber = "923034063970";
  const defaultMessage = encodeURIComponent("Hello Kinzei Consultants, I would like to inquire about your Registration, Licensing & Compliance Services in Pakistan.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  const registrationCategories = [
    {
      id: 1,
      tag: 'corporate',
      num: '01',
      icon: Building2,
      title: 'Corporate & Company Registration',
      authority: 'SECP (Securities & Exchange Commission of Pakistan)',
      summary: 'Complete company incorporation, corporate structuring, statutory filing, and legal entity setup.',
      items: [
        'SECP Company Incorporation',
        'Private Limited Company',
        'Single Member Company (SMC)',
        'Public Limited Company',
        'LLP Registration',
        'Company Name Reservation',
        'Company Conversion / Restructuring',
        'Branch / Liaison Office Registration',
        'Company Changes & Amendments',
        'Annual Returns & Statutory Filings',
        'Company Strike-Off / Closure'
      ]
    },
    {
      id: 2,
      tag: 'tax',
      num: '02',
      icon: FileText,
      title: 'Business & Individual Tax Registration',
      authority: 'FBR (Federal Board of Revenue)',
      summary: 'National Tax Number (NTN) registration, Active Taxpayer status, and corporate tax enrollments.',
      items: [
        'FBR / NTN Registration',
        'Individual Tax Registration',
        'Sole Proprietorship Registration',
        'AOP / Partnership Tax Registration',
        'Company Tax Registration',
        'Income Tax Registration & Compliance',
        'Withholding Tax Registration',
        'Tax Profile Updates',
        'Tax Deregistration'
      ]
    },
    {
      id: 3,
      tag: 'tax',
      num: '03',
      icon: Landmark,
      title: 'Sales Tax & Provincial Tax Registration',
      authority: 'FBR (STRN) + PRA / SRB / KPRA / BRA',
      summary: 'Federal Sales Tax (STRN) and provincial sales tax on services registrations with monthly compliance.',
      items: [
        'Federal Sales Tax Registration',
        'Punjab Revenue Authority (PRA)',
        'Sindh Revenue Board (SRB)',
        'Khyber Pakhtunkhwa Revenue Authority (KPRA)',
        'Balochistan Revenue Authority (BRA)',
        'Sales Tax Returns & Compliance',
        'Provincial Tax Registration & Deregistration'
      ]
    },
    {
      id: 4,
      tag: 'corporate',
      num: '04',
      icon: Users,
      title: 'Partnership & Firm Registration',
      authority: 'Registrar of Firms & FBR',
      summary: 'Partnership deed drafting, firm registration under Partnership Act 1932, and AOP enrollments.',
      items: [
        'Registrar of Firms Registration',
        'Partnership Deed',
        'Partnership Firm Registration',
        'AOP Registration',
        'Change of Partners',
        'Change of Business Address',
        'Partnership Dissolution'
      ]
    },
    {
      id: 5,
      tag: 'it',
      num: '05',
      icon: Cpu,
      title: 'IT & Software Industry Registrations',
      authority: 'PSEB, P@SHA & Ministry of IT',
      summary: 'PSEB registration, 100% tax credit qualification, export rebates, and technology startup setups.',
      items: [
        'PSEB Registration',
        'P@SHA Membership',
        'IT / Software House Registration',
        'IT Exporter Registration',
        'IT Company Compliance',
        'Freelancer / IT Business Registration',
        'Technology / Software Business Setup'
      ]
    },
    {
      id: 6,
      tag: 'trade',
      num: '06',
      icon: Globe2,
      title: 'Import & Export Registrations',
      authority: 'Pakistan Single Window (PSW) & Pakistan Customs',
      summary: 'Trade enablement, WeBOC user ID creation, customs tariffs, and international shipping clearance.',
      items: [
        'Pakistan Single Window (PSW)',
        'WeBOC Registration',
        'Importer Registration',
        'Exporter Registration',
        'Customs Registration',
        'Trade-related Registrations',
        'Import / Export Compliance'
      ]
    },
    {
      id: 7,
      tag: 'licenses',
      num: '07',
      icon: Award,
      title: 'Professional & Industry Registrations',
      authority: 'PEC, NHA, Healthcare Councils, DRAP & Food Authorities',
      summary: 'Engineering, construction, healthcare, food authorities, and industry-specific licenses.',
      items: [
        'PEC Registration / Licensing',
        'NHA Registration / Licensing',
        'Pakistan Medical Commission / Relevant Healthcare Registrations',
        'Pharmacy / Drug-related Licensing',
        'Food Authority Registration',
        'Education / Training Institute Registration',
        'Travel & Tourism Licensing',
        'Real Estate-related Registrations',
        'Construction / Contractor Registrations',
        'Environmental Approvals & NOCs',
        'Other Sector-Specific Licenses'
      ]
    },
    {
      id: 8,
      tag: 'labor',
      num: '08',
      icon: ShieldCheck,
      title: 'Labor, Employee & Social Security Registration',
      authority: 'EOBI, PESSI, SESSI & Labor Department',
      summary: 'Statutory pensions, social security institutions, employee cards, and labor compliance.',
      items: [
        'EOBI Registration',
        'PESSI Registration – Punjab',
        'SESSI Registration – Sindh',
        'KP Employee Social Security Registration',
        'Employee Registration & Compliance',
        'Labor Department Registration',
        'Shops & Establishment Registration'
      ]
    },
    {
      id: 9,
      tag: 'local',
      num: '09',
      icon: MapPin,
      title: 'Local & Provincial Business Registrations',
      authority: 'Municipal Corporations & Local Government',
      summary: 'Trade licenses, municipal health certificates, commercial permits, and provincial professional tax.',
      items: [
        'Business Registration',
        'Trade License',
        'Municipal Corporation Registration',
        'Local Government Registration',
        'Shops & Establishment Registration',
        'Professional Tax Registration',
        'Business Permits',
        'Local NOCs'
      ]
    },
    {
      id: 10,
      tag: 'ngo',
      num: '10',
      icon: HeartHandshake,
      title: 'NGO, NPO & Non-Profit Registration',
      authority: 'Societies Act 1860, Trust Act & SECP (Section 42)',
      summary: 'Charitable trusts, voluntary welfare agencies, non-profit foundations, and FBR tax exemption.',
      items: [
        'Society Registration',
        'NGO Registration',
        'Trust Registration',
        'Section 42 Company',
        'NPO Registration',
        'Punjab / Provincial NGO Registration',
        'NPO Tax Exemption',
        'Relevant Government NOCs & Approvals'
      ]
    },
    {
      id: 11,
      tag: 'trade',
      num: '11',
      icon: Briefcase,
      title: 'Chamber & Trade Registrations',
      authority: 'Chambers of Commerce (LCCI, KCCI, ICCI, FCCI, etc.)',
      summary: 'Corporate chamber memberships, trade body affiliations, export certificates, and visa support.',
      items: [
        'Chamber of Commerce Registration',
        'Trade Association Membership',
        'Industry Association Registration',
        'Business Membership Certificates',
        'Exporter / Business Certificates'
      ]
    },
    {
      id: 12,
      tag: 'licenses',
      num: '12',
      icon: Sliders,
      title: 'Specialized Government Registrations',
      authority: 'Federal & Provincial Regulators',
      summary: 'Centralized representation and direct liaison before all statutory regulatory bodies.',
      items: [
        'PSEB',
        'PEC',
        'PSW',
        'WeBOC',
        'EOBI',
        'PESSI / SESSI',
        'PRA / SRB / KPRA / BRA',
        'SECP',
        'FBR',
        'NHA',
        'Relevant Federal & Provincial Departments',
        'Sector-Specific Authorities & Regulators'
      ]
    },
    {
      id: 13,
      tag: 'licenses',
      num: '13',
      icon: KeyRound,
      title: 'Licenses, Permits & NOCs',
      authority: 'Federal, Provincial & District Authorities',
      summary: 'Commercial operating licenses, environmental NOCs, building permits, and annual renewals.',
      items: [
        'Business Licenses',
        'Operating Licenses',
        'Trade Licenses',
        'Professional Licenses',
        'Environmental NOCs',
        'Building / Commercial NOCs',
        'Industry-Specific NOCs',
        'Government Permissions & Approvals',
        'License Renewals'
      ]
    },
    {
      id: 14,
      tag: 'compliance',
      num: '14',
      icon: Clock,
      title: 'Ongoing Regulatory Compliance',
      authority: 'Continuous Statutory Compliance Desk',
      summary: 'Proactive SECP, FBR, Sales Tax, and EOBI statutory management to prevent penalties.',
      items: [
        'SECP Annual Compliance',
        'FBR Tax Compliance',
        'Sales Tax Compliance',
        'Provincial Tax Returns',
        'EOBI / Social Security Compliance',
        'License Renewals',
        'Statutory Filings',
        'Changes in Company Particulars',
        'Directors / Shareholders Updates',
        'Registered Office Updates',
        'Regulatory Record Maintenance'
      ]
    },
    {
      id: 15,
      tag: 'compliance',
      num: '15',
      icon: AlertTriangle,
      title: 'Business Closure & Deregistration',
      authority: 'SECP, FBR, Revenue Authorities & Courts',
      summary: 'Clean corporate exit, easy strike-off, voluntary winding up, tax cancellations, and settlements.',
      items: [
        'Company Strike-Off',
        'Company Winding-Up',
        'NTN Cancellation',
        'Sales Tax Deregistration',
        'PSEB Deregistration',
        'License Cancellation',
        'Business Closure',
        'Partnership Dissolution',
        'Regulatory Deregistration'
      ]
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'All Services (15)' },
    { id: 'corporate', label: 'Corporate & SECP' },
    { id: 'tax', label: 'Tax & FBR/PRA' },
    { id: 'it', label: 'IT & PSEB' },
    { id: 'trade', label: 'Trade & Customs' },
    { id: 'labor', label: 'Labor & EOBI' },
    { id: 'licenses', label: 'Licenses & NOCs' },
    { id: 'ngo', label: 'NGOs & Trusts' },
    { id: 'compliance', label: 'Ongoing Compliance' }
  ];

  const filteredCategories = registrationCategories.filter((cat) => {
    const matchesFilter = selectedFilter === 'all' || cat.tag === selectedFilter;
    const matchesSearch = searchTerm.trim() === '' || 
      cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111827', minHeight: '100vh' }}>
      
      {/* 1. HERO BANNER */}
      <section style={{
        position: 'relative',
        padding: '80px 0 65px 0',
        backgroundColor: '#0F172A',
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(212, 160, 23, 0.18) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(30, 41, 59, 0.8) 0%, transparent 60%)',
        color: '#FFFFFF',
        borderBottom: '3px solid #D4A017'
      }}>
        <div className="container">
          <div style={{ maxWidth: '900px' }}>
            
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(212, 160, 23, 0.15)',
              color: '#FACC15',
              border: '1px solid rgba(212, 160, 23, 0.4)',
              padding: '6px 16px',
              borderRadius: '24px',
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              marginBottom: '18px'
            }}>
              <Sparkles size={15} />
              <span>Complete Regulatory &amp; Corporate Solutions</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.18,
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}>
              Registration, Licensing &amp; <span style={{ color: '#D4A017' }}>Compliance Services</span>
            </h1>

            <p style={{
              fontSize: '1.12rem',
              color: '#E2E8F0',
              lineHeight: 1.7,
              marginBottom: '32px',
              maxWidth: '780px',
              fontWeight: 500
            }}>
              Your one-stop professional gateway for SECP Company Incorporation, FBR/Provincial Tax Registrations (PRA, SRB, KPRA, BRA), PSEB &amp; IT Exporter Credits, PSW/WeBOC Customs, EOBI/PESSI Social Security, Specialized Sectoral Licensing, and Ongoing Annual Compliance.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button 
                onClick={onOpenSchedule} 
                className="btn-primary" 
                style={{ padding: '14px 34px', fontSize: '0.94rem', borderRadius: '8px' }}
              >
                <Calendar size={18} />
                <span>Book Registration Consultation</span>
              </button>

              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.94rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span>WhatsApp Senior Partner</span>
              </a>

              <a 
                href="tel:03034063970" 
                style={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  border: '1.8px solid #CBD5E1',
                  padding: '13px 26px',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.94rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#0F172A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                <Phone size={16} />
                <span>03034063970</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. REGULATORY AUTHORITIES STRIP */}
      <section style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '22px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px' }}>
            <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              Direct Regulatory Liaison:
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {['SECP', 'FBR', 'PRA', 'SRB', 'KPRA', 'BRA', 'PSEB', 'PEC', 'PSW', 'WeBOC', 'EOBI', 'PESSI', 'SESSI', 'LCCI', 'DRAP'].map((auth, i) => (
                <span 
                  key={i} 
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#0F172A',
                    border: '1px solid #CBD5E1',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                  }}
                >
                  {auth}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEARCH & FILTER SECTION */}
      <section style={{ padding: '40px 0 20px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            
            {/* Search Input Bar */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '650px',
              margin: '0 auto'
            }}>
              <Search 
                size={20} 
                color="#94A3B8" 
                style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)' }} 
              />
              <input 
                type="text"
                placeholder="Search by license name, authority (e.g. SECP, PSEB, PEC, PRA, EOBI)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 20px 14px 50px',
                  borderRadius: '30px',
                  border: '2px solid #E2E8F0',
                  fontSize: '0.98rem',
                  outline: 'none',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  backgroundColor: '#F8FAFC'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#D4A017';
                  e.target.style.boxShadow = '0 0 0 4px rgba(212, 160, 23, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#E2E8F0';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    fontSize: '0.85rem',
                    color: '#64748B',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              {filterTabs.map((tab) => {
                const isActive = selectedFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedFilter(tab.id)}
                    style={{
                      backgroundColor: isActive ? '#0F172A' : '#F1F5F9',
                      color: isActive ? '#FACC15' : '#334155',
                      border: isActive ? '1.5px solid #0F172A' : '1.5px solid #E2E8F0',
                      padding: '8px 18px',
                      borderRadius: '20px',
                      fontSize: '0.86rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = '#E2E8F0';
                        e.currentTarget.style.color = '#0F172A';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = '#F1F5F9';
                        e.currentTarget.style.color = '#334155';
                      }
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 4. 15 DETAILED SERVICE CATEGORY CARDS */}
      <section style={{ padding: '40px 0 90px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '32px'
          }} className="reg-cards-grid">
            
            {filteredCategories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <div 
                  key={cat.id}
                  className="interactive-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1.5px solid #E2E8F0',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                    padding: '34px 30px',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {/* Top Golden Accent Bar */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #D4A017 0%, #B8860B 100%)'
                  }} />

                  {/* Header Row: Number Badge & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <div style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '14px',
                      backgroundColor: '#FFFBEB',
                      border: '1.5px solid #D4A017',
                      color: '#B8860B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(212, 160, 23, 0.15)'
                    }}>
                      <IconComp size={26} strokeWidth={2.2} />
                    </div>

                    <div style={{
                      fontSize: '1.1rem',
                      fontWeight: 900,
                      color: '#94A3B8',
                      fontFamily: 'monospace'
                    }}>
                      {cat.num}
                    </div>
                  </div>

                  {/* Category Title */}
                  <h3 style={{
                    fontSize: '1.32rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    marginBottom: '8px',
                    lineHeight: 1.3,
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {cat.title}
                  </h3>

                  {/* Authority Badge */}
                  <div style={{
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    color: '#B8860B',
                    backgroundColor: '#FFFBEB',
                    padding: '3px 10px',
                    borderRadius: '6px',
                    display: 'inline-block',
                    marginBottom: '14px',
                    border: '1px solid rgba(212, 160, 23, 0.25)',
                    alignSelf: 'flex-start'
                  }}>
                    {cat.authority}
                  </div>

                  {/* Summary Text */}
                  <p style={{
                    fontSize: '0.92rem',
                    color: '#475569',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                    fontWeight: 500
                  }}>
                    {cat.summary}
                  </p>

                  {/* Divider */}
                  <div style={{ width: '100%', height: '1px', backgroundColor: '#F1F5F9', marginBottom: '18px' }} />

                  {/* Sub-Items List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', flexGrow: 1 }}>
                    {cat.items.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle2 size={16} color="#D4A017" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '0.88rem', color: '#1E293B', lineHeight: 1.5, fontWeight: 600 }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Card Action Button */}
                  <button
                    onClick={onOpenSchedule}
                    style={{
                      width: '100%',
                      backgroundColor: '#0F172A',
                      color: '#FFFFFF',
                      border: 'none',
                      padding: '12px 18px',
                      borderRadius: '8px',
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#D4A017';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#0F172A';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                  >
                    <span>Inquire for {cat.title.split(' ')[0]}</span>
                    <ArrowRight size={15} />
                  </button>

                </div>
              );
            })}

          </div>

          {filteredCategories.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#F8FAFC', borderRadius: '16px' }}>
              <HelpCircle size={48} color="#94A3B8" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A' }}>No matching registrations found</h3>
              <p style={{ color: '#64748B', marginTop: '6px', marginBottom: '20px' }}>Try searching with a different term or clear your search.</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedFilter('all'); }} 
                className="btn-primary" 
                style={{ padding: '10px 24px' }}
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 5. WHY CHOOSE KINZEI FOR REGISTRATION & COMPLIANCE */}
      <section style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '80px 0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <span className="badge-gold">Institutional Advantage</span>
            <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginTop: '12px', marginBottom: '16px', fontWeight: 800 }}>
              Why Choose Kinzei for <span style={{ color: '#D4A017' }}>Registration &amp; Licensing?</span>
            </h2>
            <p style={{ color: '#E2E8F0', fontSize: '1.05rem', lineHeight: 1.6, fontWeight: 500 }}>
              Operating in association with Chartered Accountants and licensed corporate lawyers, we guarantee legal perfection, zero statutory penalties, and dedicated lifecycle representation.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                icon: Shield,
                title: 'Zero Penalty Assurance',
                desc: 'Every filing is pre-audited by qualified corporate secretarial and tax professionals to avoid any legal notices or penalty challans.'
              },
              {
                icon: Building2,
                title: '100% Direct Authority Liaison',
                desc: 'Direct institutional access to SECP, FBR, PRA, PSEB, PEC, PSW, and Provincial boards for fast-track clearances.'
              },
              {
                icon: Clock,
                title: 'Rapid Turnaround Times',
                desc: 'Same-day NTN registrations, 24-hour company name reservations, and expedited incorporation processing.'
              },
              {
                icon: HeartHandshake,
                title: 'Complete Lifecycle Support',
                desc: 'From initial registration and corporate bank setup to ongoing monthly sales tax returns and annual statutory filings.'
              }
            ].map((feature, i) => {
              const FIcon = feature.icon;
              return (
                <div 
                  key={i}
                  style={{
                    backgroundColor: 'rgba(30, 41, 59, 0.7)',
                    borderRadius: '16px',
                    padding: '30px 24px',
                    border: '1px solid rgba(212, 160, 23, 0.25)'
                  }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(212, 160, 23, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FACC15',
                    marginBottom: '18px'
                  }}>
                    <FIcon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section style={{
        backgroundColor: '#FFFFFF',
        padding: '75px 0',
        textAlign: 'center',
        borderTop: '2px solid #E2E8F0'
      }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
              Ready to Register Your <span style={{ color: '#D4A017' }}>Business or License?</span>
            </h2>
            <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: 1.7, marginBottom: '32px', fontWeight: 500 }}>
              Speak with our senior corporate advisory partners today for a confidential consultation tailored to your company setup, tax registrations, or sector licensing.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenSchedule} 
                className="btn-primary" 
                style={{ padding: '14px 34px', fontSize: '0.94rem', borderRadius: '8px' }}
              >
                Schedule Free Consultation
              </button>
              <a 
                href="tel:03034063970" 
                className="btn-outline" 
                style={{ padding: '14px 32px', fontSize: '0.94rem', borderRadius: '8px' }}
              >
                <Phone size={16} />
                <span>Call 03034063970</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .reg-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </div>
  );
}
