import {IsNumber} from "class-validator";

export class CreateSaleDto {
  @IsNumber({},{message:'Некорректное поле: employeeCode!'})
  employeeCode:number

}
