import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { OrderItem } from 'src/entities/OrderItems.entity';
import { Payment } from 'src/entities/Payment.entity';

@Injectable()
export class PaymentService extends TypeOrmCrudService<Payment> {
  constructor(@InjectRepository(Payment) repo) {
    super(repo);
  }
}
