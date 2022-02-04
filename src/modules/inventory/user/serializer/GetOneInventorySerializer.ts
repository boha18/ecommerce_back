import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Exclude, Expose } from 'class-transformer';
import { Discount } from 'src/entities/Discount.entity';
import { InventoryImage } from 'src/entities/InventoryImage.entity';
import { Product } from 'src/entities/Product.entity';

@Exclude()
export class GetOneInventorySerializer {
  @Expose()
  @ApiProperty()
  id: String;

  @Expose()
  @ApiProperty()
  price: number;

  @Expose()
  @ApiProperty()
  size: string;

  @Expose()
  @ApiProperty()
  color: string;

  @Expose()
  @ApiProperty()
  product: Product;

  @Expose()
  @ApiProperty()
  discount: Discount[];

  @Expose()
  @ApiProperty()
  inventoryImage: InventoryImage[];
}
