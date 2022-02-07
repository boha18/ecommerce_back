import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Exclude, Expose } from 'class-transformer';
import { Discount } from 'src/entities/Discount.entity';
import { File } from 'src/entities/File.entity';
import { OrderItem } from 'src/entities/OrderItems.entity';
import { Product } from 'src/entities/Product.entity';

@Exclude()
export class InventorySerializer {
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
  orderItem: OrderItem[];

  @Expose()
  @ApiProperty()
  discount: Discount[];

  @Expose()
  @ApiProperty()
  images: File[];
}
