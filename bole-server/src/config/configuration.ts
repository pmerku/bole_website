export default () => {
  // check if all required variables are there
  const required = [
    'POSTGRES_PASSWORD',
    'SESSION_SECRET',
    'EMAIL_USER',
    'EMAIL_CLIENT_ID',
    'EMAIL_CLIENT_SECRET',
    'EMAIL_REDIRECT_URL',
    'EMAIL_REFRESH_TOKEN',
    'EMAIL_ACCESS_TOKEN',
    'RECEIVER_EMAIL',
  ];
  required.forEach((v) => {
    if (!process.env[v]) {
      throw new Error(`Environment variable ${v} is missing`);
    }
  });

  const port = parseInt(process.env.PORT) || 3000;

  return {
    port,
    cookie: {
      name: process.env.COOKIE_NAME || 'bole.session',
    },
    useHttps: process.env.USE_HTTPS === 'true',
    saltRounds: parseInt(process.env.SALT_ROUNDS) || 10,
    db: {
      host: process.env.POSTGRES_HOST || '127.0.0.1',
      port: parseInt(<string>process.env.POSTGRES_PORT) || 5432,
      user: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE || 'bole',
    },
    secrets: {
      session: process.env.SESSION_SECRET,
      key: process.env.ENCRYPTION_SECRET,
    },
    mail: {
      user: process.env.EMAIL_USER,
      client_id: process.env.EMAIL_CLIENT_ID,
      client_secret: process.env.EMAIL_CLIENT_SECRET,
      redirect_url: process.env.EMAIL_REDIRECT_URL,
      refresh_token: process.env.EMAIL_REFRESH_TOKEN,
      access_token: process.env.EMAIL_ACCESS_TOKEN,
    },
  };
};
