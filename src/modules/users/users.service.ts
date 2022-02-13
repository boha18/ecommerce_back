import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from 'src/entities/User.entity';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo);
  }

  async findOneUser(email: string, hashed_password: string): Promise<User> {
    let user = await this.repo.findOne({
      where: { email: email, hashed_password: hashed_password },
    });
    return user;
  }
}
