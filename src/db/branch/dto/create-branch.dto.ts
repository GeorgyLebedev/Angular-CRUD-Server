import {IsPhoneNumber, IsString, MinLength} from "class-validator";

export class CreateBranchDto {
  @IsString({message: 'Некорректное поле: area!'})
  area:string

  @IsString({message: 'Некорректное поле: city!'})
  city:string

  @IsString({message: 'Некорректное поле: street!'})
  street:string

  @IsString({message: 'Некорректное поле: building!'})
  building:string

  room?:string

  @IsString()
  @IsPhoneNumber("RU", {message: 'Некорректное поле: phoneNumber!'})
  @MinLength(11,{message: 'Недостаточная длина поля: phoneNumber!'})
  phoneNumber:string
}
