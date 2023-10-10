import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne, OneToMany,
} from 'typeorm';
import { Manufacturer } from '../../manufacturer/entities/manufacturer.entity';
import { SupplyGood } from '../../supply_good/entities/supply_good.entity';
import { SaleGood } from '../../sale_good/entities/sale_good.entity';
import { RequestGood } from '../../request_good/entities/request_good.entity';
import { OrderGood } from '../../order_good/entities/order_good.entity';

@Entity()
export class Good {
  @PrimaryGeneratedColumn()
  code!: number;

  @ManyToOne(
    () => Manufacturer,
    (manufacturer: Manufacturer) => manufacturer.good,
    {nullable:false}
  )
  @JoinColumn({ name: 'manufacturerCode' })
  manufacturer: Manufacturer;

  @Column()
  manufacturerCode!: number;

  @OneToMany(() => SupplyGood, (supplyGood: SupplyGood) => supplyGood.good)
  supplyGood: SupplyGood;

  @OneToMany(() => SaleGood, (saleGood: SaleGood) => saleGood.good)
  saleGood: SaleGood;

  @OneToMany(() => RequestGood, (requestGood: RequestGood) => requestGood.good)
  requestGood: RequestGood;

  @OneToMany(() => OrderGood, (orderGood: OrderGood) => orderGood.good)
  orderGood: OrderGood;

  @Column({ unique: true, length: 200 })
  naming!: string;

  @Column()
  description!: string;

  @Column({ type: 'decimal', precision: 14, scale: 2 })
  price!: string;

  @Column({ default: null, type: 'varchar' })
  photo: string;
}
