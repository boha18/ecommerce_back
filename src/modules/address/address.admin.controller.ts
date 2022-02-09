import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Address } from 'src/entities/Address.entity';
import { AddressService } from './address.service';

@Crud({
  model: {
    type: Address,
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
    allow: ['id', 'latitude', 'longitude'],
    join: {
      user: {
        eager: true,
        allow: ['id', 'firstName', 'lastName', 'email', 'telephone'],
      },
    },
    alwaysPaginate: true,
  },
})
@Controller('admin/address')
export class AddressAdminController implements CrudController<Address> {
  constructor(public service: AddressService) {}
}
