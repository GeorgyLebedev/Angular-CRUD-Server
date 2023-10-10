import {IsPhoneNumber, IsString, MinLength} from "class-validator";

export class CreateSupplierDto {
  @IsString({message: 'Некорректное поле: naming!'})
  naming:string

  @IsString()
  @IsPhoneNumber('RU',{message: 'Некорректное поле: phoneNumber!'})
  @MinLength(11,{message: 'Недостаточная длина поля: phoneNumber!'})
  phoneNumber: string
}
