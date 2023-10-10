import {IsNumber} from "class-validator";

export class CreateSupplyDto {
  @IsNumber({},{message:'Некорректное поле: employeeCode!'})
  employeeCode:number

  @IsNumber({},{message:'Некорректное поле: supplierCode!'})
  supplierCode:number
}
