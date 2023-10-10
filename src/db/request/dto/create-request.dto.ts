import {IsNumber, IsOptional} from "class-validator";

export class CreateRequestDto {
  @IsOptional()
  isComplete!: boolean

  @IsNumber({},{message:'Некорректное поле: employeeCode!'})
  employeeCode:number

  @IsNumber({},{message:'Некорректное поле: supplierCode!'})
  supplierCode:number
}
