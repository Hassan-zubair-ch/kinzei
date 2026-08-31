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
    const { fullName, email, phone, preferredDate, preferredTime, topic, notes } = req.body || {};

    if (!fullName || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Full name, email, and phone number are required.' 
      });
    }

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

    // 1. Notification to Kinzei Official Inbox
    await transporter.sendMail({
      from: sender,
      to: receiver,
      replyTo: `${fullName} <${email}>`,
      subject: `📅 [Consultation Booking] ${fullName} - ${topic || 'Advisory Session'}`,
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
            .badge { display: inline-block; background: #DCFCE7; color: #166534; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; margin-bottom: 20px; }
            .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .table th { width: 35%; text-align: left; padding: 10px 12px; font-size: 13px; color: #64748B; font-weight: 600; border-bottom: 1px solid #F1F5F9; }
            .table td { width: 65%; text-align: left; padding: 10px 12px; font-size: 14px; color: #0F172A; font-weight: 700; border-bottom: 1px solid #F1F5F9; }
            .footer { background: #F1F5F9; padding: 16px 28px; text-align: center; font-size: 12px; color: #64748B; border-top: 1px solid #E2E8F0; }
            .reply-btn { display: inline-block; background: #D4A017; color: #FFFFFF !important; text-decoration: none; padding: 10px 22px; border-radius: 6px; font-weight: 700; font-size: 13px; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>KINZEI CONSULTANTS</h1>
              <p>New Consultation Booking</p>
            </div>
            <div class="content">
              <span class="badge">Scheduled Session Request</span>
              <table class="table">
                <tr><th>Client Name</th><td>${fullName}</td></tr>
                <tr><th>Email Address</th><td><a href="mailto:${email}" style="color:#D4A017;text-decoration:none;">${email}</a></td></tr>
                <tr><th>Phone / WhatsApp</th><td><a href="tel:${phone}" style="color:#0F172A;text-decoration:none;">${phone}</a></td></tr>
                <tr><th>Preferred Date</th><td>${preferredDate || 'Earliest Available'}</td></tr>
                <tr><th>Preferred Time</th><td>${preferredTime || 'Standard Hours'}</td></tr>
                <tr><th>Consultation Topic</th><td>${topic || 'General Tax & Business Advisory'}</td></tr>
                ${notes ? `<tr><th>Additional Notes</th><td>${notes}</td></tr>` : ''}
                <tr><th>Booked At</th><td>${submissionTime} (PKT)</td></tr>
              </table>

              <div style="text-align: center;">
                <a href="mailto:${email}?subject=Confirmation:%20Kinzei%20Consultation%20Session%20-${encodeURIComponent(preferredDate ? ' ' + preferredDate : '')}" class="reply-btn">Confirm Session with Client</a>
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

    // 2. Client Booking Confirmation Email (Non-blocking)
    try {
      await transporter.sendMail({
        from: sender,
        to: email,
        subject: `Consultation Request Received - Kinzei Consultants`,
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
              .booking-summary { background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 18px; margin: 20px 0; }
              .footer { background: #F1F5F9; padding: 20px; text-align: center; font-size: 12px; color: #64748B; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <h1>KINZEI CONSULTANTS</h1>
                <div style="color:#D4A017; font-weight:600; font-size:13px;">CONSULTATION BOOKING CONFIRMATION</div>
              </div>
              <div class="content">
                <p>Dear <strong>${fullName}</strong>,</p>
                <p>We have successfully registered your consultation request with <strong>Kinzei Consultants</strong>.</p>
                
                <div class="booking-summary">
                  <div style="font-weight: 800; color: #0F172A; margin-bottom: 10px; font-size: 16px;">Booking Details:</div>
                  <div style="margin-bottom: 6px;"><strong>Topic:</strong> ${topic || 'Tax & Financial Advisory'}</div>
                  <div style="margin-bottom: 6px;"><strong>Requested Date:</strong> ${preferredDate || 'Earliest Available Slot'}</div>
                  <div style="margin-bottom: 6px;"><strong>Requested Time:</strong> ${preferredTime || 'Standard Hours'}</div>
                  <div><strong>Contact Number:</strong> ${phone}</div>
                </div>

                <p>Our advisory coordinator will connect with you shortly to confirm the meeting link or office appointment details.</p>

                <p style="margin-top: 24px;">Warm regards,<br /><strong>Kinzei Advisory Team</strong><br /><span style="font-size:13px; color:#64748B;">Kinzei Consultants (Private) Limited</span></p>
              </div>
              <div class="footer">
                © ${new Date().getFullYear()} Kinzei Consultants (Private) Limited • WhatsApp: 03034063970
              </div>
            </div>
          </body>
          </html>
        `
      });
    } catch (clientMailErr) {
      console.warn('Client consultation acknowledgement email skipped:', clientMailErr.message);
    }

    return res.status(200).json({
      success: true,
      message: `Consultation session successfully reserved for ${fullName}. Confirmation email sent to ${email}.`
    });
  } catch (error) {
    console.error('Consultation Booking Serverless Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to schedule consultation session. Please reach our desk directly on WhatsApp at 03034063970.'
    });
  }
}
