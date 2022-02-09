import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Discount } from 'src/entities/Discount.entity';
import { DiscountService } from './discount.service';
import { DiscountDto } from './dto/DiscountDto';

@Crud({
  model: {
    type: Discount,
  },
  dto: {
    create: DiscountDto,
    update: DiscountDto,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  routes: {
    only: [],
  },
  query: {
    allow: ['id', 'name', 'description', 'discountPercent'],
    join: {
      product: {
        eager: true,
        allow: ['id', 'name', 'description'],
      },
    },
    alwaysPaginate: true,
  },
})
// not working
@Controller('admin/discount')
export class DiscountAdminController implements CrudController<Discount> {
  constructor(public service: DiscountService) {}
}
