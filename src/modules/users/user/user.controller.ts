import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from 'src/entities/User.entity';
import { UserService } from '../user.service';
import { CreateOneUser } from './dto/CreateOneUser';

@Crud({
  model: {
    type: CreateOneUser,
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
      'getManyBase',
      'createOneBase',
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
  },
})
@Controller('api/user')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
