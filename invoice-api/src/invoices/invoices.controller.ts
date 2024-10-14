import { Controller, Get, Param } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { Invoice } from '@prisma/client';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  // Route: /invoices - Fetch all invoices
  @Get()
  async getAllInvoices(): Promise<Invoice[]> {
    return this.invoicesService.getAllInvoices();
  }

  // Route: /invoices/:id - Fetch a single invoice by ID
  @Get(':id')
  async getInvoiceById(@Param('id') id: string): Promise<Invoice | null> {
    return this.invoicesService.getInvoiceById(Number(id));
  }

  // Route: /invoices/total - Fetch total amount of all invoices
  @Get('total')
  async getTotalInvoices(): Promise<number> {
    return this.invoicesService.getTotalInvoices();
  }
}
