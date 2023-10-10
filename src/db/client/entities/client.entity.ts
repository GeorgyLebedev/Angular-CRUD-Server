import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Order } from '../../order/entities/order.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  code!: number;

  @OneToMany(() => Order, (order: Order) => order.client, { cascade: true })
  order: Order;

  @Column({ length: 30 })
  firstName!: string;

  @Column({ length: 30 })
  lastName!: string;

  @Column({ type: 'char', length: 1 })
  gender!: string;

  @Column({ type: 'char', length: 11, unique: true })
  phoneNumber!: string;

  @Column({ length: 255, default: null })
  email: string;
}
