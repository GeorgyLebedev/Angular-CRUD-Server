import {IsNumber, IsOptional} from "class-validator";

export class CreateOrderDto {
  @IsOptional()
  isReady!: boolean

  @IsNumber({},{message:'Некорректное поле: employeeCode!'})
  employeeCode:number

  @IsNumber({},{message:'Некорректное поле: clientCode!'})
  clientCode:number
}
