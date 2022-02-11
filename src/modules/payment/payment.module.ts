import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from 'src/entities/Payment.entity';
import { PaymentAdminController } from './payment.admin.controller';
import { PaymentService } from './payment.service';
import { PaymentUserController } from './payment.user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Payment])],
  controllers: [PaymentAdminController, PaymentUserController],
  providers: [PaymentService],
})
export class PaymentModule {}
