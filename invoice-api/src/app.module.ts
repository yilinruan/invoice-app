import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module'; 
import { InvoicesModule } from './invoices/invoices.module'; 
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, InvoicesModule, AuthModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
