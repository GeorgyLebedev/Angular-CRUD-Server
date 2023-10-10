import {IsEmail, IsIn, IsOptional, IsPhoneNumber, IsString, MinLength} from "class-validator";

export class CreateClientDto {
  @IsString({message: 'Некорректное поле: firstName!'})
  firstName: string

  @IsString({message: 'Некорректное поле: lastName!'})
  lastName: string

  @IsIn(['м', 'ж'],{message: 'Поле "gender" пусто!'})
  gender: string

  @IsString()
  @IsPhoneNumber('RU',{message: 'Некорректное поле: phoneNumber!'})
  @MinLength(11,{message: 'Недостаточная длина поля: phoneNumber!'})
  phoneNumber: string

  @IsOptional()
  @IsString()
  @IsEmail({},{message: 'Некорректное поле: email!'})
  email?:string
}
