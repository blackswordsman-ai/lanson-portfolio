import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your email credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lansonthandappilly20@gmail.com', // your email
    pass: '',    // your app password (not your Gmail password)
  },
});

app.post('/api/contact', async (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'your.email@gmail.com', // where you want to receive messages
      subject: 'New Contact Form Submission',
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));