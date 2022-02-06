import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from 'src/entities/User.entity';
import { UserType } from 'src/Utility/Groups/UserType';
import { CreateOneUser } from './dto/CreateOneUser';
import { UserService } from './users.service';

const { ADMIN } = UserType;

@Crud({
  model: {
    type: User,
  },
  dto: {
    create: CreateOneUser,
    update: CreateOneUser,
  },
  serialize: {
    update: User,
    create: User,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  validation: {
    transformOptions: { groups: [ADMIN] },
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
    alwaysPaginate: true,
  },
})
//@UsePipes(new DtoValidationPipe())
@Controller('admin/user')
export class AdminController implements CrudController<User> {
  constructor(public service: UserService) {}
}
