import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { File } from './File.entity';
import { Adress } from './Adress.entity';
import { BaseEntity } from './Base.entity';
import { Comment } from './Comment.entity';
import { Favorite } from './Favorite.entity';
import { Notation } from './Notation.entity';
import { OrderItem } from './OrderItems.entity';
import { UserPayement } from './UserPayement.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false, unique: true })
  telephone: string;

  @Column({ nullable: false })
  hashed_password: string;

  /* Relations */

  @OneToMany((type) => Adress, (adress) => adress.user)
  adress: Adress[];

  @OneToOne((type) => File, (file) => file.user)
  @JoinColumn()
  file: File;

  @OneToMany((type) => Comment, (comment) => comment.user, {
    onDelete: 'CASCADE',
  })
  comment: Comment[];

  @OneToMany((type) => Favorite, (favorite) => favorite.user, {
    onDelete: 'CASCADE',
  })
  favorite: Favorite[];

  @OneToMany((type) => Notation, (note) => note.user, { onDelete: 'CASCADE' })
  note: Notation[];

  @OneToMany((type) => OrderItem, (orderItem) => orderItem.user, {
    onDelete: 'CASCADE',
  })
  orderItem: OrderItem[];

  @OneToMany((type) => UserPayement, (userPayement) => userPayement.user, {
    onDelete: 'CASCADE',
  })
  userPayement: UserPayement[];
}
