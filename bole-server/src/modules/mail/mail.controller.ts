import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailDto } from '@/mail.dto';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('/')
  sendMail(@Body() mailBody: MailDto): Promise<void> {
    return this.mailService.generateMail(mailBody);
  }
}
