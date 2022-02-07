import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from 'src/entities/Inventory.entity';
import { InventoryAdminController } from './inventory.admin.controller';
import { InventoryService } from './inventory.service';
import { InventoryUserController } from './Inventory.user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Inventory])],
  controllers: [InventoryUserController, InventoryAdminController],
  providers: [InventoryService],
  exports: [InventoryService],
})
export class InventoryModule {}
