import { Injectable } from '@nestjs/common';
import { CreateSupplyGoodDto } from './dto/create-supply_good.dto';
import { UpdateSupplyGoodDto } from './dto/update-supply_good.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {SupplyGood} from "../supply_good/entities/supply_good.entity";
import {Repository} from "typeorm";
import {iCondition}  from "../../interfaces/iCondition";
import {findAllWithConditions} from "../../services/QueryHelper";

@Injectable()
export class SupplyGoodService {
  constructor(
    @InjectRepository(SupplyGood) private readonly supplyGoodRepository: Repository<SupplyGood>,
  ) {}
  async create(createSupplyGoodDto: CreateSupplyGoodDto) {
    try{
      return await this.supplyGoodRepository.save(createSupplyGoodDto)
    }
    catch(e:any){
      return e.message;
    }
  }

  async findAll() {
    return (await this.supplyGoodRepository.find()).length>0?
      await this.supplyGoodRepository.find():
      this.supplyGoodRepository.metadata.columns.map((column) => column.databaseName)
  }


  async findWithCondition(params: iCondition) {
    return await findAllWithConditions(this.supplyGoodRepository, params)
  }

  async update(id: number, updateSupplyGoodDto: UpdateSupplyGoodDto) {
    return await this.supplyGoodRepository.update(id, updateSupplyGoodDto)
  }

  async remove(id: number) {
    return await this.supplyGoodRepository.delete(id)
  }
}
