import { Check, Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { OrderItem } from './OrderItems.entity';
import { Product } from './Product.entity';
import { User } from './User.entity';

@Entity()
export class OrderTotal extends BaseEntity {
  @Column({ nullable: true })
  total: number;

  @Column({ nullable: true })
  description: String;

  @OneToMany((type) => OrderItem, (orderItem) => orderItem.orderTotal)
  orderItem: OrderItem[];
}
