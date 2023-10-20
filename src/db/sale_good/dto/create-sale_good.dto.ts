import {IsNotEmpty, Min} from "class-validator";

export class CreateSaleGoodDto {
  @IsNotEmpty({message: 'Некорректное поле: saleCode!'})
  saleCode:number

  @IsNotEmpty({message: 'Некорректное поле: goodCode!'})
  goodCode:number

  @IsNotEmpty({message: 'Некорректное поле: quantity!'})
  @Min(1, {message: 'Поле: quantity - значение не может быть меньше 1!'})
  quantity:number
}
