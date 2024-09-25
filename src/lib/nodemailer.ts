import nodemailer from 'nodemailer';

export const sendEmail = async ({ name, email, message }: { name: string; email: string; message: string }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.CONTACT_EMAIL,
    subject: `New message from ${name}`,
    text: message,
  };

  await transporter.sendMail(mailOptions);
};
