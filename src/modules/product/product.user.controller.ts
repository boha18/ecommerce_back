import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Product } from 'src/entities/Product.entity';
import { ProductService } from './product.service';

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
  routes: {
    only: ['getOneBase', 'getManyBase'],
  },
  query: {
    allow: ['id', 'name', 'description'],
    join: {
      category: {
        eager: true,
        allow: ['id', 'name', 'description'],
      },
      inventory: {
        eager: true,
        allow: ['id', 'price', 'size', 'color', 'quantity'],
      },
      'inventory.images': {
        eager: true,
        allow: ['id', 'path'],
      },
    },
    alwaysPaginate: true,
  },
})
@Controller('/api/product')
export class ProductUserController implements CrudController<Product> {
  constructor(public service: ProductService) {}
}
