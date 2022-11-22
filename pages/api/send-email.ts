import { NextApiRequest, NextApiResponse } from 'next';
import withGmail from '../../lib/gmail';

export default function sendEmailHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { sendEmail } = withGmail();
  switch (req.method) {
    case 'POST': {
      return sendEmail(req, res);
    }
  }
}
