import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from '$/app/app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import { getSessionStore } from '$/auth/auth.session';

async function bootstrap() {
  if (!process.env.CORS) process.env.CORS = '';
  const app = await NestFactory.create(AppModule, {
    cors: {
      credentials: true,
      origin: process.env.CORS.split(' ').filter((v) => v.length > 0),
    },
  });
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  const configService = app.get(ConfigService);

  // app.use(
  //   session({
  //     cookie: {
  //       maxAge: 60 * 60 * 1000, // 1 hour
  //       httpOnly: false,
  //       secure: configService.get('useHttps'),
  //     },
  //     secret: configService.get('secrets.session'),
  //     name: configService.get('cookie.name'),
  //     resave: false,
  //     rolling: true,
  //     saveUninitialized: false,
  //     store: getSessionStore(),
  //   }),
  // );

  await app.listen(configService.get('port'));
}
bootstrap();
