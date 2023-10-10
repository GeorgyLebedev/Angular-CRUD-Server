import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderGoodDto } from './create-order_good.dto';

export class UpdateOrderGoodDto extends PartialType(CreateOrderGoodDto) {}
