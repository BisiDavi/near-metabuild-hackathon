import path from 'path';
import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';
import { authenticate } from '@google-cloud/local-auth';

export default async function GmailHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const gmail = google.gmail('v1');
  const { to, subject, message, title } = req.body;

  async function sendEmail() {
    const auth = await authenticate({
      keyfilePath: path.join(__dirname, '../../oauth2.key.json'),
      scopes: ['https://www.googleapis.com/auth/gmail.send'],
    });
    google.options({ auth });
    const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString(
      'base64',
    )}?=`;

    const messageParts = [
      `From: NEAR-RESUMÉ <oludavidconnect@gmail.com>`,
      `To:${to}`,
      'Content-Type: text/html; charset=utf-8',
      'MIME-Version: 1.0',
      `Subject:${utf8Subject}`,
      '',
      title,
      message,
    ];
    const toMessagePart = messageParts.join('\n');
    const encodedMessage = Buffer.from(toMessagePart)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '-')
      .replace(/=+$/, '');

    const messageResponse = await gmail.users.messages.send({
      userId: to,
      requestBody: {
        raw: encodedMessage,
      },
    });
    console.log('messageResponse', messageResponse.data);
    return messageResponse.data;
  }

  switch (req.method) {
    case 'POST': {
      await sendEmail()
        .then((response) => {
          console.log('response', response);
          res.status(200).send(response);
        })
        .catch((error) => {
          console.log('error', error);
          res.status(400).send(error);
        });
    }
  }
}
