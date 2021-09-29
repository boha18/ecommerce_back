import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { User } from './User.entity';

@Entity()
export class UserPayement extends BaseEntity {
  @Column({ nullable: false })
  cartNumber: number;

  @Column({ nullable: false })
  expiry: Date;

  @Column({ nullable: false })
  cvv: number;

  @Column({ nullable: false })
  payementType: String;

  /* Relations */

  @ManyToOne((type) => User, (user) => user.userPayement)
  user: User;
}
