import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { File } from 'src/entities/File.entity';
import { UserType } from 'src/Utility/Groups/UserType';

const { CREATE, UPDATE } = CrudValidationGroups;
const { ADMIN, USER } = UserType;

const MessErrNotEmpty = ' cannot be empty. Please enter a value';
console.log(process.env.LOVE);

@Exclude()
export class CreateOneUser {
  @Expose({ groups: [ADMIN, USER] })
  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: 'firstName' + MessErrNotEmpty })
  firstName: string;

  @Expose({ groups: [ADMIN, USER] })
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: 'lastName' + MessErrNotEmpty })
  @ApiProperty()
  lastName: string;

  @Expose({ groups: [ADMIN, USER] })
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: 'email' + MessErrNotEmpty })
  @ApiProperty()
  @IsEmail()
  email: string;

  @Expose({ groups: [ADMIN, USER] })
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: 'telephone' + MessErrNotEmpty })
  @ApiProperty()
  telephone: string;

  @Expose({ groups: [ADMIN, USER] })
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({
    groups: [CREATE],
    message: 'hashed_password' + MessErrNotEmpty,
  })
  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  hashed_password: string;

  @Expose({ groups: [ADMIN, USER] })
  @ApiProperty()
  @IsOptional({ groups: [UPDATE, USER] })
  file: File;

  @Expose({ groups: [ADMIN] })
  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  isActive: boolean;

  @Expose({ groups: [ADMIN] })
  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  isArchived: boolean;
}
