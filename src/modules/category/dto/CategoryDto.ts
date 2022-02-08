import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { File } from 'src/entities/File.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

const MessErrNotEmpty = 'The field cannot be empty. Please enter a value';

export class CategoryDto {
  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: MessErrNotEmpty })
  name: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: MessErrNotEmpty })
  @ApiProperty()
  description: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: MessErrNotEmpty })
  @ApiProperty()
  image: File;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: MessErrNotEmpty })
  @ApiProperty()
  icon: File;
}
