import { Check, Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { OrderItem } from './OrderItems.entity';
import { Product } from './Product.entity';

@Entity()
export class Inventory extends BaseEntity {
  @Column({ nullable: true })
  price: number;

  @Column({ nullable: true })
  size: String;

  @Column({ nullable: true })
  color: String;

  @Column({ nullable: true })
  quantity: number;

  @ManyToOne((type) => Product, (product) => product.inventory)
  product: Product;

  @OneToMany((type) => OrderItem, (orderItem) => orderItem.inventory)
  orderItem: OrderItem[];
}

