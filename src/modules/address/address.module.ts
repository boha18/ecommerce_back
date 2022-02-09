import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'src/entities/Address.entity';
import { AddressAdminController } from './address.admin.controller';
import { AddressService } from './address.service';
import { AddressUserController } from './address.user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  controllers: [AddressUserController, AddressAdminController],
  providers: [AddressService],
})
export class AddressModule {}
