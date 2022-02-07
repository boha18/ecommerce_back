import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Inventory } from 'src/entities/Inventory.entity';
import { InventoryService } from './inventory.service';
import { InventorySerializer } from './serializer/InventorySerializer';

@Crud({
  model: {
    type: Inventory,
  },
  serialize: {
    get: InventorySerializer,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  routes: {
    only: ['getOneBase', 'getManyBase'],
  },
  query: {
    join: {
      product: {
        eager: true,
      },
      images: {
        eager: true,
      },
    },
    alwaysPaginate: true,
  },
})
@Controller('/user/inventory')
export class InventoryUserController implements CrudController<Inventory> {
  constructor(public service: InventoryService) {}
}
