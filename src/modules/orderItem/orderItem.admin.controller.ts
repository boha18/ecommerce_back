import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Comment } from 'src/entities/Comment.entity';
import { OrderItem } from 'src/entities/OrderItems.entity';
import { OrderItemService } from './orderItem.service';

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
@Controller('admin/orderItem')
export class OrderItemAdminController implements CrudController<OrderItem> {
  constructor(public service: OrderItemService) {}
}
