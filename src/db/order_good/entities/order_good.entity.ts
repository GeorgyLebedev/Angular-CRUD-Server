import {
  Check,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from '../../order/entities/order.entity';
import { Good } from '../../good/entities/good.entity';
@Check('quantity>0')
@Entity()
export class OrderGood {
  @PrimaryGeneratedColumn()
  code: number;

  @ManyToOne(() => Order, (order: Order) => order.orderGood)
  @JoinColumn({ name: 'orderCode' })
  order: Order;

  @Column()
  orderCode!: number;

  @ManyToOne(() => Good, (good: Good) => good.orderGood, { cascade: true })
  @JoinColumn({ name: 'goodCode' })
  good: Good;

  @Column()
  goodCode!: number;

  @Column()
  quantity!: number;
}
