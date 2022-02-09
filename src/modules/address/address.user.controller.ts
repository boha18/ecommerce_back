import { Controller } from '@nestjs/common';
import { Crud, CrudAuth, CrudController } from '@nestjsx/crud';
import { Address } from 'src/entities/Address.entity';
import { User } from 'src/entities/User.entity';
import { AddressService } from './address.service';
import { AddressDto } from './dto/AddressDto';

@Crud({
  model: {
    type: Address,
  },
  dto: {
    create: AddressDto,
    update: AddressDto,
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
      'getOneBase',
      'getManyBase',
      'createOneBase',
      'updateOneBase',
      'deleteOneBase',
    ],
  },
  query: {
    allow: ['id', 'latitude', 'longitude'],
    alwaysPaginate: true,
  },
})
@CrudAuth({
  property: 'user',
  filter: (user: User) => ({
    userId: 'd171bf63-4434-4467-9e8a-a9860e522fcc',
  }),
  persist: (user) => ({ userId: 'd171bf63-4434-4467-9e8a-a9860e522fcc' }),
})
@Controller('/api/address')
export class AddressUserController implements CrudController<Address> {
  constructor(public service: AddressService) {}
}
