import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from 'src/entities/User.entity';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo);
  }

  async findOneUser(hashed_password: string, email: string): Promise<any> {
    let user = await this.repo.findOne({
      where: { email: email, hashed_password: hashed_password },
    });
    if (user) return true;
    return false;
  }
}
