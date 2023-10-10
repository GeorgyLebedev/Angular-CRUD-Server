import {Injectable} from '@nestjs/common';
import {CreateSaleDto} from './dto/create-sale.dto';
import {UpdateSaleDto} from './dto/update-sale.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Sale} from "./entities/sale.entity";

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale) private readonly saleRepository: Repository<Sale>,
  ) {
  }
  async create(createSaleDto: CreateSaleDto) {
    try {
      return await this.saleRepository.save(createSaleDto)
    } catch (e: any) {
      return e.message;
    }
  }

  async findAll() {
    return (await this.saleRepository.find()).length > 0 ?
      await this.saleRepository.find() :
      this.saleRepository.metadata.columns.map((column) => column.databaseName)
  }

  findOne(id: number) {
    return `This action returns a #${id} sale`;
  }

  async update(id: number, updateSaleDto: UpdateSaleDto) {
    return await this.saleRepository.update(id, updateSaleDto)
  }

  async remove(id: number) {
    return await this.saleRepository.delete(id)
  }
}
