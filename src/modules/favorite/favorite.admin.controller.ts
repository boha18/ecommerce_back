import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Comment } from 'src/entities/Comment.entity';
import { Favorite } from 'src/entities/Favorite.entity';
import { FavoriteService } from './favorite.service';

@Crud({
  model: {
    type: Comment,
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
    allow: ['id'],
    join: {
      user: {
        eager: true,
        allow: ['id', 'firstName', 'lastName', 'email', 'telephone'],
      },
      product: {
        eager: true,
      },
    },
    alwaysPaginate: true,
  },
})
@Controller('admin/favorite')
export class FavoriteAdminController implements CrudController<Favorite> {
  constructor(public service: FavoriteService) {}
}
