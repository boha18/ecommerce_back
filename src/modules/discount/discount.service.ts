import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Discount } from 'src/entities/Discount.entity';

@Injectable()
export class DiscountService extends TypeOrmCrudService<Discount> {
  constructor(@InjectRepository(Discount) repo) {
    super(repo);
  }
}
