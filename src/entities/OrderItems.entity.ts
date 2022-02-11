import { BeforeInsert, Check, Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { Inventory } from './Inventory.entity';
import { OrderTotal } from './OrderTotal.entity';
import { User } from './User.entity';

@Entity()
export class OrderItem extends BaseEntity {
  @Column({ nullable: false })
  quantity: number;

  /* Relations */

  @ManyToOne((type) => User, (user) => user.orderItem, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne((type) => Inventory, (inventory) => inventory.orderItem, {
    nullable: false,
  })
  inventory: Inventory;

  @ManyToOne((type) => OrderTotal, (orderTotal) => orderTotal.orderItem)
  orderTotal: OrderTotal;
}
