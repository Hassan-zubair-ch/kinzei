import { servicesData } from '../server/data/servicesData.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { country } = req.query || {};
  if (country && servicesData[country]) {
    return res.status(200).json({ success: true, count: servicesData[country].length, data: servicesData[country] });
  }

  const allServices = Object.values(servicesData).flat();
  return res.status(200).json({ success: true, count: allServices.length, data: allServices, categorized: servicesData });
}
