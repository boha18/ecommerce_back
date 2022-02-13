import { Injectable } from '@nestjs/common';
import { UserService } from '../users/users.service';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const hashed_pass = await bcrypt.hash(
      pass,
      '$2b$10$Mf4LNQ//y9kCxTAGTAyyMu',
    );
    console.log(hashed_pass);
    const user = await this.usersService.findOneUser(username, hashed_pass);
    if (user) {
      const { hashed_password, ...result } = user;
      return result;
    }
    return null;
  }
}
