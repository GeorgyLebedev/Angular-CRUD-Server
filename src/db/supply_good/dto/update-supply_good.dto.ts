import { PartialType } from '@nestjs/mapped-types';
import { CreateSupplyGoodDto } from './create-supply_good.dto';

export class UpdateSupplyGoodDto extends PartialType(CreateSupplyGoodDto) {}
