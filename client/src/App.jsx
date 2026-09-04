import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScheduleModal from './components/ScheduleModal';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Direct eager imports for instantaneous, bullet-fast navigation with ZERO loading screen or delay
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import AuditAssurance from './pages/AuditAssurance';
import AccountingReporting from './pages/AccountingReporting';
import TaxAdvisory from './pages/TaxAdvisory';
import RegistrationCompliance from './pages/RegistrationCompliance';
import TaxCalculator from './pages/TaxCalculator';
import USTaxCalculator from './pages/USTaxCalculator';
import UKTaxCalculator from './pages/UKTaxCalculator';
import GermanyTaxCalculator from './pages/GermanyTaxCalculator';
import SaudiTaxCalculator from './pages/SaudiTaxCalculator';
import UAETaxCalculator from './pages/UAETaxCalculator';
import TaxCalculatorsHub from './pages/TaxCalculatorsHub';
import OurTeam from './pages/OurTeam';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

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
            
            {/* Global & Dedicated Country Tax Calculator Routes */}
            <Route path="/tax-calculator" element={<TaxCalculatorsHub onOpenSchedule={handleOpenSchedule} />} />
            <Route path="/tax-calculators" element={<TaxCalculatorsHub onOpenSchedule={handleOpenSchedule} />} />
            <Route path="/tax-calculator/usa" element={<USTaxCalculator onOpenSchedule={handleOpenSchedule} />} />
            <Route path="/tax-calculator/uk" element={<UKTaxCalculator onOpenSchedule={handleOpenSchedule} />} />
            <Route path="/tax-calculator/germany" element={<GermanyTaxCalculator onOpenSchedule={handleOpenSchedule} />} />
            <Route path="/tax-calculator/pakistan" element={<TaxCalculator onOpenSchedule={handleOpenSchedule} />} />
            <Route path="/tax-calculator/saudi-arabia" element={<SaudiTaxCalculator onOpenSchedule={handleOpenSchedule} />} />
            <Route path="/tax-calculator/uks" element={<SaudiTaxCalculator onOpenSchedule={handleOpenSchedule} />} />
            <Route path="/tax-calculator/ksa" element={<SaudiTaxCalculator onOpenSchedule={handleOpenSchedule} />} />
            <Route path="/tax-calculator/uae" element={<UAETaxCalculator onOpenSchedule={handleOpenSchedule} />} />
            <Route path="/tax-calculator/united-arab-emirates" element={<UAETaxCalculator onOpenSchedule={handleOpenSchedule} />} />
            
            <Route path="/team" element={<OurTeam onOpenSchedule={handleOpenSchedule} />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
          </Routes>
        </main>

        <Footer />

        <WhatsAppButton />

        <ScheduleModal isOpen={scheduleModalOpen} onClose={handleCloseSchedule} />
      </div>
    </Router>
  );
}
