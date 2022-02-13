import { Check, Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { OrderItem } from './OrderItems.entity';
import { Payment } from './Payment.entity';
import { User } from './User.entity';

@Entity()
export class OrderTotal extends BaseEntity {
  @Column({ nullable: false })
  total: number;

  @Column({ nullable: true })
  description: String;

  /* Relations */

  @ManyToOne((type) => User, (user) => user.favorite, { onDelete: 'CASCADE' })
  user: User;

  @OneToMany((type) => OrderItem, (orderItem) => orderItem.orderTotal)
  orderItem: OrderItem[];

  @OneToOne((type) => Payment, (payment) => payment.orderTotal)
  payment: Payment;
}
