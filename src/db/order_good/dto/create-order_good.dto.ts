import {IsNumber} from "class-validator";

export class CreateOrderGoodDto {
  @IsNumber({},{message: 'Некорректное поле: orderCode!'})
  orderCode:number

  @IsNumber({},{message: 'Некорректное поле: goodCode!'})
  goodCode:number

  @IsNumber({},{message: 'Некорректное поле: quantity!'})
  quantity:number
}
