import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn, Column,
} from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';
import { Supplier } from '../../supplier/entities/supplier.entity';
import { SupplyGood } from '../../supply_good/entities/supply_good.entity';

@Entity()
export class Supply {
  @PrimaryGeneratedColumn()
  code: number;

  @ManyToOne(() => Employee, (employee: Employee) => employee.supply)
  @JoinColumn({ name: 'employeeCode' })
  employee: Employee;

  @Column()
  employeeCode!: number;

  @ManyToOne(() => Supplier, (supplier: Supplier) => supplier.supply)
  @JoinColumn({ name: 'supplierCode' })
  supplier: Supplier;

  @Column()
  supplierCode!: number;

  @OneToMany(() => SupplyGood, (supplyGood: SupplyGood) => supplyGood.supply, { cascade: true })
  supplyGood: SupplyGood;

  @CreateDateColumn()
  date!: Date;
}
