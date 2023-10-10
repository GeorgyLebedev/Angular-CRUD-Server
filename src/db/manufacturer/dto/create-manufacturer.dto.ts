import {IsString, MinLength} from "class-validator";

export class CreateManufacturerDto {
  @IsString( {message: 'Некорректное поле: naming!'})
  naming: string

  @IsString( {message: 'Некорректное поле: city!'})
  city: string

  @IsString()
  @MinLength(13,{message:'Поле OGRN должно содержать ровно 13 символов!'})
  OGRN: string

  @IsString()
  @MinLength(10, {message:'Поле INN должно содержать ровно 10 символов!'})
  INN: string

  @IsString()
  @MinLength(9,{message:'Поле KPP должно содержать ровно 9 символов!'})
  KPP: string
}
