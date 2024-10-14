import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { Invoice } from '@prisma/client'; 

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async getAllInvoices(): Promise<Invoice[]> {
    const invoices = await this.prisma.invoice.findMany();
    console.log("Invoices fetched:", invoices);
    return invoices;
  }
  

  // Fetch a single invoice by ID
  async getInvoiceById(id: number): Promise<Invoice | null> {
    return this.prisma.invoice.findUnique({
      where: { id },
    });
  }

  // Aggregate total amount of all invoices by due date
  async getTotalInvoices(): Promise<number> {
    const result = await this.prisma.invoice.aggregate({
      _sum: { amount: true },
    });

    // Return the total amount or 0 if no invoices exist
    return result._sum.amount || 0; 
  }
  
}
