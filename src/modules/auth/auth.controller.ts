import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginUseDto } from './dto/LoginUseDto';

@Controller()
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body() loginUserDto: LoginUseDto) {
    return true;
  }
}
