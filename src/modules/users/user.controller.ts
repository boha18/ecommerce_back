import { Controller, UsePipes } from '@nestjs/common';
import { Crud, CrudAuth, CrudController } from '@nestjsx/crud';
import { User } from 'src/entities/User.entity';
import { CreateOneUser } from './dto/CreateOneUser';
import { UserService } from './users.service';
import { GetOneUserSerializer } from './serializer/GetOneUserSerializer';
import { DtoValidationPipe } from 'src/Utility/Pipes/DtoValidationPipe';

@Crud({
  model: {
    type: User,
  },
  dto: {
    update: CreateOneUser,
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
@UsePipes(new DtoValidationPipe())
@Controller('me')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
