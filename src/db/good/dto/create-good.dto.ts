import {Manufacturer} from "../../manufacturer/entities/manufacturer.entity";
import {IsOptional, IsString} from "class-validator";

export class CreateGoodDto {
  manufacturer!: Manufacturer

  @IsString({message: 'Некорректное поле: naming!'})
  naming!: string

  @IsString({message: 'Некорректное поле: description!'})
  description!: string

  @IsString({message: 'Некорректное поле: price!'})
  price!:string

  @IsOptional()
  @IsString({message: 'Некорректное поле: photo!'})
  photo:string
}
