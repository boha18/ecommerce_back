import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { Product } from './Product.entity';
import { User } from './User.entity';

@Entity()
export class Discount extends BaseEntity {
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  discountPercent: number;

  @ManyToOne((type) => User, (user) => user.comment)
  user: User;

  @ManyToOne((type) => Product, (product) => product.discount)
  product: Product;
}
