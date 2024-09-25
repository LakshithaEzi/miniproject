import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../lib/nodemailer';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    try {
      await sendEmail({ name, email, message });
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
