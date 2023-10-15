import {BadRequestException, Injectable} from '@nestjs/common';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from './dto/update-manufacturer.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Manufacturer} from "./entities/manufacturer.entity";
import {validate} from "class-validator";
import {iCondition}  from "../../interfaces/iCondition";
import {findAllWithConditions} from "../../services/QueryHelper";

@Injectable()
export class ManufacturerService {
  constructor(
    @InjectRepository(Manufacturer) private readonly manufacturerRepository: Repository<Manufacturer>,
  ) {}
  async create(createManufacturerDto: CreateManufacturerDto) {
    try{
      const errors=await validate(createManufacturerDto)
      if(errors.length>0)
        return new BadRequestException({
          property:errors[0].property,
          message: errors[0].constraints[Object.keys(errors[0].constraints)[0]],
        })
      else
      return await this.manufacturerRepository.save(createManufacturerDto)
    }
    catch(e:any){
      return e.message;
    }
  }

  async findAll() {
    return (await this.manufacturerRepository.find()).length>0?
      await this.manufacturerRepository.find():
      this.manufacturerRepository.metadata.columns.map((column) => column.databaseName)
  }

  async findWithCondition(params: iCondition) {
    return await findAllWithConditions(this.manufacturerRepository, params)
  }

  async update(id: number, updateManufacturerDto: UpdateManufacturerDto) {
    return await this.manufacturerRepository.update(id, updateManufacturerDto)
  }

  async remove(id: number) {
    return await this.manufacturerRepository.delete(id)
  }
}
