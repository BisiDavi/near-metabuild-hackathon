import { google } from 'googleapis';
import nodemailer from 'nodemailer';

import { auth } from '@/lib/gmail-constant';

type requestType = {
  body: {
    subject: string;
    title: string;
    message: string;
    receipent: string;
  };
};

export default function wihGmail() {
  const oAuth2Client = new google.auth.OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    process.env.GMAIL_REDIRECT_URI,
  );

  oAuth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
  });

  async function sendEmail(req: requestType, res: any) {
    const { subject, title, message, receipent } = req.body;
    try {
      const typedNodemailer: any = nodemailer;
      const accessToken = await oAuth2Client.getAccessToken();
      const transport = typedNodemailer.createTransport({
        service: 'gmail',
        auth: {
          ...auth,
          accessToken,
        },
      });

      const mailOptions = {
        from: 'NEAR RESUMÉ  <oludavidconnect@gmail.com>',
        to: receipent,
        subject: `${subject} - ${title}`,
        text: `${message} \n\n\n\n\n Powered by NEAR-RESUMÉ`,
      };
      const result = await transport.sendMail(mailOptions);
      return res.status(200).json(result);
    } catch (error) {
      console.log('send-email-error', error);
      return res.status(400).json(error);
    }
  }

  return { sendEmail };
}
