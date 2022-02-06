import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

const { CREATE, UPDATE } = CrudValidationGroups;

const MessErrNotEmpty = ' cannot be empty. Please enter a value';
@Exclude()
export class CreateOneUser {
  @Expose()
  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: 'firstName' + MessErrNotEmpty })
  firstName: string;

  @Expose()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: 'lastName' + MessErrNotEmpty })
  @ApiProperty()
  lastName: string;

  @Expose()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: 'email' + MessErrNotEmpty })
  @ApiProperty()
  @IsEmail()
  email: string;

  @Expose()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: 'telephone' + MessErrNotEmpty })
  @ApiProperty()
  telephone: string;

  @Expose()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({
    groups: [CREATE],
    message: 'hashed_password' + MessErrNotEmpty,
  })
  @ApiProperty()
  hashed_password: string;
}
