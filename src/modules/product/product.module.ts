import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities/Product.entity';
import { ProductAdminController } from './admin/product.admin.controller';
import { ProductService } from './product.service';
import { ProductUserController } from './user/product.user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductUserController, ProductAdminController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
