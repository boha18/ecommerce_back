import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { User } from './User.entity';

@Entity()
export class Adress extends BaseEntity {
  @Column({ nullable: false })
  latitude: number;

  @Column({ nullable: false })
  longitude: number;

  @ManyToOne((type) => User, (user) => user.adress)
  user: User;
}
