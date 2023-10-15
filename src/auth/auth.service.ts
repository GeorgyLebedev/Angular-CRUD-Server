import {EmployeeService} from "../db/employee/employee.service";
import * as argon2 from 'argon2'
import {Injectable, UnauthorizedException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {IEmployee} from "../types/types";
@Injectable()
export class AuthService{
  constructor(private readonly employeeService: EmployeeService, private readonly jwtService:JwtService) {}

  async validateUser(login: string, password: string): Promise<any> {
    const employee = await this.employeeService.findOne(login);
    const isPasswordMatch=employee?await argon2.verify(employee.password, password):false
    if (employee && isPasswordMatch) {
      return employee;
    }
    else
    throw new UnauthorizedException('Некорректный логин или пароль')
  }

  async login(employee: IEmployee) {
    const {code, login}=employee
    return {
      code, login, token: this.jwtService.sign( { code: code, login: login }),
    };
  }
}
