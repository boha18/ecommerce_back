import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  RelationId,
} from 'typeorm';
import { File } from './File.entity';
import { Adress } from './Adress.entity';
import { BaseEntity } from './Base.entity';
import { Comment } from './Comment.entity';
import { Favorite } from './Favorite.entity';
import { Notation } from './Notation.entity';
import { OrderItem } from './OrderItems.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true, unique: true })
  email: string;

  @Column({ nullable: true, unique: true })
  telephone: string;

  @Column({ nullable: true })
  hashed_password: string;

  @OneToMany((type) => Adress, (adress) => adress.user)
  adress: Adress[];

  @OneToOne((type) => File, (file) => file.user)
  @JoinColumn()
  file: File;

  @OneToMany((type) => Comment, (comment) => comment.user)
  comment: Comment[];

  @OneToMany((type) => Favorite, (favorite) => favorite.user)
  favorite: Favorite[];

  @OneToMany((type) => Notation, (note) => note.user)
  note: Notation[];

  @OneToMany((type) => OrderItem, (orderItem) => orderItem.user)
  orderItem: OrderItem[];
}
