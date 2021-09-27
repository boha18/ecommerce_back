import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { File } from './File.entity';
import { Inventory } from './Inventory.entity';

@Entity()
export class InventoryImage extends BaseEntity {
  @ManyToOne((type) => Inventory, (inventory) => inventory.inventoryImage)
  inventory: Inventory;

  @ManyToOne((type) => File, (file) => file.inventoryImage)
  file : File;
}
