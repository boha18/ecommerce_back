import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity as Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export abstract class BaseEntity extends Entity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  public created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updated_at: Date;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'boolean', default: false })
  isArchived: boolean;
}
