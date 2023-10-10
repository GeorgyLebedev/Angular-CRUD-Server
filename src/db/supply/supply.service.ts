import { Injectable } from '@nestjs/common';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { UpdateSupplyDto } from './dto/update-supply.dto';
import {InjectRepository} from "@nestjs/typeorm";

import {Repository} from "typeorm";
import {Supply} from "./entities/supply.entity";

@Injectable()
export class SupplyService {
  constructor(
    @InjectRepository(Supply) private readonly supplyRepository: Repository<Supply>,
  ) {}
  async create(createSupplyDto: CreateSupplyDto) {
    try{
      return await this.supplyRepository.save(createSupplyDto)
    }
    catch(e:any){
      return e.message;
    }
  }

  async findAll() {
    return (await this.supplyRepository.find()).length>0?
      await this.supplyRepository.find():
      this.supplyRepository.metadata.columns.map((column) => column.databaseName)
  }

  findOne(id: number) {
    return `This action returns a #${id} supply`;
  }

  async update(id: number, updateSupplyDto: UpdateSupplyDto) {
    return await this.supplyRepository.update(id, updateSupplyDto)
  }

  async remove(id: number) {
    return await this.supplyRepository.delete(id)
  }
}
