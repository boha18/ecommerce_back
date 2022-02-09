import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Notation } from 'src/entities/Notation.entity';

@Injectable()
export class NotationService extends TypeOrmCrudService<Notation> {
  constructor(@InjectRepository(Notation) repo) {
    super(repo);
  }
}
