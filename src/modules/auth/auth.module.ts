import { Module } from '@nestjs/common';
import { UserModule } from '..';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [UserModule],
  providers: [AuthService],
})
export class AuthModule {}
