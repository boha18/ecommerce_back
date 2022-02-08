import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/entities/Category.entity';
import { CategoryAdminController } from './category.admin.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryAdminController],
  providers: [CategoryService],
})
export class CategoryModule {}
