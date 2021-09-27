import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { Category } from './Category.entity';
import { InventoryImage } from './InventoryImage.entity';
import { User } from './User.entity';

@Entity()
export class File extends BaseEntity {
  @Column({ nullable: true })
  path: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  alt: string;

  @Column({ nullable: true })
  mime_type: string;

  @OneToOne((type) => User, (user) => user.file)
  user: User;

  @OneToOne((type) => Category, (product) => product.image)
  productImage: Category;

  @OneToOne((type) => Category, (product) => product.icon)
  productIcon: Category;

  @OneToMany(
    (type) => InventoryImage,
    (inventoryImage) => inventoryImage.file,
  )
  inventoryImage: InventoryImage[];
}
