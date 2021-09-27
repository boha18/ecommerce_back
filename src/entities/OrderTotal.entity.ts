import { Check, Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { OrderItem } from './OrderItems.entity';
import { Payement } from './Payement.entity';

@Entity()
export class OrderTotal extends BaseEntity {
  @Column({ nullable: false })
  total: number;

  @Column({ nullable: true })
  description: String;

  @OneToMany((type) => OrderItem, (orderItem) => orderItem.orderTotal)
  orderItem: OrderItem[];

  @OneToOne((type) => Payement, (payement) => payement.orderTotal)
  payement: Payement;
}
