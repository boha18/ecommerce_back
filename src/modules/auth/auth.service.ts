import { Injectable } from '@nestjs/common';
import { UserService } from '../users/users.service';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneUser(username);
    if (user) {
      const authorized = await bcrypt.compare(pass, user.hashed_password);
      if (authorized) {
        const { hashed_password, ...result } = user;
        return result;
      }
    }
    return null;
  }
}
