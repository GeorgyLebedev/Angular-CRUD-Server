import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Request} from "./entities/request.entity";
import {iCondition} from "../../interfaces/iCondition";
import {findAllWithConditions} from "../../services/QueryHelper";

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request) private readonly requestRepository: Repository<Request>,
  ) {}
  async create(createRequestDto: CreateRequestDto) {
    try{
      return await this.requestRepository.save(createRequestDto)
    }
    catch(e:any){
      return e.message;
    }
  }

  async findAll() {
    return (await this.requestRepository.find()).length>0?
      await this.requestRepository.find():
      this.requestRepository.metadata.columns.map((column) => column.databaseName)
  }

  async findWithCondition(params: iCondition) {
    return await findAllWithConditions(this.requestRepository, params)
  }

  async update(id: number, updateRequestDto: UpdateRequestDto) {
    return await this.requestRepository.update(id, updateRequestDto)
  }

  async remove(id: number) {
    return await this.requestRepository.delete(id)
  }
}
