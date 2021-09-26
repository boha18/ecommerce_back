import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { Product } from './Product.entity';
import { User } from './User.entity';

@Entity()
export class Favorite extends BaseEntity {
  @ManyToOne((type) => User, (user) => user.favorite)
  user: User;

  @ManyToOne((type) => Product, (product) => product.favorite)
  product: Product;
}
