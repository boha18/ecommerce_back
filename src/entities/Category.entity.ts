import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { File } from './File.entity';
import { Product } from './Product.entity';

@Entity()
export class Category extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @OneToOne((type) => File, (file) => file.user)
  @JoinColumn()
  image: File;

  @OneToOne((type) => File, (file) => file.user)
  @JoinColumn()
  icon: File;

  @OneToMany((type) => Product, (product) => product.category)
  product: Product[];
}
