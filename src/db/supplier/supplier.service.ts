import {Injectable} from '@nestjs/common';
import {CreateSupplierDto} from './dto/create-supplier.dto';
import {UpdateSupplierDto} from './dto/update-supplier.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Supplier} from "./entities/supplier.entity";

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier) private readonly supplierRepository: Repository<Supplier>,
  ) {
  }
  async create(createSupplierDto: CreateSupplierDto) {
    try {
      return await this.supplierRepository.save(createSupplierDto)
    } catch (e: any) {
      return e.message;
    }
  }

  async findAll() {
    return (await this.supplierRepository.find()).length > 0 ?
      await this.supplierRepository.find() :
      this.supplierRepository.metadata.columns.map((column) => column.databaseName)
  }

  findOne(id: number) {
    return `This action returns a #${id} supplier`;
  }

  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return this.supplierRepository.update(id, updateSupplierDto)
  }

  async remove(id: number) {
    return await this.supplierRepository.delete(id)
  }
}
