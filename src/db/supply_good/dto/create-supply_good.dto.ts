import {IsNumber} from "class-validator";

export class CreateSupplyGoodDto {
  @IsNumber({},{message: 'Некорректное поле: supplyCode!'})
  supplyCode:number

  @IsNumber({},{message: 'Некорректное поле: goodCode!'})
  goodCode:number

  @IsNumber({},{message: 'Некорректное поле: quantity!'})
  quantity:number
}
