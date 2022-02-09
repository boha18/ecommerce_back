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
    'Favorite.userId': 'd171bf63-4434-4467-9e8a-a9860e522fcc',
  }),
  persist: (user) => ({ user: { id: 'd171bf63-4434-4467-9e8a-a9860e522fcc' } }),
})
@Controller('/user/favorite')
export class FavoriteUserController implements CrudController<Favorite> {
  constructor(public service: FavoriteService) {}
}
