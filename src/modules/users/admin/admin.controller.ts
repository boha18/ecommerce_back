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
})
@Controller('admin/user')
export class AdminController implements CrudController<User> {
  constructor(public service: UserService) {}
}
