import { Controller } from '@nestjs/common';
import { Crud, CrudAuth, CrudController } from '@nestjsx/crud';
import { User } from 'src/entities/User.entity';
import { NotationService } from './notation.service';
import { Notation } from 'src/entities/Notation.entity';
import { NotationDto } from './dto/NotationDto';

@Crud({
  model: {
    type: Notation,
  },
  dto: {
    create: NotationDto,
    update: NotationDto,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  routes: {
    only: ['getOneBase', 'getManyBase', 'createOneBase', 'deleteOneBase'],
  },
  query: {
    allow: ['id', 'note'],
    alwaysPaginate: true,
    join: {
      product: {
        eager: true,
        allow: ['id', 'name', 'description'],
      },
    },
    sort: [
      {
        field: 'created_at',
        order: 'DESC',
      },
    ],
  },
})
@CrudAuth({
  property: 'user',
  filter: (user: User) => ({
    'Notation.userId': 'd171bf63-4434-4467-9e8a-a9860e522fcc',
  }),
  persist: (user) => ({ user: { id: 'd171bf63-4434-4467-9e8a-a9860e522fcc' } }),
})
@Controller('/user/notation')
export class NotationUserController implements CrudController<Notation> {
  constructor(public service: NotationService) {}
}
