import { Controller } from '@nestjs/common';
import { Crud, CrudAuth, CrudController } from '@nestjsx/crud';
import { User } from 'src/entities/User.entity';
import { UserService } from '../user.service';
import { CreateOneUser } from '../commun/dto/CreateOneUser';
import { GetOneUserSerializer } from './serializer/GetOneUserSerializer';

@Crud({
  model: {
    type: CreateOneUser,
  },
  serialize: {
    get: GetOneUserSerializer,
    update: GetOneUserSerializer,
  },
  params: {
    id: {
      primary: true,
      disabled: true,
    },
  },
  routes: {
    only: ['getOneBase', 'updateOneBase'],
  },
  query: {
    join: {
      file: {
        eager: true,
      },
      adress: {
        eager: true,
      },
      comment: {
        eager: true,
      },
      userPayement: {
        eager: true,
      },
    },
    filter: {
      isActive: {
        $ne: false,
      },
    },
    alwaysPaginate: true,
  },
})
@CrudAuth({
  property: 'user',
  filter: (user: User) => ({
    id: 'd171bf63-4434-4467-9e8a-a9860e522fcc',
  }),
})
@Controller('/me')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
