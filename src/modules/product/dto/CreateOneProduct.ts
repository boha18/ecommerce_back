import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { Category } from 'src/entities/Category.entity';
import { Inventory } from 'src/entities/Inventory.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

const MessErrNotEmpty = 'The field cannot be empty. Please enter a value';

export class CreateOneProduct {
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
  category: Category;

  @IsOptional()
  @ApiProperty()
  inventory: Inventory[];
}
