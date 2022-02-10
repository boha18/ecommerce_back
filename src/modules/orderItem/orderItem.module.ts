import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItem } from 'src/entities/OrderItems.entity';
import { OrderItemAdminController } from './orderItem.admin.controller';
import { OrderItemService } from './orderItem.service';
import { OrderItemUserController } from './orderItem.user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItem])],
  controllers: [OrderItemUserController, OrderItemAdminController],
  providers: [OrderItemService],
})
export class OrderItemModule {}
