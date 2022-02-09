import { Controller } from '@nestjs/common';
import { Crud, CrudAuth, CrudController } from '@nestjsx/crud';
import { Comment } from 'src/entities/Comment.entity';
import { User } from 'src/entities/User.entity';
import { CommentService } from './comment.service';
import { CommentDto } from './dto/CommentDto';

@Crud({
  model: {
    type: Comment,
  },
  dto: {
    create: CommentDto,
    update: CommentDto,
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
      'getOneBase',
      'getManyBase',
      'createOneBase',
      'updateOneBase',
      'deleteOneBase',
    ],
  },
  query: {
    allow: ['id', 'text', 'written', 'created_at'],
    alwaysPaginate: true,
    join: {
      product: {
        eager: true,
        allow: ['id', 'name', 'description'],
      },
    },
    sort: [
      {
        field: 'created_at',
        order: 'DESC',
      },
    ],
  },
})
@CrudAuth({
  property: 'user',
  filter: (user: User) => ({
    'Comment.userId': 'd171bf63-4434-4467-9e8a-a9860e522fcc',
  }),
  persist: (user) => ({ user: { id: 'd171bf63-4434-4467-9e8a-a9860e522fcc' } }),
})
@Controller('/user/comment')
export class CommentUserController implements CrudController<Comment> {
  constructor(public service: CommentService) {}
}
