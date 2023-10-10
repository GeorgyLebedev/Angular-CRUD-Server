import {
  Check,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Good } from '../../good/entities/good.entity';
import { Sale } from '../../sale/entities/sale.entity';
@Check('quantity>0')
@Entity()
export class SaleGood {
  @PrimaryGeneratedColumn()
  code: number;

  @ManyToOne(() => Sale, (sale: Sale) => sale.saleGood)
  @JoinColumn({ name: 'saleCode' })
  sale: Sale;

  @Column()
  saleCode!: number;

  @ManyToOne(() => Good, (good: Good) => good.saleGood, { cascade: true })
  @JoinColumn({ name: 'goodCode' })
  good: Good;

  @Column()
  goodCode!: number;

  @Column()
  quantity!: number;
}
