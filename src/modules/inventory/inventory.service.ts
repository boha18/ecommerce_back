import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Inventory } from 'src/entities/Inventory.entity';

@Injectable()
export class InventoryService extends TypeOrmCrudService<Inventory> {
  constructor(@InjectRepository(Inventory) repo) {
    super(repo);
  }
}
