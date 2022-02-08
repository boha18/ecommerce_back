import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Inventory } from 'src/entities/Inventory.entity';
import { InventoryDto } from './dto/InventoryDto';
import { InventoryService } from './inventory.service';
import { InventorySerializer } from './serializer/InventorySerializer';

@Crud({
  model: {
    type: Inventory,
  },
  dto: {
    create: InventoryDto,
    update: InventoryDto,
  },
  serialize: {
    get: InventorySerializer,
    create: InventorySerializer,
    update: InventorySerializer,
    delete: InventorySerializer,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  routes: {
    only: [
      'createOneBase',
      'deleteOneBase',
      'getManyBase',
      'getOneBase',
      'updateOneBase',
    ],
  },
  query: {
    join: {
      images: {
        eager: true,
        allow: ['path', 'id'],
      },
    },
    alwaysPaginate: true,
  },
})
@Controller('admin/inventory')
export class InventoryAdminController implements CrudController<Inventory> {
  constructor(public service: InventoryService) {}
}
