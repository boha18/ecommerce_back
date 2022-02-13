import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUseDto {
  @IsNotEmpty()
  @IsEmail()
  readonly username: string;

  @IsNotEmpty()
  readonly password: string;
}
