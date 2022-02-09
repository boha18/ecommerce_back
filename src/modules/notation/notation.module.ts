import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notation } from 'src/entities/Notation.entity';
import { NotationAdminController } from './notation.admin.controller';
import { NotationService } from './notation.service';
import { NotationUserController } from './notation.user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Notation])],
  controllers: [NotationAdminController, NotationUserController],
  providers: [NotationService],
})
export class NotationModule {}
