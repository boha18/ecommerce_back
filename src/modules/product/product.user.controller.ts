import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Product } from 'src/entities/Product.entity';
import { CreateOneProduct } from './dto/CreateOneProduct';
import { ProductService } from './product.service';
import { GetOneProductSerializer } from './serializer/GetOneProductSerializer';

@Crud({
  model: {
    type: CreateOneProduct,
  },
  serialize: {
    get: GetOneProductSerializer,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  routes: {
    only: [
      'createManyBase',
      'replaceOneBase',
      'deleteOneBase',
      'recoverOneBase',
    ],
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
@Controller('/api/product')
export class ProductUserController implements CrudController<Product> {
  constructor(public service: ProductService) {}
}
