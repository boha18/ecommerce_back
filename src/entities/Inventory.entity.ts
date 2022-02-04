import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { InventoryImage } from './InventoryImage.entity';
import { OrderItem } from './OrderItems.entity';
import { Product } from './Product.entity';

export enum Colors {
  blue = 'blue',
  red = 'red',
  white = 'white',
  black = 'black',
  green = 'green',
}

export enum Sizes {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
  XXXL = 'XXXL',
}

@Entity()
export class Inventory extends BaseEntity {
  @Column({ nullable: true })
  price: number;

  @Column({
    type: 'enum',
    enum: Sizes,
    default: Sizes.L,
  })
  size: String;

  @Column({
    type: 'enum',
    enum: Colors,
    default: Colors.black,
  })
  color: String;

  @Column({ nullable: true })
  quantity: number;

  /* Relations */

  @ManyToOne((type) => Product, (product) => product.inventory)
  product: Product;

  @OneToMany((type) => OrderItem, (orderItem) => orderItem.inventory)
  orderItem: OrderItem[];

  @OneToMany(
    (type) => InventoryImage,
    (inventoryImage) => inventoryImage.inventory,
  )
  inventoryImage: InventoryImage[];
}
