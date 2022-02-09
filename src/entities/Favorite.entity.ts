import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { Product } from './Product.entity';
import { User } from './User.entity';

@Entity()
export class Favorite extends BaseEntity {
  /* Relations */
  @ManyToOne((type) => User, (user) => user.favorite, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne((type) => Product, (product) => product.favorite, {
    onDelete: 'CASCADE',
  })
  product: Product;
}
