import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleGoodDto } from './create-sale_good.dto';

export class UpdateSaleGoodDto extends PartialType(CreateSaleGoodDto) {}
