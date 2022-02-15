import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  Get,
} from '@nestjs/common';
import { UserType } from 'src/entities/User.entity';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/RegisterDto';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { Roles } from './roles/roles.decorator';
import { RolesGuard } from './roles/roles.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req): Promise<any> {
    return await this.authService.loginUser(req.user);
  }

  @Post('auth/register')
  async register(@Body() registerDto: RegisterDto) {
    return await this.authService.RegisterUser(registerDto);
  }

  @Get('auth/me')
  @Roles(UserType.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  getProfile(@Request() req) {
    return req.user;
  }
}
