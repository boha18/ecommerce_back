import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { Product } from './Product.entity';
import { User } from './User.entity';

@Entity()
export class Comment extends BaseEntity {
  @Column({ nullable: true })
  text: string;

  @Column({ nullable: true })
  written: boolean;

  @ManyToOne((type) => User, (user) => user.comment)
  user: User;

  @ManyToOne((type) => Product, (product) => product.comment)
  product: Product;
}
