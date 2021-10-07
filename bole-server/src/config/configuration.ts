export default () => {
  // check if all required variables are there
  const required = [
    'POSTGRES_PASSWORD',
    'SESSION_SECRET',
    'EMAIL_HOST',
    'EMAIL_PORT',
    'EMAIL_ID',
    'EMAIL_PASS',
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
      name: process.env.COOKIE_NAME || 'vivid.login',
    },
    useHttps: process.env.USE_HTTPS === 'true',
    saltRounds: parseInt(process.env.SALT_ROUNDS) || 10,
    db: {
      host: process.env.POSTGRES_HOST || '127.0.0.1',
      port: parseInt(<string>process.env.POSTGRES_PORT) || 5432,
      user: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE || 'vivid',
    },
    secrets: {
      session: process.env.SESSION_SECRET,
      user: process.env.USER_ENCRYPTION_SECRET,
    },
    mail: {
      host: process.env.EMAIL_HOST,
      port: parseInt(<string>process.env.EMAIL_PORT),
      id: process.env.EMAIL_ID,
      password: process.env.EMAIL_PASS,
    },
  };
};
