import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScheduleModal from './components/ScheduleModal';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import TaxCalculator from './pages/TaxCalculator';
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
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#090A0E' }}>
        <TopHeader onOpenSchedule={handleOpenSchedule} />
        <Navbar onOpenSchedule={handleOpenSchedule} />
        
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home onOpenSchedule={handleOpenSchedule} />} />
            <Route path="/about" element={<AboutUs onOpenSchedule={handleOpenSchedule} />} />
            <Route path="/services" element={<Services onOpenSchedule={handleOpenSchedule} />} />
            <Route path="/services/detail/:id" element={<ServiceDetail onOpenSchedule={handleOpenSchedule} />} />
            <Route path="/tax-calculator" element={<TaxCalculator onOpenSchedule={handleOpenSchedule} />} />
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
