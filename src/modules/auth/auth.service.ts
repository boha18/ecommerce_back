import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/User.entity';
import { UserService } from '../users/users.service';
import { RegisterDto } from './dto/RegisterDto';
import { JwtService } from '@nestjs/jwt';

const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

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

  async loginUser(user: User) {
    const payload = {
      username: user.email,
      sub: user.id,
      userType: user.userType,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async RegisterUser(registerDto: RegisterDto): Promise<any> {
    const user = new User();
    user.firstName = registerDto.firstName;
    user.email = registerDto.email;
    user.lastName = registerDto.lastName;
    user.telephone = registerDto.telephone;
    user.hashed_password = registerDto.password;
    await User.save(user);
    const { password, ...result } = registerDto;
    return result;
  }
}
