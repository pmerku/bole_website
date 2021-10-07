import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async example(): Promise<void> {
    await this.mailerService.sendMail({
      to: 'user@gmail.com', // List of receivers email address
      from: 'user@outlook.com', // Senders email address
      subject: 'Testing Nest Mailermodule with template ✔',
      template: 'index', // The `.hbs` extension is appended automatically.
      context: {
        // Data to be sent to template engine.
        code: 'cf1a3f828287',
        username: 'john doe',
      },
    });
  }
}
