import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './contact.entity';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() contactData: Partial<Contact>): Promise<Contact> {
    return this.contactService.createContact(contactData);
  }
}
