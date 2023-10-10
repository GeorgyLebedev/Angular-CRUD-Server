import { Injectable } from '@nestjs/common';
import { CreateRequestGoodDto } from './dto/create-request_good.dto';
import { UpdateRequestGoodDto } from './dto/update-request_good.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {RequestGood} from "./entities/request_good.entity";

@Injectable()
export class RequestGoodService {
  constructor(
    @InjectRepository(RequestGood) private readonly requestGoodRepository: Repository<RequestGood>,
  ) {}
  async create(createRequestGoodDto: CreateRequestGoodDto) {
    try{
      return await this.requestGoodRepository.save(createRequestGoodDto)
    }
    catch(e:any){
      return e.message;
    }
  }

  async findAll() {
    return (await this.requestGoodRepository.find()).length>0?
      await this.requestGoodRepository.find():
      this.requestGoodRepository.metadata.columns.map((column) => column.databaseName)
  }

  findOne(id: number) {
    return `This action returns a #${id} requestGood`;
  }

  async update(id: number, updateRequestGoodDto: UpdateRequestGoodDto) {
    return await this.requestGoodRepository.update(id, updateRequestGoodDto)
  }

  async remove(id: number) {
    return await this.requestGoodRepository.delete(id)
  }
}
