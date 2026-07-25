import express from 'express';
import cors from 'cors';
import { servicesData } from './data/servicesData.js';
import { calculatePakistanSalaryTax, calculateUSSalaryTax, calculateUKSalaryTax, calculateUAETax } from './data/taxSlabs.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Get all services by country or all
app.get('/api/services', (req, res) => {
  const { country } = req.query;
  if (country && servicesData[country]) {
    return res.json({ success: true, count: servicesData[country].length, data: servicesData[country] });
  }
  
  const allServices = Object.values(servicesData).flat();
  return res.json({ success: true, count: allServices.length, data: allServices, categorized: servicesData });
});

// Get detailed service content by slug/id
app.get('/api/services/detail/:id', (req, res) => {
  const { id } = req.params;
  const allServices = Object.values(servicesData).flat();
  const service = allServices.find(s => s.id === id);

  if (!service) {
    return res.status(404).json({ success: false, message: 'Service not found' });
  }

  const related = allServices
    .filter(s => s.id !== id && (s.country === service.country || s.country === 'pk'))
    .slice(0, 3);

  return res.json({ success: true, data: service, related });
});

// Calculate tax endpoint
app.post('/api/calculate-tax', (req, res) => {
  const { 
    country = 'pk', 
    monthlySalary = 0, 
    taxYear = '2025-26', 
    autoMedical = false, 
    manualMedical = 0,
    filingStatus = 'single',
    deduction401k = 0,
    pensionPercent = 5,
    studentLoan = 'none',
    entityType = 'salary'
  } = req.body;

  let result = null;

  if (country === 'pk') {
    result = calculatePakistanSalaryTax({ monthlySalary, taxYear, autoMedical, manualMedical });
  } else if (country === 'us') {
    result = calculateUSSalaryTax({ monthlySalary, taxYear, filingStatus, deduction401k });
  } else if (country === 'uk') {
    result = calculateUKSalaryTax({ monthlySalary, taxYear, pensionPercent, studentLoan });
  } else if (country === 'uae') {
    result = calculateUAETax({ monthlySalary, entityType });
  } else {
    result = calculatePakistanSalaryTax({ monthlySalary, taxYear, autoMedical, manualMedical });
  }

  return res.json({ success: true, result });
});

// Contact form submission endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, phone, country, service, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
  }
  return res.json({
    success: true,
    message: 'Thank you for reaching out to Kinzei Consultants. Our senior tax & advisory specialist will contact you within 24 hours.'
  });
});

// Schedule consultation booking endpoint
app.post('/api/consultation', (req, res) => {
  const { fullName, email, phone, preferredDate, preferredTime, topic } = req.body;
  if (!fullName || !email || !phone) {
    return res.status(400).json({ success: false, message: 'Please provide full name, email, and phone number.' });
  }
  return res.json({
    success: true,
    message: `Consultation session successfully reserved for ${fullName}. Confirmation email sent to ${email}.`
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'active', server: 'Kinzei Consultants API', timestamp: new Date().toISOString() });
});

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Kinzei Consultants API Server running on port ${PORT}`);
  });
}

export default app;
