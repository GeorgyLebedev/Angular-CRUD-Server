import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Request } from '../../request/entities/request.entity';
import { Supply } from '../../supply/entities/supply.entity';
@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  code: number;

  @OneToMany(() => Request, (request: Request) => request.supplier, {
    cascade: true,
  })
  @JoinColumn()
  request: Request;

  @OneToMany(() => Supply, (supply: Supply) => supply.supplier, {
    cascade: true,
  })
  @JoinColumn()
  supply: Supply;

  @Column({ length: 200, unique: true })
  naming!: string;

  @Column({ length: 11, type: 'char' })
  phoneNumber!: string;
}
