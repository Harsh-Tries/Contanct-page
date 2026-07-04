import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Configure Nodemailer SMTP transporter.
 * Supports custom SMTP hosts, Gmail, or standard fallback configurations.
 */
const createTransporter = () => {
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  } else {
    return nodemailer.createTransport({
      service: process.env.SMTP_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }
};

const transporter = createTransporter();

/**
 * Compiles a responsive HTML template and sends the contact form email.
 * 
 * @param {Object} data - Contact form submission fields
 * @returns {Promise} - Nodemailer send result
 */
export const sendContactEmail = async (data) => {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;

  const mailOptions = {
    from: `"${data.name}" <${process.env.EMAIL_USER}>`,
    to: adminEmail,
    replyTo: data.email,
    subject: '[Feedback Submission] New Message',
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #1e293b; border-radius: 12px; background-color: #0b0f19; color: #f3f4f6; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
        <div style="border-bottom: 2px solid #00a9e2; padding-bottom: 15px; margin-bottom: 20px;">
          <h2 style="color: #0cacf4; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px;">New Feedback Submission</h2>
          <p style="color: #94a3b8; font-size: 13px; margin: 5px 0 0;">Received at: ${new Date().toLocaleString('en-US', { timeZoneName: 'short' })}</p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
          <tr style="border-bottom: 1px solid #1e293b;">
            <td style="padding: 12px 0; font-weight: 600; color: #94a3b8; width: 140px;">Full Name</td>
            <td style="padding: 12px 0; color: #ffffff;">${data.name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <td style="padding: 12px 0; font-weight: 600; color: #94a3b8;">Email Address</td>
            <td style="padding: 12px 0;"><a href="mailto:${data.email}" style="color: #0cacf4; text-decoration: none;">${data.email}</a></td>
          </tr>
        </table>
        
        <div style="background-color: #151b22; padding: 18px; border-radius: 8px; border-left: 4px solid #00a9e2; margin-top: 20px;">
          <h4 style="margin: 0 0 10px 0; color: #0cacf4; font-size: 14px; font-weight: 600;">Message Body:</h4>
          <p style="margin: 0; color: #e2e8f0; line-height: 1.6; white-space: pre-wrap; font-size: 13.5px;">${data.message}</p>
        </div>
        
        <div style="margin-top: 30px; border-top: 1px solid #1e293b; padding-top: 15px; text-align: center; font-size: 11px; color: #64748b; letter-spacing: 0.5px;">
          This is an automated notification sent from your Contact Page feedback server.
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};
