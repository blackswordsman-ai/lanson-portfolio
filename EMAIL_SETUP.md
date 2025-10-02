# Contact Form Email Setup Guide

This guide will help you set up the contact form to send emails using nodemailer.

## 1. Create Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
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
```

## 2. Gmail Setup (Recommended)

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Factor Authentication if not already enabled

### Step 2: Generate App Password
1. In Google Account settings, go to Security
2. Under "2-Step Verification", click "App passwords"
3. Select "Mail" and your device
4. Copy the generated 16-character password
5. Use this password as `SMTP_PASS` in your `.env.local`

### Step 3: Update Environment Variables
```bash
SMTP_USER=lansonthandappilly20@gmail.com
SMTP_PASS=your-16-character-app-password
```

## 3. Alternative Email Providers

### Outlook/Hotmail
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

### Yahoo Mail
```bash
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

### Custom SMTP Server
```bash
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-username
SMTP_PASS=your-password
```

## 4. Testing the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out the form and submit
4. Check your email for the message
5. Check the sender's email for the auto-reply

## 5. Features Included

- ✅ **Form Validation**: Client and server-side validation
- ✅ **Email Templates**: Professional HTML email templates
- ✅ **Auto-Reply**: Automatic response to the sender
- ✅ **Error Handling**: Comprehensive error handling
- ✅ **Security**: Input sanitization and validation
- ✅ **Responsive Design**: Works on all devices

## 6. Troubleshooting

### Common Issues:

1. **"Authentication failed"**
   - Check your email and app password
   - Ensure 2FA is enabled for Gmail

2. **"Connection timeout"**
   - Verify SMTP host and port
   - Check firewall settings

3. **"Invalid email format"**
   - Check the email validation regex
   - Ensure proper email format

### Debug Mode:
Check the browser console and server logs for detailed error messages.

## 7. Security Notes

- Never commit your `.env.local` file to version control
- Use app passwords instead of your main account password
- Consider using environment-specific configurations for production
- Implement rate limiting for production use

## 8. Production Deployment

For production deployment:

1. Update `NEXT_PUBLIC_SITE_URL` to your domain
2. Use a production email service (SendGrid, Mailgun, etc.)
3. Implement rate limiting
4. Add spam protection (reCAPTCHA)
5. Set up proper error monitoring

## Support

If you encounter any issues, check the console logs and ensure all environment variables are correctly set.
