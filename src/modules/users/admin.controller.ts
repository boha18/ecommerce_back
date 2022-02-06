import { Controller, UsePipes } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from 'src/entities/User.entity';
import { DtoValidationPipe } from 'src/Utility/Pipes/DtoValidationPipe';
import { CreateOneUser } from './dto/CreateOneUser';
import { UserService } from './users.service';

@Crud({
  model: {
    type: User,
  },
  dto: {
    create: CreateOneUser,
    update: CreateOneUser,
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
      'getManyBase',
      'getOneBase',
      'createOneBase',
      'updateOneBase',
      'deleteOneBase',
    ],
    deleteOneBase: {
      returnDeleted: true,
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
@UsePipes(new DtoValidationPipe())
@Controller('admin/user')
export class AdminController implements CrudController<User> {
  constructor(public service: UserService) {}
}
