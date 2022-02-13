import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { OrderTotal } from './OrderTotal.entity';
import { Product } from './Product.entity';

@Entity()
export class Payment extends BaseEntity {
  @Column({ nullable: false })
  amount: number;

  @Column({ nullable: true })
  provider: String;

  @Column({ nullable: true })
  status: String;

  /* Relations */

  @OneToOne((type) => OrderTotal, (orderTotal) => orderTotal.payment)
  @JoinColumn()
  orderTotal: OrderTotal;
}
