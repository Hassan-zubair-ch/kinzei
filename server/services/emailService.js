import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// SMTP Transporter configured for Hostinger Email
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT || '465', 10),
  secure: process.env.SMTP_SECURE !== 'false', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'info@kinzeiconsultants.com',
    pass: process.env.SMTP_PASS || 'Kinzei@2023',
  },
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
  connectionTimeout: 10000,
  greetingTimeout: 5000,
  socketTimeout: 15000
});

const DEFAULT_SENDER = process.env.MAIL_FROM || 'Kinzei Consultants <info@kinzeiconsultants.com>';
const NOTIFICATION_RECEIVER = process.env.MAIL_TO || 'info@kinzeiconsultants.com';

/**
 * Sends a Contact Form Inquiry to Kinzei Official Inbox + Client Confirmation
 */
export async function sendContactEmail({ name, email, phone, country, service, message }) {
  const countryNames = {
    pk: 'Pakistan (PK)',
    us: 'United States (US)',
    uk: 'United Kingdom (UK)',
    uae: 'United Arab Emirates (UAE)',
    global: 'Global / International'
  };

  const formattedCountry = countryNames[country] || country || 'Not Specified';
  const submissionTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi', dateStyle: 'full', timeStyle: 'medium' });

  // 1. Notification Email to Kinzei Management Team
  const adminMailOptions = {
    from: DEFAULT_SENDER,
    to: NOTIFICATION_RECEIVER,
    replyTo: `${name} <${email}>`,
    subject: `🔔 [New Website Inquiry] ${service || 'General Inquiry'} - ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8FAFC; margin: 0; padding: 20px; color: #1E293B; }
          .card { max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 12px; border: 1px solid #E2E8F0; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
          .header { background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); padding: 28px; text-align: center; border-bottom: 3px solid #D4A017; }
          .header h1 { color: #FFFFFF; margin: 0 0 6px 0; font-size: 20px; font-weight: 800; letter-spacing: 0.5px; }
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
            <p>New Lead Notification</p>
          </div>
          <div class="content">
            <span class="badge">Website Contact Form</span>
            <table class="table">
              <tr><th>Client Name</th><td>${name}</td></tr>
              <tr><th>Email Address</th><td><a href="mailto:${email}" style="color:#D4A017;text-decoration:none;">${email}</a></td></tr>
              <tr><th>Phone / WhatsApp</th><td><a href="tel:${phone}" style="color:#0F172A;text-decoration:none;">${phone || 'Not Provided'}</a></td></tr>
              <tr><th>Target Jurisdiction</th><td>${formattedCountry}</td></tr>
              <tr><th>Service Requested</th><td>${service || 'General Inquiry'}</td></tr>
              <tr><th>Submission Time</th><td>${submissionTime} (PKT)</td></tr>
            </table>

            <div style="font-weight: 700; font-size: 13px; color: #64748B; margin-bottom: 8px; text-transform: uppercase;">Inquiry Message:</div>
            <div class="message-box">${message.replace(/\n/g, '<br />')}</div>

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
  };

  // 2. Automated Confirmation Email to Client
  const clientMailOptions = {
    from: DEFAULT_SENDER,
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
            <p>Thank you for reaching out to <strong>Kinzei Consultants (Private) Limited</strong>. We have received your inquiry regarding <strong>${service || 'our professional advisory services'}</strong>.</p>
            
            <div class="highlight-box">
              <div style="font-weight: 700; color: #B8860B; margin-bottom: 6px;">Next Steps:</div>
              Our specialized tax and corporate advisory partner is reviewing your requirements and will contact you within <strong>24 business hours</strong>.
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
  };

  // Dispatch both emails in parallel for maximum speed
  const [adminResult] = await Promise.allSettled([
    transporter.sendMail(adminMailOptions),
    transporter.sendMail(clientMailOptions)
  ]);

  if (adminResult.status === 'rejected') {
    throw new Error(adminResult.reason?.message || 'Failed to dispatch email');
  }

  return { success: true, messageId: adminResult.value?.messageId };
}

/**
 * Sends a Consultation Booking Request to Kinzei Official Inbox + Client Confirmation
 */
export async function sendConsultationEmail({ fullName, email, phone, preferredDate, preferredTime, topic, notes }) {
  const submissionTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi', dateStyle: 'full', timeStyle: 'medium' });

  // 1. Notification Email to Kinzei Management Team
  const adminMailOptions = {
    from: DEFAULT_SENDER,
    to: NOTIFICATION_RECEIVER,
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
            <span class="badge">Scheduled Meeting Request</span>
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
  };

  // 2. Client Booking Confirmation Email
  const clientMailOptions = {
    from: DEFAULT_SENDER,
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
  };

  // Dispatch both emails in parallel for maximum speed
  const [adminResult] = await Promise.allSettled([
    transporter.sendMail(adminMailOptions),
    transporter.sendMail(clientMailOptions)
  ]);

  if (adminResult.status === 'rejected') {
    throw new Error(adminResult.reason?.message || 'Failed to dispatch consultation email');
  }

  return { success: true, messageId: adminResult.value?.messageId };
}
