import {IsNumber} from "class-validator";

export class CreateSaleGoodDto {
  @IsNumber({},{message: 'Некорректное поле: saleCode!'})
  saleCode:number

  @IsNumber({},{message: 'Некорректное поле: goodCode!'})
  goodCode:number

  @IsNumber({},{message: 'Некорректное поле: quantity!'})
  quantity:number
}
