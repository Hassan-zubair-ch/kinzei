import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScheduleModal from './components/ScheduleModal';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';

// Lazy-loaded routes for optimal initial page load performance
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const Services = React.lazy(() => import('./pages/Services'));
const ServiceDetail = React.lazy(() => import('./pages/ServiceDetail'));
const AuditAssurance = React.lazy(() => import('./pages/AuditAssurance'));
const AccountingReporting = React.lazy(() => import('./pages/AccountingReporting'));
const TaxAdvisory = React.lazy(() => import('./pages/TaxAdvisory'));
const RegistrationCompliance = React.lazy(() => import('./pages/RegistrationCompliance'));
const TaxCalculator = React.lazy(() => import('./pages/TaxCalculator'));
const USTaxCalculator = React.lazy(() => import('./pages/USTaxCalculator'));
const OurTeam = React.lazy(() => import('./pages/OurTeam'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = React.lazy(() => import('./pages/TermsConditions'));

// Elegant loading spinner component
const PageLoader = () => (
  <div style={{
    minHeight: '65vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px'
  }}>
    <div style={{
      width: '42px',
      height: '42px',
      border: '3px solid #F1F5F9',
      borderTop: '3px solid #D4A017',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite'
    }} />
    <span style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 600 }}>Loading Kinzei Consultants...</span>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default function App() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);

  const handleOpenSchedule = () => setScheduleModalOpen(true);
  const handleCloseSchedule = () => setScheduleModalOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
        <TopHeader onOpenSchedule={handleOpenSchedule} />
        <Navbar onOpenSchedule={handleOpenSchedule} />
        
        <main style={{ flexGrow: 1, backgroundColor: '#FFFFFF' }}>
          <React.Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home onOpenSchedule={handleOpenSchedule} />} />
              <Route path="/about" element={<AboutUs onOpenSchedule={handleOpenSchedule} />} />
              <Route path="/services" element={<Services onOpenSchedule={handleOpenSchedule} />} />
              <Route path="/services/audit-assurance" element={<AuditAssurance onOpenSchedule={handleOpenSchedule} />} />
              <Route path="/services/accounting-financial-reporting" element={<AccountingReporting onOpenSchedule={handleOpenSchedule} />} />
              <Route path="/services/tax-advisory" element={<TaxAdvisory onOpenSchedule={handleOpenSchedule} />} />
              <Route path="/services/taxation-services" element={<TaxAdvisory onOpenSchedule={handleOpenSchedule} />} />
              <Route path="/services/registration-licensing-compliance" element={<RegistrationCompliance onOpenSchedule={handleOpenSchedule} />} />
              <Route path="/registration-compliance" element={<RegistrationCompliance onOpenSchedule={handleOpenSchedule} />} />
              <Route path="/services/detail/:id" element={<ServiceDetail onOpenSchedule={handleOpenSchedule} />} />
              <Route path="/tax-calculator" element={<USTaxCalculator onOpenSchedule={handleOpenSchedule} />} />
              <Route path="/tax-calculator/usa" element={<USTaxCalculator onOpenSchedule={handleOpenSchedule} />} />
              <Route path="/tax-calculator/pakistan" element={<TaxCalculator onOpenSchedule={handleOpenSchedule} />} />
              <Route path="/team" element={<OurTeam onOpenSchedule={handleOpenSchedule} />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsConditions />} />
            </Routes>
          </React.Suspense>
        </main>

        <Footer />

        <WhatsAppButton />

        <ScheduleModal isOpen={scheduleModalOpen} onClose={handleCloseSchedule} />
      </div>
    </Router>
  );
}
