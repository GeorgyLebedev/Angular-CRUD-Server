import { Module } from '@nestjs/common';
import { SaleGoodService } from './sale_good.service';
import { SaleGoodController } from './sale_good.controller';
import {SaleGood} from "./entities/sale_good.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports:[TypeOrmModule.forFeature([SaleGood])],
  controllers: [SaleGoodController],
  providers: [SaleGoodService],
})
export class SaleGoodModule {}
