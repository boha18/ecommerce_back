import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Category } from 'src/entities/Category.entity';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/CategoryDto';

@Crud({
  model: {
    type: Category,
  },
  dto: {
    create: CategoryDto,
    update: CategoryDto,
  },
  routes: {
    only: [
      'createOneBase',
      'getManyBase',
      'updateOneBase',
      'getOneBase',
      'deleteOneBase',
    ],
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
@Controller('admin/category')
export class CategoryAdminController implements CrudController<Category> {
  constructor(public service: CategoryService) {}
}
