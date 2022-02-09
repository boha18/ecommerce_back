import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { User } from './User.entity';

@Entity()
export class Address extends BaseEntity {
  @Column({ nullable: false })
  latitude: number;

  @Column({ nullable: false })
  longitude: number;

  /* Relations */

  @ManyToOne((type) => User, (user) => user.address)
  user: User;
}
