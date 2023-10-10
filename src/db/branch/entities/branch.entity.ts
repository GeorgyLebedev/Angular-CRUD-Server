import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';
@Entity()
export class Branch {
  @PrimaryGeneratedColumn()
  code!: number;

  @OneToMany(() => Employee, (employee: Employee) => employee.branch, { cascade: true })
  employee: Employee;

  @Column({ length: 75 })
  area!: string;

  @Column({ length: 75 })
  city!: string;

  @Column({ length: 100 })
  street!: string;

  @Column({ length: 10 })
  building!: string;

  @Column({ default: null, length: 10 })
  room: string;

  @Column({ type: 'char', length: 11 })
  phoneNumber!: string;
}
