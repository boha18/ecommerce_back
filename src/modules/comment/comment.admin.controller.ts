import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Comment } from 'src/entities/Comment.entity';
import { CommentService } from './comment.service';

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
    allow: ['id', 'latitude', 'longitude'],
    join: {
      user: {
        eager: true,
        allow: ['id', 'firstName', 'lastName', 'email', 'telephone'],
      },
    },
    alwaysPaginate: true,
  },
})
@Controller('admin/comment')
export class CommentAdminController implements CrudController<Comment> {
  constructor(public service: CommentService) {}
}
