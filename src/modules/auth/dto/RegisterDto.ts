import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

const MessErrNotEmpty = ' cannot be empty. Please enter a value';

@Exclude()
export class RegisterDto {
  @Expose()
  @ApiProperty()
  @IsNotEmpty({ message: 'firstName' + MessErrNotEmpty })
  firstName: string;

  @Expose()
  @IsOptional()
  @IsNotEmpty({ message: 'lastName' + MessErrNotEmpty })
  @ApiProperty()
  lastName: string;

  @Expose()
  @IsNotEmpty({ message: 'email' + MessErrNotEmpty })
  @ApiProperty()
  @IsEmail()
  email: string;

  @Expose()
  @IsNotEmpty({ message: 'telephone' + MessErrNotEmpty })
  @ApiProperty()
  telephone: string;

  @Expose()
  @IsNotEmpty({
    message: 'password' + MessErrNotEmpty,
  })
  @ApiProperty()
  password: string;
}
