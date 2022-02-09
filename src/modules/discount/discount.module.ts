import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Discount } from 'src/entities/Discount.entity';
import { DiscountAdminController } from './discount.admin.controller';
import { DiscountService } from './discount.service';

@Module({
  imports: [TypeOrmModule.forFeature([Discount])],
  controllers: [DiscountAdminController],
  providers: [DiscountService],
})
export class DiscountModule {}
