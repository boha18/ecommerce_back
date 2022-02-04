import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Product } from 'src/entities/Product.entity';
import { ProductService } from '../product.service';

@Crud({
  model: {
    type: Product,
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
@Controller('admin/product')
export class ProductAdminController implements CrudController<Product> {
  constructor(public service: ProductService) {}
}
