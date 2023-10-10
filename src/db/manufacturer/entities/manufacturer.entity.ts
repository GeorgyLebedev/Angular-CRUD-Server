import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Good } from '../../good/entities/good.entity';

@Entity()
export class Manufacturer {
  @PrimaryGeneratedColumn()
  code: number;

  @OneToMany(() => Good, (good: Good) => good.manufacturer, { cascade: true })
  good: Good;

  @Column({ type:"varchar", unique: true })
  naming!: string;

  @Column({ type: 'varchar' })
  city!: string;

  @Column({ length: 13,  type: 'char', unique: true })
  OGRN!: string;

  @Column({ length: 10, type: 'char', unique: true })
  INN!: string;

  @Column({ length: 9, type: 'char', unique: true })
  KPP!: string;
}
