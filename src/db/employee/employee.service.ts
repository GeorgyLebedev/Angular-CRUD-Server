import {Injectable} from '@nestjs/common';
import {CreateEmployeeDto} from './dto/create-employee.dto';
import {UpdateEmployeeDto} from './dto/update-employee.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {Employee} from './entities/employee.entity';
import {Repository} from 'typeorm';
import * as argon2 from 'argon2';
import {iCondition} from "../../interfaces/iCondition";
import {findAllWithConditions} from "../../services/QueryHelper";

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee) private readonly employeeRepository: Repository<Employee>,
  ) {
  }

  async create(createEmployeeDto: CreateEmployeeDto) {
    return await this.employeeRepository.save({
      login: createEmployeeDto.login,
      password: await argon2.hash(createEmployeeDto.password),
      isAdmin: createEmployeeDto.isAdmin,
      branchCode: createEmployeeDto.branchCode
    });
  }

  async findAll() {
    return (await this.employeeRepository.find()).length > 0 ?
      await this.employeeRepository.find() :
      this.employeeRepository.metadata.columns.map((column) => column.databaseName)
  }

  async findWithCondition(params: iCondition) {
    return await findAllWithConditions(this.employeeRepository, params)
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    if (updateEmployeeDto.password) {
      updateEmployeeDto.password = await argon2.hash(updateEmployeeDto.password)
    }
    return await this.employeeRepository.update(id, updateEmployeeDto)
  }

  async findOne(login: string): Promise<Employee | undefined> {
    return await this.employeeRepository.findOne({
      where: {login: login}
    });
  }

  async remove(id: number) {
    return await this.employeeRepository.delete(id)
  }
}
