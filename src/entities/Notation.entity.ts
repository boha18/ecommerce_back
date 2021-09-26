import { Check, Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { Product } from './Product.entity';
import { User } from './User.entity';

@Entity()
@Check('"note" > 0 AND "Note <= 5')
export class Notation extends BaseEntity {
  @Column({ nullable: true })
  note: number;

  @Column({ nullable: true })
  noted: boolean;

  @ManyToOne((type) => User, (user) => user.note)
  user: User;

  @ManyToOne((type) => Product, (product) => product.note)
  product: Product;
}
