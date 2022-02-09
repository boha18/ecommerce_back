import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Inventory } from 'src/entities/Inventory.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

const MessErrNotEmpty = 'The field cannot be empty. Please enter a value';

export class AddressDto {
  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: MessErrNotEmpty })
  latitude: number;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: MessErrNotEmpty })
  @ApiProperty()
  longitude: number;
}
