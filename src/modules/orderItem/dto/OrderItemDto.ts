import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty, IsOptional } from 'class-validator';

const { CREATE, UPDATE } = CrudValidationGroups;

const MessErrNotEmpty = 'The field cannot be empty. Please enter a value';

export class OrderItemDto {
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: MessErrNotEmpty })
  @ApiProperty()
  quantity: number;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: MessErrNotEmpty })
  @ApiProperty()
  inventory: number;
}
