import { Controller } from '@nestjs/common';
import { Crud, CrudAuth, CrudController } from '@nestjsx/crud';
import { User } from 'src/entities/User.entity';
import { UserService } from '../user.service';
import { CreateOneUser } from './dto/CreateOneUser';
import { GetOneUserSerializer } from './serializer/GetOneUserSerializer';

@Crud({
  model: {
    type: User,
  },
  serialize: {
    get: GetOneUserSerializer,
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
    id: user.id,
  }),
})
@Controller('/me')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
