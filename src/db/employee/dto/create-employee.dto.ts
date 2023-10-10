import {IsNotEmpty, IsOptional, IsString, MinLength} from "class-validator";

export class CreateEmployeeDto {
  @IsString({message: 'Некорректное поле: login!'})
  @MinLength(8,{message: 'Недостаточная длина поля: login!'})
  login: string;

  @IsString({message: 'Некорректное поле: password!'})
  password: string;

  @IsOptional()
  isAdmin:boolean

  @IsNotEmpty({message: 'Некорректное поле: branchCode!'})
  branchCode:number
}
