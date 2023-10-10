import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';

import {Order} from '../../order/entities/order.entity';
import {Sale} from '../../sale/entities/sale.entity';
import {Request} from '../../request/entities/request.entity';
import {Branch} from '../../branch/entities/branch.entity';
import {Supply} from "../../supply/entities/supply.entity";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  code!: number;

  @OneToMany(() => Order, (order: Order) => order.employee, {cascade: true})
  order: Order;

  @OneToMany(() => Sale, (sale: Sale) => sale.employee, {cascade: true})
  sale: Sale;

  @OneToMany(() => Request, (request: Request) => request.employee, {
    cascade: true,
  })
  request: Request;

  @OneToMany(() => Supply, (supply: Supply) => supply.employee, {cascade: true})
  @JoinColumn()
  supply: Supply;

  @ManyToOne(() => Branch, (branch: Branch) => branch.employee, {nullable: false})
  @JoinColumn({name: 'branchCode'})
  branch: Branch;

  @Column()
  branchCode!: number;

  @Column({length: 50, unique: true})
  login!: string;

  @Column()
  password!: string;

  @Column({default: false})
  isAdmin!: boolean;

  @CreateDateColumn()
  registrationDate!: Date;
}
