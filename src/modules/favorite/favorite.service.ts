import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Favorite } from 'src/entities/Favorite.entity';

@Injectable()
export class FavoriteService extends TypeOrmCrudService<Favorite> {
  constructor(@InjectRepository(Favorite) repo) {
    super(repo);
  }
}
