import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Inventory } from 'src/entities/Inventory.entity';
import { InventoryService } from '../inventory.service';

@Crud({
  model: {
    type: Inventory,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
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
@Controller('admin/Inventory')
export class InventoryAdminController implements CrudController<Inventory> {
  constructor(public service: InventoryService) {}
}
