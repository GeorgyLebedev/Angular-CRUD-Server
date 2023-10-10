import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Order} from "../order/entities/order.entity";
import {Repository} from "typeorm";
import {Request} from "./entities/request.entity";

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

  findOne(id: number) {
    return `This action returns a #${id} request`;
  }

  async update(id: number, updateRequestDto: UpdateRequestDto) {
    return await this.requestRepository.update(id, updateRequestDto)
  }

  async remove(id: number) {
    return await this.requestRepository.delete(id)
  }
}
