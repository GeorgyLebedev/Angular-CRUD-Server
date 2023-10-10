import { Injectable } from '@nestjs/common';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Branch} from "./entities/branch.entity";

@Injectable()
export class BranchService {
  constructor(
    @InjectRepository(Branch) private readonly branchRepository: Repository<Branch>,
  ) {}
  async create(createBranchDto: CreateBranchDto) {
    try{
      return await this.branchRepository.save(createBranchDto)
    }
    catch(e:any){
      return e.message;
    }
  }

  async findAll() {
    return (await this.branchRepository.find()).length>0?
      await this.branchRepository.find():
      this.branchRepository.metadata.columns.map((column) => column.databaseName)
  }

  findOne(id: number) {
    return `This action returns a #${id} branch`;
  }

  async update(id: number, updateBranchDto: UpdateBranchDto) {
    return await this.branchRepository.update(id, updateBranchDto)
  }

  async remove(id: number) {
    return await this.branchRepository.delete(id)
  }
}
