import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('contact')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get('template')
  sendTemplate(): any {
    return this.mailService.example();
  }
}
