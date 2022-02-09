import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { Product } from './Product.entity';
import { User } from './User.entity';

@Entity()
export class Comment extends BaseEntity {
  @Column({ nullable: false })
  text: string;

  @Column({ nullable: false })
  written: boolean;

  /* Relations */

  @ManyToOne((type) => User, (user) => user.comment, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne((type) => Product, (product) => product.comment, {
    onDelete: 'CASCADE',
  })
  product: Product;
}
