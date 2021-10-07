import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import configuration from '~/config/configuration';
import { TypeORMSession } from '@/session.entity';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import { MailModule } from '$/mail/mail.module';

const config = ConfigModule.forRoot({
  load: [configuration],
});

@Module({
  imports: [
    // config & database
    config,
    TypeOrmModule.forRootAsync({
      imports: [config, ScheduleModule.forRoot()],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('db.host'),
        port: configService.get('db.port'),
        username: configService.get('db.user'),
        password: configService.get('db.password'),
        database: configService.get('db.database'),
        autoLoadEntities: true,
        entities: [TypeORMSession],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),

    // mail
    MailerModule.forRootAsync({
      imports: [config],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get('mail.host'),
          port: configService.get('mail.port'),
          secure: false, // true for 465, false for other ports
          auth: {
            user: configService.get('mail.id'), // generated ethereal user
            pass: configService.get('mail.password'), // generated ethereal password
          },
        },
        defaults: {
          from: '"No Reply" <noreply@example.com>', // outgoing email ID
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
