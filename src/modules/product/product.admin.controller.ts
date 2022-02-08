import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Product } from 'src/entities/Product.entity';
import { ProductDto } from './dto/CreateOneProduct';
import { ProductService } from './product.service';

@Crud({
  model: {
    type: Product,
  },
  dto: {
    create: ProductDto,
    update: ProductDto,
  },
  routes: {},
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  query: {
    allow: ['id', 'name', 'description'],
    join: {
      category: {
        eager: true,
        allow: ['id', 'name', 'description'],
      },
    },
    alwaysPaginate: true,
  },
})
@Controller('admin/product')
export class ProductAdminController implements CrudController<Product> {
  constructor(public service: ProductService) {}
}
