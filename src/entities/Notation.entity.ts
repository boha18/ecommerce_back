import { Check, Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { Product } from './Product.entity';
import { User } from './User.entity';

@Entity()
export class Notation extends BaseEntity {
  @Column({ nullable: false })
  @Check('"note" > 0 AND "note" <= 5')
  @Column('decimal', { precision: 3, scale: 2 })
  note: number;
  /* Relations */

  @ManyToOne((type) => User, (user) => user.note)
  user: User;

  @ManyToOne((type) => Product, (product) => product.note, {
    onDelete: 'CASCADE',
  })
  product: Product;
}
