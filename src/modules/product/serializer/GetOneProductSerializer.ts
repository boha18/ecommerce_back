import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Exclude, Expose } from 'class-transformer';
import { Category } from 'src/entities/Category.entity';
import { Discount } from 'src/entities/Discount.entity';
import { Inventory } from 'src/entities/Inventory.entity';

@Exclude()
export class GetOneProductSerializer {
  @Expose()
  @ApiProperty()
  id: String;

  @Expose()
  @ApiProperty()
  name: string;

  @Expose()
  @ApiProperty()
  description: string;

  @Expose()
  @ApiProperty()
  category: Category;

  @Expose()
  @ApiProperty()
  comment: Comment[];

  @Expose()
  @ApiProperty()
  discount: Discount[];

  @Expose()
  @ApiProperty()
  inventory: Inventory[];
}
