import { Check, Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { Product } from './Product.entity';
import { User } from './User.entity';

@Entity()
@Check('"note" > 0 AND "note" <= 5')
export class Notation extends BaseEntity {
  @Column({ nullable: false })
  note: number;

  @Column({ nullable: false })
  noted: boolean;

  @ManyToOne((type) => User, (user) => user.note)
  user: User;

  @ManyToOne((type) => Product, (product) => product.note)
  product: Product;
}
