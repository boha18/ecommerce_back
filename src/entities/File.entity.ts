import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { Category } from './Category.entity';
import { Inventory } from './Inventory.entity';
import { User } from './User.entity';

@Entity()
export class File extends BaseEntity {
  @Column({ nullable: false })
  path: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  alt: string;

  @Column({ nullable: true })
  mime_type: string;

  /* Relations */

  @OneToOne((type) => User, (user) => user.file)
  user: User;

  @OneToOne((type) => Category, (product) => product.image)
  productImage: Category;

  @OneToOne((type) => Category, (product) => product.icon)
  productIcon: Category;

  @ManyToOne((type) => Inventory, (inventory) => inventory.images)
  inventory: Inventory;
}
