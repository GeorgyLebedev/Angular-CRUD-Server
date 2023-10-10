import { Module } from '@nestjs/common';
import { SupplyGoodService } from './supply_good.service';
import { SupplyGoodController } from './supply_good.controller';
import {SupplyGood} from "./entities/supply_good.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports:[TypeOrmModule.forFeature([SupplyGood])],
  controllers: [SupplyGoodController],
  providers: [SupplyGoodService],
})
export class SupplyGoodModule {}
