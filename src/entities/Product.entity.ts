import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { Category } from './Category.entity';
import { Comment } from './Comment.entity';
import { Discount } from './Discount.entity';
import { Favorite } from './Favorite.entity';
import { Inventory } from './Inventory.entity';
import { Notation } from './Notation.entity';

@Entity()
export class Product extends BaseEntity {
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne((type) => Category, (category) => category.product)
  category: Category;

  @OneToMany((type) => Comment, (comment) => comment.product)
  comment: Comment[];

  @OneToMany((type) => Discount, (discount) => discount.product)
  discount: Discount[];

  @OneToMany((type) => Favorite, (favorite) => favorite.product)
  favorite: Favorite[];

  @OneToMany((type) => Notation, (note) => note.product)
  note: Notation[];

  @OneToMany((type) => Inventory, (inventory) => inventory.product)
  inventory: Inventory[];
}
