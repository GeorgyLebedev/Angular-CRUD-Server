import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany, CreateDateColumn, Column,
} from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';
import { SaleGood } from '../../sale_good/entities/sale_good.entity';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  code: number;

  @ManyToOne(() => Employee, (employee: Employee) => employee.sale)
  @JoinColumn({ name: 'employeeCode' })
  employee: Employee;

  @Column()
  employeeCode!: number;

  @OneToMany(() => SaleGood, (saleGood: SaleGood) => saleGood.sale, { cascade: true })
  saleGood: SaleGood;

  @CreateDateColumn()
  date!: Date;

}
