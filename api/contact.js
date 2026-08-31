import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, country, service, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required fields.' 
      });
    }

    const countryNames = {
      pk: 'Pakistan (PK)',
      us: 'United States (US)',
      uk: 'United Kingdom (UK)',
      uae: 'United Arab Emirates (UAE)',
      global: 'Global / International'
    };
    const formattedCountry = countryNames[country] || country || 'Pakistan';
    const submissionTime = new Date().toLocaleString('en-US', { 
      timeZone: 'Asia/Karachi', 
      dateStyle: 'full', 
      timeStyle: 'medium' 
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '465', 10),
      secure: process.env.SMTP_SECURE !== 'false',
      auth: {
        user: process.env.SMTP_USER || 'info@kinzeiconsultants.com',
        pass: process.env.SMTP_PASS || 'Kinzei@2023'
      },
      connectionTimeout: 10000,
      greetingTimeout: 5000,
      socketTimeout: 15000
    });

    const sender = process.env.MAIL_FROM || '"Kinzei Consultants" <info@kinzeiconsultants.com>';
    const receiver = process.env.MAIL_TO || 'info@kinzeiconsultants.com';

    // 1. Notification Email to Official Kinzei Inbox
    await transporter.sendMail({
      from: sender,
      to: receiver,
      replyTo: `${name} <${email}>`,
      subject: `🔔 [Website Inquiry] ${service || 'General Advisory'} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8FAFC; margin: 0; padding: 20px; color: #1E293B; }
            .card { max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 12px; border: 1px solid #E2E8F0; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
            .header { background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); padding: 28px; text-align: center; border-bottom: 3px solid #D4A017; }
            .header h1 { color: #FFFFFF; margin: 0 0 6px 0; font-size: 20px; font-weight: 800; }
            .header p { color: #D4A017; margin: 0; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
            .content { padding: 28px; }
            .badge { display: inline-block; background: #FEF3C7; color: #92400E; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; margin-bottom: 20px; }
            .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .table th { width: 35%; text-align: left; padding: 10px 12px; font-size: 13px; color: #64748B; font-weight: 600; border-bottom: 1px solid #F1F5F9; }
            .table td { width: 65%; text-align: left; padding: 10px 12px; font-size: 14px; color: #0F172A; font-weight: 700; border-bottom: 1px solid #F1F5F9; }
            .message-box { background: #F8FAFC; border-left: 4px solid #D4A017; padding: 16px; border-radius: 0 8px 8px 0; font-size: 14px; line-height: 1.6; color: #334155; margin-bottom: 24px; }
            .footer { background: #F1F5F9; padding: 16px 28px; text-align: center; font-size: 12px; color: #64748B; border-top: 1px solid #E2E8F0; }
            .reply-btn { display: inline-block; background: #D4A017; color: #FFFFFF !important; text-decoration: none; padding: 10px 22px; border-radius: 6px; font-weight: 700; font-size: 13px; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>KINZEI CONSULTANTS</h1>
              <p>New Website Inquiry</p>
            </div>
            <div class="content">
              <span class="badge">Contact Form Lead</span>
              <table class="table">
                <tr><th>Client Name</th><td>${name}</td></tr>
                <tr><th>Email Address</th><td><a href="mailto:${email}" style="color:#D4A017;text-decoration:none;">${email}</a></td></tr>
                <tr><th>Phone / WhatsApp</th><td><a href="tel:${phone}" style="color:#0F172A;text-decoration:none;">${phone || 'Not Provided'}</a></td></tr>
                <tr><th>Target Jurisdiction</th><td>${formattedCountry}</td></tr>
                <tr><th>Service Requested</th><td>${service || 'General Inquiry'}</td></tr>
                <tr><th>Submitted At</th><td>${submissionTime} (PKT)</td></tr>
              </table>

              <div style="font-weight: 700; font-size: 13px; color: #64748B; margin-bottom: 8px; text-transform: uppercase;">Message:</div>
              <div class="message-box">${String(message).replace(/\n/g, '<br />')}</div>

              <div style="text-align: center;">
                <a href="mailto:${email}?subject=Re:%20Kinzei%20Consultants%20Inquiry%20-%20${encodeURIComponent(service || 'Advisory')}" class="reply-btn">Reply Directly to Client</a>
              </div>
            </div>
            <div class="footer">
              Kinzei Consultants (Private) Limited • In association with Javed Zafar &amp; Co. Chartered Accountants<br />
              Township, Lahore, Pakistan • WhatsApp: 03034063970 / 03170841452
            </div>
          </div>
        </body>
        </html>
      `
    });

    // 2. Client Auto-Confirmation Email (Non-blocking)
    try {
      await transporter.sendMail({
        from: sender,
        to: email,
        subject: `Thank you for contacting Kinzei Consultants`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8FAFC; margin: 0; padding: 20px; color: #1E293B; }
              .card { max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 12px; border: 1px solid #E2E8F0; overflow: hidden; }
              .header { background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); padding: 28px; text-align: center; border-bottom: 3px solid #D4A017; }
              .header h1 { color: #FFFFFF; margin: 0 0 6px 0; font-size: 22px; font-weight: 800; }
              .content { padding: 28px; font-size: 15px; line-height: 1.7; color: #334155; }
              .highlight-box { background: #FFFBEB; border: 1px solid #FDE68A; padding: 16px; border-radius: 8px; margin: 20px 0; }
              .footer { background: #F1F5F9; padding: 20px; text-align: center; font-size: 12px; color: #64748B; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <h1>KINZEI CONSULTANTS</h1>
                <div style="color:#D4A017; font-weight:600; font-size:13px;">CHARTERED ACCOUNTANTS &amp; ADVISORY</div>
              </div>
              <div class="content">
                <p>Dear <strong>${name}</strong>,</p>
                <p>Thank you for reaching out to <strong>Kinzei Consultants (Private) Limited</strong>. We have received your message regarding <strong>${service || 'our professional advisory services'}</strong>.</p>
                
                <div class="highlight-box">
                  <div style="font-weight: 700; color: #B8860B; margin-bottom: 6px;">Next Steps:</div>
                  Our advisory partner is reviewing your request and will contact you within <strong>24 business hours</strong>.
                </div>

                <p>For urgent inquiries or instant WhatsApp assistance, you may reach our direct desks:</p>
                <ul style="padding-left: 20px; color: #0F172A; font-weight: 600;">
                  <li>WhatsApp / Phone: +92 303 4063970</li>
                  <li>WhatsApp / Phone: +92 317 0841452</li>
                  <li>Official Email: info@kinzeiconsultants.com</li>
                </ul>

                <p style="margin-top: 24px;">Best regards,<br /><strong>Kinzei Consultants Team</strong><br /><span style="font-size:13px; color:#64748B;">First Floor, Plot # 14, Main Road, Block 1 College Rd, Sector C2 Township, Lahore, Pakistan</span></p>
              </div>
              <div class="footer">
                © ${new Date().getFullYear()} Kinzei Consultants (Private) Limited. All rights reserved.
              </div>
            </div>
          </body>
          </html>
        `
      });
    } catch (clientMailErr) {
      console.warn('Client acknowledgement email skipped:', clientMailErr.message);
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you for reaching out to Kinzei Consultants. Your message has been sent to our official inbox, and our advisory specialist will contact you within 24 hours.'
    });
  } catch (error) {
    console.error('Contact Form Serverless Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to send message via email at this moment. Please reach our desk directly on WhatsApp at 03034063970.'
    });
  }
}
