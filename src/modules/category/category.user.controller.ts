import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Category } from 'src/entities/Category.entity';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/CategoryDto';

@Crud({
  model: {
    type: Category,
  },
  routes: {
    only: ['getManyBase', 'getOneBase'],
  },
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
      image: {
        eager: true,
        allow: ['path', 'id'],
      },
      icon: {
        eager: true,
        allow: ['path', 'id'],
      },
    },
    alwaysPaginate: true,
  },
})
@Controller('user/category')
export class CategoryUserController implements CrudController<Category> {
  constructor(public service: CategoryService) {}
}
