import { Controller } from '@nestjs/common';
import { Crud, CrudAuth, CrudController } from '@nestjsx/crud';
import { User } from 'src/entities/User.entity';
import { OrderItemDto } from './dto/OrderItemDto';
import { OrderItem } from 'src/entities/OrderItems.entity';
import { OrderItemService } from './orderItem.service';

@Crud({
  model: {
    type: OrderItem,
  },
  dto: {
    create: OrderItemDto,
    update: OrderItemDto,
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
@Controller('/user/orderItem')
export class OrderItemUserController implements CrudController<OrderItem> {
  constructor(public service: OrderItemService) {}
}
