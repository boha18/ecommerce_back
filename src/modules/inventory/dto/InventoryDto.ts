import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { UserType } from 'src/Utility/Groups/UserType';

const { CREATE, UPDATE } = CrudValidationGroups;

const MessErrNotEmpty = ' cannot be empty. Please enter a value';

@Exclude()
export class InventoryDto {
  @Expose()
  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: 'price' + MessErrNotEmpty })
  price: number;

  @Expose()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: 'size' + MessErrNotEmpty })
  @ApiProperty()
  size: string;

  @Expose()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: 'color' + MessErrNotEmpty })
  @ApiProperty()
  color: string;

  @Expose()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: 'quantity' + MessErrNotEmpty })
  @ApiProperty()
  quantity: number;

  @Expose()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: 'color' + MessErrNotEmpty })
  @ApiProperty()
  images: File[];
}
