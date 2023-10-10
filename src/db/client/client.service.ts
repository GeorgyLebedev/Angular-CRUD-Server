import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Client} from "./entities/client.entity";

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client) private readonly clientRepository: Repository<Client>,
  ) {}
  async create(createClientDto: CreateClientDto) {
    try{
      return await this.clientRepository.save(createClientDto)
    }
    catch(e:any){
      return e.message;
    }
  }

  async findAll() {
    return (await this.clientRepository.find()).length>0?
      await this.clientRepository.find():
      this.clientRepository.metadata.columns.map((column) => column.databaseName)
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    return await this.clientRepository.update(id, updateClientDto)
  }

  async remove(id: number) {
    return await this.clientRepository.delete(id)
  }
}
