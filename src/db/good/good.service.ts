import { Injectable } from '@nestjs/common';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Good} from "./entities/good.entity";
import {iCondition}  from "../../interfaces/iCondition";
import {findAllWithConditions} from "../../services/QueryHelper";

@Injectable()
export class GoodService {
  constructor(
    @InjectRepository(Good) private readonly goodRepository: Repository<Good>,
  ) {}
  async create(createGoodDto: CreateGoodDto) {
    try{
      return await this.goodRepository.save(createGoodDto)
    }
    catch(e:any){
      return e.message;
    }
  }

  async findAll() {
    return (await this.goodRepository.find()).length>0?
      await this.goodRepository.find():
      this.goodRepository.metadata.columns.map((column) => column.databaseName)
  }

  async findWithCondition(params: iCondition) {
    return await findAllWithConditions(this.goodRepository, params)
  }
  async update(id: number, updateGoodDto: UpdateGoodDto) {
    return await this.goodRepository.update(id, updateGoodDto)
  }

  async remove(id: number) {
    return await this.goodRepository.delete(id)
  }
}
