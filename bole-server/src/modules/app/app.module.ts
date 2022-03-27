import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import configuration from '~/config/configuration';
import { TypeORMSession } from '@/session.entity';

import { MailModule } from '$/mail/mail.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

const config = ConfigModule.forRoot({
  load: [configuration],
});

@Module({
  imports: [
    // config & database
    config,
    // TypeOrmModule.forRootAsync({
    //   imports: [config, ScheduleModule.forRoot()],
    //   useFactory: async (configService: ConfigService) => ({
    //     type: 'postgres',
    //     host: configService.get('db.host'),
    //     port: configService.get('db.port'),
    //     username: configService.get('db.user'),
    //     password: configService.get('db.password'),
    //     database: configService.get('db.database'),
    //     autoLoadEntities: true,
    //     entities: [TypeORMSession],
    //     synchronize: true,
    //   }),
    //   inject: [ConfigService],
    // }),

    // mail
    MailerModule.forRootAsync({
      imports: [config],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: 'smtp.gmail.com',
          port: 465,
          service: 'gmail',
          secure: true, // true for 465, false for other ports
          auth: {
            type: 'OAuth2',
            user: configService.get('mail.user'),
            clientId: configService.get('mail.client_id'),
            clientSecret: configService.get('mail.client_secret'),
            refreshToken: configService.get('mail.refresh_token'),
            accessToken: configService.get('mail.access_token'),
          },
        },
        defaults: {
          from: `"No Reply" <${configService.get('mail.user')}>`, // outgoing email ID
        },
        template: {
          dir: process.cwd() + '/template/',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),

    // modules
    MailModule,
  ],
  controllers: [],
  providers: [],
  exports: [ConfigModule],
})
export class AppModule {}
