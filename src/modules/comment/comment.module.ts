import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from 'src/entities/Comment.entity';
import { CommentAdminController } from './comment.admin.controller';
import { CommentService } from './comment.service';
import { CommentUserController } from './comment.user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  controllers: [CommentUserController, CommentAdminController],
  providers: [CommentService],
})
export class CommentModule {}
