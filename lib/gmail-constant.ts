export const auth = {
  type: 'OAuth2',
  user: 'oludavidconnect@gmail.com',
  clientId: process.env.NEXT_PUBLIC_GMAIL_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_GMAIL_CLIENT_SECRET,
  refreshToken: process.env.NEXT_PUBLIC_GMAIL_REFRESH_TOKEN,
};
