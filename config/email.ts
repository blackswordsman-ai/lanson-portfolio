// Email configuration for contact form
// Copy this to your .env.local file and update with your actual values

export const emailConfig = {
  // Gmail SMTP Settings (recommended)
  smtp: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || 'your-email@gmail.com',
      pass: process.env.SMTP_PASS || 'your-app-password',
    },
  },
  
  // Contact form settings
  contact: {
    recipientEmail: process.env.CONTACT_EMAIL || 'lansonthandappilly20@gmail.com',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
};

// Environment variables template:
/*
# Email Configuration (SMTP Settings)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Contact Form Settings
CONTACT_EMAIL=lansonthandappilly20@gmail.com

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
*/
