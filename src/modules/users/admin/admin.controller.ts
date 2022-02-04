import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from 'src/entities/User.entity';
import { UserService } from '../user.service';

@Crud({
  model: {
    type: User,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  routes: {
    only: ['getManyBase', 'getOneBase'],
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
@Controller('admin/user')
export class AdminController implements CrudController<User> {
  constructor(public service: UserService) {}
}
