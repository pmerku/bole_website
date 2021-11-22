import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { MailDto } from '@/mail.dto';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async generateMail(mailBody: MailDto): Promise<void> {
    await this.mailerService.sendMail({
      to: process.env.RECEIVER_EMAIL, // List of receivers email address
      from: mailBody.email, // Senders email address
      subject: mailBody.subject,
      template: './index', // The `.hbs` extension is appended automatically.
      context: {
        // Data to be sent to template engine.
        name: mailBody.name,
        email: mailBody.email,
        subject: mailBody.subject,
        message: mailBody.message,
      },
    });
  }
}
