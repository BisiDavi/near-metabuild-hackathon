import { NextApiRequest, NextApiResponse } from 'next';
import withGmail from '../../lib/gmail';

export default async function sendEmailHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { sendEmail } = withGmail();
  switch (req.method) {
    case 'POST': {
      return await sendEmail(req, res);
    }
  }
}
