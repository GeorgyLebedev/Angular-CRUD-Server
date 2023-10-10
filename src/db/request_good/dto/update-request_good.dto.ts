import { PartialType } from '@nestjs/mapped-types';
import { CreateRequestGoodDto } from './create-request_good.dto';

export class UpdateRequestGoodDto extends PartialType(CreateRequestGoodDto) {}
