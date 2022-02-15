import { Controller } from '@nestjs/common';
import { Crud, CrudAuth, CrudController } from '@nestjsx/crud';
import { User } from 'src/entities/User.entity';
import { FavoriteService } from './favorite.service';
import { Favorite } from 'src/entities/Favorite.entity';
import { FavoriteDto } from './dto/FavoriteDto';

@Crud({
  model: {
    type: Favorite,
  },
  dto: {
    create: FavoriteDto,
    update: FavoriteDto,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  routes: {
    only: ['getOneBase', 'getManyBase', 'createOneBase', 'deleteOneBase'],
  },
  query: {
    allow: ['id'],
    alwaysPaginate: true,
    join: {
      product: {
        eager: true,
        allow: ['id', 'name', 'description'],
      },
    },
    sort: [
      {
        field: 'created_at',
        order: 'DESC',
      },
    ],
  },
})
@CrudAuth({
  property: 'user',
  filter: (user: User) => ({
    'Favorite.userId': user.id,
  }),
  persist: (user) => ({ user: { id: user.id } }),
})
@Controller('/user/favorite')
export class FavoriteUserController implements CrudController<Favorite> {
  constructor(public service: FavoriteService) {}
}
