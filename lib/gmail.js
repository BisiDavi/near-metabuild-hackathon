import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { auth } from '@/lib/gmail-constant';

function wihGmail() {
  const oAuth2Client = new google.auth.OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    process.env.GMAIL_REDIRECT_URI,
  );

  oAuth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
  });

  async function sendEmail(req, res, subject, title, message) {
    try {
      const accessToken = await oAuth2Client.getAccessToken();
      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          ...auth,
          accessToken,
        },
      });

      const mailOptions = {
        from: 'Meeting & Polls for Confluence  <oludavidconnect@gmail.com>',
        to: req.body.receipent,
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
