import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { OrderItem } from 'src/entities/OrderItems.entity';
import { Payment } from 'src/entities/Payment.entity';
import { PaymentService } from './payment.service';

@Crud({
  model: {
    type: OrderItem,
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
      inventory: {
        eager: true,
      },
      'inventory.product': {
        eager: true,
      },
    },
    alwaysPaginate: true,
  },
})
@Controller('admin/orderItem')
export class PaymentAdminController implements CrudController<Payment> {
  constructor(public service: PaymentService) {}
}
