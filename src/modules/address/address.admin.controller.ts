import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Address } from 'src/entities/Address.entity';
import { AddressService } from './address.service';

@Crud({
  model: {
    type: Address,
  },
  dto: {},
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  query: {
    allow: ['id', 'name', 'description'],
    join: {
      category: {
        eager: true,
        allow: ['id', 'name', 'description'],
      },
      inventory: {
        eager: true,
        allow: ['id', 'price', 'size', 'color', 'quantity'],
      },
      'inventory.images': {
        eager: true,
        allow: ['id', 'path'],
      },
    },
    alwaysPaginate: true,
  },
})
@Controller('admin/address')
export class AddressAdminController implements CrudController<Address> {
  constructor(public service: AddressService) {}
}
