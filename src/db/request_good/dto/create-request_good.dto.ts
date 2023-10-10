import {IsNumber} from "class-validator";
export class CreateRequestGoodDto {
  @IsNumber({},{message: 'Некорректное поле: requestCode!'})
  requestCode:number

  @IsNumber({},{message: 'Некорректное поле: goodCode!'})
  goodCode:number

  @IsNumber({},{message: 'Некорректное поле: quantity!'})
  quantity:number
}
