import { Check, Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { Inventory } from './Inventory.entity';
import { OrderTotal } from './OrderTotal.entity';
import { Product } from './Product.entity';
import { User } from './User.entity';

@Entity()
export class OrderItem extends BaseEntity {
  @Column({ nullable: false })
  quantity: number;

  /* Relations */
  
  @ManyToOne((type) => User, (user) => user.orderItem)
  user: User;

  @ManyToOne((type) => Inventory, (inventory) => inventory.orderItem)
  inventory: Inventory;

  @ManyToOne((type) => OrderTotal, (orderTotal) => orderTotal.orderItem)
  orderTotal: OrderTotal;
}
