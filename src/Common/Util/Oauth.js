export const OAUTH = {
  REDIRECT_URI:
    process.env.NODE_ENV === 'production'
      ? `http://pyunha.com/oauth`
      : `http://localhost:3000/oauth`,
  CLIENT_SECRET: `82g8ZwhdZphpEE41gbnqjZtilv0jtnMS`,
  REST_API_KEY: `23c0a0c03900fcb72185e2dd8ecc9df3`,
};
