import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  OneToMany, CreateDateColumn,
} from 'typeorm';
import { Supplier } from '../../supplier/entities/supplier.entity';
import { Employee } from '../../employee/entities/employee.entity';
import { RequestGood } from '../../request_good/entities/request_good.entity';

@Entity()
export class Request {
  @PrimaryGeneratedColumn()
  code: number;

  @ManyToOne(() => Employee, (user: Employee) => user.request)
  @JoinColumn({ name: 'employeeCode' })
  employee: Employee;

  @Column()
  employeeCode!: number;

  @ManyToOne(() => Supplier, (supplier: Supplier) => supplier.request)
  @JoinColumn({ name: 'supplierCode' })
  supplier: Supplier;

  @Column()
  supplierCode!: number;

  @OneToMany(
    () => RequestGood,
    (requestGood: RequestGood) => requestGood.request,
    { cascade: true },
  )
  requestGood: RequestGood;

  @CreateDateColumn()
  date!: Date;

  @Column({ default: false })
  isComplete!: boolean;
}
