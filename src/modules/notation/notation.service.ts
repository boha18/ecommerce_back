import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Notation } from 'src/entities/Notation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotationService extends TypeOrmCrudService<Notation> {
  constructor(
    @InjectRepository(Notation) private NoteRepository: Repository<Notation>,
  ) {
    super(NoteRepository);
  }
}
