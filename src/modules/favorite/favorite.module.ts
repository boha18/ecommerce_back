import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favorite } from 'src/entities/Favorite.entity';
import { FavoriteAdminController } from './favorite.admin.controller';
import { FavoriteService } from './favorite.service';
import { FavoriteUserController } from './favorite.user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Favorite])],
  controllers: [FavoriteUserController, FavoriteAdminController],
  providers: [FavoriteService],
})
export class FavoriteModule {}
