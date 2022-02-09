import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Notation } from 'src/entities/Notation.entity';
import { NotationService } from './notation.service';

@Crud({
  model: {
    type: Notation,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  routes: {
    only: ['getOneBase', 'getManyBase'],
  },
  query: {
    join: {
      user: {
        eager: true,
      },
      product: {
        eager: true,
      },
    },
    alwaysPaginate: true,
  },
})
@Controller('admin/notation')
export class NotationAdminController implements CrudController<Notation> {
  constructor(public service: NotationService) {}
}
