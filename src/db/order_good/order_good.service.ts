import { Injectable } from '@nestjs/common';
import { CreateOrderGoodDto } from './dto/create-order_good.dto';
import { UpdateOrderGoodDto } from './dto/update-order_good.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {OrderGood} from "./entities/order_good.entity";

@Injectable()
export class OrderGoodService {
  constructor(
    @InjectRepository(OrderGood) private readonly orderGoodRepository: Repository<OrderGood>,
  ) {}
  async create(createOrderGoodDto: CreateOrderGoodDto) {
    try{
      return await this.orderGoodRepository.save(createOrderGoodDto)
    }
    catch(e:any){
      return e.message;
    }
  }

  async findAll() {
    return (await this.orderGoodRepository.find()).length>0?
      await this.orderGoodRepository.find():
      this.orderGoodRepository.metadata.columns.map((column) => column.databaseName)
  }

  findOne(id: number) {
    return `This action returns a #${id} orderGood`;
  }

  async update(id: number, updateOrderGoodDto: UpdateOrderGoodDto) {
    return await this.orderGoodRepository.update(id, updateOrderGoodDto)
  }

  async remove(id: number) {
    return await this.orderGoodRepository.delete(id)
  }
}
