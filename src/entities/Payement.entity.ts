import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { OrderTotal } from './OrderTotal.entity';

@Entity()
export class Payement extends BaseEntity {
  @Column({ nullable: false })
  amount: number;

  @Column({ nullable: false })
  provider: String;

  @Column({ nullable: false })
  status: String;

  @OneToOne((type) => OrderTotal, (orderTotal) => orderTotal.payement)
  @JoinColumn()
  orderTotal: OrderTotal;
}
