import {
  Check,
  Column,
  Entity,
  JoinColumn, ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Good } from '../../good/entities/good.entity';
import { Supply } from '../../supply/entities/supply.entity';

@Check('quantity>0')
@Entity()
export class SupplyGood {
  @PrimaryGeneratedColumn()
  code: number;

  @ManyToOne(() => Supply, (supply: Supply) => supply.supplyGood)
  @JoinColumn({ name: 'supplyCode' })
  supply: Supply;

  @Column()
  supplyCode!:number

  @ManyToOne(() => Good, (good: Good) => good.supplyGood, { cascade: true })
  @JoinColumn({ name: 'goodCode' })
  good: Good;

  @Column()
  goodCode!:number

  @Column()
  quantity!: number;
}
