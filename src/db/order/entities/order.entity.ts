import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  OneToMany, CreateDateColumn,
} from 'typeorm';
import { Client } from '../../client/entities/client.entity';
import { Employee } from '../../employee/entities/employee.entity';
import { OrderGood } from '../../order_good/entities/order_good.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  code: number;

  @ManyToOne(() => Client, (client: Client) => client.order)
  @JoinColumn({ name: 'clientCode' })
  client: Client;

  @Column()
  clientCode!: number;

  @ManyToOne(() => Employee, (employee: Employee) => employee.order)
  @JoinColumn({ name: 'employeeCode' })
  employee: Employee;

  @Column()
  employeeCode!: number;

  @OneToMany(() => OrderGood, (orderGood: OrderGood) => orderGood.order, {
    cascade: true,
  })
  orderGood: OrderGood;

  @CreateDateColumn()
  date!: Date;

  @Column({ default: false })
  isReady!: boolean;
}
