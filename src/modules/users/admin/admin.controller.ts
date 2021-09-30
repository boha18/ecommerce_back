import { Body, Controller } from '@nestjs/common';
import {
  Crud,
  CrudController,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
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
