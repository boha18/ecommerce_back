import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Inventory } from 'src/entities/Inventory.entity';
import { InventoryService } from '../inventory.service';
import { CreateOneInventory } from './dto/CreateOneInventory';
import { GetOneInventorySerializer } from './serializer/GetOneInventorySerializer';

@Crud({
  model: {
    type: CreateOneInventory,
  },
  serialize: {
    get: GetOneInventorySerializer,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  routes: {
    exclude: [
      //'getManyBase',
      //'createOneBase',
      'createManyBase',
      'replaceOneBase',
      'deleteOneBase',
      'recoverOneBase',
    ],
  },
  query: {
    join: {
      file: {
        eager: true,
      },
    },
    alwaysPaginate: true,
  },
})
@Controller('/api/inventory')
export class InventoryUserController implements CrudController<Inventory> {
  constructor(public service: InventoryService) {}
}
