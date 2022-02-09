import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { Product } from 'src/entities/Product.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

const MessErrNotEmpty = ' cannot be empty. Please enter a value';
Exclude();
export class NotationDto {
  @Expose()
  @IsNotEmpty({ groups: [CREATE, UPDATE], message: 'Note' + MessErrNotEmpty })
  @IsNumber()
  @Min(0)
  @Max(5)
  @ApiProperty()
  note: number;

  @Expose()
  @IsNotEmpty({
    groups: [CREATE, UPDATE],
    message: 'You need to select the Product',
  })
  @ApiProperty()
  product: Product;
}
