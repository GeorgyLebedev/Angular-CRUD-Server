import { Injectable } from '@nestjs/common';
import { CreateSaleGoodDto } from './dto/create-sale_good.dto';
import { UpdateSaleGoodDto } from './dto/update-sale_good.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {SaleGood} from "../sale_good/entities/sale_good.entity";
import {Repository} from "typeorm";
import {iCondition}  from "../../interfaces/iCondition";
import {findAllWithConditions} from "../../services/QueryHelper";

@Injectable()
export class SaleGoodService {
  constructor(
    @InjectRepository(SaleGood) private readonly saleGoodRepository: Repository<SaleGood>,
  ) {}
  async create(createSaleGoodDto: CreateSaleGoodDto) {
    try{
      return await this.saleGoodRepository.save(createSaleGoodDto)
    }
    catch(e:any){
      return e.message;
    }
  }

  async findAll() {
    return (await this.saleGoodRepository.find()).length>0?
      await this.saleGoodRepository.find():
      this.saleGoodRepository.metadata.columns.map((column) => column.databaseName)
  }


  async findWithCondition(params: iCondition) {
    return await findAllWithConditions(this.saleGoodRepository, params)
  }

  async update(id: number, updateSaleGoodDto: UpdateSaleGoodDto) {
    return await this.saleGoodRepository.update(id, updateSaleGoodDto)
  }

  async remove(id: number) {
    return await this.saleGoodRepository.delete(id)
  }
}
