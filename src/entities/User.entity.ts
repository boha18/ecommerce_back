import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  Unique,
} from 'typeorm';
import { File } from './File.entity';
import { Address } from './Address.entity';
import { BaseEntity } from './Base.entity';
import { Comment } from './Comment.entity';
import { Favorite } from './Favorite.entity';
import { Notation } from './Notation.entity';
import { OrderItem } from './OrderItems.entity';
import { UserPayment } from './UserPayment.entity';
const bcrypt = require('bcrypt');

export enum UserType {
  User = 'USER',
  Admin = 'ADMIN',
}

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

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.User,
    nullable: false,
  })
  userType: string[];

  @Column({ nullable: false })
  hashed_password: string;

  @BeforeInsert()
  async hashPassword() {
    //console.log(await bcrypt.genSalt(10));
    this.hashed_password = await bcrypt.hash(this.hashed_password, 10);
  }

  /* Relations */

  @OneToMany((type) => Address, (address) => address.user)
  address: Address[];

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

  @OneToMany((type) => UserPayment, (userPayment) => userPayment.user)
  userPayment: UserPayment[];
}
