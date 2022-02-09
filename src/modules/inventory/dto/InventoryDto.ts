import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { Product } from 'src/entities/Product.entity';
import { FileIdDto } from 'src/modules/files/dto/FileDto';

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
  @ValidateNested()
  images: FileIdDto[];

  @Expose()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE], message: 'product' + MessErrNotEmpty })
  @ApiProperty()
  product: Product;
}
