import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @IsEmail()
  readonly username: string;

  @IsNotEmpty()
  readonly password: string;
}
