export const auth = {
  type: 'OAuth2',
  user: 'oludavidconnect@gmail.com',
  clientId: process.env.GMAIL_CLIENT_ID,
  clientSecret: process.env.GMAIL_CLIENT_SECRET,
  refreshToken: process.env.GMAIL_REFRESH_TOKEN,
};
