import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

const MessErrNotEmpty = ' cannot be empty. Please enter a value';

@Exclude()
export class LoginDto {
  @Expose()
  @ApiProperty()
  @IsNotEmpty({ message: 'username' + MessErrNotEmpty })
  username: string;

  @Expose()
  @IsOptional()
  @IsNotEmpty({ message: 'password' + MessErrNotEmpty })
  @ApiProperty()
  password: string;
}
