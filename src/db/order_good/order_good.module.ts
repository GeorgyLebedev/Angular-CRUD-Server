import { Module } from '@nestjs/common';
import { OrderGoodService } from './order_good.service';
import { OrderGoodController } from './order_good.controller';
import {OrderGood} from "./entities/order_good.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports:[TypeOrmModule.forFeature([OrderGood])],
  controllers: [OrderGoodController],
  providers: [OrderGoodService],
})
export class OrderGoodModule {}
