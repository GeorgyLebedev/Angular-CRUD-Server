import {
  Check,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Good } from '../../good/entities/good.entity';
import { Request } from '../../request/entities/request.entity';
@Check('quantity>0')
@Entity()
export class RequestGood {
  @PrimaryGeneratedColumn()
  code: number;

  @ManyToOne(() => Request, (request: Request) => request.requestGood)
  @JoinColumn({ name: 'requestCode' })
  request: Request;

  @Column()
  requestCode!:number

  @ManyToOne(() => Good, (good: Good) => good.requestGood, { cascade: true })
  @JoinColumn({ name: 'goodCode' })
  good: Good;

  @Column()
  goodCode!:number

  @Column()
  quantity!: number;
}
